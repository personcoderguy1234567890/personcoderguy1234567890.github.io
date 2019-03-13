function setup() {
  createCanvas(400, 400);
}
// Ellipse gets drawn from the center
// rectangle gets drawn from the top left corner
function draw() {
  background(220);
  fill("white");
  rect(175, 100, 50,50);
  fill("red");
  rect(175, 150, 50, 100);
  fill("black");
  rect(225, 160, 50, 15);
  fill("green");
  rect(125, 160, 50, 15);
  fill("purple");
  rect(175, 250, 20, 50);
  fill("orange");
  rect(200, 250, 20, 50);
}