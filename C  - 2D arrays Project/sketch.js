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
let playerX, playerY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  grid = create2DArray(gridSize, gridSize);
  cellSize = height/gridSize;
  
  grid[9][0] = 1;
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
      if (y % 2 === 1) {
        singleGridNum = 10 * (y - 9) + (x + 1);
      }
      else {
        singleGridNum = 10 * (9 - y) + (x + 11);
      } 
      grid[y]
      if (grid[y][x] === 0) {
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
      }
      // Player Ones starting position
      else if (grid[y][x] === 1) {
        image(playerOneImage, x*cellSize, y*cellSize, cellSize, cellSize);
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

}

function dice() {
  let diceNum = random(6);
  if (diceNum === 1) {
    image(diceOne, width/2, height/2, 50, 50);
  }
  else if (diceNum === 2) {
    image(diceTwo, width/2, height/2, 200, 200);
  }
  else if (diceNum === 3) {
    image(diceThree, width/2, height/2, 200, 200);
  }
  else if (diceNum === 4) {
    image(diceFour, width/2, height/2, 200, 200);
  }
  else if (diceNum === 5) {
    image(diceFive, width/2, height/2, 200, 200);
  }
  else if (diceNum === 6) {
    image(diceSix, width/2, height/2, 200, 200);
  }
}

function covert_to_single_number(x, y) {
  if (y % 2 === 1) {
    return 10 * (y - 9) + (x + 1);
  }
  else {
    return 10 * (9 - y) + (x + 11);
  } 
}

function convert_single_number_to_xy(singleNumber) {
  if (100 < singleNumber < 90) {
    x = (100 - singleNumber)/10;
  }
  if (90 < singleNumber < 80) {
    x = (100 - singleNumber)/10;
  }
  if (80 < singleNumber < 70) {
    x = (100 - singleNumber)/10;
  }
  if (70 < singleNumber < 60) {
    x = (100 - singleNumber)/10;
  }
  if (50 < singleNumber < 80) {
    x = (100 - singleNumber)/10;
  }
  if (90 < singleNumber < 80) {
    x = (100 - singleNumber)/10;
  }
  if (90 < singleNumber < 80) {
    x = (100 - singleNumber)/10;
  }
  if (90 < singleNumber < 80) {
    x = (100 - singleNumber)/10;
  }
  if (90 < singleNumber < 80) {
    x = (100 - singleNumber)/10;
  }
  if (90 < singleNumber < 80) {
    x = (100 - singleNumber)/10;
  }
  if (90 < singleNumber < 80) {
    x = (100 - singleNumber)/10;
  }
  // y = 9-(singleNum-x-1)/10
}