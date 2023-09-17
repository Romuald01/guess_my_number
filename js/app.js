"use strict";
// console.log(querySelector(".message").textContext);
// document.querySelector(".message").textContext = "Correct number,You won";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

document.querySelector(".number").textContent = secretNumber;
const guess = document.querySelector(".guess").value;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector(".message").textContent = "No Number";
  }
  // when player wins!
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct number,You won";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "yellow";
    document.querySelector(".number").style.backgroundColor = "15rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lose the game";
      document.querySelector(".score").textContent = 0;
    }
    //if guess number is low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lose the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";

  //   document.querySelector("body").style.backgroundColor = "red";
  //   document.querySelector("body").style.width = "15rem";
});
