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
        // segments.push(makeCorner(cornerPoint2, cornerPoint, previousVector, vector1));
        segments.splice(0, 0, makeCorner(cornerPoint3, p2, previousVector, vector1));
        //for blunt edges
        segments.push(cornerPoint2);
        segments.push(cornerPoint);


      } else {
        cornerPoint = p2;
        // segments.splice(0, 0, makeCorner(cornerPoint2, cornerPoint, previousVector, vector1));
        segments.push(makeCorner(cornerPoint3, p1, previousVector, vector1));
        //for blunt edges
        segments.splice(0, 0, cornerPoint2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYWxwaGFiZXQuanMiLCJzcmMvZ2VuZXJhdG9yLmpzIiwic3JjL2dseXBoLmpzIiwic3JjL2dseXBoZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaGZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZnVuY3Rpb24gQWxwaGFiZXQob3B0aW9ucykge1xuICB4aGVpZ2h0ID0gb3B0aW9ucy54aGVpZ2h0IHx8IDc7XG4gIGRlc2NlbmRlciA9IG9wdGlvbnMuZGVzY2VuZGVyIHx8IC0zO1xuICBhZWhlaWdodCA9IG9wdGlvbnMuYWVoZWlnaHQgfHwgeGhlaWdodCAvIDI7XG4gIC8vIEZJWE1FXG4gIHdlaWdodCA9IG9wdGlvbnMud2VpZ2h0IHx8IDIwO1xuXG4gIHRoaXMuZ2x5cGhzID0ge1xuICAgICcubm90ZGVmJzogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwLCAnYyddXG4gICAgXSxcbiAgICBhOiBbXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCBhZWhlaWdodF0sXG4gICAgICBbMTAsIGFlaGVpZ2h0XVxuICAgIF0sXG4gICAgYjogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICBjOiBbXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgZDogW1xuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgZTogW1xuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIGFlaGVpZ2h0XSxcbiAgICAgIFswLCBhZWhlaWdodF1cbiAgICBdLFxuICAgIGY6IFtcbiAgICAgIFszLCAwXSxcbiAgICAgIFszLCAxMF0sXG4gICAgICBbMTAsIDEwLCAnZSddLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgZzogW1xuICAgICAgWzAsIGRlc2NlbmRlcl0sXG4gICAgICBbMTAsIGRlc2NlbmRlcl0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXVxuICAgIF0sXG4gICAgaDogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCAwLCAnZSddLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgIGk6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCB4aGVpZ2h0ICsgMl1cbiAgICBdLFxuICAgIC8vZG90dGxlc3MgaSBpcyBuZWVkZWQgZm9yIGFjY2VudGVkIGlzXG4gICAgJ8SxJzogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICBqOiBbXG4gICAgICBbLTIsIGRlc2NlbmRlcl0sXG4gICAgICBbMSwgZGVzY2VuZGVyXSxcbiAgICAgIFsxLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzEsIDEwXSxcbiAgICAgIFsxLCB4aGVpZ2h0ICsgMl1cbiAgICBdLFxuICAgIGs6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMCwgJ2UnXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbNSwgeGhlaWdodCAvIDJdLFxuICAgICAgWzEwLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFs1LCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTAsIDBdXG4gICAgXSxcbiAgICBsOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdXG4gICAgXSxcbiAgICBtOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAwLCAnZSddLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsyMCwgeGhlaWdodF0sXG4gICAgICBbMjAsIDBdXG4gICAgXSxcbiAgICBuOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAwXVxuICAgIF0sXG4gICAgbzogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMCwgJ2MnXVxuICAgIF0sXG4gICAgcDogW1xuICAgICAgWzAsIGRlc2NlbmRlcl0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXVxuICAgIF0sXG4gICAgcTogW1xuICAgICAgWzEwLCBkZXNjZW5kZXJdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgIHI6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIHM6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICB0OiBbXG4gICAgICAvLyBGSVhNRTogeGhlaWdodCArIDIgPz9cbiAgICAgIFszLCB4aGVpZ2h0ICsgMl0sXG4gICAgICBbMywgMF0sXG4gICAgICBbMTAsIDAsICdlJ10sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICB1OiBbXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgdjogW1xuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFs1LCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuXG4gICAgXSxcbiAgICB3OiBbXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzUsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTAsIHhoZWlnaHQsICcgZSddLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTUsIDBdLFxuICAgICAgWzIwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMjAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICB4OiBbXG4gICAgICAvLyBbMCwgMF0sXG4gICAgICAvLyBbMTAsIHhoZWlnaHQsICdlJ10sXG4gICAgICAvLyBbMCwgeGhlaWdodF0sXG4gICAgICAvLyBbMTAsIDBdXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodCAvIDZdLFxuICAgICAgWzEwLCB4aGVpZ2h0IC0geGhlaWdodCAvIDZdLFxuICAgICAgWzEwLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDZdLFxuICAgICAgWzAsIHhoZWlnaHQgLSB4aGVpZ2h0IC8gNl0sXG4gICAgICBbMCwgeGhlaWdodCwgJ2UnXVxuICAgIF0sXG4gICAgeTogW1xuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodCwgJ2UnXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIGRlc2NlbmRlcl0sXG4gICAgICBbMCwgZGVzY2VuZGVyXVxuICAgIF0sXG4gICAgejogW1xuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIEE6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFs1LCAxMF0sXG4gICAgICBbMTAsIDAsICdlJ10sXG4gICAgICBbMywgeGhlaWdodCAvIDJdLFxuICAgICAgWzcsIHhoZWlnaHQgLyAyXVxuICAgIF0sXG4gICAgQjogW1xuICAgICAgLy8gWzAsIHhoZWlnaHRdLFxuICAgICAgLy8gWzAsIDEwXSxcbiAgICAgIC8vIC8vIEZJWE1FOiBzaG91bGQgZGVwZW5kIG9uIGZvbnQgd2VpZ2h0XG4gICAgICAvLyBbOSwgMTBdLFxuICAgICAgLy8gWzksIHhoZWlnaHRdLFxuICAgICAgLy8gWzAsIHhoZWlnaHQsICdlJ10sXG4gICAgICAvLyBbMCwgMF0sXG4gICAgICAvLyBbMCwgeGhlaWdodF0sXG4gICAgICAvLyBbMTAsIHhoZWlnaHRdLFxuICAgICAgLy8gWzEwLCAwXSxcbiAgICAgIC8vIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFs4LCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF1cbiAgICBdLFxuICAgIEM6IFtcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgIEQ6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbNywgMTBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMTAgLSB4aGVpZ2h0XSxcbiAgICAgIFs3LCAwXSxcbiAgICAgIFswLCAwXVxuICAgIF0sXG4gICAgRTogW1xuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwLCAnZSddLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgRjogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTAsICdlJ10sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICBHOiBbXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgSDogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwLCAnZSddLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgMTAsICdlJ10sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICBJOiBbXG4gICAgICBbNSwgMTBdLFxuICAgICAgWzUsIDAsICdlJ10sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDAsICdlJ10sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF1cbiAgICBdLFxuICAgIEo6IFtcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl1cbiAgICBdLFxuICAgIEs6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMCwgJ2UnXSxcbiAgICAgIFswLCA1XSxcbiAgICAgIFs1LCA1XSxcbiAgICAgIFsxMCwgMTAsICdlJ10sXG4gICAgICBbMCwgNV0sXG4gICAgICBbNSwgNV0sXG4gICAgICBbMTAsIDBdXG4gICAgXSxcbiAgICBMOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXVxuICAgIF0sXG4gICAgTTogW1xuICAgICAgLy8gWzAsIDBdLFxuICAgICAgLy8gWzAsIDEwXSxcbiAgICAgIC8vIFsxMCwgMTBdLFxuICAgICAgLy8gWzEwLCB4aGVpZ2h0IC8gMiwgJ2UnXSxcbiAgICAgIC8vIFsxMCwgMTBdLFxuICAgICAgLy8gWzIwLCAxMF0sXG4gICAgICAvLyBbMjAsIDBdXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzUsIDEwXSxcbiAgICAgIFsxMCwgKDEwIC0geGhlaWdodCkgLyAyXSxcbiAgICAgIFsxNSwgMTBdLFxuICAgICAgWzIwLCAxMF0sXG4gICAgICBbMjAsIDBdXG4gICAgXSxcbiAgICBOOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAoMTAgLSB4aGVpZ2h0KSAvIDJdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgMTBdXG4gICAgXSxcbiAgICBPOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDAsICdjJ11cbiAgICBdLFxuICAgIFA6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIFE6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMCwgJ2MnXSxcbiAgICAgIFs4LCAwXSxcbiAgICAgIC8vIDAgLSBjb250cmFzdCA/Pz9cbiAgICAgIFs4LCBkZXNjZW5kZXIgKiAwLjc1XSxcbiAgICAgIFsxMCwgZGVzY2VuZGVyICogMC43NV0sXG4gICAgXSxcbiAgICBSOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHQsICdlJ10sXG4gICAgICBbNSwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsxMCwgMF1cblxuICAgIF0sXG4gICAgUzogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF1cbiAgICBdLFxuICAgIFQ6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwLCAnZSddLFxuICAgICAgWzUsIDEwXSxcbiAgICAgIFs1LCAwXVxuICAgIF0sXG4gICAgVTogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIDEwXVxuICAgIF0sXG4gICAgVjogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbNSwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsxMCwgMTBdXG4gICAgXSxcbiAgICBXOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFs1LCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzEwLCAxMCwgJyBlJ10sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsxNSwgMF0sXG4gICAgICBbMjAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsyMCwgMTBdXG5cbiAgICBdLFxuICAgIFg6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMiAtIDFdLFxuICAgICAgWzEwLCAxMCAtIHhoZWlnaHQgLyAyICsgMV0sXG4gICAgICBbMTAsIDEwLCAnZSddLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDIgLSAxXSxcbiAgICAgIFswLCAxMCAtIHhoZWlnaHQgLyAyICsgMV0sXG4gICAgICBbMCwgMTAsICdlJ11cbiAgICBdLFxuICAgIFk6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgOF0sXG4gICAgICBbNSwgeGhlaWdodCAvIDJdLFxuICAgICAgWzEwLCA4XSxcbiAgICAgIFsxMCwgMTAsICdlJ10sXG4gICAgICBbNSwgeGhlaWdodCAvIDJdLFxuICAgICAgWzUsIDBdXG4gICAgXSxcbiAgICBaOiBbXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMCwgMTBdXG4gICAgXSxcbiAgICAny4cnOiBbXG4gICAgICBbMCwgMTIgKyAoOCAtIHhoZWlnaHQpXSxcbiAgICAgIFsyLCAxMl0sXG4gICAgICBbNCwgMTIgKyAoOCAtIHhoZWlnaHQpXVxuICAgIF0sXG4gICAgJ8K0JzogW1xuICAgICAgWzIsIDEyXSxcbiAgICAgIFs0LCAxMiArICg4IC0geGhlaWdodCldXG4gICAgXSxcbiAgICAny5onOiBbXG4gICAgICBbMCwgMTJdLFxuICAgICAgWzAsIDEyICsgKDggLSB4aGVpZ2h0KV0sXG4gICAgICBbNCwgMTIgKyAoOCAtIHhoZWlnaHQpXSxcbiAgICAgIFs0LCAxMl0sXG4gICAgICBbMCwgMTJdXG4gICAgXSxcbiAgICAnMCc6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMCwgJ2MnXVxuICAgIF0sXG4gICAgJzEnOiBbXG4gICAgICBbNSwgMF0sXG4gICAgICBbNSwgMTBdLFxuICAgICAgWzAsIDEwLCAnZSddLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXVxuICAgIF0sXG4gICAgJzInOiBbXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzAsIDEwXVxuICAgIF0sXG4gICAgJzMnOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMCwgMTAsICdlJ10sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICAnNCc6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHQsICdlJ10sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgICc1JzogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF1cbiAgICBdLFxuICAgICc2JzogW1xuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodF1cbiAgICBdLFxuICAgICc3JzogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCAwXVxuICAgIF0sXG4gICAgJzgnOiBbXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHQsICdlJ10sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXVxuICAgIF0sXG4gICAgJzknOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgJy4nOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMV1cbiAgICBdLFxuICAgICcsJzogW1xuICAgICAgWzAsIC0yXSxcbiAgICAgIFswLCAxXVxuICAgIF0sXG4gICAgJzonOiBbXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodCAtIDEsICdlJ10sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMV1cbiAgICBdLFxuICAgICc7JzogW1xuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHQgLSAxLCAnZSddLFxuICAgICAgWzAsIC0yXSxcbiAgICAgIFswLCAxXVxuICAgIF0sXG4gICAgJyEnOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMSwgJ2UnXSxcbiAgICAgIFswLCAzXSxcbiAgICAgIFswLCAxMF1cbiAgICBdLFxuICAgIC8vIEZJWE1FOiB4aGVpZ2h0IHggM1xuICAgICc/JzogW1xuICAgICAgWzQsIDBdLFxuICAgICAgWzQsIDEsICdlJ10sXG4gICAgICBbNCwgM10sXG4gICAgICBbNCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMCwgMTBdLFxuICAgIF0sXG4gICAgLy9oeXBoZW5cbiAgICAn4oCQJzogW1xuICAgICAgWzAsIDVdLFxuICAgICAgWzIsIDVdXG4gICAgXSxcbiAgICAvL2VuZGFzaFxuICAgICfigJMnOiBbXG4gICAgICBbMCwgNV0sXG4gICAgICBbMTAsIDVdXG4gICAgXSxcbiAgICAvL2VtZGFzaFxuICAgICfigJQnOiBbXG4gICAgICBbMCwgNV0sXG4gICAgICBbMjAsIDVdXG4gICAgXSxcbiAgICAnKyc6IFtcbiAgICAgIFswLCA1XSxcbiAgICAgIFs0LCA1LCAnZSddLFxuICAgICAgWzIsIDddLFxuICAgICAgWzIsIDNdXG4gICAgXSxcbiAgICAvL21pbnVzXG4gICAgJy0nOiBbXG4gICAgICBbMCwgNV0sXG4gICAgICBbMiwgNV1cbiAgICBdLFxuICAgICc9JzogW1xuICAgICAgWzAsIDRdLFxuICAgICAgWzIsIDQsICdlJ10sXG4gICAgICBbMCwgNl0sXG4gICAgICBbMiwgNl1cbiAgICBdLFxuICAgICcvJzogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzUsIDEwXVxuICAgIF0sXG4gICAgJ0AnOiBbXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxNSArIE1hdGgucm91bmQod2VpZ2h0IC8gNDApLCAwXSxcbiAgICAgIFsxNSArIE1hdGgucm91bmQod2VpZ2h0IC8gNDApLCAxMF0sXG4gICAgICBbMCwgMTBdLFxuICAgIF0sXG4gICAgJyYnOiBbXG4gICAgICBbMTEsIDEwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTEsIDBdLFxuICAgICAgWzExLCB4aGVpZ2h0ICsgKDEwIC0geGhlaWdodCkgLyAzLCAnZSddLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzE0LCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgJygnOiBbXG4gICAgICBbNSwgMTBdLFxuICAgICAgWzAsIDddLFxuICAgICAgWzAsIDNdLFxuICAgICAgWzUsIDBdXG4gICAgXSxcbiAgICAnKSc6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbNSwgN10sXG4gICAgICBbNSwgM10sXG4gICAgICBbMCwgMF1cbiAgICBdLFxuICAgICdbJzogW1xuICAgICAgWzUsIDEwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbNSwgMF1cbiAgICBdLFxuICAgICddJzogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFs1LCAxMF0sXG4gICAgICBbNSwgMF0sXG4gICAgICBbMCwgMF1cbiAgICBdLFxuICAgICd7JzogW1xuICAgICAgWzUsIDEwXSxcbiAgICAgIFsyLCA5XSxcbiAgICAgIFsyLCA2LjVdLFxuICAgICAgWzAsIDVdLFxuICAgICAgWzIsIDMuNV0sXG4gICAgICBbMiwgMV0sXG4gICAgICBbNSwgMF1cbiAgICBdLFxuICAgICd9JzogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFszLCA5XSxcbiAgICAgIFszLCA2LjVdLFxuICAgICAgWzUsIDVdLFxuICAgICAgWzMsIDMuNV0sXG4gICAgICBbMywgMV0sXG4gICAgICBbMCwgMF1cbiAgICBdLFxuICAgICc8JzogW1xuICAgICAgWzEwLCB4aGVpZ2h0ICsgMV0sXG4gICAgICBbMCwgeGhlaWdodCAvIDIgKyAxXSxcbiAgICAgIFsxMCwgMV1cbiAgICBdLFxuICAgICc+JzogW1xuICAgICAgWzAsIHhoZWlnaHQgKyAxXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDIgKyAxXSxcbiAgICAgIFswLCAxXVxuICAgIF1cbiAgfTtcbiAgaWYgKG9wdGlvbnMudHlwZSA9PSAnc3Ryb2tlJykge1xuICAgIHRoaXMuZ2x5cGhzWycubm90ZGVmJ10gPSBbXG4gICAgICBbMCwgNV0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDUsICdjJ11cbiAgICBdO1xuICAgIHRoaXMuZ2x5cGhzLm8gPSBbXG4gICAgICBbMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodCAvIDIsICdjJ11cbiAgICBdO1xuICAgIHRoaXMuZ2x5cGhzLncgPSBbXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzUsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTUsIDBdLFxuICAgICAgWzIwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMjAsIHhoZWlnaHQsICdlJ10sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdO1xuICAgIHRoaXMuZ2x5cGhzLkIgPSBbXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbOCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodCwgJ2UnXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMiwgJ2MnXSxcbiAgICBdO1xuICAgIHRoaXMuZ2x5cGhzLkQgPSBbXG4gICAgICBbMCwgNV0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzcsIDEwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIDEwIC0geGhlaWdodF0sXG4gICAgICBbNywgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgNSwgJ2MnXSxcbiAgICBdO1xuICAgIC8vIEhBQ0s6IGNoYW5nZSBnbHlwaCBmb3IgY29uZGVuc2VkIGZvbnRzXG4gICAgaWYgKG9wdGlvbnMucHJvcG9ydGlvbiA8IDEpIHtcbiAgICAgIHRoaXMuZ2x5cGhzLk4gPSBbXG4gICAgICAgIFswLCAwXSxcbiAgICAgICAgWzAsIDEwXSxcbiAgICAgICAgWzIsIDEwXSxcbiAgICAgICAgWzgsIDBdLFxuICAgICAgICBbMTAsIDBdLFxuICAgICAgICBbMTAsIDEwXVxuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5nbHlwaHMuTiA9IFtcbiAgICAgICAgWzAsIDBdLFxuICAgICAgICBbMCwgMTAuNV0sXG4gICAgICAgIFsxMCwgLTAuNV0sXG4gICAgICAgIFsxMCwgMTBdXG4gICAgICBdO1xuICAgIH1cbiAgICB0aGlzLmdseXBocy5PID0gW1xuICAgICAgWzAsIDVdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCA1LCAnYyddXG4gICAgXTtcbiAgICB0aGlzLmdseXBocy5RID0gW1xuICAgICAgWzAsIDVdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCA1LCAnZSddLFxuICAgICAgWzgsIDBdLFxuICAgICAgLy8gMCAtIGNvbnRyYXN0ID8/P1xuICAgICAgWzgsIGRlc2NlbmRlciAqIDAuNzVdLFxuICAgICAgWzEwLCBkZXNjZW5kZXIgKiAwLjc1XSxcbiAgICBdO1xuICAgIHRoaXMuZ2x5cGhzLlIgPSBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHQsICdlJ10sXG4gICAgICBbMiwgeGhlaWdodF0sXG4gICAgICBbNSwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFsxMCwgMF1cbiAgICBdO1xuICAgIHRoaXMuZ2x5cGhzLlcgPSBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFs1LCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzE1LCAwXSxcbiAgICAgIFsyMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzIwLCAxMCwgJ2UnXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzEwLCAxMF1cbiAgICBdO1xuICAgIHRoaXMuZ2x5cGhzWycwJ10gPSBbXG4gICAgICBbMCwgNV0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDUsICdjJ11cbiAgICBdO1xuICAgIHRoaXMuZ2x5cGhzWyc4J10gPSBbXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHQsICdlJ10sXG4gICAgICBbMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodCAvIDIsICdjJ11cbiAgICBdO1xuICB9XG5cblxuICAvLyBpZiAod2VpZ2h0IDwgMTUgfHwgb3B0aW9ucy5wcm9wb3J0aW9uIDw9IDEpXG4gIC8vICAgdGhpcy5nbHlwaHMuRy5wdXNoKFs4IC0gTWF0aC5yb3VuZCh3ZWlnaHQgLyAxMCAqIG9wdGlvbnMucHJvcG9ydGlvbiksIHhoZWlnaHRdKTtcblxuICB0aGlzLm5hbWVNYXAgPSB7XG4gICAgJ8SxJzogJ2RvdGxlc3NpJyxcbiAgICAnwrQnOiAnYWN1dGUnLFxuICAgICfLhyc6ICdjYXJvbicsXG4gICAgJ8uaJzogJ3JpbmcnLFxuICAgICcwJzogJ3plcm8nLFxuICAgICcxJzogJ29uZScsXG4gICAgJzInOiAndHdvJyxcbiAgICAnMyc6ICd0aHJlZScsXG4gICAgJzQnOiAnZm91cicsXG4gICAgJzUnOiAnZml2ZScsXG4gICAgJzYnOiAnc2l4JyxcbiAgICAnNyc6ICdzZXZlbicsXG4gICAgJzgnOiAnZWlnaHQnLFxuICAgICc5JzogJ25pbmUnLFxuICAgICfigJAnOiAnaHlwaGVuJyxcbiAgICAn4oCTJzogJ2VuZGFzaCcsXG4gICAgJ+KAlCc6ICdlbWRhc2gnLFxuICAgICctJzogJ21pbnVzJyxcbiAgICAnKyc6ICdwbHVzJyxcbiAgICAnLic6ICdwZXJpb2QnLFxuICAgICcsJzogJ2NvbW1hJyxcbiAgICAnOic6ICdjb2xvbicsXG4gICAgJzsnOiAnc2VtaWNvbG9uJyxcbiAgICAnISc6ICdleGNsYW0nLFxuICAgICc/JzogJ3F1ZXN0aW9uJyxcbiAgICAnLyc6ICdzbGFzaCcsXG4gICAgJ0AnOiAnYXQnLFxuICAgICcmJzogJ2FtcGVyc2FuZCcsXG4gICAgJygnOiAncGFyZW5sZWZ0JyxcbiAgICAnKSc6ICdwYXJlbnJpZ2h0JyxcbiAgICAnWyc6ICdicmFja2V0bGVmdCcsXG4gICAgJ10nOiAnYnJhY2tldHJpZ2h0JyxcbiAgICAneyc6ICdicmFjZWxlZnQnLFxuICAgICd9JzogJ2JyYWNlcmlnaHQnLFxuICAgICc8JzogJ2xlc3MnLFxuICAgICc9JzogJ2VxdWFsJyxcbiAgICAnPic6ICdncmVhdGVyJ1xuICB9O1xufVxuQWxwaGFiZXQucHJvdG90eXBlLm1heEhlaWdodCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbWF4ID0gMDtcbiAgZm9yICh2YXIga2V5IGluIHRoaXMuZ2x5cGhzKSB7XG4gICAgaWYgKHRoaXMuZ2x5cGhzW2tleV0pIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5nbHlwaHNba2V5XS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5nbHlwaHNba2V5XVtpXVsxXSA+IG1heClcbiAgICAgICAgICBtYXggPSB0aGlzLmdseXBoc1trZXldW2ldWzFdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtYXg7XG59O1xuXG5BbHBoYWJldC5wcm90b3R5cGUubWF4V2lkdGggPSBmdW5jdGlvbigpIHtcbiAgdmFyIG1heCA9IDA7XG4gIGZvciAodmFyIGtleSBpbiB0aGlzLmdseXBocykge1xuICAgIGlmICh0aGlzLmdseXBoc1trZXldKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ2x5cGhzW2tleV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZ2x5cGhzW2tleV1baV1bMF0gPiBtYXgpXG4gICAgICAgICAgbWF4ID0gdGhpcy5nbHlwaHNba2V5XVtpXVswXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWF4O1xufTtcblxuQWxwaGFiZXQucHJvdG90eXBlLmF2YWlsYWJsZUdseXBocyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5nbHlwaHMpO1xufTtcblxuZXhwb3J0cy5BbHBoYWJldCA9IEFscGhhYmV0O1xuIiwiZnVuY3Rpb24gR2VuZXJhdG9yKG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHRoaXMudHlwZSA9IG9wdGlvbnMudHlwZSB8fCAnYnJ1c2gnO1xuICB0aGlzLnByb3BvcnRpb24gPSBvcHRpb25zLnByb3BvcnRpb24gfHwgKG9wdGlvbnMuaGVpZ2h0IC8gb3B0aW9ucy53aWR0aCkgfHwgMS41O1xuXG4gIHRoaXMud2VpZ2h0ID0gb3B0aW9ucy53ZWlnaHQgfHwgKHRoaXMudHlwZSA9PSAnYnJ1c2gnID8gMjAwIDogNTApO1xuICB0aGlzLmNvbnRyYXN0ID0gdGhpcy50eXBlID09ICdicnVzaCcgPyAob3B0aW9ucy5jb250cmFzdCB8fCA1MCkgOiB0aGlzLndlaWdodDtcbiAgdGhpcy5kZXNjZW5kZXIgPSBvcHRpb25zLmRlc2NlbmRlciB8fCAtMztcbiAgdGhpcy54c2hpZnQgPSBvcHRpb25zLnhzaGlmdCB8fCAwO1xuICB0aGlzLnlzaGlmdCA9IG9wdGlvbnMueXNoaWZ0IHx8IDA7XG4gIHRoaXMuaXRhbGljID0gb3B0aW9ucy5pdGFsaWMgfHwgMDtcbiAgdGhpcy5zZWdtZW50UmVkdWN0aW9uID0gb3B0aW9ucy5zZWdtZW50UmVkdWN0aW9uO1xuICB0aGlzLnNtb290aCA9IG9wdGlvbnMuc21vb3RoO1xuXG4gIHRoaXMuc2l6ZSA9IDgwO1xuXG4gIHZhciBhbHBoYWJldE9wdGlvbnMgPSB7XG4gICAgdHlwZTogdGhpcy50eXBlLFxuICAgIHdlaWdodDogdGhpcy53ZWlnaHQsXG4gICAgY29udHJhc3Q6IHRoaXMuY29udHJhc3QsXG4gICAgZGVzY2VuZGVyOiB0aGlzLmRlc2NlbmRlcixcbiAgICBwcm9wb3J0aW9uOiB0aGlzLnByb3BvcnRpb24sXG4gICAgeGhlaWdodDogb3B0aW9ucy54aGVpZ2h0IHx8IDdcbiAgfTtcblxuICB0aGlzLmFscGhhYmV0ID0gb3B0aW9ucy5hbHBoYWJldCB8fCBuZXcgZ2x5cGhlci5BbHBoYWJldChhbHBoYWJldE9wdGlvbnMpO1xuICB0aGlzLmdseXBocyA9IFtdO1xuICB0aGlzLm9wZW50eXBlID0gdW5kZWZpbmVkO1xuXG4gIC8vIFNldHVwIHBhcGVyLmpzIGJ5IHByb3ZpZGluZyBhIGNhbnZhcyBlbGVtZW50XG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgY2FudmFzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xuICBwbHVtaW4uc2V0dXAoY2FudmFzKTtcbn1cblxuR2VuZXJhdG9yLnByb3RvdHlwZS5nZW5lcmF0ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmZvbnQgPSBuZXcgcGx1bWluLkZvbnQoe1xuICAgIGZhbWlseU5hbWU6ICdEZW1vJyxcbiAgICBhc2NlbmRlcjogMTAwMCxcbiAgICBkZXNjZW5kZXI6IC0yMDBcbiAgfSk7XG5cbiAgdmFyIGF2YWlsYWJsZUdseXBocyA9IHRoaXMuYWxwaGFiZXQuYXZhaWxhYmxlR2x5cGhzKCksXG4gICAgZ2x5cGhzID0gW10sXG4gICAgcGF0aDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGF2YWlsYWJsZUdseXBocy5sZW5ndGg7IGkrKykge1xuICAgIHRoaXMuYmVmb3JlR2VuZXJhdGVHbHlwaChhdmFpbGFibGVHbHlwaHNbaV0pO1xuICAgIGlmICh0aGlzLnR5cGUgPT0gJ3N0cm9rZScpXG4gICAgICBwYXRoID0gdGhpcy5nZW5lcmF0ZUdseXBoMihhdmFpbGFibGVHbHlwaHNbaV0sIHRoaXMuYWxwaGFiZXQuZ2x5cGhzW2F2YWlsYWJsZUdseXBoc1tpXV0pO1xuICAgIGVsc2VcbiAgICAgIHBhdGggPSB0aGlzLmdlbmVyYXRlR2x5cGgoYXZhaWxhYmxlR2x5cGhzW2ldLCB0aGlzLmFscGhhYmV0LmdseXBoc1thdmFpbGFibGVHbHlwaHNbaV1dKTtcbiAgICB2YXIgZ2x5cGggPSBuZXcgcGx1bWluLkdseXBoKHtcbiAgICAgIG5hbWU6IHRoaXMuYWxwaGFiZXQubmFtZU1hcFthdmFpbGFibGVHbHlwaHNbaV1dIHx8IGF2YWlsYWJsZUdseXBoc1tpXSxcbiAgICAgIHVuaWNvZGU6IGF2YWlsYWJsZUdseXBoc1tpXSxcbiAgICAgIGFkdmFuY2VXaWR0aDogcGF0aC53aWR0aCArIDEwMFxuICAgIH0pO1xuICAgIGdseXBoLmFkZENvbnRvdXIocGF0aC5wYXRoKTtcbiAgICBnbHlwaHMucHVzaChnbHlwaCk7XG4gIH1cblxuICB0aGlzLmZvbnQuYWRkR2x5cGhzKGdseXBocyk7XG4gIHRoaXMuZm9udC51cGRhdGVPVENvbW1hbmRzKClcbiAgICAuYWRkVG9Gb250cygpO1xuXG4gIC8vIHZhciBhY2NlbnQgPSAnYWN1dGUnO1xuICAvLyBhdmFpbGFibGVHbHlwaHMgPSAnYWVpb3V5QUVJT1VZJztcbiAgLy8gZm9yIChpID0gMDsgaSA8IGF2YWlsYWJsZUdseXBocy5sZW5ndGg7IGkrKykge1xuICAvLyAgIHRoaXMuYmVmb3JlR2VuZXJhdGVHbHlwaChhdmFpbGFibGVHbHlwaHNbaV0pO1xuICAvLyAgIGlmICh0aGlzLnR5cGUgPT0gJ3N0cm9rZScpXG4gIC8vICAgICBnbHlwaCA9IHRoaXMuZ2VuZXJhdGVHbHlwaFdpdGhBY2NlbnQyKGF2YWlsYWJsZUdseXBoc1tpXSwgYWNjZW50KTtcbiAgLy8gICBlbHNlXG4gIC8vICAgICBnbHlwaCA9IHRoaXMuZ2VuZXJhdGVHbHlwaFdpdGhBY2NlbnQoYXZhaWxhYmxlR2x5cGhzW2ldLCBhY2NlbnQpO1xuICAvLyAgIHRoaXMuYWZ0ZXJHZW5lcmF0ZUdseXBoKGdseXBoKTtcbiAgLy8gICB0aGlzLmdseXBoc1tnbHlwaC5uYW1lXSA9IGdseXBoO1xuICAvLyB9XG4gIC8vICAgLy8gRklYTUU6IGRjYXJvbiB0Y2Fyb25cbiAgLy8gICBhY2NlbnQgPSAnY2Fyb24nO1xuICAvLyAgIGF2YWlsYWJsZUdseXBocyA9ICdjZW5yc3pDREVOUlNUWic7XG4gIC8vICAgZm9yIChpID0gMDsgaSA8IGF2YWlsYWJsZUdseXBocy5sZW5ndGg7IGkrKykge1xuICAvLyAgICAgdGhpcy5iZWZvcmVHZW5lcmF0ZUdseXBoKGF2YWlsYWJsZUdseXBoc1tpXSk7XG4gIC8vICAgICBpZiAodGhpcy50eXBlID09ICdzdHJva2UnKVxuICAvLyAgICAgICBnbHlwaCA9IHRoaXMuZ2VuZXJhdGVHbHlwaFdpdGhBY2NlbnQyKGF2YWlsYWJsZUdseXBoc1tpXSwgYWNjZW50KTtcbiAgLy8gICAgIGVsc2VcbiAgLy8gICAgICAgZ2x5cGggPSB0aGlzLmdlbmVyYXRlR2x5cGhXaXRoQWNjZW50KGF2YWlsYWJsZUdseXBoc1tpXSwgYWNjZW50KTtcbiAgLy8gICAgIHRoaXMuYWZ0ZXJHZW5lcmF0ZUdseXBoKGdseXBoKTtcbiAgLy8gICAgIHRoaXMuZ2x5cGhzW2dseXBoLm5hbWVdID0gZ2x5cGg7XG4gIC8vICAgfVxuICAvL1xuICAvLyAgIGFjY2VudCA9ICdyaW5nJztcbiAgLy8gICBhdmFpbGFibGVHbHlwaHMgPSAndVUnO1xuICAvLyAgIGZvciAoaSA9IDA7IGkgPCBhdmFpbGFibGVHbHlwaHMubGVuZ3RoOyBpKyspIHtcbiAgLy8gICAgIHRoaXMuYmVmb3JlR2VuZXJhdGVHbHlwaChhdmFpbGFibGVHbHlwaHNbaV0pO1xuICAvLyAgICAgaWYgKHRoaXMudHlwZSA9PSAnc3Ryb2tlJylcbiAgLy8gICAgICAgZ2x5cGggPSB0aGlzLmdlbmVyYXRlR2x5cGhXaXRoQWNjZW50MihhdmFpbGFibGVHbHlwaHNbaV0sIGFjY2VudCk7XG4gIC8vICAgICBlbHNlXG4gIC8vICAgICAgIGdseXBoID0gdGhpcy5nZW5lcmF0ZUdseXBoV2l0aEFjY2VudChhdmFpbGFibGVHbHlwaHNbaV0sIGFjY2VudCk7XG4gIC8vICAgICB0aGlzLmFmdGVyR2VuZXJhdGVHbHlwaChnbHlwaCk7XG4gIC8vICAgICB0aGlzLmdseXBoc1tnbHlwaC5uYW1lXSA9IGdseXBoO1xuICAvLyAgIH1cbn07XG5cbkdlbmVyYXRvci5wcm90b3R5cGUuZ2V0R2x5cGggPSBmdW5jdGlvbihuYW1lKSB7XG4gIGlmICh0aGlzLmdseXBoc1tuYW1lXSkge1xuICAgIHJldHVybiB0aGlzLmdseXBoc1tuYW1lXTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnZ2x5cGggJyArIG5hbWUgKyAnIG5vdCBkZWZpbmVkJyk7XG4gICAgcmV0dXJuIHRoaXMuZ2x5cGhzWycubm90ZGVmJ107XG4gIH1cbn07XG5cbkdlbmVyYXRvci5wcm90b3R5cGUuYWRqdXN0UG9pbnQgPSBmdW5jdGlvbihwb2ludCkge1xuICByZXR1cm4gbmV3IHBsdW1pbi5Qb2ludChwb2ludClcbiAgICAubXVsdGlwbHkoW3RoaXMuc2l6ZSAvIHRoaXMucHJvcG9ydGlvbiwgdGhpcy5zaXplIC0gKHRoaXMuY29udHJhc3QgKiAyIC8gdGhpcy5zaXplKV0pXG4gICAgLmFkZCh0aGlzLndlaWdodCwgdGhpcy5jb250cmFzdClcbiAgICAuYWRkKHRoaXMueHNoaWZ0LCB0aGlzLnlzaGlmdCk7XG59O1xuXG5HZW5lcmF0b3IucHJvdG90eXBlLmRyYXdEb3QgPSBmdW5jdGlvbihwb2ludCwgYm94KSB7XG4gIHZhciBwMSA9IHRoaXMuYWRqdXN0UG9pbnQocG9pbnQpO1xuICByZXR1cm4gbmV3IHBsdW1pbi5QYXRoLlJlY3RhbmdsZShwMS5zdWJ0cmFjdChib3gpLCBwMS5hZGQoYm94KSk7XG59O1xuXG5HZW5lcmF0b3IucHJvdG90eXBlLmJlZm9yZUdlbmVyYXRlR2x5cGggPSBmdW5jdGlvbihuYW1lKSB7XG5cbn07XG5cbkdlbmVyYXRvci5wcm90b3R5cGUuYWZ0ZXJHZW5lcmF0ZUdseXBoID0gZnVuY3Rpb24oZ2x5cGgpIHtcblxufTtcblxuR2VuZXJhdG9yLnByb3RvdHlwZS5nZW5lcmF0ZUdseXBoID0gZnVuY3Rpb24obmFtZSwgcG9pbnRzKSB7XG4gIHBvaW50cyA9IHBvaW50cyB8fCB0aGlzLmFscGhhYmV0LmdseXBoc1tuYW1lXTtcbiAgdmFyIGdseXBoID0gbmV3IGdseXBoZXIuR2x5cGgobmFtZSwgdGhpcy53ZWlnaHQsIHRoaXMuY29udHJhc3QsIHRoaXMucHJvcG9ydGlvbik7XG5cbiAgdmFyIHNlZ21lbnRzID0gW107XG4gIHZhciBib3ggPSBuZXcgcGx1bWluLlBvaW50KGdseXBoLndlaWdodCwgZ2x5cGguY29udHJhc3QpO1xuICB2YXIgc3RhcnRQb2ludDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgIC8vV0lQXG4gICAgaWYgKHBvaW50c1tpXVsyXSA9PSAnZG90Jykge1xuICAgICAgc2VnbWVudHMucHVzaCh0aGlzLmRyYXdEb3QocG9pbnRzW2ldLCBib3gpKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChpID49IHBvaW50cy5sZW5ndGggLSAxKVxuICAgICAgYnJlYWs7XG5cbiAgICB2YXIgcGF0aCA9IG5ldyBwbHVtaW4uUGF0aCgpO1xuXG4gICAgdmFyIHAxID0gdGhpcy5hZGp1c3RQb2ludChwb2ludHNbaV0pO1xuICAgIHZhciBwMiA9IHRoaXMuYWRqdXN0UG9pbnQocG9pbnRzW2kgKyAxXSk7XG5cbiAgICBpZiAocG9pbnRzW2kgKyAxXVsyXSA9PSAnYycpIHtcbiAgICAgIHAyID0gc3RhcnRQb2ludDtcbiAgICB9IGVsc2Uge1xuICAgICAgcDIgPSB0aGlzLmFkanVzdFBvaW50KHBvaW50c1tpICsgMV0pO1xuICAgICAgc3RhcnRQb2ludCA9IHN0YXJ0UG9pbnQgfHwgcDE7XG4gICAgfVxuXG4gICAgdmFyIHZlY3RvciA9IHAyLnN1YnRyYWN0KHAxKTtcbiAgICB2YXIgeCA9IHNpZ24odmVjdG9yLngpO1xuICAgIHZhciB5ID0gc2lnbih2ZWN0b3IueSk7XG5cbiAgICAvLyBXSVBcbiAgICBpZiAodGhpcy5zZWdtZW50UmVkdWN0aW9uKSB7XG4gICAgICB2ZWN0b3IubGVuZ3RoIC09IHRoaXMuc2VnbWVudFJlZHVjdGlvbiAqIDU7XG4gICAgICBwMiA9IHAxLmFkZCh2ZWN0b3IpO1xuICAgICAgdmFyIHZlY3RvcjIgPSBwMS5zdWJ0cmFjdChwMik7XG4gICAgICB2ZWN0b3IyLmxlbmd0aCAtPSB0aGlzLnNlZ21lbnRSZWR1Y3Rpb24gKiA1O1xuICAgICAgcDEgPSBwMi5hZGQodmVjdG9yMik7XG4gICAgfVxuXG4gICAgdmFyIGI7XG4gICAgaWYgKGkgIT09IDAgJiYgcG9pbnRzW2kgLSAxXVsyXSAhPT0gJ2UnIHx8IHZlY3Rvci5hbmdsZSAlIDkwID09PSAwKSB7XG4gICAgICBiID0gcDEuYWRkKGJveC5tdWx0aXBseShbeCAqIC0xLCB5XSkpO1xuICAgICAgYiA9IGIuYWRkKGIueSAqIC0xICogdGhpcy5pdGFsaWMsIDApO1xuICAgICAgcGF0aC5hZGQoYik7XG4gICAgfVxuXG4gICAgYiA9IHAxLmFkZChib3gubXVsdGlwbHkoW3ggKiAtMSwgeSAqIC0xXSkpO1xuICAgIGIgPSBiLmFkZChiLnkgKiAtMSAqIHRoaXMuaXRhbGljLCAwKTtcbiAgICAvLyBpZiAoaSA9PT0gMCB8fCBwb2ludHNbaSAtIDFdWzJdID09PSAnZScgJiYgdmVjdG9yLmFuZ2xlICUgOTAgIT09IDApXG4gICAgLy8gICBiID0gYi5hZGQoLTIwLCAwKTtcbiAgICBwYXRoLmFkZChiKTtcblxuICAgIGIgPSBwMS5hZGQoYm94Lm11bHRpcGx5KFt4LCB5ICogLTFdKSk7XG4gICAgYiA9IGIuYWRkKGIueSAqIC0xICogdGhpcy5pdGFsaWMsIDApO1xuICAgIHBhdGguYWRkKGIpO1xuXG4gICAgaWYgKGkgKyAxICE9PSBwb2ludHMubGVuZ3RoIC0gMSAmJiBwb2ludHNbaSArIDFdWzJdICE9PSAnZScgfHwgdmVjdG9yLmFuZ2xlICUgOTAgPT09IDApIHtcbiAgICAgIGIgPSBwMi5hZGQoYm94Lm11bHRpcGx5KFt4LCB5ICogLTFdKSk7XG4gICAgICBiID0gYi5hZGQoYi55ICogLTEgKiB0aGlzLml0YWxpYywgMCk7XG4gICAgICBwYXRoLmFkZChiKTtcbiAgICB9XG5cbiAgICBiID0gcDIuYWRkKGJveC5tdWx0aXBseShbeCwgeV0pKTtcbiAgICBiID0gYi5hZGQoYi55ICogLTEgKiB0aGlzLml0YWxpYywgMCk7XG4gICAgLy8gaWYgKGkgKyAxICE9PSBwb2ludHMubGVuZ3RoIC0gMSAmJiBwb2ludHNbaSArIDFdWzJdICE9PSAnZScgfHwgdmVjdG9yLmFuZ2xlICUgOTAgPT09IDApIHtcbiAgICAvLyB9ZWxzZXtcbiAgICAvLyAgIHZhciB2ID0gcDEuc3VidHJhY3QocDIpO1xuICAgIC8vICAgYiA9IGIuYWRkKCh0aGlzLmNvbnRyYXN0KjIpL01hdGgudGFuKHYuYW5nbGVJblJhZGlhbnMpICogLTEsIDApO1xuICAgIC8vIH1cbiAgICBwYXRoLmFkZChiKTtcblxuICAgIGIgPSBwMi5hZGQoYm94Lm11bHRpcGx5KFt4ICogLTEsIHldKSk7XG4gICAgYiA9IGIuYWRkKGIueSAqIC0xICogdGhpcy5pdGFsaWMsIDApO1xuICAgIHBhdGguYWRkKGIpO1xuXG5cbiAgICAvLyBGSVhNRTogcm91bmQgZWRnZXNcbiAgICAvLyB2YXIgYyA9IG5ldyBQYXRoLkNpcmNsZSh7XG4gICAgLy8gICBjZW50ZXI6IFswLCAwXSxcbiAgICAvLyAgIHJhZGl1czogdGhpcy53ZWlnaHRcbiAgICAvLyB9KTtcbiAgICAvL1xuICAgIC8vIGMucm90YXRlKHZlY3Rvci5hbmdsZSk7XG4gICAgLy8gYy5wb3NpdGlvbiA9IHAxO1xuICAgIC8vIHBhdGguYWRkKGMuc2VnbWVudHNbM10pO1xuICAgIC8vIHBhdGguYWRkKGMuc2VnbWVudHNbMF0pO1xuICAgIC8vIHBhdGguYWRkKGMuc2VnbWVudHNbMV0pO1xuICAgIC8vXG4gICAgLy8gYy5wb3NpdGlvbiA9IHAyO1xuICAgIC8vIHBhdGguYWRkKGMuc2VnbWVudHNbMV0pO1xuICAgIC8vIHBhdGguYWRkKGMuc2VnbWVudHNbMl0pO1xuICAgIC8vIHBhdGguYWRkKGMuc2VnbWVudHNbM10pO1xuXG4gICAgcGF0aC5yZWR1Y2UoKTtcbiAgICBwYXRoLmNsb3NlZCA9IHRydWU7XG5cbiAgICBzZWdtZW50cy5wdXNoKHBhdGgpO1xuXG4gICAgaWYgKHAxLnggKyBnbHlwaC53ZWlnaHQgPiBnbHlwaC53aWR0aClcbiAgICAgIGdseXBoLndpZHRoID0gcDEueCArIGdseXBoLndlaWdodDtcblxuICAgIC8vIEZJWE1FOiBhZGQgbGFzdCBwb2ludFxuICAgIGlmIChwMi54ICsgZ2x5cGgud2VpZ2h0ID4gZ2x5cGgud2lkdGgpXG4gICAgICBnbHlwaC53aWR0aCA9IHAyLnggKyBnbHlwaC53ZWlnaHQ7XG5cbiAgICBpZiAocDEueSArIGdseXBoLmNvbnRyYXN0IDwgZ2x5cGguaGVpZ2h0KVxuICAgICAgZ2x5cGguaGVpZ2h0ID0gcDEueSArIGdseXBoLmNvbnRyYXN0O1xuXG4gICAgLy8gRklYTUU6IGFkZCBsYXN0IHBvaW50XG4gICAgaWYgKHAyLnkgKyBnbHlwaC5jb250cmFzdCA8IGdseXBoLmhlaWdodClcbiAgICAgIGdseXBoLmhlaWdodCA9IHAyLnkgKyBnbHlwaC5jb250cmFzdDtcblxuICAgIGlmIChwb2ludHNbaSArIDFdWzJdID09ICdlJyB8fCBwb2ludHNbaSArIDFdWzJdID09ICdjJykge1xuICAgICAgaSsrO1xuICAgICAgc3RhcnRQb2ludCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbiAgZ2x5cGgucGF0aCA9IGdseXBoLm1lcmdlU2VnbWVudHMoc2VnbWVudHMpO1xuICBnbHlwaC5wYXRoLnJlZHVjZSgpO1xuXG4gIGlmICh0aGlzLnNtb290aClcbiAgICBnbHlwaC5wYXRoLnNtb290aCh7XG4gICAgICB0eXBlOiAnY29udGludW91cydcbiAgICB9KTtcblxuICByZXR1cm4gZ2x5cGg7XG59O1xuXG4vL1dJUFxuR2VuZXJhdG9yLnByb3RvdHlwZS5nZW5lcmF0ZUdseXBoMiA9IGZ1bmN0aW9uKG5hbWUsIHBvaW50cykge1xuICBwb2ludHMgPSBwb2ludHMgfHwgdGhpcy5hbHBoYWJldC5nbHlwaHNbbmFtZV07XG4gIHZhciBnbHlwaCA9IG5ldyBnbHlwaGVyLkdseXBoKG5hbWUsIHRoaXMud2VpZ2h0LCB0aGlzLmNvbnRyYXN0LCB0aGlzLnByb3BvcnRpb24pO1xuXG4gIHZhciBuZXh0QW5nbGUsXG4gICAgY29ybmVyLFxuICAgIHNlZ21lbnRzID0gW1xuICAgIF0sXG4gICAgcGF0aHMgPSBbXSxcbiAgICBjb3JuZXJQb2ludDMsXG4gICAgc3RhcnRQb2ludDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgIC8vV0lQXG4gICAgaWYgKHBvaW50c1tpXVsyXSA9PSAnZG90Jykge1xuICAgICAgc2VnbWVudHMucHVzaCh0aGlzLmFkanVzdFBvaW50KHBvaW50c1tpXSkuYWRkKHRoaXMud2VpZ2h0LCB0aGlzLndlaWdodCAqIC0xKSk7XG4gICAgICBzZWdtZW50cy5wdXNoKHRoaXMuYWRqdXN0UG9pbnQocG9pbnRzW2ldKS5hZGQodGhpcy53ZWlnaHQgKiAtMSwgdGhpcy53ZWlnaHQgKiAtMSkpO1xuICAgICAgc2VnbWVudHMucHVzaCh0aGlzLmFkanVzdFBvaW50KHBvaW50c1tpXSkuYWRkKHRoaXMud2VpZ2h0ICogLTEsIHRoaXMud2VpZ2h0KSk7XG4gICAgICBzZWdtZW50cy5wdXNoKHRoaXMuYWRqdXN0UG9pbnQocG9pbnRzW2ldKS5hZGQodGhpcy53ZWlnaHQpKTtcbiAgICAgIHNlZ21lbnRzLnB1c2goW10pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGkgPj0gcG9pbnRzLmxlbmd0aCAtIDEpXG4gICAgICBicmVhaztcblxuICAgIHZhciBwb2ludDEgPSB0aGlzLmFkanVzdFBvaW50KHBvaW50c1tpXSk7XG4gICAgdmFyIHBvaW50MiA9IHRoaXMuYWRqdXN0UG9pbnQocG9pbnRzW2kgKyAxXSk7XG5cbiAgICBpZiAocG9pbnRzW2kgKyAxXVsyXSA9PSAnYycpIHtcbiAgICAgIHBvaW50MiA9IHRoaXMuYWRqdXN0UG9pbnQocG9pbnRzW3N0YXJ0UG9pbnQgLSAxXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvaW50MiA9IHRoaXMuYWRqdXN0UG9pbnQocG9pbnRzW2kgKyAxXSk7XG4gICAgICBzdGFydFBvaW50ID0gc3RhcnRQb2ludCB8fCBpO1xuICAgIH1cblxuICAgIHZhciBwcmV2aW91c0FuZ2xlID0gbmV4dEFuZ2xlO1xuICAgIHZhciBoZWxwUGF0aCA9IG5ldyBwbHVtaW4uUGF0aCgpO1xuXG4gICAgdmFyIHZlY3RvcjEgPSBwb2ludDIuc3VidHJhY3QocG9pbnQxKTtcbiAgICBpZiAocG9pbnRzW2kgKyAyXSkge1xuICAgICAgdmFyIHZlY3RvcjIgPSB0aGlzLmFkanVzdFBvaW50KHBvaW50c1tpICsgMl0pLnN1YnRyYWN0KHBvaW50Mik7XG4gICAgICBuZXh0QW5nbGUgPSB2ZWN0b3IxLnJvdGF0ZSgxODApLmdldERpcmVjdGVkQW5nbGUodmVjdG9yMik7XG4gICAgfVxuICAgIHZhciBwMSwgcDIsIHAzLCBwNDtcbiAgICBpZiAocG9pbnRzW2kgLSAxXSAmJiBwb2ludHNbaSAtIDFdWzJdID09ICdlJyB8fCBpID09PSAwKSB7XG4gICAgICBwMSA9IHBvaW50MS5hZGQodGhpcy53ZWlnaHQgKiAtMSwgdGhpcy53ZWlnaHQpLnJvdGF0ZSh2ZWN0b3IxLmFuZ2xlICsgOTAsIHBvaW50MSk7XG4gICAgICBwMiA9IHBvaW50MS5hZGQodGhpcy53ZWlnaHQsIHRoaXMud2VpZ2h0KS5yb3RhdGUodmVjdG9yMS5hbmdsZSArIDkwLCBwb2ludDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwMSA9IHBvaW50MS5hZGQodGhpcy53ZWlnaHQsIDApLnJvdGF0ZSh2ZWN0b3IxLmFuZ2xlIC0gOTAsIHBvaW50MSk7XG4gICAgICBwMiA9IHBvaW50MS5hZGQodGhpcy53ZWlnaHQsIDApLnJvdGF0ZSh2ZWN0b3IxLmFuZ2xlICsgOTAsIHBvaW50MSk7XG4gICAgfVxuXG4gICAgaWYgKHBvaW50c1tpICsgMV1bMl0gPT0gJ2UnIHx8IGkgPT09IHBvaW50cy5sZW5ndGggLSAyKSB7XG4gICAgICBwMyA9IHBvaW50Mi5hZGQodGhpcy53ZWlnaHQgKiAtMSwgdGhpcy53ZWlnaHQpLnJvdGF0ZSh2ZWN0b3IxLmFuZ2xlIC0gOTAsIHBvaW50Mik7XG4gICAgICBwNCA9IHBvaW50Mi5hZGQodGhpcy53ZWlnaHQsIHRoaXMud2VpZ2h0KS5yb3RhdGUodmVjdG9yMS5hbmdsZSAtIDkwLCBwb2ludDIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwMyA9IHBvaW50Mi5hZGQodGhpcy53ZWlnaHQsIDApLnJvdGF0ZSh2ZWN0b3IxLmFuZ2xlICsgOTAsIHBvaW50Mik7XG4gICAgICBwNCA9IHBvaW50Mi5hZGQodGhpcy53ZWlnaHQsIDApLnJvdGF0ZSh2ZWN0b3IxLmFuZ2xlIC0gOTAsIHBvaW50Mik7XG4gICAgfVxuXG4gICAgdmFyIGNvcm5lclBvaW50LFxuICAgICAgY29ybmVyUG9pbnQyLFxuICAgICAgaGVscFBvaW50O1xuXG4gICAgaWYgKHBvaW50c1tpIC0gMV0gJiYgcG9pbnRzW2ldWzJdICE9ICdlJyAmJiBwb2ludHNbaSAtIDFdWzJdICE9ICdlJyAmJiBwcmV2aW91c0FuZ2xlKSB7XG4gICAgICB2YXIgcHJldmlvdXNWZWN0b3IgPSB0aGlzLmFkanVzdFBvaW50KHBvaW50c1tpIC0gMV0pLnN1YnRyYWN0KHBvaW50MSk7XG4gICAgICBpZiAocHJldmlvdXNBbmdsZSA8IDApIHtcbiAgICAgICAgY29ybmVyUG9pbnQgPSBwMTtcbiAgICAgICAgLy8gc2VnbWVudHMucHVzaChtYWtlQ29ybmVyKGNvcm5lclBvaW50MiwgY29ybmVyUG9pbnQsIHByZXZpb3VzVmVjdG9yLCB2ZWN0b3IxKSk7XG4gICAgICAgIHNlZ21lbnRzLnNwbGljZSgwLCAwLCBtYWtlQ29ybmVyKGNvcm5lclBvaW50MywgcDIsIHByZXZpb3VzVmVjdG9yLCB2ZWN0b3IxKSk7XG4gICAgICAgIC8vZm9yIGJsdW50IGVkZ2VzXG4gICAgICAgIHNlZ21lbnRzLnB1c2goY29ybmVyUG9pbnQyKTtcbiAgICAgICAgc2VnbWVudHMucHVzaChjb3JuZXJQb2ludCk7XG5cblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29ybmVyUG9pbnQgPSBwMjtcbiAgICAgICAgLy8gc2VnbWVudHMuc3BsaWNlKDAsIDAsIG1ha2VDb3JuZXIoY29ybmVyUG9pbnQyLCBjb3JuZXJQb2ludCwgcHJldmlvdXNWZWN0b3IsIHZlY3RvcjEpKTtcbiAgICAgICAgc2VnbWVudHMucHVzaChtYWtlQ29ybmVyKGNvcm5lclBvaW50MywgcDEsIHByZXZpb3VzVmVjdG9yLCB2ZWN0b3IxKSk7XG4gICAgICAgIC8vZm9yIGJsdW50IGVkZ2VzXG4gICAgICAgIHNlZ21lbnRzLnNwbGljZSgwLCAwLCBjb3JuZXJQb2ludDIpO1xuICAgICAgICBzZWdtZW50cy5zcGxpY2UoMCwgMCwgY29ybmVyUG9pbnQpO1xuXG4gICAgICB9XG5cbiAgICAgIGhlbHBQYXRoID0gbmV3IHBsdW1pbi5QYXRoKHNlZ21lbnRzKTtcbiAgICAgIHBhdGhzLnB1c2goaGVscFBhdGgpO1xuICAgICAgaGVscFBvaW50ID0gc2VnbWVudHNbMF07XG4gICAgICBzZWdtZW50cyA9IHNlZ21lbnRzLnNsaWNlKC0xKTtcbiAgICAgIHNlZ21lbnRzLnNwbGljZSgwLCAwLCBoZWxwUG9pbnQpO1xuICAgIH1cblxuICAgIGlmIChuZXh0QW5nbGUpIHtcblxuICAgICAgaWYgKG5leHRBbmdsZSA8IDApIHtcbiAgICAgICAgY29ybmVyUG9pbnQyID0gcDQ7XG4gICAgICAgIGNvcm5lclBvaW50MyA9IHAzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29ybmVyUG9pbnQyID0gcDM7XG4gICAgICAgIGNvcm5lclBvaW50MyA9IHA0O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb2ludHNbaSAtIDFdICYmIHBvaW50c1tpIC0gMV1bMl0gPT0gJ2UnIHx8ICFwcmV2aW91c0FuZ2xlKSB7XG4gICAgICBzZWdtZW50cy5wdXNoKHAxKTtcbiAgICAgIHNlZ21lbnRzLnNwbGljZSgwLCAwLCBwMik7XG4gICAgfVxuXG4gICAgaWYgKHBvaW50c1tpICsgMV1bMl0gPT0gJ2UnIHx8IGkgPT0gcG9pbnRzLmxlbmd0aCAtIDIpIHtcbiAgICAgIHNlZ21lbnRzLnNwbGljZSgwLCAwLCBwMyk7XG4gICAgICBzZWdtZW50cy5wdXNoKHA0KTtcbiAgICAgIGhlbHBQYXRoID0gbmV3IHBsdW1pbi5QYXRoKHNlZ21lbnRzKTtcbiAgICAgIHBhdGhzLnB1c2goaGVscFBhdGgpO1xuICAgICAgc2VnbWVudHMgPSBbXTtcbiAgICB9XG5cbiAgICBpZiAocG9pbnQyLnggKyBnbHlwaC53ZWlnaHQgPiBnbHlwaC53aWR0aClcbiAgICAgIGdseXBoLndpZHRoID0gcG9pbnQyLnggKyBnbHlwaC53ZWlnaHQ7XG5cbiAgICAvLyBGSVhNRTogYWRkIGxhc3QgcG9pbnRcbiAgICBpZiAocG9pbnQyLnggKyBnbHlwaC53ZWlnaHQgPiBnbHlwaC53aWR0aClcbiAgICAgIGdseXBoLndpZHRoID0gcG9pbnQyLnggKyBnbHlwaC53ZWlnaHQ7XG5cbiAgICBpZiAocG9pbnQyLnkgKyBnbHlwaC5jb250cmFzdCA8IGdseXBoLmhlaWdodClcbiAgICAgIGdseXBoLmhlaWdodCA9IHBvaW50Mi55ICsgZ2x5cGguY29udHJhc3Q7XG5cbiAgICAvLyBGSVhNRTogYWRkIGxhc3QgcG9pbnRcbiAgICBpZiAocG9pbnQyLnkgKyBnbHlwaC5jb250cmFzdCA8IGdseXBoLmhlaWdodClcbiAgICAgIGdseXBoLmhlaWdodCA9IHBvaW50Mi55ICsgZ2x5cGguY29udHJhc3Q7XG5cbiAgfVxuICBnbHlwaC5wYXRoID0gcGF0aHNbMF07XG4gIGdseXBoLnBhdGguY2xvc2VQYXRoKCk7XG4gIGZvciAoaSA9IDE7IGkgPCBwYXRocy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwYXRoc1tpXS5sZW5ndGgpIHtcbiAgICAgIHZhciBzZWdtZW50ID0gcGF0aHNbaV07XG4gICAgICBzZWdtZW50LmNsb3NlUGF0aCgpO1xuICAgICAgZ2x5cGgucGF0aCA9IGdseXBoLnBhdGgudW5pdGUoc2VnbWVudCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBnbHlwaDtcbn07XG5cbmZ1bmN0aW9uIG1ha2VDb3JuZXIocDEsIHAyLCB2ZWN0b3IyLCB2ZWN0b3IzKSB7XG4gIHZhciB2ZWN0b3IxID0gcDIuc3VidHJhY3QocDEpO1xuXG4gIHZhciByYWQxID0gdmVjdG9yMi5yb3RhdGUoMTgwKS5nZXRBbmdsZUluUmFkaWFucyh2ZWN0b3IxKTtcbiAgdmFyIHJhZDIgPSB2ZWN0b3IzLmdldEFuZ2xlSW5SYWRpYW5zKHZlY3RvcjEpO1xuXG4gIHZhciB4ID0gKHZlY3RvcjEubGVuZ3RoICogTWF0aC5zaW4ocmFkMSkpIC8gTWF0aC5zaW4ocmFkMiArIHJhZDEpO1xuXG4gIC8vIGlmICh4ID4gMzApXG4gIC8vICAgeCA9IDMwO1xuXG4gIC8vIGlmICh4ID4gNTApXG4gIC8vICAgeCA9IDMwO1xuXG4gIHZhciByZXN1bHQgPSBuZXcgcGx1bWluLlBvaW50KHgsIDApO1xuICByZXN1bHQgPSByZXN1bHQucm90YXRlKHZlY3RvcjIucm90YXRlKDE4MCkuYW5nbGUpO1xuICByZXN1bHQgPSByZXN1bHQuYWRkKHAxKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuR2VuZXJhdG9yLnByb3RvdHlwZS5nZW5lcmF0ZUdseXBoV2l0aEFjY2VudCA9IGZ1bmN0aW9uKG5hbWUsIGFjY2VudCkge1xuICB2YXIgZ2x5cGg7XG5cbiAgaWYgKGFjY2VudC5sZW5ndGggPiAxKVxuICAgIGFjY2VudCA9IGRlY29kZUh0bWwoJyYnICsgYWNjZW50ICsgJzsnKTtcblxuICBpZiAobmFtZSA9PSAnaScpXG4gICAgZ2x5cGggPSB0aGlzLmdlbmVyYXRlR2x5cGgoJ8SxJyk7XG4gIGVsc2VcbiAgICBnbHlwaCA9IHRoaXMuZ2VuZXJhdGVHbHlwaChuYW1lKTtcblxuICB2YXIgYWNjZW50R2x5cGggPSB0aGlzLmdlbmVyYXRlR2x5cGgoYWNjZW50KTtcbiAgLy8gRklYTUU6IGZpeCB0aGlzIGZvciBpdGFsaWNzXG4gIGFjY2VudEdseXBoLnBhdGgucG9zaXRpb24ueCArPSAoZ2x5cGgud2lkdGggLSBhY2NlbnRHbHlwaC53aWR0aCkgLyAyO1xuXG4gIGlmIChuYW1lWzBdID09PSBuYW1lWzBdLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBhY2NlbnRHbHlwaC5wYXRoLnBvc2l0aW9uLnkgKz0gOTAgKyBnbHlwaC5oZWlnaHQ7XG4gIH1cblxuICBnbHlwaC5wYXRoID0gZ2x5cGgucGF0aC51bml0ZShhY2NlbnRHbHlwaC5wYXRoKTtcbiAgZ2x5cGgubmFtZSA9IGRlY29kZUh0bWwoJyYnICsgbmFtZSArIHRoaXMuYWxwaGFiZXQubmFtZU1hcFthY2NlbnRdICsgJzsnKTtcbiAgcmV0dXJuIGdseXBoO1xufTtcblxuR2VuZXJhdG9yLnByb3RvdHlwZS5nZW5lcmF0ZUdseXBoV2l0aEFjY2VudDIgPSBmdW5jdGlvbihuYW1lLCBhY2NlbnQpIHtcbiAgdmFyIGdseXBoO1xuXG4gIGlmIChhY2NlbnQubGVuZ3RoID4gMSlcbiAgICBhY2NlbnQgPSBkZWNvZGVIdG1sKCcmJyArIGFjY2VudCArICc7Jyk7XG5cbiAgaWYgKG5hbWUgPT0gJ2knKVxuICAgIGdseXBoID0gdGhpcy5nZW5lcmF0ZUdseXBoMignxLEnKTtcbiAgZWxzZVxuICAgIGdseXBoID0gdGhpcy5nZW5lcmF0ZUdseXBoMihuYW1lKTtcblxuICB2YXIgYWNjZW50R2x5cGggPSB0aGlzLmdlbmVyYXRlR2x5cGgyKGFjY2VudCk7XG4gIC8vIEZJWE1FOiBmaXggdGhpcyBmb3IgaXRhbGljc1xuICBhY2NlbnRHbHlwaC5wYXRoLnBvc2l0aW9uLnggKz0gKGdseXBoLndpZHRoIC0gYWNjZW50R2x5cGgud2lkdGgpIC8gMjtcblxuICBpZiAobmFtZVswXSA9PT0gbmFtZVswXS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgYWNjZW50R2x5cGgucGF0aC5wb3NpdGlvbi55ICs9IDkwICsgZ2x5cGguaGVpZ2h0O1xuICB9XG5cbiAgZ2x5cGgucGF0aCA9IGdseXBoLnBhdGgudW5pdGUoYWNjZW50R2x5cGgucGF0aCk7XG4gIGdseXBoLm5hbWUgPSBkZWNvZGVIdG1sKCcmJyArIG5hbWUgKyB0aGlzLmFscGhhYmV0Lm5hbWVNYXBbYWNjZW50XSArICc7Jyk7XG4gIHJldHVybiBnbHlwaDtcbn07XG5cbmZ1bmN0aW9uIGRlY29kZUh0bWwoaHRtbCkge1xuICB2YXIgdHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICB0eHQuaW5uZXJIVE1MID0gaHRtbDtcbiAgcmV0dXJuIHR4dC52YWx1ZTtcbn1cblxuR2VuZXJhdG9yLnByb3RvdHlwZS5kb3dubG9hZCA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5mb250KVxuICAgIHRoaXMuZm9udC5kb3dubG9hZCgpO1xuICBlbHNlXG4gICAgY29uc29sZS5sb2coJ2dlbmVyYXRlIGZpcnN0Jyk7XG59O1xuXG5mdW5jdGlvbiBzaWduKHgpIHtcbiAgLy8gMCA9PSAxXG4gIHJldHVybiB4ID49IDAgPyAxIDogLTE7XG59XG5cbmV4cG9ydHMuR2VuZXJhdG9yID0gR2VuZXJhdG9yO1xuIiwiZnVuY3Rpb24gR2x5cGgobmFtZSwgd2VpZ2h0LCBjb250cmFzdCwgcHJvcG9ydGlvbikge1xuICB0aGlzLm5hbWUgPSBuYW1lO1xuICB0aGlzLndlaWdodCA9IHdlaWdodDtcbiAgdGhpcy5jb250cmFzdCA9IGNvbnRyYXN0O1xuICB0aGlzLnByb3BvcnRpb24gPSBwcm9wb3J0aW9uO1xuXG4gIHRoaXMucGF0aCA9IHVuZGVmaW5lZDtcbiAgdGhpcy53aWR0aCA9IDA7XG4gIHRoaXMuaGVpZ2h0ID0gMDtcbn1cblxuR2x5cGgucHJvdG90eXBlLm1lcmdlU2VnbWVudHMgPSBmdW5jdGlvbihzZWdtZW50cykge1xuXG4gIHZhciByZXN1bHQgPSBzZWdtZW50c1swXS5jbG9uZSgpO1xuICBmb3IgKGkgPSAxOyBpIDwgc2VnbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICByZXN1bHQgPSByZXN1bHQudW5pdGUoc2VnbWVudHNbaV0pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vREVCVUdcbkdseXBoLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oeCwgeSkge1xuICB2YXIgcGF0aCA9IHRoaXMucGF0aC5jbG9uZSgpLnNjYWxlKDAuMSwgLTAuMSk7XG4gIHBhdGgucG9zaXRpb24gPSBbeCArIHBhdGgucG9zaXRpb24ueCAqIDAuMSAsIHkgLSBwYXRoLnBvc2l0aW9uLnkgKiAwLjFdO1xuICBwYXRoLmZpbGxDb2xvciA9ICdibGFjayc7XG4gIHBhdGguc2VsZWN0ZWQgPSB0cnVlO1xuXG4gIG5ldyBwbHVtaW4ucGFwZXIuUGF0aC5DaXJjbGUoe1xuICAgIGNlbnRlcjogW3gsIHldLFxuICAgIHJhZGl1czogMyxcbiAgICBzdHJva2VDb2xvcjogJ3JlZCdcbiAgfSk7XG4gIG5ldyBwbHVtaW4ucGFwZXIuUGF0aC5DaXJjbGUoe1xuICAgIGNlbnRlcjogW3ggKyB0aGlzLndpZHRoICogMC4xLCB5XSxcbiAgICByYWRpdXM6IDMsXG4gICAgc3Ryb2tlQ29sb3I6ICdyZWQnXG4gIH0pO1xufTtcblxuZXhwb3J0cy5HbHlwaCA9IEdseXBoO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0LmpzJyk7XG52YXIgZ2VuZXJhdG9yID0gcmVxdWlyZSgnLi9nZW5lcmF0b3IuanMnKTtcbnZhciBnbHlwaCA9IHJlcXVpcmUoJy4vZ2x5cGguanMnKTtcblxuZXhwb3J0cy5HbHlwaCA9IGdseXBoLkdseXBoO1xuZXhwb3J0cy5BbHBoYWJldCA9IGFscGhhYmV0LkFscGhhYmV0O1xuZXhwb3J0cy5HZW5lcmF0b3IgPSBnZW5lcmF0b3IuR2VuZXJhdG9yO1xuIl19
