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
    ':': [
      [0, xheight],
      [0, xheight - 1, 'e'],
      [0, 0],
      [0, 1]
    ],
    ';': [
      [0, xheight],
      [0, xheight - 1, 'e'],
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
      [0, 5],
      [2, 5]
    ],
    //endash
    '–': [
      [0, 5],
      [10, 5]
    ],
    //emdash
    '—': [
      [0, 5],
      [20, 5]
    ],
    '+': [
      [0, 5],
      [4, 5, 'e'],
      [2, 7],
      [2, 3]
    ],
    //minus
    '-': [
      [0, 5],
      [2, 5]
    ],
    '=': [
      [0, 4],
      [2, 4, 'e'],
      [0, 6],
      [2, 6]
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
    ],
    '(': [
      [5, 10],
      [0, 7],
      [0, 3],
      [5, 0]
    ],
    ')': [
      [0, 10],
      [5, 7],
      [5, 3],
      [0, 0]
    ],
    '[': [
      [5, 10],
      [0, 10],
      [0, 0],
      [5, 0]
    ],
    ']': [
      [0, 10],
      [5, 10],
      [5, 0],
      [0, 0]
    ],
    '{': [
      [5, 10],
      [2, 9],
      [2, 6.5],
      [0, 5],
      [2, 3.5],
      [2, 1],
      [5, 0]
    ],
    '}': [
      [0, 10],
      [3, 9],
      [3, 6.5],
      [5, 5],
      [3, 3.5],
      [3, 1],
      [0, 0]
    ],
    '<': [
      [10, xheight + 1],
      [0, xheight / 2 + 1],
      [10, 1]
    ],
    '>': [
      [0, xheight + 1],
      [10, xheight / 2 + 1],
      [0, 1]
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
    // HACK: change glyph for condensed fonts
    if (options.proportion < 1) {
      this.glyphs.N = [
        [0, 0],
        [0, 10],
        [2, 10],
        [8, 0],
        [10, 0],
        [10, 10]
      ];
    } else {
      this.glyphs.N = [
        [0, 0],
        [0, 10.5],
        [10, -0.5],
        [10, 10]
      ];
    }
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
    this.glyphs.G.push([8 - Math.round(weight / 10 * options.proportion), xheight]);

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
    '+': 'plus',
    '.': 'period',
    ',': 'comma',
    ':': 'colon',
    ';': 'semicolon',
    '!': 'exclam',
    '?': 'question',
    '/': 'slash',
    '@': 'at',
    '&': 'ampersand',
    '(': 'parenleft',
    ')': 'parenright',
    '[': 'bracketleft',
    ']': 'bracketright',
    '{': 'braceleft',
    '}': 'braceright',
    '<': 'less',
    '=': 'equal',
    '>': 'greater'
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

Alphabet.prototype.maxWidth = function() {
  var max = 0;
  for (var key in this.glyphs) {
    if (this.glyphs[key]) {
      for (var i = 0; i < this.glyphs[key].length; i++) {
        if (this.glyphs[key][i][0] > max)
          max = this.glyphs[key][i][0];
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
  points = points || this.alphabet.glyphs[name];
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

    if (point2.y + glyph.contrast < glyph.height)
      glyph.height = point2.y + glyph.contrast;

    // FIXME: add last point
    if (point2.y + glyph.contrast < glyph.height)
      glyph.height = point2.y + glyph.contrast;

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
    advanceWidth: this.size / this.proportion * 100,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYWxwaGFiZXQuanMiLCJzcmMvZ2VuZXJhdG9yLmpzIiwic3JjL2dseXBoLmpzIiwic3JjL2dseXBoZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJmdW5jdGlvbiBBbHBoYWJldChvcHRpb25zKSB7XG4gIHhoZWlnaHQgPSBvcHRpb25zLnhoZWlnaHQgfHwgNTtcbiAgZGVzY2VuZGVyID0gb3B0aW9ucy5kZXNjZW5kZXIgfHwgLTM7XG4gIGFlaGVpZ2h0ID0gb3B0aW9ucy5hZWhlaWdodCB8fCB4aGVpZ2h0IC8gMjtcbiAgLy8gRklYTUVcbiAgd2VpZ2h0ID0gb3B0aW9ucy53ZWlnaHQgfHwgMjA7XG5cbiAgdGhpcy5nbHlwaHMgPSB7XG4gICAgJy5ub3RkZWYnOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDAsICdjJ11cbiAgICBdLFxuICAgIGE6IFtcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIGFlaGVpZ2h0XSxcbiAgICAgIFsxMCwgYWVoZWlnaHRdXG4gICAgXSxcbiAgICBiOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIGM6IFtcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICBkOiBbXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICBlOiBbXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgYWVoZWlnaHRdLFxuICAgICAgWzAsIGFlaGVpZ2h0XVxuICAgIF0sXG4gICAgZjogW1xuICAgICAgWzMsIDBdLFxuICAgICAgWzMsIDEwXSxcbiAgICAgIFsxMCwgMTAsICdlJ10sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICBnOiBbXG4gICAgICBbMCwgZGVzY2VuZGVyXSxcbiAgICAgIFsxMCwgZGVzY2VuZGVyXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdXG4gICAgXSxcbiAgICBoOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIDAsICdlJ10sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAwXVxuICAgIF0sXG4gICAgaTogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHQsICdlJ10sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIHhoZWlnaHQgKyAyXVxuICAgIF0sXG4gICAgLy9kb3R0bGVzcyBpIGlzIG5lZWRlZCBmb3IgYWNjZW50ZWQgaXNcbiAgICAnxLEnOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIGo6IFtcbiAgICAgIFstMiwgZGVzY2VuZGVyXSxcbiAgICAgIFsxLCBkZXNjZW5kZXJdLFxuICAgICAgWzEsIHhoZWlnaHQsICdlJ10sXG4gICAgICBbMSwgMTBdLFxuICAgICAgWzEsIHhoZWlnaHQgKyAyXVxuICAgIF0sXG4gICAgazogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCAwLCAnZSddLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFs1LCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTAsIHhoZWlnaHQsICdlJ10sXG4gICAgICBbMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzUsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgIGw6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF1cbiAgICBdLFxuICAgIG06IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIDAsICdlJ10sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzIwLCB4aGVpZ2h0XSxcbiAgICAgIFsyMCwgMF1cbiAgICBdLFxuICAgIG46IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIDBdXG4gICAgXSxcbiAgICBvOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwLCAnYyddXG4gICAgXSxcbiAgICBwOiBbXG4gICAgICBbMCwgZGVzY2VuZGVyXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdXG4gICAgXSxcbiAgICBxOiBbXG4gICAgICBbMTAsIGRlc2NlbmRlcl0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXVxuICAgIF0sXG4gICAgcjogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgczogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIHQ6IFtcbiAgICAgIC8vIEZJWE1FOiB4aGVpZ2h0ICsgMiA/P1xuICAgICAgWzMsIHhoZWlnaHQgKyAyXSxcbiAgICAgIFszLCAwXSxcbiAgICAgIFsxMCwgMCwgJ2UnXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIHU6IFtcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICB2OiBbXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzUsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG5cbiAgICBdLFxuICAgIHc6IFtcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbNSwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsxMCwgeGhlaWdodCwgJyBlJ10sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsxNSwgMF0sXG4gICAgICBbMjAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsyMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIHg6IFtcbiAgICAgIC8vIFswLCAwXSxcbiAgICAgIC8vIFsxMCwgeGhlaWdodCwgJ2UnXSxcbiAgICAgIC8vIFswLCB4aGVpZ2h0XSxcbiAgICAgIC8vIFsxMCwgMF1cbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gNl0sXG4gICAgICBbMTAsIHhoZWlnaHQgLSB4aGVpZ2h0IC8gNl0sXG4gICAgICBbMTAsIHhoZWlnaHQsICdlJ10sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gNl0sXG4gICAgICBbMCwgeGhlaWdodCAtIHhoZWlnaHQgLyA2XSxcbiAgICAgIFswLCB4aGVpZ2h0LCAnZSddXG4gICAgXSxcbiAgICB5OiBbXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgZGVzY2VuZGVyXSxcbiAgICAgIFswLCBkZXNjZW5kZXJdXG4gICAgXSxcbiAgICB6OiBbXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgQTogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzUsIDEwXSxcbiAgICAgIFsxMCwgMCwgJ2UnXSxcbiAgICAgIFszLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbNywgeGhlaWdodCAvIDJdXG4gICAgXSxcbiAgICBCOiBbXG4gICAgICAvLyBbMCwgeGhlaWdodF0sXG4gICAgICAvLyBbMCwgMTBdLFxuICAgICAgLy8gLy8gRklYTUU6IHNob3VsZCBkZXBlbmQgb24gZm9udCB3ZWlnaHRcbiAgICAgIC8vIFs5LCAxMF0sXG4gICAgICAvLyBbOSwgeGhlaWdodF0sXG4gICAgICAvLyBbMCwgeGhlaWdodCwgJ2UnXSxcbiAgICAgIC8vIFswLCAwXSxcbiAgICAgIC8vIFswLCB4aGVpZ2h0XSxcbiAgICAgIC8vIFsxMCwgeGhlaWdodF0sXG4gICAgICAvLyBbMTAsIDBdLFxuICAgICAgLy8gWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzgsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHQsICdlJ10sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXVxuICAgIF0sXG4gICAgQzogW1xuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXVxuICAgIF0sXG4gICAgRDogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFs3LCAxMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAxMCAtIHhoZWlnaHRdLFxuICAgICAgWzcsIDBdLFxuICAgICAgWzAsIDBdXG4gICAgXSxcbiAgICBFOiBbXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTAsICdlJ10sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICBGOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMCwgJ2UnXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIEc6IFtcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICBIOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTAsICdlJ10sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCAxMCwgJ2UnXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIEk6IFtcbiAgICAgIFs1LCAxMF0sXG4gICAgICBbNSwgMCwgJ2UnXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMCwgJ2UnXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXVxuICAgIF0sXG4gICAgSjogW1xuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyXVxuICAgIF0sXG4gICAgSzogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCAwLCAnZSddLFxuICAgICAgWzAsIDVdLFxuICAgICAgWzUsIDVdLFxuICAgICAgWzEwLCAxMCwgJ2UnXSxcbiAgICAgIFswLCA1XSxcbiAgICAgIFs1LCA1XSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgIEw6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdXG4gICAgXSxcbiAgICBNOiBbXG4gICAgICAvLyBbMCwgMF0sXG4gICAgICAvLyBbMCwgMTBdLFxuICAgICAgLy8gWzEwLCAxMF0sXG4gICAgICAvLyBbMTAsIHhoZWlnaHQgLyAyLCAnZSddLFxuICAgICAgLy8gWzEwLCAxMF0sXG4gICAgICAvLyBbMjAsIDEwXSxcbiAgICAgIC8vIFsyMCwgMF1cbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbNSwgMTBdLFxuICAgICAgWzEwLCAoMTAgLSB4aGVpZ2h0KSAvIDJdLFxuICAgICAgWzE1LCAxMF0sXG4gICAgICBbMjAsIDEwXSxcbiAgICAgIFsyMCwgMF1cbiAgICBdLFxuICAgIE46IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsICgxMCAtIHhoZWlnaHQpIC8gMl0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCAxMF1cbiAgICBdLFxuICAgIE86IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMCwgJ2MnXVxuICAgIF0sXG4gICAgUDogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgUTogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwLCAnYyddLFxuICAgICAgWzgsIDBdLFxuICAgICAgLy8gMCAtIGNvbnRyYXN0ID8/P1xuICAgICAgWzgsIGRlc2NlbmRlciAqIDAuNzVdLFxuICAgICAgWzEwLCBkZXNjZW5kZXIgKiAwLjc1XSxcbiAgICBdLFxuICAgIFI6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodCwgJ2UnXSxcbiAgICAgIFs1LCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzEwLCAwXVxuXG4gICAgXSxcbiAgICBTOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXVxuICAgIF0sXG4gICAgVDogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTAsICdlJ10sXG4gICAgICBbNSwgMTBdLFxuICAgICAgWzUsIDBdXG4gICAgXSxcbiAgICBVOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgMTBdXG4gICAgXSxcbiAgICBWOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFs1LCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzEwLCAxMF1cbiAgICBdLFxuICAgIFc6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzUsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTAsIDEwLCAnIGUnXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzE1LCAwXSxcbiAgICAgIFsyMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzIwLCAxMF1cblxuICAgIF0sXG4gICAgWDogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyIC0gMV0sXG4gICAgICBbMTAsIDEwIC0geGhlaWdodCAvIDIgKyAxXSxcbiAgICAgIFsxMCwgMTAsICdlJ10sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMiAtIDFdLFxuICAgICAgWzAsIDEwIC0geGhlaWdodCAvIDIgKyAxXSxcbiAgICAgIFswLCAxMCwgJ2UnXVxuICAgIF0sXG4gICAgWTogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCA4XSxcbiAgICAgIFs1LCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTAsIDhdLFxuICAgICAgWzEwLCAxMCwgJ2UnXSxcbiAgICAgIFs1LCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbNSwgMF1cbiAgICBdLFxuICAgIFo6IFtcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFswLCAxMF1cbiAgICBdLFxuICAgICfLhyc6IFtcbiAgICAgIFswLCAxMiArICg4IC0geGhlaWdodCldLFxuICAgICAgWzIsIDEyXSxcbiAgICAgIFs0LCAxMiArICg4IC0geGhlaWdodCldXG4gICAgXSxcbiAgICAnwrQnOiBbXG4gICAgICBbMiwgMTJdLFxuICAgICAgWzQsIDEyICsgKDggLSB4aGVpZ2h0KV1cbiAgICBdLFxuICAgICfLmic6IFtcbiAgICAgIFswLCAxMl0sXG4gICAgICBbMCwgMTIgKyAoOCAtIHhoZWlnaHQpXSxcbiAgICAgIFs0LCAxMiArICg4IC0geGhlaWdodCldLFxuICAgICAgWzQsIDEyXSxcbiAgICAgIFswLCAxMl1cbiAgICBdLFxuICAgICcwJzogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwLCAnYyddXG4gICAgXSxcbiAgICAnMSc6IFtcbiAgICAgIFs1LCAwXSxcbiAgICAgIFs1LCAxMF0sXG4gICAgICBbMCwgMTAsICdlJ10sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdXG4gICAgXSxcbiAgICAnMic6IFtcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMCwgMTBdXG4gICAgXSxcbiAgICAnMyc6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFswLCAxMCwgJ2UnXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodF1cbiAgICBdLFxuICAgICc0JzogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodCwgJ2UnXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCAwXVxuICAgIF0sXG4gICAgJzUnOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXVxuICAgIF0sXG4gICAgJzYnOiBbXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgJzcnOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIDBdXG4gICAgXSxcbiAgICAnOCc6IFtcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodCwgJ2UnXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdXG4gICAgXSxcbiAgICAnOSc6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICAnLic6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxXVxuICAgIF0sXG4gICAgJywnOiBbXG4gICAgICBbMCwgLTJdLFxuICAgICAgWzAsIDFdXG4gICAgXSxcbiAgICAnOic6IFtcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0IC0gMSwgJ2UnXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxXVxuICAgIF0sXG4gICAgJzsnOiBbXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodCAtIDEsICdlJ10sXG4gICAgICBbMCwgLTJdLFxuICAgICAgWzAsIDFdXG4gICAgXSxcbiAgICAnISc6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxLCAnZSddLFxuICAgICAgWzAsIDNdLFxuICAgICAgWzAsIDEwXVxuICAgIF0sXG4gICAgLy8gRklYTUU6IHhoZWlnaHQgeCAzXG4gICAgJz8nOiBbXG4gICAgICBbNCwgMF0sXG4gICAgICBbNCwgMSwgJ2UnXSxcbiAgICAgIFs0LCAzXSxcbiAgICAgIFs0LCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgXSxcbiAgICAvL2h5cGhlblxuICAgICfigJAnOiBbXG4gICAgICBbMCwgNV0sXG4gICAgICBbMiwgNV1cbiAgICBdLFxuICAgIC8vZW5kYXNoXG4gICAgJ+KAkyc6IFtcbiAgICAgIFswLCA1XSxcbiAgICAgIFsxMCwgNV1cbiAgICBdLFxuICAgIC8vZW1kYXNoXG4gICAgJ+KAlCc6IFtcbiAgICAgIFswLCA1XSxcbiAgICAgIFsyMCwgNV1cbiAgICBdLFxuICAgICcrJzogW1xuICAgICAgWzAsIDVdLFxuICAgICAgWzQsIDUsICdlJ10sXG4gICAgICBbMiwgN10sXG4gICAgICBbMiwgM11cbiAgICBdLFxuICAgIC8vbWludXNcbiAgICAnLSc6IFtcbiAgICAgIFswLCA1XSxcbiAgICAgIFsyLCA1XVxuICAgIF0sXG4gICAgJz0nOiBbXG4gICAgICBbMCwgNF0sXG4gICAgICBbMiwgNCwgJ2UnXSxcbiAgICAgIFswLCA2XSxcbiAgICAgIFsyLCA2XVxuICAgIF0sXG4gICAgJy8nOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbNSwgMTBdXG4gICAgXSxcbiAgICAnQCc6IFtcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzE1ICsgTWF0aC5yb3VuZCh3ZWlnaHQgLyA0KSwgMF0sXG4gICAgICBbMTUgKyBNYXRoLnJvdW5kKHdlaWdodCAvIDQpLCAxMF0sXG4gICAgICBbMCwgMTBdLFxuICAgIF0sXG4gICAgJyYnOiBbXG4gICAgICBbMTEsIDEwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTEsIDBdLFxuICAgICAgWzExLCB4aGVpZ2h0ICsgKDEwIC0geGhlaWdodCkgLyAzLCAnZSddLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzE0LCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgJygnOiBbXG4gICAgICBbNSwgMTBdLFxuICAgICAgWzAsIDddLFxuICAgICAgWzAsIDNdLFxuICAgICAgWzUsIDBdXG4gICAgXSxcbiAgICAnKSc6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbNSwgN10sXG4gICAgICBbNSwgM10sXG4gICAgICBbMCwgMF1cbiAgICBdLFxuICAgICdbJzogW1xuICAgICAgWzUsIDEwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbNSwgMF1cbiAgICBdLFxuICAgICddJzogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFs1LCAxMF0sXG4gICAgICBbNSwgMF0sXG4gICAgICBbMCwgMF1cbiAgICBdLFxuICAgICd7JzogW1xuICAgICAgWzUsIDEwXSxcbiAgICAgIFsyLCA5XSxcbiAgICAgIFsyLCA2LjVdLFxuICAgICAgWzAsIDVdLFxuICAgICAgWzIsIDMuNV0sXG4gICAgICBbMiwgMV0sXG4gICAgICBbNSwgMF1cbiAgICBdLFxuICAgICd9JzogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFszLCA5XSxcbiAgICAgIFszLCA2LjVdLFxuICAgICAgWzUsIDVdLFxuICAgICAgWzMsIDMuNV0sXG4gICAgICBbMywgMV0sXG4gICAgICBbMCwgMF1cbiAgICBdLFxuICAgICc8JzogW1xuICAgICAgWzEwLCB4aGVpZ2h0ICsgMV0sXG4gICAgICBbMCwgeGhlaWdodCAvIDIgKyAxXSxcbiAgICAgIFsxMCwgMV1cbiAgICBdLFxuICAgICc+JzogW1xuICAgICAgWzAsIHhoZWlnaHQgKyAxXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDIgKyAxXSxcbiAgICAgIFswLCAxXVxuICAgIF1cbiAgfTtcbiAgaWYgKG9wdGlvbnMudHlwZSA9PSAnc3Ryb2tlJykge1xuICAgIHRoaXMuZ2x5cGhzWycubm90ZGVmJ10gPSBbXG4gICAgICBbMCwgNV0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDUsICdjJ11cbiAgICBdO1xuICAgIHRoaXMuZ2x5cGhzLm8gPSBbXG4gICAgICBbMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodCAvIDIsICdjJ11cbiAgICBdO1xuICAgIHRoaXMuZ2x5cGhzLncgPSBbXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzUsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTUsIDBdLFxuICAgICAgWzIwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMjAsIHhoZWlnaHQsICdlJ10sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdO1xuICAgIHRoaXMuZ2x5cGhzLkIgPSBbXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbOCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodCwgJ2UnXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMiwgJ2MnXSxcbiAgICBdO1xuICAgIHRoaXMuZ2x5cGhzLkQgPSBbXG4gICAgICBbMCwgNV0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzcsIDEwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIDEwIC0geGhlaWdodF0sXG4gICAgICBbNywgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgNSwgJ2MnXSxcbiAgICBdO1xuICAgIC8vIEhBQ0s6IGNoYW5nZSBnbHlwaCBmb3IgY29uZGVuc2VkIGZvbnRzXG4gICAgaWYgKG9wdGlvbnMucHJvcG9ydGlvbiA8IDEpIHtcbiAgICAgIHRoaXMuZ2x5cGhzLk4gPSBbXG4gICAgICAgIFswLCAwXSxcbiAgICAgICAgWzAsIDEwXSxcbiAgICAgICAgWzIsIDEwXSxcbiAgICAgICAgWzgsIDBdLFxuICAgICAgICBbMTAsIDBdLFxuICAgICAgICBbMTAsIDEwXVxuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5nbHlwaHMuTiA9IFtcbiAgICAgICAgWzAsIDBdLFxuICAgICAgICBbMCwgMTAuNV0sXG4gICAgICAgIFsxMCwgLTAuNV0sXG4gICAgICAgIFsxMCwgMTBdXG4gICAgICBdO1xuICAgIH1cbiAgICB0aGlzLmdseXBocy5PID0gW1xuICAgICAgWzAsIDVdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCA1LCAnYyddXG4gICAgXTtcbiAgICB0aGlzLmdseXBocy5RID0gW1xuICAgICAgWzAsIDVdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCA1LCAnZSddLFxuICAgICAgWzgsIDBdLFxuICAgICAgLy8gMCAtIGNvbnRyYXN0ID8/P1xuICAgICAgWzgsIGRlc2NlbmRlciAqIDAuNzVdLFxuICAgICAgWzEwLCBkZXNjZW5kZXIgKiAwLjc1XSxcbiAgICBdO1xuICAgIHRoaXMuZ2x5cGhzLlIgPSBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHQsICdlJ10sXG4gICAgICBbMiwgeGhlaWdodF0sXG4gICAgICBbNSwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsxMCwgMF1cbiAgICBdO1xuICAgIHRoaXMuZ2x5cGhzLlcgPSBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFs1LCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzE1LCAwXSxcbiAgICAgIFsyMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzIwLCAxMCwgJ2UnXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzEwLCAxMF1cbiAgICBdO1xuICAgIHRoaXMuZ2x5cGhzWycwJ10gPSBbXG4gICAgICBbMCwgNV0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDUsICdjJ11cbiAgICBdO1xuICAgIHRoaXMuZ2x5cGhzWyc4J10gPSBbXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHQsICdlJ10sXG4gICAgICBbMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodCAvIDIsICdjJ11cbiAgICBdO1xuICB9XG5cblxuICBpZiAod2VpZ2h0IDwgMTUgfHwgb3B0aW9ucy5wcm9wb3J0aW9uIDw9IDEpXG4gICAgdGhpcy5nbHlwaHMuRy5wdXNoKFs4IC0gTWF0aC5yb3VuZCh3ZWlnaHQgLyAxMCAqIG9wdGlvbnMucHJvcG9ydGlvbiksIHhoZWlnaHRdKTtcblxuICB0aGlzLm5hbWVNYXAgPSB7XG4gICAgJ8SxJzogJ2RvdGxlc3NpJyxcbiAgICAnwrQnOiAnYWN1dGUnLFxuICAgICfLhyc6ICdjYXJvbicsXG4gICAgJ8uaJzogJ3JpbmcnLFxuICAgICcwJzogJ3plcm8nLFxuICAgICcxJzogJ29uZScsXG4gICAgJzInOiAndHdvJyxcbiAgICAnMyc6ICd0aHJlZScsXG4gICAgJzQnOiAnZm91cicsXG4gICAgJzUnOiAnZml2ZScsXG4gICAgJzYnOiAnc2l4JyxcbiAgICAnNyc6ICdzZXZlbicsXG4gICAgJzgnOiAnZWlnaHQnLFxuICAgICc5JzogJ25pbmUnLFxuICAgICfigJAnOiAnaHlwaGVuJyxcbiAgICAn4oCTJzogJ2VuZGFzaCcsXG4gICAgJ+KAlCc6ICdlbWRhc2gnLFxuICAgICctJzogJ21pbnVzJyxcbiAgICAnKyc6ICdwbHVzJyxcbiAgICAnLic6ICdwZXJpb2QnLFxuICAgICcsJzogJ2NvbW1hJyxcbiAgICAnOic6ICdjb2xvbicsXG4gICAgJzsnOiAnc2VtaWNvbG9uJyxcbiAgICAnISc6ICdleGNsYW0nLFxuICAgICc/JzogJ3F1ZXN0aW9uJyxcbiAgICAnLyc6ICdzbGFzaCcsXG4gICAgJ0AnOiAnYXQnLFxuICAgICcmJzogJ2FtcGVyc2FuZCcsXG4gICAgJygnOiAncGFyZW5sZWZ0JyxcbiAgICAnKSc6ICdwYXJlbnJpZ2h0JyxcbiAgICAnWyc6ICdicmFja2V0bGVmdCcsXG4gICAgJ10nOiAnYnJhY2tldHJpZ2h0JyxcbiAgICAneyc6ICdicmFjZWxlZnQnLFxuICAgICd9JzogJ2JyYWNlcmlnaHQnLFxuICAgICc8JzogJ2xlc3MnLFxuICAgICc9JzogJ2VxdWFsJyxcbiAgICAnPic6ICdncmVhdGVyJ1xuICB9O1xufVxuQWxwaGFiZXQucHJvdG90eXBlLm1heEhlaWdodCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbWF4ID0gMDtcbiAgZm9yICh2YXIga2V5IGluIHRoaXMuZ2x5cGhzKSB7XG4gICAgaWYgKHRoaXMuZ2x5cGhzW2tleV0pIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5nbHlwaHNba2V5XS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5nbHlwaHNba2V5XVtpXVsxXSA+IG1heClcbiAgICAgICAgICBtYXggPSB0aGlzLmdseXBoc1trZXldW2ldWzFdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtYXg7XG59O1xuXG5BbHBoYWJldC5wcm90b3R5cGUubWF4V2lkdGggPSBmdW5jdGlvbigpIHtcbiAgdmFyIG1heCA9IDA7XG4gIGZvciAodmFyIGtleSBpbiB0aGlzLmdseXBocykge1xuICAgIGlmICh0aGlzLmdseXBoc1trZXldKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ2x5cGhzW2tleV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZ2x5cGhzW2tleV1baV1bMF0gPiBtYXgpXG4gICAgICAgICAgbWF4ID0gdGhpcy5nbHlwaHNba2V5XVtpXVswXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWF4O1xufTtcblxuQWxwaGFiZXQucHJvdG90eXBlLmF2YWlsYWJsZUdseXBocyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5nbHlwaHMpO1xufTtcblxuZXhwb3J0cy5BbHBoYWJldCA9IEFscGhhYmV0O1xuIiwiZnVuY3Rpb24gR2VuZXJhdG9yKG9wdGlvbnMpIHtcbiAgcGFwZXIuaW5zdGFsbCh3aW5kb3cpO1xuICAvLyBGSVhNRTpcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUNhbnZhcycpO1xuICBwYXBlci5zZXR1cChjYW52YXMpO1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB0aGlzLnR5cGUgPSBvcHRpb25zLnR5cGUgfHwgJ2JydXNoJztcbiAgdGhpcy5wcm9wb3J0aW9uID0gb3B0aW9ucy5wcm9wb3J0aW9uIHx8IChvcHRpb25zLmhlaWdodCAvIG9wdGlvbnMud2lkdGgpIHx8IDE7XG5cbiAgdGhpcy53ZWlnaHQgPSBvcHRpb25zLndlaWdodCB8fCAodGhpcy50eXBlID09ICdicnVzaCcgPyAyMCA6IDUpO1xuICB0aGlzLmNvbnRyYXN0ID0gdGhpcy50eXBlID09ICdicnVzaCcgPyAob3B0aW9ucy5jb250cmFzdCB8fCA1KSA6IHRoaXMud2VpZ2h0O1xuICB0aGlzLmRlc2NlbmRlciA9IG9wdGlvbnMuZGVzY2VuZGVyIHx8IC0zO1xuICB0aGlzLnhzaGlmdCA9IG9wdGlvbnMueHNoaWZ0IHx8IDA7XG4gIHRoaXMueXNoaWZ0ID0gb3B0aW9ucy55c2hpZnQgfHwgMDtcbiAgdGhpcy5pdGFsaWMgPSBvcHRpb25zLml0YWxpYyB8fCAwO1xuICB0aGlzLnNlZ21lbnRSZWR1Y3Rpb24gPSBvcHRpb25zLnNlZ21lbnRSZWR1Y3Rpb247XG4gIHRoaXMuc21vb3RoID0gb3B0aW9ucy5zbW9vdGg7XG5cbiAgdGhpcy5zaXplID0gMTA7XG5cbiAgdmFyIGFscGhhYmV0T3B0aW9ucyA9IHtcbiAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgd2VpZ2h0OiB0aGlzLndlaWdodCxcbiAgICBjb250cmFzdDogdGhpcy5jb250cmFzdCxcbiAgICBkZXNjZW5kZXI6IHRoaXMuZGVzY2VuZGVyLFxuICAgIHByb3BvcnRpb246IHRoaXMucHJvcG9ydGlvbixcbiAgICB4aGVpZ2h0OiBvcHRpb25zLnhoZWlnaHQgfHwgN1xuICB9O1xuXG4gIHRoaXMuYWxwaGFiZXQgPSBvcHRpb25zLmFscGhhYmV0IHx8IG5ldyBnbHlwaGVyLkFscGhhYmV0KGFscGhhYmV0T3B0aW9ucyk7XG4gIHRoaXMuZ2x5cGhzID0gW107XG4gIHRoaXMub3BlbnR5cGUgPSB1bmRlZmluZWQ7XG59XG5cbkdlbmVyYXRvci5wcm90b3R5cGUuZ2VuZXJhdGUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5nbHlwaHMgPSB7fTtcbiAgdmFyIGF2YWlsYWJsZUdseXBocyA9IHRoaXMuYWxwaGFiZXQuYXZhaWxhYmxlR2x5cGhzKCksXG4gICAgZ2x5cGg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhdmFpbGFibGVHbHlwaHMubGVuZ3RoOyBpKyspIHtcbiAgICB0aGlzLmJlZm9yZUdlbmVyYXRlR2x5cGgoYXZhaWxhYmxlR2x5cGhzW2ldKTtcbiAgICBpZiAodGhpcy50eXBlID09ICdzdHJva2UnKVxuICAgICAgZ2x5cGggPSB0aGlzLmdlbmVyYXRlR2x5cGgyKGF2YWlsYWJsZUdseXBoc1tpXSwgdGhpcy5hbHBoYWJldC5nbHlwaHNbYXZhaWxhYmxlR2x5cGhzW2ldXSk7XG4gICAgZWxzZVxuICAgICAgZ2x5cGggPSB0aGlzLmdlbmVyYXRlR2x5cGgoYXZhaWxhYmxlR2x5cGhzW2ldLCB0aGlzLmFscGhhYmV0LmdseXBoc1thdmFpbGFibGVHbHlwaHNbaV1dKTtcbiAgICB0aGlzLmFmdGVyR2VuZXJhdGVHbHlwaChnbHlwaCk7XG4gICAgdGhpcy5nbHlwaHNbZ2x5cGgubmFtZV0gPSBnbHlwaDtcbiAgfVxuXG4gIC8vIHZhciBhY2NlbnQgPSAnYWN1dGUnO1xuICAvLyBhdmFpbGFibGVHbHlwaHMgPSAnYWVpb3V5QUVJT1VZJztcbiAgLy8gZm9yIChpID0gMDsgaSA8IGF2YWlsYWJsZUdseXBocy5sZW5ndGg7IGkrKykge1xuICAvLyAgIHRoaXMuYmVmb3JlR2VuZXJhdGVHbHlwaChhdmFpbGFibGVHbHlwaHNbaV0pO1xuICAvLyAgIGlmICh0aGlzLnR5cGUgPT0gJ3N0cm9rZScpXG4gIC8vICAgICBnbHlwaCA9IHRoaXMuZ2VuZXJhdGVHbHlwaFdpdGhBY2NlbnQyKGF2YWlsYWJsZUdseXBoc1tpXSwgYWNjZW50KTtcbiAgLy8gICBlbHNlXG4gIC8vICAgICBnbHlwaCA9IHRoaXMuZ2VuZXJhdGVHbHlwaFdpdGhBY2NlbnQoYXZhaWxhYmxlR2x5cGhzW2ldLCBhY2NlbnQpO1xuICAvLyAgIHRoaXMuYWZ0ZXJHZW5lcmF0ZUdseXBoKGdseXBoKTtcbiAgLy8gICB0aGlzLmdseXBoc1tnbHlwaC5uYW1lXSA9IGdseXBoO1xuICAvLyB9XG4gIC8vICAgLy8gRklYTUU6IGRjYXJvbiB0Y2Fyb25cbiAgLy8gICBhY2NlbnQgPSAnY2Fyb24nO1xuICAvLyAgIGF2YWlsYWJsZUdseXBocyA9ICdjZW5yc3pDREVOUlNUWic7XG4gIC8vICAgZm9yIChpID0gMDsgaSA8IGF2YWlsYWJsZUdseXBocy5sZW5ndGg7IGkrKykge1xuICAvLyAgICAgdGhpcy5iZWZvcmVHZW5lcmF0ZUdseXBoKGF2YWlsYWJsZUdseXBoc1tpXSk7XG4gIC8vICAgICBpZiAodGhpcy50eXBlID09ICdzdHJva2UnKVxuICAvLyAgICAgICBnbHlwaCA9IHRoaXMuZ2VuZXJhdGVHbHlwaFdpdGhBY2NlbnQyKGF2YWlsYWJsZUdseXBoc1tpXSwgYWNjZW50KTtcbiAgLy8gICAgIGVsc2VcbiAgLy8gICAgICAgZ2x5cGggPSB0aGlzLmdlbmVyYXRlR2x5cGhXaXRoQWNjZW50KGF2YWlsYWJsZUdseXBoc1tpXSwgYWNjZW50KTtcbiAgLy8gICAgIHRoaXMuYWZ0ZXJHZW5lcmF0ZUdseXBoKGdseXBoKTtcbiAgLy8gICAgIHRoaXMuZ2x5cGhzW2dseXBoLm5hbWVdID0gZ2x5cGg7XG4gIC8vICAgfVxuICAvL1xuICAvLyAgIGFjY2VudCA9ICdyaW5nJztcbiAgLy8gICBhdmFpbGFibGVHbHlwaHMgPSAndVUnO1xuICAvLyAgIGZvciAoaSA9IDA7IGkgPCBhdmFpbGFibGVHbHlwaHMubGVuZ3RoOyBpKyspIHtcbiAgLy8gICAgIHRoaXMuYmVmb3JlR2VuZXJhdGVHbHlwaChhdmFpbGFibGVHbHlwaHNbaV0pO1xuICAvLyAgICAgaWYgKHRoaXMudHlwZSA9PSAnc3Ryb2tlJylcbiAgLy8gICAgICAgZ2x5cGggPSB0aGlzLmdlbmVyYXRlR2x5cGhXaXRoQWNjZW50MihhdmFpbGFibGVHbHlwaHNbaV0sIGFjY2VudCk7XG4gIC8vICAgICBlbHNlXG4gIC8vICAgICAgIGdseXBoID0gdGhpcy5nZW5lcmF0ZUdseXBoV2l0aEFjY2VudChhdmFpbGFibGVHbHlwaHNbaV0sIGFjY2VudCk7XG4gIC8vICAgICB0aGlzLmFmdGVyR2VuZXJhdGVHbHlwaChnbHlwaCk7XG4gIC8vICAgICB0aGlzLmdseXBoc1tnbHlwaC5uYW1lXSA9IGdseXBoO1xuICAvLyAgIH1cbn07XG5cbkdlbmVyYXRvci5wcm90b3R5cGUuZ2V0R2x5cGggPSBmdW5jdGlvbihuYW1lKSB7XG4gIGlmICh0aGlzLmdseXBoc1tuYW1lXSkge1xuICAgIHJldHVybiB0aGlzLmdseXBoc1tuYW1lXTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnZ2x5cGggJyArIG5hbWUgKyAnIG5vdCBkZWZpbmVkJyk7XG4gICAgcmV0dXJuIHRoaXMuZ2x5cGhzWycubm90ZGVmJ107XG4gIH1cbn07XG5cbkdlbmVyYXRvci5wcm90b3R5cGUuYWRqdXN0UG9pbnQgPSBmdW5jdGlvbihwb2ludCkge1xuICByZXR1cm4gbmV3IFBvaW50KHBvaW50KVxuICAgIC5tdWx0aXBseShbdGhpcy5zaXplIC8gdGhpcy5wcm9wb3J0aW9uLCB0aGlzLnNpemUgLSAodGhpcy5jb250cmFzdCAqIDIgLyB0aGlzLnNpemUpXSlcbiAgICAuYWRkKHRoaXMud2VpZ2h0LCB0aGlzLmNvbnRyYXN0KVxuICAgIC5tdWx0aXBseSgxLCAtMSlcbiAgICAuYWRkKHRoaXMueHNoaWZ0LCB0aGlzLnlzaGlmdCk7XG59O1xuXG5HZW5lcmF0b3IucHJvdG90eXBlLmRyYXdEb3QgPSBmdW5jdGlvbihwb2ludCwgYm94KSB7XG4gIHZhciBwMSA9IHRoaXMuYWRqdXN0UG9pbnQocG9pbnQpO1xuICByZXR1cm4gbmV3IFBhdGguUmVjdGFuZ2xlKHAxLnN1YnRyYWN0KGJveCksIHAxLmFkZChib3gpKTtcbn07XG5cbkdlbmVyYXRvci5wcm90b3R5cGUuYmVmb3JlR2VuZXJhdGVHbHlwaCA9IGZ1bmN0aW9uKG5hbWUpIHtcblxufTtcblxuR2VuZXJhdG9yLnByb3RvdHlwZS5hZnRlckdlbmVyYXRlR2x5cGggPSBmdW5jdGlvbihnbHlwaCkge1xuXG59O1xuXG5HZW5lcmF0b3IucHJvdG90eXBlLmdlbmVyYXRlR2x5cGggPSBmdW5jdGlvbihuYW1lLCBwb2ludHMpIHtcbiAgcG9pbnRzID0gcG9pbnRzIHx8IHRoaXMuYWxwaGFiZXQuZ2x5cGhzW25hbWVdO1xuICB2YXIgZ2x5cGggPSBuZXcgZ2x5cGhlci5HbHlwaChuYW1lLCB0aGlzLndlaWdodCwgdGhpcy5jb250cmFzdCwgdGhpcy5wcm9wb3J0aW9uKTtcblxuICB2YXIgc2VnbWVudHMgPSBbXTtcbiAgdmFyIGJveCA9IG5ldyBQb2ludChnbHlwaC53ZWlnaHQsIGdseXBoLmNvbnRyYXN0KTtcbiAgdmFyIHN0YXJ0UG9pbnQ7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAvL1dJUFxuICAgIGlmIChwb2ludHNbaV1bMl0gPT0gJ2RvdCcpIHtcbiAgICAgIHNlZ21lbnRzLnB1c2godGhpcy5kcmF3RG90KHBvaW50c1tpXSwgYm94KSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoaSA+PSBwb2ludHMubGVuZ3RoIC0gMSlcbiAgICAgIGJyZWFrO1xuXG4gICAgdmFyIHBhdGggPSBuZXcgUGF0aCgpO1xuXG4gICAgdmFyIHAxID0gdGhpcy5hZGp1c3RQb2ludChwb2ludHNbaV0pO1xuICAgIHZhciBwMiA9IHRoaXMuYWRqdXN0UG9pbnQocG9pbnRzW2kgKyAxXSk7XG5cbiAgICBpZiAocG9pbnRzW2kgKyAxXVsyXSA9PSAnYycpIHtcbiAgICAgIHAyID0gc3RhcnRQb2ludDtcbiAgICB9IGVsc2Uge1xuICAgICAgcDIgPSB0aGlzLmFkanVzdFBvaW50KHBvaW50c1tpICsgMV0pO1xuICAgICAgc3RhcnRQb2ludCA9IHN0YXJ0UG9pbnQgfHwgcDE7XG4gICAgfVxuXG4gICAgdmFyIHZlY3RvciA9IHAyLnN1YnRyYWN0KHAxKTtcbiAgICB2YXIgeCA9IHNpZ24odmVjdG9yLngpO1xuICAgIHZhciB5ID0gc2lnbih2ZWN0b3IueSk7XG5cbiAgICAvLyBXSVBcbiAgICBpZiAodGhpcy5zZWdtZW50UmVkdWN0aW9uKSB7XG4gICAgICB2ZWN0b3IubGVuZ3RoIC09IHRoaXMuc2VnbWVudFJlZHVjdGlvbiAqIDU7XG4gICAgICBwMiA9IHAxLmFkZCh2ZWN0b3IpO1xuICAgICAgdmFyIHZlY3RvcjIgPSBwMS5zdWJ0cmFjdChwMik7XG4gICAgICB2ZWN0b3IyLmxlbmd0aCAtPSB0aGlzLnNlZ21lbnRSZWR1Y3Rpb24gKiA1O1xuICAgICAgcDEgPSBwMi5hZGQodmVjdG9yMik7XG4gICAgfVxuXG4gICAgdmFyIGI7XG4gICAgaWYgKGkgIT09IDAgJiYgcG9pbnRzW2kgLSAxXVsyXSAhPT0gJ2UnIHx8IHZlY3Rvci5hbmdsZSAlIDkwID09PSAwKSB7XG4gICAgICBiID0gcDEuYWRkKGJveC5tdWx0aXBseShbeCAqIC0xLCB5XSkpO1xuICAgICAgYiA9IGIuYWRkKGIueSAqIC0xICogdGhpcy5pdGFsaWMsIDApO1xuICAgICAgcGF0aC5hZGQoYik7XG4gICAgfVxuXG4gICAgYiA9IHAxLmFkZChib3gubXVsdGlwbHkoW3ggKiAtMSwgeSAqIC0xXSkpO1xuICAgIGIgPSBiLmFkZChiLnkgKiAtMSAqIHRoaXMuaXRhbGljLCAwKTtcbiAgICAvLyBpZiAoaSA9PT0gMCB8fCBwb2ludHNbaSAtIDFdWzJdID09PSAnZScgJiYgdmVjdG9yLmFuZ2xlICUgOTAgIT09IDApXG4gICAgLy8gICBiID0gYi5hZGQoLTIwLCAwKTtcbiAgICBwYXRoLmFkZChiKTtcblxuICAgIGIgPSBwMS5hZGQoYm94Lm11bHRpcGx5KFt4LCB5ICogLTFdKSk7XG4gICAgYiA9IGIuYWRkKGIueSAqIC0xICogdGhpcy5pdGFsaWMsIDApO1xuICAgIHBhdGguYWRkKGIpO1xuXG4gICAgaWYgKGkgKyAxICE9PSBwb2ludHMubGVuZ3RoIC0gMSAmJiBwb2ludHNbaSArIDFdWzJdICE9PSAnZScgfHwgdmVjdG9yLmFuZ2xlICUgOTAgPT09IDApIHtcbiAgICAgIGIgPSBwMi5hZGQoYm94Lm11bHRpcGx5KFt4LCB5ICogLTFdKSk7XG4gICAgICBiID0gYi5hZGQoYi55ICogLTEgKiB0aGlzLml0YWxpYywgMCk7XG4gICAgICBwYXRoLmFkZChiKTtcbiAgICB9XG5cbiAgICBiID0gcDIuYWRkKGJveC5tdWx0aXBseShbeCwgeV0pKTtcbiAgICBiID0gYi5hZGQoYi55ICogLTEgKiB0aGlzLml0YWxpYywgMCk7XG4gICAgLy8gaWYgKGkgKyAxICE9PSBwb2ludHMubGVuZ3RoIC0gMSAmJiBwb2ludHNbaSArIDFdWzJdICE9PSAnZScgfHwgdmVjdG9yLmFuZ2xlICUgOTAgPT09IDApIHtcbiAgICAvLyB9ZWxzZXtcbiAgICAvLyAgIHZhciB2ID0gcDEuc3VidHJhY3QocDIpO1xuICAgIC8vICAgYiA9IGIuYWRkKCh0aGlzLmNvbnRyYXN0KjIpL01hdGgudGFuKHYuYW5nbGVJblJhZGlhbnMpICogLTEsIDApO1xuICAgIC8vIH1cbiAgICBwYXRoLmFkZChiKTtcblxuICAgIGIgPSBwMi5hZGQoYm94Lm11bHRpcGx5KFt4ICogLTEsIHldKSk7XG4gICAgYiA9IGIuYWRkKGIueSAqIC0xICogdGhpcy5pdGFsaWMsIDApO1xuICAgIHBhdGguYWRkKGIpO1xuXG5cbiAgICAvLyBGSVhNRTogcm91bmQgZWRnZXNcbiAgICAvLyB2YXIgYyA9IG5ldyBQYXRoLkNpcmNsZSh7XG4gICAgLy8gICBjZW50ZXI6IFswLCAwXSxcbiAgICAvLyAgIHJhZGl1czogdGhpcy53ZWlnaHRcbiAgICAvLyB9KTtcbiAgICAvL1xuICAgIC8vIGMucm90YXRlKHZlY3Rvci5hbmdsZSk7XG4gICAgLy8gYy5wb3NpdGlvbiA9IHAxO1xuICAgIC8vIHBhdGguYWRkKGMuc2VnbWVudHNbM10pO1xuICAgIC8vIHBhdGguYWRkKGMuc2VnbWVudHNbMF0pO1xuICAgIC8vIHBhdGguYWRkKGMuc2VnbWVudHNbMV0pO1xuICAgIC8vXG4gICAgLy8gYy5wb3NpdGlvbiA9IHAyO1xuICAgIC8vIHBhdGguYWRkKGMuc2VnbWVudHNbMV0pO1xuICAgIC8vIHBhdGguYWRkKGMuc2VnbWVudHNbMl0pO1xuICAgIC8vIHBhdGguYWRkKGMuc2VnbWVudHNbM10pO1xuXG4gICAgcGF0aC5yZWR1Y2UoKTtcbiAgICBwYXRoLmNsb3NlZCA9IHRydWU7XG5cbiAgICBzZWdtZW50cy5wdXNoKHBhdGgpO1xuXG4gICAgaWYgKHAxLnggKyBnbHlwaC53ZWlnaHQgPiBnbHlwaC53aWR0aClcbiAgICAgIGdseXBoLndpZHRoID0gcDEueCArIGdseXBoLndlaWdodDtcblxuICAgIC8vIEZJWE1FOiBhZGQgbGFzdCBwb2ludFxuICAgIGlmIChwMi54ICsgZ2x5cGgud2VpZ2h0ID4gZ2x5cGgud2lkdGgpXG4gICAgICBnbHlwaC53aWR0aCA9IHAyLnggKyBnbHlwaC53ZWlnaHQ7XG5cbiAgICBpZiAocDEueSArIGdseXBoLmNvbnRyYXN0IDwgZ2x5cGguaGVpZ2h0KVxuICAgICAgZ2x5cGguaGVpZ2h0ID0gcDEueSArIGdseXBoLmNvbnRyYXN0O1xuXG4gICAgLy8gRklYTUU6IGFkZCBsYXN0IHBvaW50XG4gICAgaWYgKHAyLnkgKyBnbHlwaC5jb250cmFzdCA8IGdseXBoLmhlaWdodClcbiAgICAgIGdseXBoLmhlaWdodCA9IHAyLnkgKyBnbHlwaC5jb250cmFzdDtcblxuICAgIGlmIChwb2ludHNbaSArIDFdWzJdID09ICdlJyB8fCBwb2ludHNbaSArIDFdWzJdID09ICdjJykge1xuICAgICAgaSsrO1xuICAgICAgc3RhcnRQb2ludCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbiAgZ2x5cGgucGF0aCA9IGdseXBoLm1lcmdlU2VnbWVudHMoc2VnbWVudHMpO1xuICBnbHlwaC5wYXRoLnJlZHVjZSgpO1xuXG4gIGlmICh0aGlzLnNtb290aClcbiAgICBnbHlwaC5wYXRoLnNtb290aCh7XG4gICAgICB0eXBlOiAnY29udGludW91cydcbiAgICB9KTtcblxuICByZXR1cm4gZ2x5cGg7XG59O1xuXG4vL1dJUFxuR2VuZXJhdG9yLnByb3RvdHlwZS5nZW5lcmF0ZUdseXBoMiA9IGZ1bmN0aW9uKG5hbWUsIHBvaW50cykge1xuICBwb2ludHMgPSBwb2ludHMgfHwgdGhpcy5hbHBoYWJldC5nbHlwaHNbbmFtZV07XG4gIHZhciBnbHlwaCA9IG5ldyBnbHlwaGVyLkdseXBoKG5hbWUsIHRoaXMud2VpZ2h0LCB0aGlzLmNvbnRyYXN0LCB0aGlzLnByb3BvcnRpb24pO1xuXG4gIHZhciBuZXh0QW5nbGUsXG4gICAgY29ybmVyLFxuICAgIHNlZ21lbnRzID0gW1xuICAgICAgW11cbiAgICBdLFxuICAgIGNvcm5lclBvaW50MyxcbiAgICBzdGFydFBvaW50O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy9XSVBcbiAgICBpZiAocG9pbnRzW2ldWzJdID09ICdkb3QnKSB7XG4gICAgICBzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLSAxXS5wdXNoKHRoaXMuYWRqdXN0UG9pbnQocG9pbnRzW2ldKS5hZGQodGhpcy53ZWlnaHQsIHRoaXMud2VpZ2h0ICogLTEpKTtcbiAgICAgIHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdLnB1c2godGhpcy5hZGp1c3RQb2ludChwb2ludHNbaV0pLmFkZCh0aGlzLndlaWdodCAqIC0xLCB0aGlzLndlaWdodCAqIC0xKSk7XG4gICAgICBzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLSAxXS5wdXNoKHRoaXMuYWRqdXN0UG9pbnQocG9pbnRzW2ldKS5hZGQodGhpcy53ZWlnaHQgKiAtMSwgdGhpcy53ZWlnaHQpKTtcbiAgICAgIHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdLnB1c2godGhpcy5hZGp1c3RQb2ludChwb2ludHNbaV0pLmFkZCh0aGlzLndlaWdodCkpO1xuICAgICAgc2VnbWVudHMucHVzaChbXSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoaSA+PSBwb2ludHMubGVuZ3RoIC0gMSlcbiAgICAgIGJyZWFrO1xuXG4gICAgdmFyIHBvaW50MSA9IHRoaXMuYWRqdXN0UG9pbnQocG9pbnRzW2ldKTtcbiAgICB2YXIgcG9pbnQyID0gdGhpcy5hZGp1c3RQb2ludChwb2ludHNbaSArIDFdKTtcblxuICAgIGlmIChwb2ludHNbaSArIDFdWzJdID09ICdjJykge1xuICAgICAgcG9pbnQyID0gdGhpcy5hZGp1c3RQb2ludChwb2ludHNbc3RhcnRQb2ludCAtIDFdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcG9pbnQyID0gdGhpcy5hZGp1c3RQb2ludChwb2ludHNbaSArIDFdKTtcbiAgICAgIHN0YXJ0UG9pbnQgPSBzdGFydFBvaW50IHx8IGk7XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzQW5nbGUgPSBuZXh0QW5nbGU7XG5cbiAgICB2YXIgdmVjdG9yMSA9IHBvaW50Mi5zdWJ0cmFjdChwb2ludDEpO1xuICAgIGlmIChwb2ludHNbaSArIDJdKSB7XG4gICAgICB2YXIgdmVjdG9yMiA9IHRoaXMuYWRqdXN0UG9pbnQocG9pbnRzW2kgKyAyXSkuc3VidHJhY3QocG9pbnQyKTtcbiAgICAgIG5leHRBbmdsZSA9IHZlY3RvcjEucm90YXRlKDE4MCkuZ2V0RGlyZWN0ZWRBbmdsZSh2ZWN0b3IyKTtcbiAgICB9XG4gICAgdmFyIHAxLCBwMiwgcDMsIHA0O1xuICAgIGlmIChwb2ludHNbaSAtIDFdICYmIHBvaW50c1tpIC0gMV1bMl0gPT0gJ2UnIHx8IGkgPT09IDApIHtcbiAgICAgIHAxID0gcG9pbnQxLmFkZCh0aGlzLndlaWdodCAqIC0xLCB0aGlzLndlaWdodCkucm90YXRlKHZlY3RvcjEuYW5nbGUgKyA5MCwgcG9pbnQxKTtcbiAgICAgIHAyID0gcG9pbnQxLmFkZCh0aGlzLndlaWdodCwgdGhpcy53ZWlnaHQpLnJvdGF0ZSh2ZWN0b3IxLmFuZ2xlICsgOTAsIHBvaW50MSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHAxID0gcG9pbnQxLmFkZCh0aGlzLndlaWdodCwgMCkucm90YXRlKHZlY3RvcjEuYW5nbGUgLSA5MCwgcG9pbnQxKTtcbiAgICAgIHAyID0gcG9pbnQxLmFkZCh0aGlzLndlaWdodCwgMCkucm90YXRlKHZlY3RvcjEuYW5nbGUgKyA5MCwgcG9pbnQxKTtcbiAgICB9XG5cbiAgICBpZiAocG9pbnRzW2kgKyAxXVsyXSA9PSAnZScgfHwgaSA9PT0gcG9pbnRzLmxlbmd0aCAtIDIpIHtcbiAgICAgIHAzID0gcG9pbnQyLmFkZCh0aGlzLndlaWdodCAqIC0xLCB0aGlzLndlaWdodCkucm90YXRlKHZlY3RvcjEuYW5nbGUgLSA5MCwgcG9pbnQyKTtcbiAgICAgIHA0ID0gcG9pbnQyLmFkZCh0aGlzLndlaWdodCwgdGhpcy53ZWlnaHQpLnJvdGF0ZSh2ZWN0b3IxLmFuZ2xlIC0gOTAsIHBvaW50Mik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHAzID0gcG9pbnQyLmFkZCh0aGlzLndlaWdodCwgMCkucm90YXRlKHZlY3RvcjEuYW5nbGUgKyA5MCwgcG9pbnQyKTtcbiAgICAgIHA0ID0gcG9pbnQyLmFkZCh0aGlzLndlaWdodCwgMCkucm90YXRlKHZlY3RvcjEuYW5nbGUgLSA5MCwgcG9pbnQyKTtcbiAgICB9XG5cbiAgICB2YXIgY29ybmVyUG9pbnQsXG4gICAgICBjb3JuZXJQb2ludDI7XG5cbiAgICBpZiAocG9pbnRzW2kgLSAxXSAmJiBwb2ludHNbaV1bMl0gIT0gJ2UnICYmIHBvaW50c1tpIC0gMV1bMl0gIT0gJ2UnICYmIHByZXZpb3VzQW5nbGUpIHtcbiAgICAgIHZhciBwcmV2aW91c1ZlY3RvciA9IHRoaXMuYWRqdXN0UG9pbnQocG9pbnRzW2kgLSAxXSkuc3VidHJhY3QocG9pbnQxKTtcbiAgICAgIGlmIChwcmV2aW91c0FuZ2xlIDwgMCkge1xuICAgICAgICBjb3JuZXJQb2ludCA9IHAxO1xuICAgICAgICAvLyBzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLSAxXS5wdXNoKG1ha2VDb3JuZXIoY29ybmVyUG9pbnQyLCBjb3JuZXJQb2ludCwgcHJldmlvdXNWZWN0b3IsIHZlY3RvcjEpKTtcbiAgICAgICAgc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV0uc3BsaWNlKDAsIDAsIG1ha2VDb3JuZXIoY29ybmVyUG9pbnQzLCBwMiwgcHJldmlvdXNWZWN0b3IsIHZlY3RvcjEpKTtcbiAgICAgICAgLy9mb3IgYmx1bnQgZWRnZXNcbiAgICAgICAgc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV0ucHVzaChjb3JuZXJQb2ludDIpO1xuICAgICAgICBzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLSAxXS5wdXNoKGNvcm5lclBvaW50KTtcblxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb3JuZXJQb2ludCA9IHAyO1xuICAgICAgICAvLyBzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLSAxXS5zcGxpY2UoMCwgMCwgbWFrZUNvcm5lcihjb3JuZXJQb2ludDIsIGNvcm5lclBvaW50LCBwcmV2aW91c1ZlY3RvciwgdmVjdG9yMSkpO1xuICAgICAgICBzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLSAxXS5wdXNoKG1ha2VDb3JuZXIoY29ybmVyUG9pbnQzLCBwMSwgcHJldmlvdXNWZWN0b3IsIHZlY3RvcjEpKTtcbiAgICAgICAgLy9mb3IgYmx1bnQgZWRnZXNcbiAgICAgICAgc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV0uc3BsaWNlKDAsIDAsIGNvcm5lclBvaW50Mik7XG4gICAgICAgIHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdLnNwbGljZSgwLCAwLCBjb3JuZXJQb2ludCk7XG5cblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXh0QW5nbGUpIHtcblxuICAgICAgaWYgKG5leHRBbmdsZSA8IDApIHtcbiAgICAgICAgY29ybmVyUG9pbnQyID0gcDQ7XG4gICAgICAgIGNvcm5lclBvaW50MyA9IHAzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29ybmVyUG9pbnQyID0gcDM7XG4gICAgICAgIGNvcm5lclBvaW50MyA9IHA0O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb2ludHNbaSAtIDFdICYmIHBvaW50c1tpIC0gMV1bMl0gPT0gJ2UnIHx8ICFwcmV2aW91c0FuZ2xlKSB7XG4gICAgICBzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLSAxXS5wdXNoKHAxKTtcbiAgICAgIHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdLnNwbGljZSgwLCAwLCBwMik7XG4gICAgfVxuXG4gICAgaWYgKHBvaW50c1tpICsgMV1bMl0gPT0gJ2UnIHx8IGkgPT0gcG9pbnRzLmxlbmd0aCAtIDIpIHtcbiAgICAgIHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdLnNwbGljZSgwLCAwLCBwMyk7XG4gICAgICBzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLSAxXS5wdXNoKHA0KTtcbiAgICAgIHNlZ21lbnRzLnB1c2goW10pO1xuICAgIH1cblxuICAgIGlmIChwb2ludDIueCArIGdseXBoLndlaWdodCA+IGdseXBoLndpZHRoKVxuICAgICAgZ2x5cGgud2lkdGggPSBwb2ludDIueCArIGdseXBoLndlaWdodDtcblxuICAgIC8vIEZJWE1FOiBhZGQgbGFzdCBwb2ludFxuICAgIGlmIChwb2ludDIueCArIGdseXBoLndlaWdodCA+IGdseXBoLndpZHRoKVxuICAgICAgZ2x5cGgud2lkdGggPSBwb2ludDIueCArIGdseXBoLndlaWdodDtcblxuICAgIGlmIChwb2ludDIueSArIGdseXBoLmNvbnRyYXN0IDwgZ2x5cGguaGVpZ2h0KVxuICAgICAgZ2x5cGguaGVpZ2h0ID0gcG9pbnQyLnkgKyBnbHlwaC5jb250cmFzdDtcblxuICAgIC8vIEZJWE1FOiBhZGQgbGFzdCBwb2ludFxuICAgIGlmIChwb2ludDIueSArIGdseXBoLmNvbnRyYXN0IDwgZ2x5cGguaGVpZ2h0KVxuICAgICAgZ2x5cGguaGVpZ2h0ID0gcG9pbnQyLnkgKyBnbHlwaC5jb250cmFzdDtcblxuICB9XG4gIGdseXBoLnBhdGggPSBuZXcgUGF0aChzZWdtZW50c1swXSk7XG4gIGdseXBoLnBhdGguY2xvc2VQYXRoKCk7XG4gIGZvciAoaSA9IDE7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzZWdtZW50c1tpXS5sZW5ndGgpIHtcbiAgICAgIHZhciBzZWdtZW50ID0gbmV3IFBhdGgoc2VnbWVudHNbaV0pO1xuICAgICAgc2VnbWVudC5jbG9zZVBhdGgoKTtcbiAgICAgIGdseXBoLnBhdGggPSBnbHlwaC5wYXRoLnVuaXRlKHNlZ21lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnbHlwaDtcbn07XG5cbmZ1bmN0aW9uIG1ha2VDb3JuZXIocDEsIHAyLCB2ZWN0b3IyLCB2ZWN0b3IzKSB7XG4gIHZhciB2ZWN0b3IxID0gcDIuc3VidHJhY3QocDEpO1xuXG4gIHZhciByYWQxID0gdmVjdG9yMi5yb3RhdGUoMTgwKS5nZXRBbmdsZUluUmFkaWFucyh2ZWN0b3IxKTtcbiAgdmFyIHJhZDIgPSB2ZWN0b3IzLmdldEFuZ2xlSW5SYWRpYW5zKHZlY3RvcjEpO1xuXG4gIHZhciB4ID0gKHZlY3RvcjEubGVuZ3RoICogTWF0aC5zaW4ocmFkMSkpIC8gTWF0aC5zaW4ocmFkMiArIHJhZDEpO1xuXG4gIC8vIGlmICh4ID4gMzApXG4gIC8vICAgeCA9IDMwO1xuXG4gIC8vIGlmICh4ID4gNTApXG4gIC8vICAgeCA9IDMwO1xuXG4gIHZhciByZXN1bHQgPSBuZXcgUG9pbnQoeCwgMCk7XG4gIHJlc3VsdCA9IHJlc3VsdC5yb3RhdGUodmVjdG9yMi5yb3RhdGUoMTgwKS5hbmdsZSk7XG4gIHJlc3VsdCA9IHJlc3VsdC5hZGQocDEpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5HZW5lcmF0b3IucHJvdG90eXBlLmdlbmVyYXRlR2x5cGhXaXRoQWNjZW50ID0gZnVuY3Rpb24obmFtZSwgYWNjZW50KSB7XG4gIHZhciBnbHlwaDtcblxuICBpZiAoYWNjZW50Lmxlbmd0aCA+IDEpXG4gICAgYWNjZW50ID0gZGVjb2RlSHRtbCgnJicgKyBhY2NlbnQgKyAnOycpO1xuXG4gIGlmIChuYW1lID09ICdpJylcbiAgICBnbHlwaCA9IHRoaXMuZ2VuZXJhdGVHbHlwaCgnxLEnKTtcbiAgZWxzZVxuICAgIGdseXBoID0gdGhpcy5nZW5lcmF0ZUdseXBoKG5hbWUpO1xuXG4gIHZhciBhY2NlbnRHbHlwaCA9IHRoaXMuZ2VuZXJhdGVHbHlwaChhY2NlbnQpO1xuICAvLyBGSVhNRTogZml4IHRoaXMgZm9yIGl0YWxpY3NcbiAgYWNjZW50R2x5cGgucGF0aC5wb3NpdGlvbi54ICs9IChnbHlwaC53aWR0aCAtIGFjY2VudEdseXBoLndpZHRoKSAvIDI7XG5cbiAgaWYgKG5hbWVbMF0gPT09IG5hbWVbMF0udG9Mb3dlckNhc2UoKSkge1xuICAgIGFjY2VudEdseXBoLnBhdGgucG9zaXRpb24ueSArPSA5MCArIGdseXBoLmhlaWdodDtcbiAgfVxuXG4gIGdseXBoLnBhdGggPSBnbHlwaC5wYXRoLnVuaXRlKGFjY2VudEdseXBoLnBhdGgpO1xuICBnbHlwaC5uYW1lID0gZGVjb2RlSHRtbCgnJicgKyBuYW1lICsgdGhpcy5hbHBoYWJldC5uYW1lTWFwW2FjY2VudF0gKyAnOycpO1xuICByZXR1cm4gZ2x5cGg7XG59O1xuXG5HZW5lcmF0b3IucHJvdG90eXBlLmdlbmVyYXRlR2x5cGhXaXRoQWNjZW50MiA9IGZ1bmN0aW9uKG5hbWUsIGFjY2VudCkge1xuICB2YXIgZ2x5cGg7XG5cbiAgaWYgKGFjY2VudC5sZW5ndGggPiAxKVxuICAgIGFjY2VudCA9IGRlY29kZUh0bWwoJyYnICsgYWNjZW50ICsgJzsnKTtcblxuICBpZiAobmFtZSA9PSAnaScpXG4gICAgZ2x5cGggPSB0aGlzLmdlbmVyYXRlR2x5cGgyKCfEsScpO1xuICBlbHNlXG4gICAgZ2x5cGggPSB0aGlzLmdlbmVyYXRlR2x5cGgyKG5hbWUpO1xuXG4gIHZhciBhY2NlbnRHbHlwaCA9IHRoaXMuZ2VuZXJhdGVHbHlwaDIoYWNjZW50KTtcbiAgLy8gRklYTUU6IGZpeCB0aGlzIGZvciBpdGFsaWNzXG4gIGFjY2VudEdseXBoLnBhdGgucG9zaXRpb24ueCArPSAoZ2x5cGgud2lkdGggLSBhY2NlbnRHbHlwaC53aWR0aCkgLyAyO1xuXG4gIGlmIChuYW1lWzBdID09PSBuYW1lWzBdLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBhY2NlbnRHbHlwaC5wYXRoLnBvc2l0aW9uLnkgKz0gOTAgKyBnbHlwaC5oZWlnaHQ7XG4gIH1cblxuICBnbHlwaC5wYXRoID0gZ2x5cGgucGF0aC51bml0ZShhY2NlbnRHbHlwaC5wYXRoKTtcbiAgZ2x5cGgubmFtZSA9IGRlY29kZUh0bWwoJyYnICsgbmFtZSArIHRoaXMuYWxwaGFiZXQubmFtZU1hcFthY2NlbnRdICsgJzsnKTtcbiAgcmV0dXJuIGdseXBoO1xufTtcblxuZnVuY3Rpb24gZGVjb2RlSHRtbChodG1sKSB7XG4gIHZhciB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIHR4dC5pbm5lckhUTUwgPSBodG1sO1xuICByZXR1cm4gdHh0LnZhbHVlO1xufVxuXG5mdW5jdGlvbiBkcmF3T3BlbnR5cGVQYXRoKHBhdGgpIHtcbiAgdmFyIHJlc3VsdFBhdGggPSBuZXcgb3BlbnR5cGUuUGF0aCgpLFxuICAgIHBhdGhzID0gcGF0aC5jaGlsZHJlbiB8fCBbcGF0aF07XG5cbiAgZm9yICh2YXIgaiA9IDA7IGogPCBwYXRocy5sZW5ndGg7IGorKykge1xuICAgIC8vIEZJWE1FOiB5ICogLTEsICogMTBcbiAgICByZXN1bHRQYXRoLm1vdmVUbyhNYXRoLnJvdW5kKHBhdGhzW2pdLmN1cnZlc1swXS5wb2ludDEueCAqIDEwKSwgTWF0aC5yb3VuZChwYXRoc1tqXS5jdXJ2ZXNbMF0ucG9pbnQxLnkgKiAtMTApKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgcGF0aHNbal0uY3VydmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY3VydmUgPSBwYXRoc1tqXS5jdXJ2ZXNbaV07XG5cbiAgICAgIHZhciB4MSA9IE1hdGgucm91bmQoY3VydmUucG9pbnQxLnggKiAxMCk7XG4gICAgICB2YXIgeTEgPSBNYXRoLnJvdW5kKGN1cnZlLnBvaW50MS55ICogLTEwKTtcbiAgICAgIHZhciB4MiA9IE1hdGgucm91bmQoY3VydmUucG9pbnQyLnggKiAxMCk7XG4gICAgICB2YXIgeTIgPSBNYXRoLnJvdW5kKGN1cnZlLnBvaW50Mi55ICogLTEwKTtcbiAgICAgIHZhciBoeDEgPSBjdXJ2ZS5oYW5kbGUxLnggKiAxMDtcbiAgICAgIHZhciBoeTEgPSBjdXJ2ZS5oYW5kbGUxLnkgKiAtMTA7XG4gICAgICB2YXIgaHgyID0gY3VydmUuaGFuZGxlMi54ICogMTA7XG4gICAgICB2YXIgaHkyID0gY3VydmUuaGFuZGxlMi55ICogLTEwO1xuXG4gICAgICBpZiAoaHgxICsgaHkxID09PSAwICYmIGh4MiArIGh5MiA9PT0gMClcbiAgICAgICAgcmVzdWx0UGF0aC5saW5lVG8oeDIsIHkyKTtcbiAgICAgIGVsc2VcbiAgICAgICAgcmVzdWx0UGF0aC5jdXJ2ZVRvKHgxICsgaHgxLCB5MSArIGh5MSwgeDIgKyBoeDIsIHkyICsgaHkyLCB4MiwgeTIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRQYXRoO1xufVxuXG5HZW5lcmF0b3IucHJvdG90eXBlLmV4cG9ydE9wZW50eXBlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICB2YXIgb3BlbnR5cGVHbHlwaHMgPSBbXSxcbiAgICBnbHlwaCxcbiAgICBwYXRoO1xuXG4gIC8vIEhBQ0s6IC5ub3RkZWYgaGF2ZSB0byBiZSBmaXJzdCBkZWZpbmVkXG4gIGlmICh0aGlzLmdseXBoc1snLm5vdGRlZiddKSB7XG4gICAgZ2x5cGggPSB0aGlzLmdseXBoc1snLm5vdGRlZiddO1xuICAgIHBhdGggPSBkcmF3T3BlbnR5cGVQYXRoKGdseXBoLnBhdGgpO1xuXG4gICAgaWYgKHBhdGguY29tbWFuZHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBvcGVudHlwZUdseXBocy5wdXNoKG5ldyBvcGVudHlwZS5HbHlwaCh7XG4gICAgICAgIG5hbWU6ICcubm90ZGVmJyxcbiAgICAgICAgdW5pY29kZTogMCxcbiAgICAgICAgYWR2YW5jZVdpZHRoOiBnbHlwaC53aWR0aCAqIDEwICsgMTAwLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBub3RkZWZQYXRoID0gbmV3IG9wZW50eXBlLlBhdGgoKTtcbiAgICBub3RkZWZQYXRoLm1vdmVUbygxMDAsIDApO1xuICAgIG5vdGRlZlBhdGgubGluZVRvKDEwMCwgNzAwKTtcbiAgICBub3RkZWZQYXRoLmxpbmVUbyg2MDAsIDcwMCk7XG4gICAgbm90ZGVmUGF0aC5saW5lVG8oNjAwLCAwKTtcbiAgICBub3RkZWZQYXRoLm1vdmVUbygyMDAsIDEwMCk7XG4gICAgbm90ZGVmUGF0aC5saW5lVG8oNTAwLCAxMDApO1xuICAgIG5vdGRlZlBhdGgubGluZVRvKDUwMCwgNjAwKTtcbiAgICBub3RkZWZQYXRoLmxpbmVUbygyMDAsIDYwMCk7XG4gICAgb3BlbnR5cGVHbHlwaHMucHVzaChuZXcgb3BlbnR5cGUuR2x5cGgoe1xuICAgICAgbmFtZTogJy5ub3RkZWYnLFxuICAgICAgdW5pY29kZTogMCxcbiAgICAgIGFkdmFuY2VXaWR0aDogNjUwLFxuICAgICAgcGF0aDogbm90ZGVmUGF0aFxuICAgIH0pKTtcbiAgfVxuXG4gIGZvciAodmFyIHggaW4gdGhpcy5nbHlwaHMpIHtcbiAgICAvLyBIQUNLOiAubm90ZGVmIGFscmVhZHkgZGVmaW5lZFxuICAgIGlmICh4ID09ICcubm90ZGVmJylcbiAgICAgIGNvbnRpbnVlO1xuXG4gICAgZ2x5cGggPSB0aGlzLmdseXBoc1t4XTtcbiAgICBwYXRoID0gZHJhd09wZW50eXBlUGF0aChnbHlwaC5wYXRoKTtcblxuICAgIGlmIChwYXRoLmNvbW1hbmRzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgb3BlbnR5cGVHbHlwaHMucHVzaChuZXcgb3BlbnR5cGUuR2x5cGgoe1xuICAgICAgICBuYW1lOiB0aGlzLmFscGhhYmV0Lm5hbWVNYXBbZ2x5cGgubmFtZV0gfHwgZ2x5cGgubmFtZSxcbiAgICAgICAgdW5pY29kZTogZ2x5cGgubmFtZS5jaGFyQ29kZUF0KCksXG4gICAgICAgIGFkdmFuY2VXaWR0aDogZ2x5cGgud2lkdGggKiAxMCArIDEwMCxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSkpO1xuICAgIH1cbiAgfVxuICBvcGVudHlwZUdseXBocy5wdXNoKG5ldyBvcGVudHlwZS5HbHlwaCh7XG4gICAgbmFtZTogJ3NwYWNlJyxcbiAgICB1bmljb2RlOiAzMixcbiAgICBhZHZhbmNlV2lkdGg6IHRoaXMuc2l6ZSAvIHRoaXMucHJvcG9ydGlvbiAqIDEwMCxcbiAgICBwYXRoOiBuZXcgb3BlbnR5cGUuUGF0aCgpXG4gIH0pKTtcblxuICB0aGlzLmZvbnQgPSBuZXcgb3BlbnR5cGUuRm9udCh7XG4gICAgZmFtaWx5TmFtZTogb3B0aW9ucy5mYW1pbHlOYW1lIHx8ICdHbHlwaGVyU3RhbmRhcnQnLFxuICAgIHN0eWxlTmFtZTogb3B0aW9ucy5zdHlsZU5hbWUgfHwgJ01lZGl1bScsXG4gICAgdW5pdHNQZXJFbTogMTAwMCxcbiAgICBhc2NlbmRlcjogMTAwMCxcbiAgICBkZXNjZW5kZXI6IHRoaXMuZGVzY2VuZGVyICogMTUwLFxuICAgIGdseXBoczogb3BlbnR5cGVHbHlwaHNcbiAgfSk7XG5cbiAgdmFyIGJ1ZmZlciA9IHRoaXMuZm9udC50b0FycmF5QnVmZmVyKCk7XG4gIHZhciBmb250MiA9IG9wZW50eXBlLnBhcnNlKGJ1ZmZlcik7XG5cbiAgLy9kZWJ1Z2dpbmdcbiAgaWYgKG9wdGlvbnMuZGVidWcpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZvbnQyLmdseXBocy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGcgPSBmb250Mi5nbHlwaHMuZ2V0KGkpO1xuICAgICAgdmFyIGN0eCA9IGNyZWF0ZUdseXBoQ2FudmFzKGcsIDE1MCk7XG4gICAgICB4ID0gMjA7XG4gICAgICB2YXIgeSA9IDEyMDtcbiAgICAgIHZhciBmb250U2l6ZSA9IDcyO1xuICAgICAgZy5kcmF3KGN0eCwgeCwgeSwgZm9udFNpemUpO1xuICAgICAgLy8gZy5kcmF3UG9pbnRzKGN0eCwgeCwgeSwgZm9udFNpemUpO1xuICAgICAgZy5kcmF3TWV0cmljcyhjdHgsIHgsIHksIGZvbnRTaXplKTtcbiAgICB9XG4gIH1cblxuICAvLyBGSVhNRTogZGVwZW5kcyBvbiBkaXYgd2l0aCBpZCBnbHlwaHNcbiAgZnVuY3Rpb24gY3JlYXRlR2x5cGhDYW52YXMoZ2x5cGgsIHNpemUpIHtcbiAgICB2YXIgY2FudmFzSWQsIGh0bWwsIGdseXBoc0Rpdiwgd3JhcCwgY2FudmFzLCBjdHg7XG4gICAgY2FudmFzSWQgPSAnZ2x5cGhfMicgKyBnbHlwaC51bmljb2RlO1xuICAgIGh0bWwgPSAnPGNhbnZhcyBpZD1cIicgKyBjYW52YXNJZCArICdcIiB3aWR0aD1cIicgKyBzaXplICsgJ1wiIGhlaWdodD1cIicgKyBzaXplICsgJ1wiPjwvY2FudmFzPic7XG4gICAgZ2x5cGhzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dseXBocycpO1xuICAgIHdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgd3JhcC5pbm5lckhUTUwgPSBodG1sO1xuICAgIGdseXBoc0Rpdi5hcHBlbmRDaGlsZCh3cmFwKTtcbiAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXNJZCk7XG4gICAgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgcmV0dXJuIGN0eDtcbiAgfVxufTtcblxuR2VuZXJhdG9yLnByb3RvdHlwZS5kb3dubG9hZE9URiA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5mb250KSB7XG4gICAgaWYgKHdpbmRvdy5yZXF1ZXN0RmlsZVN5c3RlbSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEZpbGVTeXN0ZW0pXG4gICAgICB0aGlzLmZvbnQuZG93bmxvYWQoKTtcbiAgICBlbHNlXG4gICAgICBjb25zb2xlLmxvZygnVXNlIEdvb2dsZSBDaHJvbWUnKTtcbiAgfSBlbHNlXG4gICAgY29uc29sZS5sb2coJ3VzZSBleHBvcnRPcGVudHlwZSBmaXJzdCcpO1xufTtcblxuZnVuY3Rpb24gc2lnbih4KSB7XG4gIC8vIDAgPT0gMVxuICByZXR1cm4geCA+PSAwID8gMSA6IC0xO1xufVxuXG5leHBvcnRzLkdlbmVyYXRvciA9IEdlbmVyYXRvcjtcbiIsImZ1bmN0aW9uIEdseXBoKG5hbWUsIHdlaWdodCwgY29udHJhc3QsIHByb3BvcnRpb24pIHtcbiAgdGhpcy5uYW1lID0gbmFtZTtcbiAgdGhpcy53ZWlnaHQgPSB3ZWlnaHQ7XG4gIHRoaXMuY29udHJhc3QgPSBjb250cmFzdDtcbiAgdGhpcy5wcm9wb3J0aW9uID0gcHJvcG9ydGlvbjtcblxuICB0aGlzLnBhdGggPSB1bmRlZmluZWQ7XG4gIHRoaXMud2lkdGggPSAwO1xuICB0aGlzLmhlaWdodCA9IDA7XG59XG5cbkdseXBoLnByb3RvdHlwZS5tZXJnZVNlZ21lbnRzID0gZnVuY3Rpb24oc2VnbWVudHMpIHtcblxuICB2YXIgcmVzdWx0ID0gc2VnbWVudHNbMF0uY2xvbmUoKTtcbiAgZm9yIChpID0gMTsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0ID0gcmVzdWx0LnVuaXRlKHNlZ21lbnRzW2ldKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vL0RFQlVHXG5HbHlwaC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKHgsIHksIGRlYnVnKSB7XG4gIC8vZGVidWdnaW5nXG4gIGlmIChkZWJ1Zykge1xuICAgIG5ldyBQYXRoLkNpcmNsZSh7XG4gICAgICBjZW50ZXI6IFt4LCB5XSxcbiAgICAgIHJhZGl1czogMyxcbiAgICAgIHN0cm9rZUNvbG9yOiAnYmx1ZSdcbiAgICB9KTtcbiAgICBuZXcgUGF0aC5DaXJjbGUoe1xuICAgICAgY2VudGVyOiBbeCArIHRoaXMud2lkdGgsIHldLFxuICAgICAgcmFkaXVzOiAzLFxuICAgICAgc3Ryb2tlQ29sb3I6ICdibHVlJ1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHBhdGggPSB0aGlzLnBhdGguY2xvbmUoKTtcbiAgcGF0aC5wb3NpdGlvbiA9IFt4ICsgcGF0aC5wb3NpdGlvbi54LCB5ICsgcGF0aC5wb3NpdGlvbi55XTtcbiAgcGF0aC5maWxsQ29sb3IgPSAnYmxhY2snO1xuICBwYXRoLnNlbGVjdGVkID0gdHJ1ZTtcbn07XG5cbmV4cG9ydHMuR2x5cGggPSBHbHlwaDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldC5qcycpO1xudmFyIGdlbmVyYXRvciA9IHJlcXVpcmUoJy4vZ2VuZXJhdG9yLmpzJyk7XG52YXIgZ2x5cGggPSByZXF1aXJlKCcuL2dseXBoLmpzJyk7XG5cbmV4cG9ydHMuR2x5cGggPSBnbHlwaC5HbHlwaDtcbmV4cG9ydHMuQWxwaGFiZXQgPSBhbHBoYWJldC5BbHBoYWJldDtcbmV4cG9ydHMuR2VuZXJhdG9yID0gZ2VuZXJhdG9yLkdlbmVyYXRvcjtcbiJdfQ==
