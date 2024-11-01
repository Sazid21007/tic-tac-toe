const gameBoard = document.querySelectorAll('.cell');
const statusDisplay = document.getElementById('status');
const restartButton = document.getElementById('restart');

let gameActive = true;
let currentPlayer = 'X';
let boardState = ["", "", "", "", "", "", "", "", ""];

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function handleCellClick(event) {
  const cell = event.target;
  const cellIndex = cell.getAttribute('data-index');

  if (boardState[cellIndex] !== "" || !gameActive) return;

  boardState[cellIndex] = currentPlayer;
  cell.textContent = currentPlayer;

  if (checkWinner()) {
    statusDisplay.textContent = `Player ${currentPlayer} Wins!`;
    gameActive = false;
  } else if (boardState.includes("")) {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.textContent = `Player ${currentPlayer}'s Turn`;
  } else {
    statusDisplay.textContent = `It's a Draw!`;
    gameActive = false;
  }
}

function checkWinner() {
  return winningConditions.some(condition => {
    const [a, b, c] = condition;
    return boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c];
  });
}

function restartGame() {
  gameActive = true;
  currentPlayer = 'X';
  boardState = ["", "", "", "", "", "", "", "", ""];
  statusDisplay.textContent = `Player ${currentPlayer}'s Turn`;
  gameBoard.forEach(cell => (cell.textContent = ""));
}

gameBoard.forEach(cell => cell.addEventListener('click', handleCellClick));
restartButton.addEventListener('click', restartGame);

statusDisplay.textContent = `Player ${currentPlayer}'s Turn`;
