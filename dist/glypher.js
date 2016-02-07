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


  if (weight < 15 || options.proportion <= 1)
    this.glyphs.G.push([8 - Math.round(weight / 10) + Math.ceil(options.proportion * 2), xheight]);

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
    console.log('glyph ' + name + ' not defined');
    return this.glyphs['.notdef'];
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
  path.selected = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYWxwaGFiZXQuanMiLCJzcmMvZ2VuZXJhdG9yLmpzIiwic3JjL2dseXBoLmpzIiwic3JjL2dseXBoZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM3dCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2akJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZnVuY3Rpb24gQWxwaGFiZXQob3B0aW9ucykge1xuICB4aGVpZ2h0ID0gb3B0aW9ucy54aGVpZ2h0IHx8IDU7XG4gIGRlc2NlbmRlciA9IG9wdGlvbnMuZGVzY2VuZGVyIHx8IC0zO1xuICBhZWhlaWdodCA9IG9wdGlvbnMuYWVoZWlnaHQgfHwgeGhlaWdodCAvIDI7XG4gIC8vIEZJWE1FXG4gIHdlaWdodCA9IG9wdGlvbnMud2VpZ2h0IHx8IDIwO1xuXG4gIHRoaXMuZ2x5cGhzID0ge1xuICAgICcubm90ZGVmJzogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwLCAnYyddXG4gICAgXSxcbiAgICBhOiBbXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCBhZWhlaWdodF0sXG4gICAgICBbMTAsIGFlaGVpZ2h0XVxuICAgIF0sXG4gICAgYjogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICBjOiBbXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgZDogW1xuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgZTogW1xuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIGFlaGVpZ2h0XSxcbiAgICAgIFswLCBhZWhlaWdodF1cbiAgICBdLFxuICAgIGY6IFtcbiAgICAgIFszLCAwXSxcbiAgICAgIFszLCAxMF0sXG4gICAgICBbMTAsIDEwLCAnZSddLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgZzogW1xuICAgICAgWzAsIGRlc2NlbmRlcl0sXG4gICAgICBbMTAsIGRlc2NlbmRlcl0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXVxuICAgIF0sXG4gICAgaDogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCAwLCAnZSddLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgIGk6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCB4aGVpZ2h0ICsgMl1cbiAgICBdLFxuICAgIC8vZG90dGxlc3MgaSBpcyBuZWVkZWQgZm9yIGFjY2VudGVkIGlzXG4gICAgJ8SxJzogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICBqOiBbXG4gICAgICBbLTIsIGRlc2NlbmRlcl0sXG4gICAgICBbMSwgZGVzY2VuZGVyXSxcbiAgICAgIFsxLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzEsIDEwXSxcbiAgICAgIFsxLCB4aGVpZ2h0ICsgMl1cbiAgICBdLFxuICAgIGs6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMCwgJ2UnXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbNSwgeGhlaWdodCAvIDJdLFxuICAgICAgWzEwLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFs1LCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTAsIDBdXG4gICAgXSxcbiAgICBsOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdXG4gICAgXSxcbiAgICBtOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAwLCAnZSddLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsyMCwgeGhlaWdodF0sXG4gICAgICBbMjAsIDBdXG4gICAgXSxcbiAgICBuOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAwXVxuICAgIF0sXG4gICAgbzogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMCwgJ2MnXVxuICAgIF0sXG4gICAgcDogW1xuICAgICAgWzAsIGRlc2NlbmRlcl0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXVxuICAgIF0sXG4gICAgcTogW1xuICAgICAgWzEwLCBkZXNjZW5kZXJdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgIHI6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIHM6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICB0OiBbXG4gICAgICAvLyBGSVhNRTogeGhlaWdodCArIDIgPz9cbiAgICAgIFszLCB4aGVpZ2h0ICsgMl0sXG4gICAgICBbMywgMF0sXG4gICAgICBbMTAsIDAsICdlJ10sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICB1OiBbXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgdjogW1xuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFs1LCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuXG4gICAgXSxcbiAgICB3OiBbXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzUsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTAsIHhoZWlnaHQsICcgZSddLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTUsIDBdLFxuICAgICAgWzIwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMjAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICB4OiBbXG4gICAgICAvLyBbMCwgMF0sXG4gICAgICAvLyBbMTAsIHhoZWlnaHQsICdlJ10sXG4gICAgICAvLyBbMCwgeGhlaWdodF0sXG4gICAgICAvLyBbMTAsIDBdXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodCAvIDZdLFxuICAgICAgWzEwLCB4aGVpZ2h0IC0geGhlaWdodCAvIDZdLFxuICAgICAgWzEwLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDZdLFxuICAgICAgWzAsIHhoZWlnaHQgLSB4aGVpZ2h0IC8gNl0sXG4gICAgICBbMCwgeGhlaWdodCwgJ2UnXVxuICAgIF0sXG4gICAgeTogW1xuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodCwgJ2UnXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIGRlc2NlbmRlcl0sXG4gICAgICBbMCwgZGVzY2VuZGVyXVxuICAgIF0sXG4gICAgejogW1xuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIEE6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFs1LCAxMF0sXG4gICAgICBbMTAsIDAsICdlJ10sXG4gICAgICBbMywgeGhlaWdodCAvIDJdLFxuICAgICAgWzcsIHhoZWlnaHQgLyAyXVxuICAgIF0sXG4gICAgQjogW1xuICAgICAgLy8gWzAsIHhoZWlnaHRdLFxuICAgICAgLy8gWzAsIDEwXSxcbiAgICAgIC8vIC8vIEZJWE1FOiBzaG91bGQgZGVwZW5kIG9uIGZvbnQgd2VpZ2h0XG4gICAgICAvLyBbOSwgMTBdLFxuICAgICAgLy8gWzksIHhoZWlnaHRdLFxuICAgICAgLy8gWzAsIHhoZWlnaHQsICdlJ10sXG4gICAgICAvLyBbMCwgMF0sXG4gICAgICAvLyBbMCwgeGhlaWdodF0sXG4gICAgICAvLyBbMTAsIHhoZWlnaHRdLFxuICAgICAgLy8gWzEwLCAwXSxcbiAgICAgIC8vIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFs4LCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF1cbiAgICBdLFxuICAgIEM6IFtcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgIEQ6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbNywgMTBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMTAgLSB4aGVpZ2h0XSxcbiAgICAgIFs3LCAwXSxcbiAgICAgIFswLCAwXVxuICAgIF0sXG4gICAgRTogW1xuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwLCAnZSddLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgRjogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTAsICdlJ10sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICBHOiBbXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgSDogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwLCAnZSddLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgMTAsICdlJ10sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICBJOiBbXG4gICAgICBbNSwgMTBdLFxuICAgICAgWzUsIDAsICdlJ10sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDAsICdlJ10sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF1cbiAgICBdLFxuICAgIEo6IFtcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl1cbiAgICBdLFxuICAgIEs6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMCwgJ2UnXSxcbiAgICAgIFswLCA1XSxcbiAgICAgIFs1LCA1XSxcbiAgICAgIFsxMCwgMTAsICdlJ10sXG4gICAgICBbMCwgNV0sXG4gICAgICBbNSwgNV0sXG4gICAgICBbMTAsIDBdXG4gICAgXSxcbiAgICBMOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXVxuICAgIF0sXG4gICAgTTogW1xuICAgICAgLy8gWzAsIDBdLFxuICAgICAgLy8gWzAsIDEwXSxcbiAgICAgIC8vIFsxMCwgMTBdLFxuICAgICAgLy8gWzEwLCB4aGVpZ2h0IC8gMiwgJ2UnXSxcbiAgICAgIC8vIFsxMCwgMTBdLFxuICAgICAgLy8gWzIwLCAxMF0sXG4gICAgICAvLyBbMjAsIDBdXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzUsIDEwXSxcbiAgICAgIFsxMCwgKDEwIC0geGhlaWdodCkgLyAyXSxcbiAgICAgIFsxNSwgMTBdLFxuICAgICAgWzIwLCAxMF0sXG4gICAgICBbMjAsIDBdXG4gICAgXSxcbiAgICBOOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAoMTAgLSB4aGVpZ2h0KSAvIDJdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgMTBdXG4gICAgXSxcbiAgICBPOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDAsICdjJ11cbiAgICBdLFxuICAgIFA6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIFE6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMCwgJ2MnXSxcbiAgICAgIFs4LCAwXSxcbiAgICAgIC8vIDAgLSBjb250cmFzdCA/Pz9cbiAgICAgIFs4LCBkZXNjZW5kZXIgKiAwLjc1XSxcbiAgICAgIFsxMCwgZGVzY2VuZGVyICogMC43NV0sXG4gICAgXSxcbiAgICBSOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHQsICdlJ10sXG4gICAgICBbNSwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsxMCwgMF1cblxuICAgIF0sXG4gICAgUzogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF1cbiAgICBdLFxuICAgIFQ6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwLCAnZSddLFxuICAgICAgWzUsIDEwXSxcbiAgICAgIFs1LCAwXVxuICAgIF0sXG4gICAgVTogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIDEwXVxuICAgIF0sXG4gICAgVjogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbNSwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsxMCwgMTBdXG4gICAgXSxcbiAgICBXOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFs1LCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzEwLCAxMCwgJyBlJ10sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsxNSwgMF0sXG4gICAgICBbMjAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsyMCwgMTBdXG5cbiAgICBdLFxuICAgIFg6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMiAtIDFdLFxuICAgICAgWzEwLCAxMCAtIHhoZWlnaHQgLyAyICsgMV0sXG4gICAgICBbMTAsIDEwLCAnZSddLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDIgLSAxXSxcbiAgICAgIFswLCAxMCAtIHhoZWlnaHQgLyAyICsgMV0sXG4gICAgICBbMCwgMTAsICdlJ11cbiAgICBdLFxuICAgIFk6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgOF0sXG4gICAgICBbNSwgeGhlaWdodCAvIDJdLFxuICAgICAgWzEwLCA4XSxcbiAgICAgIFsxMCwgMTAsICdlJ10sXG4gICAgICBbNSwgeGhlaWdodCAvIDJdLFxuICAgICAgWzUsIDBdXG4gICAgXSxcbiAgICBaOiBbXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMCwgMTBdXG4gICAgXSxcbiAgICAny4cnOiBbXG4gICAgICBbMCwgMTIgKyAoOCAtIHhoZWlnaHQpXSxcbiAgICAgIFsyLCAxMl0sXG4gICAgICBbNCwgMTIgKyAoOCAtIHhoZWlnaHQpXVxuICAgIF0sXG4gICAgJ8K0JzogW1xuICAgICAgWzIsIDEyXSxcbiAgICAgIFs0LCAxMiArICg4IC0geGhlaWdodCldXG4gICAgXSxcbiAgICAny5onOiBbXG4gICAgICBbMCwgMTJdLFxuICAgICAgWzAsIDEyICsgKDggLSB4aGVpZ2h0KV0sXG4gICAgICBbNCwgMTIgKyAoOCAtIHhoZWlnaHQpXSxcbiAgICAgIFs0LCAxMl0sXG4gICAgICBbMCwgMTJdXG4gICAgXSxcbiAgICAnMCc6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMCwgJ2MnXVxuICAgIF0sXG4gICAgJzEnOiBbXG4gICAgICBbNSwgMF0sXG4gICAgICBbNSwgMTBdLFxuICAgICAgWzAsIDEwLCAnZSddLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXVxuICAgIF0sXG4gICAgJzInOiBbXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzAsIDEwXVxuICAgIF0sXG4gICAgJzMnOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMCwgMTAsICdlJ10sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICAnNCc6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHQsICdlJ10sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgICc1JzogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF1cbiAgICBdLFxuICAgICc2JzogW1xuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodF1cbiAgICBdLFxuICAgICc3JzogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCAwXVxuICAgIF0sXG4gICAgJzgnOiBbXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHQsICdlJ10sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXVxuICAgIF0sXG4gICAgJzknOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgJy4nOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMV1cbiAgICBdLFxuICAgICcsJzogW1xuICAgICAgWzAsIC0yXSxcbiAgICAgIFswLCAxXVxuICAgIF0sXG4gICAgJyEnOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMSwgJ2UnXSxcbiAgICAgIFswLCAzXSxcbiAgICAgIFswLCAxMF1cbiAgICBdLFxuICAgIC8vIEZJWE1FOiB4aGVpZ2h0IHggM1xuICAgICc/JzogW1xuICAgICAgWzQsIDBdLFxuICAgICAgWzQsIDEsICdlJ10sXG4gICAgICBbNCwgM10sXG4gICAgICBbNCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMCwgMTBdLFxuICAgIF0sXG4gICAgLy9oeXBoZW5cbiAgICAn4oCQJzogW1xuICAgICAgWzAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsyLCB4aGVpZ2h0IC8gMl1cbiAgICBdLFxuICAgIC8vZW5kYXNoXG4gICAgJ+KAkyc6IFtcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyXVxuICAgIF0sXG4gICAgLy9lbWRhc2hcbiAgICAn4oCUJzogW1xuICAgICAgWzAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsyMCwgeGhlaWdodCAvIDJdXG4gICAgXSxcbiAgICAvL21pbnVzXG4gICAgJy0nOiBbXG4gICAgICBbMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzIsIHhoZWlnaHQgLyAyXVxuICAgIF0sXG4gICAgJy8nOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbNSwgMTBdXG4gICAgXSxcbiAgICAnQCc6IFtcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzE1ICsgTWF0aC5yb3VuZCh3ZWlnaHQgLyA0KSwgMF0sXG4gICAgICBbMTUgKyBNYXRoLnJvdW5kKHdlaWdodCAvIDQpLCAxMF0sXG4gICAgICBbMCwgMTBdLFxuICAgIF0sXG4gICAgJyYnOiBbXG4gICAgICBbMTEsIDEwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTEsIDBdLFxuICAgICAgWzExLCB4aGVpZ2h0ICsgKDEwIC0geGhlaWdodCkgLyAzLCAnZSddLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzE0LCB4aGVpZ2h0XVxuICAgIF1cbiAgfTtcbiAgaWYgKG9wdGlvbnMudHlwZSA9PSAnc3Ryb2tlJykge1xuICAgIHRoaXMuZ2x5cGhzWycubm90ZGVmJ10gPSBbXG4gICAgICBbMCwgNV0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDUsICdjJ11cbiAgICBdO1xuICAgIHRoaXMuZ2x5cGhzLm8gPSBbXG4gICAgICBbMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodCAvIDIsICdjJ11cbiAgICBdO1xuICAgIHRoaXMuZ2x5cGhzLncgPSBbXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzUsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTUsIDBdLFxuICAgICAgWzIwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMjAsIHhoZWlnaHQsICdlJ10sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdO1xuICAgIHRoaXMuZ2x5cGhzLkIgPSBbXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbOCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodCwgJ2UnXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMiwgJ2MnXSxcbiAgICBdO1xuICAgIHRoaXMuZ2x5cGhzLkQgPSBbXG4gICAgICBbMCwgNV0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzcsIDEwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIDEwIC0geGhlaWdodF0sXG4gICAgICBbNywgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgNSwgJ2MnXSxcbiAgICBdO1xuICAgIHRoaXMuZ2x5cGhzLk4gPSBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzIsIDEwXSxcbiAgICAgIFs4LCAwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIDEwXVxuICAgIF07XG4gICAgdGhpcy5nbHlwaHMuTyA9IFtcbiAgICAgIFswLCA1XSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgNSwgJ2MnXVxuICAgIF07XG4gICAgdGhpcy5nbHlwaHMuUSA9IFtcbiAgICAgIFswLCA1XSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgNSwgJ2UnXSxcbiAgICAgIFs4LCAwXSxcbiAgICAgIC8vIDAgLSBjb250cmFzdCA/Pz9cbiAgICAgIFs4LCBkZXNjZW5kZXIgKiAwLjc1XSxcbiAgICAgIFsxMCwgZGVzY2VuZGVyICogMC43NV0sXG4gICAgXTtcbiAgICB0aGlzLmdseXBocy5SID0gW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzIsIHhoZWlnaHRdLFxuICAgICAgWzUsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTAsIDBdXG4gICAgXTtcbiAgICB0aGlzLmdseXBocy5XID0gW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbNSwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsxNSwgMF0sXG4gICAgICBbMjAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsyMCwgMTAsICdlJ10sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsxMCwgMTBdXG4gICAgXTtcbiAgICB0aGlzLmdseXBoc1snMCddID0gW1xuICAgICAgWzAsIDVdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCA1LCAnYyddXG4gICAgXTtcbiAgICB0aGlzLmdseXBoc1snOCddID0gW1xuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyLCAnYyddXG4gICAgXTtcbiAgfVxuXG5cbiAgaWYgKHdlaWdodCA8IDE1IHx8IG9wdGlvbnMucHJvcG9ydGlvbiA8PSAxKVxuICAgIHRoaXMuZ2x5cGhzLkcucHVzaChbOCAtIE1hdGgucm91bmQod2VpZ2h0IC8gMTApICsgTWF0aC5jZWlsKG9wdGlvbnMucHJvcG9ydGlvbiAqIDIpLCB4aGVpZ2h0XSk7XG5cbiAgdGhpcy5uYW1lTWFwID0ge1xuICAgICfEsSc6ICdkb3RsZXNzaScsXG4gICAgJ8K0JzogJ2FjdXRlJyxcbiAgICAny4cnOiAnY2Fyb24nLFxuICAgICfLmic6ICdyaW5nJyxcbiAgICAnMCc6ICd6ZXJvJyxcbiAgICAnMSc6ICdvbmUnLFxuICAgICcyJzogJ3R3bycsXG4gICAgJzMnOiAndGhyZWUnLFxuICAgICc0JzogJ2ZvdXInLFxuICAgICc1JzogJ2ZpdmUnLFxuICAgICc2JzogJ3NpeCcsXG4gICAgJzcnOiAnc2V2ZW4nLFxuICAgICc4JzogJ2VpZ2h0JyxcbiAgICAnOSc6ICduaW5lJyxcbiAgICAn4oCQJzogJ2h5cGhlbicsXG4gICAgJ+KAkyc6ICdlbmRhc2gnLFxuICAgICfigJQnOiAnZW1kYXNoJyxcbiAgICAnLSc6ICdtaW51cycsXG4gICAgJy4nOiAncGVyaW9kJyxcbiAgICAnLCc6ICdjb21tYScsXG4gICAgJyEnOiAnZXhjbGFtJyxcbiAgICAnPyc6ICdxdWVzdGlvbicsXG4gICAgJy8nOiAnc2xhc2gnLFxuICAgICdAJzogJ2F0JyxcbiAgICAnJic6ICdhbXBlcnNhbmQnXG4gIH07XG59XG5BbHBoYWJldC5wcm90b3R5cGUubWF4SGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBtYXggPSAwO1xuICBmb3IgKHZhciBrZXkgaW4gdGhpcy5nbHlwaHMpIHtcbiAgICBpZiAodGhpcy5nbHlwaHNba2V5XSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmdseXBoc1trZXldLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmdseXBoc1trZXldW2ldWzFdID4gbWF4KVxuICAgICAgICAgIG1heCA9IHRoaXMuZ2x5cGhzW2tleV1baV1bMV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1heDtcbn07XG5cbkFscGhhYmV0LnByb3RvdHlwZS5hdmFpbGFibGVHbHlwaHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZ2x5cGhzKTtcbn07XG5cbmV4cG9ydHMuQWxwaGFiZXQgPSBBbHBoYWJldDtcbiIsImZ1bmN0aW9uIEdlbmVyYXRvcihvcHRpb25zKSB7XG4gIHBhcGVyLmluc3RhbGwod2luZG93KTtcbiAgLy8gRklYTUU6XG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlDYW52YXMnKTtcbiAgcGFwZXIuc2V0dXAoY2FudmFzKTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdGhpcy50eXBlID0gb3B0aW9ucy50eXBlIHx8ICdicnVzaCc7XG4gIHRoaXMucHJvcG9ydGlvbiA9IG9wdGlvbnMucHJvcG9ydGlvbiB8fCAob3B0aW9ucy5oZWlnaHQgLyBvcHRpb25zLndpZHRoKSB8fCAxO1xuXG4gIHRoaXMud2VpZ2h0ID0gb3B0aW9ucy53ZWlnaHQgfHwgKHRoaXMudHlwZSA9PSAnYnJ1c2gnID8gMjAgOiA1KTtcbiAgdGhpcy5jb250cmFzdCA9IHRoaXMudHlwZSA9PSAnYnJ1c2gnID8gKG9wdGlvbnMuY29udHJhc3QgfHwgNSkgOiB0aGlzLndlaWdodDtcbiAgdGhpcy5kZXNjZW5kZXIgPSBvcHRpb25zLmRlc2NlbmRlciB8fCAtMztcbiAgdGhpcy54c2hpZnQgPSBvcHRpb25zLnhzaGlmdCB8fCAwO1xuICB0aGlzLnlzaGlmdCA9IG9wdGlvbnMueXNoaWZ0IHx8IDA7XG4gIHRoaXMuaXRhbGljID0gb3B0aW9ucy5pdGFsaWMgfHwgMDtcbiAgdGhpcy5zZWdtZW50UmVkdWN0aW9uID0gb3B0aW9ucy5zZWdtZW50UmVkdWN0aW9uO1xuICB0aGlzLnNtb290aCA9IG9wdGlvbnMuc21vb3RoO1xuXG4gIHRoaXMuc2l6ZSA9IDEwO1xuXG4gIHZhciBhbHBoYWJldE9wdGlvbnMgPSB7XG4gICAgdHlwZTogdGhpcy50eXBlLFxuICAgIHdlaWdodDogdGhpcy53ZWlnaHQsXG4gICAgY29udHJhc3Q6IHRoaXMuY29udHJhc3QsXG4gICAgZGVzY2VuZGVyOiB0aGlzLmRlc2NlbmRlcixcbiAgICBwcm9wb3J0aW9uOiB0aGlzLnByb3BvcnRpb24sXG4gICAgeGhlaWdodDogb3B0aW9ucy54aGVpZ2h0IHx8IDdcbiAgfTtcblxuICB0aGlzLmFscGhhYmV0ID0gb3B0aW9ucy5hbHBoYWJldCB8fCBuZXcgZ2x5cGhlci5BbHBoYWJldChhbHBoYWJldE9wdGlvbnMpO1xuICB0aGlzLmdseXBocyA9IFtdO1xuICB0aGlzLm9wZW50eXBlID0gdW5kZWZpbmVkO1xufVxuXG5HZW5lcmF0b3IucHJvdG90eXBlLmdlbmVyYXRlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZ2x5cGhzID0ge307XG4gIHZhciBhdmFpbGFibGVHbHlwaHMgPSB0aGlzLmFscGhhYmV0LmF2YWlsYWJsZUdseXBocygpLFxuICAgIGdseXBoO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXZhaWxhYmxlR2x5cGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgdGhpcy5iZWZvcmVHZW5lcmF0ZUdseXBoKGF2YWlsYWJsZUdseXBoc1tpXSk7XG4gICAgaWYgKHRoaXMudHlwZSA9PSAnc3Ryb2tlJylcbiAgICAgIGdseXBoID0gdGhpcy5nZW5lcmF0ZUdseXBoMihhdmFpbGFibGVHbHlwaHNbaV0sIHRoaXMuYWxwaGFiZXQuZ2x5cGhzW2F2YWlsYWJsZUdseXBoc1tpXV0pO1xuICAgIGVsc2VcbiAgICAgIGdseXBoID0gdGhpcy5nZW5lcmF0ZUdseXBoKGF2YWlsYWJsZUdseXBoc1tpXSwgdGhpcy5hbHBoYWJldC5nbHlwaHNbYXZhaWxhYmxlR2x5cGhzW2ldXSk7XG4gICAgdGhpcy5hZnRlckdlbmVyYXRlR2x5cGgoZ2x5cGgpO1xuICAgIHRoaXMuZ2x5cGhzW2dseXBoLm5hbWVdID0gZ2x5cGg7XG4gIH1cbiAgaWYgKHRoaXMudHlwZSA9PSAnYnJ1c2gnKSB7XG4gICAgdmFyIGFjY2VudCA9ICdhY3V0ZSc7XG4gICAgYXZhaWxhYmxlR2x5cGhzID0gJ2FlaW91eUFFSU9VWSc7XG4gICAgZm9yIChpID0gMDsgaSA8IGF2YWlsYWJsZUdseXBocy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5iZWZvcmVHZW5lcmF0ZUdseXBoKGF2YWlsYWJsZUdseXBoc1tpXSk7XG4gICAgICBnbHlwaCA9IHRoaXMuZ2VuZXJhdGVHbHlwaFdpdGhBY2NlbnQoYXZhaWxhYmxlR2x5cGhzW2ldLCBhY2NlbnQpO1xuICAgICAgdGhpcy5hZnRlckdlbmVyYXRlR2x5cGgoZ2x5cGgpO1xuICAgICAgdGhpcy5nbHlwaHNbZ2x5cGgubmFtZV0gPSBnbHlwaDtcbiAgICB9XG4gICAgLy8gRklYTUU6IGRjYXJvbiB0Y2Fyb25cbiAgICBhY2NlbnQgPSAnY2Fyb24nO1xuICAgIGF2YWlsYWJsZUdseXBocyA9ICdjZW5yc3pDREVOUlNUWic7XG4gICAgZm9yIChpID0gMDsgaSA8IGF2YWlsYWJsZUdseXBocy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5iZWZvcmVHZW5lcmF0ZUdseXBoKGF2YWlsYWJsZUdseXBoc1tpXSk7XG4gICAgICBnbHlwaCA9IHRoaXMuZ2VuZXJhdGVHbHlwaFdpdGhBY2NlbnQoYXZhaWxhYmxlR2x5cGhzW2ldLCBhY2NlbnQpO1xuICAgICAgdGhpcy5hZnRlckdlbmVyYXRlR2x5cGgoZ2x5cGgpO1xuICAgICAgdGhpcy5nbHlwaHNbZ2x5cGgubmFtZV0gPSBnbHlwaDtcbiAgICB9XG5cbiAgICBhY2NlbnQgPSAncmluZyc7XG4gICAgYXZhaWxhYmxlR2x5cGhzID0gJ3VVJztcbiAgICBmb3IgKGkgPSAwOyBpIDwgYXZhaWxhYmxlR2x5cGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmJlZm9yZUdlbmVyYXRlR2x5cGgoYXZhaWxhYmxlR2x5cGhzW2ldKTtcbiAgICAgIGdseXBoID0gdGhpcy5nZW5lcmF0ZUdseXBoV2l0aEFjY2VudChhdmFpbGFibGVHbHlwaHNbaV0sIGFjY2VudCk7XG4gICAgICB0aGlzLmFmdGVyR2VuZXJhdGVHbHlwaChnbHlwaCk7XG4gICAgICB0aGlzLmdseXBoc1tnbHlwaC5uYW1lXSA9IGdseXBoO1xuICAgIH1cbiAgfVxufTtcblxuR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRHbHlwaCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgaWYgKHRoaXMuZ2x5cGhzW25hbWVdKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2x5cGhzW25hbWVdO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdnbHlwaCAnICsgbmFtZSArICcgbm90IGRlZmluZWQnKTtcbiAgICByZXR1cm4gdGhpcy5nbHlwaHNbJy5ub3RkZWYnXTtcbiAgfVxufTtcblxuR2VuZXJhdG9yLnByb3RvdHlwZS5hZGp1c3RQb2ludCA9IGZ1bmN0aW9uKHBvaW50KSB7XG4gIHJldHVybiBuZXcgUG9pbnQocG9pbnQpXG4gICAgLm11bHRpcGx5KFt0aGlzLnNpemUgLyB0aGlzLnByb3BvcnRpb24sIHRoaXMuc2l6ZSAtICh0aGlzLmNvbnRyYXN0ICogMiAvIHRoaXMuc2l6ZSldKVxuICAgIC5hZGQodGhpcy53ZWlnaHQsIHRoaXMuY29udHJhc3QpXG4gICAgLm11bHRpcGx5KDEsIC0xKVxuICAgIC5hZGQodGhpcy54c2hpZnQsIHRoaXMueXNoaWZ0KTtcbn07XG5cbkdlbmVyYXRvci5wcm90b3R5cGUuZHJhd0RvdCA9IGZ1bmN0aW9uKHBvaW50LCBib3gpIHtcbiAgdmFyIHAxID0gdGhpcy5hZGp1c3RQb2ludChwb2ludCk7XG4gIHJldHVybiBuZXcgUGF0aC5SZWN0YW5nbGUocDEuc3VidHJhY3QoYm94KSwgcDEuYWRkKGJveCkpO1xufTtcblxuR2VuZXJhdG9yLnByb3RvdHlwZS5iZWZvcmVHZW5lcmF0ZUdseXBoID0gZnVuY3Rpb24obmFtZSkge1xuXG59O1xuXG5HZW5lcmF0b3IucHJvdG90eXBlLmFmdGVyR2VuZXJhdGVHbHlwaCA9IGZ1bmN0aW9uKGdseXBoKSB7XG5cbn07XG5cbkdlbmVyYXRvci5wcm90b3R5cGUuZ2VuZXJhdGVHbHlwaCA9IGZ1bmN0aW9uKG5hbWUsIHBvaW50cykge1xuICBwb2ludHMgPSBwb2ludHMgfHwgdGhpcy5hbHBoYWJldC5nbHlwaHNbbmFtZV07XG4gIHZhciBnbHlwaCA9IG5ldyBnbHlwaGVyLkdseXBoKG5hbWUsIHRoaXMud2VpZ2h0LCB0aGlzLmNvbnRyYXN0LCB0aGlzLnByb3BvcnRpb24pO1xuXG4gIHZhciBzZWdtZW50cyA9IFtdO1xuICB2YXIgYm94ID0gbmV3IFBvaW50KGdseXBoLndlaWdodCwgZ2x5cGguY29udHJhc3QpO1xuICB2YXIgc3RhcnRQb2ludDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgIC8vV0lQXG4gICAgaWYgKHBvaW50c1tpXVsyXSA9PSAnZG90Jykge1xuICAgICAgc2VnbWVudHMucHVzaCh0aGlzLmRyYXdEb3QocG9pbnRzW2ldLCBib3gpKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChpID49IHBvaW50cy5sZW5ndGggLSAxKVxuICAgICAgYnJlYWs7XG5cbiAgICB2YXIgcGF0aCA9IG5ldyBQYXRoKCk7XG5cbiAgICB2YXIgcDEgPSB0aGlzLmFkanVzdFBvaW50KHBvaW50c1tpXSk7XG4gICAgdmFyIHAyID0gdGhpcy5hZGp1c3RQb2ludChwb2ludHNbaSArIDFdKTtcblxuICAgIGlmIChwb2ludHNbaSArIDFdWzJdID09ICdjJykge1xuICAgICAgcDIgPSBzdGFydFBvaW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBwMiA9IHRoaXMuYWRqdXN0UG9pbnQocG9pbnRzW2kgKyAxXSk7XG4gICAgICBzdGFydFBvaW50ID0gc3RhcnRQb2ludCB8fCBwMTtcbiAgICB9XG5cbiAgICB2YXIgdmVjdG9yID0gcDIuc3VidHJhY3QocDEpO1xuICAgIHZhciB4ID0gc2lnbih2ZWN0b3IueCk7XG4gICAgdmFyIHkgPSBzaWduKHZlY3Rvci55KTtcblxuICAgIC8vIFdJUFxuICAgIGlmICh0aGlzLnNlZ21lbnRSZWR1Y3Rpb24pIHtcbiAgICAgIHZlY3Rvci5sZW5ndGggLT0gdGhpcy5zZWdtZW50UmVkdWN0aW9uICogNTtcbiAgICAgIHAyID0gcDEuYWRkKHZlY3Rvcik7XG4gICAgICB2YXIgdmVjdG9yMiA9IHAxLnN1YnRyYWN0KHAyKTtcbiAgICAgIHZlY3RvcjIubGVuZ3RoIC09IHRoaXMuc2VnbWVudFJlZHVjdGlvbiAqIDU7XG4gICAgICBwMSA9IHAyLmFkZCh2ZWN0b3IyKTtcbiAgICB9XG5cbiAgICB2YXIgYjtcbiAgICBpZiAoaSAhPT0gMCAmJiBwb2ludHNbaSAtIDFdWzJdICE9PSAnZScgfHwgdmVjdG9yLmFuZ2xlICUgOTAgPT09IDApIHtcbiAgICAgIGIgPSBwMS5hZGQoYm94Lm11bHRpcGx5KFt4ICogLTEsIHldKSk7XG4gICAgICBiID0gYi5hZGQoYi55ICogLTEgKiB0aGlzLml0YWxpYywgMCk7XG4gICAgICBwYXRoLmFkZChiKTtcbiAgICB9XG5cbiAgICBiID0gcDEuYWRkKGJveC5tdWx0aXBseShbeCAqIC0xLCB5ICogLTFdKSk7XG4gICAgYiA9IGIuYWRkKGIueSAqIC0xICogdGhpcy5pdGFsaWMsIDApO1xuICAgIC8vIGlmIChpID09PSAwIHx8IHBvaW50c1tpIC0gMV1bMl0gPT09ICdlJyAmJiB2ZWN0b3IuYW5nbGUgJSA5MCAhPT0gMClcbiAgICAvLyAgIGIgPSBiLmFkZCgtMjAsIDApO1xuICAgIHBhdGguYWRkKGIpO1xuXG4gICAgYiA9IHAxLmFkZChib3gubXVsdGlwbHkoW3gsIHkgKiAtMV0pKTtcbiAgICBiID0gYi5hZGQoYi55ICogLTEgKiB0aGlzLml0YWxpYywgMCk7XG4gICAgcGF0aC5hZGQoYik7XG5cbiAgICBpZiAoaSArIDEgIT09IHBvaW50cy5sZW5ndGggLSAxICYmIHBvaW50c1tpICsgMV1bMl0gIT09ICdlJyB8fCB2ZWN0b3IuYW5nbGUgJSA5MCA9PT0gMCkge1xuICAgICAgYiA9IHAyLmFkZChib3gubXVsdGlwbHkoW3gsIHkgKiAtMV0pKTtcbiAgICAgIGIgPSBiLmFkZChiLnkgKiAtMSAqIHRoaXMuaXRhbGljLCAwKTtcbiAgICAgIHBhdGguYWRkKGIpO1xuICAgIH1cblxuICAgIGIgPSBwMi5hZGQoYm94Lm11bHRpcGx5KFt4LCB5XSkpO1xuICAgIGIgPSBiLmFkZChiLnkgKiAtMSAqIHRoaXMuaXRhbGljLCAwKTtcbiAgICAvLyBpZiAoaSArIDEgIT09IHBvaW50cy5sZW5ndGggLSAxICYmIHBvaW50c1tpICsgMV1bMl0gIT09ICdlJyB8fCB2ZWN0b3IuYW5nbGUgJSA5MCA9PT0gMCkge1xuICAgIC8vIH1lbHNle1xuICAgIC8vICAgdmFyIHYgPSBwMS5zdWJ0cmFjdChwMik7XG4gICAgLy8gICBiID0gYi5hZGQoKHRoaXMuY29udHJhc3QqMikvTWF0aC50YW4odi5hbmdsZUluUmFkaWFucykgKiAtMSwgMCk7XG4gICAgLy8gfVxuICAgIHBhdGguYWRkKGIpO1xuXG4gICAgYiA9IHAyLmFkZChib3gubXVsdGlwbHkoW3ggKiAtMSwgeV0pKTtcbiAgICBiID0gYi5hZGQoYi55ICogLTEgKiB0aGlzLml0YWxpYywgMCk7XG4gICAgcGF0aC5hZGQoYik7XG5cblxuICAgIC8vIEZJWE1FOiByb3VuZCBlZGdlc1xuICAgIC8vIHZhciBjID0gbmV3IFBhdGguQ2lyY2xlKHtcbiAgICAvLyAgIGNlbnRlcjogWzAsIDBdLFxuICAgIC8vICAgcmFkaXVzOiB0aGlzLndlaWdodFxuICAgIC8vIH0pO1xuICAgIC8vXG4gICAgLy8gYy5yb3RhdGUodmVjdG9yLmFuZ2xlKTtcbiAgICAvLyBjLnBvc2l0aW9uID0gcDE7XG4gICAgLy8gcGF0aC5hZGQoYy5zZWdtZW50c1szXSk7XG4gICAgLy8gcGF0aC5hZGQoYy5zZWdtZW50c1swXSk7XG4gICAgLy8gcGF0aC5hZGQoYy5zZWdtZW50c1sxXSk7XG4gICAgLy9cbiAgICAvLyBjLnBvc2l0aW9uID0gcDI7XG4gICAgLy8gcGF0aC5hZGQoYy5zZWdtZW50c1sxXSk7XG4gICAgLy8gcGF0aC5hZGQoYy5zZWdtZW50c1syXSk7XG4gICAgLy8gcGF0aC5hZGQoYy5zZWdtZW50c1szXSk7XG5cbiAgICBwYXRoLnJlZHVjZSgpO1xuICAgIHBhdGguY2xvc2VkID0gdHJ1ZTtcblxuICAgIHNlZ21lbnRzLnB1c2gocGF0aCk7XG5cbiAgICBpZiAocDEueCArIGdseXBoLndlaWdodCA+IGdseXBoLndpZHRoKVxuICAgICAgZ2x5cGgud2lkdGggPSBwMS54ICsgZ2x5cGgud2VpZ2h0O1xuXG4gICAgLy8gRklYTUU6IGFkZCBsYXN0IHBvaW50XG4gICAgaWYgKHAyLnggKyBnbHlwaC53ZWlnaHQgPiBnbHlwaC53aWR0aClcbiAgICAgIGdseXBoLndpZHRoID0gcDIueCArIGdseXBoLndlaWdodDtcblxuICAgIGlmIChwMS55ICsgZ2x5cGguY29udHJhc3QgPCBnbHlwaC5oZWlnaHQpXG4gICAgICBnbHlwaC5oZWlnaHQgPSBwMS55ICsgZ2x5cGguY29udHJhc3Q7XG5cbiAgICAvLyBGSVhNRTogYWRkIGxhc3QgcG9pbnRcbiAgICBpZiAocDIueSArIGdseXBoLmNvbnRyYXN0IDwgZ2x5cGguaGVpZ2h0KVxuICAgICAgZ2x5cGguaGVpZ2h0ID0gcDIueSArIGdseXBoLmNvbnRyYXN0O1xuXG4gICAgaWYgKHBvaW50c1tpICsgMV1bMl0gPT0gJ2UnIHx8IHBvaW50c1tpICsgMV1bMl0gPT0gJ2MnKSB7XG4gICAgICBpKys7XG4gICAgICBzdGFydFBvaW50ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuICBnbHlwaC5wYXRoID0gZ2x5cGgubWVyZ2VTZWdtZW50cyhzZWdtZW50cyk7XG4gIGdseXBoLnBhdGgucmVkdWNlKCk7XG5cbiAgaWYgKHRoaXMuc21vb3RoKVxuICAgIGdseXBoLnBhdGguc21vb3RoKHtcbiAgICAgIHR5cGU6ICdjb250aW51b3VzJ1xuICAgIH0pO1xuXG4gIHJldHVybiBnbHlwaDtcbn07XG5cbi8vV0lQXG5HZW5lcmF0b3IucHJvdG90eXBlLmdlbmVyYXRlR2x5cGgyID0gZnVuY3Rpb24obmFtZSwgcG9pbnRzKSB7XG4gIHZhciBnbHlwaCA9IG5ldyBnbHlwaGVyLkdseXBoKG5hbWUsIHRoaXMud2VpZ2h0LCB0aGlzLmNvbnRyYXN0LCB0aGlzLnByb3BvcnRpb24pO1xuXG4gIHZhciBuZXh0QW5nbGUsXG4gICAgY29ybmVyLFxuICAgIHNlZ21lbnRzID0gW1xuICAgICAgW11cbiAgICBdLFxuICAgIGNvcm5lclBvaW50MyxcbiAgICBzdGFydFBvaW50O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy9XSVBcbiAgICBpZiAocG9pbnRzW2ldWzJdID09ICdkb3QnKSB7XG4gICAgICBzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLSAxXS5wdXNoKHRoaXMuYWRqdXN0UG9pbnQocG9pbnRzW2ldKS5hZGQodGhpcy53ZWlnaHQsIHRoaXMud2VpZ2h0ICogLTEpKTtcbiAgICAgIHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdLnB1c2godGhpcy5hZGp1c3RQb2ludChwb2ludHNbaV0pLmFkZCh0aGlzLndlaWdodCAqIC0xLCB0aGlzLndlaWdodCAqIC0xKSk7XG4gICAgICBzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLSAxXS5wdXNoKHRoaXMuYWRqdXN0UG9pbnQocG9pbnRzW2ldKS5hZGQodGhpcy53ZWlnaHQgKiAtMSwgdGhpcy53ZWlnaHQpKTtcbiAgICAgIHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdLnB1c2godGhpcy5hZGp1c3RQb2ludChwb2ludHNbaV0pLmFkZCh0aGlzLndlaWdodCkpO1xuICAgICAgc2VnbWVudHMucHVzaChbXSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoaSA+PSBwb2ludHMubGVuZ3RoIC0gMSlcbiAgICAgIGJyZWFrO1xuXG4gICAgdmFyIHBvaW50MSA9IHRoaXMuYWRqdXN0UG9pbnQocG9pbnRzW2ldKTtcbiAgICB2YXIgcG9pbnQyID0gdGhpcy5hZGp1c3RQb2ludChwb2ludHNbaSArIDFdKTtcblxuICAgIGlmIChwb2ludHNbaSArIDFdWzJdID09ICdjJykge1xuICAgICAgcG9pbnQyID0gdGhpcy5hZGp1c3RQb2ludChwb2ludHNbc3RhcnRQb2ludCAtIDFdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcG9pbnQyID0gdGhpcy5hZGp1c3RQb2ludChwb2ludHNbaSArIDFdKTtcbiAgICAgIHN0YXJ0UG9pbnQgPSBzdGFydFBvaW50IHx8IGk7XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzQW5nbGUgPSBuZXh0QW5nbGU7XG5cbiAgICB2YXIgdmVjdG9yMSA9IHBvaW50Mi5zdWJ0cmFjdChwb2ludDEpO1xuICAgIGlmIChwb2ludHNbaSArIDJdKSB7XG4gICAgICB2YXIgdmVjdG9yMiA9IHRoaXMuYWRqdXN0UG9pbnQocG9pbnRzW2kgKyAyXSkuc3VidHJhY3QocG9pbnQyKTtcbiAgICAgIG5leHRBbmdsZSA9IHZlY3RvcjEucm90YXRlKDE4MCkuZ2V0RGlyZWN0ZWRBbmdsZSh2ZWN0b3IyKTtcbiAgICB9XG4gICAgdmFyIHAxLCBwMiwgcDMsIHA0O1xuICAgIGlmIChwb2ludHNbaSAtIDFdICYmIHBvaW50c1tpIC0gMV1bMl0gPT0gJ2UnIHx8IGkgPT09IDApIHtcbiAgICAgIHAxID0gcG9pbnQxLmFkZCh0aGlzLndlaWdodCAqIC0xLCB0aGlzLndlaWdodCkucm90YXRlKHZlY3RvcjEuYW5nbGUgKyA5MCwgcG9pbnQxKTtcbiAgICAgIHAyID0gcG9pbnQxLmFkZCh0aGlzLndlaWdodCwgdGhpcy53ZWlnaHQpLnJvdGF0ZSh2ZWN0b3IxLmFuZ2xlICsgOTAsIHBvaW50MSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHAxID0gcG9pbnQxLmFkZCh0aGlzLndlaWdodCwgMCkucm90YXRlKHZlY3RvcjEuYW5nbGUgLSA5MCwgcG9pbnQxKTtcbiAgICAgIHAyID0gcG9pbnQxLmFkZCh0aGlzLndlaWdodCwgMCkucm90YXRlKHZlY3RvcjEuYW5nbGUgKyA5MCwgcG9pbnQxKTtcbiAgICB9XG5cbiAgICBpZiAocG9pbnRzW2kgKyAxXVsyXSA9PSAnZScgfHwgaSA9PT0gcG9pbnRzLmxlbmd0aCAtIDIpIHtcbiAgICAgIHAzID0gcG9pbnQyLmFkZCh0aGlzLndlaWdodCAqIC0xLCB0aGlzLndlaWdodCkucm90YXRlKHZlY3RvcjEuYW5nbGUgLSA5MCwgcG9pbnQyKTtcbiAgICAgIHA0ID0gcG9pbnQyLmFkZCh0aGlzLndlaWdodCwgdGhpcy53ZWlnaHQpLnJvdGF0ZSh2ZWN0b3IxLmFuZ2xlIC0gOTAsIHBvaW50Mik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHAzID0gcG9pbnQyLmFkZCh0aGlzLndlaWdodCwgMCkucm90YXRlKHZlY3RvcjEuYW5nbGUgKyA5MCwgcG9pbnQyKTtcbiAgICAgIHA0ID0gcG9pbnQyLmFkZCh0aGlzLndlaWdodCwgMCkucm90YXRlKHZlY3RvcjEuYW5nbGUgLSA5MCwgcG9pbnQyKTtcbiAgICB9XG5cbiAgICB2YXIgY29ybmVyUG9pbnQsXG4gICAgICBjb3JuZXJQb2ludDI7XG5cbiAgICBpZiAocG9pbnRzW2kgLSAxXSAmJiBwb2ludHNbaV1bMl0gIT0gJ2UnICYmIHBvaW50c1tpIC0gMV1bMl0gIT0gJ2UnICYmIHByZXZpb3VzQW5nbGUpIHtcbiAgICAgIHZhciBwcmV2aW91c1ZlY3RvciA9IHRoaXMuYWRqdXN0UG9pbnQocG9pbnRzW2kgLSAxXSkuc3VidHJhY3QocG9pbnQxKTtcbiAgICAgIGlmIChwcmV2aW91c0FuZ2xlIDwgMCkge1xuICAgICAgICBjb3JuZXJQb2ludCA9IHAxO1xuICAgICAgICAvLyBzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLSAxXS5wdXNoKG1ha2VDb3JuZXIoY29ybmVyUG9pbnQyLCBjb3JuZXJQb2ludCwgcHJldmlvdXNWZWN0b3IsIHZlY3RvcjEpKTtcbiAgICAgICAgc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV0uc3BsaWNlKDAsIDAsIG1ha2VDb3JuZXIoY29ybmVyUG9pbnQzLCBwMiwgcHJldmlvdXNWZWN0b3IsIHZlY3RvcjEpKTtcbiAgICAgICAgLy9mb3IgYmx1bnQgZWRnZXNcbiAgICAgICAgc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV0ucHVzaChjb3JuZXJQb2ludDIpO1xuICAgICAgICBzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLSAxXS5wdXNoKGNvcm5lclBvaW50KTtcblxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb3JuZXJQb2ludCA9IHAyO1xuICAgICAgICAvLyBzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLSAxXS5zcGxpY2UoMCwgMCwgbWFrZUNvcm5lcihjb3JuZXJQb2ludDIsIGNvcm5lclBvaW50LCBwcmV2aW91c1ZlY3RvciwgdmVjdG9yMSkpO1xuICAgICAgICBzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLSAxXS5wdXNoKG1ha2VDb3JuZXIoY29ybmVyUG9pbnQzLCBwMSwgcHJldmlvdXNWZWN0b3IsIHZlY3RvcjEpKTtcbiAgICAgICAgLy9mb3IgYmx1bnQgZWRnZXNcbiAgICAgICAgc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV0uc3BsaWNlKDAsIDAsIGNvcm5lclBvaW50Mik7XG4gICAgICAgIHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdLnNwbGljZSgwLCAwLCBjb3JuZXJQb2ludCk7XG5cblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXh0QW5nbGUpIHtcblxuICAgICAgaWYgKG5leHRBbmdsZSA8IDApIHtcbiAgICAgICAgY29ybmVyUG9pbnQyID0gcDQ7XG4gICAgICAgIGNvcm5lclBvaW50MyA9IHAzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29ybmVyUG9pbnQyID0gcDM7XG4gICAgICAgIGNvcm5lclBvaW50MyA9IHA0O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb2ludHNbaSAtIDFdICYmIHBvaW50c1tpIC0gMV1bMl0gPT0gJ2UnIHx8ICFwcmV2aW91c0FuZ2xlKSB7XG4gICAgICBzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLSAxXS5wdXNoKHAxKTtcbiAgICAgIHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdLnNwbGljZSgwLCAwLCBwMik7XG4gICAgfVxuXG4gICAgaWYgKHBvaW50c1tpICsgMV1bMl0gPT0gJ2UnIHx8IGkgPT0gcG9pbnRzLmxlbmd0aCAtIDIpIHtcbiAgICAgIHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdLnNwbGljZSgwLCAwLCBwMyk7XG4gICAgICBzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLSAxXS5wdXNoKHA0KTtcbiAgICAgIHNlZ21lbnRzLnB1c2goW10pO1xuICAgIH1cblxuICAgIGlmIChwb2ludDIueCArIGdseXBoLndlaWdodCA+IGdseXBoLndpZHRoKVxuICAgICAgZ2x5cGgud2lkdGggPSBwb2ludDIueCArIGdseXBoLndlaWdodDtcblxuICAgIC8vIEZJWE1FOiBhZGQgbGFzdCBwb2ludFxuICAgIGlmIChwb2ludDIueCArIGdseXBoLndlaWdodCA+IGdseXBoLndpZHRoKVxuICAgICAgZ2x5cGgud2lkdGggPSBwb2ludDIueCArIGdseXBoLndlaWdodDtcblxuICB9XG4gIGdseXBoLnBhdGggPSBuZXcgUGF0aChzZWdtZW50c1swXSk7XG4gIGdseXBoLnBhdGguY2xvc2VQYXRoKCk7XG4gIGZvciAoaSA9IDE7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzZWdtZW50c1tpXS5sZW5ndGgpIHtcbiAgICAgIHZhciBzZWdtZW50ID0gbmV3IFBhdGgoc2VnbWVudHNbaV0pO1xuICAgICAgc2VnbWVudC5jbG9zZVBhdGgoKTtcbiAgICAgIGdseXBoLnBhdGggPSBnbHlwaC5wYXRoLnVuaXRlKHNlZ21lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnbHlwaDtcbn07XG5cbmZ1bmN0aW9uIG1ha2VDb3JuZXIocDEsIHAyLCB2ZWN0b3IyLCB2ZWN0b3IzKSB7XG4gIHZhciB2ZWN0b3IxID0gcDIuc3VidHJhY3QocDEpO1xuXG4gIHZhciByYWQxID0gdmVjdG9yMi5yb3RhdGUoMTgwKS5nZXRBbmdsZUluUmFkaWFucyh2ZWN0b3IxKTtcbiAgdmFyIHJhZDIgPSB2ZWN0b3IzLmdldEFuZ2xlSW5SYWRpYW5zKHZlY3RvcjEpO1xuXG4gIHZhciB4ID0gKHZlY3RvcjEubGVuZ3RoICogTWF0aC5zaW4ocmFkMSkpIC8gTWF0aC5zaW4ocmFkMiArIHJhZDEpO1xuXG4gIC8vIGlmICh4ID4gMzApXG4gIC8vICAgeCA9IDMwO1xuXG4gIC8vIGlmICh4ID4gNTApXG4gIC8vICAgeCA9IDMwO1xuXG4gIHZhciByZXN1bHQgPSBuZXcgUG9pbnQoeCwgMCk7XG4gIHJlc3VsdCA9IHJlc3VsdC5yb3RhdGUodmVjdG9yMi5yb3RhdGUoMTgwKS5hbmdsZSk7XG4gIHJlc3VsdCA9IHJlc3VsdC5hZGQocDEpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5HZW5lcmF0b3IucHJvdG90eXBlLmdlbmVyYXRlR2x5cGhXaXRoQWNjZW50ID0gZnVuY3Rpb24obmFtZSwgYWNjZW50KSB7XG4gIHZhciBnbHlwaDtcblxuICBpZiAoYWNjZW50Lmxlbmd0aCA+IDEpXG4gICAgYWNjZW50ID0gZGVjb2RlSHRtbCgnJicgKyBhY2NlbnQgKyAnOycpO1xuXG4gIGlmIChuYW1lID09ICdpJylcbiAgICBnbHlwaCA9IHRoaXMuZ2VuZXJhdGVHbHlwaCgnxLEnKTtcbiAgZWxzZVxuICAgIGdseXBoID0gdGhpcy5nZW5lcmF0ZUdseXBoKG5hbWUpO1xuXG4gIHZhciBhY2NlbnRHbHlwaCA9IHRoaXMuZ2VuZXJhdGVHbHlwaChhY2NlbnQpO1xuICAvLyBGSVhNRTogZml4IHRoaXMgZm9yIGl0YWxpY3NcbiAgYWNjZW50R2x5cGgucGF0aC5wb3NpdGlvbi54ICs9IChnbHlwaC53aWR0aCAtIGFjY2VudEdseXBoLndpZHRoKSAvIDI7XG5cbiAgaWYgKG5hbWVbMF0gPT09IG5hbWVbMF0udG9Mb3dlckNhc2UoKSkge1xuICAgIGFjY2VudEdseXBoLnBhdGgucG9zaXRpb24ueSArPSA5MCArIGdseXBoLmhlaWdodDtcbiAgfVxuXG4gIGdseXBoLnBhdGggPSBnbHlwaC5wYXRoLnVuaXRlKGFjY2VudEdseXBoLnBhdGgpO1xuICBnbHlwaC5uYW1lID0gZGVjb2RlSHRtbCgnJicgKyBuYW1lICsgdGhpcy5hbHBoYWJldC5uYW1lTWFwW2FjY2VudF0gKyAnOycpO1xuICByZXR1cm4gZ2x5cGg7XG59O1xuXG5mdW5jdGlvbiBkZWNvZGVIdG1sKGh0bWwpIHtcbiAgdmFyIHR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgdHh0LmlubmVySFRNTCA9IGh0bWw7XG4gIHJldHVybiB0eHQudmFsdWU7XG59XG5cbmZ1bmN0aW9uIGRyYXdPcGVudHlwZVBhdGgocGF0aCkge1xuICB2YXIgcmVzdWx0UGF0aCA9IG5ldyBvcGVudHlwZS5QYXRoKCksXG4gICAgcGF0aHMgPSBwYXRoLmNoaWxkcmVuIHx8IFtwYXRoXTtcblxuICBmb3IgKHZhciBqID0gMDsgaiA8IHBhdGhzLmxlbmd0aDsgaisrKSB7XG4gICAgLy8gRklYTUU6IHkgKiAtMSwgKiAxMFxuICAgIHJlc3VsdFBhdGgubW92ZVRvKE1hdGgucm91bmQocGF0aHNbal0uY3VydmVzWzBdLnBvaW50MS54ICogMTApLCBNYXRoLnJvdW5kKHBhdGhzW2pdLmN1cnZlc1swXS5wb2ludDEueSAqIC0xMCkpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBwYXRoc1tqXS5jdXJ2ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjdXJ2ZSA9IHBhdGhzW2pdLmN1cnZlc1tpXTtcblxuICAgICAgdmFyIHgxID0gTWF0aC5yb3VuZChjdXJ2ZS5wb2ludDEueCAqIDEwKTtcbiAgICAgIHZhciB5MSA9IE1hdGgucm91bmQoY3VydmUucG9pbnQxLnkgKiAtMTApO1xuICAgICAgdmFyIHgyID0gTWF0aC5yb3VuZChjdXJ2ZS5wb2ludDIueCAqIDEwKTtcbiAgICAgIHZhciB5MiA9IE1hdGgucm91bmQoY3VydmUucG9pbnQyLnkgKiAtMTApO1xuICAgICAgdmFyIGh4MSA9IGN1cnZlLmhhbmRsZTEueCAqIDEwO1xuICAgICAgdmFyIGh5MSA9IGN1cnZlLmhhbmRsZTEueSAqIC0xMDtcbiAgICAgIHZhciBoeDIgPSBjdXJ2ZS5oYW5kbGUyLnggKiAxMDtcbiAgICAgIHZhciBoeTIgPSBjdXJ2ZS5oYW5kbGUyLnkgKiAtMTA7XG5cbiAgICAgIGlmIChoeDEgKyBoeTEgPT09IDAgJiYgaHgyICsgaHkyID09PSAwKVxuICAgICAgICByZXN1bHRQYXRoLmxpbmVUbyh4MiwgeTIpO1xuICAgICAgZWxzZVxuICAgICAgICByZXN1bHRQYXRoLmN1cnZlVG8oeDEgKyBoeDEsIHkxICsgaHkxLCB4MiArIGh4MiwgeTIgKyBoeTIsIHgyLCB5Mik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFBhdGg7XG59XG5cbkdlbmVyYXRvci5wcm90b3R5cGUuZXhwb3J0T3BlbnR5cGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHZhciBvcGVudHlwZUdseXBocyA9IFtdLFxuICAgIGdseXBoLFxuICAgIHBhdGg7XG5cbiAgLy8gSEFDSzogLm5vdGRlZiBoYXZlIHRvIGJlIGZpcnN0IGRlZmluZWRcbiAgaWYgKHRoaXMuZ2x5cGhzWycubm90ZGVmJ10pIHtcbiAgICBnbHlwaCA9IHRoaXMuZ2x5cGhzWycubm90ZGVmJ107XG4gICAgcGF0aCA9IGRyYXdPcGVudHlwZVBhdGgoZ2x5cGgucGF0aCk7XG5cbiAgICBpZiAocGF0aC5jb21tYW5kcy5sZW5ndGggIT09IDApIHtcbiAgICAgIG9wZW50eXBlR2x5cGhzLnB1c2gobmV3IG9wZW50eXBlLkdseXBoKHtcbiAgICAgICAgbmFtZTogJy5ub3RkZWYnLFxuICAgICAgICB1bmljb2RlOiAwLFxuICAgICAgICBhZHZhbmNlV2lkdGg6IGdseXBoLndpZHRoICogMTAgKyAxMDAsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIG5vdGRlZlBhdGggPSBuZXcgb3BlbnR5cGUuUGF0aCgpO1xuICAgIG5vdGRlZlBhdGgubW92ZVRvKDEwMCwgMCk7XG4gICAgbm90ZGVmUGF0aC5saW5lVG8oMTAwLCA3MDApO1xuICAgIG5vdGRlZlBhdGgubGluZVRvKDYwMCwgNzAwKTtcbiAgICBub3RkZWZQYXRoLmxpbmVUbyg2MDAsIDApO1xuICAgIG5vdGRlZlBhdGgubW92ZVRvKDIwMCwgMTAwKTtcbiAgICBub3RkZWZQYXRoLmxpbmVUbyg1MDAsIDEwMCk7XG4gICAgbm90ZGVmUGF0aC5saW5lVG8oNTAwLCA2MDApO1xuICAgIG5vdGRlZlBhdGgubGluZVRvKDIwMCwgNjAwKTtcbiAgICBvcGVudHlwZUdseXBocy5wdXNoKG5ldyBvcGVudHlwZS5HbHlwaCh7XG4gICAgICBuYW1lOiAnLm5vdGRlZicsXG4gICAgICB1bmljb2RlOiAwLFxuICAgICAgYWR2YW5jZVdpZHRoOiA2NTAsXG4gICAgICBwYXRoOiBub3RkZWZQYXRoXG4gICAgfSkpO1xuICB9XG5cbiAgZm9yICh2YXIgeCBpbiB0aGlzLmdseXBocykge1xuICAgIC8vIEhBQ0s6IC5ub3RkZWYgYWxyZWFkeSBkZWZpbmVkXG4gICAgaWYgKHggPT0gJy5ub3RkZWYnKVxuICAgICAgY29udGludWU7XG5cbiAgICBnbHlwaCA9IHRoaXMuZ2x5cGhzW3hdO1xuICAgIHBhdGggPSBkcmF3T3BlbnR5cGVQYXRoKGdseXBoLnBhdGgpO1xuXG4gICAgaWYgKHBhdGguY29tbWFuZHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBvcGVudHlwZUdseXBocy5wdXNoKG5ldyBvcGVudHlwZS5HbHlwaCh7XG4gICAgICAgIG5hbWU6IHRoaXMuYWxwaGFiZXQubmFtZU1hcFtnbHlwaC5uYW1lXSB8fCBnbHlwaC5uYW1lLFxuICAgICAgICB1bmljb2RlOiBnbHlwaC5uYW1lLmNoYXJDb2RlQXQoKSxcbiAgICAgICAgYWR2YW5jZVdpZHRoOiBnbHlwaC53aWR0aCAqIDEwICsgMTAwLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KSk7XG4gICAgfVxuICB9XG5cbiAgb3BlbnR5cGVHbHlwaHMucHVzaChuZXcgb3BlbnR5cGUuR2x5cGgoe1xuICAgIG5hbWU6ICdzcGFjZScsXG4gICAgdW5pY29kZTogMzIsXG4gICAgYWR2YW5jZVdpZHRoOiAxMDAwLFxuICAgIHBhdGg6IG5ldyBvcGVudHlwZS5QYXRoKClcbiAgfSkpO1xuXG4gIHRoaXMuZm9udCA9IG5ldyBvcGVudHlwZS5Gb250KHtcbiAgICBmYW1pbHlOYW1lOiBvcHRpb25zLmZhbWlseU5hbWUgfHwgJ0dseXBoZXJTdGFuZGFydCcsXG4gICAgc3R5bGVOYW1lOiBvcHRpb25zLnN0eWxlTmFtZSB8fCAnTWVkaXVtJyxcbiAgICB1bml0c1BlckVtOiAxMDAwLFxuICAgIGFzY2VuZGVyOiAxMDAwLFxuICAgIGRlc2NlbmRlcjogdGhpcy5kZXNjZW5kZXIgKiAxNTAsXG4gICAgZ2x5cGhzOiBvcGVudHlwZUdseXBoc1xuICB9KTtcblxuICB2YXIgYnVmZmVyID0gdGhpcy5mb250LnRvQXJyYXlCdWZmZXIoKTtcbiAgdmFyIGZvbnQyID0gb3BlbnR5cGUucGFyc2UoYnVmZmVyKTtcblxuICAvL2RlYnVnZ2luZ1xuICBpZiAob3B0aW9ucy5kZWJ1Zykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9udDIuZ2x5cGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZyA9IGZvbnQyLmdseXBocy5nZXQoaSk7XG4gICAgICB2YXIgY3R4ID0gY3JlYXRlR2x5cGhDYW52YXMoZywgMTUwKTtcbiAgICAgIHggPSAyMDtcbiAgICAgIHZhciB5ID0gMTIwO1xuICAgICAgdmFyIGZvbnRTaXplID0gNzI7XG4gICAgICBnLmRyYXcoY3R4LCB4LCB5LCBmb250U2l6ZSk7XG4gICAgICAvLyBnLmRyYXdQb2ludHMoY3R4LCB4LCB5LCBmb250U2l6ZSk7XG4gICAgICBnLmRyYXdNZXRyaWNzKGN0eCwgeCwgeSwgZm9udFNpemUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEZJWE1FOiBkZXBlbmRzIG9uIGRpdiB3aXRoIGlkIGdseXBoc1xuICBmdW5jdGlvbiBjcmVhdGVHbHlwaENhbnZhcyhnbHlwaCwgc2l6ZSkge1xuICAgIHZhciBjYW52YXNJZCwgaHRtbCwgZ2x5cGhzRGl2LCB3cmFwLCBjYW52YXMsIGN0eDtcbiAgICBjYW52YXNJZCA9ICdnbHlwaF8yJyArIGdseXBoLnVuaWNvZGU7XG4gICAgaHRtbCA9ICc8Y2FudmFzIGlkPVwiJyArIGNhbnZhc0lkICsgJ1wiIHdpZHRoPVwiJyArIHNpemUgKyAnXCIgaGVpZ2h0PVwiJyArIHNpemUgKyAnXCI+PC9jYW52YXM+JztcbiAgICBnbHlwaHNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2x5cGhzJyk7XG4gICAgd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB3cmFwLmlubmVySFRNTCA9IGh0bWw7XG4gICAgZ2x5cGhzRGl2LmFwcGVuZENoaWxkKHdyYXApO1xuICAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc0lkKTtcbiAgICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICByZXR1cm4gY3R4O1xuICB9XG59O1xuXG5HZW5lcmF0b3IucHJvdG90eXBlLmRvd25sb2FkT1RGID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLmZvbnQpIHtcbiAgICBpZiAod2luZG93LnJlcXVlc3RGaWxlU3lzdGVtIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0RmlsZVN5c3RlbSlcbiAgICAgIHRoaXMuZm9udC5kb3dubG9hZCgpO1xuICAgIGVsc2VcbiAgICAgIGNvbnNvbGUubG9nKCdVc2UgR29vZ2xlIENocm9tZScpO1xuICB9IGVsc2VcbiAgICBjb25zb2xlLmxvZygndXNlIGV4cG9ydE9wZW50eXBlIGZpcnN0Jyk7XG59O1xuXG5mdW5jdGlvbiBzaWduKHgpIHtcbiAgLy8gMCA9PSAxXG4gIHJldHVybiB4ID49IDAgPyAxIDogLTE7XG59XG5cbmV4cG9ydHMuR2VuZXJhdG9yID0gR2VuZXJhdG9yO1xuIiwiZnVuY3Rpb24gR2x5cGgobmFtZSwgd2VpZ2h0LCBjb250cmFzdCwgcHJvcG9ydGlvbikge1xuICB0aGlzLm5hbWUgPSBuYW1lO1xuICB0aGlzLndlaWdodCA9IHdlaWdodDtcbiAgdGhpcy5jb250cmFzdCA9IGNvbnRyYXN0O1xuICB0aGlzLnByb3BvcnRpb24gPSBwcm9wb3J0aW9uO1xuXG4gIHRoaXMucGF0aCA9IHVuZGVmaW5lZDtcbiAgdGhpcy53aWR0aCA9IDA7XG4gIHRoaXMuaGVpZ2h0ID0gMDtcbn1cblxuR2x5cGgucHJvdG90eXBlLm1lcmdlU2VnbWVudHMgPSBmdW5jdGlvbihzZWdtZW50cykge1xuXG4gIHZhciByZXN1bHQgPSBzZWdtZW50c1swXS5jbG9uZSgpO1xuICBmb3IgKGkgPSAxOyBpIDwgc2VnbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICByZXN1bHQgPSByZXN1bHQudW5pdGUoc2VnbWVudHNbaV0pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vREVCVUdcbkdseXBoLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oeCwgeSwgZGVidWcpIHtcbiAgLy9kZWJ1Z2dpbmdcbiAgaWYgKGRlYnVnKSB7XG4gICAgbmV3IFBhdGguQ2lyY2xlKHtcbiAgICAgIGNlbnRlcjogW3gsIHldLFxuICAgICAgcmFkaXVzOiAzLFxuICAgICAgc3Ryb2tlQ29sb3I6ICdibHVlJ1xuICAgIH0pO1xuICAgIG5ldyBQYXRoLkNpcmNsZSh7XG4gICAgICBjZW50ZXI6IFt4ICsgdGhpcy53aWR0aCwgeV0sXG4gICAgICByYWRpdXM6IDMsXG4gICAgICBzdHJva2VDb2xvcjogJ2JsdWUnXG4gICAgfSk7XG4gIH1cblxuICB2YXIgcGF0aCA9IHRoaXMucGF0aC5jbG9uZSgpO1xuICBwYXRoLnBvc2l0aW9uID0gW3ggKyBwYXRoLnBvc2l0aW9uLngsIHkgKyBwYXRoLnBvc2l0aW9uLnldO1xuICBwYXRoLmZpbGxDb2xvciA9ICdibGFjayc7XG4gIHBhdGguc2VsZWN0ZWQgPSB0cnVlO1xufTtcblxuZXhwb3J0cy5HbHlwaCA9IEdseXBoO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0LmpzJyk7XG52YXIgZ2VuZXJhdG9yID0gcmVxdWlyZSgnLi9nZW5lcmF0b3IuanMnKTtcbnZhciBnbHlwaCA9IHJlcXVpcmUoJy4vZ2x5cGguanMnKTtcblxuZXhwb3J0cy5HbHlwaCA9IGdseXBoLkdseXBoO1xuZXhwb3J0cy5BbHBoYWJldCA9IGFscGhhYmV0LkFscGhhYmV0O1xuZXhwb3J0cy5HZW5lcmF0b3IgPSBnZW5lcmF0b3IuR2VuZXJhdG9yO1xuIl19
