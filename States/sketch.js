// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// Raamish Humayun
// Computer Science 30
// March 13, 2019
// Interactive Scene

// Setting up global variables
let colorList; 
let state = "menu";
let x = 200;
let y = 125;
let angle = 90;
let dx = 0.2;
let buttonX, buttonY, buttonHeight, buttonWidth;
let secondButtonYpos;

// Making a canvas and list of global colors
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorList = ["white", "black", "red", "orange", "purple", "green"];
  state = "menu";
  x = 200;
  y = 125;
  angle = 90;
  dx = 0.2;
  buttonX = windowWidth / 2;
  buttonY = windowHeight / 2;
  buttonHeight = 200;
  buttonWidth = 400;
  secondButtonYpos = buttonY - buttonHeight - 50;
}
// The draw function calls the functions that need
// to be drawn with the sensors and stores the 
// position of the rectangle and then makes it go
// back
function draw() {
  if (state === "menu") {
    showMenu();
  }
  if (state === "dancing"){
    dancingBlock();
  }
  if (state === "howToPlay") {
    howToPlay();
  } 
}

function howToPlay() {
  background(130);
  
  textAlign(CENTER, CENTER);
  textFont("Helvetica");
  text("How To Play");

  textAlign(LEFT);
  textFont("Georgia");
  text("How To Play");

}

function dancingBlock() {
  background(220);
  push();
  headScanner();
  head();
  pop();
  push();
  rightArmScanner();
  rightArm();
  pop();
  push();
  leftArmScanner();
  leftArm();
  pop();
  push();
  bodyScanner();
  body();
  pop();
  push();
  rightLegScanner();
  rightLeg();
  pop();
  push();
  leftLegScanner();
  leftLeg();
  pop();
}

// All of the scanners functions check if the appopriate key 
// is pressed to see whether the block should rotate
function showMenu() {
  rectMode(CENTER);
  fill(colorList[2]);
  rect(buttonX, buttonY, buttonWidth, buttonHeight);
  
  textAlign(CENTER, CENTER);
  fill(colorList[5])
  text("The Dancing Block", buttonX, buttonY);

  fill(colorList[3]);
  rect(buttonX, secondButtonYpos, buttonWidth, buttonHeight);
  
  textAlign(CENTER, CENTER);
  fill(colorList[4]);
  text("How to Play", buttonX, secondButtonYpos);
  
}
 
function mousePressed() {
  if (state === "menu")  {
    if (isDancingClicked(mouseX, mouseY)) {
      state = "dancing";
    }
    if (isHowToClicked(mouseX, mouseY)) {
      state = "Howto";
    }
  }
}

function isHowToClicked(x,y) {
  return  x >= buttonX - buttonWidth/2 &&
          x <= buttonX + buttonWidth/2 &&
          y >= buttonY - buttonHeight/2 &&
          y <= buttonY + buttonHeight/2;

}

function isDancingClicked(x,y) {
  return x >= buttonX - buttonWidth/2 &&
         x <= buttonX + buttonWidth/2 &&
         y >= secondButtonYpos - buttonHeight/2 &&
         y <= secondButtonYpos + buttonHeight/2;
}

function headScanner() {
  if (keyIsPressed && (key === "w")) {
    translate(x, y);
    rotate(dx * mouseX , 3);
  }
  else {
    translate(x, y);
  }
}

function rightArmScanner() {
  if (keyIsPressed && (key === "d")) {
    translate(x + 50, y + 50);
    rotate(dx * mouseX , 3);
  }
  else {
    translate(x + 50, y + 50);
  }
}

function leftArmScanner() {
  if (keyIsPressed && (key === "a")) {
    translate(x - 50, y + 50);
    rotate(dx * mouseX , 3);
  }
  else {
    translate(x - 50, y + 50);
  }
}

function rightLegScanner() {
  if (keyIsPressed && (key === "x")) {
    translate(x, y + 150);
    rotate(dx * mouseX , 3);
  }
  else {
    translate(x - 15, y + 150);
  }
}

function leftLegScanner() {
  if (keyIsPressed && (key === "z")) {
    translate(x + 15, y + 150);
    rotate(dx * mouseX , 3);
  }
  else {
    translate(x + 15, y + 150);
  }
}


function bodyScanner() {
  if (keyIsPressed && (key === "s")) {
    translate(x, y + 75);
    rotate(dx * mouseX , 3);
  }
  else {
    translate(x, y + 75);
  }
}

// These functions make a rectangle for each body part
// and centers it so it rotates about the center
function head() {
  rectMode(CENTER);
  fill(colorList[0]);
  rect(0, 0, 50, 50);
}  

function rightArm() {
  rectMode(CENTER);
  fill(colorList[1]);
  rect(0, 0, 50, 20);
}

function body () {  
  rectMode(CENTER);
  fill(colorList[2]);
  rect(0, 0, 50, 100);
}	

function rightLeg() {	
  rectMode(CENTER);
  fill(colorList[3]);
  rect(0, 0, 20, 50);
}

function leftLeg() {
  rectMode(CENTER);
  fill(colorList[4]);
  rect(0, 0 , 20, 50)
}

function leftArm() {
  rectMode(CENTER);
  fill(colorList[5]);
  rect(0, 0, 50, 20);
}