// gameboard module function
const Gameboard = (() => {
  const gameBoard = new Array(9).fill(''); 
  return{gameBoard}
});

// player factory function
const Player = (name, marker) => {
  const getName = () => name
  const getMarker = () => marker
  return {getName, getMarker}
}

//create players
const player1 = Player("Player 1", "X", "player1")
const player2 = Player("Player 2", "O", "player2")

// module to play game, run on load
const playGame = (() => {
  const {gameBoard} = Gameboard
  let marker = player1.getMarker()

  // display markers on board
  const displayMarkers = (event) => {
    const index = event.target.getAttribute('data-index')
    event.target.removeEventListener('click', displayMarkers)
    event.target.textContent = marker
    if(marker === player1.getMarker()){
      marker = player2.getMarker()
    } else {
      marker = player1.getMarker()
    }
    console.log(index)
  }

  // add event listener to each box
  const boxes = Array.from(document.getElementsByClassName('box'))
  function addListener(){
    boxes.forEach((box) => box.addEventListener('click', displayMarkers))
  }
  addListener()

})()