(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.glypher = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Alphabet(options) {
  xheight = options.xheight || 7;
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
}

Generator.prototype.generate = function() {
  // FIXME: add canvas element
  plumin.setup(document.getElementById('canvas'));

  this.font = new plumin.Font({
    familyName: 'Demo',
    ascender: 1000,
    descender: -200
  });

  var availableGlyphs = this.alphabet.availableGlyphs(),
    glyphs = [];

  for (var i = 0; i < availableGlyphs.length; i++) {
    var path = this.generateGlyph(availableGlyphs[i], this.alphabet.glyphs[availableGlyphs[i]]);
    var glyph = new plumin.Glyph({
      name: this.alphabet.nameMap[availableGlyphs[i]] || availableGlyphs[i],
      unicode: availableGlyphs[i],
      advanceWidth: path.width + 100
    });
    glyph.addContour(path.path);
    glyphs.push(glyph);
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
  return new plumin.Point(point)
    .multiply([this.size / this.proportion, this.size - (this.contrast * 2 / this.size)])
    .add(this.weight, this.contrast)
    .add(this.xshift, this.yshift);
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
  glyph.path = new plumin.Path(segments[0]);
  glyph.path.closePath();
  for (i = 1; i < segments.length; i++) {
    if (segments[i].length) {
      var segment = new plumin.Path(segments[i]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYWxwaGFiZXQuanMiLCJzcmMvZ2VuZXJhdG9yLmpzIiwic3JjL2dseXBoLmpzIiwic3JjL2dseXBoZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbG1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImZ1bmN0aW9uIEFscGhhYmV0KG9wdGlvbnMpIHtcbiAgeGhlaWdodCA9IG9wdGlvbnMueGhlaWdodCB8fCA3O1xuICBkZXNjZW5kZXIgPSBvcHRpb25zLmRlc2NlbmRlciB8fCAtMztcbiAgYWVoZWlnaHQgPSBvcHRpb25zLmFlaGVpZ2h0IHx8IHhoZWlnaHQgLyAyO1xuICAvLyBGSVhNRVxuICB3ZWlnaHQgPSBvcHRpb25zLndlaWdodCB8fCAyMDtcblxuICB0aGlzLmdseXBocyA9IHtcbiAgICAnLm5vdGRlZic6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMCwgJ2MnXVxuICAgIF0sXG4gICAgYTogW1xuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgYWVoZWlnaHRdLFxuICAgICAgWzEwLCBhZWhlaWdodF1cbiAgICBdLFxuICAgIGI6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgYzogW1xuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIGQ6IFtcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIGU6IFtcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCBhZWhlaWdodF0sXG4gICAgICBbMCwgYWVoZWlnaHRdXG4gICAgXSxcbiAgICBmOiBbXG4gICAgICBbMywgMF0sXG4gICAgICBbMywgMTBdLFxuICAgICAgWzEwLCAxMCwgJ2UnXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIGc6IFtcbiAgICAgIFswLCBkZXNjZW5kZXJdLFxuICAgICAgWzEwLCBkZXNjZW5kZXJdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgIGg6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMCwgJ2UnXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIDBdXG4gICAgXSxcbiAgICBpOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodCwgJ2UnXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgeGhlaWdodCArIDJdXG4gICAgXSxcbiAgICAvL2RvdHRsZXNzIGkgaXMgbmVlZGVkIGZvciBhY2NlbnRlZCBpc1xuICAgICfEsSc6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgajogW1xuICAgICAgWy0yLCBkZXNjZW5kZXJdLFxuICAgICAgWzEsIGRlc2NlbmRlcl0sXG4gICAgICBbMSwgeGhlaWdodCwgJ2UnXSxcbiAgICAgIFsxLCAxMF0sXG4gICAgICBbMSwgeGhlaWdodCArIDJdXG4gICAgXSxcbiAgICBrOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIDAsICdlJ10sXG4gICAgICBbMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzUsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsxMCwgeGhlaWdodCwgJ2UnXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbNSwgeGhlaWdodCAvIDJdLFxuICAgICAgWzEwLCAwXVxuICAgIF0sXG4gICAgbDogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwXVxuICAgIF0sXG4gICAgbTogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMCwgJ2UnXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMjAsIHhoZWlnaHRdLFxuICAgICAgWzIwLCAwXVxuICAgIF0sXG4gICAgbjogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgIG86IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDAsICdjJ11cbiAgICBdLFxuICAgIHA6IFtcbiAgICAgIFswLCBkZXNjZW5kZXJdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF1cbiAgICBdLFxuICAgIHE6IFtcbiAgICAgIFsxMCwgZGVzY2VuZGVyXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdXG4gICAgXSxcbiAgICByOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICBzOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgdDogW1xuICAgICAgLy8gRklYTUU6IHhoZWlnaHQgKyAyID8/XG4gICAgICBbMywgeGhlaWdodCArIDJdLFxuICAgICAgWzMsIDBdLFxuICAgICAgWzEwLCAwLCAnZSddLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgdTogW1xuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIHY6IFtcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbNSwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsxMCwgeGhlaWdodF1cblxuICAgIF0sXG4gICAgdzogW1xuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFs1LCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzEwLCB4aGVpZ2h0LCAnIGUnXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzE1LCAwXSxcbiAgICAgIFsyMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzIwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgeDogW1xuICAgICAgLy8gWzAsIDBdLFxuICAgICAgLy8gWzEwLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgLy8gWzAsIHhoZWlnaHRdLFxuICAgICAgLy8gWzEwLCAwXVxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHQgLyA2XSxcbiAgICAgIFsxMCwgeGhlaWdodCAtIHhoZWlnaHQgLyA2XSxcbiAgICAgIFsxMCwgeGhlaWdodCwgJ2UnXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHQgLyA2XSxcbiAgICAgIFswLCB4aGVpZ2h0IC0geGhlaWdodCAvIDZdLFxuICAgICAgWzAsIHhoZWlnaHQsICdlJ11cbiAgICBdLFxuICAgIHk6IFtcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHQsICdlJ10sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCBkZXNjZW5kZXJdLFxuICAgICAgWzAsIGRlc2NlbmRlcl1cbiAgICBdLFxuICAgIHo6IFtcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICBBOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbNSwgMTBdLFxuICAgICAgWzEwLCAwLCAnZSddLFxuICAgICAgWzMsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFs3LCB4aGVpZ2h0IC8gMl1cbiAgICBdLFxuICAgIEI6IFtcbiAgICAgIC8vIFswLCB4aGVpZ2h0XSxcbiAgICAgIC8vIFswLCAxMF0sXG4gICAgICAvLyAvLyBGSVhNRTogc2hvdWxkIGRlcGVuZCBvbiBmb250IHdlaWdodFxuICAgICAgLy8gWzksIDEwXSxcbiAgICAgIC8vIFs5LCB4aGVpZ2h0XSxcbiAgICAgIC8vIFswLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgLy8gWzAsIDBdLFxuICAgICAgLy8gWzAsIHhoZWlnaHRdLFxuICAgICAgLy8gWzEwLCB4aGVpZ2h0XSxcbiAgICAgIC8vIFsxMCwgMF0sXG4gICAgICAvLyBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbOCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodCwgJ2UnXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdXG4gICAgXSxcbiAgICBDOiBbXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdXG4gICAgXSxcbiAgICBEOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzcsIDEwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIDEwIC0geGhlaWdodF0sXG4gICAgICBbNywgMF0sXG4gICAgICBbMCwgMF1cbiAgICBdLFxuICAgIEU6IFtcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMCwgJ2UnXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIEY6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwLCAnZSddLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgRzogW1xuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIEg6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMCwgJ2UnXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIDEwLCAnZSddLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgSTogW1xuICAgICAgWzUsIDEwXSxcbiAgICAgIFs1LCAwLCAnZSddLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwLCAnZSddLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdXG4gICAgXSxcbiAgICBKOiBbXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodCAvIDJdXG4gICAgXSxcbiAgICBLOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIDAsICdlJ10sXG4gICAgICBbMCwgNV0sXG4gICAgICBbNSwgNV0sXG4gICAgICBbMTAsIDEwLCAnZSddLFxuICAgICAgWzAsIDVdLFxuICAgICAgWzUsIDVdLFxuICAgICAgWzEwLCAwXVxuICAgIF0sXG4gICAgTDogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgIE06IFtcbiAgICAgIC8vIFswLCAwXSxcbiAgICAgIC8vIFswLCAxMF0sXG4gICAgICAvLyBbMTAsIDEwXSxcbiAgICAgIC8vIFsxMCwgeGhlaWdodCAvIDIsICdlJ10sXG4gICAgICAvLyBbMTAsIDEwXSxcbiAgICAgIC8vIFsyMCwgMTBdLFxuICAgICAgLy8gWzIwLCAwXVxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFs1LCAxMF0sXG4gICAgICBbMTAsICgxMCAtIHhoZWlnaHQpIC8gMl0sXG4gICAgICBbMTUsIDEwXSxcbiAgICAgIFsyMCwgMTBdLFxuICAgICAgWzIwLCAwXVxuICAgIF0sXG4gICAgTjogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgKDEwIC0geGhlaWdodCkgLyAyXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIDEwXVxuICAgIF0sXG4gICAgTzogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwLCAnYyddXG4gICAgXSxcbiAgICBQOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICBROiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDAsICdjJ10sXG4gICAgICBbOCwgMF0sXG4gICAgICAvLyAwIC0gY29udHJhc3QgPz8/XG4gICAgICBbOCwgZGVzY2VuZGVyICogMC43NV0sXG4gICAgICBbMTAsIGRlc2NlbmRlciAqIDAuNzVdLFxuICAgIF0sXG4gICAgUjogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzUsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTAsIDBdXG5cbiAgICBdLFxuICAgIFM6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdXG4gICAgXSxcbiAgICBUOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMCwgJ2UnXSxcbiAgICAgIFs1LCAxMF0sXG4gICAgICBbNSwgMF1cbiAgICBdLFxuICAgIFU6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCAxMF1cbiAgICBdLFxuICAgIFY6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzUsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTAsIDEwXVxuICAgIF0sXG4gICAgVzogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbNSwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsxMCwgMTAsICcgZSddLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTUsIDBdLFxuICAgICAgWzIwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMjAsIDEwXVxuXG4gICAgXSxcbiAgICBYOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodCAvIDIgLSAxXSxcbiAgICAgIFsxMCwgMTAgLSB4aGVpZ2h0IC8gMiArIDFdLFxuICAgICAgWzEwLCAxMCwgJ2UnXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyIC0gMV0sXG4gICAgICBbMCwgMTAgLSB4aGVpZ2h0IC8gMiArIDFdLFxuICAgICAgWzAsIDEwLCAnZSddXG4gICAgXSxcbiAgICBZOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIDhdLFxuICAgICAgWzUsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsxMCwgOF0sXG4gICAgICBbMTAsIDEwLCAnZSddLFxuICAgICAgWzUsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFs1LCAwXVxuICAgIF0sXG4gICAgWjogW1xuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzAsIDEwXVxuICAgIF0sXG4gICAgJ8uHJzogW1xuICAgICAgWzAsIDEyICsgKDggLSB4aGVpZ2h0KV0sXG4gICAgICBbMiwgMTJdLFxuICAgICAgWzQsIDEyICsgKDggLSB4aGVpZ2h0KV1cbiAgICBdLFxuICAgICfCtCc6IFtcbiAgICAgIFsyLCAxMl0sXG4gICAgICBbNCwgMTIgKyAoOCAtIHhoZWlnaHQpXVxuICAgIF0sXG4gICAgJ8uaJzogW1xuICAgICAgWzAsIDEyXSxcbiAgICAgIFswLCAxMiArICg4IC0geGhlaWdodCldLFxuICAgICAgWzQsIDEyICsgKDggLSB4aGVpZ2h0KV0sXG4gICAgICBbNCwgMTJdLFxuICAgICAgWzAsIDEyXVxuICAgIF0sXG4gICAgJzAnOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDAsICdjJ11cbiAgICBdLFxuICAgICcxJzogW1xuICAgICAgWzUsIDBdLFxuICAgICAgWzUsIDEwXSxcbiAgICAgIFswLCAxMCwgJ2UnXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgICcyJzogW1xuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFswLCAxMF1cbiAgICBdLFxuICAgICczJzogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzAsIDEwLCAnZSddLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgJzQnOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIDBdXG4gICAgXSxcbiAgICAnNSc6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdXG4gICAgXSxcbiAgICAnNic6IFtcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICAnNyc6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgICc4JzogW1xuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF1cbiAgICBdLFxuICAgICc5JzogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdLFxuICAgICcuJzogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDFdXG4gICAgXSxcbiAgICAnLCc6IFtcbiAgICAgIFswLCAtMl0sXG4gICAgICBbMCwgMV1cbiAgICBdLFxuICAgICc6JzogW1xuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHQgLSAxLCAnZSddLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDFdXG4gICAgXSxcbiAgICAnOyc6IFtcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0IC0gMSwgJ2UnXSxcbiAgICAgIFswLCAtMl0sXG4gICAgICBbMCwgMV1cbiAgICBdLFxuICAgICchJzogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEsICdlJ10sXG4gICAgICBbMCwgM10sXG4gICAgICBbMCwgMTBdXG4gICAgXSxcbiAgICAvLyBGSVhNRTogeGhlaWdodCB4IDNcbiAgICAnPyc6IFtcbiAgICAgIFs0LCAwXSxcbiAgICAgIFs0LCAxLCAnZSddLFxuICAgICAgWzQsIDNdLFxuICAgICAgWzQsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzAsIDEwXSxcbiAgICBdLFxuICAgIC8vaHlwaGVuXG4gICAgJ+KAkCc6IFtcbiAgICAgIFswLCA1XSxcbiAgICAgIFsyLCA1XVxuICAgIF0sXG4gICAgLy9lbmRhc2hcbiAgICAn4oCTJzogW1xuICAgICAgWzAsIDVdLFxuICAgICAgWzEwLCA1XVxuICAgIF0sXG4gICAgLy9lbWRhc2hcbiAgICAn4oCUJzogW1xuICAgICAgWzAsIDVdLFxuICAgICAgWzIwLCA1XVxuICAgIF0sXG4gICAgJysnOiBbXG4gICAgICBbMCwgNV0sXG4gICAgICBbNCwgNSwgJ2UnXSxcbiAgICAgIFsyLCA3XSxcbiAgICAgIFsyLCAzXVxuICAgIF0sXG4gICAgLy9taW51c1xuICAgICctJzogW1xuICAgICAgWzAsIDVdLFxuICAgICAgWzIsIDVdXG4gICAgXSxcbiAgICAnPSc6IFtcbiAgICAgIFswLCA0XSxcbiAgICAgIFsyLCA0LCAnZSddLFxuICAgICAgWzAsIDZdLFxuICAgICAgWzIsIDZdXG4gICAgXSxcbiAgICAnLyc6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFs1LCAxMF1cbiAgICBdLFxuICAgICdAJzogW1xuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTUgKyBNYXRoLnJvdW5kKHdlaWdodCAvIDQpLCAwXSxcbiAgICAgIFsxNSArIE1hdGgucm91bmQod2VpZ2h0IC8gNCksIDEwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgXSxcbiAgICAnJic6IFtcbiAgICAgIFsxMSwgMTBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMSwgMF0sXG4gICAgICBbMTEsIHhoZWlnaHQgKyAoMTAgLSB4aGVpZ2h0KSAvIDMsICdlJ10sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTQsIHhoZWlnaHRdXG4gICAgXSxcbiAgICAnKCc6IFtcbiAgICAgIFs1LCAxMF0sXG4gICAgICBbMCwgN10sXG4gICAgICBbMCwgM10sXG4gICAgICBbNSwgMF1cbiAgICBdLFxuICAgICcpJzogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFs1LCA3XSxcbiAgICAgIFs1LCAzXSxcbiAgICAgIFswLCAwXVxuICAgIF0sXG4gICAgJ1snOiBbXG4gICAgICBbNSwgMTBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFs1LCAwXVxuICAgIF0sXG4gICAgJ10nOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzUsIDEwXSxcbiAgICAgIFs1LCAwXSxcbiAgICAgIFswLCAwXVxuICAgIF0sXG4gICAgJ3snOiBbXG4gICAgICBbNSwgMTBdLFxuICAgICAgWzIsIDldLFxuICAgICAgWzIsIDYuNV0sXG4gICAgICBbMCwgNV0sXG4gICAgICBbMiwgMy41XSxcbiAgICAgIFsyLCAxXSxcbiAgICAgIFs1LCAwXVxuICAgIF0sXG4gICAgJ30nOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzMsIDldLFxuICAgICAgWzMsIDYuNV0sXG4gICAgICBbNSwgNV0sXG4gICAgICBbMywgMy41XSxcbiAgICAgIFszLCAxXSxcbiAgICAgIFswLCAwXVxuICAgIF0sXG4gICAgJzwnOiBbXG4gICAgICBbMTAsIHhoZWlnaHQgKyAxXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMiArIDFdLFxuICAgICAgWzEwLCAxXVxuICAgIF0sXG4gICAgJz4nOiBbXG4gICAgICBbMCwgeGhlaWdodCArIDFdLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMiArIDFdLFxuICAgICAgWzAsIDFdXG4gICAgXVxuICB9O1xuICBpZiAob3B0aW9ucy50eXBlID09ICdzdHJva2UnKSB7XG4gICAgdGhpcy5nbHlwaHNbJy5ub3RkZWYnXSA9IFtcbiAgICAgIFswLCA1XSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgNSwgJ2MnXVxuICAgIF07XG4gICAgdGhpcy5nbHlwaHMubyA9IFtcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMiwgJ2MnXVxuICAgIF07XG4gICAgdGhpcy5nbHlwaHMudyA9IFtcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbNSwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsxNSwgMF0sXG4gICAgICBbMjAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsyMCwgeGhlaWdodCwgJ2UnXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF07XG4gICAgdGhpcy5nbHlwaHMuQiA9IFtcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFs4LCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyLCAnYyddLFxuICAgIF07XG4gICAgdGhpcy5nbHlwaHMuRCA9IFtcbiAgICAgIFswLCA1XSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbNywgMTBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMTAgLSB4aGVpZ2h0XSxcbiAgICAgIFs3LCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCA1LCAnYyddLFxuICAgIF07XG4gICAgLy8gSEFDSzogY2hhbmdlIGdseXBoIGZvciBjb25kZW5zZWQgZm9udHNcbiAgICBpZiAob3B0aW9ucy5wcm9wb3J0aW9uIDwgMSkge1xuICAgICAgdGhpcy5nbHlwaHMuTiA9IFtcbiAgICAgICAgWzAsIDBdLFxuICAgICAgICBbMCwgMTBdLFxuICAgICAgICBbMiwgMTBdLFxuICAgICAgICBbOCwgMF0sXG4gICAgICAgIFsxMCwgMF0sXG4gICAgICAgIFsxMCwgMTBdXG4gICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdseXBocy5OID0gW1xuICAgICAgICBbMCwgMF0sXG4gICAgICAgIFswLCAxMC41XSxcbiAgICAgICAgWzEwLCAtMC41XSxcbiAgICAgICAgWzEwLCAxMF1cbiAgICAgIF07XG4gICAgfVxuICAgIHRoaXMuZ2x5cGhzLk8gPSBbXG4gICAgICBbMCwgNV0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDUsICdjJ11cbiAgICBdO1xuICAgIHRoaXMuZ2x5cGhzLlEgPSBbXG4gICAgICBbMCwgNV0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDUsICdlJ10sXG4gICAgICBbOCwgMF0sXG4gICAgICAvLyAwIC0gY29udHJhc3QgPz8/XG4gICAgICBbOCwgZGVzY2VuZGVyICogMC43NV0sXG4gICAgICBbMTAsIGRlc2NlbmRlciAqIDAuNzVdLFxuICAgIF07XG4gICAgdGhpcy5nbHlwaHMuUiA9IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodCwgJ2UnXSxcbiAgICAgIFsyLCB4aGVpZ2h0XSxcbiAgICAgIFs1LCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzEwLCAwXVxuICAgIF07XG4gICAgdGhpcy5nbHlwaHMuVyA9IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzUsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTUsIDBdLFxuICAgICAgWzIwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMjAsIDEwLCAnZSddLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTAsIDEwXVxuICAgIF07XG4gICAgdGhpcy5nbHlwaHNbJzAnXSA9IFtcbiAgICAgIFswLCA1XSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgNSwgJ2MnXVxuICAgIF07XG4gICAgdGhpcy5nbHlwaHNbJzgnXSA9IFtcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodCwgJ2UnXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMiwgJ2MnXVxuICAgIF07XG4gIH1cblxuXG4gIGlmICh3ZWlnaHQgPCAxNSB8fCBvcHRpb25zLnByb3BvcnRpb24gPD0gMSlcbiAgICB0aGlzLmdseXBocy5HLnB1c2goWzggLSBNYXRoLnJvdW5kKHdlaWdodCAvIDEwICogb3B0aW9ucy5wcm9wb3J0aW9uKSwgeGhlaWdodF0pO1xuXG4gIHRoaXMubmFtZU1hcCA9IHtcbiAgICAnxLEnOiAnZG90bGVzc2knLFxuICAgICfCtCc6ICdhY3V0ZScsXG4gICAgJ8uHJzogJ2Nhcm9uJyxcbiAgICAny5onOiAncmluZycsXG4gICAgJzAnOiAnemVybycsXG4gICAgJzEnOiAnb25lJyxcbiAgICAnMic6ICd0d28nLFxuICAgICczJzogJ3RocmVlJyxcbiAgICAnNCc6ICdmb3VyJyxcbiAgICAnNSc6ICdmaXZlJyxcbiAgICAnNic6ICdzaXgnLFxuICAgICc3JzogJ3NldmVuJyxcbiAgICAnOCc6ICdlaWdodCcsXG4gICAgJzknOiAnbmluZScsXG4gICAgJ+KAkCc6ICdoeXBoZW4nLFxuICAgICfigJMnOiAnZW5kYXNoJyxcbiAgICAn4oCUJzogJ2VtZGFzaCcsXG4gICAgJy0nOiAnbWludXMnLFxuICAgICcrJzogJ3BsdXMnLFxuICAgICcuJzogJ3BlcmlvZCcsXG4gICAgJywnOiAnY29tbWEnLFxuICAgICc6JzogJ2NvbG9uJyxcbiAgICAnOyc6ICdzZW1pY29sb24nLFxuICAgICchJzogJ2V4Y2xhbScsXG4gICAgJz8nOiAncXVlc3Rpb24nLFxuICAgICcvJzogJ3NsYXNoJyxcbiAgICAnQCc6ICdhdCcsXG4gICAgJyYnOiAnYW1wZXJzYW5kJyxcbiAgICAnKCc6ICdwYXJlbmxlZnQnLFxuICAgICcpJzogJ3BhcmVucmlnaHQnLFxuICAgICdbJzogJ2JyYWNrZXRsZWZ0JyxcbiAgICAnXSc6ICdicmFja2V0cmlnaHQnLFxuICAgICd7JzogJ2JyYWNlbGVmdCcsXG4gICAgJ30nOiAnYnJhY2VyaWdodCcsXG4gICAgJzwnOiAnbGVzcycsXG4gICAgJz0nOiAnZXF1YWwnLFxuICAgICc+JzogJ2dyZWF0ZXInXG4gIH07XG59XG5BbHBoYWJldC5wcm90b3R5cGUubWF4SGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBtYXggPSAwO1xuICBmb3IgKHZhciBrZXkgaW4gdGhpcy5nbHlwaHMpIHtcbiAgICBpZiAodGhpcy5nbHlwaHNba2V5XSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmdseXBoc1trZXldLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmdseXBoc1trZXldW2ldWzFdID4gbWF4KVxuICAgICAgICAgIG1heCA9IHRoaXMuZ2x5cGhzW2tleV1baV1bMV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1heDtcbn07XG5cbkFscGhhYmV0LnByb3RvdHlwZS5tYXhXaWR0aCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbWF4ID0gMDtcbiAgZm9yICh2YXIga2V5IGluIHRoaXMuZ2x5cGhzKSB7XG4gICAgaWYgKHRoaXMuZ2x5cGhzW2tleV0pIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5nbHlwaHNba2V5XS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5nbHlwaHNba2V5XVtpXVswXSA+IG1heClcbiAgICAgICAgICBtYXggPSB0aGlzLmdseXBoc1trZXldW2ldWzBdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtYXg7XG59O1xuXG5BbHBoYWJldC5wcm90b3R5cGUuYXZhaWxhYmxlR2x5cGhzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmdseXBocyk7XG59O1xuXG5leHBvcnRzLkFscGhhYmV0ID0gQWxwaGFiZXQ7XG4iLCJmdW5jdGlvbiBHZW5lcmF0b3Iob3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdGhpcy50eXBlID0gb3B0aW9ucy50eXBlIHx8ICdicnVzaCc7XG4gIHRoaXMucHJvcG9ydGlvbiA9IG9wdGlvbnMucHJvcG9ydGlvbiB8fCAob3B0aW9ucy5oZWlnaHQgLyBvcHRpb25zLndpZHRoKSB8fCAxLjU7XG5cbiAgdGhpcy53ZWlnaHQgPSBvcHRpb25zLndlaWdodCB8fCAodGhpcy50eXBlID09ICdicnVzaCcgPyAyMDAgOiA1MCk7XG4gIHRoaXMuY29udHJhc3QgPSB0aGlzLnR5cGUgPT0gJ2JydXNoJyA/IChvcHRpb25zLmNvbnRyYXN0IHx8IDUwKSA6IHRoaXMud2VpZ2h0O1xuICB0aGlzLmRlc2NlbmRlciA9IG9wdGlvbnMuZGVzY2VuZGVyIHx8IC0zO1xuICB0aGlzLnhzaGlmdCA9IG9wdGlvbnMueHNoaWZ0IHx8IDA7XG4gIHRoaXMueXNoaWZ0ID0gb3B0aW9ucy55c2hpZnQgfHwgMDtcbiAgdGhpcy5pdGFsaWMgPSBvcHRpb25zLml0YWxpYyB8fCAwO1xuICB0aGlzLnNlZ21lbnRSZWR1Y3Rpb24gPSBvcHRpb25zLnNlZ21lbnRSZWR1Y3Rpb247XG4gIHRoaXMuc21vb3RoID0gb3B0aW9ucy5zbW9vdGg7XG5cbiAgdGhpcy5zaXplID0gODA7XG5cbiAgdmFyIGFscGhhYmV0T3B0aW9ucyA9IHtcbiAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgd2VpZ2h0OiB0aGlzLndlaWdodCxcbiAgICBjb250cmFzdDogdGhpcy5jb250cmFzdCxcbiAgICBkZXNjZW5kZXI6IHRoaXMuZGVzY2VuZGVyLFxuICAgIHByb3BvcnRpb246IHRoaXMucHJvcG9ydGlvbixcbiAgICB4aGVpZ2h0OiBvcHRpb25zLnhoZWlnaHQgfHwgN1xuICB9O1xuXG4gIHRoaXMuYWxwaGFiZXQgPSBvcHRpb25zLmFscGhhYmV0IHx8IG5ldyBnbHlwaGVyLkFscGhhYmV0KGFscGhhYmV0T3B0aW9ucyk7XG4gIHRoaXMuZ2x5cGhzID0gW107XG4gIHRoaXMub3BlbnR5cGUgPSB1bmRlZmluZWQ7XG59XG5cbkdlbmVyYXRvci5wcm90b3R5cGUuZ2VuZXJhdGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gRklYTUU6IGFkZCBjYW52YXMgZWxlbWVudFxuICBwbHVtaW4uc2V0dXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpKTtcblxuICB0aGlzLmZvbnQgPSBuZXcgcGx1bWluLkZvbnQoe1xuICAgIGZhbWlseU5hbWU6ICdEZW1vJyxcbiAgICBhc2NlbmRlcjogMTAwMCxcbiAgICBkZXNjZW5kZXI6IC0yMDBcbiAgfSk7XG5cbiAgdmFyIGF2YWlsYWJsZUdseXBocyA9IHRoaXMuYWxwaGFiZXQuYXZhaWxhYmxlR2x5cGhzKCksXG4gICAgZ2x5cGhzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhdmFpbGFibGVHbHlwaHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGF0aCA9IHRoaXMuZ2VuZXJhdGVHbHlwaChhdmFpbGFibGVHbHlwaHNbaV0sIHRoaXMuYWxwaGFiZXQuZ2x5cGhzW2F2YWlsYWJsZUdseXBoc1tpXV0pO1xuICAgIHZhciBnbHlwaCA9IG5ldyBwbHVtaW4uR2x5cGgoe1xuICAgICAgbmFtZTogdGhpcy5hbHBoYWJldC5uYW1lTWFwW2F2YWlsYWJsZUdseXBoc1tpXV0gfHwgYXZhaWxhYmxlR2x5cGhzW2ldLFxuICAgICAgdW5pY29kZTogYXZhaWxhYmxlR2x5cGhzW2ldLFxuICAgICAgYWR2YW5jZVdpZHRoOiBwYXRoLndpZHRoICsgMTAwXG4gICAgfSk7XG4gICAgZ2x5cGguYWRkQ29udG91cihwYXRoLnBhdGgpO1xuICAgIGdseXBocy5wdXNoKGdseXBoKTtcbiAgfVxuXG4gIHRoaXMuZm9udC5hZGRHbHlwaHMoZ2x5cGhzKTtcbiAgdGhpcy5mb250LnVwZGF0ZU9UQ29tbWFuZHMoKVxuICAgIC5hZGRUb0ZvbnRzKCk7XG5cbiAgLy8gdmFyIGFjY2VudCA9ICdhY3V0ZSc7XG4gIC8vIGF2YWlsYWJsZUdseXBocyA9ICdhZWlvdXlBRUlPVVknO1xuICAvLyBmb3IgKGkgPSAwOyBpIDwgYXZhaWxhYmxlR2x5cGhzLmxlbmd0aDsgaSsrKSB7XG4gIC8vICAgdGhpcy5iZWZvcmVHZW5lcmF0ZUdseXBoKGF2YWlsYWJsZUdseXBoc1tpXSk7XG4gIC8vICAgaWYgKHRoaXMudHlwZSA9PSAnc3Ryb2tlJylcbiAgLy8gICAgIGdseXBoID0gdGhpcy5nZW5lcmF0ZUdseXBoV2l0aEFjY2VudDIoYXZhaWxhYmxlR2x5cGhzW2ldLCBhY2NlbnQpO1xuICAvLyAgIGVsc2VcbiAgLy8gICAgIGdseXBoID0gdGhpcy5nZW5lcmF0ZUdseXBoV2l0aEFjY2VudChhdmFpbGFibGVHbHlwaHNbaV0sIGFjY2VudCk7XG4gIC8vICAgdGhpcy5hZnRlckdlbmVyYXRlR2x5cGgoZ2x5cGgpO1xuICAvLyAgIHRoaXMuZ2x5cGhzW2dseXBoLm5hbWVdID0gZ2x5cGg7XG4gIC8vIH1cbiAgLy8gICAvLyBGSVhNRTogZGNhcm9uIHRjYXJvblxuICAvLyAgIGFjY2VudCA9ICdjYXJvbic7XG4gIC8vICAgYXZhaWxhYmxlR2x5cGhzID0gJ2NlbnJzekNERU5SU1RaJztcbiAgLy8gICBmb3IgKGkgPSAwOyBpIDwgYXZhaWxhYmxlR2x5cGhzLmxlbmd0aDsgaSsrKSB7XG4gIC8vICAgICB0aGlzLmJlZm9yZUdlbmVyYXRlR2x5cGgoYXZhaWxhYmxlR2x5cGhzW2ldKTtcbiAgLy8gICAgIGlmICh0aGlzLnR5cGUgPT0gJ3N0cm9rZScpXG4gIC8vICAgICAgIGdseXBoID0gdGhpcy5nZW5lcmF0ZUdseXBoV2l0aEFjY2VudDIoYXZhaWxhYmxlR2x5cGhzW2ldLCBhY2NlbnQpO1xuICAvLyAgICAgZWxzZVxuICAvLyAgICAgICBnbHlwaCA9IHRoaXMuZ2VuZXJhdGVHbHlwaFdpdGhBY2NlbnQoYXZhaWxhYmxlR2x5cGhzW2ldLCBhY2NlbnQpO1xuICAvLyAgICAgdGhpcy5hZnRlckdlbmVyYXRlR2x5cGgoZ2x5cGgpO1xuICAvLyAgICAgdGhpcy5nbHlwaHNbZ2x5cGgubmFtZV0gPSBnbHlwaDtcbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgYWNjZW50ID0gJ3JpbmcnO1xuICAvLyAgIGF2YWlsYWJsZUdseXBocyA9ICd1VSc7XG4gIC8vICAgZm9yIChpID0gMDsgaSA8IGF2YWlsYWJsZUdseXBocy5sZW5ndGg7IGkrKykge1xuICAvLyAgICAgdGhpcy5iZWZvcmVHZW5lcmF0ZUdseXBoKGF2YWlsYWJsZUdseXBoc1tpXSk7XG4gIC8vICAgICBpZiAodGhpcy50eXBlID09ICdzdHJva2UnKVxuICAvLyAgICAgICBnbHlwaCA9IHRoaXMuZ2VuZXJhdGVHbHlwaFdpdGhBY2NlbnQyKGF2YWlsYWJsZUdseXBoc1tpXSwgYWNjZW50KTtcbiAgLy8gICAgIGVsc2VcbiAgLy8gICAgICAgZ2x5cGggPSB0aGlzLmdlbmVyYXRlR2x5cGhXaXRoQWNjZW50KGF2YWlsYWJsZUdseXBoc1tpXSwgYWNjZW50KTtcbiAgLy8gICAgIHRoaXMuYWZ0ZXJHZW5lcmF0ZUdseXBoKGdseXBoKTtcbiAgLy8gICAgIHRoaXMuZ2x5cGhzW2dseXBoLm5hbWVdID0gZ2x5cGg7XG4gIC8vICAgfVxufTtcblxuR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRHbHlwaCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgaWYgKHRoaXMuZ2x5cGhzW25hbWVdKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2x5cGhzW25hbWVdO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdnbHlwaCAnICsgbmFtZSArICcgbm90IGRlZmluZWQnKTtcbiAgICByZXR1cm4gdGhpcy5nbHlwaHNbJy5ub3RkZWYnXTtcbiAgfVxufTtcblxuR2VuZXJhdG9yLnByb3RvdHlwZS5hZGp1c3RQb2ludCA9IGZ1bmN0aW9uKHBvaW50KSB7XG4gIHJldHVybiBuZXcgcGx1bWluLlBvaW50KHBvaW50KVxuICAgIC5tdWx0aXBseShbdGhpcy5zaXplIC8gdGhpcy5wcm9wb3J0aW9uLCB0aGlzLnNpemUgLSAodGhpcy5jb250cmFzdCAqIDIgLyB0aGlzLnNpemUpXSlcbiAgICAuYWRkKHRoaXMud2VpZ2h0LCB0aGlzLmNvbnRyYXN0KVxuICAgIC5hZGQodGhpcy54c2hpZnQsIHRoaXMueXNoaWZ0KTtcbn07XG5cbkdlbmVyYXRvci5wcm90b3R5cGUuZHJhd0RvdCA9IGZ1bmN0aW9uKHBvaW50LCBib3gpIHtcbiAgdmFyIHAxID0gdGhpcy5hZGp1c3RQb2ludChwb2ludCk7XG4gIHJldHVybiBuZXcgcGx1bWluLlBhdGguUmVjdGFuZ2xlKHAxLnN1YnRyYWN0KGJveCksIHAxLmFkZChib3gpKTtcbn07XG5cbkdlbmVyYXRvci5wcm90b3R5cGUuYmVmb3JlR2VuZXJhdGVHbHlwaCA9IGZ1bmN0aW9uKG5hbWUpIHtcblxufTtcblxuR2VuZXJhdG9yLnByb3RvdHlwZS5hZnRlckdlbmVyYXRlR2x5cGggPSBmdW5jdGlvbihnbHlwaCkge1xuXG59O1xuXG5HZW5lcmF0b3IucHJvdG90eXBlLmdlbmVyYXRlR2x5cGggPSBmdW5jdGlvbihuYW1lLCBwb2ludHMpIHtcbiAgcG9pbnRzID0gcG9pbnRzIHx8IHRoaXMuYWxwaGFiZXQuZ2x5cGhzW25hbWVdO1xuICB2YXIgZ2x5cGggPSBuZXcgZ2x5cGhlci5HbHlwaChuYW1lLCB0aGlzLndlaWdodCwgdGhpcy5jb250cmFzdCwgdGhpcy5wcm9wb3J0aW9uKTtcblxuICB2YXIgc2VnbWVudHMgPSBbXTtcbiAgdmFyIGJveCA9IG5ldyBwbHVtaW4uUG9pbnQoZ2x5cGgud2VpZ2h0LCBnbHlwaC5jb250cmFzdCk7XG4gIHZhciBzdGFydFBvaW50O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy9XSVBcbiAgICBpZiAocG9pbnRzW2ldWzJdID09ICdkb3QnKSB7XG4gICAgICBzZWdtZW50cy5wdXNoKHRoaXMuZHJhd0RvdChwb2ludHNbaV0sIGJveCkpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGkgPj0gcG9pbnRzLmxlbmd0aCAtIDEpXG4gICAgICBicmVhaztcblxuICAgIHZhciBwYXRoID0gbmV3IHBsdW1pbi5QYXRoKCk7XG5cbiAgICB2YXIgcDEgPSB0aGlzLmFkanVzdFBvaW50KHBvaW50c1tpXSk7XG4gICAgdmFyIHAyID0gdGhpcy5hZGp1c3RQb2ludChwb2ludHNbaSArIDFdKTtcblxuICAgIGlmIChwb2ludHNbaSArIDFdWzJdID09ICdjJykge1xuICAgICAgcDIgPSBzdGFydFBvaW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBwMiA9IHRoaXMuYWRqdXN0UG9pbnQocG9pbnRzW2kgKyAxXSk7XG4gICAgICBzdGFydFBvaW50ID0gc3RhcnRQb2ludCB8fCBwMTtcbiAgICB9XG5cbiAgICB2YXIgdmVjdG9yID0gcDIuc3VidHJhY3QocDEpO1xuICAgIHZhciB4ID0gc2lnbih2ZWN0b3IueCk7XG4gICAgdmFyIHkgPSBzaWduKHZlY3Rvci55KTtcblxuICAgIC8vIFdJUFxuICAgIGlmICh0aGlzLnNlZ21lbnRSZWR1Y3Rpb24pIHtcbiAgICAgIHZlY3Rvci5sZW5ndGggLT0gdGhpcy5zZWdtZW50UmVkdWN0aW9uICogNTtcbiAgICAgIHAyID0gcDEuYWRkKHZlY3Rvcik7XG4gICAgICB2YXIgdmVjdG9yMiA9IHAxLnN1YnRyYWN0KHAyKTtcbiAgICAgIHZlY3RvcjIubGVuZ3RoIC09IHRoaXMuc2VnbWVudFJlZHVjdGlvbiAqIDU7XG4gICAgICBwMSA9IHAyLmFkZCh2ZWN0b3IyKTtcbiAgICB9XG5cbiAgICB2YXIgYjtcbiAgICBpZiAoaSAhPT0gMCAmJiBwb2ludHNbaSAtIDFdWzJdICE9PSAnZScgfHwgdmVjdG9yLmFuZ2xlICUgOTAgPT09IDApIHtcbiAgICAgIGIgPSBwMS5hZGQoYm94Lm11bHRpcGx5KFt4ICogLTEsIHldKSk7XG4gICAgICBiID0gYi5hZGQoYi55ICogLTEgKiB0aGlzLml0YWxpYywgMCk7XG4gICAgICBwYXRoLmFkZChiKTtcbiAgICB9XG5cbiAgICBiID0gcDEuYWRkKGJveC5tdWx0aXBseShbeCAqIC0xLCB5ICogLTFdKSk7XG4gICAgYiA9IGIuYWRkKGIueSAqIC0xICogdGhpcy5pdGFsaWMsIDApO1xuICAgIC8vIGlmIChpID09PSAwIHx8IHBvaW50c1tpIC0gMV1bMl0gPT09ICdlJyAmJiB2ZWN0b3IuYW5nbGUgJSA5MCAhPT0gMClcbiAgICAvLyAgIGIgPSBiLmFkZCgtMjAsIDApO1xuICAgIHBhdGguYWRkKGIpO1xuXG4gICAgYiA9IHAxLmFkZChib3gubXVsdGlwbHkoW3gsIHkgKiAtMV0pKTtcbiAgICBiID0gYi5hZGQoYi55ICogLTEgKiB0aGlzLml0YWxpYywgMCk7XG4gICAgcGF0aC5hZGQoYik7XG5cbiAgICBpZiAoaSArIDEgIT09IHBvaW50cy5sZW5ndGggLSAxICYmIHBvaW50c1tpICsgMV1bMl0gIT09ICdlJyB8fCB2ZWN0b3IuYW5nbGUgJSA5MCA9PT0gMCkge1xuICAgICAgYiA9IHAyLmFkZChib3gubXVsdGlwbHkoW3gsIHkgKiAtMV0pKTtcbiAgICAgIGIgPSBiLmFkZChiLnkgKiAtMSAqIHRoaXMuaXRhbGljLCAwKTtcbiAgICAgIHBhdGguYWRkKGIpO1xuICAgIH1cblxuICAgIGIgPSBwMi5hZGQoYm94Lm11bHRpcGx5KFt4LCB5XSkpO1xuICAgIGIgPSBiLmFkZChiLnkgKiAtMSAqIHRoaXMuaXRhbGljLCAwKTtcbiAgICAvLyBpZiAoaSArIDEgIT09IHBvaW50cy5sZW5ndGggLSAxICYmIHBvaW50c1tpICsgMV1bMl0gIT09ICdlJyB8fCB2ZWN0b3IuYW5nbGUgJSA5MCA9PT0gMCkge1xuICAgIC8vIH1lbHNle1xuICAgIC8vICAgdmFyIHYgPSBwMS5zdWJ0cmFjdChwMik7XG4gICAgLy8gICBiID0gYi5hZGQoKHRoaXMuY29udHJhc3QqMikvTWF0aC50YW4odi5hbmdsZUluUmFkaWFucykgKiAtMSwgMCk7XG4gICAgLy8gfVxuICAgIHBhdGguYWRkKGIpO1xuXG4gICAgYiA9IHAyLmFkZChib3gubXVsdGlwbHkoW3ggKiAtMSwgeV0pKTtcbiAgICBiID0gYi5hZGQoYi55ICogLTEgKiB0aGlzLml0YWxpYywgMCk7XG4gICAgcGF0aC5hZGQoYik7XG5cblxuICAgIC8vIEZJWE1FOiByb3VuZCBlZGdlc1xuICAgIC8vIHZhciBjID0gbmV3IFBhdGguQ2lyY2xlKHtcbiAgICAvLyAgIGNlbnRlcjogWzAsIDBdLFxuICAgIC8vICAgcmFkaXVzOiB0aGlzLndlaWdodFxuICAgIC8vIH0pO1xuICAgIC8vXG4gICAgLy8gYy5yb3RhdGUodmVjdG9yLmFuZ2xlKTtcbiAgICAvLyBjLnBvc2l0aW9uID0gcDE7XG4gICAgLy8gcGF0aC5hZGQoYy5zZWdtZW50c1szXSk7XG4gICAgLy8gcGF0aC5hZGQoYy5zZWdtZW50c1swXSk7XG4gICAgLy8gcGF0aC5hZGQoYy5zZWdtZW50c1sxXSk7XG4gICAgLy9cbiAgICAvLyBjLnBvc2l0aW9uID0gcDI7XG4gICAgLy8gcGF0aC5hZGQoYy5zZWdtZW50c1sxXSk7XG4gICAgLy8gcGF0aC5hZGQoYy5zZWdtZW50c1syXSk7XG4gICAgLy8gcGF0aC5hZGQoYy5zZWdtZW50c1szXSk7XG5cbiAgICBwYXRoLnJlZHVjZSgpO1xuICAgIHBhdGguY2xvc2VkID0gdHJ1ZTtcblxuICAgIHNlZ21lbnRzLnB1c2gocGF0aCk7XG5cbiAgICBpZiAocDEueCArIGdseXBoLndlaWdodCA+IGdseXBoLndpZHRoKVxuICAgICAgZ2x5cGgud2lkdGggPSBwMS54ICsgZ2x5cGgud2VpZ2h0O1xuXG4gICAgLy8gRklYTUU6IGFkZCBsYXN0IHBvaW50XG4gICAgaWYgKHAyLnggKyBnbHlwaC53ZWlnaHQgPiBnbHlwaC53aWR0aClcbiAgICAgIGdseXBoLndpZHRoID0gcDIueCArIGdseXBoLndlaWdodDtcblxuICAgIGlmIChwMS55ICsgZ2x5cGguY29udHJhc3QgPCBnbHlwaC5oZWlnaHQpXG4gICAgICBnbHlwaC5oZWlnaHQgPSBwMS55ICsgZ2x5cGguY29udHJhc3Q7XG5cbiAgICAvLyBGSVhNRTogYWRkIGxhc3QgcG9pbnRcbiAgICBpZiAocDIueSArIGdseXBoLmNvbnRyYXN0IDwgZ2x5cGguaGVpZ2h0KVxuICAgICAgZ2x5cGguaGVpZ2h0ID0gcDIueSArIGdseXBoLmNvbnRyYXN0O1xuXG4gICAgaWYgKHBvaW50c1tpICsgMV1bMl0gPT0gJ2UnIHx8IHBvaW50c1tpICsgMV1bMl0gPT0gJ2MnKSB7XG4gICAgICBpKys7XG4gICAgICBzdGFydFBvaW50ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuICBnbHlwaC5wYXRoID0gZ2x5cGgubWVyZ2VTZWdtZW50cyhzZWdtZW50cyk7XG4gIGdseXBoLnBhdGgucmVkdWNlKCk7XG5cbiAgaWYgKHRoaXMuc21vb3RoKVxuICAgIGdseXBoLnBhdGguc21vb3RoKHtcbiAgICAgIHR5cGU6ICdjb250aW51b3VzJ1xuICAgIH0pO1xuXG4gIHJldHVybiBnbHlwaDtcbn07XG5cbi8vV0lQXG5HZW5lcmF0b3IucHJvdG90eXBlLmdlbmVyYXRlR2x5cGgyID0gZnVuY3Rpb24obmFtZSwgcG9pbnRzKSB7XG4gIHBvaW50cyA9IHBvaW50cyB8fCB0aGlzLmFscGhhYmV0LmdseXBoc1tuYW1lXTtcbiAgdmFyIGdseXBoID0gbmV3IGdseXBoZXIuR2x5cGgobmFtZSwgdGhpcy53ZWlnaHQsIHRoaXMuY29udHJhc3QsIHRoaXMucHJvcG9ydGlvbik7XG5cbiAgdmFyIG5leHRBbmdsZSxcbiAgICBjb3JuZXIsXG4gICAgc2VnbWVudHMgPSBbXG4gICAgICBbXVxuICAgIF0sXG4gICAgY29ybmVyUG9pbnQzLFxuICAgIHN0YXJ0UG9pbnQ7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAvL1dJUFxuICAgIGlmIChwb2ludHNbaV1bMl0gPT0gJ2RvdCcpIHtcbiAgICAgIHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdLnB1c2godGhpcy5hZGp1c3RQb2ludChwb2ludHNbaV0pLmFkZCh0aGlzLndlaWdodCwgdGhpcy53ZWlnaHQgKiAtMSkpO1xuICAgICAgc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV0ucHVzaCh0aGlzLmFkanVzdFBvaW50KHBvaW50c1tpXSkuYWRkKHRoaXMud2VpZ2h0ICogLTEsIHRoaXMud2VpZ2h0ICogLTEpKTtcbiAgICAgIHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdLnB1c2godGhpcy5hZGp1c3RQb2ludChwb2ludHNbaV0pLmFkZCh0aGlzLndlaWdodCAqIC0xLCB0aGlzLndlaWdodCkpO1xuICAgICAgc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV0ucHVzaCh0aGlzLmFkanVzdFBvaW50KHBvaW50c1tpXSkuYWRkKHRoaXMud2VpZ2h0KSk7XG4gICAgICBzZWdtZW50cy5wdXNoKFtdKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChpID49IHBvaW50cy5sZW5ndGggLSAxKVxuICAgICAgYnJlYWs7XG5cbiAgICB2YXIgcG9pbnQxID0gdGhpcy5hZGp1c3RQb2ludChwb2ludHNbaV0pO1xuICAgIHZhciBwb2ludDIgPSB0aGlzLmFkanVzdFBvaW50KHBvaW50c1tpICsgMV0pO1xuXG4gICAgaWYgKHBvaW50c1tpICsgMV1bMl0gPT0gJ2MnKSB7XG4gICAgICBwb2ludDIgPSB0aGlzLmFkanVzdFBvaW50KHBvaW50c1tzdGFydFBvaW50IC0gMV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwb2ludDIgPSB0aGlzLmFkanVzdFBvaW50KHBvaW50c1tpICsgMV0pO1xuICAgICAgc3RhcnRQb2ludCA9IHN0YXJ0UG9pbnQgfHwgaTtcbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNBbmdsZSA9IG5leHRBbmdsZTtcblxuICAgIHZhciB2ZWN0b3IxID0gcG9pbnQyLnN1YnRyYWN0KHBvaW50MSk7XG4gICAgaWYgKHBvaW50c1tpICsgMl0pIHtcbiAgICAgIHZhciB2ZWN0b3IyID0gdGhpcy5hZGp1c3RQb2ludChwb2ludHNbaSArIDJdKS5zdWJ0cmFjdChwb2ludDIpO1xuICAgICAgbmV4dEFuZ2xlID0gdmVjdG9yMS5yb3RhdGUoMTgwKS5nZXREaXJlY3RlZEFuZ2xlKHZlY3RvcjIpO1xuICAgIH1cbiAgICB2YXIgcDEsIHAyLCBwMywgcDQ7XG4gICAgaWYgKHBvaW50c1tpIC0gMV0gJiYgcG9pbnRzW2kgLSAxXVsyXSA9PSAnZScgfHwgaSA9PT0gMCkge1xuICAgICAgcDEgPSBwb2ludDEuYWRkKHRoaXMud2VpZ2h0ICogLTEsIHRoaXMud2VpZ2h0KS5yb3RhdGUodmVjdG9yMS5hbmdsZSArIDkwLCBwb2ludDEpO1xuICAgICAgcDIgPSBwb2ludDEuYWRkKHRoaXMud2VpZ2h0LCB0aGlzLndlaWdodCkucm90YXRlKHZlY3RvcjEuYW5nbGUgKyA5MCwgcG9pbnQxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcDEgPSBwb2ludDEuYWRkKHRoaXMud2VpZ2h0LCAwKS5yb3RhdGUodmVjdG9yMS5hbmdsZSAtIDkwLCBwb2ludDEpO1xuICAgICAgcDIgPSBwb2ludDEuYWRkKHRoaXMud2VpZ2h0LCAwKS5yb3RhdGUodmVjdG9yMS5hbmdsZSArIDkwLCBwb2ludDEpO1xuICAgIH1cblxuICAgIGlmIChwb2ludHNbaSArIDFdWzJdID09ICdlJyB8fCBpID09PSBwb2ludHMubGVuZ3RoIC0gMikge1xuICAgICAgcDMgPSBwb2ludDIuYWRkKHRoaXMud2VpZ2h0ICogLTEsIHRoaXMud2VpZ2h0KS5yb3RhdGUodmVjdG9yMS5hbmdsZSAtIDkwLCBwb2ludDIpO1xuICAgICAgcDQgPSBwb2ludDIuYWRkKHRoaXMud2VpZ2h0LCB0aGlzLndlaWdodCkucm90YXRlKHZlY3RvcjEuYW5nbGUgLSA5MCwgcG9pbnQyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcDMgPSBwb2ludDIuYWRkKHRoaXMud2VpZ2h0LCAwKS5yb3RhdGUodmVjdG9yMS5hbmdsZSArIDkwLCBwb2ludDIpO1xuICAgICAgcDQgPSBwb2ludDIuYWRkKHRoaXMud2VpZ2h0LCAwKS5yb3RhdGUodmVjdG9yMS5hbmdsZSAtIDkwLCBwb2ludDIpO1xuICAgIH1cblxuICAgIHZhciBjb3JuZXJQb2ludCxcbiAgICAgIGNvcm5lclBvaW50MjtcblxuICAgIGlmIChwb2ludHNbaSAtIDFdICYmIHBvaW50c1tpXVsyXSAhPSAnZScgJiYgcG9pbnRzW2kgLSAxXVsyXSAhPSAnZScgJiYgcHJldmlvdXNBbmdsZSkge1xuICAgICAgdmFyIHByZXZpb3VzVmVjdG9yID0gdGhpcy5hZGp1c3RQb2ludChwb2ludHNbaSAtIDFdKS5zdWJ0cmFjdChwb2ludDEpO1xuICAgICAgaWYgKHByZXZpb3VzQW5nbGUgPCAwKSB7XG4gICAgICAgIGNvcm5lclBvaW50ID0gcDE7XG4gICAgICAgIC8vIHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdLnB1c2gobWFrZUNvcm5lcihjb3JuZXJQb2ludDIsIGNvcm5lclBvaW50LCBwcmV2aW91c1ZlY3RvciwgdmVjdG9yMSkpO1xuICAgICAgICBzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLSAxXS5zcGxpY2UoMCwgMCwgbWFrZUNvcm5lcihjb3JuZXJQb2ludDMsIHAyLCBwcmV2aW91c1ZlY3RvciwgdmVjdG9yMSkpO1xuICAgICAgICAvL2ZvciBibHVudCBlZGdlc1xuICAgICAgICBzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLSAxXS5wdXNoKGNvcm5lclBvaW50Mik7XG4gICAgICAgIHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdLnB1c2goY29ybmVyUG9pbnQpO1xuXG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvcm5lclBvaW50ID0gcDI7XG4gICAgICAgIC8vIHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdLnNwbGljZSgwLCAwLCBtYWtlQ29ybmVyKGNvcm5lclBvaW50MiwgY29ybmVyUG9pbnQsIHByZXZpb3VzVmVjdG9yLCB2ZWN0b3IxKSk7XG4gICAgICAgIHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdLnB1c2gobWFrZUNvcm5lcihjb3JuZXJQb2ludDMsIHAxLCBwcmV2aW91c1ZlY3RvciwgdmVjdG9yMSkpO1xuICAgICAgICAvL2ZvciBibHVudCBlZGdlc1xuICAgICAgICBzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLSAxXS5zcGxpY2UoMCwgMCwgY29ybmVyUG9pbnQyKTtcbiAgICAgICAgc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV0uc3BsaWNlKDAsIDAsIGNvcm5lclBvaW50KTtcblxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5leHRBbmdsZSkge1xuXG4gICAgICBpZiAobmV4dEFuZ2xlIDwgMCkge1xuICAgICAgICBjb3JuZXJQb2ludDIgPSBwNDtcbiAgICAgICAgY29ybmVyUG9pbnQzID0gcDM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb3JuZXJQb2ludDIgPSBwMztcbiAgICAgICAgY29ybmVyUG9pbnQzID0gcDQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvaW50c1tpIC0gMV0gJiYgcG9pbnRzW2kgLSAxXVsyXSA9PSAnZScgfHwgIXByZXZpb3VzQW5nbGUpIHtcbiAgICAgIHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdLnB1c2gocDEpO1xuICAgICAgc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV0uc3BsaWNlKDAsIDAsIHAyKTtcbiAgICB9XG5cbiAgICBpZiAocG9pbnRzW2kgKyAxXVsyXSA9PSAnZScgfHwgaSA9PSBwb2ludHMubGVuZ3RoIC0gMikge1xuICAgICAgc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV0uc3BsaWNlKDAsIDAsIHAzKTtcbiAgICAgIHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdLnB1c2gocDQpO1xuICAgICAgc2VnbWVudHMucHVzaChbXSk7XG4gICAgfVxuXG4gICAgaWYgKHBvaW50Mi54ICsgZ2x5cGgud2VpZ2h0ID4gZ2x5cGgud2lkdGgpXG4gICAgICBnbHlwaC53aWR0aCA9IHBvaW50Mi54ICsgZ2x5cGgud2VpZ2h0O1xuXG4gICAgLy8gRklYTUU6IGFkZCBsYXN0IHBvaW50XG4gICAgaWYgKHBvaW50Mi54ICsgZ2x5cGgud2VpZ2h0ID4gZ2x5cGgud2lkdGgpXG4gICAgICBnbHlwaC53aWR0aCA9IHBvaW50Mi54ICsgZ2x5cGgud2VpZ2h0O1xuXG4gICAgaWYgKHBvaW50Mi55ICsgZ2x5cGguY29udHJhc3QgPCBnbHlwaC5oZWlnaHQpXG4gICAgICBnbHlwaC5oZWlnaHQgPSBwb2ludDIueSArIGdseXBoLmNvbnRyYXN0O1xuXG4gICAgLy8gRklYTUU6IGFkZCBsYXN0IHBvaW50XG4gICAgaWYgKHBvaW50Mi55ICsgZ2x5cGguY29udHJhc3QgPCBnbHlwaC5oZWlnaHQpXG4gICAgICBnbHlwaC5oZWlnaHQgPSBwb2ludDIueSArIGdseXBoLmNvbnRyYXN0O1xuXG4gIH1cbiAgZ2x5cGgucGF0aCA9IG5ldyBwbHVtaW4uUGF0aChzZWdtZW50c1swXSk7XG4gIGdseXBoLnBhdGguY2xvc2VQYXRoKCk7XG4gIGZvciAoaSA9IDE7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzZWdtZW50c1tpXS5sZW5ndGgpIHtcbiAgICAgIHZhciBzZWdtZW50ID0gbmV3IHBsdW1pbi5QYXRoKHNlZ21lbnRzW2ldKTtcbiAgICAgIHNlZ21lbnQuY2xvc2VQYXRoKCk7XG4gICAgICBnbHlwaC5wYXRoID0gZ2x5cGgucGF0aC51bml0ZShzZWdtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2x5cGg7XG59O1xuXG5mdW5jdGlvbiBtYWtlQ29ybmVyKHAxLCBwMiwgdmVjdG9yMiwgdmVjdG9yMykge1xuICB2YXIgdmVjdG9yMSA9IHAyLnN1YnRyYWN0KHAxKTtcblxuICB2YXIgcmFkMSA9IHZlY3RvcjIucm90YXRlKDE4MCkuZ2V0QW5nbGVJblJhZGlhbnModmVjdG9yMSk7XG4gIHZhciByYWQyID0gdmVjdG9yMy5nZXRBbmdsZUluUmFkaWFucyh2ZWN0b3IxKTtcblxuICB2YXIgeCA9ICh2ZWN0b3IxLmxlbmd0aCAqIE1hdGguc2luKHJhZDEpKSAvIE1hdGguc2luKHJhZDIgKyByYWQxKTtcblxuICAvLyBpZiAoeCA+IDMwKVxuICAvLyAgIHggPSAzMDtcblxuICAvLyBpZiAoeCA+IDUwKVxuICAvLyAgIHggPSAzMDtcblxuICB2YXIgcmVzdWx0ID0gbmV3IHBsdW1pbi5Qb2ludCh4LCAwKTtcbiAgcmVzdWx0ID0gcmVzdWx0LnJvdGF0ZSh2ZWN0b3IyLnJvdGF0ZSgxODApLmFuZ2xlKTtcbiAgcmVzdWx0ID0gcmVzdWx0LmFkZChwMSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbkdlbmVyYXRvci5wcm90b3R5cGUuZ2VuZXJhdGVHbHlwaFdpdGhBY2NlbnQgPSBmdW5jdGlvbihuYW1lLCBhY2NlbnQpIHtcbiAgdmFyIGdseXBoO1xuXG4gIGlmIChhY2NlbnQubGVuZ3RoID4gMSlcbiAgICBhY2NlbnQgPSBkZWNvZGVIdG1sKCcmJyArIGFjY2VudCArICc7Jyk7XG5cbiAgaWYgKG5hbWUgPT0gJ2knKVxuICAgIGdseXBoID0gdGhpcy5nZW5lcmF0ZUdseXBoKCfEsScpO1xuICBlbHNlXG4gICAgZ2x5cGggPSB0aGlzLmdlbmVyYXRlR2x5cGgobmFtZSk7XG5cbiAgdmFyIGFjY2VudEdseXBoID0gdGhpcy5nZW5lcmF0ZUdseXBoKGFjY2VudCk7XG4gIC8vIEZJWE1FOiBmaXggdGhpcyBmb3IgaXRhbGljc1xuICBhY2NlbnRHbHlwaC5wYXRoLnBvc2l0aW9uLnggKz0gKGdseXBoLndpZHRoIC0gYWNjZW50R2x5cGgud2lkdGgpIC8gMjtcblxuICBpZiAobmFtZVswXSA9PT0gbmFtZVswXS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgYWNjZW50R2x5cGgucGF0aC5wb3NpdGlvbi55ICs9IDkwICsgZ2x5cGguaGVpZ2h0O1xuICB9XG5cbiAgZ2x5cGgucGF0aCA9IGdseXBoLnBhdGgudW5pdGUoYWNjZW50R2x5cGgucGF0aCk7XG4gIGdseXBoLm5hbWUgPSBkZWNvZGVIdG1sKCcmJyArIG5hbWUgKyB0aGlzLmFscGhhYmV0Lm5hbWVNYXBbYWNjZW50XSArICc7Jyk7XG4gIHJldHVybiBnbHlwaDtcbn07XG5cbkdlbmVyYXRvci5wcm90b3R5cGUuZ2VuZXJhdGVHbHlwaFdpdGhBY2NlbnQyID0gZnVuY3Rpb24obmFtZSwgYWNjZW50KSB7XG4gIHZhciBnbHlwaDtcblxuICBpZiAoYWNjZW50Lmxlbmd0aCA+IDEpXG4gICAgYWNjZW50ID0gZGVjb2RlSHRtbCgnJicgKyBhY2NlbnQgKyAnOycpO1xuXG4gIGlmIChuYW1lID09ICdpJylcbiAgICBnbHlwaCA9IHRoaXMuZ2VuZXJhdGVHbHlwaDIoJ8SxJyk7XG4gIGVsc2VcbiAgICBnbHlwaCA9IHRoaXMuZ2VuZXJhdGVHbHlwaDIobmFtZSk7XG5cbiAgdmFyIGFjY2VudEdseXBoID0gdGhpcy5nZW5lcmF0ZUdseXBoMihhY2NlbnQpO1xuICAvLyBGSVhNRTogZml4IHRoaXMgZm9yIGl0YWxpY3NcbiAgYWNjZW50R2x5cGgucGF0aC5wb3NpdGlvbi54ICs9IChnbHlwaC53aWR0aCAtIGFjY2VudEdseXBoLndpZHRoKSAvIDI7XG5cbiAgaWYgKG5hbWVbMF0gPT09IG5hbWVbMF0udG9Mb3dlckNhc2UoKSkge1xuICAgIGFjY2VudEdseXBoLnBhdGgucG9zaXRpb24ueSArPSA5MCArIGdseXBoLmhlaWdodDtcbiAgfVxuXG4gIGdseXBoLnBhdGggPSBnbHlwaC5wYXRoLnVuaXRlKGFjY2VudEdseXBoLnBhdGgpO1xuICBnbHlwaC5uYW1lID0gZGVjb2RlSHRtbCgnJicgKyBuYW1lICsgdGhpcy5hbHBoYWJldC5uYW1lTWFwW2FjY2VudF0gKyAnOycpO1xuICByZXR1cm4gZ2x5cGg7XG59O1xuXG5mdW5jdGlvbiBkZWNvZGVIdG1sKGh0bWwpIHtcbiAgdmFyIHR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgdHh0LmlubmVySFRNTCA9IGh0bWw7XG4gIHJldHVybiB0eHQudmFsdWU7XG59XG5cbmZ1bmN0aW9uIGRyYXdPcGVudHlwZVBhdGgocGF0aCkge1xuICB2YXIgcmVzdWx0UGF0aCA9IG5ldyBvcGVudHlwZS5QYXRoKCksXG4gICAgcGF0aHMgPSBwYXRoLmNoaWxkcmVuIHx8IFtwYXRoXTtcblxuICBmb3IgKHZhciBqID0gMDsgaiA8IHBhdGhzLmxlbmd0aDsgaisrKSB7XG4gICAgLy8gRklYTUU6IHkgKiAtMSwgKiAxMFxuICAgIHJlc3VsdFBhdGgubW92ZVRvKE1hdGgucm91bmQocGF0aHNbal0uY3VydmVzWzBdLnBvaW50MS54ICogMTApLCBNYXRoLnJvdW5kKHBhdGhzW2pdLmN1cnZlc1swXS5wb2ludDEueSAqIC0xMCkpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBwYXRoc1tqXS5jdXJ2ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjdXJ2ZSA9IHBhdGhzW2pdLmN1cnZlc1tpXTtcblxuICAgICAgdmFyIHgxID0gTWF0aC5yb3VuZChjdXJ2ZS5wb2ludDEueCAqIDEwKTtcbiAgICAgIHZhciB5MSA9IE1hdGgucm91bmQoY3VydmUucG9pbnQxLnkgKiAtMTApO1xuICAgICAgdmFyIHgyID0gTWF0aC5yb3VuZChjdXJ2ZS5wb2ludDIueCAqIDEwKTtcbiAgICAgIHZhciB5MiA9IE1hdGgucm91bmQoY3VydmUucG9pbnQyLnkgKiAtMTApO1xuICAgICAgdmFyIGh4MSA9IGN1cnZlLmhhbmRsZTEueCAqIDEwO1xuICAgICAgdmFyIGh5MSA9IGN1cnZlLmhhbmRsZTEueSAqIC0xMDtcbiAgICAgIHZhciBoeDIgPSBjdXJ2ZS5oYW5kbGUyLnggKiAxMDtcbiAgICAgIHZhciBoeTIgPSBjdXJ2ZS5oYW5kbGUyLnkgKiAtMTA7XG5cbiAgICAgIGlmIChoeDEgKyBoeTEgPT09IDAgJiYgaHgyICsgaHkyID09PSAwKVxuICAgICAgICByZXN1bHRQYXRoLmxpbmVUbyh4MiwgeTIpO1xuICAgICAgZWxzZVxuICAgICAgICByZXN1bHRQYXRoLmN1cnZlVG8oeDEgKyBoeDEsIHkxICsgaHkxLCB4MiArIGh4MiwgeTIgKyBoeTIsIHgyLCB5Mik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFBhdGg7XG59XG5cbkdlbmVyYXRvci5wcm90b3R5cGUuZXhwb3J0T3BlbnR5cGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHZhciBvcGVudHlwZUdseXBocyA9IFtdLFxuICAgIGdseXBoLFxuICAgIHBhdGg7XG5cbiAgLy8gSEFDSzogLm5vdGRlZiBoYXZlIHRvIGJlIGZpcnN0IGRlZmluZWRcbiAgaWYgKHRoaXMuZ2x5cGhzWycubm90ZGVmJ10pIHtcbiAgICBnbHlwaCA9IHRoaXMuZ2x5cGhzWycubm90ZGVmJ107XG4gICAgcGF0aCA9IGRyYXdPcGVudHlwZVBhdGgoZ2x5cGgucGF0aCk7XG5cbiAgICBpZiAocGF0aC5jb21tYW5kcy5sZW5ndGggIT09IDApIHtcbiAgICAgIG9wZW50eXBlR2x5cGhzLnB1c2gobmV3IG9wZW50eXBlLkdseXBoKHtcbiAgICAgICAgbmFtZTogJy5ub3RkZWYnLFxuICAgICAgICB1bmljb2RlOiAwLFxuICAgICAgICBhZHZhbmNlV2lkdGg6IGdseXBoLndpZHRoICogMTAgKyAxMDAsXG4gICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIG5vdGRlZlBhdGggPSBuZXcgb3BlbnR5cGUuUGF0aCgpO1xuICAgIG5vdGRlZlBhdGgubW92ZVRvKDEwMCwgMCk7XG4gICAgbm90ZGVmUGF0aC5saW5lVG8oMTAwLCA3MDApO1xuICAgIG5vdGRlZlBhdGgubGluZVRvKDYwMCwgNzAwKTtcbiAgICBub3RkZWZQYXRoLmxpbmVUbyg2MDAsIDApO1xuICAgIG5vdGRlZlBhdGgubW92ZVRvKDIwMCwgMTAwKTtcbiAgICBub3RkZWZQYXRoLmxpbmVUbyg1MDAsIDEwMCk7XG4gICAgbm90ZGVmUGF0aC5saW5lVG8oNTAwLCA2MDApO1xuICAgIG5vdGRlZlBhdGgubGluZVRvKDIwMCwgNjAwKTtcbiAgICBvcGVudHlwZUdseXBocy5wdXNoKG5ldyBvcGVudHlwZS5HbHlwaCh7XG4gICAgICBuYW1lOiAnLm5vdGRlZicsXG4gICAgICB1bmljb2RlOiAwLFxuICAgICAgYWR2YW5jZVdpZHRoOiA2NTAsXG4gICAgICBwYXRoOiBub3RkZWZQYXRoXG4gICAgfSkpO1xuICB9XG5cbiAgZm9yICh2YXIgeCBpbiB0aGlzLmdseXBocykge1xuICAgIC8vIEhBQ0s6IC5ub3RkZWYgYWxyZWFkeSBkZWZpbmVkXG4gICAgaWYgKHggPT0gJy5ub3RkZWYnKVxuICAgICAgY29udGludWU7XG5cbiAgICBnbHlwaCA9IHRoaXMuZ2x5cGhzW3hdO1xuICAgIHBhdGggPSBkcmF3T3BlbnR5cGVQYXRoKGdseXBoLnBhdGgpO1xuXG4gICAgaWYgKHBhdGguY29tbWFuZHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBvcGVudHlwZUdseXBocy5wdXNoKG5ldyBvcGVudHlwZS5HbHlwaCh7XG4gICAgICAgIG5hbWU6IHRoaXMuYWxwaGFiZXQubmFtZU1hcFtnbHlwaC5uYW1lXSB8fCBnbHlwaC5uYW1lLFxuICAgICAgICB1bmljb2RlOiBnbHlwaC5uYW1lLmNoYXJDb2RlQXQoKSxcbiAgICAgICAgYWR2YW5jZVdpZHRoOiBnbHlwaC53aWR0aCAqIDEwICsgMTAwLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KSk7XG4gICAgfVxuICB9XG4gIG9wZW50eXBlR2x5cGhzLnB1c2gobmV3IG9wZW50eXBlLkdseXBoKHtcbiAgICBuYW1lOiAnc3BhY2UnLFxuICAgIHVuaWNvZGU6IDMyLFxuICAgIGFkdmFuY2VXaWR0aDogdGhpcy5zaXplIC8gdGhpcy5wcm9wb3J0aW9uICogMTAwLFxuICAgIHBhdGg6IG5ldyBvcGVudHlwZS5QYXRoKClcbiAgfSkpO1xuXG4gIHRoaXMuZm9udCA9IG5ldyBvcGVudHlwZS5Gb250KHtcbiAgICBmYW1pbHlOYW1lOiBvcHRpb25zLmZhbWlseU5hbWUgfHwgJ0dseXBoZXJTdGFuZGFydCcsXG4gICAgc3R5bGVOYW1lOiBvcHRpb25zLnN0eWxlTmFtZSB8fCAnTWVkaXVtJyxcbiAgICB1bml0c1BlckVtOiAxMDAwLFxuICAgIGFzY2VuZGVyOiAxMDAwLFxuICAgIGRlc2NlbmRlcjogdGhpcy5kZXNjZW5kZXIgKiAxNTAsXG4gICAgZ2x5cGhzOiBvcGVudHlwZUdseXBoc1xuICB9KTtcblxuICB2YXIgYnVmZmVyID0gdGhpcy5mb250LnRvQXJyYXlCdWZmZXIoKTtcbiAgdmFyIGZvbnQyID0gb3BlbnR5cGUucGFyc2UoYnVmZmVyKTtcblxuICAvL2RlYnVnZ2luZ1xuICBpZiAob3B0aW9ucy5kZWJ1Zykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9udDIuZ2x5cGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZyA9IGZvbnQyLmdseXBocy5nZXQoaSk7XG4gICAgICB2YXIgY3R4ID0gY3JlYXRlR2x5cGhDYW52YXMoZywgMTUwKTtcbiAgICAgIHggPSAyMDtcbiAgICAgIHZhciB5ID0gMTIwO1xuICAgICAgdmFyIGZvbnRTaXplID0gNzI7XG4gICAgICBnLmRyYXcoY3R4LCB4LCB5LCBmb250U2l6ZSk7XG4gICAgICAvLyBnLmRyYXdQb2ludHMoY3R4LCB4LCB5LCBmb250U2l6ZSk7XG4gICAgICBnLmRyYXdNZXRyaWNzKGN0eCwgeCwgeSwgZm9udFNpemUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEZJWE1FOiBkZXBlbmRzIG9uIGRpdiB3aXRoIGlkIGdseXBoc1xuICBmdW5jdGlvbiBjcmVhdGVHbHlwaENhbnZhcyhnbHlwaCwgc2l6ZSkge1xuICAgIHZhciBjYW52YXNJZCwgaHRtbCwgZ2x5cGhzRGl2LCB3cmFwLCBjYW52YXMsIGN0eDtcbiAgICBjYW52YXNJZCA9ICdnbHlwaF8yJyArIGdseXBoLnVuaWNvZGU7XG4gICAgaHRtbCA9ICc8Y2FudmFzIGlkPVwiJyArIGNhbnZhc0lkICsgJ1wiIHdpZHRoPVwiJyArIHNpemUgKyAnXCIgaGVpZ2h0PVwiJyArIHNpemUgKyAnXCI+PC9jYW52YXM+JztcbiAgICBnbHlwaHNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2x5cGhzJyk7XG4gICAgd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB3cmFwLmlubmVySFRNTCA9IGh0bWw7XG4gICAgZ2x5cGhzRGl2LmFwcGVuZENoaWxkKHdyYXApO1xuICAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc0lkKTtcbiAgICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICByZXR1cm4gY3R4O1xuICB9XG59O1xuXG5HZW5lcmF0b3IucHJvdG90eXBlLmRvd25sb2FkID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLmZvbnQpXG4gICAgICB0aGlzLmZvbnQuZG93bmxvYWQoKTtcbiAgZWxzZVxuICAgIGNvbnNvbGUubG9nKCdnZW5lcmF0ZSBmaXJzdCcpO1xufTtcblxuZnVuY3Rpb24gc2lnbih4KSB7XG4gIC8vIDAgPT0gMVxuICByZXR1cm4geCA+PSAwID8gMSA6IC0xO1xufVxuXG5leHBvcnRzLkdlbmVyYXRvciA9IEdlbmVyYXRvcjtcbiIsImZ1bmN0aW9uIEdseXBoKG5hbWUsIHdlaWdodCwgY29udHJhc3QsIHByb3BvcnRpb24pIHtcbiAgdGhpcy5uYW1lID0gbmFtZTtcbiAgdGhpcy53ZWlnaHQgPSB3ZWlnaHQ7XG4gIHRoaXMuY29udHJhc3QgPSBjb250cmFzdDtcbiAgdGhpcy5wcm9wb3J0aW9uID0gcHJvcG9ydGlvbjtcblxuICB0aGlzLnBhdGggPSB1bmRlZmluZWQ7XG4gIHRoaXMud2lkdGggPSAwO1xuICB0aGlzLmhlaWdodCA9IDA7XG59XG5cbkdseXBoLnByb3RvdHlwZS5tZXJnZVNlZ21lbnRzID0gZnVuY3Rpb24oc2VnbWVudHMpIHtcblxuICB2YXIgcmVzdWx0ID0gc2VnbWVudHNbMF0uY2xvbmUoKTtcbiAgZm9yIChpID0gMTsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0ID0gcmVzdWx0LnVuaXRlKHNlZ21lbnRzW2ldKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vL0RFQlVHXG5HbHlwaC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKHgsIHksIGRlYnVnKSB7XG4gIC8vZGVidWdnaW5nXG4gIGlmIChkZWJ1Zykge1xuICAgIG5ldyBQYXRoLkNpcmNsZSh7XG4gICAgICBjZW50ZXI6IFt4LCB5XSxcbiAgICAgIHJhZGl1czogMyxcbiAgICAgIHN0cm9rZUNvbG9yOiAnYmx1ZSdcbiAgICB9KTtcbiAgICBuZXcgUGF0aC5DaXJjbGUoe1xuICAgICAgY2VudGVyOiBbeCArIHRoaXMud2lkdGgsIHldLFxuICAgICAgcmFkaXVzOiAzLFxuICAgICAgc3Ryb2tlQ29sb3I6ICdibHVlJ1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHBhdGggPSB0aGlzLnBhdGguY2xvbmUoKTtcbiAgcGF0aC5wb3NpdGlvbiA9IFt4ICsgcGF0aC5wb3NpdGlvbi54LCB5ICsgcGF0aC5wb3NpdGlvbi55XTtcbiAgcGF0aC5maWxsQ29sb3IgPSAnYmxhY2snO1xuICBwYXRoLnNlbGVjdGVkID0gdHJ1ZTtcbn07XG5cbmV4cG9ydHMuR2x5cGggPSBHbHlwaDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFscGhhYmV0ID0gcmVxdWlyZSgnLi9hbHBoYWJldC5qcycpO1xudmFyIGdlbmVyYXRvciA9IHJlcXVpcmUoJy4vZ2VuZXJhdG9yLmpzJyk7XG52YXIgZ2x5cGggPSByZXF1aXJlKCcuL2dseXBoLmpzJyk7XG5cbmV4cG9ydHMuR2x5cGggPSBnbHlwaC5HbHlwaDtcbmV4cG9ydHMuQWxwaGFiZXQgPSBhbHBoYWJldC5BbHBoYWJldDtcbmV4cG9ydHMuR2VuZXJhdG9yID0gZ2VuZXJhdG9yLkdlbmVyYXRvcjtcbiJdfQ==
