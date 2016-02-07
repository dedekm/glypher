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
      [1, xheight, 'e'],
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
  if (options.type == 'stroke') {
    this.glyphs['.notdef'] = [
      [0, 5],
      [0, 10],
      [10, 10],
      [10, 0],
      [0, 0],
      [0, 5, 'c']
    ];
    this.glyphs.o = [
      [0, xheight / 2],
      [0, xheight],
      [10, xheight],
      [10, 0],
      [0, 0],
      [0, xheight / 2, 'c']
    ];
    this.glyphs.w = [
      [0, xheight],
      [0, xheight / 2],
      [5, 0],
      [10, xheight / 2],
      [15, 0],
      [20, xheight / 2],
      [20, xheight, 'e'],
      [10, xheight / 2],
      [10, xheight]
    ];
    this.glyphs.B = [
      [0, xheight],
      [0, 10],
      [10, 10],
      [8, xheight],
      [0, xheight, 'e'],
      [0, xheight / 2],
      [0, xheight],
      [10, xheight],
      [10, 0],
      [0, 0],
      [0, xheight / 2, 'c'],
    ];
    this.glyphs.D = [
      [0, 5],
      [0, 10],
      [7, 10],
      [10, xheight],
      [10, 10 - xheight],
      [7, 0],
      [0, 0],
      [0, 5, 'c'],
    ];
    this.glyphs.N = [
      [0, 0],
      [0, 10],
      [2, 10],
      [8, 0],
      [10, 0],
      [10, 10]
    ];
    this.glyphs.O = [
      [0, 5],
      [0, 10],
      [10, 10],
      [10, 0],
      [0, 0],
      [0, 5, 'c']
    ];
    this.glyphs.Q = [
      [0, 5],
      [0, 10],
      [10, 10],
      [10, 0],
      [0, 0],
      [0, 5, 'e'],
      [8, 0],
      // 0 - contrast ???
      [8, descender * 0.75],
      [10, descender * 0.75],
    ];
    this.glyphs.R = [
      [0, 0],
      [0, 10],
      [10, 10],
      [10, xheight],
      [0, xheight, 'e'],
      [2, xheight],
      [5, xheight],
      [10, xheight / 2],
      [10, 0]
    ];
    this.glyphs.W = [
      [0, 10],
      [0, xheight / 2],
      [5, 0],
      [10, xheight / 2],
      [15, 0],
      [20, xheight / 2],
      [20, 10, 'e'],
      [10, xheight / 2],
      [10, 10]
    ];
    this.glyphs['0'] = [
      [0, 5],
      [0, 10],
      [10, 10],
      [10, 0],
      [0, 0],
      [0, 5, 'c']
    ];
    this.glyphs['8'] = [
      [0, xheight],
      [0, 10],
      [10, 10],
      [10, xheight],
      [0, xheight, 'e'],
      [0, xheight / 2],
      [0, xheight],
      [10, xheight],
      [10, 0],
      [0, 0],
      [0, xheight / 2, 'c']
    ];
  }


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
  this.type = options.type || 'brush';
  this.proportion = options.proportion || (options.height / options.width) || 1;

  this.weight = options.weight || (this.type == 'brush' ? 20 : 5);
  this.contrast = this.type == 'brush' ? (options.contrast || 5) : this.weight;
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
    if (this.type == 'stroke')
      glyph = this.generateGlyph2(availableGlyphs[i], this.alphabet.glyphs[availableGlyphs[i]]);
    else
      glyph = this.generateGlyph(availableGlyphs[i], this.alphabet.glyphs[availableGlyphs[i]]);
    this.afterGenerateGlyph(glyph);
    this.glyphs[glyph.name] = glyph;
  }
  if (this.type == 'brush') {
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

  if (this.smooth)
    glyph.path.smooth({
      type: 'continuous'
    });

  return glyph;
};

