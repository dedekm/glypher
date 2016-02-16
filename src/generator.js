function Generator(options) {
  options = options || {};
  this.type = options.type || 'brush';
  this.proportion = options.proportion || (options.height / options.width) || 1.5;

  this.weight = options.weight || (this.type == 'brush' ? 200 : 50);
  this.contrast = this.type == 'brush' ? (options.contrast || 50) : this.weight;
  this.descender = options.descender || -30;
  this.xshift = options.xshift || 0;
  this.yshift = options.yshift || 0;
  this.italic = options.italic || 0;
  this.segmentReduction = options.segmentReduction;
  this.smooth = options.smooth;

  this.size = 80;

  var alphabetOptions = {
    type: this.type,
    weight: this.weight,
    contrast: this.contrast,
    descender: this.descender,
    proportion: this.proportion,
    xheight: options.xheight || 7
  };

  this.alphabet = options.alphabet || new glypher.Alphabet(alphabetOptions);
  this.glyphs = [];
  this.opentype = undefined;
}

Generator.prototype.generate = function() {
  this.glyphs = {};
  var availableGlyphs = this.alphabet.availableGlyphs(),
    glyph;

  for (var i = 0; i < availableGlyphs.length; i++) {
    this.beforeGenerateGlyph(availableGlyphs[i]);
    if (this.type == 'stroke')
      glyph = this.generateGlyph2(availableGlyphs[i], this.alphabet.glyphs[availableGlyphs[i]]);
    else
      glyph = this.generateGlyph(availableGlyphs[i], this.alphabet.glyphs[availableGlyphs[i]]);
    this.afterGenerateGlyph(glyph);
    this.glyphs[glyph.name] = glyph;
  }

  // var accent = 'acute';
  // availableGlyphs = 'aeiouyAEIOUY';
  // for (i = 0; i < availableGlyphs.length; i++) {
  //   this.beforeGenerateGlyph(availableGlyphs[i]);
  //   if (this.type == 'stroke')
  //     glyph = this.generateGlyphWithAccent2(availableGlyphs[i], accent);
  //   else
  //     glyph = this.generateGlyphWithAccent(availableGlyphs[i], accent);
  //   this.afterGenerateGlyph(glyph);
  //   this.glyphs[glyph.name] = glyph;
  // }
  //   // FIXME: dcaron tcaron
  //   accent = 'caron';
  //   availableGlyphs = 'cenrszCDENRSTZ';
  //   for (i = 0; i < availableGlyphs.length; i++) {
  //     this.beforeGenerateGlyph(availableGlyphs[i]);
  //     if (this.type == 'stroke')
  //       glyph = this.generateGlyphWithAccent2(availableGlyphs[i], accent);
  //     else
  //       glyph = this.generateGlyphWithAccent(availableGlyphs[i], accent);
  //     this.afterGenerateGlyph(glyph);
  //     this.glyphs[glyph.name] = glyph;
  //   }
  //
  //   accent = 'ring';
  //   availableGlyphs = 'uU';
  //   for (i = 0; i < availableGlyphs.length; i++) {
  //     this.beforeGenerateGlyph(availableGlyphs[i]);
  //     if (this.type == 'stroke')
  //       glyph = this.generateGlyphWithAccent2(availableGlyphs[i], accent);
  //     else
  //       glyph = this.generateGlyphWithAccent(availableGlyphs[i], accent);
  //     this.afterGenerateGlyph(glyph);
  //     this.glyphs[glyph.name] = glyph;
  //   }
};

Generator.prototype.getGlyph = function(name) {
  if (this.glyphs[name]) {
    return this.glyphs[name];
  } else {
    console.log('glyph ' + name + ' not defined');
    return this.glyphs['.notdef'];
  }
};

Generator.prototype.adjustPoint = function(point) {
  return new Point(point)
    .multiply([this.size / this.proportion, this.size - (this.contrast * 2 / this.size)])
    .add(this.weight, this.contrast)
    .add(this.xshift, this.yshift);
};

Generator.prototype.drawDot = function(point, box) {
  var p1 = this.adjustPoint(point);
  return new Path.Rectangle(p1.subtract(box), p1.add(box));
};

Generator.prototype.beforeGenerateGlyph = function(name) {

};

Generator.prototype.afterGenerateGlyph = function(glyph) {

};

