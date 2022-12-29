const Gameboard = (() => {
  const gameBoard = new Array(9).fill(''); 

  
  return{
    gameBoard,

  }
})();

const Player = (name, marker, id) => {
  const getName = () => name;
  const getMarker = () => marker;
  const getID = () => id;
  
  return {getName, getMarker, getID}
}

const player1 = Player("Player 1", "X", "player1")
console.log(Gameboard.gameBoard);
console.log(player1.getName());
