// define smiley face
var smiley = {};
// parts of the smiley face
smiley.size = 250;
smiley.eye_mouth_y = -50;
smiley.color = 'green';
smiley.mouth_h = 100;
smiley.pos_x = 0;
smiley.pos_y = 0;

function setup() {
  createCanvas( windowWidth, windowHeight );
 background('purple');

  smiley.pos_x = width/2;
  smiley.pos_y = height/2;
}



  // draw smiley face
function draw() {

  translate( smiley.pos_x, smiley.pos_y );
  fill( smiley.color );
  ellipse( 0, 0, smiley.size );
  fill('white');
  ellipse( smiley.eye_mouth_y, smiley.eye_mouth_y, smiley.size * 0.66 );
  ellipse( -smiley.eye_mouth_y, smiley.eye_mouth_y, smiley.size * 0.66 );

  fill('red');
  ellipse( smiley.eye_mouth_y, smiley.eye_mouth_y, smiley.size * 0.20 );
  ellipse( -smiley.eye_mouth_y, smiley.eye_mouth_y, smiley.size * 0.20 );
  fill('black');
  ellipse( smiley.eye_mouth_y, smiley.eye_mouth_y, smiley.size * 0.10 );
  ellipse( -smiley.eye_mouth_y, smiley.eye_mouth_y, smiley.size * 0.10 );
  fill('black');
  arc( 0, -smiley.eye_mouth_y, smiley.size * 0.9, smiley.mouth_h, 0, PI );
  fill('red');
  arc( 0, -smiley.eye_mouth_y, smiley.size * 0.7, smiley.mouth_h, 0, PI );
  fill('black');
  // changing position
  smiley.pos_x += random( -7, 7 );
  smiley.pos_y += random( -7, 7 );

}
