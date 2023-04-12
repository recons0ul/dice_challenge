function getRandom() {
  let randomNumber1 = 1 + Math.floor(Math.random() * 6);
  return randomNumber1;
}

const diceImages = document.querySelectorAll(".dice img");
const player1Roll = getRandom();
const player2Roll = getRandom();

diceImages[0].setAttribute("src", "images/dice" + player1Roll + ".png");
diceImages[1].setAttribute("src", "images/dice" + player2Roll + ".png");

if (player1Roll > player2Roll) {
  document.querySelector("h1").textContent = "🚩 Player 1 wins!"
} else if (player1Roll < player2Roll) {
  document.querySelector("h1").textContent = "Player 2 wins! 🚩"
} else {
  // draw
  document.querySelector("h1").textContent = "Draw!";
}

