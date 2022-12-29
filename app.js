const Gameboard = (() => {
  const gameBoard = new Array(9).fill(''); 
  const player1 = []
  const player2 = []

  
  return{
    gameBoard,
    player1,
    player2,

  }
})();
console.log(Gameboard.gameBoard);

function changePlayer(event){
  if(!Gameboard.gameBoard.includes('X') || !Gameboard.gameBoard.includes('O')){
    event.target.classList.toggle('player-x');
    if(playerButton.textContent === 'X'){
      playerButton.textContent = 'O';
    } else {
      playerButton.textContent = 'X';
    }
  }
}
const playerButton = document.querySelector('.player-button');
playerButton.addEventListener('click', changePlayer);