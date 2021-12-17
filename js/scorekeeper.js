var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var p1Display = document.getElementById("p1display");
var p2Display = document.getElementById("p2display");
var resetButton = document.getElementById("reset");
var playTo = document.querySelector("input[type=number]");
var p1name = document.getElementById("p1name");
var p2name = document.getElementById("p2name");
var p1namebutton = document.getElementById("p1namebutton");
var p2namebutton = document.getElementById("p2namebutton");
var toWin = document.getElementById("to-win");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function() {
if(!gameOver) {
  p1Score++;
  if(p1Score === winningScore) {
    p1Display.classList.add("winner");
    gameOver = true;
  }
  p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function() {
  if(!gameOver) {
  p2Score++;
  if(p2Score === winningScore) {
    p2Display.classList.add("winner");
    gameOver = true;
  }
  p2Display.textContent = p2Score;
  }
});

function reset() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  gameOver = false;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
}

resetButton.addEventListener("click", function() {
  reset();
});

playTo.addEventListener("change", function() {
  toWin.textContent = playTo.value;
  winningScore = Number(playTo.value); //this makes the value a number, rather than a string (input converts to a string)
  reset();
});

p1name.addEventListener("change", function() {
  if (p1name.value === "") {
    p1namebutton.textContent = "Player 1";
  } else {
    p1namebutton.textContent = p1name.value;
  }
});

p2name.addEventListener("change", function() {
  if (p1name.value === "") {
    p1namebutton.textContent = "Player 2";
  } else {
    p2namebutton.textContent = p2name.value;
  }
});