// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Bubble {
  constructor(x,y,dy) {
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.radius = random(25,50);
    this.color = color(random(255), random(255), random(255), random(255));

  }
  display() {
    background(0);
    noStroke();
    fill(255);
    ellipse(this.x, this.y);
  }
  bubbleUp() {
    if (this.y > this.radius) {
      this.y += this.dy;
      
      // wind factor
      if (random(100) > 40) {
        this.x += random(-5,5);
      }
    }


  }
}

class Timer {
  constructor(timeToWait) {
    this.timeToWait = timeToWait;
    this,startTime = millis();
    this.endTime - this.startTime + this.timeToWait;
    this.timer = new Timer(1000);
  }
 
  isDone() {
   return millis() >= this.endTime;
  }


}

let theBubbles;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 100; i++) {
    myBubble = new Bubble(random(width), height + 100, random(-5, -1));
    theBubbles.push(myBubble);
}
}

function draw() {
  background(220);
  
  for (let i = 0; i < theBubbles.length; i++) {
    myBubble[i].bubbleUp();
    myBubble[i].display();
  }

}

restart() {
  this.startTime = millis();
}