function Alphabet(options) {
  xheight = options.xheight || 5;
  descender = options.descender || -3;
  aeheight = options.aeheight || xheight / 2;

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
      [0, xheight/2],
      [2, xheight/2]
    ],
    //endash
    '–': [
      [0, xheight/2],
      [10, xheight/2]
    ],
    //emdash
    '—': [
      [0, xheight/2],
      [20, xheight/2]
    ],
    //minus
    '-': [
      [0, xheight/2],
      [2, xheight/2]
    ],
    '/': [
      [0, 0],
      [5, 10]
    ]
  };

  if (options.weight < 15)
    this.glyphs.G.push([8 - Math.round(options.weight / 10), xheight]);

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
    '?': 'quest',
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