//WIP
Generator.prototype.generateGlyph2 = function(name, points) {
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

  }

  glyph.path = new Group();
  for (i = 0; i < segments.length; i++) {
    if (segments[i].length) {
      var child = new Path(segments[i]);
      child.closed = true;
      glyph.path.addChild(child);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYWxwaGFiZXQuanMiLCJzcmMvZ2VuZXJhdG9yLmpzIiwic3JjL2dseXBoLmpzIiwic3JjL2dseXBoZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM3dCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5aUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImZ1bmN0aW9uIEFscGhhYmV0KG9wdGlvbnMpIHtcbiAgeGhlaWdodCA9IG9wdGlvbnMueGhlaWdodCB8fCA1O1xuICBkZXNjZW5kZXIgPSBvcHRpb25zLmRlc2NlbmRlciB8fCAtMztcbiAgYWVoZWlnaHQgPSBvcHRpb25zLmFlaGVpZ2h0IHx8IHhoZWlnaHQgLyAyO1xuICAvLyBGSVhNRVxuICB3ZWlnaHQgPSBvcHRpb25zLndlaWdodCB8fCAyMDtcblxuICB0aGlzLmdseXBocyA9IHtcbiAgICAnLm5vdGRlZic6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMCwgJ2MnXVxuICAgIF0sXG4gICAgYTogW1xuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgYWVoZWlnaHRdLFxuICAgICAgWzEwLCBhZWhlaWdodF1cbiAgICBdLFxuICAgIGI6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgYzogW1xuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIGQ6IFtcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIGU6IFtcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCBhZWhlaWdodF0sXG4gICAgICBbMCwgYWVoZWlnaHRdXG4gICAgXSxcbiAgICBmOiBbXG4gICAgICBbMywgMF0sXG4gICAgICBbMywgMTBdLFxuICAgICAgWzEwLCAxMCwgJ2UnXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIGc6IFtcbiAgICAgIFswLCBkZXNjZW5kZXJdLFxuICAgICAgWzEwLCBkZXNjZW5kZXJdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgIGg6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMCwgJ2UnXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIDBdXG4gICAgXSxcbiAgICBpOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodCwgJ2UnXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgeGhlaWdodCArIDJdXG4gICAgXSxcbiAgICAvL2RvdHRsZXNzIGkgaXMgbmVlZGVkIGZvciBhY2NlbnRlZCBpc1xuICAgICfEsSc6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgajogW1xuICAgICAgWy0yLCBkZXNjZW5kZXJdLFxuICAgICAgWzEsIGRlc2NlbmRlcl0sXG4gICAgICBbMSwgeGhlaWdodCwgJ2UnXSxcbiAgICAgIFsxLCAxMF0sXG4gICAgICBbMSwgeGhlaWdodCArIDJdXG4gICAgXSxcbiAgICBrOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIDAsICdlJ10sXG4gICAgICBbMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzUsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsxMCwgeGhlaWdodCwgJ2UnXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbNSwgeGhlaWdodCAvIDJdLFxuICAgICAgWzEwLCAwXVxuICAgIF0sXG4gICAgbDogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwXVxuICAgIF0sXG4gICAgbTogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMCwgJ2UnXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMjAsIHhoZWlnaHRdLFxuICAgICAgWzIwLCAwXVxuICAgIF0sXG4gICAgbjogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgIG86IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDAsICdjJ11cbiAgICBdLFxuICAgIHA6IFtcbiAgICAgIFswLCBkZXNjZW5kZXJdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF1cbiAgICBdLFxuICAgIHE6IFtcbiAgICAgIFsxMCwgZGVzY2VuZGVyXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdXG4gICAgXSxcbiAgICByOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICBzOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgdDogW1xuICAgICAgLy8gRklYTUU6IHhoZWlnaHQgKyAyID8/XG4gICAgICBbMywgeGhlaWdodCArIDJdLFxuICAgICAgWzMsIDBdLFxuICAgICAgWzEwLCAwLCAnZSddLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgdTogW1xuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIHY6IFtcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbNSwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsxMCwgeGhlaWdodF1cblxuICAgIF0sXG4gICAgdzogW1xuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFs1LCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzEwLCB4aGVpZ2h0LCAnIGUnXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzE1LCAwXSxcbiAgICAgIFsyMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzIwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgeDogW1xuICAgICAgLy8gWzAsIDBdLFxuICAgICAgLy8gWzEwLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgLy8gWzAsIHhoZWlnaHRdLFxuICAgICAgLy8gWzEwLCAwXVxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHQgLyA2XSxcbiAgICAgIFsxMCwgeGhlaWdodCAtIHhoZWlnaHQgLyA2XSxcbiAgICAgIFsxMCwgeGhlaWdodCwgJ2UnXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHQgLyA2XSxcbiAgICAgIFswLCB4aGVpZ2h0IC0geGhlaWdodCAvIDZdLFxuICAgICAgWzAsIHhoZWlnaHQsICdlJ11cbiAgICBdLFxuICAgIHk6IFtcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHQsICdlJ10sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCBkZXNjZW5kZXJdLFxuICAgICAgWzAsIGRlc2NlbmRlcl1cbiAgICBdLFxuICAgIHo6IFtcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICBBOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbNSwgMTBdLFxuICAgICAgWzEwLCAwLCAnZSddLFxuICAgICAgWzMsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFs3LCB4aGVpZ2h0IC8gMl1cbiAgICBdLFxuICAgIEI6IFtcbiAgICAgIC8vIFswLCB4aGVpZ2h0XSxcbiAgICAgIC8vIFswLCAxMF0sXG4gICAgICAvLyAvLyBGSVhNRTogc2hvdWxkIGRlcGVuZCBvbiBmb250IHdlaWdodFxuICAgICAgLy8gWzksIDEwXSxcbiAgICAgIC8vIFs5LCB4aGVpZ2h0XSxcbiAgICAgIC8vIFswLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgLy8gWzAsIDBdLFxuICAgICAgLy8gWzAsIHhoZWlnaHRdLFxuICAgICAgLy8gWzEwLCB4aGVpZ2h0XSxcbiAgICAgIC8vIFsxMCwgMF0sXG4gICAgICAvLyBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbOCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodCwgJ2UnXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdXG4gICAgXSxcbiAgICBDOiBbXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdXG4gICAgXSxcbiAgICBEOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzcsIDEwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIDEwIC0geGhlaWdodF0sXG4gICAgICBbNywgMF0sXG4gICAgICBbMCwgMF1cbiAgICBdLFxuICAgIEU6IFtcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMCwgJ2UnXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIEY6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwLCAnZSddLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgRzogW1xuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIEg6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMCwgJ2UnXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIDEwLCAnZSddLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgSTogW1xuICAgICAgWzUsIDEwXSxcbiAgICAgIFs1LCAwLCAnZSddLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwLCAnZSddLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdXG4gICAgXSxcbiAgICBKOiBbXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodCAvIDJdXG4gICAgXSxcbiAgICBLOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIDAsICdlJ10sXG4gICAgICBbMCwgNV0sXG4gICAgICBbNSwgNV0sXG4gICAgICBbMTAsIDEwLCAnZSddLFxuICAgICAgWzAsIDVdLFxuICAgICAgWzUsIDVdLFxuICAgICAgWzEwLCAwXVxuICAgIF0sXG4gICAgTDogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgIE06IFtcbiAgICAgIC8vIFswLCAwXSxcbiAgICAgIC8vIFswLCAxMF0sXG4gICAgICAvLyBbMTAsIDEwXSxcbiAgICAgIC8vIFsxMCwgeGhlaWdodCAvIDIsICdlJ10sXG4gICAgICAvLyBbMTAsIDEwXSxcbiAgICAgIC8vIFsyMCwgMTBdLFxuICAgICAgLy8gWzIwLCAwXVxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFs1LCAxMF0sXG4gICAgICBbMTAsICgxMCAtIHhoZWlnaHQpIC8gMl0sXG4gICAgICBbMTUsIDEwXSxcbiAgICAgIFsyMCwgMTBdLFxuICAgICAgWzIwLCAwXVxuICAgIF0sXG4gICAgTjogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgKDEwIC0geGhlaWdodCkgLyAyXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIDEwXVxuICAgIF0sXG4gICAgTzogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwLCAnYyddXG4gICAgXSxcbiAgICBQOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICBROiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDAsICdjJ10sXG4gICAgICBbOCwgMF0sXG4gICAgICAvLyAwIC0gY29udHJhc3QgPz8/XG4gICAgICBbOCwgZGVzY2VuZGVyICogMC43NV0sXG4gICAgICBbMTAsIGRlc2NlbmRlciAqIDAuNzVdLFxuICAgIF0sXG4gICAgUjogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzUsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTAsIDBdXG5cbiAgICBdLFxuICAgIFM6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdXG4gICAgXSxcbiAgICBUOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMCwgJ2UnXSxcbiAgICAgIFs1LCAxMF0sXG4gICAgICBbNSwgMF1cbiAgICBdLFxuICAgIFU6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCAxMF1cbiAgICBdLFxuICAgIFY6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzUsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTAsIDEwXVxuICAgIF0sXG4gICAgVzogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbNSwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsxMCwgMTAsICcgZSddLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTUsIDBdLFxuICAgICAgWzIwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMjAsIDEwXVxuXG4gICAgXSxcbiAgICBYOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodCAvIDIgLSAxXSxcbiAgICAgIFsxMCwgMTAgLSB4aGVpZ2h0IC8gMiArIDFdLFxuICAgICAgWzEwLCAxMCwgJ2UnXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyIC0gMV0sXG4gICAgICBbMCwgMTAgLSB4aGVpZ2h0IC8gMiArIDFdLFxuICAgICAgWzAsIDEwLCAnZSddXG4gICAgXSxcbiAgICBZOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIDhdLFxuICAgICAgWzUsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsxMCwgOF0sXG4gICAgICBbMTAsIDEwLCAnZSddLFxuICAgICAgWzUsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFs1LCAwXVxuICAgIF0sXG4gICAgWjogW1xuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzAsIDEwXVxuICAgIF0sXG4gICAgJ8uHJzogW1xuICAgICAgWzAsIDEyICsgKDggLSB4aGVpZ2h0KV0sXG4gICAgICBbMiwgMTJdLFxuICAgICAgWzQsIDEyICsgKDggLSB4aGVpZ2h0KV1cbiAgICBdLFxuICAgICfCtCc6IFtcbiAgICAgIFsyLCAxMl0sXG4gICAgICBbNCwgMTIgKyAoOCAtIHhoZWlnaHQpXVxuICAgIF0sXG4gICAgJ8uaJzogW1xuICAgICAgWzAsIDEyXSxcbiAgICAgIFswLCAxMiArICg4IC0geGhlaWdodCldLFxuICAgICAgWzQsIDEyICsgKDggLSB4aGVpZ2h0KV0sXG4gICAgICBbNCwgMTJdLFxuICAgICAgWzAsIDEyXVxuICAgIF0sXG4gICAgJzAnOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDAsICdjJ11cbiAgICBdLFxuICAgICcxJzogW1xuICAgICAgWzUsIDBdLFxuICAgICAgWzUsIDEwXSxcbiAgICAgIFswLCAxMCwgJ2UnXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgICcyJzogW1xuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFswLCAxMF1cbiAgICBdLFxuICAgICczJzogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzAsIDEwLCAnZSddLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgJzQnOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIDBdXG4gICAgXSxcbiAgICAnNSc6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdXG4gICAgXSxcbiAgICAnNic6IFtcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICAnNyc6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgICc4JzogW1xuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF1cbiAgICBdLFxuICAgICc5JzogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdLFxuICAgICcuJzogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDFdXG4gICAgXSxcbiAgICAnLCc6IFtcbiAgICAgIFswLCAtMl0sXG4gICAgICBbMCwgMV1cbiAgICBdLFxuICAgICchJzogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEsICdlJ10sXG4gICAgICBbMCwgM10sXG4gICAgICBbMCwgMTBdXG4gICAgXSxcbiAgICAvLyBGSVhNRTogeGhlaWdodCB4IDNcbiAgICAnPyc6IFtcbiAgICAgIFs0LCAwXSxcbiAgICAgIFs0LCAxLCAnZSddLFxuICAgICAgWzQsIDNdLFxuICAgICAgWzQsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzAsIDEwXSxcbiAgICBdLFxuICAgIC8vaHlwaGVuXG4gICAgJ+KAkCc6IFtcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMiwgeGhlaWdodCAvIDJdXG4gICAgXSxcbiAgICAvL2VuZGFzaFxuICAgICfigJMnOiBbXG4gICAgICBbMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl1cbiAgICBdLFxuICAgIC8vZW1kYXNoXG4gICAgJ+KAlCc6IFtcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMjAsIHhoZWlnaHQgLyAyXVxuICAgIF0sXG4gICAgLy9taW51c1xuICAgICctJzogW1xuICAgICAgWzAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsyLCB4aGVpZ2h0IC8gMl1cbiAgICBdLFxuICAgICcvJzogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzUsIDEwXVxuICAgIF0sXG4gICAgJ0AnOiBbXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxNSArIE1hdGgucm91bmQod2VpZ2h0IC8gNCksIDBdLFxuICAgICAgWzE1ICsgTWF0aC5yb3VuZCh3ZWlnaHQgLyA0KSwgMTBdLFxuICAgICAgWzAsIDEwXSxcbiAgICBdLFxuICAgICcmJzogW1xuICAgICAgWzExLCAxMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzExLCAwXSxcbiAgICAgIFsxMSwgeGhlaWdodCArICgxMCAtIHhoZWlnaHQpIC8gMywgJ2UnXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxNCwgeGhlaWdodF1cbiAgICBdXG4gIH07XG4gIGlmIChvcHRpb25zLnR5cGUgPT0gJ3N0cm9rZScpIHtcbiAgICB0aGlzLmdseXBoc1snLm5vdGRlZiddID0gW1xuICAgICAgWzAsIDVdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCA1LCAnYyddXG4gICAgXTtcbiAgICB0aGlzLmdseXBocy5vID0gW1xuICAgICAgWzAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyLCAnYyddXG4gICAgXTtcbiAgICB0aGlzLmdseXBocy53ID0gW1xuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFs1LCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzE1LCAwXSxcbiAgICAgIFsyMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzIwLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG4gICAgXTtcbiAgICB0aGlzLmdseXBocy5CID0gW1xuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzgsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHQsICdlJ10sXG4gICAgICBbMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodCAvIDIsICdjJ10sXG4gICAgXTtcbiAgICB0aGlzLmdseXBocy5EID0gW1xuICAgICAgWzAsIDVdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFs3LCAxMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAxMCAtIHhoZWlnaHRdLFxuICAgICAgWzcsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDUsICdjJ10sXG4gICAgXTtcbiAgICB0aGlzLmdseXBocy5OID0gW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsyLCAxMF0sXG4gICAgICBbOCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCAxMF1cbiAgICBdO1xuICAgIHRoaXMuZ2x5cGhzLk8gPSBbXG4gICAgICBbMCwgNV0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDUsICdjJ11cbiAgICBdO1xuICAgIHRoaXMuZ2x5cGhzLlEgPSBbXG4gICAgICBbMCwgNV0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDUsICdlJ10sXG4gICAgICBbOCwgMF0sXG4gICAgICAvLyAwIC0gY29udHJhc3QgPz8/XG4gICAgICBbOCwgZGVzY2VuZGVyICogMC43NV0sXG4gICAgICBbMTAsIGRlc2NlbmRlciAqIDAuNzVdLFxuICAgIF07XG4gICAgdGhpcy5nbHlwaHMuUiA9IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodCwgJ2UnXSxcbiAgICAgIFsyLCB4aGVpZ2h0XSxcbiAgICAgIFs1LCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzEwLCAwXVxuICAgIF07XG4gICAgdGhpcy5nbHlwaHMuVyA9IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzUsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTUsIDBdLFxuICAgICAgWzIwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMjAsIDEwLCAnZSddLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTAsIDEwXVxuICAgIF07XG4gICAgdGhpcy5nbHlwaHNbJzAnXSA9IFtcbiAgICAgIFswLCA1XSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgNSwgJ2MnXVxuICAgIF07XG4gICAgdGhpcy5nbHlwaHNbJzgnXSA9IFtcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodCwgJ2UnXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMiwgJ2MnXVxuICAgIF07XG4gIH1cblxuXG4gIGlmICh3ZWlnaHQgPCAxNSlcbiAgICB0aGlzLmdseXBocy5HLnB1c2goWzggLSBNYXRoLnJvdW5kKHdlaWdodCAvIDEwKSwgeGhlaWdodF0pO1xuXG4gIHRoaXMubmFtZU1hcCA9IHtcbiAgICAnxLEnOiAnZG90bGVzc2knLFxuICAgICfCtCc6ICdhY3V0ZScsXG4gICAgJ8uHJzogJ2Nhcm9uJyxcbiAgICAny5onOiAncmluZycsXG4gICAgJzAnOiAnemVybycsXG4gICAgJzEnOiAnb25lJyxcbiAgICAnMic6ICd0d28nLFxuICAgICczJzogJ3RocmVlJyxcbiAgICAnNCc6ICdmb3VyJyxcbiAgICAnNSc6ICdmaXZlJyxcbiAgICAnNic6ICdzaXgnLFxuICAgICc3JzogJ3NldmVuJyxcbiAgICAnOCc6ICdlaWdodCcsXG4gICAgJzknOiAnbmluZScsXG4gICAgJ+KAkCc6ICdoeXBoZW4nLFxuICAgICfigJMnOiAnZW5kYXNoJyxcbiAgICAn4oCUJzogJ2VtZGFzaCcsXG4gICAgJy0nOiAnbWludXMnLFxuICAgICcuJzogJ3BlcmlvZCcsXG4gICAgJywnOiAnY29tbWEnLFxuICAgICchJzogJ2V4Y2xhbScsXG4gICAgJz8nOiAncXVlc3Rpb24nLFxuICAgICcvJzogJ3NsYXNoJyxcbiAgICAnQCc6ICdhdCcsXG4gICAgJyYnOiAnYW1wZXJzYW5kJ1xuICB9O1xufVxuQWxwaGFiZXQucHJvdG90eXBlLm1heEhlaWdodCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbWF4ID0gMDtcbiAgZm9yICh2YXIga2V5IGluIHRoaXMuZ2x5cGhzKSB7XG4gICAgaWYgKHRoaXMuZ2x5cGhzW2tleV0pIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5nbHlwaHNba2V5XS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5nbHlwaHNba2V5XVtpXVsxXSA+IG1heClcbiAgICAgICAgICBtYXggPSB0aGlzLmdseXBoc1trZXldW2ldWzFdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtYXg7XG59O1xuXG5BbHBoYWJldC5wcm90b3R5cGUuYXZhaWxhYmxlR2x5cGhzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmdseXBocyk7XG59O1xuXG5leHBvcnRzLkFscGhhYmV0ID0gQWxwaGFiZXQ7XG4iLCJmdW5jdGlvbiBHZW5lcmF0b3Iob3B0aW9ucykge1xuICBwYXBlci5pbnN0YWxsKHdpbmRvdyk7XG4gIC8vIEZJWE1FOlxuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Q2FudmFzJyk7XG4gIHBhcGVyLnNldHVwKGNhbnZhcyk7XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHRoaXMudHlwZSA9IG9wdGlvbnMudHlwZSB8fCAnYnJ1c2gnO1xuICB0aGlzLnByb3BvcnRpb24gPSBvcHRpb25zLnByb3BvcnRpb24gfHwgKG9wdGlvbnMuaGVpZ2h0IC8gb3B0aW9ucy53aWR0aCkgfHwgMTtcblxuICB0aGlzLndlaWdodCA9IG9wdGlvbnMud2VpZ2h0IHx8ICh0aGlzLnR5cGUgPT0gJ2JydXNoJyA/IDIwIDogNSk7XG4gIHRoaXMuY29udHJhc3QgPSB0aGlzLnR5cGUgPT0gJ2JydXNoJyA/IChvcHRpb25zLmNvbnRyYXN0IHx8IDUpIDogdGhpcy53ZWlnaHQ7XG4gIHRoaXMuZGVzY2VuZGVyID0gb3B0aW9ucy5kZXNjZW5kZXIgfHwgLTM7XG4gIHRoaXMueHNoaWZ0ID0gb3B0aW9ucy54c2hpZnQgfHwgMDtcbiAgdGhpcy55c2hpZnQgPSBvcHRpb25zLnlzaGlmdCB8fCAwO1xuICB0aGlzLml0YWxpYyA9IG9wdGlvbnMuaXRhbGljIHx8IDA7XG4gIHRoaXMuc2VnbWVudFJlZHVjdGlvbiA9IG9wdGlvbnMuc2VnbWVudFJlZHVjdGlvbjtcbiAgdGhpcy5zbW9vdGggPSBvcHRpb25zLnNtb290aDtcblxuICB0aGlzLnNpemUgPSAxMDtcblxuICB0aGlzLmFscGhhYmV0ID0gb3B0aW9ucy5hbHBoYWJldCB8fCBuZXcgZ2x5cGhlci5BbHBoYWJldChvcHRpb25zKTtcbiAgdGhpcy5nbHlwaHMgPSBbXTtcbiAgdGhpcy5vcGVudHlwZSA9IHVuZGVmaW5lZDtcbn1cblxuR2VuZXJhdG9yLnByb3RvdHlwZS5nZW5lcmF0ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmdseXBocyA9IHt9O1xuICB2YXIgYXZhaWxhYmxlR2x5cGhzID0gdGhpcy5hbHBoYWJldC5hdmFpbGFibGVHbHlwaHMoKSxcbiAgICBnbHlwaDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGF2YWlsYWJsZUdseXBocy5sZW5ndGg7IGkrKykge1xuICAgIHRoaXMuYmVmb3JlR2VuZXJhdGVHbHlwaChhdmFpbGFibGVHbHlwaHNbaV0pO1xuICAgIGlmICh0aGlzLnR5cGUgPT0gJ3N0cm9rZScpXG4gICAgICBnbHlwaCA9IHRoaXMuZ2VuZXJhdGVHbHlwaDIoYXZhaWxhYmxlR2x5cGhzW2ldLCB0aGlzLmFscGhhYmV0LmdseXBoc1thdmFpbGFibGVHbHlwaHNbaV1dKTtcbiAgICBlbHNlXG4gICAgICBnbHlwaCA9IHRoaXMuZ2VuZXJhdGVHbHlwaChhdmFpbGFibGVHbHlwaHNbaV0sIHRoaXMuYWxwaGFiZXQuZ2x5cGhzW2F2YWlsYWJsZUdseXBoc1tpXV0pO1xuICAgIHRoaXMuYWZ0ZXJHZW5lcmF0ZUdseXBoKGdseXBoKTtcbiAgICB0aGlzLmdseXBoc1tnbHlwaC5uYW1lXSA9IGdseXBoO1xuICB9XG4gIGlmICh0aGlzLnR5cGUgPT0gJ2JydXNoJykge1xuICAgIHZhciBhY2NlbnQgPSAnYWN1dGUnO1xuICAgIGF2YWlsYWJsZUdseXBocyA9ICdhZWlvdXlBRUlPVVknO1xuICAgIGZvciAoaSA9IDA7IGkgPCBhdmFpbGFibGVHbHlwaHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuYmVmb3JlR2VuZXJhdGVHbHlwaChhdmFpbGFibGVHbHlwaHNbaV0pO1xuICAgICAgZ2x5cGggPSB0aGlzLmdlbmVyYXRlR2x5cGhXaXRoQWNjZW50KGF2YWlsYWJsZUdseXBoc1tpXSwgYWNjZW50KTtcbiAgICAgIHRoaXMuYWZ0ZXJHZW5lcmF0ZUdseXBoKGdseXBoKTtcbiAgICAgIHRoaXMuZ2x5cGhzW2dseXBoLm5hbWVdID0gZ2x5cGg7XG4gICAgfVxuICAgIC8vIEZJWE1FOiBkY2Fyb24gdGNhcm9uXG4gICAgYWNjZW50ID0gJ2Nhcm9uJztcbiAgICBhdmFpbGFibGVHbHlwaHMgPSAnY2VucnN6Q0RFTlJTVFonO1xuICAgIGZvciAoaSA9IDA7IGkgPCBhdmFpbGFibGVHbHlwaHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuYmVmb3JlR2VuZXJhdGVHbHlwaChhdmFpbGFibGVHbHlwaHNbaV0pO1xuICAgICAgZ2x5cGggPSB0aGlzLmdlbmVyYXRlR2x5cGhXaXRoQWNjZW50KGF2YWlsYWJsZUdseXBoc1tpXSwgYWNjZW50KTtcbiAgICAgIHRoaXMuYWZ0ZXJHZW5lcmF0ZUdseXBoKGdseXBoKTtcbiAgICAgIHRoaXMuZ2x5cGhzW2dseXBoLm5hbWVdID0gZ2x5cGg7XG4gICAgfVxuXG4gICAgYWNjZW50ID0gJ3JpbmcnO1xuICAgIGF2YWlsYWJsZUdseXBocyA9ICd1VSc7XG4gICAgZm9yIChpID0gMDsgaSA8IGF2YWlsYWJsZUdseXBocy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5iZWZvcmVHZW5lcmF0ZUdseXBoKGF2YWlsYWJsZUdseXBoc1tpXSk7XG4gICAgICBnbHlwaCA9IHRoaXMuZ2VuZXJhdGVHbHlwaFdpdGhBY2NlbnQoYXZhaWxhYmxlR2x5cGhzW2ldLCBhY2NlbnQpO1xuICAgICAgdGhpcy5hZnRlckdlbmVyYXRlR2x5cGgoZ2x5cGgpO1xuICAgICAgdGhpcy5nbHlwaHNbZ2x5cGgubmFtZV0gPSBnbHlwaDtcbiAgICB9XG4gIH1cbn07XG5cbkdlbmVyYXRvci5wcm90b3R5cGUuZ2V0R2x5cGggPSBmdW5jdGlvbihuYW1lKSB7XG4gIGlmICh0aGlzLmdseXBoc1tuYW1lXSkge1xuICAgIHJldHVybiB0aGlzLmdseXBoc1tuYW1lXTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnZ2x5cGggJyArIGdseXBoLm5hbWUgKyAnIG5vdCBkZWZpbmVkJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5HZW5lcmF0b3IucHJvdG90eXBlLmFkanVzdFBvaW50ID0gZnVuY3Rpb24ocG9pbnQpIHtcbiAgcmV0dXJuIG5ldyBQb2ludChwb2ludClcbiAgICAubXVsdGlwbHkoW3RoaXMuc2l6ZSAvIHRoaXMucHJvcG9ydGlvbiwgdGhpcy5zaXplIC0gKHRoaXMuY29udHJhc3QgKiAyIC8gdGhpcy5zaXplKV0pXG4gICAgLmFkZCh0aGlzLndlaWdodCwgdGhpcy5jb250cmFzdClcbiAgICAubXVsdGlwbHkoMSwgLTEpXG4gICAgLmFkZCh0aGlzLnhzaGlmdCwgdGhpcy55c2hpZnQpO1xufTtcblxuR2VuZXJhdG9yLnByb3RvdHlwZS5kcmF3RG90ID0gZnVuY3Rpb24ocG9pbnQsIGJveCkge1xuICB2YXIgcDEgPSB0aGlzLmFkanVzdFBvaW50KHBvaW50KTtcbiAgcmV0dXJuIG5ldyBQYXRoLlJlY3RhbmdsZShwMS5zdWJ0cmFjdChib3gpLCBwMS5hZGQoYm94KSk7XG59O1xuXG5HZW5lcmF0b3IucHJvdG90eXBlLmJlZm9yZUdlbmVyYXRlR2x5cGggPSBmdW5jdGlvbihuYW1lKSB7XG5cbn07XG5cbkdlbmVyYXRvci5wcm90b3R5cGUuYWZ0ZXJHZW5lcmF0ZUdseXBoID0gZnVuY3Rpb24oZ2x5cGgpIHtcblxufTtcblxuR2VuZXJhdG9yLnByb3RvdHlwZS5nZW5lcmF0ZUdseXBoID0gZnVuY3Rpb24obmFtZSwgcG9pbnRzKSB7XG4gIHBvaW50cyA9IHBvaW50cyB8fCB0aGlzLmFscGhhYmV0LmdseXBoc1tuYW1lXTtcbiAgdmFyIGdseXBoID0gbmV3IGdseXBoZXIuR2x5cGgobmFtZSwgdGhpcy53ZWlnaHQsIHRoaXMuY29udHJhc3QsIHRoaXMucHJvcG9ydGlvbik7XG5cbiAgdmFyIHNlZ21lbnRzID0gW107XG4gIHZhciBib3ggPSBuZXcgUG9pbnQoZ2x5cGgud2VpZ2h0LCBnbHlwaC5jb250cmFzdCk7XG4gIHZhciBzdGFydFBvaW50O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy9XSVBcbiAgICBpZiAocG9pbnRzW2ldWzJdID09ICdkb3QnKSB7XG4gICAgICBzZWdtZW50cy5wdXNoKHRoaXMuZHJhd0RvdChwb2ludHNbaV0sIGJveCkpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGkgPj0gcG9pbnRzLmxlbmd0aCAtIDEpXG4gICAgICBicmVhaztcblxuICAgIHZhciBwYXRoID0gbmV3IFBhdGgoKTtcblxuICAgIHZhciBwMSA9IHRoaXMuYWRqdXN0UG9pbnQocG9pbnRzW2ldKTtcbiAgICB2YXIgcDIgPSB0aGlzLmFkanVzdFBvaW50KHBvaW50c1tpICsgMV0pO1xuXG4gICAgaWYgKHBvaW50c1tpICsgMV1bMl0gPT0gJ2MnKSB7XG4gICAgICBwMiA9IHN0YXJ0UG9pbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHAyID0gdGhpcy5hZGp1c3RQb2ludChwb2ludHNbaSArIDFdKTtcbiAgICAgIHN0YXJ0UG9pbnQgPSBzdGFydFBvaW50IHx8IHAxO1xuICAgIH1cblxuICAgIHZhciB2ZWN0b3IgPSBwMi5zdWJ0cmFjdChwMSk7XG4gICAgdmFyIHggPSBzaWduKHZlY3Rvci54KTtcbiAgICB2YXIgeSA9IHNpZ24odmVjdG9yLnkpO1xuXG4gICAgLy8gV0lQXG4gICAgaWYgKHRoaXMuc2VnbWVudFJlZHVjdGlvbikge1xuICAgICAgdmVjdG9yLmxlbmd0aCAtPSB0aGlzLnNlZ21lbnRSZWR1Y3Rpb24gKiA1O1xuICAgICAgcDIgPSBwMS5hZGQodmVjdG9yKTtcbiAgICAgIHZhciB2ZWN0b3IyID0gcDEuc3VidHJhY3QocDIpO1xuICAgICAgdmVjdG9yMi5sZW5ndGggLT0gdGhpcy5zZWdtZW50UmVkdWN0aW9uICogNTtcbiAgICAgIHAxID0gcDIuYWRkKHZlY3RvcjIpO1xuICAgIH1cblxuICAgIHZhciBiO1xuICAgIGlmIChpICE9PSAwICYmIHBvaW50c1tpIC0gMV1bMl0gIT09ICdlJyB8fCB2ZWN0b3IuYW5nbGUgJSA5MCA9PT0gMCkge1xuICAgICAgYiA9IHAxLmFkZChib3gubXVsdGlwbHkoW3ggKiAtMSwgeV0pKTtcbiAgICAgIGIgPSBiLmFkZChiLnkgKiAtMSAqIHRoaXMuaXRhbGljLCAwKTtcbiAgICAgIHBhdGguYWRkKGIpO1xuICAgIH1cblxuICAgIGIgPSBwMS5hZGQoYm94Lm11bHRpcGx5KFt4ICogLTEsIHkgKiAtMV0pKTtcbiAgICBiID0gYi5hZGQoYi55ICogLTEgKiB0aGlzLml0YWxpYywgMCk7XG4gICAgLy8gaWYgKGkgPT09IDAgfHwgcG9pbnRzW2kgLSAxXVsyXSA9PT0gJ2UnICYmIHZlY3Rvci5hbmdsZSAlIDkwICE9PSAwKVxuICAgIC8vICAgYiA9IGIuYWRkKC0yMCwgMCk7XG4gICAgcGF0aC5hZGQoYik7XG5cbiAgICBiID0gcDEuYWRkKGJveC5tdWx0aXBseShbeCwgeSAqIC0xXSkpO1xuICAgIGIgPSBiLmFkZChiLnkgKiAtMSAqIHRoaXMuaXRhbGljLCAwKTtcbiAgICBwYXRoLmFkZChiKTtcblxuICAgIGlmIChpICsgMSAhPT0gcG9pbnRzLmxlbmd0aCAtIDEgJiYgcG9pbnRzW2kgKyAxXVsyXSAhPT0gJ2UnIHx8IHZlY3Rvci5hbmdsZSAlIDkwID09PSAwKSB7XG4gICAgICBiID0gcDIuYWRkKGJveC5tdWx0aXBseShbeCwgeSAqIC0xXSkpO1xuICAgICAgYiA9IGIuYWRkKGIueSAqIC0xICogdGhpcy5pdGFsaWMsIDApO1xuICAgICAgcGF0aC5hZGQoYik7XG4gICAgfVxuXG4gICAgYiA9IHAyLmFkZChib3gubXVsdGlwbHkoW3gsIHldKSk7XG4gICAgYiA9IGIuYWRkKGIueSAqIC0xICogdGhpcy5pdGFsaWMsIDApO1xuICAgIC8vIGlmIChpICsgMSAhPT0gcG9pbnRzLmxlbmd0aCAtIDEgJiYgcG9pbnRzW2kgKyAxXVsyXSAhPT0gJ2UnIHx8IHZlY3Rvci5hbmdsZSAlIDkwID09PSAwKSB7XG4gICAgLy8gfWVsc2V7XG4gICAgLy8gICB2YXIgdiA9IHAxLnN1YnRyYWN0KHAyKTtcbiAgICAvLyAgIGIgPSBiLmFkZCgodGhpcy5jb250cmFzdCoyKS9NYXRoLnRhbih2LmFuZ2xlSW5SYWRpYW5zKSAqIC0xLCAwKTtcbiAgICAvLyB9XG4gICAgcGF0aC5hZGQoYik7XG5cbiAgICBiID0gcDIuYWRkKGJveC5tdWx0aXBseShbeCAqIC0xLCB5XSkpO1xuICAgIGIgPSBiLmFkZChiLnkgKiAtMSAqIHRoaXMuaXRhbGljLCAwKTtcbiAgICBwYXRoLmFkZChiKTtcblxuXG4gICAgLy8gRklYTUU6IHJvdW5kIGVkZ2VzXG4gICAgLy8gdmFyIGMgPSBuZXcgUGF0aC5DaXJjbGUoe1xuICAgIC8vICAgY2VudGVyOiBbMCwgMF0sXG4gICAgLy8gICByYWRpdXM6IHRoaXMud2VpZ2h0XG4gICAgLy8gfSk7XG4gICAgLy9cbiAgICAvLyBjLnJvdGF0ZSh2ZWN0b3IuYW5nbGUpO1xuICAgIC8vIGMucG9zaXRpb24gPSBwMTtcbiAgICAvLyBwYXRoLmFkZChjLnNlZ21lbnRzWzNdKTtcbiAgICAvLyBwYXRoLmFkZChjLnNlZ21lbnRzWzBdKTtcbiAgICAvLyBwYXRoLmFkZChjLnNlZ21lbnRzWzFdKTtcbiAgICAvL1xuICAgIC8vIGMucG9zaXRpb24gPSBwMjtcbiAgICAvLyBwYXRoLmFkZChjLnNlZ21lbnRzWzFdKTtcbiAgICAvLyBwYXRoLmFkZChjLnNlZ21lbnRzWzJdKTtcbiAgICAvLyBwYXRoLmFkZChjLnNlZ21lbnRzWzNdKTtcblxuICAgIHBhdGgucmVkdWNlKCk7XG4gICAgcGF0aC5jbG9zZWQgPSB0cnVlO1xuXG4gICAgc2VnbWVudHMucHVzaChwYXRoKTtcblxuICAgIGlmIChwMS54ICsgZ2x5cGgud2VpZ2h0ID4gZ2x5cGgud2lkdGgpXG4gICAgICBnbHlwaC53aWR0aCA9IHAxLnggKyBnbHlwaC53ZWlnaHQ7XG5cbiAgICAvLyBGSVhNRTogYWRkIGxhc3QgcG9pbnRcbiAgICBpZiAocDIueCArIGdseXBoLndlaWdodCA+IGdseXBoLndpZHRoKVxuICAgICAgZ2x5cGgud2lkdGggPSBwMi54ICsgZ2x5cGgud2VpZ2h0O1xuXG4gICAgaWYgKHAxLnkgKyBnbHlwaC5jb250cmFzdCA8IGdseXBoLmhlaWdodClcbiAgICAgIGdseXBoLmhlaWdodCA9IHAxLnkgKyBnbHlwaC5jb250cmFzdDtcblxuICAgIC8vIEZJWE1FOiBhZGQgbGFzdCBwb2ludFxuICAgIGlmIChwMi55ICsgZ2x5cGguY29udHJhc3QgPCBnbHlwaC5oZWlnaHQpXG4gICAgICBnbHlwaC5oZWlnaHQgPSBwMi55ICsgZ2x5cGguY29udHJhc3Q7XG5cbiAgICBpZiAocG9pbnRzW2kgKyAxXVsyXSA9PSAnZScgfHwgcG9pbnRzW2kgKyAxXVsyXSA9PSAnYycpIHtcbiAgICAgIGkrKztcbiAgICAgIHN0YXJ0UG9pbnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIGdseXBoLnBhdGggPSBnbHlwaC5tZXJnZVNlZ21lbnRzKHNlZ21lbnRzKTtcbiAgZ2x5cGgucGF0aC5yZWR1Y2UoKTtcblxuICBpZiAodGhpcy5zbW9vdGgpXG4gICAgZ2x5cGgucGF0aC5zbW9vdGgoe1xuICAgICAgdHlwZTogJ2NvbnRpbnVvdXMnXG4gICAgfSk7XG5cbiAgcmV0dXJuIGdseXBoO1xufTtcblxuLy9XSVBcbkdlbmVyYXRvci5wcm90b3R5cGUuZ2VuZXJhdGVHbHlwaDIgPSBmdW5jdGlvbihuYW1lLCBwb2ludHMpIHtcbiAgdmFyIGdseXBoID0gbmV3IGdseXBoZXIuR2x5cGgobmFtZSwgdGhpcy53ZWlnaHQsIHRoaXMuY29udHJhc3QsIHRoaXMucHJvcG9ydGlvbik7XG5cbiAgdmFyIG5leHRBbmdsZSxcbiAgICBjb3JuZXIsXG4gICAgc2VnbWVudHMgPSBbXG4gICAgICBbXVxuICAgIF0sXG4gICAgY29ybmVyUG9pbnQzLFxuICAgIHN0YXJ0UG9pbnQ7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAvL1dJUFxuICAgIGlmIChwb2ludHNbaV1bMl0gPT0gJ2RvdCcpIHtcbiAgICAgIHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdLnB1c2godGhpcy5hZGp1c3RQb2ludChwb2ludHNbaV0pLmFkZCh0aGlzLndlaWdodCwgdGhpcy53ZWlnaHQgKiAtMSkpO1xuICAgICAgc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV0ucHVzaCh0aGlzLmFkanVzdFBvaW50KHBvaW50c1tpXSkuYWRkKHRoaXMud2VpZ2h0ICogLTEsIHRoaXMud2VpZ2h0ICogLTEpKTtcbiAgICAgIHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdLnB1c2godGhpcy5hZGp1c3RQb2ludChwb2ludHNbaV0pLmFkZCh0aGlzLndlaWdodCAqIC0xLCB0aGlzLndlaWdodCkpO1xuICAgICAgc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV0ucHVzaCh0aGlzLmFkanVzdFBvaW50KHBvaW50c1tpXSkuYWRkKHRoaXMud2VpZ2h0KSk7XG4gICAgICBzZWdtZW50cy5wdXNoKFtdKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChpID49IHBvaW50cy5sZW5ndGggLSAxKVxuICAgICAgYnJlYWs7XG5cbiAgICB2YXIgcG9pbnQxID0gdGhpcy5hZGp1c3RQb2ludChwb2ludHNbaV0pO1xuICAgIHZhciBwb2ludDIgPSB0aGlzLmFkanVzdFBvaW50KHBvaW50c1tpICsgMV0pO1xuXG4gICAgaWYgKHBvaW50c1tpICsgMV1bMl0gPT0gJ2MnKSB7XG4gICAgICBwb2ludDIgPSB0aGlzLmFkanVzdFBvaW50KHBvaW50c1tzdGFydFBvaW50IC0gMV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwb2ludDIgPSB0aGlzLmFkanVzdFBvaW50KHBvaW50c1tpICsgMV0pO1xuICAgICAgc3RhcnRQb2ludCA9IHN0YXJ0UG9pbnQgfHwgaTtcbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNBbmdsZSA9IG5leHRBbmdsZTtcblxuICAgIHZhciB2ZWN0b3IxID0gcG9pbnQyLnN1YnRyYWN0KHBvaW50MSk7XG4gICAgaWYgKHBvaW50c1tpICsgMl0pIHtcbiAgICAgIHZhciB2ZWN0b3IyID0gdGhpcy5hZGp1c3RQb2ludChwb2ludHNbaSArIDJdKS5zdWJ0cmFjdChwb2ludDIpO1xuICAgICAgbmV4dEFuZ2xlID0gdmVjdG9yMS5yb3RhdGUoMTgwKS5nZXREaXJlY3RlZEFuZ2xlKHZlY3RvcjIpO1xuICAgIH1cbiAgICB2YXIgcDEsIHAyLCBwMywgcDQ7XG4gICAgaWYgKHBvaW50c1tpIC0gMV0gJiYgcG9pbnRzW2kgLSAxXVsyXSA9PSAnZScgfHwgaSA9PT0gMCkge1xuICAgICAgcDEgPSBwb2ludDEuYWRkKHRoaXMud2VpZ2h0ICogLTEsIHRoaXMud2VpZ2h0KS5yb3RhdGUodmVjdG9yMS5hbmdsZSArIDkwLCBwb2ludDEpO1xuICAgICAgcDIgPSBwb2ludDEuYWRkKHRoaXMud2VpZ2h0LCB0aGlzLndlaWdodCkucm90YXRlKHZlY3RvcjEuYW5nbGUgKyA5MCwgcG9pbnQxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcDEgPSBwb2ludDEuYWRkKHRoaXMud2VpZ2h0LCAwKS5yb3RhdGUodmVjdG9yMS5hbmdsZSAtIDkwLCBwb2ludDEpO1xuICAgICAgcDIgPSBwb2ludDEuYWRkKHRoaXMud2VpZ2h0LCAwKS5yb3RhdGUodmVjdG9yMS5hbmdsZSArIDkwLCBwb2ludDEpO1xuICAgIH1cblxuICAgIGlmIChwb2ludHNbaSArIDFdWzJdID09ICdlJyB8fCBpID09PSBwb2ludHMubGVuZ3RoIC0gMikge1xuICAgICAgcDMgPSBwb2ludDIuYWRkKHRoaXMud2VpZ2h0ICogLTEsIHRoaXMud2VpZ2h0KS5yb3RhdGUodmVjdG9yMS5hbmdsZSAtIDkwLCBwb2ludDIpO1xuICAgICAgcDQgPSBwb2ludDIuYWRkKHRoaXMud2VpZ2h0LCB0aGlzLndlaWdodCkucm90YXRlKHZlY3RvcjEuYW5nbGUgLSA5MCwgcG9pbnQyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcDMgPSBwb2ludDIuYWRkKHRoaXMud2VpZ2h0LCAwKS5yb3RhdGUodmVjdG9yMS5hbmdsZSArIDkwLCBwb2ludDIpO1xuICAgICAgcDQgPSBwb2ludDIuYWRkKHRoaXMud2VpZ2h0LCAwKS5yb3RhdGUodmVjdG9yMS5hbmdsZSAtIDkwLCBwb2ludDIpO1xuICAgIH1cblxuICAgIHZhciBjb3JuZXJQb2ludCxcbiAgICAgIGNvcm5lclBvaW50MjtcblxuICAgIGlmIChwb2ludHNbaSAtIDFdICYmIHBvaW50c1tpXVsyXSAhPSAnZScgJiYgcG9pbnRzW2kgLSAxXVsyXSAhPSAnZScgJiYgcHJldmlvdXNBbmdsZSkge1xuICAgICAgdmFyIHByZXZpb3VzVmVjdG9yID0gdGhpcy5hZGp1c3RQb2ludChwb2ludHNbaSAtIDFdKS5zdWJ0cmFjdChwb2ludDEpO1xuICAgICAgaWYgKHByZXZpb3VzQW5nbGUgPCAwKSB7XG4gICAgICAgIGNvcm5lclBvaW50ID0gcDE7XG4gICAgICAgIC8vIHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdLnB1c2gobWFrZUNvcm5lcihjb3JuZXJQb2ludDIsIGNvcm5lclBvaW50LCBwcmV2aW91c1ZlY3RvciwgdmVjdG9yMSkpO1xuICAgICAgICBzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLSAxXS5zcGxpY2UoMCwgMCwgbWFrZUNvcm5lcihjb3JuZXJQb2ludDMsIHAyLCBwcmV2aW91c1ZlY3RvciwgdmVjdG9yMSkpO1xuICAgICAgICAvL2ZvciBibHVudCBlZGdlc1xuICAgICAgICBzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLSAxXS5wdXNoKGNvcm5lclBvaW50Mik7XG4gICAgICAgIHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdLnB1c2goY29ybmVyUG9pbnQpO1xuXG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvcm5lclBvaW50ID0gcDI7XG4gICAgICAgIC8vIHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdLnNwbGljZSgwLCAwLCBtYWtlQ29ybmVyKGNvcm5lclBvaW50MiwgY29ybmVyUG9pbnQsIHByZXZpb3VzVmVjdG9yLCB2ZWN0b3IxKSk7XG4gICAgICAgIHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdLnB1c2gobWFrZUNvcm5lcihjb3JuZXJQb2ludDMsIHAxLCBwcmV2aW91c1ZlY3RvciwgdmVjdG9yMSkpO1xuICAgICAgICAvL2ZvciBibHVudCBlZGdlc1xuICAgICAgICBzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLSAxXS5zcGxpY2UoMCwgMCwgY29ybmVyUG9pbnQyKTtcbiAgICAgICAgc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV0uc3BsaWNlKDAsIDAsIGNvcm5lclBvaW50KTtcblxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5leHRBbmdsZSkge1xuXG4gICAgICBpZiAobmV4dEFuZ2xlIDwgMCkge1xuICAgICAgICBjb3JuZXJQb2ludDIgPSBwNDtcbiAgICAgICAgY29ybmVyUG9pbnQzID0gcDM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb3JuZXJQb2ludDIgPSBwMztcbiAgICAgICAgY29ybmVyUG9pbnQzID0gcDQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvaW50c1tpIC0gMV0gJiYgcG9pbnRzW2kgLSAxXVsyXSA9PSAnZScgfHwgIXByZXZpb3VzQW5nbGUpIHtcbiAgICAgIHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdLnB1c2gocDEpO1xuICAgICAgc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV0uc3BsaWNlKDAsIDAsIHAyKTtcbiAgICB9XG5cbiAgICBpZiAocG9pbnRzW2kgKyAxXVsyXSA9PSAnZScgfHwgaSA9PSBwb2ludHMubGVuZ3RoIC0gMikge1xuICAgICAgc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV0uc3BsaWNlKDAsIDAsIHAzKTtcbiAgICAgIHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdLnB1c2gocDQpO1xuICAgICAgc2VnbWVudHMucHVzaChbXSk7XG4gICAgfVxuXG4gICAgaWYgKHBvaW50Mi54ICsgZ2x5cGgud2VpZ2h0ID4gZ2x5cGgud2lkdGgpXG4gICAgICBnbHlwaC53aWR0aCA9IHBvaW50Mi54ICsgZ2x5cGgud2VpZ2h0O1xuXG4gICAgLy8gRklYTUU6IGFkZCBsYXN0IHBvaW50XG4gICAgaWYgKHBvaW50Mi54ICsgZ2x5cGgud2VpZ2h0ID4gZ2x5cGgud2lkdGgpXG4gICAgICBnbHlwaC53aWR0aCA9IHBvaW50Mi54ICsgZ2x5cGgud2VpZ2h0O1xuXG4gIH1cblxuICBnbHlwaC5wYXRoID0gbmV3IEdyb3VwKCk7XG4gIGZvciAoaSA9IDA7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzZWdtZW50c1tpXS5sZW5ndGgpIHtcbiAgICAgIHZhciBjaGlsZCA9IG5ldyBQYXRoKHNlZ21lbnRzW2ldKTtcbiAgICAgIGNoaWxkLmNsb3NlZCA9IHRydWU7XG4gICAgICBnbHlwaC5wYXRoLmFkZENoaWxkKGNoaWxkKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2x5cGg7XG59O1xuXG5mdW5jdGlvbiBtYWtlQ29ybmVyKHAxLCBwMiwgdmVjdG9yMiwgdmVjdG9yMykge1xuICB2YXIgdmVjdG9yMSA9IHAyLnN1YnRyYWN0KHAxKTtcblxuICB2YXIgcmFkMSA9IHZlY3RvcjIucm90YXRlKDE4MCkuZ2V0QW5nbGVJblJhZGlhbnModmVjdG9yMSk7XG4gIHZhciByYWQyID0gdmVjdG9yMy5nZXRBbmdsZUluUmFkaWFucyh2ZWN0b3IxKTtcblxuICB2YXIgeCA9ICh2ZWN0b3IxLmxlbmd0aCAqIE1hdGguc2luKHJhZDEpKSAvIE1hdGguc2luKHJhZDIgKyByYWQxKTtcblxuICAvLyBpZiAoeCA+IDMwKVxuICAvLyAgIHggPSAzMDtcblxuICAvLyBpZiAoeCA+IDUwKVxuICAvLyAgIHggPSAzMDtcblxuICB2YXIgcmVzdWx0ID0gbmV3IFBvaW50KHgsIDApO1xuICByZXN1bHQgPSByZXN1bHQucm90YXRlKHZlY3RvcjIucm90YXRlKDE4MCkuYW5nbGUpO1xuICByZXN1bHQgPSByZXN1bHQuYWRkKHAxKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuR2VuZXJhdG9yLnByb3RvdHlwZS5nZW5lcmF0ZUdseXBoV2l0aEFjY2VudCA9IGZ1bmN0aW9uKG5hbWUsIGFjY2VudCkge1xuICB2YXIgZ2x5cGg7XG5cbiAgaWYgKGFjY2VudC5sZW5ndGggPiAxKVxuICAgIGFjY2VudCA9IGRlY29kZUh0bWwoJyYnICsgYWNjZW50ICsgJzsnKTtcblxuICBpZiAobmFtZSA9PSAnaScpXG4gICAgZ2x5cGggPSB0aGlzLmdlbmVyYXRlR2x5cGgoJ8SxJyk7XG4gIGVsc2VcbiAgICBnbHlwaCA9IHRoaXMuZ2VuZXJhdGVHbHlwaChuYW1lKTtcblxuICB2YXIgYWNjZW50R2x5cGggPSB0aGlzLmdlbmVyYXRlR2x5cGgoYWNjZW50KTtcbiAgLy8gRklYTUU6IGZpeCB0aGlzIGZvciBpdGFsaWNzXG4gIGFjY2VudEdseXBoLnBhdGgucG9zaXRpb24ueCArPSAoZ2x5cGgud2lkdGggLSBhY2NlbnRHbHlwaC53aWR0aCkgLyAyO1xuXG4gIGlmIChuYW1lWzBdID09PSBuYW1lWzBdLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBhY2NlbnRHbHlwaC5wYXRoLnBvc2l0aW9uLnkgKz0gOTAgKyBnbHlwaC5oZWlnaHQ7XG4gIH1cblxuICBnbHlwaC5wYXRoID0gZ2x5cGgucGF0aC51bml0ZShhY2NlbnRHbHlwaC5wYXRoKTtcbiAgZ2x5cGgubmFtZSA9IGRlY29kZUh0bWwoJyYnICsgbmFtZSArIHRoaXMuYWxwaGFiZXQubmFtZU1hcFthY2NlbnRdICsgJzsnKTtcbiAgcmV0dXJuIGdseXBoO1xufTtcblxuZnVuY3Rpb24gZGVjb2RlSHRtbChodG1sKSB7XG4gIHZhciB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIHR4dC5pbm5lckhUTUwgPSBodG1sO1xuICByZXR1cm4gdHh0LnZhbHVlO1xufVxuXG5mdW5jdGlvbiBkcmF3T3BlbnR5cGVQYXRoKHBhdGgpIHtcbiAgdmFyIHJlc3VsdFBhdGggPSBuZXcgb3BlbnR5cGUuUGF0aCgpLFxuICAgIHBhdGhzID0gcGF0aC5jaGlsZHJlbiB8fCBbcGF0aF07XG5cbiAgZm9yICh2YXIgaiA9IDA7IGogPCBwYXRocy5sZW5ndGg7IGorKykge1xuICAgIC8vIEZJWE1FOiB5ICogLTEsICogMTBcbiAgICByZXN1bHRQYXRoLm1vdmVUbyhNYXRoLnJvdW5kKHBhdGhzW2pdLmN1cnZlc1swXS5wb2ludDEueCAqIDEwKSwgTWF0aC5yb3VuZChwYXRoc1tqXS5jdXJ2ZXNbMF0ucG9pbnQxLnkgKiAtMTApKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgcGF0aHNbal0uY3VydmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY3VydmUgPSBwYXRoc1tqXS5jdXJ2ZXNbaV07XG5cbiAgICAgIHZhciB4MSA9IE1hdGgucm91bmQoY3VydmUucG9pbnQxLnggKiAxMCk7XG4gICAgICB2YXIgeTEgPSBNYXRoLnJvdW5kKGN1cnZlLnBvaW50MS55ICogLTEwKTtcbiAgICAgIHZhciB4MiA9IE1hdGgucm91bmQoY3VydmUucG9pbnQyLnggKiAxMCk7XG4gICAgICB2YXIgeTIgPSBNYXRoLnJvdW5kKGN1cnZlLnBvaW50Mi55ICogLTEwKTtcbiAgICAgIHZhciBoeDEgPSBjdXJ2ZS5oYW5kbGUxLnggKiAxMDtcbiAgICAgIHZhciBoeTEgPSBjdXJ2ZS5oYW5kbGUxLnkgKiAtMTA7XG4gICAgICB2YXIgaHgyID0gY3VydmUuaGFuZGxlMi54ICogMTA7XG4gICAgICB2YXIgaHkyID0gY3VydmUuaGFuZGxlMi55ICogLTEwO1xuXG4gICAgICBpZiAoaHgxICsgaHkxID09PSAwICYmIGh4MiArIGh5MiA9PT0gMClcbiAgICAgICAgcmVzdWx0UGF0aC5saW5lVG8oeDIsIHkyKTtcbiAgICAgIGVsc2VcbiAgICAgICAgcmVzdWx0UGF0aC5jdXJ2ZVRvKHgxICsgaHgxLCB5MSArIGh5MSwgeDIgKyBoeDIsIHkyICsgaHkyLCB4MiwgeTIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRQYXRoO1xufVxuXG5HZW5lcmF0b3IucHJvdG90eXBlLmV4cG9ydE9wZW50eXBlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICB2YXIgb3BlbnR5cGVHbHlwaHMgPSBbXSxcbiAgICBnbHlwaCxcbiAgICBwYXRoO1xuXG4gIC8vIEhBQ0s6IC5ub3RkZWYgaGF2ZSB0byBiZSBmaXJzdCBkZWZpbmVkXG4gIGlmICh0aGlzLmdseXBoc1snLm5vdGRlZiddKSB7XG4gICAgZ2x5cGggPSB0aGlzLmdseXBoc1snLm5vdGRlZiddO1xuICAgIHBhdGggPSBkcmF3T3BlbnR5cGVQYXRoKGdseXBoLnBhdGgpO1xuXG4gICAgaWYgKHBhdGguY29tbWFuZHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBvcGVudHlwZUdseXBocy5wdXNoKG5ldyBvcGVudHlwZS5HbHlwaCh7XG4gICAgICAgIG5hbWU6ICcubm90ZGVmJyxcbiAgICAgICAgdW5pY29kZTogMCxcbiAgICAgICAgYWR2YW5jZVdpZHRoOiBnbHlwaC53aWR0aCAqIDEwICsgMTAwLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBub3RkZWZQYXRoID0gbmV3IG9wZW50eXBlLlBhdGgoKTtcbiAgICBub3RkZWZQYXRoLm1vdmVUbygxMDAsIDApO1xuICAgIG5vdGRlZlBhdGgubGluZVRvKDEwMCwgNzAwKTtcbiAgICBub3RkZWZQYXRoLmxpbmVUbyg2MDAsIDcwMCk7XG4gICAgbm90ZGVmUGF0aC5saW5lVG8oNjAwLCAwKTtcbiAgICBub3RkZWZQYXRoLm1vdmVUbygyMDAsIDEwMCk7XG4gICAgbm90ZGVmUGF0aC5saW5lVG8oNTAwLCAxMDApO1xuICAgIG5vdGRlZlBhdGgubGluZVRvKDUwMCwgNjAwKTtcbiAgICBub3RkZWZQYXRoLmxpbmVUbygyMDAsIDYwMCk7XG4gICAgb3BlbnR5cGVHbHlwaHMucHVzaChuZXcgb3BlbnR5cGUuR2x5cGgoe1xuICAgICAgbmFtZTogJy5ub3RkZWYnLFxuICAgICAgdW5pY29kZTogMCxcbiAgICAgIGFkdmFuY2VXaWR0aDogNjUwLFxuICAgICAgcGF0aDogbm90ZGVmUGF0aFxuICAgIH0pKTtcbiAgfVxuXG4gIGZvciAodmFyIHggaW4gdGhpcy5nbHlwaHMpIHtcbiAgICAvLyBIQUNLOiAubm90ZGVmIGFscmVhZHkgZGVmaW5lZFxuICAgIGlmICh4ID09ICcubm90ZGVmJylcbiAgICAgIGNvbnRpbnVlO1xuXG4gICAgZ2x5cGggPSB0aGlzLmdseXBoc1t4XTtcbiAgICBwYXRoID0gZHJhd09wZW50eXBlUGF0aChnbHlwaC5wYXRoKTtcblxuICAgIGlmIChwYXRoLmNvbW1hbmRzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgb3BlbnR5cGVHbHlwaHMucHVzaChuZXcgb3BlbnR5cGUuR2x5cGgoe1xuICAgICAgICBuYW1lOiB0aGlzLmFscGhhYmV0Lm5hbWVNYXBbZ2x5cGgubmFtZV0gfHwgZ2x5cGgubmFtZSxcbiAgICAgICAgdW5pY29kZTogZ2x5cGgubmFtZS5jaGFyQ29kZUF0KCksXG4gICAgICAgIGFkdmFuY2VXaWR0aDogZ2x5cGgud2lkdGggKiAxMCArIDEwMCxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSkpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW50eXBlR2x5cGhzLnB1c2gobmV3IG9wZW50eXBlLkdseXBoKHtcbiAgICBuYW1lOiAnc3BhY2UnLFxuICAgIHVuaWNvZGU6IDMyLFxuICAgIGFkdmFuY2VXaWR0aDogMTAwMCxcbiAgICBwYXRoOiBuZXcgb3BlbnR5cGUuUGF0aCgpXG4gIH0pKTtcblxuICB0aGlzLmZvbnQgPSBuZXcgb3BlbnR5cGUuRm9udCh7XG4gICAgZmFtaWx5TmFtZTogb3B0aW9ucy5mYW1pbHlOYW1lIHx8ICdHbHlwaGVyU3RhbmRhcnQnLFxuICAgIHN0eWxlTmFtZTogb3B0aW9ucy5zdHlsZU5hbWUgfHwgJ01lZGl1bScsXG4gICAgdW5pdHNQZXJFbTogMTAwMCxcbiAgICBhc2NlbmRlcjogMTAwMCxcbiAgICBkZXNjZW5kZXI6IHRoaXMuZGVzY2VuZGVyICogMTUwLFxuICAgIGdseXBoczogb3BlbnR5cGVHbHlwaHNcbiAgfSk7XG5cbiAgdmFyIGJ1ZmZlciA9IHRoaXMuZm9udC50b0FycmF5QnVmZmVyKCk7XG4gIHZhciBmb250MiA9IG9wZW50eXBlLnBhcnNlKGJ1ZmZlcik7XG5cbiAgLy9kZWJ1Z2dpbmdcbiAgaWYgKG9wdGlvbnMuZGVidWcpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZvbnQyLmdseXBocy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGcgPSBmb250Mi5nbHlwaHMuZ2V0KGkpO1xuICAgICAgdmFyIGN0eCA9IGNyZWF0ZUdseXBoQ2FudmFzKGcsIDE1MCk7XG4gICAgICB4ID0gMjA7XG4gICAgICB2YXIgeSA9IDEyMDtcbiAgICAgIHZhciBmb250U2l6ZSA9IDcyO1xuICAgICAgZy5kcmF3KGN0eCwgeCwgeSwgZm9udFNpemUpO1xuICAgICAgLy8gZy5kcmF3UG9pbnRzKGN0eCwgeCwgeSwgZm9udFNpemUpO1xuICAgICAgZy5kcmF3TWV0cmljcyhjdHgsIHgsIHksIGZvbnRTaXplKTtcbiAgICB9XG4gIH1cblxuICAvLyBGSVhNRTogZGVwZW5kcyBvbiBkaXYgd2l0aCBpZCBnbHlwaHNcbiAgZnVuY3Rpb24gY3JlYXRlR2x5cGhDYW52YXMoZ2x5cGgsIHNpemUpIHtcbiAgICB2YXIgY2FudmFzSWQsIGh0bWwsIGdseXBoc0Rpdiwgd3JhcCwgY2FudmFzLCBjdHg7XG4gICAgY2FudmFzSWQgPSAnZ2x5cGhfMicgKyBnbHlwaC51bmljb2RlO1xuICAgIGh0bWwgPSAnPGNhbnZhcyBpZD1cIicgKyBjYW52YXNJZCArICdcIiB3aWR0aD1cIicgKyBzaXplICsgJ1wiIGhlaWdodD1cIicgKyBzaXplICsgJ1wiPjwvY2FudmFzPic7XG4gICAgZ2x5cGhzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dseXBocycpO1xuICAgIHdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgd3JhcC5pbm5lckhUTUwgPSBodG1sO1xuICAgIGdseXBoc0Rpdi5hcHBlbmRDaGlsZCh3cmFwKTtcbiAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXNJZCk7XG4gICAgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgcmV0dXJuIGN0eDtcbiAgfVxufTtcblxuR2VuZXJhdG9yLnByb3RvdHlwZS5kb3dubG9hZE9URiA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5mb250KSB7XG4gICAgaWYgKHdpbmRvdy5yZXF1ZXN0RmlsZVN5c3RlbSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEZpbGVTeXN0ZW0pXG4gICAgICB0aGlzLmZvbnQuZG93bmxvYWQoKTtcbiAgICBlbHNlXG4gICAgICBjb25zb2xlLmxvZygnVXNlIEdvb2dsZSBDaHJvbWUnKTtcbiAgfSBlbHNlXG4gICAgY29uc29sZS5sb2coJ3VzZSBleHBvcnRPcGVudHlwZSBmaXJzdCcpO1xufTtcblxuZnVuY3Rpb24gc2lnbih4KSB7XG4gIC8vIDAgPT0gMVxuICByZXR1cm4geCA+PSAwID8gMSA6IC0xO1xufVxuXG5leHBvcnRzLkdlbmVyYXRvciA9IEdlbmVyYXRvcjtcbiIsImZ1bmN0aW9uIEdseXBoKG5hbWUsIHdlaWdodCwgY29udHJhc3QsIHByb3BvcnRpb24pIHtcbiAgdGhpcy5uYW1lID0gbmFtZTtcbiAgdGhpcy53ZWlnaHQgPSB3ZWlnaHQ7XG4gIHRoaXMuY29udHJhc3QgPSBjb250cmFzdDtcbiAgdGhpcy5wcm9wb3J0aW9uID0gcHJvcG9ydGlvbjtcblxuICB0aGlzLnBhdGggPSB1bmRlZmluZWQ7XG4gIHRoaXMud2lkdGggPSAwO1xuICB0aGlzLmhlaWdodCA9IDA7XG59XG5cbkdseXBoLnByb3RvdHlwZS5tZXJnZVNlZ21lbnRzID0gZnVuY3Rpb24oc2VnbWVudHMpIHtcblxuICB2YXIgcmVzdWx0ID0gc2VnbWVudHNbMF0uY2xvbmUoKTtcbiAgZm9yIChpID0gMTsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0ID0gcmVzdWx0LnVuaXRlKHNlZ21lbnRzW2ldKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vL0RFQlVHXG5HbHlwaC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKHgsIHksIGRlYnVnKSB7XG4gIC8vZGVidWdnaW5nXG4gIGlmIChkZWJ1Zykge1xuICAgIG5ldyBQYXRoLkNpcmNsZSh7XG4gICAgICBjZW50ZXI6IFt4LCB5XSxcbiAgICAgIHJhZGl1czogMyxcbiAgICAgIHN0cm9rZUNvbG9yOiAnYmx1ZSdcbiAgICB9KTtcbiAgICBuZXcgUGF0aC5DaXJjbGUoe1xuICAgICAgY2VudGVyOiBbeCArIHRoaXMud2lkdGgsIHldLFxuICAgICAgcmFkaXVzOiAzLFxuICAgICAgc3Ryb2tlQ29sb3I6ICdibHVlJ1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHBhdGggPSB0aGlzLnBhdGguY2xvbmUoKTtcbiAgcGF0aC5wb3NpdGlvbiA9IFt4ICsgcGF0aC5wb3NpdGlvbi54LCB5ICsgcGF0aC5wb3NpdGlvbi55XTtcbiAgcGF0aC5maWxsQ29sb3IgPSAnYmxhY2snO1xufTtcblxuZXhwb3J0cy5HbHlwaCA9IEdseXBoO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0LmpzJyk7XG52YXIgZ2VuZXJhdG9yID0gcmVxdWlyZSgnLi9nZW5lcmF0b3IuanMnKTtcbnZhciBnbHlwaCA9IHJlcXVpcmUoJy4vZ2x5cGguanMnKTtcblxuZXhwb3J0cy5HbHlwaCA9IGdseXBoLkdseXBoO1xuZXhwb3J0cy5BbHBoYWJldCA9IGFscGhhYmV0LkFscGhhYmV0O1xuZXhwb3J0cy5HZW5lcmF0b3IgPSBnZW5lcmF0b3IuR2VuZXJhdG9yO1xuIl19
