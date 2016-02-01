paper.install(window);

function Generator(options) {
  // FIXME:
  var canvas = document.getElementById('myCanvas');
  paper.setup(canvas);

  options = options || {};
  this.proportion = options.proportion || (options.height / options.width) || 1;

  this.weight = options.weight || 20;
  this.contrast = options.contrast || 5;
  this.descender = options.descender || -3;
  this.xshift = options.xshift || 0;
  this.yshift = options.yshift || 0;
  this.italic = options.italic || 0;

  this.size = 10;

  this.alphabet = options.alphabet || new Alphabet(options.xheight, this.descender);
  this.glyphs = [];
  this.opentype = undefined;
}

Generator.prototype.generate = function() {
  this.glyphs = {};
  var availableGlyphs = this.alphabet.availableGlyphs();

  for (var i = 0; i < availableGlyphs.length; i++) {
    var glyph = this.generateGlyph(availableGlyphs[i], this.alphabet.glyphs[availableGlyphs[i]]);
    this.glyphs[glyph.name] = glyph;
  }
};

Generator.prototype.mergeGlyphsWith = function(path, list) {
  if (!list) {
    list = this.alphabet.availableGlyphs();
  } else if (!Array.isArray(list)) {
    list = list.split("");
  }

  for (var i = 0; i < list.length; i++) {
    this.glyphs[list[i]].path = this.glyphs[list[i]].path.unite(path);
  }
};

Generator.prototype.getGlyph = function(name) {
  if (this.glyphs[name]) {
    return this.glyphs[name];
  } else {
    console.log('glyph not defined');
    return false;
  }
};

function Glyph(name, weight, contrast, proportion) {
  this.name = name;
  this.weight = weight;
  this.contrast = contrast;
  this.proportion = proportion;

  this.path = undefined;
  this.width = 0;
}

Generator.prototype.adjustPoint = function (point) {
  return new Point(point)
    .multiply([this.size / this.proportion, this.size - (this.contrast * 2 / this.size)])
    .add(this.weight, this.contrast)
    .multiply(1, -1)
    .add(this.xshift, this.yshift);
};

Generator.prototype.generateGlyph = function(name, points) {
  var glyph = new Glyph(name, this.weight, this.contrast, this.proportion);

  var segments = [];
  var box = new Point(glyph.weight, glyph.contrast);

  for (var i = 0; i < points.length - 1; i++) {
    var path = new Path();

    var p1 = this.adjustPoint(points[i]);
    var p2 = this.adjustPoint(points[i + 1]);

    var vector = p2.subtract(p1);
    var x = sign(vector.x);
    var y = sign(vector.y);

    var b;
    if (i !== 0 && points[i - 1][2] !== 'e' || vector.angle % 90 === 0) {
      b = p1.add(box.multiply([x * -1, y]));
      b = b.add(b.y * -1 * this.italic, 0);
      path.add(b);
    }

    b = p1.add(box.multiply([x * -1, y * -1]));
    b = b.add(b.y * -1 * this.italic, 0);
    path.add(b);

    b = p1.add(box.multiply([x, y * -1]));
    b = b.add(b.y * -1 * this.italic, 0);
    path.add(b);

    if (i + 1 !== points.length - 1 && points[i + 1][2] !== 'e' || vector.angle % 90 === 0) {
      b = p2.add(box.multiply([x, y * -1]));
      b = b.add(b.y * -1 * this.italic, 0);
      path.add(b);
    }

    b = p2.add(box.multiply([x, y]));
    b = b.add(b.y * -1 * this.italic, 0);
    path.add(b);

    b = p2.add(box.multiply([x * -1, y]));
    b = b.add(b.y * -1 * this.italic, 0);
    path.add(b);


    // FIXME: round edges
    // var c = new Path.Circle({
    //   center: [0, 0],
    //   radius: this.weight
    // });
    //
    // c.rotate(vector.angle);
    // c.position = p1;
    // path.add(c.segments[3]);
    // path.add(c.segments[0]);
    // path.add(c.segments[1]);
    //
    // c.position = p2;
    // path.add(c.segments[1]);
    // path.add(c.segments[2]);
    // path.add(c.segments[3]);

    path.reduce();
    path.closed = true;

    segments.push(path);

    if (p1.x + glyph.weight > glyph.width)
      glyph.width = p1.x + glyph.weight;

    // FIXME: add last point
    if (p2.x + glyph.weight > glyph.width)
      glyph.width = p2.x + glyph.weight;

    if (points[i + 1][2] == 'e') {
      i++;
    }
  }
  glyph.path = glyph.mergeSegments(segments);
  glyph.path.reduce();

  return glyph;
};

