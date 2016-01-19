paper.install(window);

function Alphabet() {
  this.glyphs = {
    P: [
      [100, 200],
      [100, 100],
      [200, 100],
      [200, 150],
      [100, 150]
    ]
  };
}

Alphabet.prototype.availableGlyphs = function() {
  return Object.keys(this.glyphs);
};

function Glyph(weight, contrast) {
  this.weight = weight;
  this.contrast = contrast;
  this.path = undefined;


  // FIXME:
  var canvas = document.getElementById('myCanvas');
  paper.setup(canvas);
}

Glyph.prototype.generate = function(points) {
  var segments = [];
  var box = new Point(this.weight, this.contrast);

  for (var i = 0; i < points.length - 1; i++) {

    var path = new Path();

    var p1 = new Point(points[i]);
    var p2 = new Point(points[i + 1]);

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

    segments.push(path);
  }

  result = segments[0];
  for (i = 1; i < segments.length; i++) {
    result = result.unite(segments[i]);
  }

  // DEBUG
  result.strokeColor = 'black';

  this.result = result;
};

function sign(x) {
  // 0 == 1
  return x >= 0 ? 1 : -1;
}
