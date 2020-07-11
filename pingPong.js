var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var xSpeed = 5;
var ySpeed = 5;
var score = 0;
let p = 0;

let height = 1000;
let breadth = 1500;

let paddleHeight = height/5;
let paddleBreadth = 20;

let radius = paddleHeight/10;

// Canvas
function setup() {
  console.log("Hi");
  createCanvas(breadth, height);
}

//Background

function draw() {

  // Background
  background(51);

  // Paddle
  fill('#ffffff');
  p = mouseY;
  rect(0, p, paddleBreadth, paddleHeight);
  // constrain(p,0,0);

  //Functions
  move();
  display();
  bounce();

  //Score
  fill('#d9c3f7');
  textSize(24);
  text("Score: " + score, 10, 25);
}
// Ball Functions
function move() {
  xBall += xSpeed;
  yBall += ySpeed;
}


function bounce() {
  if (yBall-radius <= 0 ||
    yBall+radius >= height) {
    ySpeed *= -1;
  }

  if ((xBall-radius <= paddleBreadth &&
      yBall >= p ) &&
    (yBall <= p+paddleHeight)) {
    score++;
    xSpeed *= -1;
  } else if (xBall-radius <= 0 ||
    xBall+radius >= breadth) {
    xSpeed *= -1;
  }
  
}

function display() {
  fill('#d9c3f7');
  ellipse(xBall, yBall, 2*radius, 2*radius);
}
