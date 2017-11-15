
//Array
let stars = [];

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


//setup function
function setup() {
  createCanvas(windowWidth, windowHeight);
  background('Black');
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
  for (let i = 0; i < stars.length; i++){
    stars[i].show();
    }
    earth();
    moon();
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

//funciion earth(){

//};
