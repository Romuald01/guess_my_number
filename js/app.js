"use strict";
// console.log(querySelector(".message").textContext);
// document.querySelector(".message").textContext = "Correct number,You won";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

// document.querySelector(".number").textContent = secretNumber;
const guess = document.querySelector(".guess").value;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayScore = function (scoreMessage) {
  document.querySelector(".score").textContent = scoreMessage;
};
const displayNumber = function (numberMessage) {
  document.querySelector(".score").textContent = numberMessage;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    displayMessage("No Number");
  }
  // when player wins!
  else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "Correct number,You won";
    displayMessage("Correct number,You won");
    displayNumber(secretNumber);
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.backgroundColor = "15rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too High" : "Too Low";
      score--;
      displayScore(score);
    } else {
      displayMessage("You lose the game");
      displayScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayNumber("?");
  displayScore(score);
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");

  document.querySelector("body").style.backgroundColor = "#222";
  //   document.querySelector("body").style.width = "15rem";
});
