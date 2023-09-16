"use strict";
// console.log(querySelector(".message").textContext);
// document.querySelector(".message").textContext = "Correct number,You won";

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;

document.querySelector(".number").textContent = secretNumber;
const guess = document.querySelector(".guess").value;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector(".message").textContext = "No Number";
  }
  // when player wins!
  else if (guess === secretNumber) {
    document.querySelector(".message").textContext = "Correct number,You won";
    document.querySelector(".number").textContext = secretNumber;
    document.querySelector("body").style.backgroundColor = "yellow";
    document.querySelector(".number").style.backgroundColor = "15rem";
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
