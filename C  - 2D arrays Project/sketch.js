// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let gridSize = 10;
let grid;
let cellSize;
// let autoPlay;

let diceOne;
let diceTwo;
let diceThree;
let diceFour;
let diceFive;
let diceSix;
let playerOneImage;
let playerOne;
let diceLocation = cellSize * 10;

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  
  grid = create2DArray(gridSize, gridSize);
  cellSize = width/gridSize;
}

function draw() {
  background(255);
  displayGrid();
  dice();
  playerOneDisciption();
}

function displayGrid() {
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}


function create2DArray(cols, rows) {
  let emptyArray = [];
  for (let i = 0; i < rows; i++) {
    emptyArray.push([]);
    for (let j = 0; j < cols; j++) {
      emptyArray[i].push(0);
    }
  }
  return emptyArray;
}



function preload() {
  diceSix = loadImage("assets/dice_six.png");
  diceFive = loadImage("assets/dice_five.png");
  diceFour = loadImage("assets/dice_four.png");
  diceThree = loadImage("assets/dice_Three.png");
  diceTwo = loadImage("assets/dice_two.png");
  diceOne = loadImage("assets/dice_one.png");
  playerOneImage = loadImage("assets/duck.png");
}

function playerOneDisciption() {
  playerOne = image(emptyArray[5], emptyArray[5], cellSize, cellSize);


}

function dice() {
  let diceNum = 1;
  if (diceNum === 1) {
    image(diceOne, 800, 500, 50, 50);
  }
  if (diceNum === 2) {
    image(diceTwo, 0, 0, 200, 200);
  }
  if (diceNum === 3) {
    image(diceThree, 0, 0, 200, 200);
  }
  if (diceNum === 4) {
    image(diceFour, 0, 0, 200, 200);
  }
  if (diceNum === 5) {
    image(diceFive, 0, 0, 200, 200);
  }
  if (diceNum === 6) {
    image(diceSix, 0, 0, 200, 200);
  }
}