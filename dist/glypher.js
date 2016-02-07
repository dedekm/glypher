(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.glypher = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Alphabet(options) {
  xheight = options.xheight || 5;
  descender = options.descender || -3;
  aeheight = options.aeheight || xheight / 2;
  // FIXME
  weight = options.weight || 20;

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
    'ˇ': [
      [0, 12 + (8 - xheight)],
      [2, 12],
      [4, 12 + (8 - xheight)]
    ],
    '´': [
      [2, 12],
      [4, 12 + (8 - xheight)]
    ],
    '˚': [
      [0, 12],
      [0, 12 + (8 - xheight)],
      [4, 12 + (8 - xheight)],
      [4, 12],
      [0, 12]
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
    '.': [
      [0, 0],
      [0, 1]
    ],
    ',': [
      [0, -2],
      [0, 1]
    ],
    '!': [
      [0, 0],
      [0, 1, 'e'],
      [0, 3],
      [0, 10]
    ],
    // FIXME: xheight x 3
    '?': [
      [4, 0],
      [4, 1, 'e'],
      [4, 3],
      [4, xheight],
      [10, xheight],
      [10, 10],
      [0, 10],
    ],
    //hyphen
    '‐': [
      [0, xheight / 2],
      [2, xheight / 2]
    ],
    //endash
    '–': [
      [0, xheight / 2],
      [10, xheight / 2]
    ],
    //emdash
    '—': [
      [0, xheight / 2],
      [20, xheight / 2]
    ],
    //minus
    '-': [
      [0, xheight / 2],
      [2, xheight / 2]
    ],
    '/': [
      [0, 0],
      [5, 10]
    ],
    '@': [
      [10, 0],
      [10, xheight],
      [0, xheight],
      [0, 0],
      [15 + Math.round(weight / 4), 0],
      [15 + Math.round(weight / 4), 10],
      [0, 10],
    ],
    '&': [
      [11, 10],
      [0, 10],
      [0, 0],
      [11, 0],
      [11, xheight + (10 - xheight) / 3, 'e'],
      [0, xheight],
      [14, xheight]
    ]
  };

  if (weight < 15)
    this.glyphs.G.push([8 - Math.round(weight / 10), xheight]);

  this.nameMap = {
    'ı': 'dotlessi',
    '´': 'acute',
    'ˇ': 'caron',
    '˚': 'ring',
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
    '‐': 'hyphen',
    '–': 'endash',
    '—': 'emdash',
    '-': 'minus',
    '.': 'period',
    ',': 'comma',
    '!': 'exclam',
    '?': 'question',
    '/': 'slash',
    '@': 'at',
    '&': 'ampersand'
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
  this.smooth = options.smooth;

  this.size = 10;

  this.alphabet = options.alphabet || new glypher.Alphabet(options);
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

  accent = 'ring';
  availableGlyphs = 'uU';
  for (i = 0; i < availableGlyphs.length; i++) {
    this.beforeGenerateGlyph(availableGlyphs[i]);
    glyph = this.generateGlyphWithAccent(availableGlyphs[i], accent);
    this.afterGenerateGlyph(glyph);
    this.glyphs[glyph.name] = glyph;
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

  if(this.smooth)
    glyph.path.smooth({type: 'continuous'});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYWxwaGFiZXQuanMiLCJzcmMvZ2VuZXJhdG9yLmpzIiwic3JjL2dseXBoLmpzIiwic3JjL2dseXBoZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5b0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9ZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJmdW5jdGlvbiBBbHBoYWJldChvcHRpb25zKSB7XG4gIHhoZWlnaHQgPSBvcHRpb25zLnhoZWlnaHQgfHwgNTtcbiAgZGVzY2VuZGVyID0gb3B0aW9ucy5kZXNjZW5kZXIgfHwgLTM7XG4gIGFlaGVpZ2h0ID0gb3B0aW9ucy5hZWhlaWdodCB8fCB4aGVpZ2h0IC8gMjtcbiAgLy8gRklYTUVcbiAgd2VpZ2h0ID0gb3B0aW9ucy53ZWlnaHQgfHwgMjA7XG5cbiAgdGhpcy5nbHlwaHMgPSB7XG4gICAgJy5ub3RkZWYnOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDAsICdjJ11cbiAgICBdLFxuICAgIGE6IFtcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIGFlaGVpZ2h0XSxcbiAgICAgIFsxMCwgYWVoZWlnaHRdXG4gICAgXSxcbiAgICBiOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIGM6IFtcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICBkOiBbXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICBlOiBbXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgYWVoZWlnaHRdLFxuICAgICAgWzAsIGFlaGVpZ2h0XVxuICAgIF0sXG4gICAgZjogW1xuICAgICAgWzMsIDBdLFxuICAgICAgWzMsIDEwXSxcbiAgICAgIFsxMCwgMTAsICdlJ10sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICBnOiBbXG4gICAgICBbMCwgZGVzY2VuZGVyXSxcbiAgICAgIFsxMCwgZGVzY2VuZGVyXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdXG4gICAgXSxcbiAgICBoOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIDAsICdlJ10sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAwXVxuICAgIF0sXG4gICAgaTogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHQsICdlJ10sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIHhoZWlnaHQgKyAyXVxuICAgIF0sXG4gICAgLy9kb3R0bGVzcyBpIGlzIG5lZWRlZCBmb3IgYWNjZW50ZWQgaXNcbiAgICAnxLEnOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIGo6IFtcbiAgICAgIFstMiwgZGVzY2VuZGVyXSxcbiAgICAgIFsxLCBkZXNjZW5kZXJdLFxuICAgICAgWzEsIDEwXSxcbiAgICAgIFsxLCB4aGVpZ2h0ICsgMl1cbiAgICBdLFxuICAgIGs6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMCwgJ2UnXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbNSwgeGhlaWdodCAvIDJdLFxuICAgICAgWzEwLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFs1LCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTAsIDBdXG4gICAgXSxcbiAgICBsOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdXG4gICAgXSxcbiAgICBtOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAwLCAnZSddLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsyMCwgeGhlaWdodF0sXG4gICAgICBbMjAsIDBdXG4gICAgXSxcbiAgICBuOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAwXVxuICAgIF0sXG4gICAgbzogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMCwgJ2MnXVxuICAgIF0sXG4gICAgcDogW1xuICAgICAgWzAsIGRlc2NlbmRlcl0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXVxuICAgIF0sXG4gICAgcTogW1xuICAgICAgWzEwLCBkZXNjZW5kZXJdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgIHI6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIHM6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICB0OiBbXG4gICAgICAvLyBGSVhNRTogeGhlaWdodCArIDIgPz9cbiAgICAgIFszLCB4aGVpZ2h0ICsgMl0sXG4gICAgICBbMywgMF0sXG4gICAgICBbMTAsIDAsICdlJ10sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICB1OiBbXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgdjogW1xuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFs1LCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuXG4gICAgXSxcbiAgICB3OiBbXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzUsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTAsIHhoZWlnaHQsICcgZSddLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTUsIDBdLFxuICAgICAgWzIwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMjAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICB4OiBbXG4gICAgICAvLyBbMCwgMF0sXG4gICAgICAvLyBbMTAsIHhoZWlnaHQsICdlJ10sXG4gICAgICAvLyBbMCwgeGhlaWdodF0sXG4gICAgICAvLyBbMTAsIDBdXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodCAvIDZdLFxuICAgICAgWzEwLCB4aGVpZ2h0IC0geGhlaWdodCAvIDZdLFxuICAgICAgWzEwLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDZdLFxuICAgICAgWzAsIHhoZWlnaHQgLSB4aGVpZ2h0IC8gNl0sXG4gICAgICBbMCwgeGhlaWdodCwgJ2UnXVxuICAgIF0sXG4gICAgeTogW1xuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodCwgJ2UnXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIGRlc2NlbmRlcl0sXG4gICAgICBbMCwgZGVzY2VuZGVyXVxuICAgIF0sXG4gICAgejogW1xuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIEE6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFs1LCAxMF0sXG4gICAgICBbMTAsIDAsICdlJ10sXG4gICAgICBbMywgeGhlaWdodCAvIDJdLFxuICAgICAgWzcsIHhoZWlnaHQgLyAyXVxuICAgIF0sXG4gICAgQjogW1xuICAgICAgLy8gWzAsIHhoZWlnaHRdLFxuICAgICAgLy8gWzAsIDEwXSxcbiAgICAgIC8vIC8vIEZJWE1FOiBzaG91bGQgZGVwZW5kIG9uIGZvbnQgd2VpZ2h0XG4gICAgICAvLyBbOSwgMTBdLFxuICAgICAgLy8gWzksIHhoZWlnaHRdLFxuICAgICAgLy8gWzAsIHhoZWlnaHQsICdlJ10sXG4gICAgICAvLyBbMCwgMF0sXG4gICAgICAvLyBbMCwgeGhlaWdodF0sXG4gICAgICAvLyBbMTAsIHhoZWlnaHRdLFxuICAgICAgLy8gWzEwLCAwXSxcbiAgICAgIC8vIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFs4LCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF1cbiAgICBdLFxuICAgIEM6IFtcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgIEQ6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbNywgMTBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMTAgLSB4aGVpZ2h0XSxcbiAgICAgIFs3LCAwXSxcbiAgICAgIFswLCAwXVxuICAgIF0sXG4gICAgRTogW1xuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwLCAnZSddLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgRjogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTAsICdlJ10sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICBHOiBbXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgSDogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwLCAnZSddLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgMTAsICdlJ10sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICBJOiBbXG4gICAgICBbNSwgMTBdLFxuICAgICAgWzUsIDAsICdlJ10sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDAsICdlJ10sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF1cbiAgICBdLFxuICAgIEo6IFtcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl1cbiAgICBdLFxuICAgIEs6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMCwgJ2UnXSxcbiAgICAgIFswLCA1XSxcbiAgICAgIFs1LCA1XSxcbiAgICAgIFsxMCwgMTAsICdlJ10sXG4gICAgICBbMCwgNV0sXG4gICAgICBbNSwgNV0sXG4gICAgICBbMTAsIDBdXG4gICAgXSxcbiAgICBMOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXVxuICAgIF0sXG4gICAgTTogW1xuICAgICAgLy8gWzAsIDBdLFxuICAgICAgLy8gWzAsIDEwXSxcbiAgICAgIC8vIFsxMCwgMTBdLFxuICAgICAgLy8gWzEwLCB4aGVpZ2h0IC8gMiwgJ2UnXSxcbiAgICAgIC8vIFsxMCwgMTBdLFxuICAgICAgLy8gWzIwLCAxMF0sXG4gICAgICAvLyBbMjAsIDBdXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzUsIDEwXSxcbiAgICAgIFsxMCwgKDEwIC0geGhlaWdodCkgLyAyXSxcbiAgICAgIFsxNSwgMTBdLFxuICAgICAgWzIwLCAxMF0sXG4gICAgICBbMjAsIDBdXG4gICAgXSxcbiAgICBOOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAoMTAgLSB4aGVpZ2h0KSAvIDJdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgMTBdXG4gICAgXSxcbiAgICBPOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDAsICdjJ11cbiAgICBdLFxuICAgIFA6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIFE6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMCwgJ2MnXSxcbiAgICAgIFs4LCAwXSxcbiAgICAgIC8vIDAgLSBjb250cmFzdCA/Pz9cbiAgICAgIFs4LCBkZXNjZW5kZXIgKiAwLjc1XSxcbiAgICAgIFsxMCwgZGVzY2VuZGVyICogMC43NV0sXG4gICAgXSxcbiAgICBSOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHQsICdlJ10sXG4gICAgICBbNSwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsxMCwgMF1cblxuICAgIF0sXG4gICAgUzogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF1cbiAgICBdLFxuICAgIFQ6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwLCAnZSddLFxuICAgICAgWzUsIDEwXSxcbiAgICAgIFs1LCAwXVxuICAgIF0sXG4gICAgVTogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIDEwXVxuICAgIF0sXG4gICAgVjogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbNSwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsxMCwgMTBdXG4gICAgXSxcbiAgICBXOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFs1LCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzEwLCAxMCwgJyBlJ10sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsxNSwgMF0sXG4gICAgICBbMjAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsyMCwgMTBdXG5cbiAgICBdLFxuICAgIFg6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMiAtIDFdLFxuICAgICAgWzEwLCAxMCAtIHhoZWlnaHQgLyAyICsgMV0sXG4gICAgICBbMTAsIDEwLCAnZSddLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDIgLSAxXSxcbiAgICAgIFswLCAxMCAtIHhoZWlnaHQgLyAyICsgMV0sXG4gICAgICBbMCwgMTAsICdlJ11cbiAgICBdLFxuICAgIFk6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgOF0sXG4gICAgICBbNSwgeGhlaWdodCAvIDJdLFxuICAgICAgWzEwLCA4XSxcbiAgICAgIFsxMCwgMTAsICdlJ10sXG4gICAgICBbNSwgeGhlaWdodCAvIDJdLFxuICAgICAgWzUsIDBdXG4gICAgXSxcbiAgICBaOiBbXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMCwgMTBdXG4gICAgXSxcbiAgICAny4cnOiBbXG4gICAgICBbMCwgMTIgKyAoOCAtIHhoZWlnaHQpXSxcbiAgICAgIFsyLCAxMl0sXG4gICAgICBbNCwgMTIgKyAoOCAtIHhoZWlnaHQpXVxuICAgIF0sXG4gICAgJ8K0JzogW1xuICAgICAgWzIsIDEyXSxcbiAgICAgIFs0LCAxMiArICg4IC0geGhlaWdodCldXG4gICAgXSxcbiAgICAny5onOiBbXG4gICAgICBbMCwgMTJdLFxuICAgICAgWzAsIDEyICsgKDggLSB4aGVpZ2h0KV0sXG4gICAgICBbNCwgMTIgKyAoOCAtIHhoZWlnaHQpXSxcbiAgICAgIFs0LCAxMl0sXG4gICAgICBbMCwgMTJdXG4gICAgXSxcbiAgICAnMCc6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMCwgJ2MnXVxuICAgIF0sXG4gICAgJzEnOiBbXG4gICAgICBbNSwgMF0sXG4gICAgICBbNSwgMTBdLFxuICAgICAgWzAsIDEwLCAnZSddLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXVxuICAgIF0sXG4gICAgJzInOiBbXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzAsIDEwXVxuICAgIF0sXG4gICAgJzMnOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMCwgMTAsICdlJ10sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICAnNCc6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHQsICdlJ10sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgICc1JzogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF1cbiAgICBdLFxuICAgICc2JzogW1xuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodF1cbiAgICBdLFxuICAgICc3JzogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCAwXVxuICAgIF0sXG4gICAgJzgnOiBbXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHQsICdlJ10sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXVxuICAgIF0sXG4gICAgJzknOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgJy4nOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMV1cbiAgICBdLFxuICAgICcsJzogW1xuICAgICAgWzAsIC0yXSxcbiAgICAgIFswLCAxXVxuICAgIF0sXG4gICAgJyEnOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMSwgJ2UnXSxcbiAgICAgIFswLCAzXSxcbiAgICAgIFswLCAxMF1cbiAgICBdLFxuICAgIC8vIEZJWE1FOiB4aGVpZ2h0IHggM1xuICAgICc/JzogW1xuICAgICAgWzQsIDBdLFxuICAgICAgWzQsIDEsICdlJ10sXG4gICAgICBbNCwgM10sXG4gICAgICBbNCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMCwgMTBdLFxuICAgIF0sXG4gICAgLy9oeXBoZW5cbiAgICAn4oCQJzogW1xuICAgICAgWzAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsyLCB4aGVpZ2h0IC8gMl1cbiAgICBdLFxuICAgIC8vZW5kYXNoXG4gICAgJ+KAkyc6IFtcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyXVxuICAgIF0sXG4gICAgLy9lbWRhc2hcbiAgICAn4oCUJzogW1xuICAgICAgWzAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsyMCwgeGhlaWdodCAvIDJdXG4gICAgXSxcbiAgICAvL21pbnVzXG4gICAgJy0nOiBbXG4gICAgICBbMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzIsIHhoZWlnaHQgLyAyXVxuICAgIF0sXG4gICAgJy8nOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbNSwgMTBdXG4gICAgXSxcbiAgICAnQCc6IFtcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzE1ICsgTWF0aC5yb3VuZCh3ZWlnaHQgLyA0KSwgMF0sXG4gICAgICBbMTUgKyBNYXRoLnJvdW5kKHdlaWdodCAvIDQpLCAxMF0sXG4gICAgICBbMCwgMTBdLFxuICAgIF0sXG4gICAgJyYnOiBbXG4gICAgICBbMTEsIDEwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTEsIDBdLFxuICAgICAgWzExLCB4aGVpZ2h0ICsgKDEwIC0geGhlaWdodCkgLyAzLCAnZSddLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzE0LCB4aGVpZ2h0XVxuICAgIF1cbiAgfTtcblxuICBpZiAod2VpZ2h0IDwgMTUpXG4gICAgdGhpcy5nbHlwaHMuRy5wdXNoKFs4IC0gTWF0aC5yb3VuZCh3ZWlnaHQgLyAxMCksIHhoZWlnaHRdKTtcblxuICB0aGlzLm5hbWVNYXAgPSB7XG4gICAgJ8SxJzogJ2RvdGxlc3NpJyxcbiAgICAnwrQnOiAnYWN1dGUnLFxuICAgICfLhyc6ICdjYXJvbicsXG4gICAgJ8uaJzogJ3JpbmcnLFxuICAgICcwJzogJ3plcm8nLFxuICAgICcxJzogJ29uZScsXG4gICAgJzInOiAndHdvJyxcbiAgICAnMyc6ICd0aHJlZScsXG4gICAgJzQnOiAnZm91cicsXG4gICAgJzUnOiAnZml2ZScsXG4gICAgJzYnOiAnc2l4JyxcbiAgICAnNyc6ICdzZXZlbicsXG4gICAgJzgnOiAnZWlnaHQnLFxuICAgICc5JzogJ25pbmUnLFxuICAgICfigJAnOiAnaHlwaGVuJyxcbiAgICAn4oCTJzogJ2VuZGFzaCcsXG4gICAgJ+KAlCc6ICdlbWRhc2gnLFxuICAgICctJzogJ21pbnVzJyxcbiAgICAnLic6ICdwZXJpb2QnLFxuICAgICcsJzogJ2NvbW1hJyxcbiAgICAnISc6ICdleGNsYW0nLFxuICAgICc/JzogJ3F1ZXN0aW9uJyxcbiAgICAnLyc6ICdzbGFzaCcsXG4gICAgJ0AnOiAnYXQnLFxuICAgICcmJzogJ2FtcGVyc2FuZCdcbiAgfTtcbn1cbkFscGhhYmV0LnByb3RvdHlwZS5tYXhIZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG1heCA9IDA7XG4gIGZvciAodmFyIGtleSBpbiB0aGlzLmdseXBocykge1xuICAgIGlmICh0aGlzLmdseXBoc1trZXldKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ2x5cGhzW2tleV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZ2x5cGhzW2tleV1baV1bMV0gPiBtYXgpXG4gICAgICAgICAgbWF4ID0gdGhpcy5nbHlwaHNba2V5XVtpXVsxXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWF4O1xufTtcblxuQWxwaGFiZXQucHJvdG90eXBlLmF2YWlsYWJsZUdseXBocyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5nbHlwaHMpO1xufTtcblxuZXhwb3J0cy5BbHBoYWJldCA9IEFscGhhYmV0O1xuIiwiZnVuY3Rpb24gR2VuZXJhdG9yKG9wdGlvbnMpIHtcbiAgcGFwZXIuaW5zdGFsbCh3aW5kb3cpO1xuICAvLyBGSVhNRTpcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUNhbnZhcycpO1xuICBwYXBlci5zZXR1cChjYW52YXMpO1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB0aGlzLnByb3BvcnRpb24gPSBvcHRpb25zLnByb3BvcnRpb24gfHwgKG9wdGlvbnMuaGVpZ2h0IC8gb3B0aW9ucy53aWR0aCkgfHwgMTtcblxuICB0aGlzLndlaWdodCA9IG9wdGlvbnMud2VpZ2h0IHx8IDIwO1xuICB0aGlzLmNvbnRyYXN0ID0gb3B0aW9ucy5jb250cmFzdCB8fCA1O1xuICB0aGlzLmRlc2NlbmRlciA9IG9wdGlvbnMuZGVzY2VuZGVyIHx8IC0zO1xuICB0aGlzLnhzaGlmdCA9IG9wdGlvbnMueHNoaWZ0IHx8IDA7XG4gIHRoaXMueXNoaWZ0ID0gb3B0aW9ucy55c2hpZnQgfHwgMDtcbiAgdGhpcy5pdGFsaWMgPSBvcHRpb25zLml0YWxpYyB8fCAwO1xuICB0aGlzLnNlZ21lbnRSZWR1Y3Rpb24gPSBvcHRpb25zLnNlZ21lbnRSZWR1Y3Rpb247XG4gIHRoaXMuc21vb3RoID0gb3B0aW9ucy5zbW9vdGg7XG5cbiAgdGhpcy5zaXplID0gMTA7XG5cbiAgdGhpcy5hbHBoYWJldCA9IG9wdGlvbnMuYWxwaGFiZXQgfHwgbmV3IGdseXBoZXIuQWxwaGFiZXQob3B0aW9ucyk7XG4gIHRoaXMuZ2x5cGhzID0gW107XG4gIHRoaXMub3BlbnR5cGUgPSB1bmRlZmluZWQ7XG59XG5cbkdlbmVyYXRvci5wcm90b3R5cGUuZ2VuZXJhdGUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5nbHlwaHMgPSB7fTtcbiAgdmFyIGF2YWlsYWJsZUdseXBocyA9IHRoaXMuYWxwaGFiZXQuYXZhaWxhYmxlR2x5cGhzKCksXG4gICAgZ2x5cGg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhdmFpbGFibGVHbHlwaHMubGVuZ3RoOyBpKyspIHtcbiAgICB0aGlzLmJlZm9yZUdlbmVyYXRlR2x5cGgoYXZhaWxhYmxlR2x5cGhzW2ldKTtcbiAgICBnbHlwaCA9IHRoaXMuZ2VuZXJhdGVHbHlwaChhdmFpbGFibGVHbHlwaHNbaV0pO1xuICAgIHRoaXMuYWZ0ZXJHZW5lcmF0ZUdseXBoKGdseXBoKTtcbiAgICB0aGlzLmdseXBoc1tnbHlwaC5uYW1lXSA9IGdseXBoO1xuICB9XG5cbiAgdmFyIGFjY2VudCA9ICdhY3V0ZSc7XG4gIGF2YWlsYWJsZUdseXBocyA9ICdhZWlvdXlBRUlPVVknO1xuICBmb3IgKGkgPSAwOyBpIDwgYXZhaWxhYmxlR2x5cGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgdGhpcy5iZWZvcmVHZW5lcmF0ZUdseXBoKGF2YWlsYWJsZUdseXBoc1tpXSk7XG4gICAgZ2x5cGggPSB0aGlzLmdlbmVyYXRlR2x5cGhXaXRoQWNjZW50KGF2YWlsYWJsZUdseXBoc1tpXSwgYWNjZW50KTtcbiAgICB0aGlzLmFmdGVyR2VuZXJhdGVHbHlwaChnbHlwaCk7XG4gICAgdGhpcy5nbHlwaHNbZ2x5cGgubmFtZV0gPSBnbHlwaDtcbiAgfVxuICAvLyBGSVhNRTogZGNhcm9uIHRjYXJvblxuICBhY2NlbnQgPSAnY2Fyb24nO1xuICBhdmFpbGFibGVHbHlwaHMgPSAnY2VucnN6Q0RFTlJTVFonO1xuICBmb3IgKGkgPSAwOyBpIDwgYXZhaWxhYmxlR2x5cGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgdGhpcy5iZWZvcmVHZW5lcmF0ZUdseXBoKGF2YWlsYWJsZUdseXBoc1tpXSk7XG4gICAgZ2x5cGggPSB0aGlzLmdlbmVyYXRlR2x5cGhXaXRoQWNjZW50KGF2YWlsYWJsZUdseXBoc1tpXSwgYWNjZW50KTtcbiAgICB0aGlzLmFmdGVyR2VuZXJhdGVHbHlwaChnbHlwaCk7XG4gICAgdGhpcy5nbHlwaHNbZ2x5cGgubmFtZV0gPSBnbHlwaDtcbiAgfVxuXG4gIGFjY2VudCA9ICdyaW5nJztcbiAgYXZhaWxhYmxlR2x5cGhzID0gJ3VVJztcbiAgZm9yIChpID0gMDsgaSA8IGF2YWlsYWJsZUdseXBocy5sZW5ndGg7IGkrKykge1xuICAgIHRoaXMuYmVmb3JlR2VuZXJhdGVHbHlwaChhdmFpbGFibGVHbHlwaHNbaV0pO1xuICAgIGdseXBoID0gdGhpcy5nZW5lcmF0ZUdseXBoV2l0aEFjY2VudChhdmFpbGFibGVHbHlwaHNbaV0sIGFjY2VudCk7XG4gICAgdGhpcy5hZnRlckdlbmVyYXRlR2x5cGgoZ2x5cGgpO1xuICAgIHRoaXMuZ2x5cGhzW2dseXBoLm5hbWVdID0gZ2x5cGg7XG4gIH1cbn07XG5cbkdlbmVyYXRvci5wcm90b3R5cGUuZ2V0R2x5cGggPSBmdW5jdGlvbihuYW1lKSB7XG4gIGlmICh0aGlzLmdseXBoc1tuYW1lXSkge1xuICAgIHJldHVybiB0aGlzLmdseXBoc1tuYW1lXTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnZ2x5cGggJyArIGdseXBoLm5hbWUgKyAnIG5vdCBkZWZpbmVkJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5HZW5lcmF0b3IucHJvdG90eXBlLmFkanVzdFBvaW50ID0gZnVuY3Rpb24ocG9pbnQpIHtcbiAgcmV0dXJuIG5ldyBQb2ludChwb2ludClcbiAgICAubXVsdGlwbHkoW3RoaXMuc2l6ZSAvIHRoaXMucHJvcG9ydGlvbiwgdGhpcy5zaXplIC0gKHRoaXMuY29udHJhc3QgKiAyIC8gdGhpcy5zaXplKV0pXG4gICAgLmFkZCh0aGlzLndlaWdodCwgdGhpcy5jb250cmFzdClcbiAgICAubXVsdGlwbHkoMSwgLTEpXG4gICAgLmFkZCh0aGlzLnhzaGlmdCwgdGhpcy55c2hpZnQpO1xufTtcblxuR2VuZXJhdG9yLnByb3RvdHlwZS5kcmF3RG90ID0gZnVuY3Rpb24ocG9pbnQsIGJveCkge1xuICB2YXIgcDEgPSB0aGlzLmFkanVzdFBvaW50KHBvaW50KTtcbiAgcmV0dXJuIG5ldyBQYXRoLlJlY3RhbmdsZShwMS5zdWJ0cmFjdChib3gpLCBwMS5hZGQoYm94KSk7XG59O1xuXG5HZW5lcmF0b3IucHJvdG90eXBlLmJlZm9yZUdlbmVyYXRlR2x5cGggPSBmdW5jdGlvbihuYW1lKSB7XG5cbn07XG5cbkdlbmVyYXRvci5wcm90b3R5cGUuYWZ0ZXJHZW5lcmF0ZUdseXBoID0gZnVuY3Rpb24oZ2x5cGgpIHtcblxufTtcblxuR2VuZXJhdG9yLnByb3RvdHlwZS5nZW5lcmF0ZUdseXBoID0gZnVuY3Rpb24obmFtZSwgcG9pbnRzKSB7XG4gIHBvaW50cyA9IHBvaW50cyB8fCB0aGlzLmFscGhhYmV0LmdseXBoc1tuYW1lXTtcbiAgdmFyIGdseXBoID0gbmV3IGdseXBoZXIuR2x5cGgobmFtZSwgdGhpcy53ZWlnaHQsIHRoaXMuY29udHJhc3QsIHRoaXMucHJvcG9ydGlvbik7XG5cbiAgdmFyIHNlZ21lbnRzID0gW107XG4gIHZhciBib3ggPSBuZXcgUG9pbnQoZ2x5cGgud2VpZ2h0LCBnbHlwaC5jb250cmFzdCk7XG4gIHZhciBzdGFydFBvaW50O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy9XSVBcbiAgICBpZiAocG9pbnRzW2ldWzJdID09ICdkb3QnKSB7XG4gICAgICBzZWdtZW50cy5wdXNoKHRoaXMuZHJhd0RvdChwb2ludHNbaV0sIGJveCkpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGkgPj0gcG9pbnRzLmxlbmd0aCAtIDEpXG4gICAgICBicmVhaztcblxuICAgIHZhciBwYXRoID0gbmV3IFBhdGgoKTtcblxuICAgIHZhciBwMSA9IHRoaXMuYWRqdXN0UG9pbnQocG9pbnRzW2ldKTtcbiAgICB2YXIgcDIgPSB0aGlzLmFkanVzdFBvaW50KHBvaW50c1tpICsgMV0pO1xuXG4gICAgaWYgKHBvaW50c1tpICsgMV1bMl0gPT0gJ2MnKSB7XG4gICAgICBwMiA9IHN0YXJ0UG9pbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHAyID0gdGhpcy5hZGp1c3RQb2ludChwb2ludHNbaSArIDFdKTtcbiAgICAgIHN0YXJ0UG9pbnQgPSBzdGFydFBvaW50IHx8IHAxO1xuICAgIH1cblxuICAgIHZhciB2ZWN0b3IgPSBwMi5zdWJ0cmFjdChwMSk7XG4gICAgdmFyIHggPSBzaWduKHZlY3Rvci54KTtcbiAgICB2YXIgeSA9IHNpZ24odmVjdG9yLnkpO1xuXG4gICAgLy8gV0lQXG4gICAgaWYgKHRoaXMuc2VnbWVudFJlZHVjdGlvbikge1xuICAgICAgdmVjdG9yLmxlbmd0aCAtPSB0aGlzLnNlZ21lbnRSZWR1Y3Rpb24gKiA1O1xuICAgICAgcDIgPSBwMS5hZGQodmVjdG9yKTtcbiAgICAgIHZhciB2ZWN0b3IyID0gcDEuc3VidHJhY3QocDIpO1xuICAgICAgdmVjdG9yMi5sZW5ndGggLT0gdGhpcy5zZWdtZW50UmVkdWN0aW9uICogNTtcbiAgICAgIHAxID0gcDIuYWRkKHZlY3RvcjIpO1xuICAgIH1cblxuICAgIHZhciBiO1xuICAgIGlmIChpICE9PSAwICYmIHBvaW50c1tpIC0gMV1bMl0gIT09ICdlJyB8fCB2ZWN0b3IuYW5nbGUgJSA5MCA9PT0gMCkge1xuICAgICAgYiA9IHAxLmFkZChib3gubXVsdGlwbHkoW3ggKiAtMSwgeV0pKTtcbiAgICAgIGIgPSBiLmFkZChiLnkgKiAtMSAqIHRoaXMuaXRhbGljLCAwKTtcbiAgICAgIHBhdGguYWRkKGIpO1xuICAgIH1cblxuICAgIGIgPSBwMS5hZGQoYm94Lm11bHRpcGx5KFt4ICogLTEsIHkgKiAtMV0pKTtcbiAgICBiID0gYi5hZGQoYi55ICogLTEgKiB0aGlzLml0YWxpYywgMCk7XG4gICAgLy8gaWYgKGkgPT09IDAgfHwgcG9pbnRzW2kgLSAxXVsyXSA9PT0gJ2UnICYmIHZlY3Rvci5hbmdsZSAlIDkwICE9PSAwKVxuICAgIC8vICAgYiA9IGIuYWRkKC0yMCwgMCk7XG4gICAgcGF0aC5hZGQoYik7XG5cbiAgICBiID0gcDEuYWRkKGJveC5tdWx0aXBseShbeCwgeSAqIC0xXSkpO1xuICAgIGIgPSBiLmFkZChiLnkgKiAtMSAqIHRoaXMuaXRhbGljLCAwKTtcbiAgICBwYXRoLmFkZChiKTtcblxuICAgIGlmIChpICsgMSAhPT0gcG9pbnRzLmxlbmd0aCAtIDEgJiYgcG9pbnRzW2kgKyAxXVsyXSAhPT0gJ2UnIHx8IHZlY3Rvci5hbmdsZSAlIDkwID09PSAwKSB7XG4gICAgICBiID0gcDIuYWRkKGJveC5tdWx0aXBseShbeCwgeSAqIC0xXSkpO1xuICAgICAgYiA9IGIuYWRkKGIueSAqIC0xICogdGhpcy5pdGFsaWMsIDApO1xuICAgICAgcGF0aC5hZGQoYik7XG4gICAgfVxuXG4gICAgYiA9IHAyLmFkZChib3gubXVsdGlwbHkoW3gsIHldKSk7XG4gICAgYiA9IGIuYWRkKGIueSAqIC0xICogdGhpcy5pdGFsaWMsIDApO1xuICAgIC8vIGlmIChpICsgMSAhPT0gcG9pbnRzLmxlbmd0aCAtIDEgJiYgcG9pbnRzW2kgKyAxXVsyXSAhPT0gJ2UnIHx8IHZlY3Rvci5hbmdsZSAlIDkwID09PSAwKSB7XG4gICAgLy8gfWVsc2V7XG4gICAgLy8gICB2YXIgdiA9IHAxLnN1YnRyYWN0KHAyKTtcbiAgICAvLyAgIGIgPSBiLmFkZCgodGhpcy5jb250cmFzdCoyKS9NYXRoLnRhbih2LmFuZ2xlSW5SYWRpYW5zKSAqIC0xLCAwKTtcbiAgICAvLyB9XG4gICAgcGF0aC5hZGQoYik7XG5cbiAgICBiID0gcDIuYWRkKGJveC5tdWx0aXBseShbeCAqIC0xLCB5XSkpO1xuICAgIGIgPSBiLmFkZChiLnkgKiAtMSAqIHRoaXMuaXRhbGljLCAwKTtcbiAgICBwYXRoLmFkZChiKTtcblxuXG4gICAgLy8gRklYTUU6IHJvdW5kIGVkZ2VzXG4gICAgLy8gdmFyIGMgPSBuZXcgUGF0aC5DaXJjbGUoe1xuICAgIC8vICAgY2VudGVyOiBbMCwgMF0sXG4gICAgLy8gICByYWRpdXM6IHRoaXMud2VpZ2h0XG4gICAgLy8gfSk7XG4gICAgLy9cbiAgICAvLyBjLnJvdGF0ZSh2ZWN0b3IuYW5nbGUpO1xuICAgIC8vIGMucG9zaXRpb24gPSBwMTtcbiAgICAvLyBwYXRoLmFkZChjLnNlZ21lbnRzWzNdKTtcbiAgICAvLyBwYXRoLmFkZChjLnNlZ21lbnRzWzBdKTtcbiAgICAvLyBwYXRoLmFkZChjLnNlZ21lbnRzWzFdKTtcbiAgICAvL1xuICAgIC8vIGMucG9zaXRpb24gPSBwMjtcbiAgICAvLyBwYXRoLmFkZChjLnNlZ21lbnRzWzFdKTtcbiAgICAvLyBwYXRoLmFkZChjLnNlZ21lbnRzWzJdKTtcbiAgICAvLyBwYXRoLmFkZChjLnNlZ21lbnRzWzNdKTtcblxuICAgIHBhdGgucmVkdWNlKCk7XG4gICAgcGF0aC5jbG9zZWQgPSB0cnVlO1xuXG4gICAgc2VnbWVudHMucHVzaChwYXRoKTtcblxuICAgIGlmIChwMS54ICsgZ2x5cGgud2VpZ2h0ID4gZ2x5cGgud2lkdGgpXG4gICAgICBnbHlwaC53aWR0aCA9IHAxLnggKyBnbHlwaC53ZWlnaHQ7XG5cbiAgICAvLyBGSVhNRTogYWRkIGxhc3QgcG9pbnRcbiAgICBpZiAocDIueCArIGdseXBoLndlaWdodCA+IGdseXBoLndpZHRoKVxuICAgICAgZ2x5cGgud2lkdGggPSBwMi54ICsgZ2x5cGgud2VpZ2h0O1xuXG4gICAgaWYgKHAxLnkgKyBnbHlwaC5jb250cmFzdCA8IGdseXBoLmhlaWdodClcbiAgICAgIGdseXBoLmhlaWdodCA9IHAxLnkgKyBnbHlwaC5jb250cmFzdDtcblxuICAgIC8vIEZJWE1FOiBhZGQgbGFzdCBwb2ludFxuICAgIGlmIChwMi55ICsgZ2x5cGguY29udHJhc3QgPCBnbHlwaC5oZWlnaHQpXG4gICAgICBnbHlwaC5oZWlnaHQgPSBwMi55ICsgZ2x5cGguY29udHJhc3Q7XG5cbiAgICBpZiAocG9pbnRzW2kgKyAxXVsyXSA9PSAnZScgfHwgcG9pbnRzW2kgKyAxXVsyXSA9PSAnYycpIHtcbiAgICAgIGkrKztcbiAgICAgIHN0YXJ0UG9pbnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIGdseXBoLnBhdGggPSBnbHlwaC5tZXJnZVNlZ21lbnRzKHNlZ21lbnRzKTtcbiAgZ2x5cGgucGF0aC5yZWR1Y2UoKTtcblxuICBpZih0aGlzLnNtb290aClcbiAgICBnbHlwaC5wYXRoLnNtb290aCh7dHlwZTogJ2NvbnRpbnVvdXMnfSk7XG5cbiAgcmV0dXJuIGdseXBoO1xufTtcblxuR2VuZXJhdG9yLnByb3RvdHlwZS5nZW5lcmF0ZUdseXBoV2l0aEFjY2VudCA9IGZ1bmN0aW9uKG5hbWUsIGFjY2VudCkge1xuICB2YXIgZ2x5cGg7XG5cbiAgaWYgKGFjY2VudC5sZW5ndGggPiAxKVxuICAgIGFjY2VudCA9IGRlY29kZUh0bWwoJyYnICsgYWNjZW50ICsgJzsnKTtcblxuICBpZiAobmFtZSA9PSAnaScpXG4gICAgZ2x5cGggPSB0aGlzLmdlbmVyYXRlR2x5cGgoJ8SxJyk7XG4gIGVsc2VcbiAgICBnbHlwaCA9IHRoaXMuZ2VuZXJhdGVHbHlwaChuYW1lKTtcblxuICB2YXIgYWNjZW50R2x5cGggPSB0aGlzLmdlbmVyYXRlR2x5cGgoYWNjZW50KTtcblxuICBhY2NlbnRHbHlwaC5wYXRoLnBvc2l0aW9uLnggKz0gKGdseXBoLndpZHRoIC0gYWNjZW50R2x5cGgud2lkdGgpIC8gMjtcblxuICBpZiAobmFtZVswXSA9PT0gbmFtZVswXS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgYWNjZW50R2x5cGgucGF0aC5wb3NpdGlvbi55ICs9IDkwICsgZ2x5cGguaGVpZ2h0O1xuICB9XG5cbiAgZ2x5cGgucGF0aCA9IGdseXBoLnBhdGgudW5pdGUoYWNjZW50R2x5cGgucGF0aCk7XG4gIGdseXBoLm5hbWUgPSBkZWNvZGVIdG1sKCcmJyArIG5hbWUgKyB0aGlzLmFscGhhYmV0Lm5hbWVNYXBbYWNjZW50XSArICc7Jyk7XG4gIHJldHVybiBnbHlwaDtcbn07XG5cbmZ1bmN0aW9uIGRlY29kZUh0bWwoaHRtbCkge1xuICB2YXIgdHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICB0eHQuaW5uZXJIVE1MID0gaHRtbDtcbiAgcmV0dXJuIHR4dC52YWx1ZTtcbn1cblxuZnVuY3Rpb24gZHJhd09wZW50eXBlUGF0aChwYXRoKSB7XG4gIHZhciByZXN1bHRQYXRoID0gbmV3IG9wZW50eXBlLlBhdGgoKSxcbiAgICBwYXRocyA9IHBhdGguY2hpbGRyZW4gfHwgW3BhdGhdO1xuXG4gIGZvciAodmFyIGogPSAwOyBqIDwgcGF0aHMubGVuZ3RoOyBqKyspIHtcbiAgICAvLyBGSVhNRTogeSAqIC0xLCAqIDEwXG4gICAgcmVzdWx0UGF0aC5tb3ZlVG8oTWF0aC5yb3VuZChwYXRoc1tqXS5jdXJ2ZXNbMF0ucG9pbnQxLnggKiAxMCksIE1hdGgucm91bmQocGF0aHNbal0uY3VydmVzWzBdLnBvaW50MS55ICogLTEwKSk7XG4gICAgZm9yIChpID0gMDsgaSA8IHBhdGhzW2pdLmN1cnZlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGN1cnZlID0gcGF0aHNbal0uY3VydmVzW2ldO1xuXG4gICAgICB2YXIgeDEgPSBNYXRoLnJvdW5kKGN1cnZlLnBvaW50MS54ICogMTApO1xuICAgICAgdmFyIHkxID0gTWF0aC5yb3VuZChjdXJ2ZS5wb2ludDEueSAqIC0xMCk7XG4gICAgICB2YXIgeDIgPSBNYXRoLnJvdW5kKGN1cnZlLnBvaW50Mi54ICogMTApO1xuICAgICAgdmFyIHkyID0gTWF0aC5yb3VuZChjdXJ2ZS5wb2ludDIueSAqIC0xMCk7XG4gICAgICB2YXIgaHgxID0gY3VydmUuaGFuZGxlMS54ICogMTA7XG4gICAgICB2YXIgaHkxID0gY3VydmUuaGFuZGxlMS55ICogLTEwO1xuICAgICAgdmFyIGh4MiA9IGN1cnZlLmhhbmRsZTIueCAqIDEwO1xuICAgICAgdmFyIGh5MiA9IGN1cnZlLmhhbmRsZTIueSAqIC0xMDtcblxuICAgICAgaWYgKGh4MSArIGh5MSA9PT0gMCAmJiBoeDIgKyBoeTIgPT09IDApXG4gICAgICAgIHJlc3VsdFBhdGgubGluZVRvKHgyLCB5Mik7XG4gICAgICBlbHNlXG4gICAgICAgIHJlc3VsdFBhdGguY3VydmVUbyh4MSArIGh4MSwgeTEgKyBoeTEsIHgyICsgaHgyLCB5MiArIGh5MiwgeDIsIHkyKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0UGF0aDtcbn1cblxuR2VuZXJhdG9yLnByb3RvdHlwZS5leHBvcnRPcGVudHlwZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgdmFyIG9wZW50eXBlR2x5cGhzID0gW10sXG4gICAgZ2x5cGgsXG4gICAgcGF0aDtcblxuICAvLyBIQUNLOiAubm90ZGVmIGhhdmUgdG8gYmUgZmlyc3QgZGVmaW5lZFxuICBpZiAodGhpcy5nbHlwaHNbJy5ub3RkZWYnXSkge1xuICAgIGdseXBoID0gdGhpcy5nbHlwaHNbJy5ub3RkZWYnXTtcbiAgICBwYXRoID0gZHJhd09wZW50eXBlUGF0aChnbHlwaC5wYXRoKTtcblxuICAgIGlmIChwYXRoLmNvbW1hbmRzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgb3BlbnR5cGVHbHlwaHMucHVzaChuZXcgb3BlbnR5cGUuR2x5cGgoe1xuICAgICAgICBuYW1lOiAnLm5vdGRlZicsXG4gICAgICAgIHVuaWNvZGU6IDAsXG4gICAgICAgIGFkdmFuY2VXaWR0aDogZ2x5cGgud2lkdGggKiAxMCArIDEwMCxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSkpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgbm90ZGVmUGF0aCA9IG5ldyBvcGVudHlwZS5QYXRoKCk7XG4gICAgbm90ZGVmUGF0aC5tb3ZlVG8oMTAwLCAwKTtcbiAgICBub3RkZWZQYXRoLmxpbmVUbygxMDAsIDcwMCk7XG4gICAgbm90ZGVmUGF0aC5saW5lVG8oNjAwLCA3MDApO1xuICAgIG5vdGRlZlBhdGgubGluZVRvKDYwMCwgMCk7XG4gICAgbm90ZGVmUGF0aC5tb3ZlVG8oMjAwLCAxMDApO1xuICAgIG5vdGRlZlBhdGgubGluZVRvKDUwMCwgMTAwKTtcbiAgICBub3RkZWZQYXRoLmxpbmVUbyg1MDAsIDYwMCk7XG4gICAgbm90ZGVmUGF0aC5saW5lVG8oMjAwLCA2MDApO1xuICAgIG9wZW50eXBlR2x5cGhzLnB1c2gobmV3IG9wZW50eXBlLkdseXBoKHtcbiAgICAgIG5hbWU6ICcubm90ZGVmJyxcbiAgICAgIHVuaWNvZGU6IDAsXG4gICAgICBhZHZhbmNlV2lkdGg6IDY1MCxcbiAgICAgIHBhdGg6IG5vdGRlZlBhdGhcbiAgICB9KSk7XG4gIH1cblxuICBmb3IgKHZhciB4IGluIHRoaXMuZ2x5cGhzKSB7XG4gICAgLy8gSEFDSzogLm5vdGRlZiBhbHJlYWR5IGRlZmluZWRcbiAgICBpZiAoeCA9PSAnLm5vdGRlZicpXG4gICAgICBjb250aW51ZTtcblxuICAgIGdseXBoID0gdGhpcy5nbHlwaHNbeF07XG4gICAgcGF0aCA9IGRyYXdPcGVudHlwZVBhdGgoZ2x5cGgucGF0aCk7XG5cbiAgICBpZiAocGF0aC5jb21tYW5kcy5sZW5ndGggIT09IDApIHtcbiAgICAgIG9wZW50eXBlR2x5cGhzLnB1c2gobmV3IG9wZW50eXBlLkdseXBoKHtcbiAgICAgICAgbmFtZTogdGhpcy5hbHBoYWJldC5uYW1lTWFwW2dseXBoLm5hbWVdIHx8IGdseXBoLm5hbWUsXG4gICAgICAgIHVuaWNvZGU6IGdseXBoLm5hbWUuY2hhckNvZGVBdCgpLFxuICAgICAgICBhZHZhbmNlV2lkdGg6IGdseXBoLndpZHRoICogMTAgKyAxMDAsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1cblxuICBvcGVudHlwZUdseXBocy5wdXNoKG5ldyBvcGVudHlwZS5HbHlwaCh7XG4gICAgbmFtZTogJ3NwYWNlJyxcbiAgICB1bmljb2RlOiAzMixcbiAgICBhZHZhbmNlV2lkdGg6IDEwMDAsXG4gICAgcGF0aDogbmV3IG9wZW50eXBlLlBhdGgoKVxuICB9KSk7XG5cbiAgdGhpcy5mb250ID0gbmV3IG9wZW50eXBlLkZvbnQoe1xuICAgIGZhbWlseU5hbWU6IG9wdGlvbnMuZmFtaWx5TmFtZSB8fCAnR2x5cGhlclN0YW5kYXJ0JyxcbiAgICBzdHlsZU5hbWU6IG9wdGlvbnMuc3R5bGVOYW1lIHx8ICdNZWRpdW0nLFxuICAgIHVuaXRzUGVyRW06IDEwMDAsXG4gICAgYXNjZW5kZXI6IDEwMDAsXG4gICAgZGVzY2VuZGVyOiB0aGlzLmRlc2NlbmRlciAqIDE1MCxcbiAgICBnbHlwaHM6IG9wZW50eXBlR2x5cGhzXG4gIH0pO1xuXG4gIHZhciBidWZmZXIgPSB0aGlzLmZvbnQudG9BcnJheUJ1ZmZlcigpO1xuICB2YXIgZm9udDIgPSBvcGVudHlwZS5wYXJzZShidWZmZXIpO1xuXG4gIC8vZGVidWdnaW5nXG4gIGlmIChvcHRpb25zLmRlYnVnKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb250Mi5nbHlwaHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBnID0gZm9udDIuZ2x5cGhzLmdldChpKTtcbiAgICAgIHZhciBjdHggPSBjcmVhdGVHbHlwaENhbnZhcyhnLCAxNTApO1xuICAgICAgeCA9IDIwO1xuICAgICAgdmFyIHkgPSAxMjA7XG4gICAgICB2YXIgZm9udFNpemUgPSA3MjtcbiAgICAgIGcuZHJhdyhjdHgsIHgsIHksIGZvbnRTaXplKTtcbiAgICAgIC8vIGcuZHJhd1BvaW50cyhjdHgsIHgsIHksIGZvbnRTaXplKTtcbiAgICAgIGcuZHJhd01ldHJpY3MoY3R4LCB4LCB5LCBmb250U2l6ZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gRklYTUU6IGRlcGVuZHMgb24gZGl2IHdpdGggaWQgZ2x5cGhzXG4gIGZ1bmN0aW9uIGNyZWF0ZUdseXBoQ2FudmFzKGdseXBoLCBzaXplKSB7XG4gICAgdmFyIGNhbnZhc0lkLCBodG1sLCBnbHlwaHNEaXYsIHdyYXAsIGNhbnZhcywgY3R4O1xuICAgIGNhbnZhc0lkID0gJ2dseXBoXzInICsgZ2x5cGgudW5pY29kZTtcbiAgICBodG1sID0gJzxjYW52YXMgaWQ9XCInICsgY2FudmFzSWQgKyAnXCIgd2lkdGg9XCInICsgc2l6ZSArICdcIiBoZWlnaHQ9XCInICsgc2l6ZSArICdcIj48L2NhbnZhcz4nO1xuICAgIGdseXBoc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnbHlwaHMnKTtcbiAgICB3cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHdyYXAuaW5uZXJIVE1MID0gaHRtbDtcbiAgICBnbHlwaHNEaXYuYXBwZW5kQ2hpbGQod3JhcCk7XG4gICAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzSWQpO1xuICAgIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHJldHVybiBjdHg7XG4gIH1cbn07XG5cbkdlbmVyYXRvci5wcm90b3R5cGUuZG93bmxvYWRPVEYgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuZm9udClcbiAgICB0aGlzLmZvbnQuZG93bmxvYWQoKTtcbiAgZWxzZVxuICAgIGNvbnNvbGUubG9nKCd1c2UgZXhwb3J0T3BlbnR5cGUgZmlyc3QnKTtcbn07XG5cbmZ1bmN0aW9uIHNpZ24oeCkge1xuICAvLyAwID09IDFcbiAgcmV0dXJuIHggPj0gMCA/IDEgOiAtMTtcbn1cblxuZXhwb3J0cy5HZW5lcmF0b3IgPSBHZW5lcmF0b3I7XG4iLCJmdW5jdGlvbiBHbHlwaChuYW1lLCB3ZWlnaHQsIGNvbnRyYXN0LCBwcm9wb3J0aW9uKSB7XG4gIHRoaXMubmFtZSA9IG5hbWU7XG4gIHRoaXMud2VpZ2h0ID0gd2VpZ2h0O1xuICB0aGlzLmNvbnRyYXN0ID0gY29udHJhc3Q7XG4gIHRoaXMucHJvcG9ydGlvbiA9IHByb3BvcnRpb247XG5cbiAgdGhpcy5wYXRoID0gdW5kZWZpbmVkO1xuICB0aGlzLndpZHRoID0gMDtcbiAgdGhpcy5oZWlnaHQgPSAwO1xufVxuXG5HbHlwaC5wcm90b3R5cGUubWVyZ2VTZWdtZW50cyA9IGZ1bmN0aW9uKHNlZ21lbnRzKSB7XG5cbiAgdmFyIHJlc3VsdCA9IHNlZ21lbnRzWzBdLmNsb25lKCk7XG4gIGZvciAoaSA9IDE7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHJlc3VsdCA9IHJlc3VsdC51bml0ZShzZWdtZW50c1tpXSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLy9ERUJVR1xuR2x5cGgucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbih4LCB5LCBkZWJ1Zykge1xuICAvL2RlYnVnZ2luZ1xuICBpZiAoZGVidWcpIHtcbiAgICBuZXcgUGF0aC5DaXJjbGUoe1xuICAgICAgY2VudGVyOiBbeCwgeV0sXG4gICAgICByYWRpdXM6IDMsXG4gICAgICBzdHJva2VDb2xvcjogJ2JsdWUnXG4gICAgfSk7XG4gICAgbmV3IFBhdGguQ2lyY2xlKHtcbiAgICAgIGNlbnRlcjogW3ggKyB0aGlzLndpZHRoLCB5XSxcbiAgICAgIHJhZGl1czogMyxcbiAgICAgIHN0cm9rZUNvbG9yOiAnYmx1ZSdcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBwYXRoID0gdGhpcy5wYXRoLmNsb25lKCk7XG4gIHBhdGgucG9zaXRpb24gPSBbeCArIHBhdGgucG9zaXRpb24ueCwgeSArIHBhdGgucG9zaXRpb24ueV07XG4gIHBhdGguZmlsbENvbG9yID0gJ2JsYWNrJztcbn07XG5cbmV4cG9ydHMuR2x5cGggPSBHbHlwaDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldC5qcycpO1xudmFyIGdlbmVyYXRvciA9IHJlcXVpcmUoJy4vZ2VuZXJhdG9yLmpzJyk7XG52YXIgZ2x5cGggPSByZXF1aXJlKCcuL2dseXBoLmpzJyk7XG5cbmV4cG9ydHMuR2x5cGggPSBnbHlwaC5HbHlwaDtcbmV4cG9ydHMuQWxwaGFiZXQgPSBhbHBoYWJldC5BbHBoYWJldDtcbmV4cG9ydHMuR2VuZXJhdG9yID0gZ2VuZXJhdG9yLkdlbmVyYXRvcjtcbiJdfQ==
