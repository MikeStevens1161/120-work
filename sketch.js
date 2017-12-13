var ship;
var asteroids = [];
var lasers = [];
let stars = [];

function earth(){
    fill('blue');
    ellipse(width*.5,height*.5,200);
}
//stars for background//
class Star {
    constructor(x,y,r){
      this.x = x;
      this.y = y;
      this.r = r;
  }
  show(){
    stroke(random('white','blue'));
    strokeWeight(this.r);
    point(this.x,this.y);
  }
}


//setup function//
function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 1000; i++){
    let x = random(width);
    let y = random(height);
    let r = 1;
    stars[i] = new Star(x,y,r);
}
   ship = new Ship();

   //number of starting asteroids//
  for (var i = 0; i < 9; i++) {
    asteroids.push(new Asteroid());
  }



}

function draw() {
  background(0);
//drawing stars//
  for (let i = 0; i < stars.length; i++){
    stars[i].show();
    }
  earth();
//drawing asteroids
  for (var i = 0; i < asteroids.length; i++) {

    asteroids[i].render();
    asteroids[i].update();
    asteroids[i].edges();
  }
//drawing lasers//
  for (var i = lasers.length - 1; i >= 0; i--) {
    lasers[i].render();
    lasers[i].update();
  if (lasers[i].offscreen()) {
    lasers.splice(i, 1);
  } else {
        for (var j = asteroids.length - 1; j >= 0; j--) {
        if (lasers[i].hits(asteroids[j])) {
          if (asteroids[j].r > 20) {
          var newAsteroids = asteroids[j].breakup();
          asteroids = asteroids.concat(newAsteroids);
            }
            asteroids.splice(j, 1);
            lasers.splice(i, 1);
            break;
          }
        }
      }
}

//drawing the ship
  ship.render();
  ship.turn();
  ship.update();
  ship.edges();


}

//controls for the ship//

function keyReleased() {
  ship.setRotation(0);
  ship.boosting(false);
}

function keyPressed() {
  if (key == ' ') {
    lasers.push(new Laser(ship.pos, ship.heading));
  } else if (keyCode == RIGHT_ARROW) {
    ship.setRotation(0.1);
  } else if (keyCode == LEFT_ARROW) {
    ship.setRotation(-0.1);
  } else if (keyCode == UP_ARROW) {
    ship.boosting(true);
  }
}
