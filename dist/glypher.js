(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.glypher = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Alphabet(xheight, descender, aeheight) {
  xheight = xheight || 5;
  descender = descender || -3;
  aeheight = aeheight || xheight / 2;

  this.glyphs = {
    '.notdef': [
      [0, 0],
      [0, 10],
      [10, 10],
      [10, 0],
      [0, 0, 'c']
    ],
    a: [
      [0, xheight],
      [10, xheight],
      [10, 0],
      [0, 0],
      [0, aeheight],
      [10, aeheight]
    ],
    b: [
      [0, 10],
      [0, 0],
      [10, 0],
      [10, xheight],
      [0, xheight]
    ],
    c: [
      [10, 0],
      [0, 0],
      [0, xheight],
      [10, xheight]
    ],
    d: [
      [10, 10],
      [10, 0],
      [0, 0],
      [0, xheight],
      [10, xheight]
    ],
    e: [
      [10, 0],
      [0, 0],
      [0, xheight],
      [10, xheight],
      [10, aeheight],
      [0, aeheight]
    ],
    f: [
      [3, 0],
      [3, 10],
      [10, 10, 'e'],
      [0, xheight],
      [10, xheight]
    ],
    g: [
      [0, descender],
      [10, descender],
      [10, xheight],
      [0, xheight],
      [0, 0],
      [10, 0]
    ],
    h: [
      [0, 10],
      [0, 0, 'e'],
      [0, xheight],
      [10, xheight],
      [10, 0]
    ],
    i: [
      [0, 0],
      [0, xheight, 'e'],
      [0, 10],
      [0, xheight + 2]
    ],
    //dottless i is needed for accented is
    'ı': [
      [0, 0],
      [0, xheight]
    ],
    j: [
      [-2, descender],
      [1, descender],
      [1, 10],
      [1, xheight + 2]
    ],
    k: [
      [0, 10],
      [0, 0, 'e'],
      [0, xheight / 2],
      [5, xheight / 2],
      [10, xheight, 'e'],
      [0, xheight / 2],
      [5, xheight / 2],
      [10, 0]
    ],
    l: [
      [0, 0],
      [0, 10]
    ],
    m: [
      [0, 0],
      [0, xheight],
      [10, xheight],
      [10, 0, 'e'],
      [10, xheight],
      [20, xheight],
      [20, 0]
    ],
    n: [
      [0, 0],
      [0, xheight],
      [10, xheight],
      [10, 0]
    ],
    o: [
      [0, 0],
      [0, xheight],
      [10, xheight],
      [10, 0],
      [0, 0, 'c']
    ],
    p: [
      [0, descender],
      [0, xheight],
      [10, xheight],
      [10, 0],
      [0, 0]
    ],
    q: [
      [10, descender],
      [10, xheight],
      [0, xheight],
      [0, 0],
      [10, 0]
    ],
    r: [
      [0, 0],
      [0, xheight],
      [10, xheight]
    ],
    s: [
      [0, 0],
      [10, 0],
      [10, xheight / 2],
      [0, xheight / 2],
      [0, xheight],
      [10, xheight]
    ],
    t: [
      // FIXME: xheight + 2 ??
      [3, xheight + 2],
      [3, 0],
      [10, 0, 'e'],
      [0, xheight],
      [10, xheight]
    ],
    u: [
      [0, xheight],
      [0, 0],
      [10, 0],
      [10, xheight]
    ],
    v: [
      [0, xheight],
      [0, xheight / 2],
      [5, 0],
      [10, xheight / 2],
      [10, xheight]

    ],
    w: [
      [0, xheight],
      [0, xheight / 2],
      [5, 0],
      [10, xheight / 2],
      [10, xheight, ' e'],
      [10, xheight / 2],
      [15, 0],
      [20, xheight / 2],
      [20, xheight]
    ],
    x: [
      // [0, 0],
      // [10, xheight, 'e'],
      // [0, xheight],
      // [10, 0]
      [0, 0],
      [0, xheight / 6],
      [10, xheight - xheight / 6],
      [10, xheight, 'e'],
      [10, 0],
      [10, xheight / 6],
      [0, xheight - xheight / 6],
      [0, xheight, 'e']
    ],
    y: [
      [0, xheight],
      [0, 0],
      [10, 0],
      [10, xheight, 'e'],
      [10, 0],
      [10, descender],
      [0, descender]
    ],
    z: [
      [10, 0],
      [0, 0],
      [10, xheight],
      [0, xheight]
    ],
    A: [
      [0, 0],
      [5, 10],
      [10, 0, 'e'],
      [3, xheight / 2],
      [7, xheight / 2]
    ],
    B: [
      // [0, xheight],
      // [0, 10],
      // // FIXME: should depend on font weight
      // [9, 10],
      // [9, xheight],
      // [0, xheight, 'e'],
      // [0, 0],
      // [0, xheight],
      // [10, xheight],
      // [10, 0],
      // [0, 0],
      [0, xheight],
      [0, 10],
      [10, 10],
      [8, xheight],
      [0, xheight, 'e'],
      [0, 0],
      [0, xheight],
      [10, xheight],
      [10, 0],
      [0, 0]
    ],
    C: [
      [10, 10],
      [0, 10],
      [0, 0],
      [10, 0]
    ],
    D: [
      [0, 0],
      [0, 10],
      [7, 10],
      [10, xheight],
      [10, 10 - xheight],
      [7, 0],
      [0, 0]
    ],
    E: [
      [10, 0],
      [0, 0],
      [0, 10],
      [10, 10, 'e'],
      [0, xheight],
      [10, xheight]
    ],
    F: [
      [0, 0],
      [0, 10],
      [10, 10, 'e'],
      [0, xheight],
      [10, xheight]
    ],
    G: [
      [10, 10],
      [0, 10],
      [0, 0],
      [10, 0],
      [10, xheight]
      // [9, xheight]
    ],
    H: [
      [0, 0],
      [0, 10, 'e'],
      [10, 0],
      [10, 10, 'e'],
      [0, xheight],
      [10, xheight]
    ],
    I: [
      [5, 10],
      [5, 0, 'e'],
      [0, 0],
      [10, 0, 'e'],
      [0, 10],
      [10, 10]
    ],
    J: [
      [10, 10],
      [10, 0],
      [0, 0],
      [0, xheight / 2]
    ],
    K: [
      [0, 10],
      [0, 0, 'e'],
      [0, 5],
      [5, 5],
      [10, 10, 'e'],
      [0, 5],
      [5, 5],
      [10, 0]
    ],
    L: [
      [0, 10],
      [0, 0],
      [10, 0]
    ],
    M: [
      // [0, 0],
      // [0, 10],
      // [10, 10],
      // [10, xheight / 2, 'e'],
      // [10, 10],
      // [20, 10],
      // [20, 0]
      [0, 0],
      [0, 10],
      [5, 10],
      [10, (10 - xheight) / 2],
      [15, 10],
      [20, 10],
      [20, 0]
    ],
    N: [
      [0, 0],
      [0, 10],
      [10, (10 - xheight) / 2],
      [10, 0],
      [10, 10]
    ],
    O: [
      [0, 0],
      [0, 10],
      [10, 10],
      [10, 0],
      [0, 0, 'c']
    ],
    P: [
      [0, 0],
      [0, 10],
      [10, 10],
      [10, xheight],
      [0, xheight]
    ],
    Q: [
      [0, 0],
      [0, 10],
      [10, 10],
      [10, 0],
      [0, 0, 'c'],
      [8, 0],
      // 0 - contrast ???
      [8, descender * 0.75],
      [10, descender * 0.75],
    ],
    R: [
      [0, 0],
      [0, 10],
      [10, 10],
      [10, xheight],
      [0, xheight, 'e'],
      [5, xheight],
      [10, xheight / 2],
      [10, 0]

    ],
    S: [
      [0, 0],
      [10, 0],
      [10, xheight],
      [0, xheight],
      [0, 10],
      [10, 10]
    ],
    T: [
      [0, 10],
      [10, 10, 'e'],
      [5, 10],
      [5, 0]
    ],
    U: [
      [0, 10],
      [0, 0],
      [10, 0],
      [10, 10]
    ],
    V: [
      [0, 10],
      [0, xheight / 2],
      [5, 0],
      [10, xheight / 2],
      [10, 10]
    ],
    W: [
      [0, 10],
      [0, xheight / 2],
      [5, 0],
      [10, xheight / 2],
      [10, 10, ' e'],
      [10, xheight / 2],
      [15, 0],
      [20, xheight / 2],
      [20, 10]

    ],
    X: [
      [0, 0],
      [0, xheight / 2 - 1],
      [10, 10 - xheight / 2 + 1],
      [10, 10, 'e'],
      [10, 0],
      [10, xheight / 2 - 1],
      [0, 10 - xheight / 2 + 1],
      [0, 10, 'e']
    ],
    Y: [
      [0, 10],
      [0, 8],
      [5, xheight / 2],
      [10, 8],
      [10, 10, 'e'],
      [5, xheight / 2],
      [5, 0]
    ],
    Z: [
      [10, 0],
      [0, 0],
      [10, 10],
      [0, 10]
    ],
    'ˇ':[
      [0, 12 + (8 - xheight)],
      [2, 12],
      [4, 12 + (8 - xheight)]
    ],
    '´':[
      [2, 12],
      [4, 12 + (8 - xheight)]
    ],
    '0': [
      [0, 0],
      [0, 10],
      [10, 10],
      [10, 0],
      [0, 0, 'c']
    ],
    '1': [
      [5, 0],
      [5, 10],
      [0, 10, 'e'],
      [0, 0],
      [10, 0]
    ],
    '2': [
      [10, 0],
      [0, 0],
      [0, xheight],
      [10, xheight],
      [10, 10],
      [0, 10]
    ],
    '3': [
      [0, 0],
      [10, 0],
      [10, 10],
      [0, 10, 'e'],
      [10, xheight],
      [0, xheight]
    ],
    '4': [
      [0, 10],
      [0, xheight],
      [10, xheight, 'e'],
      [10, 10],
      [10, 0]
    ],
    '5': [
      [0, 0],
      [10, 0],
      [10, xheight],
      [0, xheight],
      [0, 10],
      [10, 10]
    ],
    '6': [
      [10, 10],
      [0, 10],
      [0, 0],
      [10, 0],
      [10, xheight],
      [0, xheight]
    ],
    '7': [
      [0, 10],
      [10, 10],
      [10, 0]
    ],
    '8': [
      [0, xheight],
      [0, 10],
      [10, 10],
      [10, xheight],
      [0, xheight, 'e'],
      [0, 0],
      [0, xheight],
      [10, xheight],
      [10, 0],
      [0, 0]
    ],
    '9': [
      [0, 0],
      [10, 0],
      [10, 10],
      [0, 10],
      [0, xheight],
      [10, xheight]
    ],
    '/': [
      [0, 0],
      [5, 10]
    ]
  };

  this.nameMap = {
    'ı': 'dotlessi',
    '´': 'acute',
    'ˇ': 'caron',
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '/': 'slash'
  };
}
Alphabet.prototype.maxHeight = function() {
  var max = 0;
  for (var key in this.glyphs) {
    if (this.glyphs[key]) {
      for (var i = 0; i < this.glyphs[key].length; i++) {
        if (this.glyphs[key][i][1] > max)
          max = this.glyphs[key][i][1];
      }
    }
  }

  return max;
};

Alphabet.prototype.availableGlyphs = function() {
  return Object.keys(this.glyphs);
};

exports.Alphabet = Alphabet;

},{}],2:[function(require,module,exports){
function Generator(options) {
  paper.install(window);
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
  this.segmentReduction = options.segmentReduction;

  this.size = 10;

  this.alphabet = options.alphabet || new glypher.Alphabet(options.xheight, this.descender);
  this.glyphs = [];
  this.opentype = undefined;
}

Generator.prototype.generate = function() {
  this.glyphs = {};
  var availableGlyphs = this.alphabet.availableGlyphs(),
    glyph;

  for (var i = 0; i < availableGlyphs.length; i++) {
    this.beforeGenerateGlyph(availableGlyphs[i]);
    glyph = this.generateGlyph(availableGlyphs[i]);
    this.afterGenerateGlyph(glyph);
    this.glyphs[glyph.name] = glyph;
  }

  var accent = 'acute';
  availableGlyphs = 'aeiouyAEIOUY';
  for (i = 0; i < availableGlyphs.length; i++) {
    this.beforeGenerateGlyph(availableGlyphs[i]);
    glyph = this.generateGlyphWithAccent(availableGlyphs[i], accent);
    this.afterGenerateGlyph(glyph);
    this.glyphs[glyph.name] = glyph;
  }
  // FIXME: dcaron tcaron
  accent = 'caron';
  availableGlyphs = 'cenrszCDENRSTZ';
  for (i = 0; i < availableGlyphs.length; i++) {
    this.beforeGenerateGlyph(availableGlyphs[i]);
    glyph = this.generateGlyphWithAccent(availableGlyphs[i], accent);
    this.afterGenerateGlyph(glyph);
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
    console.log('glyph ' + glyph.name + ' not defined');
    return false;
  }
};

Generator.prototype.adjustPoint = function(point) {
  return new Point(point)
    .multiply([this.size / this.proportion, this.size - (this.contrast * 2 / this.size)])
    .add(this.weight, this.contrast)
    .multiply(1, -1)
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

  return glyph;
};

Generator.prototype.generateGlyphWithAccent = function(name, accent) {
  var glyph;

  if (accent.length > 1)
    accent = decodeHtml('&' + accent + ';');

  if (name == 'i')
    glyph = this.generateGlyph('ı');
  else
    glyph = this.generateGlyph(name);

  var accentGlyph = this.generateGlyph(accent);

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
    advanceWidth: 1000,
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
  if (this.font)
    this.font.download();
  else
    console.log('use exportOpentype first');
};

function sign(x) {
  // 0 == 1
  return x >= 0 ? 1 : -1;
}

exports.Generator = Generator;

},{}],3:[function(require,module,exports){
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
Glyph.prototype.draw = function(x, y, debug) {
  //debugging
  if (debug) {
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
  }

  var path = this.path.clone();
  path.position = [x + path.position.x, y + path.position.y];
  path.fillColor = 'black';
};

exports.Glyph = Glyph;

},{}],4:[function(require,module,exports){
'use strict';

var alphabet = require('./alphabet.js');
var generator = require('./generator.js');
var glyph = require('./glyph.js');

exports.Glyph = glyph.Glyph;
exports.Alphabet = alphabet.Alphabet;
exports.Generator = generator.Generator;

},{"./alphabet.js":1,"./generator.js":2,"./glyph.js":3}]},{},[4])(4)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYWxwaGFiZXQuanMiLCJzcmMvZ2VuZXJhdG9yLmpzIiwic3JjL2dseXBoLmpzIiwic3JjL2dseXBoZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZnVuY3Rpb24gQWxwaGFiZXQoeGhlaWdodCwgZGVzY2VuZGVyLCBhZWhlaWdodCkge1xuICB4aGVpZ2h0ID0geGhlaWdodCB8fCA1O1xuICBkZXNjZW5kZXIgPSBkZXNjZW5kZXIgfHwgLTM7XG4gIGFlaGVpZ2h0ID0gYWVoZWlnaHQgfHwgeGhlaWdodCAvIDI7XG5cbiAgdGhpcy5nbHlwaHMgPSB7XG4gICAgJy5ub3RkZWYnOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDAsICdjJ11cbiAgICBdLFxuICAgIGE6IFtcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIGFlaGVpZ2h0XSxcbiAgICAgIFsxMCwgYWVoZWlnaHRdXG4gICAgXSxcbiAgICBiOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIGM6IFtcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICBkOiBbXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICBlOiBbXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgYWVoZWlnaHRdLFxuICAgICAgWzAsIGFlaGVpZ2h0XVxuICAgIF0sXG4gICAgZjogW1xuICAgICAgWzMsIDBdLFxuICAgICAgWzMsIDEwXSxcbiAgICAgIFsxMCwgMTAsICdlJ10sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICBnOiBbXG4gICAgICBbMCwgZGVzY2VuZGVyXSxcbiAgICAgIFsxMCwgZGVzY2VuZGVyXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdXG4gICAgXSxcbiAgICBoOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIDAsICdlJ10sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAwXVxuICAgIF0sXG4gICAgaTogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHQsICdlJ10sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIHhoZWlnaHQgKyAyXVxuICAgIF0sXG4gICAgLy9kb3R0bGVzcyBpIGlzIG5lZWRlZCBmb3IgYWNjZW50ZWQgaXNcbiAgICAnxLEnOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIGo6IFtcbiAgICAgIFstMiwgZGVzY2VuZGVyXSxcbiAgICAgIFsxLCBkZXNjZW5kZXJdLFxuICAgICAgWzEsIDEwXSxcbiAgICAgIFsxLCB4aGVpZ2h0ICsgMl1cbiAgICBdLFxuICAgIGs6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMCwgJ2UnXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbNSwgeGhlaWdodCAvIDJdLFxuICAgICAgWzEwLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFs1LCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTAsIDBdXG4gICAgXSxcbiAgICBsOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdXG4gICAgXSxcbiAgICBtOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAwLCAnZSddLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsyMCwgeGhlaWdodF0sXG4gICAgICBbMjAsIDBdXG4gICAgXSxcbiAgICBuOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAwXVxuICAgIF0sXG4gICAgbzogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMCwgJ2MnXVxuICAgIF0sXG4gICAgcDogW1xuICAgICAgWzAsIGRlc2NlbmRlcl0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXVxuICAgIF0sXG4gICAgcTogW1xuICAgICAgWzEwLCBkZXNjZW5kZXJdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgIHI6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIHM6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICB0OiBbXG4gICAgICAvLyBGSVhNRTogeGhlaWdodCArIDIgPz9cbiAgICAgIFszLCB4aGVpZ2h0ICsgMl0sXG4gICAgICBbMywgMF0sXG4gICAgICBbMTAsIDAsICdlJ10sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICB1OiBbXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgdjogW1xuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFs1LCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuXG4gICAgXSxcbiAgICB3OiBbXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzUsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTAsIHhoZWlnaHQsICcgZSddLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTUsIDBdLFxuICAgICAgWzIwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMjAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICB4OiBbXG4gICAgICAvLyBbMCwgMF0sXG4gICAgICAvLyBbMTAsIHhoZWlnaHQsICdlJ10sXG4gICAgICAvLyBbMCwgeGhlaWdodF0sXG4gICAgICAvLyBbMTAsIDBdXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodCAvIDZdLFxuICAgICAgWzEwLCB4aGVpZ2h0IC0geGhlaWdodCAvIDZdLFxuICAgICAgWzEwLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDZdLFxuICAgICAgWzAsIHhoZWlnaHQgLSB4aGVpZ2h0IC8gNl0sXG4gICAgICBbMCwgeGhlaWdodCwgJ2UnXVxuICAgIF0sXG4gICAgeTogW1xuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodCwgJ2UnXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIGRlc2NlbmRlcl0sXG4gICAgICBbMCwgZGVzY2VuZGVyXVxuICAgIF0sXG4gICAgejogW1xuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIEE6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFs1LCAxMF0sXG4gICAgICBbMTAsIDAsICdlJ10sXG4gICAgICBbMywgeGhlaWdodCAvIDJdLFxuICAgICAgWzcsIHhoZWlnaHQgLyAyXVxuICAgIF0sXG4gICAgQjogW1xuICAgICAgLy8gWzAsIHhoZWlnaHRdLFxuICAgICAgLy8gWzAsIDEwXSxcbiAgICAgIC8vIC8vIEZJWE1FOiBzaG91bGQgZGVwZW5kIG9uIGZvbnQgd2VpZ2h0XG4gICAgICAvLyBbOSwgMTBdLFxuICAgICAgLy8gWzksIHhoZWlnaHRdLFxuICAgICAgLy8gWzAsIHhoZWlnaHQsICdlJ10sXG4gICAgICAvLyBbMCwgMF0sXG4gICAgICAvLyBbMCwgeGhlaWdodF0sXG4gICAgICAvLyBbMTAsIHhoZWlnaHRdLFxuICAgICAgLy8gWzEwLCAwXSxcbiAgICAgIC8vIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFs4LCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF1cbiAgICBdLFxuICAgIEM6IFtcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgIEQ6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbNywgMTBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMTAgLSB4aGVpZ2h0XSxcbiAgICAgIFs3LCAwXSxcbiAgICAgIFswLCAwXVxuICAgIF0sXG4gICAgRTogW1xuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwLCAnZSddLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgRjogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTAsICdlJ10sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICBHOiBbXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgICAgLy8gWzksIHhoZWlnaHRdXG4gICAgXSxcbiAgICBIOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTAsICdlJ10sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCAxMCwgJ2UnXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIEk6IFtcbiAgICAgIFs1LCAxMF0sXG4gICAgICBbNSwgMCwgJ2UnXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMCwgJ2UnXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXVxuICAgIF0sXG4gICAgSjogW1xuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyXVxuICAgIF0sXG4gICAgSzogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCAwLCAnZSddLFxuICAgICAgWzAsIDVdLFxuICAgICAgWzUsIDVdLFxuICAgICAgWzEwLCAxMCwgJ2UnXSxcbiAgICAgIFswLCA1XSxcbiAgICAgIFs1LCA1XSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgIEw6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdXG4gICAgXSxcbiAgICBNOiBbXG4gICAgICAvLyBbMCwgMF0sXG4gICAgICAvLyBbMCwgMTBdLFxuICAgICAgLy8gWzEwLCAxMF0sXG4gICAgICAvLyBbMTAsIHhoZWlnaHQgLyAyLCAnZSddLFxuICAgICAgLy8gWzEwLCAxMF0sXG4gICAgICAvLyBbMjAsIDEwXSxcbiAgICAgIC8vIFsyMCwgMF1cbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbNSwgMTBdLFxuICAgICAgWzEwLCAoMTAgLSB4aGVpZ2h0KSAvIDJdLFxuICAgICAgWzE1LCAxMF0sXG4gICAgICBbMjAsIDEwXSxcbiAgICAgIFsyMCwgMF1cbiAgICBdLFxuICAgIE46IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsICgxMCAtIHhoZWlnaHQpIC8gMl0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCAxMF1cbiAgICBdLFxuICAgIE86IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMCwgJ2MnXVxuICAgIF0sXG4gICAgUDogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgUTogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwLCAnYyddLFxuICAgICAgWzgsIDBdLFxuICAgICAgLy8gMCAtIGNvbnRyYXN0ID8/P1xuICAgICAgWzgsIGRlc2NlbmRlciAqIDAuNzVdLFxuICAgICAgWzEwLCBkZXNjZW5kZXIgKiAwLjc1XSxcbiAgICBdLFxuICAgIFI6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodCwgJ2UnXSxcbiAgICAgIFs1LCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzEwLCAwXVxuXG4gICAgXSxcbiAgICBTOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXVxuICAgIF0sXG4gICAgVDogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTAsICdlJ10sXG4gICAgICBbNSwgMTBdLFxuICAgICAgWzUsIDBdXG4gICAgXSxcbiAgICBVOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgMTBdXG4gICAgXSxcbiAgICBWOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFs1LCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzEwLCAxMF1cbiAgICBdLFxuICAgIFc6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzUsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTAsIDEwLCAnIGUnXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzE1LCAwXSxcbiAgICAgIFsyMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzIwLCAxMF1cblxuICAgIF0sXG4gICAgWDogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyIC0gMV0sXG4gICAgICBbMTAsIDEwIC0geGhlaWdodCAvIDIgKyAxXSxcbiAgICAgIFsxMCwgMTAsICdlJ10sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMiAtIDFdLFxuICAgICAgWzAsIDEwIC0geGhlaWdodCAvIDIgKyAxXSxcbiAgICAgIFswLCAxMCwgJ2UnXVxuICAgIF0sXG4gICAgWTogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCA4XSxcbiAgICAgIFs1LCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTAsIDhdLFxuICAgICAgWzEwLCAxMCwgJ2UnXSxcbiAgICAgIFs1LCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbNSwgMF1cbiAgICBdLFxuICAgIFo6IFtcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFswLCAxMF1cbiAgICBdLFxuICAgICfLhyc6W1xuICAgICAgWzAsIDEyICsgKDggLSB4aGVpZ2h0KV0sXG4gICAgICBbMiwgMTJdLFxuICAgICAgWzQsIDEyICsgKDggLSB4aGVpZ2h0KV1cbiAgICBdLFxuICAgICfCtCc6W1xuICAgICAgWzIsIDEyXSxcbiAgICAgIFs0LCAxMiArICg4IC0geGhlaWdodCldXG4gICAgXSxcbiAgICAnMCc6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMCwgJ2MnXVxuICAgIF0sXG4gICAgJzEnOiBbXG4gICAgICBbNSwgMF0sXG4gICAgICBbNSwgMTBdLFxuICAgICAgWzAsIDEwLCAnZSddLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXVxuICAgIF0sXG4gICAgJzInOiBbXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzAsIDEwXVxuICAgIF0sXG4gICAgJzMnOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMCwgMTAsICdlJ10sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICAnNCc6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHQsICdlJ10sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgICc1JzogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF1cbiAgICBdLFxuICAgICc2JzogW1xuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodF1cbiAgICBdLFxuICAgICc3JzogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCAwXVxuICAgIF0sXG4gICAgJzgnOiBbXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHQsICdlJ10sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXVxuICAgIF0sXG4gICAgJzknOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgJy8nOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbNSwgMTBdXG4gICAgXVxuICB9O1xuXG4gIHRoaXMubmFtZU1hcCA9IHtcbiAgICAnxLEnOiAnZG90bGVzc2knLFxuICAgICfCtCc6ICdhY3V0ZScsXG4gICAgJ8uHJzogJ2Nhcm9uJyxcbiAgICAnMCc6ICd6ZXJvJyxcbiAgICAnMSc6ICdvbmUnLFxuICAgICcyJzogJ3R3bycsXG4gICAgJzMnOiAndGhyZWUnLFxuICAgICc0JzogJ2ZvdXInLFxuICAgICc1JzogJ2ZpdmUnLFxuICAgICc2JzogJ3NpeCcsXG4gICAgJzcnOiAnc2V2ZW4nLFxuICAgICc4JzogJ2VpZ2h0JyxcbiAgICAnOSc6ICduaW5lJyxcbiAgICAnLyc6ICdzbGFzaCdcbiAgfTtcbn1cbkFscGhhYmV0LnByb3RvdHlwZS5tYXhIZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG1heCA9IDA7XG4gIGZvciAodmFyIGtleSBpbiB0aGlzLmdseXBocykge1xuICAgIGlmICh0aGlzLmdseXBoc1trZXldKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ2x5cGhzW2tleV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZ2x5cGhzW2tleV1baV1bMV0gPiBtYXgpXG4gICAgICAgICAgbWF4ID0gdGhpcy5nbHlwaHNba2V5XVtpXVsxXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWF4O1xufTtcblxuQWxwaGFiZXQucHJvdG90eXBlLmF2YWlsYWJsZUdseXBocyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5nbHlwaHMpO1xufTtcblxuZXhwb3J0cy5BbHBoYWJldCA9IEFscGhhYmV0O1xuIiwiZnVuY3Rpb24gR2VuZXJhdG9yKG9wdGlvbnMpIHtcbiAgcGFwZXIuaW5zdGFsbCh3aW5kb3cpO1xuICAvLyBGSVhNRTpcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUNhbnZhcycpO1xuICBwYXBlci5zZXR1cChjYW52YXMpO1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB0aGlzLnByb3BvcnRpb24gPSBvcHRpb25zLnByb3BvcnRpb24gfHwgKG9wdGlvbnMuaGVpZ2h0IC8gb3B0aW9ucy53aWR0aCkgfHwgMTtcblxuICB0aGlzLndlaWdodCA9IG9wdGlvbnMud2VpZ2h0IHx8IDIwO1xuICB0aGlzLmNvbnRyYXN0ID0gb3B0aW9ucy5jb250cmFzdCB8fCA1O1xuICB0aGlzLmRlc2NlbmRlciA9IG9wdGlvbnMuZGVzY2VuZGVyIHx8IC0zO1xuICB0aGlzLnhzaGlmdCA9IG9wdGlvbnMueHNoaWZ0IHx8IDA7XG4gIHRoaXMueXNoaWZ0ID0gb3B0aW9ucy55c2hpZnQgfHwgMDtcbiAgdGhpcy5pdGFsaWMgPSBvcHRpb25zLml0YWxpYyB8fCAwO1xuICB0aGlzLnNlZ21lbnRSZWR1Y3Rpb24gPSBvcHRpb25zLnNlZ21lbnRSZWR1Y3Rpb247XG5cbiAgdGhpcy5zaXplID0gMTA7XG5cbiAgdGhpcy5hbHBoYWJldCA9IG9wdGlvbnMuYWxwaGFiZXQgfHwgbmV3IGdseXBoZXIuQWxwaGFiZXQob3B0aW9ucy54aGVpZ2h0LCB0aGlzLmRlc2NlbmRlcik7XG4gIHRoaXMuZ2x5cGhzID0gW107XG4gIHRoaXMub3BlbnR5cGUgPSB1bmRlZmluZWQ7XG59XG5cbkdlbmVyYXRvci5wcm90b3R5cGUuZ2VuZXJhdGUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5nbHlwaHMgPSB7fTtcbiAgdmFyIGF2YWlsYWJsZUdseXBocyA9IHRoaXMuYWxwaGFiZXQuYXZhaWxhYmxlR2x5cGhzKCksXG4gICAgZ2x5cGg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhdmFpbGFibGVHbHlwaHMubGVuZ3RoOyBpKyspIHtcbiAgICB0aGlzLmJlZm9yZUdlbmVyYXRlR2x5cGgoYXZhaWxhYmxlR2x5cGhzW2ldKTtcbiAgICBnbHlwaCA9IHRoaXMuZ2VuZXJhdGVHbHlwaChhdmFpbGFibGVHbHlwaHNbaV0pO1xuICAgIHRoaXMuYWZ0ZXJHZW5lcmF0ZUdseXBoKGdseXBoKTtcbiAgICB0aGlzLmdseXBoc1tnbHlwaC5uYW1lXSA9IGdseXBoO1xuICB9XG5cbiAgdmFyIGFjY2VudCA9ICdhY3V0ZSc7XG4gIGF2YWlsYWJsZUdseXBocyA9ICdhZWlvdXlBRUlPVVknO1xuICBmb3IgKGkgPSAwOyBpIDwgYXZhaWxhYmxlR2x5cGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgdGhpcy5iZWZvcmVHZW5lcmF0ZUdseXBoKGF2YWlsYWJsZUdseXBoc1tpXSk7XG4gICAgZ2x5cGggPSB0aGlzLmdlbmVyYXRlR2x5cGhXaXRoQWNjZW50KGF2YWlsYWJsZUdseXBoc1tpXSwgYWNjZW50KTtcbiAgICB0aGlzLmFmdGVyR2VuZXJhdGVHbHlwaChnbHlwaCk7XG4gICAgdGhpcy5nbHlwaHNbZ2x5cGgubmFtZV0gPSBnbHlwaDtcbiAgfVxuICAvLyBGSVhNRTogZGNhcm9uIHRjYXJvblxuICBhY2NlbnQgPSAnY2Fyb24nO1xuICBhdmFpbGFibGVHbHlwaHMgPSAnY2VucnN6Q0RFTlJTVFonO1xuICBmb3IgKGkgPSAwOyBpIDwgYXZhaWxhYmxlR2x5cGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgdGhpcy5iZWZvcmVHZW5lcmF0ZUdseXBoKGF2YWlsYWJsZUdseXBoc1tpXSk7XG4gICAgZ2x5cGggPSB0aGlzLmdlbmVyYXRlR2x5cGhXaXRoQWNjZW50KGF2YWlsYWJsZUdseXBoc1tpXSwgYWNjZW50KTtcbiAgICB0aGlzLmFmdGVyR2VuZXJhdGVHbHlwaChnbHlwaCk7XG4gICAgdGhpcy5nbHlwaHNbZ2x5cGgubmFtZV0gPSBnbHlwaDtcbiAgfVxufTtcblxuR2VuZXJhdG9yLnByb3RvdHlwZS5tZXJnZUdseXBoc1dpdGggPSBmdW5jdGlvbihwYXRoLCBsaXN0KSB7XG4gIGlmICghbGlzdCkge1xuICAgIGxpc3QgPSB0aGlzLmFscGhhYmV0LmF2YWlsYWJsZUdseXBocygpO1xuICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KGxpc3QpKSB7XG4gICAgbGlzdCA9IGxpc3Quc3BsaXQoXCJcIik7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB0aGlzLmdseXBoc1tsaXN0W2ldXS5wYXRoID0gdGhpcy5nbHlwaHNbbGlzdFtpXV0ucGF0aC51bml0ZShwYXRoKTtcbiAgfVxufTtcblxuR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRHbHlwaCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgaWYgKHRoaXMuZ2x5cGhzW25hbWVdKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2x5cGhzW25hbWVdO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdnbHlwaCAnICsgZ2x5cGgubmFtZSArICcgbm90IGRlZmluZWQnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbkdlbmVyYXRvci5wcm90b3R5cGUuYWRqdXN0UG9pbnQgPSBmdW5jdGlvbihwb2ludCkge1xuICByZXR1cm4gbmV3IFBvaW50KHBvaW50KVxuICAgIC5tdWx0aXBseShbdGhpcy5zaXplIC8gdGhpcy5wcm9wb3J0aW9uLCB0aGlzLnNpemUgLSAodGhpcy5jb250cmFzdCAqIDIgLyB0aGlzLnNpemUpXSlcbiAgICAuYWRkKHRoaXMud2VpZ2h0LCB0aGlzLmNvbnRyYXN0KVxuICAgIC5tdWx0aXBseSgxLCAtMSlcbiAgICAuYWRkKHRoaXMueHNoaWZ0LCB0aGlzLnlzaGlmdCk7XG59O1xuXG5HZW5lcmF0b3IucHJvdG90eXBlLmRyYXdEb3QgPSBmdW5jdGlvbihwb2ludCwgYm94KSB7XG4gIHZhciBwMSA9IHRoaXMuYWRqdXN0UG9pbnQocG9pbnQpO1xuICByZXR1cm4gbmV3IFBhdGguUmVjdGFuZ2xlKHAxLnN1YnRyYWN0KGJveCksIHAxLmFkZChib3gpKTtcbn07XG5cbkdlbmVyYXRvci5wcm90b3R5cGUuYmVmb3JlR2VuZXJhdGVHbHlwaCA9IGZ1bmN0aW9uKG5hbWUpIHtcblxufTtcblxuR2VuZXJhdG9yLnByb3RvdHlwZS5hZnRlckdlbmVyYXRlR2x5cGggPSBmdW5jdGlvbihnbHlwaCkge1xuXG59O1xuXG5HZW5lcmF0b3IucHJvdG90eXBlLmdlbmVyYXRlR2x5cGggPSBmdW5jdGlvbihuYW1lLCBwb2ludHMpIHtcbiAgcG9pbnRzID0gcG9pbnRzIHx8IHRoaXMuYWxwaGFiZXQuZ2x5cGhzW25hbWVdO1xuICB2YXIgZ2x5cGggPSBuZXcgZ2x5cGhlci5HbHlwaChuYW1lLCB0aGlzLndlaWdodCwgdGhpcy5jb250cmFzdCwgdGhpcy5wcm9wb3J0aW9uKTtcblxuICB2YXIgc2VnbWVudHMgPSBbXTtcbiAgdmFyIGJveCA9IG5ldyBQb2ludChnbHlwaC53ZWlnaHQsIGdseXBoLmNvbnRyYXN0KTtcbiAgdmFyIHN0YXJ0UG9pbnQ7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAvL1dJUFxuICAgIGlmIChwb2ludHNbaV1bMl0gPT0gJ2RvdCcpIHtcbiAgICAgIHNlZ21lbnRzLnB1c2godGhpcy5kcmF3RG90KHBvaW50c1tpXSwgYm94KSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoaSA+PSBwb2ludHMubGVuZ3RoIC0gMSlcbiAgICAgIGJyZWFrO1xuXG4gICAgdmFyIHBhdGggPSBuZXcgUGF0aCgpO1xuXG4gICAgdmFyIHAxID0gdGhpcy5hZGp1c3RQb2ludChwb2ludHNbaV0pO1xuICAgIHZhciBwMiA9IHRoaXMuYWRqdXN0UG9pbnQocG9pbnRzW2kgKyAxXSk7XG5cbiAgICBpZiAocG9pbnRzW2kgKyAxXVsyXSA9PSAnYycpIHtcbiAgICAgIHAyID0gc3RhcnRQb2ludDtcbiAgICB9IGVsc2Uge1xuICAgICAgcDIgPSB0aGlzLmFkanVzdFBvaW50KHBvaW50c1tpICsgMV0pO1xuICAgICAgc3RhcnRQb2ludCA9IHN0YXJ0UG9pbnQgfHwgcDE7XG4gICAgfVxuXG4gICAgdmFyIHZlY3RvciA9IHAyLnN1YnRyYWN0KHAxKTtcbiAgICB2YXIgeCA9IHNpZ24odmVjdG9yLngpO1xuICAgIHZhciB5ID0gc2lnbih2ZWN0b3IueSk7XG5cbiAgICAvLyBXSVBcbiAgICBpZiAodGhpcy5zZWdtZW50UmVkdWN0aW9uKSB7XG4gICAgICB2ZWN0b3IubGVuZ3RoIC09IHRoaXMuc2VnbWVudFJlZHVjdGlvbiAqIDU7XG4gICAgICBwMiA9IHAxLmFkZCh2ZWN0b3IpO1xuICAgICAgdmFyIHZlY3RvcjIgPSBwMS5zdWJ0cmFjdChwMik7XG4gICAgICB2ZWN0b3IyLmxlbmd0aCAtPSB0aGlzLnNlZ21lbnRSZWR1Y3Rpb24gKiA1O1xuICAgICAgcDEgPSBwMi5hZGQodmVjdG9yMik7XG4gICAgfVxuXG4gICAgdmFyIGI7XG4gICAgaWYgKGkgIT09IDAgJiYgcG9pbnRzW2kgLSAxXVsyXSAhPT0gJ2UnIHx8IHZlY3Rvci5hbmdsZSAlIDkwID09PSAwKSB7XG4gICAgICBiID0gcDEuYWRkKGJveC5tdWx0aXBseShbeCAqIC0xLCB5XSkpO1xuICAgICAgYiA9IGIuYWRkKGIueSAqIC0xICogdGhpcy5pdGFsaWMsIDApO1xuICAgICAgcGF0aC5hZGQoYik7XG4gICAgfVxuXG4gICAgYiA9IHAxLmFkZChib3gubXVsdGlwbHkoW3ggKiAtMSwgeSAqIC0xXSkpO1xuICAgIGIgPSBiLmFkZChiLnkgKiAtMSAqIHRoaXMuaXRhbGljLCAwKTtcbiAgICAvLyBpZiAoaSA9PT0gMCB8fCBwb2ludHNbaSAtIDFdWzJdID09PSAnZScgJiYgdmVjdG9yLmFuZ2xlICUgOTAgIT09IDApXG4gICAgLy8gICBiID0gYi5hZGQoLTIwLCAwKTtcbiAgICBwYXRoLmFkZChiKTtcblxuICAgIGIgPSBwMS5hZGQoYm94Lm11bHRpcGx5KFt4LCB5ICogLTFdKSk7XG4gICAgYiA9IGIuYWRkKGIueSAqIC0xICogdGhpcy5pdGFsaWMsIDApO1xuICAgIHBhdGguYWRkKGIpO1xuXG4gICAgaWYgKGkgKyAxICE9PSBwb2ludHMubGVuZ3RoIC0gMSAmJiBwb2ludHNbaSArIDFdWzJdICE9PSAnZScgfHwgdmVjdG9yLmFuZ2xlICUgOTAgPT09IDApIHtcbiAgICAgIGIgPSBwMi5hZGQoYm94Lm11bHRpcGx5KFt4LCB5ICogLTFdKSk7XG4gICAgICBiID0gYi5hZGQoYi55ICogLTEgKiB0aGlzLml0YWxpYywgMCk7XG4gICAgICBwYXRoLmFkZChiKTtcbiAgICB9XG5cbiAgICBiID0gcDIuYWRkKGJveC5tdWx0aXBseShbeCwgeV0pKTtcbiAgICBiID0gYi5hZGQoYi55ICogLTEgKiB0aGlzLml0YWxpYywgMCk7XG4gICAgLy8gaWYgKGkgKyAxICE9PSBwb2ludHMubGVuZ3RoIC0gMSAmJiBwb2ludHNbaSArIDFdWzJdICE9PSAnZScgfHwgdmVjdG9yLmFuZ2xlICUgOTAgPT09IDApIHtcbiAgICAvLyB9ZWxzZXtcbiAgICAvLyAgIHZhciB2ID0gcDEuc3VidHJhY3QocDIpO1xuICAgIC8vICAgYiA9IGIuYWRkKCh0aGlzLmNvbnRyYXN0KjIpL01hdGgudGFuKHYuYW5nbGVJblJhZGlhbnMpICogLTEsIDApO1xuICAgIC8vIH1cbiAgICBwYXRoLmFkZChiKTtcblxuICAgIGIgPSBwMi5hZGQoYm94Lm11bHRpcGx5KFt4ICogLTEsIHldKSk7XG4gICAgYiA9IGIuYWRkKGIueSAqIC0xICogdGhpcy5pdGFsaWMsIDApO1xuICAgIHBhdGguYWRkKGIpO1xuXG5cbiAgICAvLyBGSVhNRTogcm91bmQgZWRnZXNcbiAgICAvLyB2YXIgYyA9IG5ldyBQYXRoLkNpcmNsZSh7XG4gICAgLy8gICBjZW50ZXI6IFswLCAwXSxcbiAgICAvLyAgIHJhZGl1czogdGhpcy53ZWlnaHRcbiAgICAvLyB9KTtcbiAgICAvL1xuICAgIC8vIGMucm90YXRlKHZlY3Rvci5hbmdsZSk7XG4gICAgLy8gYy5wb3NpdGlvbiA9IHAxO1xuICAgIC8vIHBhdGguYWRkKGMuc2VnbWVudHNbM10pO1xuICAgIC8vIHBhdGguYWRkKGMuc2VnbWVudHNbMF0pO1xuICAgIC8vIHBhdGguYWRkKGMuc2VnbWVudHNbMV0pO1xuICAgIC8vXG4gICAgLy8gYy5wb3NpdGlvbiA9IHAyO1xuICAgIC8vIHBhdGguYWRkKGMuc2VnbWVudHNbMV0pO1xuICAgIC8vIHBhdGguYWRkKGMuc2VnbWVudHNbMl0pO1xuICAgIC8vIHBhdGguYWRkKGMuc2VnbWVudHNbM10pO1xuXG4gICAgcGF0aC5yZWR1Y2UoKTtcbiAgICBwYXRoLmNsb3NlZCA9IHRydWU7XG5cbiAgICBzZWdtZW50cy5wdXNoKHBhdGgpO1xuXG4gICAgaWYgKHAxLnggKyBnbHlwaC53ZWlnaHQgPiBnbHlwaC53aWR0aClcbiAgICAgIGdseXBoLndpZHRoID0gcDEueCArIGdseXBoLndlaWdodDtcblxuICAgIC8vIEZJWE1FOiBhZGQgbGFzdCBwb2ludFxuICAgIGlmIChwMi54ICsgZ2x5cGgud2VpZ2h0ID4gZ2x5cGgud2lkdGgpXG4gICAgICBnbHlwaC53aWR0aCA9IHAyLnggKyBnbHlwaC53ZWlnaHQ7XG5cbiAgICBpZiAocDEueSArIGdseXBoLmNvbnRyYXN0IDwgZ2x5cGguaGVpZ2h0KVxuICAgICAgZ2x5cGguaGVpZ2h0ID0gcDEueSArIGdseXBoLmNvbnRyYXN0O1xuXG4gICAgLy8gRklYTUU6IGFkZCBsYXN0IHBvaW50XG4gICAgaWYgKHAyLnkgKyBnbHlwaC5jb250cmFzdCA8IGdseXBoLmhlaWdodClcbiAgICAgIGdseXBoLmhlaWdodCA9IHAyLnkgKyBnbHlwaC5jb250cmFzdDtcblxuICAgIGlmIChwb2ludHNbaSArIDFdWzJdID09ICdlJyB8fCBwb2ludHNbaSArIDFdWzJdID09ICdjJykge1xuICAgICAgaSsrO1xuICAgICAgc3RhcnRQb2ludCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbiAgZ2x5cGgucGF0aCA9IGdseXBoLm1lcmdlU2VnbWVudHMoc2VnbWVudHMpO1xuICBnbHlwaC5wYXRoLnJlZHVjZSgpO1xuXG4gIHJldHVybiBnbHlwaDtcbn07XG5cbkdlbmVyYXRvci5wcm90b3R5cGUuZ2VuZXJhdGVHbHlwaFdpdGhBY2NlbnQgPSBmdW5jdGlvbihuYW1lLCBhY2NlbnQpIHtcbiAgdmFyIGdseXBoO1xuXG4gIGlmIChhY2NlbnQubGVuZ3RoID4gMSlcbiAgICBhY2NlbnQgPSBkZWNvZGVIdG1sKCcmJyArIGFjY2VudCArICc7Jyk7XG5cbiAgaWYgKG5hbWUgPT0gJ2knKVxuICAgIGdseXBoID0gdGhpcy5nZW5lcmF0ZUdseXBoKCfEsScpO1xuICBlbHNlXG4gICAgZ2x5cGggPSB0aGlzLmdlbmVyYXRlR2x5cGgobmFtZSk7XG5cbiAgdmFyIGFjY2VudEdseXBoID0gdGhpcy5nZW5lcmF0ZUdseXBoKGFjY2VudCk7XG5cbiAgYWNjZW50R2x5cGgucGF0aC5wb3NpdGlvbi54ICs9IChnbHlwaC53aWR0aCAtIGFjY2VudEdseXBoLndpZHRoKSAvIDI7XG5cbiAgaWYgKG5hbWVbMF0gPT09IG5hbWVbMF0udG9Mb3dlckNhc2UoKSkge1xuICAgIGFjY2VudEdseXBoLnBhdGgucG9zaXRpb24ueSArPSA5MCArIGdseXBoLmhlaWdodDtcbiAgfVxuXG4gIGdseXBoLnBhdGggPSBnbHlwaC5wYXRoLnVuaXRlKGFjY2VudEdseXBoLnBhdGgpO1xuICBnbHlwaC5uYW1lID0gZGVjb2RlSHRtbCgnJicgKyBuYW1lICsgdGhpcy5hbHBoYWJldC5uYW1lTWFwW2FjY2VudF0gKyAnOycpO1xuICByZXR1cm4gZ2x5cGg7XG59O1xuXG5mdW5jdGlvbiBkZWNvZGVIdG1sKGh0bWwpIHtcbiAgdmFyIHR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgdHh0LmlubmVySFRNTCA9IGh0bWw7XG4gIHJldHVybiB0eHQudmFsdWU7XG59XG5cbmZ1bmN0aW9uIGRyYXdPcGVudHlwZVBhdGgocGF0aCkge1xuICB2YXIgcmVzdWx0UGF0aCA9IG5ldyBvcGVudHlwZS5QYXRoKCksXG4gICAgcGF0aHMgPSBwYXRoLmNoaWxkcmVuIHx8IFtwYXRoXTtcblxuICBmb3IgKHZhciBqID0gMDsgaiA8IHBhdGhzLmxlbmd0aDsgaisrKSB7XG4gICAgLy8gRklYTUU6IHkgKiAtMSwgKiAxMFxuICAgIHJlc3VsdFBhdGgubW92ZVRvKE1hdGgucm91bmQocGF0aHNbal0uY3VydmVzWzBdLnBvaW50MS54ICogMTApLCBNYXRoLnJvdW5kKHBhdGhzW2pdLmN1cnZlc1swXS5wb2ludDEueSAqIC0xMCkpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBwYXRoc1tqXS5jdXJ2ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjdXJ2ZSA9IHBhdGhzW2pdLmN1cnZlc1tpXTtcblxuICAgICAgdmFyIHgxID0gTWF0aC5yb3VuZChjdXJ2ZS5wb2ludDEueCAqIDEwKTtcbiAgICAgIHZhciB5MSA9IE1hdGgucm91bmQoY3VydmUucG9pbnQxLnkgKiAtMTApO1xuICAgICAgdmFyIHgyID0gTWF0aC5yb3VuZChjdXJ2ZS5wb2ludDIueCAqIDEwKTtcbiAgICAgIHZhciB5MiA9IE1hdGgucm91bmQoY3VydmUucG9pbnQyLnkgKiAtMTApO1xuICAgICAgdmFyIGh4MSA9IGN1cnZlLmhhbmRsZTEueCAqIDEwO1xuICAgICAgdmFyIGh5MSA9IGN1cnZlLmhhbmRsZTEueSAqIC0xMDtcbiAgICAgIHZhciBoeDIgPSBjdXJ2ZS5oYW5kbGUyLnggKiAxMDtcbiAgICAgIHZhciBoeTIgPSBjdXJ2ZS5oYW5kbGUyLnkgKiAtMTA7XG5cbiAgICAgIGlmIChoeDEgKyBoeTEgPT09IDAgJiYgaHgyICsgaHkyID09PSAwKVxuICAgICAgICByZXN1bHRQYXRoLmxpbmVUbyh4MiwgeTIpO1xuICAgICAgZWxzZVxuICAgICAgICByZXN1bHRQYXRoLmN1cnZlVG8oeDEgKyBoeDEsIHkxICsgaHkxLCB4MiArIGh4MiwgeTIgKyBoeTIsIHgyLCB5Mik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFBhdGg7XG59XG5cbkdlbmVyYXRvci5wcm90b3R5cGUuZXhwb3J0T3BlbnR5cGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHZhciBvcGVudHlwZUdseXBocyA9IFtdLFxuICAgIGdseXBoLFxuICAgIHBhdGg7XG5cbiAgLy8gSEFDSzogLm5vdGRlZiBoYXZlIHRvIGJlIGZpcnN0IGRlZmluZWRcbiAgaWYgKHRoaXMuZ2x5cGhzWycubm90ZGVmJ10pIHtcbiAgICBnbHlwaCA9IHRoaXMuZ2x5cGhzWycubm90ZGVmJ107XG4gICAgcGF0aCA9IGRyYXdPcGVudHlwZVBhdGgoZ2x5cGgucGF0aCk7XG5cbiAgICBpZiAocGF0aC5jb21tYW5kcy5sZW5ndGggIT09IDApIHtcbiAgICAgIG9wZW50eXBlR2x5cGhzLnB1c2gobmV3IG9wZW50eXBlLkdseXBoKHtcbiAgICAgICAgbmFtZTogJy5ub3RkZWYnLFxuICAgICAgICB1bmljb2RlOiAwLFxuICAgICAgICBhZHZhbmNlV2lkdGg6IGdseXBoLndpZHRoICogMTAgKyAxMDAsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIG5vdGRlZlBhdGggPSBuZXcgb3BlbnR5cGUuUGF0aCgpO1xuICAgIG5vdGRlZlBhdGgubW92ZVRvKDEwMCwgMCk7XG4gICAgbm90ZGVmUGF0aC5saW5lVG8oMTAwLCA3MDApO1xuICAgIG5vdGRlZlBhdGgubGluZVRvKDYwMCwgNzAwKTtcbiAgICBub3RkZWZQYXRoLmxpbmVUbyg2MDAsIDApO1xuICAgIG5vdGRlZlBhdGgubW92ZVRvKDIwMCwgMTAwKTtcbiAgICBub3RkZWZQYXRoLmxpbmVUbyg1MDAsIDEwMCk7XG4gICAgbm90ZGVmUGF0aC5saW5lVG8oNTAwLCA2MDApO1xuICAgIG5vdGRlZlBhdGgubGluZVRvKDIwMCwgNjAwKTtcbiAgICBvcGVudHlwZUdseXBocy5wdXNoKG5ldyBvcGVudHlwZS5HbHlwaCh7XG4gICAgICBuYW1lOiAnLm5vdGRlZicsXG4gICAgICB1bmljb2RlOiAwLFxuICAgICAgYWR2YW5jZVdpZHRoOiA2NTAsXG4gICAgICBwYXRoOiBub3RkZWZQYXRoXG4gICAgfSkpO1xuICB9XG5cbiAgZm9yICh2YXIgeCBpbiB0aGlzLmdseXBocykge1xuICAgIC8vIEhBQ0s6IC5ub3RkZWYgYWxyZWFkeSBkZWZpbmVkXG4gICAgaWYgKHggPT0gJy5ub3RkZWYnKVxuICAgICAgY29udGludWU7XG5cbiAgICBnbHlwaCA9IHRoaXMuZ2x5cGhzW3hdO1xuICAgIHBhdGggPSBkcmF3T3BlbnR5cGVQYXRoKGdseXBoLnBhdGgpO1xuXG4gICAgaWYgKHBhdGguY29tbWFuZHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBvcGVudHlwZUdseXBocy5wdXNoKG5ldyBvcGVudHlwZS5HbHlwaCh7XG4gICAgICAgIG5hbWU6IHRoaXMuYWxwaGFiZXQubmFtZU1hcFtnbHlwaC5uYW1lXSB8fCBnbHlwaC5uYW1lLFxuICAgICAgICB1bmljb2RlOiBnbHlwaC5uYW1lLmNoYXJDb2RlQXQoKSxcbiAgICAgICAgYWR2YW5jZVdpZHRoOiBnbHlwaC53aWR0aCAqIDEwICsgMTAwLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KSk7XG4gICAgfVxuICB9XG5cbiAgb3BlbnR5cGVHbHlwaHMucHVzaChuZXcgb3BlbnR5cGUuR2x5cGgoe1xuICAgIG5hbWU6ICdzcGFjZScsXG4gICAgdW5pY29kZTogMzIsXG4gICAgYWR2YW5jZVdpZHRoOiAxMDAwLFxuICAgIHBhdGg6IG5ldyBvcGVudHlwZS5QYXRoKClcbiAgfSkpO1xuXG4gIHRoaXMuZm9udCA9IG5ldyBvcGVudHlwZS5Gb250KHtcbiAgICBmYW1pbHlOYW1lOiBvcHRpb25zLmZhbWlseU5hbWUgfHwgJ0dseXBoZXJTdGFuZGFydCcsXG4gICAgc3R5bGVOYW1lOiBvcHRpb25zLnN0eWxlTmFtZSB8fCAnTWVkaXVtJyxcbiAgICB1bml0c1BlckVtOiAxMDAwLFxuICAgIGFzY2VuZGVyOiAxMDAwLFxuICAgIGRlc2NlbmRlcjogdGhpcy5kZXNjZW5kZXIgKiAxNTAsXG4gICAgZ2x5cGhzOiBvcGVudHlwZUdseXBoc1xuICB9KTtcblxuICB2YXIgYnVmZmVyID0gdGhpcy5mb250LnRvQXJyYXlCdWZmZXIoKTtcbiAgdmFyIGZvbnQyID0gb3BlbnR5cGUucGFyc2UoYnVmZmVyKTtcblxuICAvL2RlYnVnZ2luZ1xuICBpZiAob3B0aW9ucy5kZWJ1Zykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9udDIuZ2x5cGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZyA9IGZvbnQyLmdseXBocy5nZXQoaSk7XG4gICAgICB2YXIgY3R4ID0gY3JlYXRlR2x5cGhDYW52YXMoZywgMTUwKTtcbiAgICAgIHggPSAyMDtcbiAgICAgIHZhciB5ID0gMTIwO1xuICAgICAgdmFyIGZvbnRTaXplID0gNzI7XG4gICAgICBnLmRyYXcoY3R4LCB4LCB5LCBmb250U2l6ZSk7XG4gICAgICAvLyBnLmRyYXdQb2ludHMoY3R4LCB4LCB5LCBmb250U2l6ZSk7XG4gICAgICBnLmRyYXdNZXRyaWNzKGN0eCwgeCwgeSwgZm9udFNpemUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEZJWE1FOiBkZXBlbmRzIG9uIGRpdiB3aXRoIGlkIGdseXBoc1xuICBmdW5jdGlvbiBjcmVhdGVHbHlwaENhbnZhcyhnbHlwaCwgc2l6ZSkge1xuICAgIHZhciBjYW52YXNJZCwgaHRtbCwgZ2x5cGhzRGl2LCB3cmFwLCBjYW52YXMsIGN0eDtcbiAgICBjYW52YXNJZCA9ICdnbHlwaF8yJyArIGdseXBoLnVuaWNvZGU7XG4gICAgaHRtbCA9ICc8Y2FudmFzIGlkPVwiJyArIGNhbnZhc0lkICsgJ1wiIHdpZHRoPVwiJyArIHNpemUgKyAnXCIgaGVpZ2h0PVwiJyArIHNpemUgKyAnXCI+PC9jYW52YXM+JztcbiAgICBnbHlwaHNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2x5cGhzJyk7XG4gICAgd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB3cmFwLmlubmVySFRNTCA9IGh0bWw7XG4gICAgZ2x5cGhzRGl2LmFwcGVuZENoaWxkKHdyYXApO1xuICAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc0lkKTtcbiAgICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICByZXR1cm4gY3R4O1xuICB9XG59O1xuXG5HZW5lcmF0b3IucHJvdG90eXBlLmRvd25sb2FkT1RGID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLmZvbnQpXG4gICAgdGhpcy5mb250LmRvd25sb2FkKCk7XG4gIGVsc2VcbiAgICBjb25zb2xlLmxvZygndXNlIGV4cG9ydE9wZW50eXBlIGZpcnN0Jyk7XG59O1xuXG5mdW5jdGlvbiBzaWduKHgpIHtcbiAgLy8gMCA9PSAxXG4gIHJldHVybiB4ID49IDAgPyAxIDogLTE7XG59XG5cbmV4cG9ydHMuR2VuZXJhdG9yID0gR2VuZXJhdG9yO1xuIiwiZnVuY3Rpb24gR2x5cGgobmFtZSwgd2VpZ2h0LCBjb250cmFzdCwgcHJvcG9ydGlvbikge1xuICB0aGlzLm5hbWUgPSBuYW1lO1xuICB0aGlzLndlaWdodCA9IHdlaWdodDtcbiAgdGhpcy5jb250cmFzdCA9IGNvbnRyYXN0O1xuICB0aGlzLnByb3BvcnRpb24gPSBwcm9wb3J0aW9uO1xuXG4gIHRoaXMucGF0aCA9IHVuZGVmaW5lZDtcbiAgdGhpcy53aWR0aCA9IDA7XG4gIHRoaXMuaGVpZ2h0ID0gMDtcbn1cblxuR2x5cGgucHJvdG90eXBlLm1lcmdlU2VnbWVudHMgPSBmdW5jdGlvbihzZWdtZW50cykge1xuXG4gIHZhciByZXN1bHQgPSBzZWdtZW50c1swXS5jbG9uZSgpO1xuICBmb3IgKGkgPSAxOyBpIDwgc2VnbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICByZXN1bHQgPSByZXN1bHQudW5pdGUoc2VnbWVudHNbaV0pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vREVCVUdcbkdseXBoLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oeCwgeSwgZGVidWcpIHtcbiAgLy9kZWJ1Z2dpbmdcbiAgaWYgKGRlYnVnKSB7XG4gICAgbmV3IFBhdGguQ2lyY2xlKHtcbiAgICAgIGNlbnRlcjogW3gsIHldLFxuICAgICAgcmFkaXVzOiAzLFxuICAgICAgc3Ryb2tlQ29sb3I6ICdibHVlJ1xuICAgIH0pO1xuICAgIG5ldyBQYXRoLkNpcmNsZSh7XG4gICAgICBjZW50ZXI6IFt4ICsgdGhpcy53aWR0aCwgeV0sXG4gICAgICByYWRpdXM6IDMsXG4gICAgICBzdHJva2VDb2xvcjogJ2JsdWUnXG4gICAgfSk7XG4gIH1cblxuICB2YXIgcGF0aCA9IHRoaXMucGF0aC5jbG9uZSgpO1xuICBwYXRoLnBvc2l0aW9uID0gW3ggKyBwYXRoLnBvc2l0aW9uLngsIHkgKyBwYXRoLnBvc2l0aW9uLnldO1xuICBwYXRoLmZpbGxDb2xvciA9ICdibGFjayc7XG59O1xuXG5leHBvcnRzLkdseXBoID0gR2x5cGg7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQuanMnKTtcbnZhciBnZW5lcmF0b3IgPSByZXF1aXJlKCcuL2dlbmVyYXRvci5qcycpO1xudmFyIGdseXBoID0gcmVxdWlyZSgnLi9nbHlwaC5qcycpO1xuXG5leHBvcnRzLkdseXBoID0gZ2x5cGguR2x5cGg7XG5leHBvcnRzLkFscGhhYmV0ID0gYWxwaGFiZXQuQWxwaGFiZXQ7XG5leHBvcnRzLkdlbmVyYXRvciA9IGdlbmVyYXRvci5HZW5lcmF0b3I7XG4iXX0=