Generator.prototype.generateGlyph = function(name, points) {
  points = points || this.alphabet.glyphs[name];
  var glyph = new glypher.Glyph(name, this.weight, this.contrast, this.proportion);

  var segments = [];
  var box = new Point(glyph.weight, glyph.contrast);
  var startPoint;

  for (var i = 0; i < points.length; i++) {
    //WIP
    if (points[i][2] == 'dot') {
      segments.push(this.drawDot(points[i], box));
      continue;
    }

    if (i >= points.length - 1)
      break;

    var path = new Path();

    var p1 = this.adjustPoint(points[i]);
    var p2 = this.adjustPoint(points[i + 1]);

    if (points[i + 1][2] == 'c') {
      p2 = startPoint;
    } else {
      p2 = this.adjustPoint(points[i + 1]);
      startPoint = startPoint || p1;
    }

    var vector = p2.subtract(p1);
    var x = sign(vector.x);
    var y = sign(vector.y);

    // WIP
    if (this.segmentReduction) {
      vector.length -= this.segmentReduction * 5;
      p2 = p1.add(vector);
      var vector2 = p1.subtract(p2);
      vector2.length -= this.segmentReduction * 5;
      p1 = p2.add(vector2);
    }

    var b;
    if (i !== 0 && points[i - 1][2] !== 'e' || vector.angle % 90 === 0) {
      b = p1.add(box.multiply([x * -1, y]));
      b = b.add(b.y * -1 * this.italic, 0);
      path.add(b);
    }

    b = p1.add(box.multiply([x * -1, y * -1]));
    b = b.add(b.y * -1 * this.italic, 0);
    // if (i === 0 || points[i - 1][2] === 'e' && vector.angle % 90 !== 0)
    //   b = b.add(-20, 0);
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
    // if (i + 1 !== points.length - 1 && points[i + 1][2] !== 'e' || vector.angle % 90 === 0) {
    // }else{
    //   var v = p1.subtract(p2);
    //   b = b.add((this.contrast*2)/Math.tan(v.angleInRadians) * -1, 0);
    // }
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

    if (p1.y + glyph.contrast < glyph.height)
      glyph.height = p1.y + glyph.contrast;

    // FIXME: add last point
    if (p2.y + glyph.contrast < glyph.height)
      glyph.height = p2.y + glyph.contrast;

    if (points[i + 1][2] == 'e' || points[i + 1][2] == 'c') {
      i++;
      startPoint = undefined;
    }
  }
  glyph.path = glyph.mergeSegments(segments);
  glyph.path.reduce();

  if (this.smooth)
    glyph.path.smooth({
      type: 'continuous'
    });

  return glyph;
};

