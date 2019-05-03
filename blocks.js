//Creating the tetris blocks

let I = [
  [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
  [[0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0]],
  [[0, 0, 0, 0], [0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0]],
  [[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0]]
];

let J = [
  [[1, 0, 0], [1, 1, 1], [0, 0, 0]],
  [[0, 1, 1], [0, 1, 0], [0, 1, 0]],
  [[0, 0, 0], [1, 1, 1], [0, 0, 1]],
  [[0, 1, 0], [0, 1, 0], [1, 1, 0]]
];

let L = [
  [[0, 0, 1], [1, 1, 1], [0, 0, 0]],
  [[0, 1, 0], [0, 1, 0], [0, 1, 1]],
  [[0, 0, 0], [1, 1, 1], [1, 0, 0]],
  [[1, 1, 0], [0, 1, 0], [0, 1, 0]]
];

let O = [[[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]]];

let S = [
  [[0, 1, 1], [1, 1, 0], [0, 0, 0]],
  [[0, 1, 0], [0, 1, 1], [0, 0, 1]],
  [[0, 0, 0], [0, 1, 1], [1, 1, 0]],
  [[1, 0, 0], [1, 1, 0], [0, 1, 0]]
];

let T = [
  [[0, 1, 0], [1, 1, 1], [0, 0, 0]],
  [[0, 1, 0], [0, 1, 1], [0, 1, 0]],
  [[0, 0, 0], [1, 1, 1], [0, 1, 0]],
  [[0, 1, 0], [1, 1, 0], [0, 1, 0]]
];

let Z = [
  [[1, 1, 0], [0, 1, 1], [0, 0, 0]],
  [[0, 0, 1], [0, 1, 1], [0, 1, 0]],
  [[0, 0, 0], [1, 1, 0], [0, 1, 1]],
  [[0, 1, 0], [1, 1, 0], [1, 0, 0]]
];

//Getting next block

let blocks = [];

//create an array consisting of different block patterns
blocks[0] = [I, "red"];
blocks[1] = [J, "orange"];
blocks[2] = [L, "yellow"];
blocks[3] = [O, "green"];
blocks[4] = [S, "blue"];
blocks[5] = [T, "indigo"];
blocks[6] = [Z, "violet"];

//generate the next block by using a random number function
let block = "null ";

function newBlock() {
  block = blocks[Math.floor(Math.random() * blocks.length)];
  return new Block(block[0], block[1]);
}

newBlock();
console.log(newBlock());

function Block(patterns, color) {
  this.pattern = patterns[0];
  this.patterns = patterns;
  this.patterni = 0;

  this.color = color;

  this.x = 0;
  this.y = -2;
}

Block.prototype.draw = function() {
  fs = ctx.fillStyle;
  ctx.fillStyle = this.color;
  for (var ix = 0; ix < this.pattern.length; ix++) {
    for (var iy = 0; iy < this.pattern.length; iy++) {
      if (this.pattern[ix][iy]) {
        drawSquare(this.x + ix, this.y + iy);
      }
    }
  }
  ctx.fillStyle = fs;
};
