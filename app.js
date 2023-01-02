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

// display winner on screen
const displayWinner = ((marker) => {
  const winContainer = document.getElementById('winner-container')
  winContainer.classList.add('active')
  winContainer.textContent = `The winner is ${marker}'s`
})

// clear display when reset
const clearDisplay = (() => {
  const winContainer = document.getElementById('winner-container')
  winContainer.classList.remove('active')
  winContainer.textContent = ''
})

// module to play game, run on load
const playGame = (() => {
  const player1 = Player("Player 1", "X")
  const player2 = Player("Player 2", "O")
  const {gameBoard} = Gameboard()
  let currentPlayer = player1.getName()
  let marker = player1.getMarker()

  // display markers on board
  const displayMarkers = (event) => {
    const index = `${event.target.id}`
    event.target.removeEventListener('click', displayMarkers)
    event.target.textContent = marker
    gameBoard[index] = marker
    const winner = checkWinner()
    if(winner === true){
      displayWinner(marker)
    } else {
      if(marker === player1.getMarker()){
        currentPlayer = player2.getName()
        marker = player2.getMarker()
      } else {
        currentPlayer = player1.getName()
        marker = player1.getMarker()
      }
    }
  }

  // add event listener to each box
  const addListener = (() => {
    const boxes = Array.from(document.getElementsByClassName('box'))
    boxes.forEach((box) => box.addEventListener('click', displayMarkers))
  })
  addListener()
  
  // remove listeners after win
  const removeListeners = (() => {
    const boxes = Array.from(document.getElementsByClassName('box'))
    boxes.forEach((box) => box.removeEventListener('click', displayMarkers))
  })

  // reset board 
  const resetBoard = (() => {
      for(let i = 0; i < gameBoard.length; i++){
        const box = document.getElementById(`${i}`)
        gameBoard[i] = ''
        box.textContent = gameBoard[i]
      }
    currentPlayer = player1.getName()
    currentPlayer = player1.getName()
    marker = player1.getMarker()
    clearDisplay()
    addListener()
  })

  // add listener to reset button
  const resetButton = document.getElementById('reset')
  resetButton.addEventListener('click', resetBoard)

  // check for winner
  const checkWinner = (() => {
    if(gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[0] !== ''){
      removeListeners()
      return true
    } else if(gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[0] !== ''){
      removeListeners()
      return true
    } else if(gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[3] !== ''){
      removeListeners()
      return true
    } else if(gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[6] !== ''){
      removeListeners()
      return true
    } else if(gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[0] !== ''){
      removeListeners()
      return true
    } else if(gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[1] !== ''){
      removeListeners()
      return true
    } else if(gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[2] !== ''){
      removeListeners()
      return true
    } else if(gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[0] !== ''){
      removeListeners()
      return true
    } else if(gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[2] !== ''){
      removeListeners()
      return true
    } else {
      return false
    }
  })
})()