//WIP
Generator.prototype.generateGlyph2 = function(name, points) {
  points = points || this.alphabet.glyphs[name];
  var glyph = new glypher.Glyph(name, this.weight, this.contrast, this.proportion);

  var nextAngle,
    corner,
    segments = [
      []
    ],
    cornerPoint3,
    startPoint;

  for (var i = 0; i < points.length; i++) {
    //WIP
    if (points[i][2] == 'dot') {
      segments[segments.length - 1].push(this.adjustPoint(points[i]).add(this.weight, this.weight * -1));
      segments[segments.length - 1].push(this.adjustPoint(points[i]).add(this.weight * -1, this.weight * -1));
      segments[segments.length - 1].push(this.adjustPoint(points[i]).add(this.weight * -1, this.weight));
      segments[segments.length - 1].push(this.adjustPoint(points[i]).add(this.weight));
      segments.push([]);
      continue;
    }

    if (i >= points.length - 1)
      break;

    var point1 = this.adjustPoint(points[i]);
    var point2 = this.adjustPoint(points[i + 1]);

    if (points[i + 1][2] == 'c') {
      point2 = this.adjustPoint(points[startPoint - 1]);
    } else {
      point2 = this.adjustPoint(points[i + 1]);
      startPoint = startPoint || i;
    }

    var previousAngle = nextAngle;

    var vector1 = point2.subtract(point1);
    if (points[i + 2]) {
      var vector2 = this.adjustPoint(points[i + 2]).subtract(point2);
      nextAngle = vector1.rotate(180).getDirectedAngle(vector2);
    }
    var p1, p2, p3, p4;
    if (points[i - 1] && points[i - 1][2] == 'e' || i === 0) {
      p1 = point1.add(this.weight * -1, this.weight).rotate(vector1.angle + 90, point1);
      p2 = point1.add(this.weight, this.weight).rotate(vector1.angle + 90, point1);
    } else {
      p1 = point1.add(this.weight, 0).rotate(vector1.angle - 90, point1);
      p2 = point1.add(this.weight, 0).rotate(vector1.angle + 90, point1);
    }

    if (points[i + 1][2] == 'e' || i === points.length - 2) {
      p3 = point2.add(this.weight * -1, this.weight).rotate(vector1.angle - 90, point2);
      p4 = point2.add(this.weight, this.weight).rotate(vector1.angle - 90, point2);
    } else {
      p3 = point2.add(this.weight, 0).rotate(vector1.angle + 90, point2);
      p4 = point2.add(this.weight, 0).rotate(vector1.angle - 90, point2);
    }

    var cornerPoint,
      cornerPoint2;

    if (points[i - 1] && points[i][2] != 'e' && points[i - 1][2] != 'e' && previousAngle) {
      var previousVector = this.adjustPoint(points[i - 1]).subtract(point1);
      if (previousAngle < 0) {
        cornerPoint = p1;
        // segments[segments.length - 1].push(makeCorner(cornerPoint2, cornerPoint, previousVector, vector1));
        segments[segments.length - 1].splice(0, 0, makeCorner(cornerPoint3, p2, previousVector, vector1));
        //for blunt edges
        segments[segments.length - 1].push(cornerPoint2);
        segments[segments.length - 1].push(cornerPoint);


      } else {
        cornerPoint = p2;
        // segments[segments.length - 1].splice(0, 0, makeCorner(cornerPoint2, cornerPoint, previousVector, vector1));
        segments[segments.length - 1].push(makeCorner(cornerPoint3, p1, previousVector, vector1));
        //for blunt edges
        segments[segments.length - 1].splice(0, 0, cornerPoint2);
        segments[segments.length - 1].splice(0, 0, cornerPoint);


      }
    }

    if (nextAngle) {

      if (nextAngle < 0) {
        cornerPoint2 = p4;
        cornerPoint3 = p3;
      } else {
        cornerPoint2 = p3;
        cornerPoint3 = p4;
      }
    }

    if (points[i - 1] && points[i - 1][2] == 'e' || !previousAngle) {
      segments[segments.length - 1].push(p1);
      segments[segments.length - 1].splice(0, 0, p2);
    }

    if (points[i + 1][2] == 'e' || i == points.length - 2) {
      segments[segments.length - 1].splice(0, 0, p3);
      segments[segments.length - 1].push(p4);
      segments.push([]);
    }

    if (point2.x + glyph.weight > glyph.width)
      glyph.width = point2.x + glyph.weight;

    // FIXME: add last point
    if (point2.x + glyph.weight > glyph.width)
      glyph.width = point2.x + glyph.weight;

    if (point2.y + glyph.contrast < glyph.height)
      glyph.height = point2.y + glyph.contrast;

    // FIXME: add last point
    if (point2.y + glyph.contrast < glyph.height)
      glyph.height = point2.y + glyph.contrast;

  }
  glyph.path = new Path(segments[0]);
  glyph.path.closePath();
  for (i = 1; i < segments.length; i++) {
    if (segments[i].length) {
      var segment = new Path(segments[i]);
      segment.closePath();
      glyph.path = glyph.path.unite(segment);
    }
  }

  return glyph;
};

function makeCorner(p1, p2, vector2, vector3) {
  var vector1 = p2.subtract(p1);

  var rad1 = vector2.rotate(180).getAngleInRadians(vector1);
  var rad2 = vector3.getAngleInRadians(vector1);

  var x = (vector1.length * Math.sin(rad1)) / Math.sin(rad2 + rad1);

  // if (x > 30)
  //   x = 30;

  // if (x > 50)
  //   x = 30;

  var result = new Point(x, 0);
  result = result.rotate(vector2.rotate(180).angle);
  result = result.add(p1);
  return result;
}

