//variable size
var small = 50;
var med = 150;
var lar = 200;
//create a variable for the angle for moon
var angle = 0;
var img ;
img = loadImage("..assets/stars.jpeg");
function setup() {
    createCanvas( windowWidth, windowHeight );

    // frame rate for sketch
    frameRate( 50);
    noCursor();
}


function draw () {
  // set the background every frame black
  background(img);
  ellipse(0,0,lar);

  push();
    translate( width*0.5, height*0.5 );
      rotate( radians(angle) );
  //color the moon white
    fill( 'rgb(247, 247, 247)' );
    ellipse(200,0,small);
    //update angle position
    angle = angle + 5;
    pop();

  push();
    translate( width*0.5, height*0.5 );
  //color the moon white
    fill( 'rgb(44, 7, 227)' );
    ellipse(0,0,lar);
    pop();

  push();
    translate( width*0.5, height*0.5 );
  //add stars and color stars white
    fill( 'rgb(247, 247, 247)' );
    ellipse(00,0,10);
    pop();

push();
    //draw a astroid that moves with the mouse and is sky blue
    fill( 'rgb(96, 68, 6)' );
    ellipse( mouseX, mouseY, small );
pop();
}

  //create a function where when the mouse is clicked the background turns blue
  function mousePressed() {
             frameRate(0);
  }
  function mouseReleased(){
            frameRate(50);

  }
