function Alphabet(xheight) {
  xheight = xheight || 5;

  this.glyphs = {
    c: [
      [10, 10 - xheight],
      [0, 10 - xheight],
      [0, 10],
      [10, 10]
    ],
    i: [
      [0, 10 - xheight],
      [0, 10]
    ],
    o: [
      [0, 10],
      [0, 10 - xheight],
      [10, 10 - xheight],
      [10, 10],
      [0, 10]
    ],
    s: [
      [0, 10],
      [10, 10],
      [10, 10 - xheight/2],
      [0, 10 - xheight/2],
      [0, 10 - xheight],
      [10, 10 - xheight],
    ],
    u: [
      [0, 10 - xheight],
      [0, 10],
      [10, 10],
      [10, 10 - xheight]
    ],
    z: [
      [10, 10],
      [0, 10],
      [10, 10 - xheight],
      [0, 10 - xheight],
    ],
    A: [
      [0, 10],
      [5, 0],
      [10, 10]
    ],
    C: [
      [10, 0],
      [0, 0],
      [0, 10],
      [10, 10]
    ],
    I: [
      [0, 0],
      [0, 10]
    ],
    P: [
      [0, 10],
      [0, 0],
      [10, 0],
      [10, 10 - xheight],
      [0, 10 - xheight]
    ],
    O: [
      [0, 10],
      [0, 0],
      [10, 0],
      [10, 10],
      [0, 10]
    ],
    S: [
      [0, 10],
      [10, 10],
      [10, 10 - xheight],
      [0, 10 - xheight],
      [0, 0],
      [10, 0],
    ],
    U: [
      [0, 0],
      [0, 10],
      [10, 10],
      [10, 0]
    ],
    Z: [
      [10, 10],
      [0, 10],
      [10, 0],
      [0, 0],
    ]
  };
}

Alphabet.prototype.availableGlyphs = function() {
  return Object.keys(this.glyphs);
};