Generator.prototype.generateGlyphWithAccent = function(name, accent) {
  var glyph;

  if (accent.length > 1)
    accent = decodeHtml('&' + accent + ';');

  if (name == 'i')
    glyph = this.generateGlyph('ı');
  else
    glyph = this.generateGlyph(name);

  var accentGlyph = this.generateGlyph(accent);
  // FIXME: fix this for italics
  accentGlyph.path.position.x += (glyph.width - accentGlyph.width) / 2;

  if (name[0] === name[0].toLowerCase()) {
    accentGlyph.path.position.y += 90 + glyph.height;
  }

  glyph.path = glyph.path.unite(accentGlyph.path);
  glyph.name = decodeHtml('&' + name + this.alphabet.nameMap[accent] + ';');
  return glyph;
};

Generator.prototype.generateGlyphWithAccent2 = function(name, accent) {
  var glyph;

  if (accent.length > 1)
    accent = decodeHtml('&' + accent + ';');

  if (name == 'i')
    glyph = this.generateGlyph2('ı');
  else
    glyph = this.generateGlyph2(name);

  var accentGlyph = this.generateGlyph2(accent);
  // FIXME: fix this for italics
  accentGlyph.path.position.x += (glyph.width - accentGlyph.width) / 2;

  if (name[0] === name[0].toLowerCase()) {
    accentGlyph.path.position.y += 90 + glyph.height;
  }

  glyph.path = glyph.path.unite(accentGlyph.path);
  glyph.name = decodeHtml('&' + name + this.alphabet.nameMap[accent] + ';');
  return glyph;
};

function decodeHtml(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

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

      if (hx1 + hy1 === 0 && hx2 + hy2 === 0)
        resultPath.lineTo(x2, y2);
      else
        resultPath.curveTo(x1 + hx1, y1 + hy1, x2 + hx2, y2 + hy2, x2, y2);
    }
  }

  return resultPath;
}

Generator.prototype.exportOpentype = function(options) {
  var opentypeGlyphs = [],
    glyph,
    path;

  // HACK: .notdef have to be first defined
  if (this.glyphs['.notdef']) {
    glyph = this.glyphs['.notdef'];
    path = drawOpentypePath(glyph.path);

    if (path.commands.length !== 0) {
      opentypeGlyphs.push(new opentype.Glyph({
        name: '.notdef',
        unicode: 0,
        advanceWidth: glyph.width * 10 + 100,
        path: path
      }));
    }
  } else {
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
    // HACK: .notdef already defined
    if (x == '.notdef')
      continue;

    glyph = this.glyphs[x];
    path = drawOpentypePath(glyph.path);

    if (path.commands.length !== 0) {
      opentypeGlyphs.push(new opentype.Glyph({
        name: this.alphabet.nameMap[glyph.name] || glyph.name,
        unicode: glyph.name.charCodeAt(),
        advanceWidth: glyph.width * 10 + 100,
        path: path
      }));
    }
  }
  opentypeGlyphs.push(new opentype.Glyph({
    name: 'space',
    unicode: 32,
    advanceWidth: this.size / this.proportion * 100,
    path: new opentype.Path()
  }));

  this.font = new opentype.Font({
    familyName: options.familyName || 'GlypherStandart',
    styleName: options.styleName || 'Medium',
    unitsPerEm: 1000,
    ascender: 1000,
    descender: this.descender * 150,
    glyphs: opentypeGlyphs
  });

  var buffer = this.font.toArrayBuffer();
  var font2 = opentype.parse(buffer);

  //debugging
  if (options.debug) {
    for (var i = 0; i < font2.glyphs.length; i++) {
      var g = font2.glyphs.get(i);
      var ctx = createGlyphCanvas(g, 150);
      x = 20;
      var y = 120;
      var fontSize = 72;
      g.draw(ctx, x, y, fontSize);
      // g.drawPoints(ctx, x, y, fontSize);
      g.drawMetrics(ctx, x, y, fontSize);
    }
  }

  // FIXME: depends on div with id glyphs
  function createGlyphCanvas(glyph, size) {
    var canvasId, html, glyphsDiv, wrap, canvas, ctx;
    canvasId = 'glyph_2' + glyph.unicode;
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

Generator.prototype.downloadOTF = function() {
  if (this.font) {
    if (window.requestFileSystem || window.webkitRequestFileSystem)
      this.font.download();
    else
      console.log('Use Google Chrome');
  } else
    console.log('use exportOpentype first');
};

function sign(x) {
  // 0 == 1
  return x >= 0 ? 1 : -1;
}

exports.Generator = Generator;
