import "./styles.css";
import nextBlocks from "./blocks.js";
import InputHandler from "./input.js";

//Using navbar to change text

const tabs = document.querySelector(".tabs");
const texts = document.querySelectorAll(".text");

tabs.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    const targetText = document.querySelector(e.target.dataset.target);

    texts.forEach(function(text) {
      if (text === targetText) {
        text.classList.add("active");
      } else {
        text.classList.remove("active");
      }
    });
  }
});

//Game timer

function gameTimer(duration, display) {
  let gameTime = Date.now(),
    diff,
    minutes,
    seconds;

  function timer() {
    // calculate the elapsed time since the game has started
    diff = duration - (((Date.now() - gameTime) / 1000) | 0);

    minutes = (diff / 60) | 0;
    seconds = diff % 60 | 0;

    //formatting to keep seconds in two digits
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (diff <= 0) {
      gameTime = Date.now() + 1000;
    }
  }
  timer();
  setInterval(timer, 1000);
}

// let twoMinutes = 60 * 2;
// let display = document.querySelector("#clock");
// gameTimer(twoMinutes, display);

// Grab canvas for next piece
let canvas1 = document.getElementById("tetris-board");

let ctx1 = canvas1.getContext("2d");

// Grab convas for tetris board
let canvas2 = document.getElementById("tetris-board");

let ctx2 = canvas2.getContext("2d");

//Tetris board development

const WIDTH = 10;

const HEIGHT = 15;

const TILES = 30;

//Drawing background grid

const BOARD = [];

// Creates grid on board
for (let x = 0; x < WIDTH; x++) {
  BOARD[x] = [];
  for (let y = 0; y < HEIGHT; y++) {
    BOARD[x][y] = "";
  }
}

//Creating a function to make individual squares

function drawSquare(x, y) {
  ctx2.strokeRect(x * TILES, y * TILES, TILES, TILES);
  ctx2.strokeStyle = "gray";
}

// Creates the gridline on the board
function drawBoard() {
  // at every interval of x and y, create a square with gray outlines
  for (var y = 0; y < HEIGHT; y++) {
    for (var x = 0; x < WIDTH; x++) {
      drawSquare(x, y, TILES, TILES);
    }
  }
}

drawBoard();

new InputHandler();

// game loop

// let lastTime = 0;

// function gameLoop(timeStamp){
//   let deltaTime = timeStamp - lastTime;
//   lastTime = timeStamp;

//   ctx.clearRect(0, 0, 300, 450);
//   block.update(deltaTime);
//   block.draw(ctx);

//   requestAnimationFrame(gameLoop);
// }

// gameLoop();
//next piece

// function block(patterns, color){
//   this.pattern = pattern[0];
//   this.patterns = patterns;
//   this.patterni = 0;

//   this.color = color;

// }

// block = newBlock();
// hold piece

// lines destroyed
