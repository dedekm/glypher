paper.install(window);


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

    var vector = points[i + 1].subtract(points[i]);
    var x = sign(vector.x);
    var y = sign(vector.y);

    var p = points[i].clone();

    path.add(p.add(box.multiply([x * -1, y])));
    path.add(p.add(box.multiply([x * -1, y * -1])));
    path.add(p.add(box.multiply([x, y * -1])));

    p = points[i + 1].clone();

    path.add(p.add(box.multiply([x, y * -1])));
    path.add(p.add(box.multiply([x, y])));
    path.add(p.add(box.multiply([x * -1, y])));

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
