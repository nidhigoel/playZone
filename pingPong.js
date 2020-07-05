var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var xSpeed = (2, 7);
var ySpeed = (-7, -2);
var score = 0
let p = 0

// Canvas
function setup() {
  createCanvas(400, 400);
}

//Background

function draw() {

  // Background
  background(0);

  // Paddle
  fill('#ffffff');
  p = mouseY;
  rect(0, p, 10, 60);
  // constrain(p,0,0);

  //Functions
  move();
  display();
  bounce();
  //resetBall();
  paddle();

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

  if (xBall < 10 ||
    xBall > 400 - 10) {
    xSpeed *= -1;
  }
  if (yBall < 10 ||
    yBall > 400 - 10) {
    ySpeed *= -1;
  }
}

function display() {
  fill('#d9c3f7');
  ellipse(xBall, yBall, 20, 20);
}

// Bounce off Paddle
function paddle() {
  if ((xBall-10 == 0 &&
      yBall > p ) &&
    (yBall <= p+60)) {
    xSpeed *= -1;
    // ySpeed *= -1;
    score++;

  }
}