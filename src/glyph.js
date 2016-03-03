function Glyph(name, weight, contrast, proportion) {
  this.name = name;
  this.weight = weight;
  this.contrast = contrast;
  this.proportion = proportion;

  this.path = undefined;
  this.width = 0;
  this.height = 0;
}

Glyph.prototype.mergeSegments = function(segments) {

  var result = segments[0].clone();
  for (i = 1; i < segments.length; i++) {
    result = result.unite(segments[i]);
  }

  return result;
};

//DEBUG
Glyph.prototype.draw = function(x, y) {
  var path = this.path.clone().scale(0.1, -0.1);
  path.position = [x + path.position.x * 0.1 , y - path.position.y * 0.1];
  path.fillColor = 'black';
  path.selected = true;

  new plumin.paper.Path.Circle({
    center: [x, y],
    radius: 3,
    strokeColor: 'red'
  });
  new plumin.paper.Path.Circle({
    center: [x + this.width * 0.1, y],
    radius: 3,
    strokeColor: 'red'
  });
};

exports.Glyph = Glyph;
