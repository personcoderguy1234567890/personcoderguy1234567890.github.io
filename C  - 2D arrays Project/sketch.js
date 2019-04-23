// Snakes and Ladders
// Raamish Humayun
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
let x;
let y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  grid = create2DArray(gridSize, gridSize);
  cellSize = height/gridSize;
  for (let gridY = 1; gridY < 10; gridY ++) {
    grid[3][2] =  1;
  }

}

function draw() {
  background(255);
  displayGrid();
  dice();
  playerOneDiscription();
}

function displayGrid() {
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      if (grid[y][x] === 0) {
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
      }
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
let playerOneStarting;
function playerOneDiscription() {
  playerOneStarting = grid[9][1];

}

function convertToSingleNum(x, y) {
  if (y % 2 === 1) {
    singleNum = 10 * (9 - y) + (x+1);
  }
  else {
    singleNum = 10 * (9-y) + (x+11);
  }
}

function covertFromSingleNum(singleNum) {
  x = (singleNum - 100) / 10;
  y = 9 - ((singleNum - x - 1) / 10);
}

function dice() {
  let diceNum = 1;
  if (diceNum === 1) {
    image(diceOne, 800, 800, 50, 50);
  }
  if (diceNum === 2) {
    image(diceTwo, width/2, width/2, 200, 200);
  }
  if (diceNum === 3) {
    image(diceThree, width/2, width/2, 200, 200);
  }
  if (diceNum === 4) {
    image(diceFour, width/2, width/2, 200, 200);
  }
  if (diceNum === 5) {
    image(diceFive, width/2, width/2, 200, 200);
  }
  if (diceNum === 6) {
    image(diceSix, width/2, width/2, 200, 200);
  }
}