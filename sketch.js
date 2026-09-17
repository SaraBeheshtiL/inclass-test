console.log("I believe I can do this!");

function setup() {
  createCanvas(800, 900);
}
//the measurement above is pixels for Canvas
// the origin(0,0) on Canvas is on the left up and the x axis goes to right and
//y axis to the bottom

function draw() {
  background(20);
  fill(255, 120, 60);
  circle(300, 300, 100);
  fill(25, 120, 60);
  circle(100, 500, 200);
  fill(50, 200, 250);
  rectMode(CENTER);
  rect(400, 450, 300, 100);
}
