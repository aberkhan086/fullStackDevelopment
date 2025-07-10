let cells = document.querySelectorAll('.cell');
let statusDisplay = document.querySelector('#status');
let restartButton = document.querySelector('#restart');

// Winning combinations
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
];

let currentPlayer = 'X';
let gameActive = true;

// Handle cell click
function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedCellIndex = Array.from(cells).indexOf(clickedCell);

    if (clickedCell.textContent !== "" || !gameActive) return;

    clickedCell.textContent = currentPlayer;
    checkForWinner();
}

// Check for winner
function checkForWinner() {
    let roundWon = winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return (
            cells[a].textContent === currentPlayer &&
            cells[b].textContent === currentPlayer &&
            cells[c].textContent === currentPlayer
        );
    });

    if (roundWon) {
        statusDisplay.textContent = `Player ${currentPlayer} wins!`;
        gameActive = false;
        return;
    }

    if (Array.from(cells).every(cell => cell.textContent)) {
        statusDisplay.textContent = "It's a draw!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
}

// Restart the game
function restartGame() {
    currentPlayer = 'X';
    gameActive = true;
    statusDisplay.textContent = "Player X's turn";
    cells.forEach(cell => cell.textContent = "");
}

// Setup event listeners and initial state
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartButton.addEventListener('click', restartGame);
statusDisplay.textContent = "Player X's turn";
