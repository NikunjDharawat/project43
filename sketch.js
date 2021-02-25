var hour, minute,second;


function arc(){
arc(50, 55, 50, 50, 0, HALF_PI);
noFill();
arc(50, 55, 60, 60, HALF_PI, PI);
arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);
arc(50, 50, 80, 80, 0, PI + QUARTER_PI);
arc(50, 50, 80, 80, 0, PI + QUARTER_PI);
arc(50, 50, 80, 80, 0, PI + QUARTER_PI, CHORD);
arc(50, 50, 80, 80, 0, PI + QUARTER_PI, PIE);
}

function translate(){
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop()
}


function line(){
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
}



function predfined(){
  hr = hour();
  mn = minute();
  sc = second();
}



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  noStroke();
  
}

function draw() {
 
  background(0);
   function map() {

    scAngle = map(0,60,0,360);
    scAngle = map(0,60,0,360);
    fill(255, c, 0);
    ellipse(width/2, height/2, d, d);
  
  drawSprites();
  }
}