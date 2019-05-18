// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let ballStuff;

  function setup() {
    createCanvas(400, 400);
    ballStuff = {
      x:50, 
      y:350,
      dx:5, 
      dy:5,
      size:50,
      dz:dx**2 + dy**2,
      };
  }

  function draw() {
    background(220);
    base();
    move();
    ball();
  }

  function ball() {
    fill("red");
    ellipse(ballStuff.x, ballStuff.y, ballStuff.size, ballStuff.size);
  }

  function move() {
    if (keyIsPressed && (key === "d")) {
      ballStuff.x += ballStuff.dx;
    }
    if (keyIsPressed && (key === "a")) {
      ballStuff.x -= ballStuff.dx;
    }
    if (keyIsPressed && (key === "w")) {
      ballStuff.y -= ballStuff.dy;
    }
    if (keyIsPressed && (key === "d" && key === "w")) {
      ballStuff.x += dz;

    }
  }

  function base() {
    fill("black");
    rect(0, 350, 400, 50);


  }