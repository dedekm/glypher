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
      [15 + Math.round(weight / 40), 0],
      [15 + Math.round(weight / 40), 10],
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


  // if (weight < 15 || options.proportion <= 1)
  //   this.glyphs.G.push([8 - Math.round(weight / 10 * options.proportion), xheight]);

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

  var accent = 'acute';
  availableGlyphs = 'aeiouyAEIOUY';
  for (i = 0; i < availableGlyphs.length; i++) {
    this.beforeGenerateGlyph(availableGlyphs[i]);
    if (this.type == 'stroke')
      path = this.generateGlyphWithAccent2(availableGlyphs[i], accent);
    else
      path = this.generateGlyphWithAccent(availableGlyphs[i], accent);
      
    glyph = new plumin.Glyph({
      name: path.name,
      unicode:  path.name,
      advanceWidth: path.width + 100
    });
    glyph.addContour(path.path);
    glyphs.push(glyph);
  }
    
    // FIXME: dcaron tcaron
    accent = 'caron';
    availableGlyphs = 'cenrszCDENRSTZ';
    for (i = 0; i < availableGlyphs.length; i++) {
      this.beforeGenerateGlyph(availableGlyphs[i]);
      if (this.type == 'stroke')
        path = this.generateGlyphWithAccent2(availableGlyphs[i], accent);
      else
        path = this.generateGlyphWithAccent(availableGlyphs[i], accent);
      glyph = new plumin.Glyph({
        name: path.name,
        unicode:  path.name,
        advanceWidth: path.width + 100
      });
      glyph.addContour(path.path);
      glyphs.push(glyph);
    }
  
    accent = 'ring';
    availableGlyphs = 'uU';
    for (i = 0; i < availableGlyphs.length; i++) {
      this.beforeGenerateGlyph(availableGlyphs[i]);
      if (this.type == 'stroke')
        path = this.generateGlyphWithAccent2(availableGlyphs[i], accent);
      else
        path = this.generateGlyphWithAccent(availableGlyphs[i], accent);
      glyph = new plumin.Glyph({
        name: path.name,
        unicode:  path.name,
        advanceWidth: path.width + 100
      });
      glyph.addContour(path.path);
      glyphs.push(glyph);
    }
  
  this.font.addGlyphs(glyphs);
  this.font.updateOTCommands()
    .addToFonts();
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

    if (point1.y + glyph.weight > glyph.height)
      glyph.height = point1.y + glyph.weight;

    // FIXME: add last point
    if (point2.y + glyph.weight > glyph.height)
      glyph.height = point2.y + glyph.weight;

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
  
  // FIXME
  if (name[0] === name[0].toLowerCase()) {
    accentGlyph.path.position.y = 180 + glyph.height;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYWxwaGFiZXQuanMiLCJzcmMvZ2VuZXJhdG9yLmpzIiwic3JjL2dseXBoLmpzIiwic3JjL2dseXBoZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcmdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImZ1bmN0aW9uIEFscGhhYmV0KG9wdGlvbnMpIHtcbiAgeGhlaWdodCA9IG9wdGlvbnMueGhlaWdodCB8fCA3O1xuICBkZXNjZW5kZXIgPSBvcHRpb25zLmRlc2NlbmRlciB8fCAtMztcbiAgYWVoZWlnaHQgPSBvcHRpb25zLmFlaGVpZ2h0IHx8IHhoZWlnaHQgLyAyO1xuICAvLyBGSVhNRVxuICB3ZWlnaHQgPSBvcHRpb25zLndlaWdodCB8fCAyMDtcblxuICB0aGlzLmdseXBocyA9IHtcbiAgICAnLm5vdGRlZic6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMCwgJ2MnXVxuICAgIF0sXG4gICAgYTogW1xuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgYWVoZWlnaHRdLFxuICAgICAgWzEwLCBhZWhlaWdodF1cbiAgICBdLFxuICAgIGI6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgYzogW1xuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIGQ6IFtcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIGU6IFtcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCBhZWhlaWdodF0sXG4gICAgICBbMCwgYWVoZWlnaHRdXG4gICAgXSxcbiAgICBmOiBbXG4gICAgICBbMywgMF0sXG4gICAgICBbMywgMTBdLFxuICAgICAgWzEwLCAxMCwgJ2UnXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIGc6IFtcbiAgICAgIFswLCBkZXNjZW5kZXJdLFxuICAgICAgWzEwLCBkZXNjZW5kZXJdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgIGg6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMCwgJ2UnXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIDBdXG4gICAgXSxcbiAgICBpOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodCwgJ2UnXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgeGhlaWdodCArIDJdXG4gICAgXSxcbiAgICAvL2RvdHRsZXNzIGkgaXMgbmVlZGVkIGZvciBhY2NlbnRlZCBpc1xuICAgICfEsSc6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgajogW1xuICAgICAgWy0yLCBkZXNjZW5kZXJdLFxuICAgICAgWzEsIGRlc2NlbmRlcl0sXG4gICAgICBbMSwgeGhlaWdodCwgJ2UnXSxcbiAgICAgIFsxLCAxMF0sXG4gICAgICBbMSwgeGhlaWdodCArIDJdXG4gICAgXSxcbiAgICBrOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIDAsICdlJ10sXG4gICAgICBbMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzUsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsxMCwgeGhlaWdodCwgJ2UnXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbNSwgeGhlaWdodCAvIDJdLFxuICAgICAgWzEwLCAwXVxuICAgIF0sXG4gICAgbDogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwXVxuICAgIF0sXG4gICAgbTogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMCwgJ2UnXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMjAsIHhoZWlnaHRdLFxuICAgICAgWzIwLCAwXVxuICAgIF0sXG4gICAgbjogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgIG86IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDAsICdjJ11cbiAgICBdLFxuICAgIHA6IFtcbiAgICAgIFswLCBkZXNjZW5kZXJdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF1cbiAgICBdLFxuICAgIHE6IFtcbiAgICAgIFsxMCwgZGVzY2VuZGVyXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdXG4gICAgXSxcbiAgICByOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICBzOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgdDogW1xuICAgICAgLy8gRklYTUU6IHhoZWlnaHQgKyAyID8/XG4gICAgICBbMywgeGhlaWdodCArIDJdLFxuICAgICAgWzMsIDBdLFxuICAgICAgWzEwLCAwLCAnZSddLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgdTogW1xuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIHY6IFtcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbNSwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsxMCwgeGhlaWdodF1cblxuICAgIF0sXG4gICAgdzogW1xuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFs1LCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzEwLCB4aGVpZ2h0LCAnIGUnXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzE1LCAwXSxcbiAgICAgIFsyMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzIwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgeDogW1xuICAgICAgLy8gWzAsIDBdLFxuICAgICAgLy8gWzEwLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgLy8gWzAsIHhoZWlnaHRdLFxuICAgICAgLy8gWzEwLCAwXVxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHQgLyA2XSxcbiAgICAgIFsxMCwgeGhlaWdodCAtIHhoZWlnaHQgLyA2XSxcbiAgICAgIFsxMCwgeGhlaWdodCwgJ2UnXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHQgLyA2XSxcbiAgICAgIFswLCB4aGVpZ2h0IC0geGhlaWdodCAvIDZdLFxuICAgICAgWzAsIHhoZWlnaHQsICdlJ11cbiAgICBdLFxuICAgIHk6IFtcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHQsICdlJ10sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCBkZXNjZW5kZXJdLFxuICAgICAgWzAsIGRlc2NlbmRlcl1cbiAgICBdLFxuICAgIHo6IFtcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICBBOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbNSwgMTBdLFxuICAgICAgWzEwLCAwLCAnZSddLFxuICAgICAgWzMsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFs3LCB4aGVpZ2h0IC8gMl1cbiAgICBdLFxuICAgIEI6IFtcbiAgICAgIC8vIFswLCB4aGVpZ2h0XSxcbiAgICAgIC8vIFswLCAxMF0sXG4gICAgICAvLyAvLyBGSVhNRTogc2hvdWxkIGRlcGVuZCBvbiBmb250IHdlaWdodFxuICAgICAgLy8gWzksIDEwXSxcbiAgICAgIC8vIFs5LCB4aGVpZ2h0XSxcbiAgICAgIC8vIFswLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgLy8gWzAsIDBdLFxuICAgICAgLy8gWzAsIHhoZWlnaHRdLFxuICAgICAgLy8gWzEwLCB4aGVpZ2h0XSxcbiAgICAgIC8vIFsxMCwgMF0sXG4gICAgICAvLyBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbOCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodCwgJ2UnXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdXG4gICAgXSxcbiAgICBDOiBbXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdXG4gICAgXSxcbiAgICBEOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzcsIDEwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIDEwIC0geGhlaWdodF0sXG4gICAgICBbNywgMF0sXG4gICAgICBbMCwgMF1cbiAgICBdLFxuICAgIEU6IFtcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMCwgJ2UnXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIEY6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwLCAnZSddLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgRzogW1xuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIEg6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMCwgJ2UnXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIDEwLCAnZSddLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgSTogW1xuICAgICAgWzUsIDEwXSxcbiAgICAgIFs1LCAwLCAnZSddLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwLCAnZSddLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdXG4gICAgXSxcbiAgICBKOiBbXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodCAvIDJdXG4gICAgXSxcbiAgICBLOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIDAsICdlJ10sXG4gICAgICBbMCwgNV0sXG4gICAgICBbNSwgNV0sXG4gICAgICBbMTAsIDEwLCAnZSddLFxuICAgICAgWzAsIDVdLFxuICAgICAgWzUsIDVdLFxuICAgICAgWzEwLCAwXVxuICAgIF0sXG4gICAgTDogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgIE06IFtcbiAgICAgIC8vIFswLCAwXSxcbiAgICAgIC8vIFswLCAxMF0sXG4gICAgICAvLyBbMTAsIDEwXSxcbiAgICAgIC8vIFsxMCwgeGhlaWdodCAvIDIsICdlJ10sXG4gICAgICAvLyBbMTAsIDEwXSxcbiAgICAgIC8vIFsyMCwgMTBdLFxuICAgICAgLy8gWzIwLCAwXVxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFs1LCAxMF0sXG4gICAgICBbMTAsICgxMCAtIHhoZWlnaHQpIC8gMl0sXG4gICAgICBbMTUsIDEwXSxcbiAgICAgIFsyMCwgMTBdLFxuICAgICAgWzIwLCAwXVxuICAgIF0sXG4gICAgTjogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgKDEwIC0geGhlaWdodCkgLyAyXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIDEwXVxuICAgIF0sXG4gICAgTzogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwLCAnYyddXG4gICAgXSxcbiAgICBQOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICBROiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDAsICdjJ10sXG4gICAgICBbOCwgMF0sXG4gICAgICAvLyAwIC0gY29udHJhc3QgPz8/XG4gICAgICBbOCwgZGVzY2VuZGVyICogMC43NV0sXG4gICAgICBbMTAsIGRlc2NlbmRlciAqIDAuNzVdLFxuICAgIF0sXG4gICAgUjogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzUsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTAsIDBdXG5cbiAgICBdLFxuICAgIFM6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdXG4gICAgXSxcbiAgICBUOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMCwgJ2UnXSxcbiAgICAgIFs1LCAxMF0sXG4gICAgICBbNSwgMF1cbiAgICBdLFxuICAgIFU6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCAxMF1cbiAgICBdLFxuICAgIFY6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzUsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTAsIDEwXVxuICAgIF0sXG4gICAgVzogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbNSwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsxMCwgMTAsICcgZSddLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTUsIDBdLFxuICAgICAgWzIwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMjAsIDEwXVxuXG4gICAgXSxcbiAgICBYOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodCAvIDIgLSAxXSxcbiAgICAgIFsxMCwgMTAgLSB4aGVpZ2h0IC8gMiArIDFdLFxuICAgICAgWzEwLCAxMCwgJ2UnXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyIC0gMV0sXG4gICAgICBbMCwgMTAgLSB4aGVpZ2h0IC8gMiArIDFdLFxuICAgICAgWzAsIDEwLCAnZSddXG4gICAgXSxcbiAgICBZOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIDhdLFxuICAgICAgWzUsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsxMCwgOF0sXG4gICAgICBbMTAsIDEwLCAnZSddLFxuICAgICAgWzUsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFs1LCAwXVxuICAgIF0sXG4gICAgWjogW1xuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzAsIDEwXVxuICAgIF0sXG4gICAgJ8uHJzogW1xuICAgICAgWzAsIDEyICsgKDggLSB4aGVpZ2h0KV0sXG4gICAgICBbMiwgMTJdLFxuICAgICAgWzQsIDEyICsgKDggLSB4aGVpZ2h0KV1cbiAgICBdLFxuICAgICfCtCc6IFtcbiAgICAgIFsyLCAxMl0sXG4gICAgICBbNCwgMTIgKyAoOCAtIHhoZWlnaHQpXVxuICAgIF0sXG4gICAgJ8uaJzogW1xuICAgICAgWzAsIDEyXSxcbiAgICAgIFswLCAxMiArICg4IC0geGhlaWdodCldLFxuICAgICAgWzQsIDEyICsgKDggLSB4aGVpZ2h0KV0sXG4gICAgICBbNCwgMTJdLFxuICAgICAgWzAsIDEyXVxuICAgIF0sXG4gICAgJzAnOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDAsICdjJ11cbiAgICBdLFxuICAgICcxJzogW1xuICAgICAgWzUsIDBdLFxuICAgICAgWzUsIDEwXSxcbiAgICAgIFswLCAxMCwgJ2UnXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgICcyJzogW1xuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFswLCAxMF1cbiAgICBdLFxuICAgICczJzogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzAsIDEwLCAnZSddLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgJzQnOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIDBdXG4gICAgXSxcbiAgICAnNSc6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdXG4gICAgXSxcbiAgICAnNic6IFtcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICAnNyc6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgICc4JzogW1xuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF1cbiAgICBdLFxuICAgICc5JzogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdLFxuICAgICcuJzogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDFdXG4gICAgXSxcbiAgICAnLCc6IFtcbiAgICAgIFswLCAtMl0sXG4gICAgICBbMCwgMV1cbiAgICBdLFxuICAgICc6JzogW1xuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHQgLSAxLCAnZSddLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDFdXG4gICAgXSxcbiAgICAnOyc6IFtcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0IC0gMSwgJ2UnXSxcbiAgICAgIFswLCAtMl0sXG4gICAgICBbMCwgMV1cbiAgICBdLFxuICAgICchJzogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEsICdlJ10sXG4gICAgICBbMCwgM10sXG4gICAgICBbMCwgMTBdXG4gICAgXSxcbiAgICAvLyBGSVhNRTogeGhlaWdodCB4IDNcbiAgICAnPyc6IFtcbiAgICAgIFs0LCAwXSxcbiAgICAgIFs0LCAxLCAnZSddLFxuICAgICAgWzQsIDNdLFxuICAgICAgWzQsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzAsIDEwXSxcbiAgICBdLFxuICAgIC8vaHlwaGVuXG4gICAgJ+KAkCc6IFtcbiAgICAgIFswLCA1XSxcbiAgICAgIFsyLCA1XVxuICAgIF0sXG4gICAgLy9lbmRhc2hcbiAgICAn4oCTJzogW1xuICAgICAgWzAsIDVdLFxuICAgICAgWzEwLCA1XVxuICAgIF0sXG4gICAgLy9lbWRhc2hcbiAgICAn4oCUJzogW1xuICAgICAgWzAsIDVdLFxuICAgICAgWzIwLCA1XVxuICAgIF0sXG4gICAgJysnOiBbXG4gICAgICBbMCwgNV0sXG4gICAgICBbNCwgNSwgJ2UnXSxcbiAgICAgIFsyLCA3XSxcbiAgICAgIFsyLCAzXVxuICAgIF0sXG4gICAgLy9taW51c1xuICAgICctJzogW1xuICAgICAgWzAsIDVdLFxuICAgICAgWzIsIDVdXG4gICAgXSxcbiAgICAnPSc6IFtcbiAgICAgIFswLCA0XSxcbiAgICAgIFsyLCA0LCAnZSddLFxuICAgICAgWzAsIDZdLFxuICAgICAgWzIsIDZdXG4gICAgXSxcbiAgICAnLyc6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFs1LCAxMF1cbiAgICBdLFxuICAgICdAJzogW1xuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTUgKyBNYXRoLnJvdW5kKHdlaWdodCAvIDQwKSwgMF0sXG4gICAgICBbMTUgKyBNYXRoLnJvdW5kKHdlaWdodCAvIDQwKSwgMTBdLFxuICAgICAgWzAsIDEwXSxcbiAgICBdLFxuICAgICcmJzogW1xuICAgICAgWzExLCAxMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzExLCAwXSxcbiAgICAgIFsxMSwgeGhlaWdodCArICgxMCAtIHhoZWlnaHQpIC8gMywgJ2UnXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxNCwgeGhlaWdodF1cbiAgICBdLFxuICAgICcoJzogW1xuICAgICAgWzUsIDEwXSxcbiAgICAgIFswLCA3XSxcbiAgICAgIFswLCAzXSxcbiAgICAgIFs1LCAwXVxuICAgIF0sXG4gICAgJyknOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzUsIDddLFxuICAgICAgWzUsIDNdLFxuICAgICAgWzAsIDBdXG4gICAgXSxcbiAgICAnWyc6IFtcbiAgICAgIFs1LCAxMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzUsIDBdXG4gICAgXSxcbiAgICAnXSc6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbNSwgMTBdLFxuICAgICAgWzUsIDBdLFxuICAgICAgWzAsIDBdXG4gICAgXSxcbiAgICAneyc6IFtcbiAgICAgIFs1LCAxMF0sXG4gICAgICBbMiwgOV0sXG4gICAgICBbMiwgNi41XSxcbiAgICAgIFswLCA1XSxcbiAgICAgIFsyLCAzLjVdLFxuICAgICAgWzIsIDFdLFxuICAgICAgWzUsIDBdXG4gICAgXSxcbiAgICAnfSc6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMywgOV0sXG4gICAgICBbMywgNi41XSxcbiAgICAgIFs1LCA1XSxcbiAgICAgIFszLCAzLjVdLFxuICAgICAgWzMsIDFdLFxuICAgICAgWzAsIDBdXG4gICAgXSxcbiAgICAnPCc6IFtcbiAgICAgIFsxMCwgeGhlaWdodCArIDFdLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyICsgMV0sXG4gICAgICBbMTAsIDFdXG4gICAgXSxcbiAgICAnPic6IFtcbiAgICAgIFswLCB4aGVpZ2h0ICsgMV0sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyICsgMV0sXG4gICAgICBbMCwgMV1cbiAgICBdXG4gIH07XG4gIGlmIChvcHRpb25zLnR5cGUgPT0gJ3N0cm9rZScpIHtcbiAgICB0aGlzLmdseXBoc1snLm5vdGRlZiddID0gW1xuICAgICAgWzAsIDVdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCA1LCAnYyddXG4gICAgXTtcbiAgICB0aGlzLmdseXBocy5vID0gW1xuICAgICAgWzAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyLCAnYyddXG4gICAgXTtcbiAgICB0aGlzLmdseXBocy53ID0gW1xuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFs1LCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzE1LCAwXSxcbiAgICAgIFsyMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzIwLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG4gICAgXTtcbiAgICB0aGlzLmdseXBocy5CID0gW1xuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzgsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHQsICdlJ10sXG4gICAgICBbMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodCAvIDIsICdjJ10sXG4gICAgXTtcbiAgICB0aGlzLmdseXBocy5EID0gW1xuICAgICAgWzAsIDVdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFs3LCAxMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAxMCAtIHhoZWlnaHRdLFxuICAgICAgWzcsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDUsICdjJ10sXG4gICAgXTtcbiAgICAvLyBIQUNLOiBjaGFuZ2UgZ2x5cGggZm9yIGNvbmRlbnNlZCBmb250c1xuICAgIGlmIChvcHRpb25zLnByb3BvcnRpb24gPCAxKSB7XG4gICAgICB0aGlzLmdseXBocy5OID0gW1xuICAgICAgICBbMCwgMF0sXG4gICAgICAgIFswLCAxMF0sXG4gICAgICAgIFsyLCAxMF0sXG4gICAgICAgIFs4LCAwXSxcbiAgICAgICAgWzEwLCAwXSxcbiAgICAgICAgWzEwLCAxMF1cbiAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ2x5cGhzLk4gPSBbXG4gICAgICAgIFswLCAwXSxcbiAgICAgICAgWzAsIDEwLjVdLFxuICAgICAgICBbMTAsIC0wLjVdLFxuICAgICAgICBbMTAsIDEwXVxuICAgICAgXTtcbiAgICB9XG4gICAgdGhpcy5nbHlwaHMuTyA9IFtcbiAgICAgIFswLCA1XSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgNSwgJ2MnXVxuICAgIF07XG4gICAgdGhpcy5nbHlwaHMuUSA9IFtcbiAgICAgIFswLCA1XSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgNSwgJ2UnXSxcbiAgICAgIFs4LCAwXSxcbiAgICAgIC8vIDAgLSBjb250cmFzdCA/Pz9cbiAgICAgIFs4LCBkZXNjZW5kZXIgKiAwLjc1XSxcbiAgICAgIFsxMCwgZGVzY2VuZGVyICogMC43NV0sXG4gICAgXTtcbiAgICB0aGlzLmdseXBocy5SID0gW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzIsIHhoZWlnaHRdLFxuICAgICAgWzUsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTAsIDBdXG4gICAgXTtcbiAgICB0aGlzLmdseXBocy5XID0gW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbNSwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsxNSwgMF0sXG4gICAgICBbMjAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsyMCwgMTAsICdlJ10sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsxMCwgMTBdXG4gICAgXTtcbiAgICB0aGlzLmdseXBoc1snMCddID0gW1xuICAgICAgWzAsIDVdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCA1LCAnYyddXG4gICAgXTtcbiAgICB0aGlzLmdseXBoc1snOCddID0gW1xuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyLCAnYyddXG4gICAgXTtcbiAgfVxuXG5cbiAgLy8gaWYgKHdlaWdodCA8IDE1IHx8IG9wdGlvbnMucHJvcG9ydGlvbiA8PSAxKVxuICAvLyAgIHRoaXMuZ2x5cGhzLkcucHVzaChbOCAtIE1hdGgucm91bmQod2VpZ2h0IC8gMTAgKiBvcHRpb25zLnByb3BvcnRpb24pLCB4aGVpZ2h0XSk7XG5cbiAgdGhpcy5uYW1lTWFwID0ge1xuICAgICfEsSc6ICdkb3RsZXNzaScsXG4gICAgJ8K0JzogJ2FjdXRlJyxcbiAgICAny4cnOiAnY2Fyb24nLFxuICAgICfLmic6ICdyaW5nJyxcbiAgICAnMCc6ICd6ZXJvJyxcbiAgICAnMSc6ICdvbmUnLFxuICAgICcyJzogJ3R3bycsXG4gICAgJzMnOiAndGhyZWUnLFxuICAgICc0JzogJ2ZvdXInLFxuICAgICc1JzogJ2ZpdmUnLFxuICAgICc2JzogJ3NpeCcsXG4gICAgJzcnOiAnc2V2ZW4nLFxuICAgICc4JzogJ2VpZ2h0JyxcbiAgICAnOSc6ICduaW5lJyxcbiAgICAn4oCQJzogJ2h5cGhlbicsXG4gICAgJ+KAkyc6ICdlbmRhc2gnLFxuICAgICfigJQnOiAnZW1kYXNoJyxcbiAgICAnLSc6ICdtaW51cycsXG4gICAgJysnOiAncGx1cycsXG4gICAgJy4nOiAncGVyaW9kJyxcbiAgICAnLCc6ICdjb21tYScsXG4gICAgJzonOiAnY29sb24nLFxuICAgICc7JzogJ3NlbWljb2xvbicsXG4gICAgJyEnOiAnZXhjbGFtJyxcbiAgICAnPyc6ICdxdWVzdGlvbicsXG4gICAgJy8nOiAnc2xhc2gnLFxuICAgICdAJzogJ2F0JyxcbiAgICAnJic6ICdhbXBlcnNhbmQnLFxuICAgICcoJzogJ3BhcmVubGVmdCcsXG4gICAgJyknOiAncGFyZW5yaWdodCcsXG4gICAgJ1snOiAnYnJhY2tldGxlZnQnLFxuICAgICddJzogJ2JyYWNrZXRyaWdodCcsXG4gICAgJ3snOiAnYnJhY2VsZWZ0JyxcbiAgICAnfSc6ICdicmFjZXJpZ2h0JyxcbiAgICAnPCc6ICdsZXNzJyxcbiAgICAnPSc6ICdlcXVhbCcsXG4gICAgJz4nOiAnZ3JlYXRlcidcbiAgfTtcbn1cbkFscGhhYmV0LnByb3RvdHlwZS5tYXhIZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG1heCA9IDA7XG4gIGZvciAodmFyIGtleSBpbiB0aGlzLmdseXBocykge1xuICAgIGlmICh0aGlzLmdseXBoc1trZXldKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ2x5cGhzW2tleV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZ2x5cGhzW2tleV1baV1bMV0gPiBtYXgpXG4gICAgICAgICAgbWF4ID0gdGhpcy5nbHlwaHNba2V5XVtpXVsxXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWF4O1xufTtcblxuQWxwaGFiZXQucHJvdG90eXBlLm1heFdpZHRoID0gZnVuY3Rpb24oKSB7XG4gIHZhciBtYXggPSAwO1xuICBmb3IgKHZhciBrZXkgaW4gdGhpcy5nbHlwaHMpIHtcbiAgICBpZiAodGhpcy5nbHlwaHNba2V5XSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmdseXBoc1trZXldLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmdseXBoc1trZXldW2ldWzBdID4gbWF4KVxuICAgICAgICAgIG1heCA9IHRoaXMuZ2x5cGhzW2tleV1baV1bMF07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1heDtcbn07XG5cbkFscGhhYmV0LnByb3RvdHlwZS5hdmFpbGFibGVHbHlwaHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZ2x5cGhzKTtcbn07XG5cbmV4cG9ydHMuQWxwaGFiZXQgPSBBbHBoYWJldDtcbiIsImZ1bmN0aW9uIEdlbmVyYXRvcihvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB0aGlzLnR5cGUgPSBvcHRpb25zLnR5cGUgfHwgJ2JydXNoJztcbiAgdGhpcy5wcm9wb3J0aW9uID0gb3B0aW9ucy5wcm9wb3J0aW9uIHx8IChvcHRpb25zLmhlaWdodCAvIG9wdGlvbnMud2lkdGgpIHx8IDEuNTtcblxuICB0aGlzLndlaWdodCA9IG9wdGlvbnMud2VpZ2h0IHx8ICh0aGlzLnR5cGUgPT0gJ2JydXNoJyA/IDIwMCA6IDUwKTtcbiAgdGhpcy5jb250cmFzdCA9IHRoaXMudHlwZSA9PSAnYnJ1c2gnID8gKG9wdGlvbnMuY29udHJhc3QgfHwgNTApIDogdGhpcy53ZWlnaHQ7XG4gIHRoaXMuZGVzY2VuZGVyID0gb3B0aW9ucy5kZXNjZW5kZXIgfHwgLTM7XG4gIHRoaXMueHNoaWZ0ID0gb3B0aW9ucy54c2hpZnQgfHwgMDtcbiAgdGhpcy55c2hpZnQgPSBvcHRpb25zLnlzaGlmdCB8fCAwO1xuICB0aGlzLml0YWxpYyA9IG9wdGlvbnMuaXRhbGljIHx8IDA7XG4gIHRoaXMuc2VnbWVudFJlZHVjdGlvbiA9IG9wdGlvbnMuc2VnbWVudFJlZHVjdGlvbjtcbiAgdGhpcy5zbW9vdGggPSBvcHRpb25zLnNtb290aDtcblxuICB0aGlzLnNpemUgPSA4MDtcblxuICB2YXIgYWxwaGFiZXRPcHRpb25zID0ge1xuICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICB3ZWlnaHQ6IHRoaXMud2VpZ2h0LFxuICAgIGNvbnRyYXN0OiB0aGlzLmNvbnRyYXN0LFxuICAgIGRlc2NlbmRlcjogdGhpcy5kZXNjZW5kZXIsXG4gICAgcHJvcG9ydGlvbjogdGhpcy5wcm9wb3J0aW9uLFxuICAgIHhoZWlnaHQ6IG9wdGlvbnMueGhlaWdodCB8fCA3XG4gIH07XG5cbiAgdGhpcy5hbHBoYWJldCA9IG9wdGlvbnMuYWxwaGFiZXQgfHwgbmV3IGdseXBoZXIuQWxwaGFiZXQoYWxwaGFiZXRPcHRpb25zKTtcbiAgdGhpcy5nbHlwaHMgPSBbXTtcbiAgdGhpcy5vcGVudHlwZSA9IHVuZGVmaW5lZDtcblxuICAvLyBTZXR1cCBwYXBlci5qcyBieSBwcm92aWRpbmcgYSBjYW52YXMgZWxlbWVudFxuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgcGx1bWluLnNldHVwKGNhbnZhcyk7XG59XG5cbkdlbmVyYXRvci5wcm90b3R5cGUuZ2VuZXJhdGUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5mb250ID0gbmV3IHBsdW1pbi5Gb250KHtcbiAgICBmYW1pbHlOYW1lOiAnRGVtbycsXG4gICAgYXNjZW5kZXI6IDEwMDAsXG4gICAgZGVzY2VuZGVyOiAtMjAwXG4gIH0pO1xuXG4gIHZhciBhdmFpbGFibGVHbHlwaHMgPSB0aGlzLmFscGhhYmV0LmF2YWlsYWJsZUdseXBocygpLFxuICAgIGdseXBocyA9IFtdLFxuICAgIHBhdGg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhdmFpbGFibGVHbHlwaHMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBGSVhNRTogLm5vdGRlZiBjb2xsaWRlIHdpdGggJy4nXG4gICAgaWYoYXZhaWxhYmxlR2x5cGhzW2ldICE9ICcubm90ZGVmJyl7XG4gICAgICB0aGlzLmJlZm9yZUdlbmVyYXRlR2x5cGgoYXZhaWxhYmxlR2x5cGhzW2ldKTtcbiAgICAgIGlmICh0aGlzLnR5cGUgPT0gJ3N0cm9rZScpXG4gICAgICAgIHBhdGggPSB0aGlzLmdlbmVyYXRlR2x5cGgyKGF2YWlsYWJsZUdseXBoc1tpXSwgdGhpcy5hbHBoYWJldC5nbHlwaHNbYXZhaWxhYmxlR2x5cGhzW2ldXSk7XG4gICAgICBlbHNlXG4gICAgICAgIHBhdGggPSB0aGlzLmdlbmVyYXRlR2x5cGgoYXZhaWxhYmxlR2x5cGhzW2ldLCB0aGlzLmFscGhhYmV0LmdseXBoc1thdmFpbGFibGVHbHlwaHNbaV1dKTtcbiAgICAgIHZhciBnbHlwaCA9IG5ldyBwbHVtaW4uR2x5cGgoe1xuICAgICAgICBuYW1lOiB0aGlzLmFscGhhYmV0Lm5hbWVNYXBbYXZhaWxhYmxlR2x5cGhzW2ldXSB8fCBhdmFpbGFibGVHbHlwaHNbaV0sXG4gICAgICAgIHVuaWNvZGU6IGF2YWlsYWJsZUdseXBoc1tpXSxcbiAgICAgICAgYWR2YW5jZVdpZHRoOiBwYXRoLndpZHRoICsgMTAwXG4gICAgICB9KTtcbiAgICAgIGdseXBoLmFkZENvbnRvdXIocGF0aC5wYXRoKTtcbiAgICAgIGdseXBocy5wdXNoKGdseXBoKTtcbiAgICB9XG4gIH1cblxuICB2YXIgYWNjZW50ID0gJ2FjdXRlJztcbiAgYXZhaWxhYmxlR2x5cGhzID0gJ2FlaW91eUFFSU9VWSc7XG4gIGZvciAoaSA9IDA7IGkgPCBhdmFpbGFibGVHbHlwaHMubGVuZ3RoOyBpKyspIHtcbiAgICB0aGlzLmJlZm9yZUdlbmVyYXRlR2x5cGgoYXZhaWxhYmxlR2x5cGhzW2ldKTtcbiAgICBpZiAodGhpcy50eXBlID09ICdzdHJva2UnKVxuICAgICAgcGF0aCA9IHRoaXMuZ2VuZXJhdGVHbHlwaFdpdGhBY2NlbnQyKGF2YWlsYWJsZUdseXBoc1tpXSwgYWNjZW50KTtcbiAgICBlbHNlXG4gICAgICBwYXRoID0gdGhpcy5nZW5lcmF0ZUdseXBoV2l0aEFjY2VudChhdmFpbGFibGVHbHlwaHNbaV0sIGFjY2VudCk7XG4gICAgICBcbiAgICBnbHlwaCA9IG5ldyBwbHVtaW4uR2x5cGgoe1xuICAgICAgbmFtZTogcGF0aC5uYW1lLFxuICAgICAgdW5pY29kZTogIHBhdGgubmFtZSxcbiAgICAgIGFkdmFuY2VXaWR0aDogcGF0aC53aWR0aCArIDEwMFxuICAgIH0pO1xuICAgIGdseXBoLmFkZENvbnRvdXIocGF0aC5wYXRoKTtcbiAgICBnbHlwaHMucHVzaChnbHlwaCk7XG4gIH1cbiAgICBcbiAgICAvLyBGSVhNRTogZGNhcm9uIHRjYXJvblxuICAgIGFjY2VudCA9ICdjYXJvbic7XG4gICAgYXZhaWxhYmxlR2x5cGhzID0gJ2NlbnJzekNERU5SU1RaJztcbiAgICBmb3IgKGkgPSAwOyBpIDwgYXZhaWxhYmxlR2x5cGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmJlZm9yZUdlbmVyYXRlR2x5cGgoYXZhaWxhYmxlR2x5cGhzW2ldKTtcbiAgICAgIGlmICh0aGlzLnR5cGUgPT0gJ3N0cm9rZScpXG4gICAgICAgIHBhdGggPSB0aGlzLmdlbmVyYXRlR2x5cGhXaXRoQWNjZW50MihhdmFpbGFibGVHbHlwaHNbaV0sIGFjY2VudCk7XG4gICAgICBlbHNlXG4gICAgICAgIHBhdGggPSB0aGlzLmdlbmVyYXRlR2x5cGhXaXRoQWNjZW50KGF2YWlsYWJsZUdseXBoc1tpXSwgYWNjZW50KTtcbiAgICAgIGdseXBoID0gbmV3IHBsdW1pbi5HbHlwaCh7XG4gICAgICAgIG5hbWU6IHBhdGgubmFtZSxcbiAgICAgICAgdW5pY29kZTogIHBhdGgubmFtZSxcbiAgICAgICAgYWR2YW5jZVdpZHRoOiBwYXRoLndpZHRoICsgMTAwXG4gICAgICB9KTtcbiAgICAgIGdseXBoLmFkZENvbnRvdXIocGF0aC5wYXRoKTtcbiAgICAgIGdseXBocy5wdXNoKGdseXBoKTtcbiAgICB9XG4gIFxuICAgIGFjY2VudCA9ICdyaW5nJztcbiAgICBhdmFpbGFibGVHbHlwaHMgPSAndVUnO1xuICAgIGZvciAoaSA9IDA7IGkgPCBhdmFpbGFibGVHbHlwaHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuYmVmb3JlR2VuZXJhdGVHbHlwaChhdmFpbGFibGVHbHlwaHNbaV0pO1xuICAgICAgaWYgKHRoaXMudHlwZSA9PSAnc3Ryb2tlJylcbiAgICAgICAgcGF0aCA9IHRoaXMuZ2VuZXJhdGVHbHlwaFdpdGhBY2NlbnQyKGF2YWlsYWJsZUdseXBoc1tpXSwgYWNjZW50KTtcbiAgICAgIGVsc2VcbiAgICAgICAgcGF0aCA9IHRoaXMuZ2VuZXJhdGVHbHlwaFdpdGhBY2NlbnQoYXZhaWxhYmxlR2x5cGhzW2ldLCBhY2NlbnQpO1xuICAgICAgZ2x5cGggPSBuZXcgcGx1bWluLkdseXBoKHtcbiAgICAgICAgbmFtZTogcGF0aC5uYW1lLFxuICAgICAgICB1bmljb2RlOiAgcGF0aC5uYW1lLFxuICAgICAgICBhZHZhbmNlV2lkdGg6IHBhdGgud2lkdGggKyAxMDBcbiAgICAgIH0pO1xuICAgICAgZ2x5cGguYWRkQ29udG91cihwYXRoLnBhdGgpO1xuICAgICAgZ2x5cGhzLnB1c2goZ2x5cGgpO1xuICAgIH1cbiAgXG4gIHRoaXMuZm9udC5hZGRHbHlwaHMoZ2x5cGhzKTtcbiAgdGhpcy5mb250LnVwZGF0ZU9UQ29tbWFuZHMoKVxuICAgIC5hZGRUb0ZvbnRzKCk7XG59O1xuXG5HZW5lcmF0b3IucHJvdG90eXBlLmdldEdseXBoID0gZnVuY3Rpb24obmFtZSkge1xuICBpZiAodGhpcy5nbHlwaHNbbmFtZV0pIHtcbiAgICByZXR1cm4gdGhpcy5nbHlwaHNbbmFtZV07XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ2dseXBoICcgKyBuYW1lICsgJyBub3QgZGVmaW5lZCcpO1xuICAgIHJldHVybiB0aGlzLmdseXBoc1snLm5vdGRlZiddO1xuICB9XG59O1xuXG5HZW5lcmF0b3IucHJvdG90eXBlLmFkanVzdFBvaW50ID0gZnVuY3Rpb24ocG9pbnQpIHtcbiAgdmFyIHAgPSBuZXcgcGx1bWluLlBvaW50KHBvaW50KVxuICAgICAgICAubXVsdGlwbHkoW3RoaXMuc2l6ZSAvIHRoaXMucHJvcG9ydGlvbiwgdGhpcy5zaXplIC0gKHRoaXMuY29udHJhc3QgKiAyIC8gdGhpcy5zaXplKV0pXG4gICAgICAgIC5hZGQodGhpcy53ZWlnaHQsIHRoaXMuY29udHJhc3QpXG4gICAgICAgIC5hZGQodGhpcy54c2hpZnQsIHRoaXMueXNoaWZ0KTtcbiAgICBwID0gcC5hZGQocC55ICogdGhpcy5pdGFsaWMsIDApO1xuICAgIHJldHVybiBwO1xufTtcblxuR2VuZXJhdG9yLnByb3RvdHlwZS5kcmF3RG90ID0gZnVuY3Rpb24ocG9pbnQsIGJveCkge1xuICB2YXIgcDEgPSB0aGlzLmFkanVzdFBvaW50KHBvaW50KTtcbiAgcmV0dXJuIG5ldyBwbHVtaW4uUGF0aC5SZWN0YW5nbGUocDEuc3VidHJhY3QoYm94KSwgcDEuYWRkKGJveCkpO1xufTtcblxuR2VuZXJhdG9yLnByb3RvdHlwZS5iZWZvcmVHZW5lcmF0ZUdseXBoID0gZnVuY3Rpb24obmFtZSkge1xuXG59O1xuXG5HZW5lcmF0b3IucHJvdG90eXBlLmFmdGVyR2VuZXJhdGVHbHlwaCA9IGZ1bmN0aW9uKGdseXBoKSB7XG5cbn07XG5cbkdlbmVyYXRvci5wcm90b3R5cGUuZ2VuZXJhdGVHbHlwaCA9IGZ1bmN0aW9uKG5hbWUsIHBvaW50cykge1xuICBwb2ludHMgPSBwb2ludHMgfHwgdGhpcy5hbHBoYWJldC5nbHlwaHNbbmFtZV07XG4gIHZhciBnbHlwaCA9IG5ldyBnbHlwaGVyLkdseXBoKG5hbWUsIHRoaXMud2VpZ2h0LCB0aGlzLmNvbnRyYXN0LCB0aGlzLnByb3BvcnRpb24pO1xuXG4gIHZhciBzZWdtZW50cyA9IFtdO1xuICB2YXIgYm94ID0gbmV3IHBsdW1pbi5Qb2ludChnbHlwaC53ZWlnaHQsIGdseXBoLmNvbnRyYXN0KTtcbiAgdmFyIHN0YXJ0UG9pbnQ7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAvL1dJUFxuICAgIGlmIChwb2ludHNbaV1bMl0gPT0gJ2RvdCcpIHtcbiAgICAgIHNlZ21lbnRzLnB1c2godGhpcy5kcmF3RG90KHBvaW50c1tpXSwgYm94KSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoaSA+PSBwb2ludHMubGVuZ3RoIC0gMSlcbiAgICAgIGJyZWFrO1xuXG4gICAgdmFyIHBhdGggPSBuZXcgcGx1bWluLlBhdGgoKTtcblxuICAgIHZhciBwMSA9IHRoaXMuYWRqdXN0UG9pbnQocG9pbnRzW2ldKTtcbiAgICB2YXIgcDIgPSB0aGlzLmFkanVzdFBvaW50KHBvaW50c1tpICsgMV0pO1xuXG4gICAgaWYgKHBvaW50c1tpICsgMV1bMl0gPT0gJ2MnKSB7XG4gICAgICBwMiA9IHN0YXJ0UG9pbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHAyID0gdGhpcy5hZGp1c3RQb2ludChwb2ludHNbaSArIDFdKTtcbiAgICAgIHN0YXJ0UG9pbnQgPSBzdGFydFBvaW50IHx8IHAxO1xuICAgIH1cblxuICAgIHZhciB2ZWN0b3IgPSBwMi5zdWJ0cmFjdChwMSk7XG4gICAgdmFyIHggPSBzaWduKHZlY3Rvci54KTtcbiAgICB2YXIgeSA9IHNpZ24odmVjdG9yLnkpO1xuXG4gICAgLy8gV0lQXG4gICAgaWYgKHRoaXMuc2VnbWVudFJlZHVjdGlvbikge1xuICAgICAgdmVjdG9yLmxlbmd0aCAtPSB0aGlzLnNlZ21lbnRSZWR1Y3Rpb24gKiA1O1xuICAgICAgcDIgPSBwMS5hZGQodmVjdG9yKTtcbiAgICAgIHZhciB2ZWN0b3IyID0gcDEuc3VidHJhY3QocDIpO1xuICAgICAgdmVjdG9yMi5sZW5ndGggLT0gdGhpcy5zZWdtZW50UmVkdWN0aW9uICogNTtcbiAgICAgIHAxID0gcDIuYWRkKHZlY3RvcjIpO1xuICAgIH1cblxuICAgIHZhciBiO1xuICAgIGlmIChpICE9PSAwICYmIHBvaW50c1tpIC0gMV1bMl0gIT09ICdlJyB8fCB2ZWN0b3IuYW5nbGUgJSA5MCA9PT0gMCkge1xuICAgICAgYiA9IHAxLmFkZChib3gubXVsdGlwbHkoW3ggKiAtMSwgeV0pKTtcbiAgICAgIC8vIGIgPSBiLmFkZChiLnkgKiAtMSAqIHRoaXMuaXRhbGljLCAwKTtcbiAgICAgIHBhdGguYWRkKGIpO1xuICAgIH1cblxuICAgIGIgPSBwMS5hZGQoYm94Lm11bHRpcGx5KFt4ICogLTEsIHkgKiAtMV0pKTtcbiAgICAvLyBiID0gYi5hZGQoYi55ICogLTEgKiB0aGlzLml0YWxpYywgMCk7XG4gICAgLy8gaWYgKGkgPT09IDAgfHwgcG9pbnRzW2kgLSAxXVsyXSA9PT0gJ2UnICYmIHZlY3Rvci5hbmdsZSAlIDkwICE9PSAwKVxuICAgIC8vICAgYiA9IGIuYWRkKC0yMCwgMCk7XG4gICAgcGF0aC5hZGQoYik7XG5cbiAgICBiID0gcDEuYWRkKGJveC5tdWx0aXBseShbeCwgeSAqIC0xXSkpO1xuICAgIC8vIGIgPSBiLmFkZChiLnkgKiAtMSAqIHRoaXMuaXRhbGljLCAwKTtcbiAgICBwYXRoLmFkZChiKTtcblxuICAgIGlmIChpICsgMSAhPT0gcG9pbnRzLmxlbmd0aCAtIDEgJiYgcG9pbnRzW2kgKyAxXVsyXSAhPT0gJ2UnIHx8IHZlY3Rvci5hbmdsZSAlIDkwID09PSAwKSB7XG4gICAgICBiID0gcDIuYWRkKGJveC5tdWx0aXBseShbeCwgeSAqIC0xXSkpO1xuICAgICAgLy8gYiA9IGIuYWRkKGIueSAqIC0xICogdGhpcy5pdGFsaWMsIDApO1xuICAgICAgcGF0aC5hZGQoYik7XG4gICAgfVxuXG4gICAgYiA9IHAyLmFkZChib3gubXVsdGlwbHkoW3gsIHldKSk7XG4gICAgYiA9IGIuYWRkKGIueSAqIC0xICogdGhpcy5pdGFsaWMsIDApO1xuICAgIC8vIGlmIChpICsgMSAhPT0gcG9pbnRzLmxlbmd0aCAtIDEgJiYgcG9pbnRzW2kgKyAxXVsyXSAhPT0gJ2UnIHx8IHZlY3Rvci5hbmdsZSAlIDkwID09PSAwKSB7XG4gICAgLy8gfWVsc2V7XG4gICAgLy8gICB2YXIgdiA9IHAxLnN1YnRyYWN0KHAyKTtcbiAgICAvLyAgIGIgPSBiLmFkZCgodGhpcy5jb250cmFzdCoyKS9NYXRoLnRhbih2LmFuZ2xlSW5SYWRpYW5zKSAqIC0xLCAwKTtcbiAgICAvLyB9XG4gICAgcGF0aC5hZGQoYik7XG5cbiAgICBiID0gcDIuYWRkKGJveC5tdWx0aXBseShbeCAqIC0xLCB5XSkpO1xuICAgIC8vIGIgPSBiLmFkZChiLnkgKiAtMSAqIHRoaXMuaXRhbGljLCAwKTtcbiAgICBwYXRoLmFkZChiKTtcblxuXG4gICAgLy8gRklYTUU6IHJvdW5kIGVkZ2VzXG4gICAgLy8gdmFyIGMgPSBuZXcgUGF0aC5DaXJjbGUoe1xuICAgIC8vICAgY2VudGVyOiBbMCwgMF0sXG4gICAgLy8gICByYWRpdXM6IHRoaXMud2VpZ2h0XG4gICAgLy8gfSk7XG4gICAgLy9cbiAgICAvLyBjLnJvdGF0ZSh2ZWN0b3IuYW5nbGUpO1xuICAgIC8vIGMucG9zaXRpb24gPSBwMTtcbiAgICAvLyBwYXRoLmFkZChjLnNlZ21lbnRzWzNdKTtcbiAgICAvLyBwYXRoLmFkZChjLnNlZ21lbnRzWzBdKTtcbiAgICAvLyBwYXRoLmFkZChjLnNlZ21lbnRzWzFdKTtcbiAgICAvL1xuICAgIC8vIGMucG9zaXRpb24gPSBwMjtcbiAgICAvLyBwYXRoLmFkZChjLnNlZ21lbnRzWzFdKTtcbiAgICAvLyBwYXRoLmFkZChjLnNlZ21lbnRzWzJdKTtcbiAgICAvLyBwYXRoLmFkZChjLnNlZ21lbnRzWzNdKTtcblxuICAgIHBhdGgucmVkdWNlKCk7XG4gICAgcGF0aC5jbG9zZWQgPSB0cnVlO1xuXG4gICAgc2VnbWVudHMucHVzaChwYXRoKTtcblxuICAgIGlmIChwMS54ICsgZ2x5cGgud2VpZ2h0ID4gZ2x5cGgud2lkdGgpXG4gICAgICBnbHlwaC53aWR0aCA9IHAxLnggKyBnbHlwaC53ZWlnaHQ7XG5cbiAgICAvLyBGSVhNRTogYWRkIGxhc3QgcG9pbnRcbiAgICBpZiAocDIueCArIGdseXBoLndlaWdodCA+IGdseXBoLndpZHRoKVxuICAgICAgZ2x5cGgud2lkdGggPSBwMi54ICsgZ2x5cGgud2VpZ2h0O1xuXG4gICAgaWYgKHAxLnkgKyBnbHlwaC5jb250cmFzdCA8IGdseXBoLmhlaWdodClcbiAgICAgIGdseXBoLmhlaWdodCA9IHAxLnkgKyBnbHlwaC5jb250cmFzdDtcblxuICAgIC8vIEZJWE1FOiBhZGQgbGFzdCBwb2ludFxuICAgIGlmIChwMi55ICsgZ2x5cGguY29udHJhc3QgPCBnbHlwaC5oZWlnaHQpXG4gICAgICBnbHlwaC5oZWlnaHQgPSBwMi55ICsgZ2x5cGguY29udHJhc3Q7XG5cbiAgICBpZiAocG9pbnRzW2kgKyAxXVsyXSA9PSAnZScgfHwgcG9pbnRzW2kgKyAxXVsyXSA9PSAnYycpIHtcbiAgICAgIGkrKztcbiAgICAgIHN0YXJ0UG9pbnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIGdseXBoLnBhdGggPSBnbHlwaC5tZXJnZVNlZ21lbnRzKHNlZ21lbnRzKTtcbiAgZ2x5cGgucGF0aC5yZWR1Y2UoKTtcblxuICBpZiAodGhpcy5zbW9vdGgpXG4gICAgZ2x5cGgucGF0aC5zbW9vdGgoe1xuICAgICAgdHlwZTogJ2NvbnRpbnVvdXMnXG4gICAgfSk7XG5cbiAgcmV0dXJuIGdseXBoO1xufTtcblxuLy9XSVBcbkdlbmVyYXRvci5wcm90b3R5cGUuZ2VuZXJhdGVHbHlwaDIgPSBmdW5jdGlvbihuYW1lLCBwb2ludHMpIHtcbiAgcG9pbnRzID0gcG9pbnRzIHx8IHRoaXMuYWxwaGFiZXQuZ2x5cGhzW25hbWVdO1xuICB2YXIgZ2x5cGggPSBuZXcgZ2x5cGhlci5HbHlwaChuYW1lLCB0aGlzLndlaWdodCwgdGhpcy5jb250cmFzdCwgdGhpcy5wcm9wb3J0aW9uKTtcblxuICB2YXIgbmV4dEFuZ2xlLFxuICAgIGNvcm5lcixcbiAgICBzZWdtZW50cyA9IFtcbiAgICBdLFxuICAgIHBhdGhzID0gW10sXG4gICAgY29ybmVyUG9pbnQzLFxuICAgIHN0YXJ0UG9pbnQ7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAvL1dJUFxuICAgIGlmIChwb2ludHNbaV1bMl0gPT0gJ2RvdCcpIHtcbiAgICAgIHNlZ21lbnRzLnB1c2godGhpcy5hZGp1c3RQb2ludChwb2ludHNbaV0pLmFkZCh0aGlzLndlaWdodCwgdGhpcy53ZWlnaHQgKiAtMSkpO1xuICAgICAgc2VnbWVudHMucHVzaCh0aGlzLmFkanVzdFBvaW50KHBvaW50c1tpXSkuYWRkKHRoaXMud2VpZ2h0ICogLTEsIHRoaXMud2VpZ2h0ICogLTEpKTtcbiAgICAgIHNlZ21lbnRzLnB1c2godGhpcy5hZGp1c3RQb2ludChwb2ludHNbaV0pLmFkZCh0aGlzLndlaWdodCAqIC0xLCB0aGlzLndlaWdodCkpO1xuICAgICAgc2VnbWVudHMucHVzaCh0aGlzLmFkanVzdFBvaW50KHBvaW50c1tpXSkuYWRkKHRoaXMud2VpZ2h0KSk7XG4gICAgICBzZWdtZW50cy5wdXNoKFtdKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChpID49IHBvaW50cy5sZW5ndGggLSAxKVxuICAgICAgYnJlYWs7XG5cbiAgICB2YXIgcG9pbnQxID0gdGhpcy5hZGp1c3RQb2ludChwb2ludHNbaV0pO1xuICAgIHZhciBwb2ludDIgPSB0aGlzLmFkanVzdFBvaW50KHBvaW50c1tpICsgMV0pO1xuXG4gICAgaWYgKHBvaW50c1tpICsgMV1bMl0gPT0gJ2MnKSB7XG4gICAgICBwb2ludDIgPSB0aGlzLmFkanVzdFBvaW50KHBvaW50c1tzdGFydFBvaW50IC0gMV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwb2ludDIgPSB0aGlzLmFkanVzdFBvaW50KHBvaW50c1tpICsgMV0pO1xuICAgICAgc3RhcnRQb2ludCA9IHN0YXJ0UG9pbnQgfHwgaTtcbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNBbmdsZSA9IG5leHRBbmdsZTtcbiAgICB2YXIgaGVscFBhdGggPSBuZXcgcGx1bWluLlBhdGgoKTtcblxuICAgIHZhciB2ZWN0b3IxID0gcG9pbnQyLnN1YnRyYWN0KHBvaW50MSk7XG4gICAgaWYgKHBvaW50c1tpICsgMl0pIHtcbiAgICAgIHZhciB2ZWN0b3IyID0gdGhpcy5hZGp1c3RQb2ludChwb2ludHNbaSArIDJdKS5zdWJ0cmFjdChwb2ludDIpO1xuICAgICAgbmV4dEFuZ2xlID0gdmVjdG9yMS5yb3RhdGUoMTgwKS5nZXREaXJlY3RlZEFuZ2xlKHZlY3RvcjIpO1xuICAgIH1cbiAgICB2YXIgcDEsIHAyLCBwMywgcDQ7XG4gICAgaWYgKHBvaW50c1tpIC0gMV0gJiYgcG9pbnRzW2kgLSAxXVsyXSA9PSAnZScgfHwgaSA9PT0gMCkge1xuICAgICAgcDEgPSBwb2ludDEuYWRkKHRoaXMud2VpZ2h0ICogLTEsIHRoaXMud2VpZ2h0KS5yb3RhdGUodmVjdG9yMS5hbmdsZSArIDkwLCBwb2ludDEpO1xuICAgICAgcDIgPSBwb2ludDEuYWRkKHRoaXMud2VpZ2h0LCB0aGlzLndlaWdodCkucm90YXRlKHZlY3RvcjEuYW5nbGUgKyA5MCwgcG9pbnQxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcDEgPSBwb2ludDEuYWRkKHRoaXMud2VpZ2h0LCAwKS5yb3RhdGUodmVjdG9yMS5hbmdsZSAtIDkwLCBwb2ludDEpO1xuICAgICAgcDIgPSBwb2ludDEuYWRkKHRoaXMud2VpZ2h0LCAwKS5yb3RhdGUodmVjdG9yMS5hbmdsZSArIDkwLCBwb2ludDEpO1xuICAgIH1cblxuICAgIGlmIChwb2ludHNbaSArIDFdWzJdID09ICdlJyB8fCBpID09PSBwb2ludHMubGVuZ3RoIC0gMikge1xuICAgICAgcDMgPSBwb2ludDIuYWRkKHRoaXMud2VpZ2h0ICogLTEsIHRoaXMud2VpZ2h0KS5yb3RhdGUodmVjdG9yMS5hbmdsZSAtIDkwLCBwb2ludDIpO1xuICAgICAgcDQgPSBwb2ludDIuYWRkKHRoaXMud2VpZ2h0LCB0aGlzLndlaWdodCkucm90YXRlKHZlY3RvcjEuYW5nbGUgLSA5MCwgcG9pbnQyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcDMgPSBwb2ludDIuYWRkKHRoaXMud2VpZ2h0LCAwKS5yb3RhdGUodmVjdG9yMS5hbmdsZSArIDkwLCBwb2ludDIpO1xuICAgICAgcDQgPSBwb2ludDIuYWRkKHRoaXMud2VpZ2h0LCAwKS5yb3RhdGUodmVjdG9yMS5hbmdsZSAtIDkwLCBwb2ludDIpO1xuICAgIH1cblxuICAgIHZhciBjb3JuZXJQb2ludCxcbiAgICAgIGNvcm5lclBvaW50MixcbiAgICAgIGhlbHBQb2ludDtcblxuICAgIGlmIChwb2ludHNbaSAtIDFdICYmIHBvaW50c1tpXVsyXSAhPSAnZScgJiYgcG9pbnRzW2kgLSAxXVsyXSAhPSAnZScgJiYgcHJldmlvdXNBbmdsZSkge1xuICAgICAgdmFyIHByZXZpb3VzVmVjdG9yID0gdGhpcy5hZGp1c3RQb2ludChwb2ludHNbaSAtIDFdKS5zdWJ0cmFjdChwb2ludDEpO1xuICAgICAgaWYgKHByZXZpb3VzQW5nbGUgPCAwKSB7XG4gICAgICAgIGNvcm5lclBvaW50ID0gcDE7XG4gICAgICAgIHNlZ21lbnRzLnNwbGljZSgwLCAwLCBtYWtlQ29ybmVyKGNvcm5lclBvaW50MywgcDIsIHByZXZpb3VzVmVjdG9yLCB2ZWN0b3IxKSk7XG4gICAgICAgIHNlZ21lbnRzLnB1c2goY29ybmVyUG9pbnQyKTtcbiAgICAgICAgXG4gICAgICAgIC8vZm9yIHNoYXJwIGVkZ2VzXG4gICAgICAgIHNlZ21lbnRzLnB1c2gobWFrZUNvcm5lcihjb3JuZXJQb2ludDIsIGNvcm5lclBvaW50LCBwcmV2aW91c1ZlY3RvciwgdmVjdG9yMSkpO1xuICAgICAgICBcbiAgICAgICAgc2VnbWVudHMucHVzaChjb3JuZXJQb2ludCk7XG5cblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29ybmVyUG9pbnQgPSBwMjtcbiAgICAgICAgc2VnbWVudHMucHVzaChtYWtlQ29ybmVyKGNvcm5lclBvaW50MywgcDEsIHByZXZpb3VzVmVjdG9yLCB2ZWN0b3IxKSk7XG4gICAgICAgIHNlZ21lbnRzLnNwbGljZSgwLCAwLCBjb3JuZXJQb2ludDIpO1xuICAgICAgICBcbiAgICAgICAgLy9mb3Igc2hhcnAgZWRnZXNcbiAgICAgICAgc2VnbWVudHMuc3BsaWNlKDAsIDAsIG1ha2VDb3JuZXIoY29ybmVyUG9pbnQyLCBjb3JuZXJQb2ludCwgcHJldmlvdXNWZWN0b3IsIHZlY3RvcjEpKTtcbiAgICAgICAgXG4gICAgICAgIHNlZ21lbnRzLnNwbGljZSgwLCAwLCBjb3JuZXJQb2ludCk7XG5cbiAgICAgIH1cblxuICAgICAgaGVscFBhdGggPSBuZXcgcGx1bWluLlBhdGgoc2VnbWVudHMpO1xuICAgICAgcGF0aHMucHVzaChoZWxwUGF0aCk7XG4gICAgICBoZWxwUG9pbnQgPSBzZWdtZW50c1swXTtcbiAgICAgIHNlZ21lbnRzID0gc2VnbWVudHMuc2xpY2UoLTEpO1xuICAgICAgc2VnbWVudHMuc3BsaWNlKDAsIDAsIGhlbHBQb2ludCk7XG4gICAgfVxuXG4gICAgaWYgKG5leHRBbmdsZSkge1xuXG4gICAgICBpZiAobmV4dEFuZ2xlIDwgMCkge1xuICAgICAgICBjb3JuZXJQb2ludDIgPSBwNDtcbiAgICAgICAgY29ybmVyUG9pbnQzID0gcDM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb3JuZXJQb2ludDIgPSBwMztcbiAgICAgICAgY29ybmVyUG9pbnQzID0gcDQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvaW50c1tpIC0gMV0gJiYgcG9pbnRzW2kgLSAxXVsyXSA9PSAnZScgfHwgIXByZXZpb3VzQW5nbGUpIHtcbiAgICAgIHNlZ21lbnRzLnB1c2gocDEpO1xuICAgICAgc2VnbWVudHMuc3BsaWNlKDAsIDAsIHAyKTtcbiAgICB9XG5cbiAgICBpZiAocG9pbnRzW2kgKyAxXVsyXSA9PSAnZScgfHwgaSA9PSBwb2ludHMubGVuZ3RoIC0gMikge1xuICAgICAgc2VnbWVudHMuc3BsaWNlKDAsIDAsIHAzKTtcbiAgICAgIHNlZ21lbnRzLnB1c2gocDQpO1xuICAgICAgaGVscFBhdGggPSBuZXcgcGx1bWluLlBhdGgoc2VnbWVudHMpO1xuICAgICAgcGF0aHMucHVzaChoZWxwUGF0aCk7XG4gICAgICBzZWdtZW50cyA9IFtdO1xuICAgIH1cblxuICAgIGlmIChwb2ludDEueCArIGdseXBoLndlaWdodCA+IGdseXBoLndpZHRoKVxuICAgICAgZ2x5cGgud2lkdGggPSBwb2ludDEueCArIGdseXBoLndlaWdodDtcblxuICAgIC8vIEZJWE1FOiBhZGQgbGFzdCBwb2ludFxuICAgIGlmIChwb2ludDIueCArIGdseXBoLndlaWdodCA+IGdseXBoLndpZHRoKVxuICAgICAgZ2x5cGgud2lkdGggPSBwb2ludDIueCArIGdseXBoLndlaWdodDtcblxuICAgIGlmIChwb2ludDEueSArIGdseXBoLndlaWdodCA+IGdseXBoLmhlaWdodClcbiAgICAgIGdseXBoLmhlaWdodCA9IHBvaW50MS55ICsgZ2x5cGgud2VpZ2h0O1xuXG4gICAgLy8gRklYTUU6IGFkZCBsYXN0IHBvaW50XG4gICAgaWYgKHBvaW50Mi55ICsgZ2x5cGgud2VpZ2h0ID4gZ2x5cGguaGVpZ2h0KVxuICAgICAgZ2x5cGguaGVpZ2h0ID0gcG9pbnQyLnkgKyBnbHlwaC53ZWlnaHQ7XG5cbiAgfVxuICBnbHlwaC5wYXRoID0gcGF0aHNbMF07XG4gIGdseXBoLnBhdGguY2xvc2VQYXRoKCk7XG4gIGZvciAoaSA9IDE7IGkgPCBwYXRocy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwYXRoc1tpXS5sZW5ndGgpIHtcbiAgICAgIHZhciBzZWdtZW50ID0gcGF0aHNbaV07XG4gICAgICBzZWdtZW50LmNsb3NlUGF0aCgpO1xuICAgICAgZ2x5cGgucGF0aCA9IGdseXBoLnBhdGgudW5pdGUoc2VnbWVudCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBnbHlwaDtcbn07XG5cbmZ1bmN0aW9uIG1ha2VDb3JuZXIocDEsIHAyLCB2ZWN0b3IyLCB2ZWN0b3IzKSB7XG4gIHZhciB2ZWN0b3IxID0gcDIuc3VidHJhY3QocDEpO1xuXG4gIHZhciByYWQxID0gdmVjdG9yMi5yb3RhdGUoMTgwKS5nZXRBbmdsZUluUmFkaWFucyh2ZWN0b3IxKTtcbiAgdmFyIHJhZDIgPSB2ZWN0b3IzLmdldEFuZ2xlSW5SYWRpYW5zKHZlY3RvcjEpO1xuXG4gIHZhciB4ID0gKHZlY3RvcjEubGVuZ3RoICogTWF0aC5zaW4ocmFkMSkpIC8gTWF0aC5zaW4ocmFkMiArIHJhZDEpO1xuXG4gIHZhciByZXN1bHQgPSBuZXcgcGx1bWluLlBvaW50KHgsIDApO1xuICByZXN1bHQgPSByZXN1bHQucm90YXRlKHZlY3RvcjIucm90YXRlKDE4MCkuYW5nbGUpO1xuICByZXN1bHQgPSByZXN1bHQuYWRkKHAxKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuR2VuZXJhdG9yLnByb3RvdHlwZS5nZW5lcmF0ZUdseXBoV2l0aEFjY2VudCA9IGZ1bmN0aW9uKG5hbWUsIGFjY2VudCkge1xuICB2YXIgZ2x5cGg7XG5cbiAgaWYgKGFjY2VudC5sZW5ndGggPiAxKVxuICAgIGFjY2VudCA9IGRlY29kZUh0bWwoJyYnICsgYWNjZW50ICsgJzsnKTtcblxuICBpZiAobmFtZSA9PSAnaScpXG4gICAgZ2x5cGggPSB0aGlzLmdlbmVyYXRlR2x5cGgoJ8SxJyk7XG4gIGVsc2VcbiAgICBnbHlwaCA9IHRoaXMuZ2VuZXJhdGVHbHlwaChuYW1lKTtcblxuICB2YXIgYWNjZW50R2x5cGggPSB0aGlzLmdlbmVyYXRlR2x5cGgoYWNjZW50KTtcbiAgLy8gRklYTUU6IGZpeCB0aGlzIGZvciBpdGFsaWNzXG4gIGFjY2VudEdseXBoLnBhdGgucG9zaXRpb24ueCArPSAoZ2x5cGgud2lkdGggLSBhY2NlbnRHbHlwaC53aWR0aCkgLyAyO1xuXG4gIGlmIChuYW1lWzBdID09PSBuYW1lWzBdLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBhY2NlbnRHbHlwaC5wYXRoLnBvc2l0aW9uLnkgKz0gOTAgKyBnbHlwaC5oZWlnaHQ7XG4gIH1cblxuICBnbHlwaC5wYXRoID0gZ2x5cGgucGF0aC51bml0ZShhY2NlbnRHbHlwaC5wYXRoKTtcbiAgZ2x5cGgubmFtZSA9IGRlY29kZUh0bWwoJyYnICsgbmFtZSArIHRoaXMuYWxwaGFiZXQubmFtZU1hcFthY2NlbnRdICsgJzsnKTtcbiAgcmV0dXJuIGdseXBoO1xufTtcblxuR2VuZXJhdG9yLnByb3RvdHlwZS5nZW5lcmF0ZUdseXBoV2l0aEFjY2VudDIgPSBmdW5jdGlvbihuYW1lLCBhY2NlbnQpIHtcbiAgdmFyIGdseXBoO1xuXG4gIGlmIChhY2NlbnQubGVuZ3RoID4gMSlcbiAgICBhY2NlbnQgPSBkZWNvZGVIdG1sKCcmJyArIGFjY2VudCArICc7Jyk7XG5cbiAgaWYgKG5hbWUgPT0gJ2knKVxuICAgIGdseXBoID0gdGhpcy5nZW5lcmF0ZUdseXBoMignxLEnKTtcbiAgZWxzZVxuICAgIGdseXBoID0gdGhpcy5nZW5lcmF0ZUdseXBoMihuYW1lKTtcblxuICB2YXIgYWNjZW50R2x5cGggPSB0aGlzLmdlbmVyYXRlR2x5cGgyKGFjY2VudCk7XG4gIC8vIEZJWE1FOiBmaXggdGhpcyBmb3IgaXRhbGljc1xuICBhY2NlbnRHbHlwaC5wYXRoLnBvc2l0aW9uLnggKz0gKGdseXBoLndpZHRoIC0gYWNjZW50R2x5cGgud2lkdGgpIC8gMjtcbiAgXG4gIC8vIEZJWE1FXG4gIGlmIChuYW1lWzBdID09PSBuYW1lWzBdLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBhY2NlbnRHbHlwaC5wYXRoLnBvc2l0aW9uLnkgPSAxODAgKyBnbHlwaC5oZWlnaHQ7XG4gIH1cblxuICBnbHlwaC5wYXRoID0gZ2x5cGgucGF0aC51bml0ZShhY2NlbnRHbHlwaC5wYXRoKTtcbiAgZ2x5cGgubmFtZSA9IGRlY29kZUh0bWwoJyYnICsgbmFtZSArIHRoaXMuYWxwaGFiZXQubmFtZU1hcFthY2NlbnRdICsgJzsnKTtcbiAgcmV0dXJuIGdseXBoO1xufTtcblxuZnVuY3Rpb24gZGVjb2RlSHRtbChodG1sKSB7XG4gIHZhciB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIHR4dC5pbm5lckhUTUwgPSBodG1sO1xuICByZXR1cm4gdHh0LnZhbHVlO1xufVxuXG5HZW5lcmF0b3IucHJvdG90eXBlLmRvd25sb2FkID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLmZvbnQpXG4gICAgdGhpcy5mb250LmRvd25sb2FkKCk7XG4gIGVsc2VcbiAgICBjb25zb2xlLmxvZygnZ2VuZXJhdGUgZmlyc3QnKTtcbn07XG5cbmZ1bmN0aW9uIHNpZ24oeCkge1xuICAvLyAwID09IDFcbiAgcmV0dXJuIHggPj0gMCA/IDEgOiAtMTtcbn1cblxuZXhwb3J0cy5HZW5lcmF0b3IgPSBHZW5lcmF0b3I7XG4iLCJmdW5jdGlvbiBHbHlwaChuYW1lLCB3ZWlnaHQsIGNvbnRyYXN0LCBwcm9wb3J0aW9uKSB7XG4gIHRoaXMubmFtZSA9IG5hbWU7XG4gIHRoaXMud2VpZ2h0ID0gd2VpZ2h0O1xuICB0aGlzLmNvbnRyYXN0ID0gY29udHJhc3Q7XG4gIHRoaXMucHJvcG9ydGlvbiA9IHByb3BvcnRpb247XG5cbiAgdGhpcy5wYXRoID0gdW5kZWZpbmVkO1xuICB0aGlzLndpZHRoID0gMDtcbiAgdGhpcy5oZWlnaHQgPSAwO1xufVxuXG5HbHlwaC5wcm90b3R5cGUubWVyZ2VTZWdtZW50cyA9IGZ1bmN0aW9uKHNlZ21lbnRzKSB7XG5cbiAgdmFyIHJlc3VsdCA9IHNlZ21lbnRzWzBdLmNsb25lKCk7XG4gIGZvciAoaSA9IDE7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHJlc3VsdCA9IHJlc3VsdC51bml0ZShzZWdtZW50c1tpXSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLy9ERUJVR1xuR2x5cGgucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbih4LCB5KSB7XG4gIHZhciBwYXRoID0gdGhpcy5wYXRoLmNsb25lKCkuc2NhbGUoMC4xLCAtMC4xKTtcbiAgcGF0aC5wb3NpdGlvbiA9IFt4ICsgcGF0aC5wb3NpdGlvbi54ICogMC4xICwgeSAtIHBhdGgucG9zaXRpb24ueSAqIDAuMV07XG4gIHBhdGguZmlsbENvbG9yID0gJ2JsYWNrJztcbiAgcGF0aC5zZWxlY3RlZCA9IHRydWU7XG5cbiAgbmV3IHBsdW1pbi5wYXBlci5QYXRoLkNpcmNsZSh7XG4gICAgY2VudGVyOiBbeCwgeV0sXG4gICAgcmFkaXVzOiAzLFxuICAgIHN0cm9rZUNvbG9yOiAncmVkJ1xuICB9KTtcbiAgbmV3IHBsdW1pbi5wYXBlci5QYXRoLkNpcmNsZSh7XG4gICAgY2VudGVyOiBbeCArIHRoaXMud2lkdGggKiAwLjEsIHldLFxuICAgIHJhZGl1czogMyxcbiAgICBzdHJva2VDb2xvcjogJ3JlZCdcbiAgfSk7XG59O1xuXG5leHBvcnRzLkdseXBoID0gR2x5cGg7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbHBoYWJldCA9IHJlcXVpcmUoJy4vYWxwaGFiZXQuanMnKTtcbnZhciBnZW5lcmF0b3IgPSByZXF1aXJlKCcuL2dlbmVyYXRvci5qcycpO1xudmFyIGdseXBoID0gcmVxdWlyZSgnLi9nbHlwaC5qcycpO1xuXG5leHBvcnRzLkdseXBoID0gZ2x5cGguR2x5cGg7XG5leHBvcnRzLkFscGhhYmV0ID0gYWxwaGFiZXQuQWxwaGFiZXQ7XG5leHBvcnRzLkdlbmVyYXRvciA9IGdlbmVyYXRvci5HZW5lcmF0b3I7XG4iXX0=
