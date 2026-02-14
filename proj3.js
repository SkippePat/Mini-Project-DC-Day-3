function setup() {
  createCanvas(700,700);
  background(220);
}

function draw() {
  
  noStroke(0);
  fill(random(255), random(255), random(255));
  ellipse(mouseX, mouseY, 75, 75);
}

function mousePressed() {
  background(220);
}