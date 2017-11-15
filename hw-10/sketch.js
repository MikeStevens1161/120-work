var stars = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
  makeStars();
}
};

function makeStars(){
  background(0);
  if (framecount < 2){
    for(var i = 0; i < 333; i++){
      stars.push(new Star());
    }

};

  strokeWeight(1);
  if (framecount % 100 === 0)
      stroke(0,0,255)
  else
      stroke(255);

  for (var i = 0; i < stars.length; i++; )
        point(stars[i].pos.x, stars[i].pos.y);
}

funtion Star(){
  this.pos = createVector(Math.random()* width,
                          Math.random()*height);

}

function draw(){
makeStars();

}
