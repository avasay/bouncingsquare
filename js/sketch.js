let squareSize = 50;
let squareX, squareY;
let speed = 5;
let direction = 1;

function setup() {
  createCanvas(150, 150);
  squareX = width / 2 - squareSize / 2;
  squareY = height / 2 - squareSize / 2;
}

function draw() {
  background(255);
  
  // Update square position
  squareY += speed * direction;
  
  // Check boundaries and reverse direction if needed
  if (squareY + squareSize > height || squareY < 0) {
    direction *= -1;
  }
  
  // Draw the square
  fill(128, 0, 0); // Maroon color
  noStroke();
  rect(squareX, squareY, squareSize, squareSize);
}