paper.install(window);

function Generator(options) {
  // FIXME:
  var canvas = document.getElementById('myCanvas');
  paper.setup(canvas);

  console.log(options);
  options = options || {};
  this.proportion = options.proportion || (options.height / options.width) || 1;

  this.weight = options.weight || 20;
  this.contrast = options.contrast || 5;

  this.alphabet = options.alphabet || new Alphabet(options.xheight);
  this.glyphs = [];
}

Generator.prototype.generate = function() {
  this.glyphs = {};
  var availableGlyphs = this.alphabet.availableGlyphs();

  for (var i = 0; i < availableGlyphs.length; i++) {
    var glyph = this.generateGlyph(availableGlyphs[i], this.alphabet.glyphs[availableGlyphs[i]]);
    console.log(glyph);
    this.glyphs[glyph.name] = glyph;
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

  this.size = 10;
  this.path = undefined;
  this.width = 0;
}

Generator.prototype.generateGlyph = function(name, points) {
  var glyph = new Glyph(name, this.weight, this.contrast, this.proportion);

  var segments = [];
  var box = new Point(glyph.weight, glyph.contrast);

  for (var i = 0; i < points.length - 1; i++) {
    var path = new Path();

    var p1 = new Point(points[i])
      .multiply([glyph.size / glyph.proportion, glyph.size - (glyph.contrast * 2 / glyph.size)])
      .add(glyph.weight, glyph.size * 0.5);
    var p2 = new Point(points[i + 1])
      .multiply([glyph.size / glyph.proportion, glyph.size - (glyph.contrast * 2 / glyph.size)])
      .add(glyph.weight, glyph.size * 0.5);

    var vector = p2.subtract(p1);
    var x = sign(vector.x);
    var y = sign(vector.y);

    if (i !== 0 || vector.angle % 90 === 0) {
      path.add(p1.add(box.multiply([x * -1, y])));
    }
    path.add(p1.add(box.multiply([x * -1, y * -1])));
    path.add(p1.add(box.multiply([x, y * -1])));

    if (i + 1 !== points.length - 1 || vector.angle % 90 === 0) {
      path.add(p2.add(box.multiply([x, y * -1])));
    }
    path.add(p2.add(box.multiply([x, y])));
    path.add(p2.add(box.multiply([x * -1, y])));

    path.reduce();
    path.closed = true;

    segments.push(path);

    if (p1.x + glyph.weight > glyph.width)
      glyph.width = p1.x + glyph.weight;

    // FIXME: add last point
    if (p2.x + glyph.weight > glyph.width)
      glyph.width = p2.x + glyph.weight;
  }
  glyph.path = glyph.mergeSegments(segments);

  return glyph;
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
    center: [x,y],
    radius: 3,
    strokeColor: 'blue'
  });
  new Path.Circle({
    center: [x + this.width,y],
    radius: 3,
    strokeColor: 'blue'
  });

  var path = this.path.clone();
  path.position = [x + path.position.x, y - path.position.y];
  path.strokeColor = 'black';
};

function sign(x) {
  // 0 == 1
  return x >= 0 ? 1 : -1;
}
