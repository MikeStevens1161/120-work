//variable size
var small = 50;
var med = 150;
var lar = 200;
//create a variable for the angle for moon
var angle = 0;

function setup() {
    createCanvas( windowWidth, windowHeight );

    // frame rate for sketch
    frameRate( 30);
    noCursor();
}


function draw () {
  // set the background every frame
  background( 0, 0, 0);
//moon
  push();
    translate( width*0.5, height*0.5 );
      rotate( radians(angle) );
  //color the moon white
    fill( 'rgb(247, 247, 247)' );
    ellipse(200,0,small);

    //update angle position
    angle = angle + 5;
    pop();

//earth
  push();
    translate( width*0.5, height*0.5 );
      rotate( radians(angle) );
  //color the moon white
    fill( 'rgb(12, 72, 226)' );
    ellipse(0,0,lar);
    pop();

//stars
  push();
    translate( width*0.5, height*0.5 );
  //color the moon white
    fill( 'rgb(247, 247, 247)' );
    ellipse(200,50,10);
    ellipse(300,20,10);
    ellipse(400,70,10);
    ellipse(-200,90,10);
    ellipse(-300,120,10);
    ellipse(-400,90,10);
    ellipse(-400,130,10);
    ellipse(-100,230,10);
    ellipse(400,630,10);
    ellipse(400,130,10);
    ellipse(-350,30,10);
    ellipse(-400,30,10);
    ellipse(300,330,10);
    ellipse(0,430,10);
    ellipse(0,-130,10);
    ellipse(30,-330,10);
    ellipse(50,230,10);
    ellipse(-70,230,10);
    ellipse(-190,-330,10);
    ellipse(-200,-230,10);
    ellipse(-220,-170,10);
    ellipse(250,-170,10);
    pop();

push();
    //draw a astroid that moves with the mouse and is sky brown
    fill( 'rgb(96, 68, 6)' );
    ellipse( mouseX, mouseY, small );
pop();
}

  //create a function where when the mouse is clicked the background turns blue
  function mousePressed() {
             frameRate(200);
  }
  function mouseReleased(){
            frameRate(30);

  }
