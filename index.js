import "./styles.css";

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

// let display = document.querySelector("#clock");
// let twoMinutes = 30;
// gameTimer(twoMinutes, display)

//Tetris board development

const WIDTH = 10;

const HEIGHT = 15;

const TILES = 30;

const GAME_WIDTH = WIDTH * TILES;

const GAME_HEIGHT = HEIGHT * TILES;

// Grab convas
const canvas = document.getElementById("tetris-board");

const ctx = canvas.getContext("2d");

// Drawing background grid

function backgroundGrid() {
  //clear the background
  ctx.clearRect(0, 0, 300, 450);

  //make background white
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  //make gridline style
  ctx.strokeStyle = "gray";
  ctx.linewidth = 2;

  // Create vertical lines
  for (let i = 30; i < GAME_WIDTH; i += TILES) {
    ctx.strokeRect(i, 0, 1, GAME_HEIGHT);
  }

  //Create horizontal lines
  for (let i = 30; i < GAME_HEIGHT; i += TILES) {
    ctx.strokeRect(0, i, GAME_HEIGHT, 1);
  }
}

backgroundGrid();

//randomize pieces

//next piece

// hold piece

// lines destroyed
