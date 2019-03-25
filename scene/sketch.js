// Raamish Humayun
// Computer Science 30
// March 13, 2019
// Interactive Scene

// Setting up global variables
let x = 200;
let y = 125;
let state;
let angle = 90
let dx = 0.2

// Making a canvas and list of global colors
function setup() {
  createCanvas(400, 400);
  color = ["white", "black", "red", "orange", "purple", "green"];
}
// The draw function calls the functions that need
// to be drawn with the sensors and stores the 
// position of the rectangle and then makes it go
// back
function draw() {
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
  fill(color[0]);
  rect(0, 0, 50, 50);
}  

function rightArm() {
	rectMode(CENTER);
  fill(color[1]);
  rect(0, 0, 50, 20);
}

function body () {  
	rectMode(CENTER);
  fill(color[2]);
  rect(0, 0, 50, 100);
}	

function rightLeg() {	
	rectMode(CENTER);
  fill(color[3]);
  rect(0, 0, 20, 50);
}

function leftLeg() {
	rectMode(CENTER);
  fill(color[4]);
  rect(0, 0 , 20, 50)
}

function leftArm() {
  rectMode(CENTER);
  fill(color[5]);
  rect(0, 0, 50, 20);
}