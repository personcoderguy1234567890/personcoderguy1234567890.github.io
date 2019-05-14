// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let triangleVertices = [
  {x: 400 y: 100},
  {x: 100 y: 600},
  {x: 700 y: 600}
];


function setup() {
  createCanvas(800, 700);
  sierpinski(triangleVertices, 2);

}

function draw() {
  background(220);
  sierpinski


}

function sierpinski(points, degree) {
  let theColors = ["red", "green", "purple", "orange", "pink", "yellow"];
  fill(theColors[degrees]);
  noStroke();

  triangle(points[0].x, points[0].y, 
          points[1].x, points[1].y, 
          points[2].x, points[2]);
  if (degree > 0) {
    sierpinski([points[0],
              getMidPoint(points[0], points[1]),
              getMidPoint(points[0], points[2])], 
              degree -1);
    sierpinski([points[1],
              getMidPoint(points[0], points[1]),
              getMidPoint(points[1], points[2])], 
              degree -1);
  
    sierpinski([points[2],
              getMidPoint(points[0], points[2]),
              getMidPoint(points[1], points[2])], 
              degree -1);
    }
            }

function getMidPoint(point1, point2) {
  let xDiff = point1.x + point2.x;
  let yDiff = point1.y + point2.y;
  let theMidPoint = {
    x: xDiff/2,
    y: yDiff/2,
  };

}