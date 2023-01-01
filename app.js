// grameboard module function
const Gameboard = (() => {
  const gameBoard = new Array(9).fill(''); 

  
  return{
    gameBoard,

  }
})();

// player factory function
const Player = (name, marker, id) => {
  const getName = () => name;
  const getMarker = () => marker;
  const getID = () => id;
  
  return {getName, getMarker, getID}
}

const displayController = (() => {

})

console.log(Gameboard.gameBoard);
const player1 = Player("Player 1", "X", "player1")
const player2 = Player("Player 2", "O", "player2")
console.log(player1.getName());
