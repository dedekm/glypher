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
  this.glyphs = [];
  var availableGlyphs = this.alphabet.availableGlyphs();

  for (var i = 0; i < availableGlyphs.length; i++) {
    var glyph = new Glyph(availableGlyphs[i], this.weight, this.contrast, this.proportion);
    glyph.generate(this.alphabet.glyphs[availableGlyphs[i]]);
    this.glyphs.push(glyph);
  }
};

function Alphabet(xheight) {
  xheight = xheight || 5;

  this.glyphs = {
    I: [
      [0, 0],
      [0, 10]
    ],
    P: [
      [0, 10],
      [0, 0],
      [10, 0],
      [10, xheight],
      [0, xheight]
    ],
    O: [
      [0, 10],
      [0, 0],
      [10, 0],
      [10, 10],
      [0, 10]
    ],
    S: [
      [0, 10],
      [10, 10],
      [10, xheight],
      [0, xheight],
      [0, 0],
      [10, 0],
    ]
  };
}

Alphabet.prototype.availableGlyphs = function() {
  return Object.keys(this.glyphs);
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

Glyph.prototype.generate = function(points) {
  var segments = [];
  var box = new Point(this.weight, this.contrast);

  for (var i = 0; i < points.length - 1; i++) {


    var path = new Path();

    var p1 = new Point(points[i]).multiply([this.size / this.proportion, this.size]);
    var p2 = new Point(points[i + 1]).multiply([this.size / this.proportion, this.size]);

    var vector = p2.subtract(p1);
    var x = sign(vector.x);
    var y = sign(vector.y);


    path.add(p1.add(box.multiply([x * -1, y])));
    path.add(p1.add(box.multiply([x * -1, y * -1])));
    path.add(p1.add(box.multiply([x, y * -1])));


    path.add(p2.add(box.multiply([x, y * -1])));
    path.add(p2.add(box.multiply([x, y])));
    path.add(p2.add(box.multiply([x * -1, y])));

    path.reduce();
    path.closed = true;

    //DEBUG
    // path.strokeColor = 'blue';
    // path.dashArray = [5, 5];

    segments.push(path);

    // FIXME: add last point
    if (p1.x + this.weight > this.width)
      this.width = p1.x + this.weight;
  }

  this.path = this.mergeSegments(segments);
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

  var path = this.path.clone();
  path.position = [x, y];

  path.strokeColor = 'black';
};

function sign(x) {
  // 0 == 1
  return x >= 0 ? 1 : -1;
}
