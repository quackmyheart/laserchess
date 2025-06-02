/*
PIECES 
pharoh (1): goal is to attack this kid with lasers 
scarab (2): reflective on 2 sides, can be swapped with pyramid, anubis 
anubis (2): cannot be killed from front 
pyramid (7): reflective on 1 side 
sphinx (1): shoots laser beams 

MOVEMENTS
Turn (tau / 4 each)
Move (any adjacent tile that the player is allowed in, not for sphinx)
Swap (Scarab only, swap with an adjacent piece) \n 

Each Turn: 
- player clicks on a piece 
- screen shows possible moves (inc swaps for Scarab)
- player clicks on a move (player can click on the same piece to cancel)
- Piece is moved 
- sphinx shoots lasers
- check if pharaoh has died
- check if a piece has died 
- next player's turn
*/

// board dimensions
const board_width = 10;
const board_height = 8; 

function make_board(){
  // set up board with pieces in starting positions
  
}


function draw_laser(colour){
  // draw a laserbeam from the sphinx depending on the colour 
}

// tutorial code 
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 30;
const dx = 2;
const dy = -2;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  x += dx;
  y += dy;
}

function startGame() {
  setInterval(draw, 10);
}

const runButton = document.getElementById("runButton");
runButton.addEventListener("click", () => {
  startGame();
  runButton.disabled = true;
});
