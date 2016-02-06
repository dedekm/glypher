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
      [0, 10, 'dot']
    ],
    j: [
      [-2, descender],
      [1, descender],
      [1, xheight, 'e'],
      [1, 10, 'dot']
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
      [0, 14],
      [2, 12],
      [4, 14]
    ],
    '´':[
      [0, 12],
      [2, 14]
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
  var availableGlyphs = this.alphabet.availableGlyphs();

  for (var i = 0; i < availableGlyphs.length; i++) {
    this.beforeGenerateGlyph(availableGlyphs[i]);
    var glyph = this.generateGlyph(availableGlyphs[i], this.alphabet.glyphs[availableGlyphs[i]]);
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

    if (points[i+1][2] == 'c') {
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

    if (points[i + 1][2] == 'e' || points[i + 1][2] == 'c') {
      i++;
      startPoint = undefined;
    }
  }
  glyph.path = glyph.mergeSegments(segments);
  glyph.path.reduce();

  return glyph;
};

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
    canvasId = 'glyph_' + glyph.name;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYWxwaGFiZXQuanMiLCJzcmMvZ2VuZXJhdG9yLmpzIiwic3JjL2dseXBoLmpzIiwic3JjL2dseXBoZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbmpCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDclZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJmdW5jdGlvbiBBbHBoYWJldCh4aGVpZ2h0LCBkZXNjZW5kZXIsIGFlaGVpZ2h0KSB7XG4gIHhoZWlnaHQgPSB4aGVpZ2h0IHx8IDU7XG4gIGRlc2NlbmRlciA9IGRlc2NlbmRlciB8fCAtMztcbiAgYWVoZWlnaHQgPSBhZWhlaWdodCB8fCB4aGVpZ2h0IC8gMjtcblxuICB0aGlzLmdseXBocyA9IHtcbiAgICAnLm5vdGRlZic6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMCwgJ2MnXVxuICAgIF0sXG4gICAgYTogW1xuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgYWVoZWlnaHRdLFxuICAgICAgWzEwLCBhZWhlaWdodF1cbiAgICBdLFxuICAgIGI6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgYzogW1xuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIGQ6IFtcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIGU6IFtcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCBhZWhlaWdodF0sXG4gICAgICBbMCwgYWVoZWlnaHRdXG4gICAgXSxcbiAgICBmOiBbXG4gICAgICBbMywgMF0sXG4gICAgICBbMywgMTBdLFxuICAgICAgWzEwLCAxMCwgJ2UnXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIGc6IFtcbiAgICAgIFswLCBkZXNjZW5kZXJdLFxuICAgICAgWzEwLCBkZXNjZW5kZXJdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgIGg6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMCwgJ2UnXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIDBdXG4gICAgXSxcbiAgICBpOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodCwgJ2UnXSxcbiAgICAgIFswLCAxMCwgJ2RvdCddXG4gICAgXSxcbiAgICBqOiBbXG4gICAgICBbLTIsIGRlc2NlbmRlcl0sXG4gICAgICBbMSwgZGVzY2VuZGVyXSxcbiAgICAgIFsxLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzEsIDEwLCAnZG90J11cbiAgICBdLFxuICAgIGs6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMCwgJ2UnXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbNSwgeGhlaWdodCAvIDJdLFxuICAgICAgWzEwLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFs1LCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTAsIDBdXG4gICAgXSxcbiAgICBsOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTBdXG4gICAgXSxcbiAgICBtOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAwLCAnZSddLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsyMCwgeGhlaWdodF0sXG4gICAgICBbMjAsIDBdXG4gICAgXSxcbiAgICBuOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAwXVxuICAgIF0sXG4gICAgbzogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMCwgJ2MnXVxuICAgIF0sXG4gICAgcDogW1xuICAgICAgWzAsIGRlc2NlbmRlcl0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXVxuICAgIF0sXG4gICAgcTogW1xuICAgICAgWzEwLCBkZXNjZW5kZXJdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgIHI6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIHM6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFswLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICB0OiBbXG4gICAgICAvLyBGSVhNRTogeGhlaWdodCArIDIgPz9cbiAgICAgIFszLCB4aGVpZ2h0ICsgMl0sXG4gICAgICBbMywgMF0sXG4gICAgICBbMTAsIDAsICdlJ10sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICB1OiBbXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgdjogW1xuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFs1LCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuXG4gICAgXSxcbiAgICB3OiBbXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzUsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTAsIHhoZWlnaHQsICcgZSddLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTUsIDBdLFxuICAgICAgWzIwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMjAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICB4OiBbXG4gICAgICAvLyBbMCwgMF0sXG4gICAgICAvLyBbMTAsIHhoZWlnaHQsICdlJ10sXG4gICAgICAvLyBbMCwgeGhlaWdodF0sXG4gICAgICAvLyBbMTAsIDBdXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodCAvIDZdLFxuICAgICAgWzEwLCB4aGVpZ2h0IC0geGhlaWdodCAvIDZdLFxuICAgICAgWzEwLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDZdLFxuICAgICAgWzAsIHhoZWlnaHQgLSB4aGVpZ2h0IC8gNl0sXG4gICAgICBbMCwgeGhlaWdodCwgJ2UnXVxuICAgIF0sXG4gICAgeTogW1xuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodCwgJ2UnXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMTAsIGRlc2NlbmRlcl0sXG4gICAgICBbMCwgZGVzY2VuZGVyXVxuICAgIF0sXG4gICAgejogW1xuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIEE6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFs1LCAxMF0sXG4gICAgICBbMTAsIDAsICdlJ10sXG4gICAgICBbMywgeGhlaWdodCAvIDJdLFxuICAgICAgWzcsIHhoZWlnaHQgLyAyXVxuICAgIF0sXG4gICAgQjogW1xuICAgICAgLy8gWzAsIHhoZWlnaHRdLFxuICAgICAgLy8gWzAsIDEwXSxcbiAgICAgIC8vIC8vIEZJWE1FOiBzaG91bGQgZGVwZW5kIG9uIGZvbnQgd2VpZ2h0XG4gICAgICAvLyBbOSwgMTBdLFxuICAgICAgLy8gWzksIHhoZWlnaHRdLFxuICAgICAgLy8gWzAsIHhoZWlnaHQsICdlJ10sXG4gICAgICAvLyBbMCwgMF0sXG4gICAgICAvLyBbMCwgeGhlaWdodF0sXG4gICAgICAvLyBbMTAsIHhoZWlnaHRdLFxuICAgICAgLy8gWzEwLCAwXSxcbiAgICAgIC8vIFswLCAwXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFs4LCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0LCAnZSddLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF1cbiAgICBdLFxuICAgIEM6IFtcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgIEQ6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbNywgMTBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMTAgLSB4aGVpZ2h0XSxcbiAgICAgIFs3LCAwXSxcbiAgICAgIFswLCAwXVxuICAgIF0sXG4gICAgRTogW1xuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwLCAnZSddLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgRjogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTAsICdlJ10sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICBHOiBbXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgICAgLy8gWzksIHhoZWlnaHRdXG4gICAgXSxcbiAgICBIOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgMTAsICdlJ10sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCAxMCwgJ2UnXSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodF1cbiAgICBdLFxuICAgIEk6IFtcbiAgICAgIFs1LCAxMF0sXG4gICAgICBbNSwgMCwgJ2UnXSxcbiAgICAgIFswLCAwXSxcbiAgICAgIFsxMCwgMCwgJ2UnXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXVxuICAgIF0sXG4gICAgSjogW1xuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyXVxuICAgIF0sXG4gICAgSzogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCAwLCAnZSddLFxuICAgICAgWzAsIDVdLFxuICAgICAgWzUsIDVdLFxuICAgICAgWzEwLCAxMCwgJ2UnXSxcbiAgICAgIFswLCA1XSxcbiAgICAgIFs1LCA1XSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgIEw6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdXG4gICAgXSxcbiAgICBNOiBbXG4gICAgICAvLyBbMCwgMF0sXG4gICAgICAvLyBbMCwgMTBdLFxuICAgICAgLy8gWzEwLCAxMF0sXG4gICAgICAvLyBbMTAsIHhoZWlnaHQgLyAyLCAnZSddLFxuICAgICAgLy8gWzEwLCAxMF0sXG4gICAgICAvLyBbMjAsIDEwXSxcbiAgICAgIC8vIFsyMCwgMF1cbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbNSwgMTBdLFxuICAgICAgWzEwLCAoMTAgLSB4aGVpZ2h0KSAvIDJdLFxuICAgICAgWzE1LCAxMF0sXG4gICAgICBbMjAsIDEwXSxcbiAgICAgIFsyMCwgMF1cbiAgICBdLFxuICAgIE46IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsICgxMCAtIHhoZWlnaHQpIC8gMl0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCAxMF1cbiAgICBdLFxuICAgIE86IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMCwgJ2MnXVxuICAgIF0sXG4gICAgUDogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgUTogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwLCAnYyddLFxuICAgICAgWzgsIDBdLFxuICAgICAgLy8gMCAtIGNvbnRyYXN0ID8/P1xuICAgICAgWzgsIGRlc2NlbmRlciAqIDAuNzVdLFxuICAgICAgWzEwLCBkZXNjZW5kZXIgKiAwLjc1XSxcbiAgICBdLFxuICAgIFI6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodCwgJ2UnXSxcbiAgICAgIFs1LCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzEwLCAwXVxuXG4gICAgXSxcbiAgICBTOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFswLCB4aGVpZ2h0XSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXVxuICAgIF0sXG4gICAgVDogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTAsICdlJ10sXG4gICAgICBbNSwgMTBdLFxuICAgICAgWzUsIDBdXG4gICAgXSxcbiAgICBVOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgMTBdXG4gICAgXSxcbiAgICBWOiBbXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyXSxcbiAgICAgIFs1LCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzEwLCAxMF1cbiAgICBdLFxuICAgIFc6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzUsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTAsIDEwLCAnIGUnXSxcbiAgICAgIFsxMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzE1LCAwXSxcbiAgICAgIFsyMCwgeGhlaWdodCAvIDJdLFxuICAgICAgWzIwLCAxMF1cblxuICAgIF0sXG4gICAgWDogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHQgLyAyIC0gMV0sXG4gICAgICBbMTAsIDEwIC0geGhlaWdodCAvIDIgKyAxXSxcbiAgICAgIFsxMCwgMTAsICdlJ10sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCB4aGVpZ2h0IC8gMiAtIDFdLFxuICAgICAgWzAsIDEwIC0geGhlaWdodCAvIDIgKyAxXSxcbiAgICAgIFswLCAxMCwgJ2UnXVxuICAgIF0sXG4gICAgWTogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFswLCA4XSxcbiAgICAgIFs1LCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbMTAsIDhdLFxuICAgICAgWzEwLCAxMCwgJ2UnXSxcbiAgICAgIFs1LCB4aGVpZ2h0IC8gMl0sXG4gICAgICBbNSwgMF1cbiAgICBdLFxuICAgIFo6IFtcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFswLCAxMF1cbiAgICBdLFxuICAgICfLhyc6W1xuICAgICAgWzAsIDE0XSxcbiAgICAgIFsyLCAxMl0sXG4gICAgICBbNCwgMTRdXG4gICAgXSxcbiAgICAnwrQnOltcbiAgICAgIFswLCAxMl0sXG4gICAgICBbMiwgMTRdXG4gICAgXSxcbiAgICAnMCc6IFtcbiAgICAgIFswLCAwXSxcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgMF0sXG4gICAgICBbMCwgMCwgJ2MnXVxuICAgIF0sXG4gICAgJzEnOiBbXG4gICAgICBbNSwgMF0sXG4gICAgICBbNSwgMTBdLFxuICAgICAgWzAsIDEwLCAnZSddLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXVxuICAgIF0sXG4gICAgJzInOiBbXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzAsIDEwXVxuICAgIF0sXG4gICAgJzMnOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMCwgMTAsICdlJ10sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHRdXG4gICAgXSxcbiAgICAnNCc6IFtcbiAgICAgIFswLCAxMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHQsICdlJ10sXG4gICAgICBbMTAsIDEwXSxcbiAgICAgIFsxMCwgMF1cbiAgICBdLFxuICAgICc1JzogW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF1cbiAgICBdLFxuICAgICc2JzogW1xuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIDBdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFsxMCwgeGhlaWdodF0sXG4gICAgICBbMCwgeGhlaWdodF1cbiAgICBdLFxuICAgICc3JzogW1xuICAgICAgWzAsIDEwXSxcbiAgICAgIFsxMCwgMTBdLFxuICAgICAgWzEwLCAwXVxuICAgIF0sXG4gICAgJzgnOiBbXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzAsIHhoZWlnaHQsICdlJ10sXG4gICAgICBbMCwgMF0sXG4gICAgICBbMCwgeGhlaWdodF0sXG4gICAgICBbMTAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCAwXSxcbiAgICAgIFswLCAwXVxuICAgIF0sXG4gICAgJzknOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMTAsIDBdLFxuICAgICAgWzEwLCAxMF0sXG4gICAgICBbMCwgMTBdLFxuICAgICAgWzAsIHhoZWlnaHRdLFxuICAgICAgWzEwLCB4aGVpZ2h0XVxuICAgIF0sXG4gICAgJy8nOiBbXG4gICAgICBbMCwgMF0sXG4gICAgICBbNSwgMTBdXG4gICAgXVxuICB9O1xuXG4gIHRoaXMubmFtZU1hcCA9IHtcbiAgICAnwrQnOiAnYWN1dGUnLFxuICAgICfLhyc6ICdjYXJvbicsXG4gICAgJzAnOiAnemVybycsXG4gICAgJzEnOiAnb25lJyxcbiAgICAnMic6ICd0d28nLFxuICAgICczJzogJ3RocmVlJyxcbiAgICAnNCc6ICdmb3VyJyxcbiAgICAnNSc6ICdmaXZlJyxcbiAgICAnNic6ICdzaXgnLFxuICAgICc3JzogJ3NldmVuJyxcbiAgICAnOCc6ICdlaWdodCcsXG4gICAgJzknOiAnbmluZScsXG4gICAgJy8nOiAnc2xhc2gnXG4gIH07XG59XG5BbHBoYWJldC5wcm90b3R5cGUubWF4SGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBtYXggPSAwO1xuICBmb3IgKHZhciBrZXkgaW4gdGhpcy5nbHlwaHMpIHtcbiAgICBpZiAodGhpcy5nbHlwaHNba2V5XSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmdseXBoc1trZXldLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmdseXBoc1trZXldW2ldWzFdID4gbWF4KVxuICAgICAgICAgIG1heCA9IHRoaXMuZ2x5cGhzW2tleV1baV1bMV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1heDtcbn07XG5cbkFscGhhYmV0LnByb3RvdHlwZS5hdmFpbGFibGVHbHlwaHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZ2x5cGhzKTtcbn07XG5cbmV4cG9ydHMuQWxwaGFiZXQgPSBBbHBoYWJldDtcbiIsImZ1bmN0aW9uIEdlbmVyYXRvcihvcHRpb25zKSB7XG4gIHBhcGVyLmluc3RhbGwod2luZG93KTtcbiAgLy8gRklYTUU6XG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlDYW52YXMnKTtcbiAgcGFwZXIuc2V0dXAoY2FudmFzKTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdGhpcy5wcm9wb3J0aW9uID0gb3B0aW9ucy5wcm9wb3J0aW9uIHx8IChvcHRpb25zLmhlaWdodCAvIG9wdGlvbnMud2lkdGgpIHx8IDE7XG5cbiAgdGhpcy53ZWlnaHQgPSBvcHRpb25zLndlaWdodCB8fCAyMDtcbiAgdGhpcy5jb250cmFzdCA9IG9wdGlvbnMuY29udHJhc3QgfHwgNTtcbiAgdGhpcy5kZXNjZW5kZXIgPSBvcHRpb25zLmRlc2NlbmRlciB8fCAtMztcbiAgdGhpcy54c2hpZnQgPSBvcHRpb25zLnhzaGlmdCB8fCAwO1xuICB0aGlzLnlzaGlmdCA9IG9wdGlvbnMueXNoaWZ0IHx8IDA7XG4gIHRoaXMuaXRhbGljID0gb3B0aW9ucy5pdGFsaWMgfHwgMDtcbiAgdGhpcy5zZWdtZW50UmVkdWN0aW9uID0gb3B0aW9ucy5zZWdtZW50UmVkdWN0aW9uO1xuXG4gIHRoaXMuc2l6ZSA9IDEwO1xuXG4gIHRoaXMuYWxwaGFiZXQgPSBvcHRpb25zLmFscGhhYmV0IHx8IG5ldyBnbHlwaGVyLkFscGhhYmV0KG9wdGlvbnMueGhlaWdodCwgdGhpcy5kZXNjZW5kZXIpO1xuICB0aGlzLmdseXBocyA9IFtdO1xuICB0aGlzLm9wZW50eXBlID0gdW5kZWZpbmVkO1xufVxuXG5HZW5lcmF0b3IucHJvdG90eXBlLmdlbmVyYXRlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZ2x5cGhzID0ge307XG4gIHZhciBhdmFpbGFibGVHbHlwaHMgPSB0aGlzLmFscGhhYmV0LmF2YWlsYWJsZUdseXBocygpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXZhaWxhYmxlR2x5cGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgdGhpcy5iZWZvcmVHZW5lcmF0ZUdseXBoKGF2YWlsYWJsZUdseXBoc1tpXSk7XG4gICAgdmFyIGdseXBoID0gdGhpcy5nZW5lcmF0ZUdseXBoKGF2YWlsYWJsZUdseXBoc1tpXSwgdGhpcy5hbHBoYWJldC5nbHlwaHNbYXZhaWxhYmxlR2x5cGhzW2ldXSk7XG4gICAgdGhpcy5hZnRlckdlbmVyYXRlR2x5cGgoZ2x5cGgpO1xuICAgIHRoaXMuZ2x5cGhzW2dseXBoLm5hbWVdID0gZ2x5cGg7XG4gIH1cbn07XG5cbkdlbmVyYXRvci5wcm90b3R5cGUubWVyZ2VHbHlwaHNXaXRoID0gZnVuY3Rpb24ocGF0aCwgbGlzdCkge1xuICBpZiAoIWxpc3QpIHtcbiAgICBsaXN0ID0gdGhpcy5hbHBoYWJldC5hdmFpbGFibGVHbHlwaHMoKTtcbiAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShsaXN0KSkge1xuICAgIGxpc3QgPSBsaXN0LnNwbGl0KFwiXCIpO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdGhpcy5nbHlwaHNbbGlzdFtpXV0ucGF0aCA9IHRoaXMuZ2x5cGhzW2xpc3RbaV1dLnBhdGgudW5pdGUocGF0aCk7XG4gIH1cbn07XG5cbkdlbmVyYXRvci5wcm90b3R5cGUuZ2V0R2x5cGggPSBmdW5jdGlvbihuYW1lKSB7XG4gIGlmICh0aGlzLmdseXBoc1tuYW1lXSkge1xuICAgIHJldHVybiB0aGlzLmdseXBoc1tuYW1lXTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnZ2x5cGggJyArIGdseXBoLm5hbWUgKyAnIG5vdCBkZWZpbmVkJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5HZW5lcmF0b3IucHJvdG90eXBlLmFkanVzdFBvaW50ID0gZnVuY3Rpb24ocG9pbnQpIHtcbiAgcmV0dXJuIG5ldyBQb2ludChwb2ludClcbiAgICAubXVsdGlwbHkoW3RoaXMuc2l6ZSAvIHRoaXMucHJvcG9ydGlvbiwgdGhpcy5zaXplIC0gKHRoaXMuY29udHJhc3QgKiAyIC8gdGhpcy5zaXplKV0pXG4gICAgLmFkZCh0aGlzLndlaWdodCwgdGhpcy5jb250cmFzdClcbiAgICAubXVsdGlwbHkoMSwgLTEpXG4gICAgLmFkZCh0aGlzLnhzaGlmdCwgdGhpcy55c2hpZnQpO1xufTtcblxuR2VuZXJhdG9yLnByb3RvdHlwZS5kcmF3RG90ID0gZnVuY3Rpb24ocG9pbnQsIGJveCkge1xuICB2YXIgcDEgPSB0aGlzLmFkanVzdFBvaW50KHBvaW50KTtcbiAgcmV0dXJuIG5ldyBQYXRoLlJlY3RhbmdsZShwMS5zdWJ0cmFjdChib3gpLCBwMS5hZGQoYm94KSk7XG59O1xuXG5HZW5lcmF0b3IucHJvdG90eXBlLmJlZm9yZUdlbmVyYXRlR2x5cGggPSBmdW5jdGlvbihuYW1lKSB7XG5cbn07XG5cbkdlbmVyYXRvci5wcm90b3R5cGUuYWZ0ZXJHZW5lcmF0ZUdseXBoID0gZnVuY3Rpb24oZ2x5cGgpIHtcblxufTtcblxuR2VuZXJhdG9yLnByb3RvdHlwZS5nZW5lcmF0ZUdseXBoID0gZnVuY3Rpb24obmFtZSwgcG9pbnRzKSB7XG4gIHZhciBnbHlwaCA9IG5ldyBnbHlwaGVyLkdseXBoKG5hbWUsIHRoaXMud2VpZ2h0LCB0aGlzLmNvbnRyYXN0LCB0aGlzLnByb3BvcnRpb24pO1xuXG4gIHZhciBzZWdtZW50cyA9IFtdO1xuICB2YXIgYm94ID0gbmV3IFBvaW50KGdseXBoLndlaWdodCwgZ2x5cGguY29udHJhc3QpO1xuICB2YXIgc3RhcnRQb2ludDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgIC8vV0lQXG4gICAgaWYgKHBvaW50c1tpXVsyXSA9PSAnZG90Jykge1xuICAgICAgc2VnbWVudHMucHVzaCh0aGlzLmRyYXdEb3QocG9pbnRzW2ldLCBib3gpKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChpID49IHBvaW50cy5sZW5ndGggLSAxKVxuICAgICAgYnJlYWs7XG5cbiAgICB2YXIgcGF0aCA9IG5ldyBQYXRoKCk7XG5cbiAgICB2YXIgcDEgPSB0aGlzLmFkanVzdFBvaW50KHBvaW50c1tpXSk7XG4gICAgdmFyIHAyID0gdGhpcy5hZGp1c3RQb2ludChwb2ludHNbaSArIDFdKTtcblxuICAgIGlmIChwb2ludHNbaSsxXVsyXSA9PSAnYycpIHtcbiAgICAgIHAyID0gc3RhcnRQb2ludDtcbiAgICB9IGVsc2Uge1xuICAgICAgcDIgPSB0aGlzLmFkanVzdFBvaW50KHBvaW50c1tpICsgMV0pO1xuICAgICAgc3RhcnRQb2ludCA9IHN0YXJ0UG9pbnQgfHwgcDE7XG4gICAgfVxuXG4gICAgdmFyIHZlY3RvciA9IHAyLnN1YnRyYWN0KHAxKTtcbiAgICB2YXIgeCA9IHNpZ24odmVjdG9yLngpO1xuICAgIHZhciB5ID0gc2lnbih2ZWN0b3IueSk7XG5cbiAgICAvLyBXSVBcbiAgICBpZiAodGhpcy5zZWdtZW50UmVkdWN0aW9uKSB7XG4gICAgICB2ZWN0b3IubGVuZ3RoIC09IHRoaXMuc2VnbWVudFJlZHVjdGlvbiAqIDU7XG4gICAgICBwMiA9IHAxLmFkZCh2ZWN0b3IpO1xuICAgICAgdmFyIHZlY3RvcjIgPSBwMS5zdWJ0cmFjdChwMik7XG4gICAgICB2ZWN0b3IyLmxlbmd0aCAtPSB0aGlzLnNlZ21lbnRSZWR1Y3Rpb24gKiA1O1xuICAgICAgcDEgPSBwMi5hZGQodmVjdG9yMik7XG4gICAgfVxuXG4gICAgdmFyIGI7XG4gICAgaWYgKGkgIT09IDAgJiYgcG9pbnRzW2kgLSAxXVsyXSAhPT0gJ2UnIHx8IHZlY3Rvci5hbmdsZSAlIDkwID09PSAwKSB7XG4gICAgICBiID0gcDEuYWRkKGJveC5tdWx0aXBseShbeCAqIC0xLCB5XSkpO1xuICAgICAgYiA9IGIuYWRkKGIueSAqIC0xICogdGhpcy5pdGFsaWMsIDApO1xuICAgICAgcGF0aC5hZGQoYik7XG4gICAgfVxuXG4gICAgYiA9IHAxLmFkZChib3gubXVsdGlwbHkoW3ggKiAtMSwgeSAqIC0xXSkpO1xuICAgIGIgPSBiLmFkZChiLnkgKiAtMSAqIHRoaXMuaXRhbGljLCAwKTtcbiAgICAvLyBpZiAoaSA9PT0gMCB8fCBwb2ludHNbaSAtIDFdWzJdID09PSAnZScgJiYgdmVjdG9yLmFuZ2xlICUgOTAgIT09IDApXG4gICAgLy8gICBiID0gYi5hZGQoLTIwLCAwKTtcbiAgICBwYXRoLmFkZChiKTtcblxuICAgIGIgPSBwMS5hZGQoYm94Lm11bHRpcGx5KFt4LCB5ICogLTFdKSk7XG4gICAgYiA9IGIuYWRkKGIueSAqIC0xICogdGhpcy5pdGFsaWMsIDApO1xuICAgIHBhdGguYWRkKGIpO1xuXG4gICAgaWYgKGkgKyAxICE9PSBwb2ludHMubGVuZ3RoIC0gMSAmJiBwb2ludHNbaSArIDFdWzJdICE9PSAnZScgfHwgdmVjdG9yLmFuZ2xlICUgOTAgPT09IDApIHtcbiAgICAgIGIgPSBwMi5hZGQoYm94Lm11bHRpcGx5KFt4LCB5ICogLTFdKSk7XG4gICAgICBiID0gYi5hZGQoYi55ICogLTEgKiB0aGlzLml0YWxpYywgMCk7XG4gICAgICBwYXRoLmFkZChiKTtcbiAgICB9XG5cbiAgICBiID0gcDIuYWRkKGJveC5tdWx0aXBseShbeCwgeV0pKTtcbiAgICBiID0gYi5hZGQoYi55ICogLTEgKiB0aGlzLml0YWxpYywgMCk7XG4gICAgLy8gaWYgKGkgKyAxICE9PSBwb2ludHMubGVuZ3RoIC0gMSAmJiBwb2ludHNbaSArIDFdWzJdICE9PSAnZScgfHwgdmVjdG9yLmFuZ2xlICUgOTAgPT09IDApIHtcbiAgICAvLyB9ZWxzZXtcbiAgICAvLyAgIHZhciB2ID0gcDEuc3VidHJhY3QocDIpO1xuICAgIC8vICAgYiA9IGIuYWRkKCh0aGlzLmNvbnRyYXN0KjIpL01hdGgudGFuKHYuYW5nbGVJblJhZGlhbnMpICogLTEsIDApO1xuICAgIC8vIH1cbiAgICBwYXRoLmFkZChiKTtcblxuICAgIGIgPSBwMi5hZGQoYm94Lm11bHRpcGx5KFt4ICogLTEsIHldKSk7XG4gICAgYiA9IGIuYWRkKGIueSAqIC0xICogdGhpcy5pdGFsaWMsIDApO1xuICAgIHBhdGguYWRkKGIpO1xuXG5cbiAgICAvLyBGSVhNRTogcm91bmQgZWRnZXNcbiAgICAvLyB2YXIgYyA9IG5ldyBQYXRoLkNpcmNsZSh7XG4gICAgLy8gICBjZW50ZXI6IFswLCAwXSxcbiAgICAvLyAgIHJhZGl1czogdGhpcy53ZWlnaHRcbiAgICAvLyB9KTtcbiAgICAvL1xuICAgIC8vIGMucm90YXRlKHZlY3Rvci5hbmdsZSk7XG4gICAgLy8gYy5wb3NpdGlvbiA9IHAxO1xuICAgIC8vIHBhdGguYWRkKGMuc2VnbWVudHNbM10pO1xuICAgIC8vIHBhdGguYWRkKGMuc2VnbWVudHNbMF0pO1xuICAgIC8vIHBhdGguYWRkKGMuc2VnbWVudHNbMV0pO1xuICAgIC8vXG4gICAgLy8gYy5wb3NpdGlvbiA9IHAyO1xuICAgIC8vIHBhdGguYWRkKGMuc2VnbWVudHNbMV0pO1xuICAgIC8vIHBhdGguYWRkKGMuc2VnbWVudHNbMl0pO1xuICAgIC8vIHBhdGguYWRkKGMuc2VnbWVudHNbM10pO1xuXG4gICAgcGF0aC5yZWR1Y2UoKTtcbiAgICBwYXRoLmNsb3NlZCA9IHRydWU7XG5cbiAgICBzZWdtZW50cy5wdXNoKHBhdGgpO1xuXG4gICAgaWYgKHAxLnggKyBnbHlwaC53ZWlnaHQgPiBnbHlwaC53aWR0aClcbiAgICAgIGdseXBoLndpZHRoID0gcDEueCArIGdseXBoLndlaWdodDtcblxuICAgIC8vIEZJWE1FOiBhZGQgbGFzdCBwb2ludFxuICAgIGlmIChwMi54ICsgZ2x5cGgud2VpZ2h0ID4gZ2x5cGgud2lkdGgpXG4gICAgICBnbHlwaC53aWR0aCA9IHAyLnggKyBnbHlwaC53ZWlnaHQ7XG5cbiAgICBpZiAocG9pbnRzW2kgKyAxXVsyXSA9PSAnZScgfHwgcG9pbnRzW2kgKyAxXVsyXSA9PSAnYycpIHtcbiAgICAgIGkrKztcbiAgICAgIHN0YXJ0UG9pbnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIGdseXBoLnBhdGggPSBnbHlwaC5tZXJnZVNlZ21lbnRzKHNlZ21lbnRzKTtcbiAgZ2x5cGgucGF0aC5yZWR1Y2UoKTtcblxuICByZXR1cm4gZ2x5cGg7XG59O1xuXG5mdW5jdGlvbiBkcmF3T3BlbnR5cGVQYXRoKHBhdGgpIHtcbiAgdmFyIHJlc3VsdFBhdGggPSBuZXcgb3BlbnR5cGUuUGF0aCgpLFxuICAgIHBhdGhzID0gcGF0aC5jaGlsZHJlbiB8fCBbcGF0aF07XG5cbiAgZm9yICh2YXIgaiA9IDA7IGogPCBwYXRocy5sZW5ndGg7IGorKykge1xuICAgIC8vIEZJWE1FOiB5ICogLTEsICogMTBcbiAgICByZXN1bHRQYXRoLm1vdmVUbyhNYXRoLnJvdW5kKHBhdGhzW2pdLmN1cnZlc1swXS5wb2ludDEueCAqIDEwKSwgTWF0aC5yb3VuZChwYXRoc1tqXS5jdXJ2ZXNbMF0ucG9pbnQxLnkgKiAtMTApKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgcGF0aHNbal0uY3VydmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY3VydmUgPSBwYXRoc1tqXS5jdXJ2ZXNbaV07XG5cbiAgICAgIHZhciB4MSA9IE1hdGgucm91bmQoY3VydmUucG9pbnQxLnggKiAxMCk7XG4gICAgICB2YXIgeTEgPSBNYXRoLnJvdW5kKGN1cnZlLnBvaW50MS55ICogLTEwKTtcbiAgICAgIHZhciB4MiA9IE1hdGgucm91bmQoY3VydmUucG9pbnQyLnggKiAxMCk7XG4gICAgICB2YXIgeTIgPSBNYXRoLnJvdW5kKGN1cnZlLnBvaW50Mi55ICogLTEwKTtcbiAgICAgIHZhciBoeDEgPSBjdXJ2ZS5oYW5kbGUxLnggKiAxMDtcbiAgICAgIHZhciBoeTEgPSBjdXJ2ZS5oYW5kbGUxLnkgKiAtMTA7XG4gICAgICB2YXIgaHgyID0gY3VydmUuaGFuZGxlMi54ICogMTA7XG4gICAgICB2YXIgaHkyID0gY3VydmUuaGFuZGxlMi55ICogLTEwO1xuXG4gICAgICBpZiAoaHgxICsgaHkxID09PSAwICYmIGh4MiArIGh5MiA9PT0gMClcbiAgICAgICAgcmVzdWx0UGF0aC5saW5lVG8oeDIsIHkyKTtcbiAgICAgIGVsc2VcbiAgICAgICAgcmVzdWx0UGF0aC5jdXJ2ZVRvKHgxICsgaHgxLCB5MSArIGh5MSwgeDIgKyBoeDIsIHkyICsgaHkyLCB4MiwgeTIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRQYXRoO1xufVxuXG5HZW5lcmF0b3IucHJvdG90eXBlLmV4cG9ydE9wZW50eXBlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICB2YXIgb3BlbnR5cGVHbHlwaHMgPSBbXSxcbiAgICBnbHlwaCxcbiAgICBwYXRoO1xuXG4gIC8vIEhBQ0s6IC5ub3RkZWYgaGF2ZSB0byBiZSBmaXJzdCBkZWZpbmVkXG4gIGlmICh0aGlzLmdseXBoc1snLm5vdGRlZiddKSB7XG4gICAgZ2x5cGggPSB0aGlzLmdseXBoc1snLm5vdGRlZiddO1xuICAgIHBhdGggPSBkcmF3T3BlbnR5cGVQYXRoKGdseXBoLnBhdGgpO1xuXG4gICAgaWYgKHBhdGguY29tbWFuZHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBvcGVudHlwZUdseXBocy5wdXNoKG5ldyBvcGVudHlwZS5HbHlwaCh7XG4gICAgICAgIG5hbWU6ICcubm90ZGVmJyxcbiAgICAgICAgdW5pY29kZTogMCxcbiAgICAgICAgYWR2YW5jZVdpZHRoOiBnbHlwaC53aWR0aCAqIDEwICsgMTAwLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9KSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBub3RkZWZQYXRoID0gbmV3IG9wZW50eXBlLlBhdGgoKTtcbiAgICBub3RkZWZQYXRoLm1vdmVUbygxMDAsIDApO1xuICAgIG5vdGRlZlBhdGgubGluZVRvKDEwMCwgNzAwKTtcbiAgICBub3RkZWZQYXRoLmxpbmVUbyg2MDAsIDcwMCk7XG4gICAgbm90ZGVmUGF0aC5saW5lVG8oNjAwLCAwKTtcbiAgICBub3RkZWZQYXRoLm1vdmVUbygyMDAsIDEwMCk7XG4gICAgbm90ZGVmUGF0aC5saW5lVG8oNTAwLCAxMDApO1xuICAgIG5vdGRlZlBhdGgubGluZVRvKDUwMCwgNjAwKTtcbiAgICBub3RkZWZQYXRoLmxpbmVUbygyMDAsIDYwMCk7XG4gICAgb3BlbnR5cGVHbHlwaHMucHVzaChuZXcgb3BlbnR5cGUuR2x5cGgoe1xuICAgICAgbmFtZTogJy5ub3RkZWYnLFxuICAgICAgdW5pY29kZTogMCxcbiAgICAgIGFkdmFuY2VXaWR0aDogNjUwLFxuICAgICAgcGF0aDogbm90ZGVmUGF0aFxuICAgIH0pKTtcbiAgfVxuXG4gIGZvciAodmFyIHggaW4gdGhpcy5nbHlwaHMpIHtcbiAgICAvLyBIQUNLOiAubm90ZGVmIGFscmVhZHkgZGVmaW5lZFxuICAgIGlmICh4ID09ICcubm90ZGVmJylcbiAgICAgIGNvbnRpbnVlO1xuXG4gICAgZ2x5cGggPSB0aGlzLmdseXBoc1t4XTtcbiAgICBwYXRoID0gZHJhd09wZW50eXBlUGF0aChnbHlwaC5wYXRoKTtcblxuICAgIGlmIChwYXRoLmNvbW1hbmRzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgb3BlbnR5cGVHbHlwaHMucHVzaChuZXcgb3BlbnR5cGUuR2x5cGgoe1xuICAgICAgICBuYW1lOiB0aGlzLmFscGhhYmV0Lm5hbWVNYXBbZ2x5cGgubmFtZV0gfHwgZ2x5cGgubmFtZSxcbiAgICAgICAgdW5pY29kZTogZ2x5cGgubmFtZS5jaGFyQ29kZUF0KCksXG4gICAgICAgIGFkdmFuY2VXaWR0aDogZ2x5cGgud2lkdGggKiAxMCArIDEwMCxcbiAgICAgICAgcGF0aDogcGF0aFxuICAgICAgfSkpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW50eXBlR2x5cGhzLnB1c2gobmV3IG9wZW50eXBlLkdseXBoKHtcbiAgICBuYW1lOiAnc3BhY2UnLFxuICAgIHVuaWNvZGU6IDMyLFxuICAgIGFkdmFuY2VXaWR0aDogMTAwMCxcbiAgICBwYXRoOiBuZXcgb3BlbnR5cGUuUGF0aCgpXG4gIH0pKTtcblxuICB0aGlzLmZvbnQgPSBuZXcgb3BlbnR5cGUuRm9udCh7XG4gICAgZmFtaWx5TmFtZTogb3B0aW9ucy5mYW1pbHlOYW1lIHx8ICdHbHlwaGVyU3RhbmRhcnQnLFxuICAgIHN0eWxlTmFtZTogb3B0aW9ucy5zdHlsZU5hbWUgfHwgJ01lZGl1bScsXG4gICAgdW5pdHNQZXJFbTogMTAwMCxcbiAgICBhc2NlbmRlcjogMTAwMCxcbiAgICBkZXNjZW5kZXI6IHRoaXMuZGVzY2VuZGVyICogMTUwLFxuICAgIGdseXBoczogb3BlbnR5cGVHbHlwaHNcbiAgfSk7XG5cbiAgdmFyIGJ1ZmZlciA9IHRoaXMuZm9udC50b0FycmF5QnVmZmVyKCk7XG4gIHZhciBmb250MiA9IG9wZW50eXBlLnBhcnNlKGJ1ZmZlcik7XG5cbiAgLy9kZWJ1Z2dpbmdcbiAgaWYgKG9wdGlvbnMuZGVidWcpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZvbnQyLmdseXBocy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGcgPSBmb250Mi5nbHlwaHMuZ2V0KGkpO1xuICAgICAgdmFyIGN0eCA9IGNyZWF0ZUdseXBoQ2FudmFzKGcsIDE1MCk7XG4gICAgICB4ID0gMjA7XG4gICAgICB2YXIgeSA9IDEyMDtcbiAgICAgIHZhciBmb250U2l6ZSA9IDcyO1xuICAgICAgZy5kcmF3KGN0eCwgeCwgeSwgZm9udFNpemUpO1xuICAgICAgLy8gZy5kcmF3UG9pbnRzKGN0eCwgeCwgeSwgZm9udFNpemUpO1xuICAgICAgZy5kcmF3TWV0cmljcyhjdHgsIHgsIHksIGZvbnRTaXplKTtcbiAgICB9XG4gIH1cblxuICAvLyBGSVhNRTogZGVwZW5kcyBvbiBkaXYgd2l0aCBpZCBnbHlwaHNcbiAgZnVuY3Rpb24gY3JlYXRlR2x5cGhDYW52YXMoZ2x5cGgsIHNpemUpIHtcbiAgICB2YXIgY2FudmFzSWQsIGh0bWwsIGdseXBoc0Rpdiwgd3JhcCwgY2FudmFzLCBjdHg7XG4gICAgY2FudmFzSWQgPSAnZ2x5cGhfJyArIGdseXBoLm5hbWU7XG4gICAgaHRtbCA9ICc8Y2FudmFzIGlkPVwiJyArIGNhbnZhc0lkICsgJ1wiIHdpZHRoPVwiJyArIHNpemUgKyAnXCIgaGVpZ2h0PVwiJyArIHNpemUgKyAnXCI+PC9jYW52YXM+JztcbiAgICBnbHlwaHNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2x5cGhzJyk7XG4gICAgd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB3cmFwLmlubmVySFRNTCA9IGh0bWw7XG4gICAgZ2x5cGhzRGl2LmFwcGVuZENoaWxkKHdyYXApO1xuICAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc0lkKTtcbiAgICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICByZXR1cm4gY3R4O1xuICB9XG59O1xuXG5HZW5lcmF0b3IucHJvdG90eXBlLmRvd25sb2FkT1RGID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLmZvbnQpXG4gICAgdGhpcy5mb250LmRvd25sb2FkKCk7XG4gIGVsc2VcbiAgICBjb25zb2xlLmxvZygndXNlIGV4cG9ydE9wZW50eXBlIGZpcnN0Jyk7XG59O1xuXG5mdW5jdGlvbiBzaWduKHgpIHtcbiAgLy8gMCA9PSAxXG4gIHJldHVybiB4ID49IDAgPyAxIDogLTE7XG59XG5cbmV4cG9ydHMuR2VuZXJhdG9yID0gR2VuZXJhdG9yO1xuIiwiZnVuY3Rpb24gR2x5cGgobmFtZSwgd2VpZ2h0LCBjb250cmFzdCwgcHJvcG9ydGlvbikge1xuICB0aGlzLm5hbWUgPSBuYW1lO1xuICB0aGlzLndlaWdodCA9IHdlaWdodDtcbiAgdGhpcy5jb250cmFzdCA9IGNvbnRyYXN0O1xuICB0aGlzLnByb3BvcnRpb24gPSBwcm9wb3J0aW9uO1xuXG4gIHRoaXMucGF0aCA9IHVuZGVmaW5lZDtcbiAgdGhpcy53aWR0aCA9IDA7XG59XG5cbkdseXBoLnByb3RvdHlwZS5tZXJnZVNlZ21lbnRzID0gZnVuY3Rpb24oc2VnbWVudHMpIHtcblxuICB2YXIgcmVzdWx0ID0gc2VnbWVudHNbMF0uY2xvbmUoKTtcbiAgZm9yIChpID0gMTsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0ID0gcmVzdWx0LnVuaXRlKHNlZ21lbnRzW2ldKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vL0RFQlVHXG5HbHlwaC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKHgsIHksIGRlYnVnKSB7XG4gIC8vZGVidWdnaW5nXG4gIGlmIChkZWJ1Zykge1xuICAgIG5ldyBQYXRoLkNpcmNsZSh7XG4gICAgICBjZW50ZXI6IFt4LCB5XSxcbiAgICAgIHJhZGl1czogMyxcbiAgICAgIHN0cm9rZUNvbG9yOiAnYmx1ZSdcbiAgICB9KTtcbiAgICBuZXcgUGF0aC5DaXJjbGUoe1xuICAgICAgY2VudGVyOiBbeCArIHRoaXMud2lkdGgsIHldLFxuICAgICAgcmFkaXVzOiAzLFxuICAgICAgc3Ryb2tlQ29sb3I6ICdibHVlJ1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHBhdGggPSB0aGlzLnBhdGguY2xvbmUoKTtcbiAgcGF0aC5wb3NpdGlvbiA9IFt4ICsgcGF0aC5wb3NpdGlvbi54LCB5ICsgcGF0aC5wb3NpdGlvbi55XTtcbiAgcGF0aC5maWxsQ29sb3IgPSAnYmxhY2snO1xufTtcblxuZXhwb3J0cy5HbHlwaCA9IEdseXBoO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYWxwaGFiZXQgPSByZXF1aXJlKCcuL2FscGhhYmV0LmpzJyk7XG52YXIgZ2VuZXJhdG9yID0gcmVxdWlyZSgnLi9nZW5lcmF0b3IuanMnKTtcbnZhciBnbHlwaCA9IHJlcXVpcmUoJy4vZ2x5cGguanMnKTtcblxuZXhwb3J0cy5HbHlwaCA9IGdseXBoLkdseXBoO1xuZXhwb3J0cy5BbHBoYWJldCA9IGFscGhhYmV0LkFscGhhYmV0O1xuZXhwb3J0cy5HZW5lcmF0b3IgPSBnZW5lcmF0b3IuR2VuZXJhdG9yO1xuIl19
