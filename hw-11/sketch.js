
//Array
let stars = [];
let ast = [];

//my variables
let angle = 0;
  //earth function
function earth(){
    fill('blue');
    ellipse(width*.5,height*.5,200);
}
function moon(){
  translate( width*0.5, height*0.5 );
      rotate( radians(angle));
        fill( 'rgb(247, 247, 247)' );
        ellipse(200,200,50);

   angle = angle + 1;
}

//making my objects
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

class Astroid{
// this creates the shapes of the rain drops
  constructor(posX, posY, w, h){
    this.posX = posX;
    this.posY = posY;
    this.w = w;
    this.h = h;
  }

// astroid movement
  move(){
    this.posY = this.posY += 5;
    if(this.posY > height){
      this.posY = 0;
    }
  }

// astroid color
  display(){
    fill(84, 54, 8);
    ellipse(this.posX, this.posY, this.w, this.h);
  }
}

//setup function
function setup() {
  createCanvas(windowWidth, windowHeight);

  for(let i = 0; i < 20; i++){
let w = random(width);
let h = random(height);
ast[i] = new Astroid(w, h, 50,50);
}
  for (let i = 0; i < 1000; i++){
    let x = random(width);
    let y = random(height);
    let r = 1;
    stars[i] = new Star(x,y,r);
}


}

//draw function
function draw() {
  background('black');
  for(let i = 0; i < ast.length; i++){
 ast[i].move();
 ast[i].display();
}
  for (let i = 0; i < stars.length; i++){
    stars[i].show();
    }
    earth();
    moon();


  }
