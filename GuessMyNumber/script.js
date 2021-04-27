"use strict";

// Random whole Number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Score variable starts at 20 and decrements with wrong guesses
let score = 20;
let highscore = 0;

function displaymsg(message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(`.check`).addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // when there is no guess
  if (!guess) {
    displaymsg(`No Number!`);
  }
  // when player wins
  else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    displaymsg("Correct Number!");
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    if (score > highscore) highscore = score;
    document.querySelector(`.highscore`).textContent = highscore;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too High!" : "Too Low!";
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.score`).textContent = 0;
      displaymsg("You Lost The Game!");
    }
  }
});
document.querySelector(`.again`).addEventListener("click", function () {
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  displaymsg("Start guessing...");
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
});
