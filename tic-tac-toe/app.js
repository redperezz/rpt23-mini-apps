// TODO:
// first move always starts with player 'X'
// the app detects a win or a tie and displays an appropriate message
// a button resets the game for a new round of gameplay

window.addEventListener('DOMContentLoaded', (event) => {
  let board = document.querySelectorAll("td");
  let currentPlayer;

  let makeMove = function() {
    if(!currentPlayer) {
      currentPlayer = 'X';
    } else if (currentPlayer === 'X') {
      currentPlayer = 'O';
    } else {
      currentPlayer = 'X';
    }
    this.innerHTML = currentPlayer;
    this.classList.add("fixInnerSpacing");
  }

  board.forEach((square) => {
    square.addEventListener('click', makeMove);
  })

});