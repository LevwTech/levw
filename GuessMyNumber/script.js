"use strict";

// Random whole Number between 1 and 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;
// Score variable starts at 20 and decrements with wrong guesses
let score = 20;
document.querySelector(".number").textContent = secretNumber;

document.querySelector(`.check`).addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // when there is no guess
  if (!guess) {
    document.querySelector(".message").textContent = `No Number!`;
  }
  // when player wins
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number!";
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High!";
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.score`).textContent = 0;
      document.querySelector(".message").textContent = "You Lost The Game!";
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low!";
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.score`).textContent = 0;
      document.querySelector(".message").textContent = "You Lost The Game!";
    }
  }
});
