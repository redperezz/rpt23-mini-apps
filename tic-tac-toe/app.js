// TODO:
// first move always starts with player 'X'
// the app detects a win or a tie and displays an appropriate message
// a button resets the game for a new round of gameplay


let board = document.querySelectorAll("td");
let clickForPlayerX = function(square) {
  console.log(square);
}

board.forEach((square) => {
  square.addEventListener('click', clickForPlayerX)
})
console.log(board);