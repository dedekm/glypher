function Generator(options) {
  options = options || {};
  this.type = options.type || 'brush';
  this.proportion = options.proportion || (options.height / options.width) || 1.5;

  this.weight = options.weight || (this.type == 'brush' ? 200 : 50);
  this.contrast = this.type == 'brush' ? (options.contrast || 50) : this.weight;
  this.descender = options.descender || -3;
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

  // Setup paper.js by providing a canvas element
  var canvas = document.createElement('canvas');
  canvas.style.display = "none";
  document.body.appendChild(canvas);
  plumin.setup(canvas);
}

Generator.prototype.generate = function() {
  this.font = new plumin.Font({
    familyName: 'Demo',
    ascender: 1000,
    descender: -200
  });

  var availableGlyphs = this.alphabet.availableGlyphs(),
    glyphs = [],
    path;

  for (var i = 0; i < availableGlyphs.length; i++) {
    // FIXME: .notdef collide with '.'
    if(availableGlyphs[i] != '.notdef'){
      this.beforeGenerateGlyph(availableGlyphs[i]);
      if (this.type == 'stroke')
        path = this.generateGlyph2(availableGlyphs[i], this.alphabet.glyphs[availableGlyphs[i]]);
      else
        path = this.generateGlyph(availableGlyphs[i], this.alphabet.glyphs[availableGlyphs[i]]);
      var glyph = new plumin.Glyph({
        name: this.alphabet.nameMap[availableGlyphs[i]] || availableGlyphs[i],
        unicode: availableGlyphs[i],
        advanceWidth: path.width + 100
      });
      glyph.addContour(path.path);
      glyphs.push(glyph);
    }
  }

  this.font.addGlyphs(glyphs);
  this.font.updateOTCommands()
    .addToFonts();

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
  var p = new plumin.Point(point)
        .multiply([this.size / this.proportion, this.size - (this.contrast * 2 / this.size)])
        .add(this.weight, this.contrast)
        .add(this.xshift, this.yshift);
    p = p.add(p.y * this.italic, 0);
    return p;
};

Generator.prototype.drawDot = function(point, box) {
  var p1 = this.adjustPoint(point);
  return new plumin.Path.Rectangle(p1.subtract(box), p1.add(box));
};

Generator.prototype.beforeGenerateGlyph = function(name) {

};

Generator.prototype.afterGenerateGlyph = function(glyph) {

};

Generator.prototype.generateGlyph = function(name, points) {
  points = points || this.alphabet.glyphs[name];
  var glyph = new glypher.Glyph(name, this.weight, this.contrast, this.proportion);

  var segments = [];
  var box = new plumin.Point(glyph.weight, glyph.contrast);
  var startPoint;

  for (var i = 0; i < points.length; i++) {
    //WIP
    if (points[i][2] == 'dot') {
      segments.push(this.drawDot(points[i], box));
      continue;
    }

    if (i >= points.length - 1)
      break;

    var path = new plumin.Path();

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
      // b = b.add(b.y * -1 * this.italic, 0);
      path.add(b);
    }

    b = p1.add(box.multiply([x * -1, y * -1]));
    // b = b.add(b.y * -1 * this.italic, 0);
    // if (i === 0 || points[i - 1][2] === 'e' && vector.angle % 90 !== 0)
    //   b = b.add(-20, 0);
    path.add(b);

    b = p1.add(box.multiply([x, y * -1]));
    // b = b.add(b.y * -1 * this.italic, 0);
    path.add(b);

    if (i + 1 !== points.length - 1 && points[i + 1][2] !== 'e' || vector.angle % 90 === 0) {
      b = p2.add(box.multiply([x, y * -1]));
      // b = b.add(b.y * -1 * this.italic, 0);
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
    // b = b.add(b.y * -1 * this.italic, 0);
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
    ],
    paths = [],
    cornerPoint3,
    startPoint;

  for (var i = 0; i < points.length; i++) {
    //WIP
    if (points[i][2] == 'dot') {
      segments.push(this.adjustPoint(points[i]).add(this.weight, this.weight * -1));
      segments.push(this.adjustPoint(points[i]).add(this.weight * -1, this.weight * -1));
      segments.push(this.adjustPoint(points[i]).add(this.weight * -1, this.weight));
      segments.push(this.adjustPoint(points[i]).add(this.weight));
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
    var helpPath = new plumin.Path();

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
      cornerPoint2,
      helpPoint;

    if (points[i - 1] && points[i][2] != 'e' && points[i - 1][2] != 'e' && previousAngle) {
      var previousVector = this.adjustPoint(points[i - 1]).subtract(point1);
      if (previousAngle < 0) {
        cornerPoint = p1;
        segments.splice(0, 0, makeCorner(cornerPoint3, p2, previousVector, vector1));
        segments.push(cornerPoint2);
        
        //for sharp edges
        segments.push(makeCorner(cornerPoint2, cornerPoint, previousVector, vector1));
        
        segments.push(cornerPoint);


      } else {
        cornerPoint = p2;
        segments.push(makeCorner(cornerPoint3, p1, previousVector, vector1));
        segments.splice(0, 0, cornerPoint2);
        
        //for sharp edges
        segments.splice(0, 0, makeCorner(cornerPoint2, cornerPoint, previousVector, vector1));
        
        segments.splice(0, 0, cornerPoint);

      }

      helpPath = new plumin.Path(segments);
      paths.push(helpPath);
      helpPoint = segments[0];
      segments = segments.slice(-1);
      segments.splice(0, 0, helpPoint);
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
      segments.push(p1);
      segments.splice(0, 0, p2);
    }

    if (points[i + 1][2] == 'e' || i == points.length - 2) {
      segments.splice(0, 0, p3);
      segments.push(p4);
      helpPath = new plumin.Path(segments);
      paths.push(helpPath);
      segments = [];
    }

    if (point1.x + glyph.weight > glyph.width)
      glyph.width = point1.x + glyph.weight;

    // FIXME: add last point
    if (point2.x + glyph.weight > glyph.width)
      glyph.width = point2.x + glyph.weight;

    if (point1.y + glyph.contrast < glyph.height)
      glyph.height = point1.y + glyph.contrast;

    // FIXME: add last point
    if (point2.y + glyph.contrast < glyph.height)
      glyph.height = point2.y + glyph.contrast;

  }
  glyph.path = paths[0];
  glyph.path.closePath();
  for (i = 1; i < paths.length; i++) {
    if (paths[i].length) {
      var segment = paths[i];
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

  var result = new plumin.Point(x, 0);
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

Generator.prototype.download = function() {
  if (this.font)
    this.font.download();
  else
    console.log('generate first');
};

function sign(x) {
  // 0 == 1
  return x >= 0 ? 1 : -1;
}

exports.Generator = Generator;
