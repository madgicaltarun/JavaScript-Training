"use strict";

/*

document.querySelector(".message").textContent = "Correct Number!";

document.querySelector(".number").textContent = 13;

document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value;

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // When there is no input
  if (!guess) {
    displayMessage("No number");
  } else if (guess === secretNumber) {
    // When user wins the game
    displayMessage("Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } // Whan is gusse is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "Top High!" : "To Low!";
      displayMessage(guess > secretNumber ? "Top High!" : "To Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("Game Over");
      document.querySelector(".score").textContent = 0;
    }
  }
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too High!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "Game Over";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // } else {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too Low!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "Game Over";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".number").textContent = "?";
  displayMessage("start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});
