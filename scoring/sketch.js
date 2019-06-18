// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let counter;
let counterArray = [];
function setup() {
  createCanvas(400, 400);
}

function draw() {
  counter = 0;
  isPressed();
  theText();
  background(220);
}

function isPressed() {
  if ((keyIsPressed) && (key === "k")) {
    counter = counter + 1;
    counterArray.push(counter);
  }

}

function theText() {
  fill("black")
  text("the Score:" + counterArray, 100, 100);
}