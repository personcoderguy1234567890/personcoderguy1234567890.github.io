// Snakes and Ladders
// Raamish Humayun
// May 14, 2019


let gridSize = 10;
let grid;
let cellSize;
// let autoPlay;

let diceNum;
let diceOne;
let diceTwo;
let diceThree;
let diceFour;
let diceFive;
let diceSix;
let playerOneImage;
let playerOne;
let singleGridNum;
let oldGrid;
let newPosition;
let y;
let x;
let singleNumber;
let startingPosition;
let turns;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  grid = create2DArray(gridSize, gridSize);
  cellSize = height/gridSize;
}

function draw() {
  background(255);
  displayGrid();
  dice();
  convertToXY() ;
  convertToSingleNum();
}

// moves the player by the dice number
function moving() {
  singleNumber = 1;
  grid[y][x] = singleNumber;
  
  if (diceNum === 1) {
    singleNumber+= 1;
  } 
  else if (diceNum === 2) {
    singleNumber+= 2;
  }
  else if (diceNum === 3) {
    singleNumber+= 3;
  }
  else if (diceNum === 4) {
    singleNumber+= 4;
  }
  else if (diceNum === 5) {
    singleNumber+= 5;
  }
  else if (diceNum === 6) {
    singleNumber+= 6;
  }

  singleNumber = 0;
}

function displayGrid() {
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      if (grid[y][x] === 0) {
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
      } 
      else if (grid[y][x] === singleNumber) {  
        image(playerOneImage, x*cellSize, y*cellSize, cellSize/2, cellSize);
      } 
    } 
  }
} 

function movePlayerOne () {
  let oldGrid = 1;
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


// loads the images for dies and player 1
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


function dice() {
  turns = [1, 2];
  // displays the dice for player 1 
  if (turns === 1) {
    diceNum = random(6);
    if (diceNum === 1) { 
      return image(diceOne, width/2, height/2, 50, 50);
    }
    else if (diceNum === 2) {
      return image(diceTwo, width/2, height/2, 200, 200);
    }
    else if (diceNum === 3) {
      newPosition = grid[y][x + 3];
      return image(diceThree, width/2, height/2, 200, 200);
    }
    else if (diceNum === 4) {
      return image(diceFour, width/2, height/2, 200, 200);
    }
    else if (diceNum === 5) {
      return image(diceFive, width/2, height/2, 200, 200);
    }
    else if (diceNum === 6) {
      return image(diceSix, width/2, height/2, 200, 200);
    }
  // would displays the dice for player 2 if there was a player 2
  else if (turns === 2) {
    diceNum = random(6);
    if (diceNum === 1) { 
      return image(diceOne, width/2, height/2, 50, 50);
    }
    else if (diceNum === 2) {
      return image(diceTwo, width/2, height/2, 200, 200);
    }
    else if (diceNum === 3) {
      newPosition = grid[y][x + 3];
      return image(diceThree, width/2, height/2, 200, 200);
    }
    else if (diceNum === 4) {
      return image(diceFour, width/2, height/2, 200, 200);
    }
    else if (diceNum === 5) {
      return image(diceFive, width/2, height/2, 200, 200);
    }
    else if (diceNum === 6) {
      return image(diceSix, width/2, height/2, 200, 200);
    } 
  }   
} 

// converts a x and y coordinate in the 2D array into a single number
function convertToSingleNum(x, y) {
  if (y % 2 === 1) {
    singleNumber = 10 * (y - 9) + (x + 1);
  }
  else {
    singleNumber = 10 * (9 - y) + (x + 11);
  } 
  return singleNumber;
}

// converts the single number back into an x and y
function convertToXY(singleNumber) {
  if (90 < singleNumber < 100) {
    y = (100 - singleNumber)/10;
    x = singleNumber - 111 + 10 * y;
  }
  if (80 < singleNumber < 90) {
    y = (100 - singleNumber)/10;
    x = singleNumber - 91 + 10 * y;
  }
  if (70 < singleNumber < 80) {
    y = (100 - singleNumber)/10;
    x = singleNumber - 111 + 10 * y;
  }
  if (60 < singleNumber < 70) {
    y = (100 - singleNumber)/10;
    x = singleNumber - 91 + 10 * y;
  }
  if (50 < singleNumber < 60) {
    y = (100 - singleNumber)/10;
    x = singleNumber - 111 + 10 * y;
  }
  if (40 < singleNumber < 50) {
    y = (100 - singleNumber)/10;
    x = singleNumber - 91 + 10 * y;
  }
  if (30 < singleNumber < 40) {
    y = (100 - singleNumber)/10;
    x = singleNumber - 111 + 10 * y;
  }
  if (20 < singleNumber < 30) {
    y = (100 - singleNumber)/10;
    x = singleNumber - 91 + 10 * y;
  }
  if (10 < singleNumber < 20) {
    y = (100 - singleNumber)/10;
    x = singleNumber - 111 + 10 * y;
  }
  if (0 < singleNumber < 10) {
    y = (100 - singleNumber)/10;
    x = singleNumber - 91 + 10 * y;
  }
  return y;
  return x;
}