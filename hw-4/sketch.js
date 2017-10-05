function setup() {
  // Setup basic elements
createCanvas(500, 500);
background(20, 0, 240);

//stingers
push();
fill(170, 170, 170);
triangle(340,290, 380,290, 400,240 );
triangle(210,180, 280,180, 250,30);
pop();

//body
push();
fill(250, 204, 86);
ellipse(360, 290, 40);
ellipse(350, 320, 60);
ellipse(330, 340, 80);
ellipse(290, 340, 100);
ellipse(260, 340, 120);
ellipse(230, 340, 140);
ellipse(210, 320, 160);
ellipse(220, 290, 180);
ellipse(250, 250, 200);
pop();

// eyes
push();
fill(25, 28, 29);
ellipse(200,200,25);
ellipse(300,200,25);

//nose
push();
fill(227, 110, 149);
ellipse(250,275, 100);
pop();

// monster name
push();
textAlign(CENTER);
textSize(40);
textFont("Georgia");
text("Weedle", 250, 460);
pop();

  // Title
push();
textAlign(CENTER);
textSize(20);
textFont("Georgia");
text("Pocket Monster: by Mike stevens", 250, 27);
pop();

}