function drawOpentypePath(path) {
  var resultPath = new opentype.Path(),
    paths = path.children || [path];

  for (var j = 0; j < paths.length; j++) {
    // FIXME: y * -1, * 10
    resultPath.moveTo(Math.round(paths[j].curves[0].point1.x * 10), Math.round(paths[j].curves[0].point1.y * -10));
    for (i = 0; i < paths[j].curves.length; i++) {
      var curve = paths[j].curves[i];

      var x1 = Math.round(curve.point1.x * 10);
      var y1 = Math.round(curve.point1.y * -10);
      var x2 = Math.round(curve.point2.x * 10);
      var y2 = Math.round(curve.point2.y * -10);
      var hx1 = curve.handle1.x * 10;
      var hy1 = curve.handle1.y * -10;
      var hx2 = curve.handle2.x * 10;
      var hy2 = curve.handle2.y * -10;

      if (hx1 + hy1 + hx2 + hy2 === 0)
        resultPath.lineTo(x2, y2);
      else
        resultPath.curveTo(x1 + hx1, y1 + hy1, x2 + hx2, y2 + hy2, x2, y2);
    }
  }

  return resultPath;
}

Generator.prototype.exportOpentype = function() {
  var opentypeGlyphs = [];

  if (!this.glyphs['.notdef']) {
    var notdefPath = new opentype.Path();
    notdefPath.moveTo(100, 0);
    notdefPath.lineTo(100, 700);
    notdefPath.lineTo(600, 700);
    notdefPath.lineTo(600, 0);
    notdefPath.moveTo(200, 100);
    notdefPath.lineTo(500, 100);
    notdefPath.lineTo(500, 600);
    notdefPath.lineTo(200, 600);
    opentypeGlyphs.push(new opentype.Glyph({
      name: '.notdef',
      unicode: 0,
      advanceWidth: 650,
      path: notdefPath
    }));
  }

  for (var x in this.glyphs) {
    var glyph = this.glyphs[x];

    var path = drawOpentypePath(glyph.path);

    if (path.commands.length !== 0) {
      var unicode;
      if (glyph.name == '.notdef') {
        unicode = 0;
      } else {
        unicode = glyph.name.charCodeAt();
      }
      opentypeGlyphs.push(new opentype.Glyph({
        name: glyph.name,
        unicode: unicode,
        advanceWidth: glyph.width * 10 + 100,
        path: path
      }));
    }
  }

  opentypeGlyphs.push(new opentype.Glyph({
    name: 'space',
    unicode: 32,
    advanceWidth: 1000,
    path: new opentype.Path()
  }));

  this.font = new opentype.Font({
    familyName: 'GlypherStandart',
    styleName: 'Medium',
    unitsPerEm: 1000,
    ascender: 1000,
    descender: this.descender * 150,
    glyphs: opentypeGlyphs
  });

  var buffer = this.font.toArrayBuffer();
  var font2 = opentype.parse(buffer);

  //debugging

  for (var i = 0; i < font2.glyphs.length; i++) {
    var g = font2.glyphs.get(i);
    var ctx = createGlyphCanvas(g, 150);
    var x = 20;
    var y = 120;
    var fontSize = 72;
    g.draw(ctx, x, y, fontSize);
    // g.drawPoints(ctx, x, y, fontSize);
    g.drawMetrics(ctx, x, y, fontSize);
  }

  function createGlyphCanvas(glyph, size) {
    var canvasId, html, glyphsDiv, wrap, canvas, ctx;
    canvasId = 'glyph_' + glyph.name;
    html = '<canvas id="' + canvasId + '" width="' + size + '" height="' + size + '"></canvas>';
    glyphsDiv = document.getElementById('glyphs');
    wrap = document.createElement('span');
    wrap.innerHTML = html;
    glyphsDiv.appendChild(wrap);
    canvas = document.getElementById(canvasId);
    ctx = canvas.getContext('2d');
    return ctx;
  }
};

Glyph.prototype.mergeSegments = function(segments) {

  var result = segments[0].clone();
  for (i = 1; i < segments.length; i++) {
    result = result.unite(segments[i]);
  }

  return result;
};

//DEBUG
Glyph.prototype.draw = function(x, y) {
  //debugging
  new Path.Circle({
    center: [x, y],
    radius: 3,
    strokeColor: 'blue'
  });
  new Path.Circle({
    center: [x + this.width, y],
    radius: 3,
    strokeColor: 'blue'
  });

  var path = this.path.clone();
  path.position = [x + path.position.x, y + path.position.y];
  path.strokeColor = 'black';
};

function sign(x) {
  // 0 == 1
  return x >= 0 ? 1 : -1;
}
