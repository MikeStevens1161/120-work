var bubbles;  // Declare objects

//bubble
function bubble() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, 80);
  this.speed = 1;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  // Create object
  bubbles = new bubble();
}

function draw() {

    for (var x = 0; x <90; x++){
  bubbles.move();
  bubbles.display();
  bubbles.move();
  bubbles.display();
}

}
