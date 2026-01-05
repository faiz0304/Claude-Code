// Game state variables
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;
let gameMode = 'pvp'; // 'pvp' for player vs player, 'pve' for player vs enemy (bot)
let botDifficulty = 'easy';

// Winning combinations
const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
];

// DOM elements
const cells = document.querySelectorAll('.cell');
const statusDisplay = document.getElementById('status');
const restartBtn = document.getElementById('restart-btn');
const pvpModeBtn = document.getElementById('pvp-mode');
const pveModeBtn = document.getElementById('pve-mode');
const difficultySelect = document.getElementById('difficulty');
const difficultyDiv = document.getElementById('bot-difficulty');
const resultDiv = document.getElementById('result');

// Initialize the game
function initGame() {
    // Add event listeners to cells
    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });

    // Restart button
    restartBtn.addEventListener('click', restartGame);

    // Game mode buttons
    pvpModeBtn.addEventListener('click', () => setGameMode('pvp'));
    pveModeBtn.addEventListener('click', () => setGameMode('pve'));

    // Difficulty selection
    difficultySelect.addEventListener('change', (e) => {
        botDifficulty = e.target.value;
    });

    // Initialize game
    restartGame();
}

// Set game mode
function setGameMode(mode) {
    gameMode = mode;

    // Update UI
    if (mode === 'pvp') {
        pvpModeBtn.classList.add('active');
        pveModeBtn.classList.remove('active');
        difficultyDiv.classList.add('hidden');
    } else {
        pveModeBtn.classList.add('active');
        pvpModeBtn.classList.remove('active');
        difficultyDiv.classList.remove('hidden');
    }

    restartGame();
}

// Handle cell click
function handleCellClick(e) {
    const cell = e.target;
    const index = parseInt(cell.getAttribute('data-index'));

    // Check if cell is already taken or game is inactive
    if (board[index] !== '' || !gameActive) {
        return;
    }

    // Make player move
    makeMove(index, currentPlayer);

    // Check if game continues and it's bot's turn
    if (gameActive && gameMode === 'pve' && currentPlayer === 'O') {
        // Bot makes a move after a short delay
        setTimeout(makeBotMove, 500);
    }
}

// Make a move
function makeMove(index, player) {
    if (board[index] !== '') return;

    board[index] = player;
    cells[index].textContent = player;
    cells[index].classList.add(player.toLowerCase());

    // Check for win or draw
    if (checkWin()) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        // Switch player
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        updateStatus();
    }
}

// Check for win
function checkWin() {
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            // Highlight winning cells
            cells[a].classList.add('win');
            cells[b].classList.add('win');
            cells[c].classList.add('win');
            return true;
        }
    }
    return false;
}

// Check for draw
function isDraw() {
    return !board.includes('');
}

// Make bot move
function makeBotMove() {
    if (!gameActive || currentPlayer !== 'O') return;

    let index;

    switch (botDifficulty) {
        case 'easy':
            index = getRandomMove();
            break;
        case 'medium':
            // 70% chance to make a smart move, 30% random
            index = Math.random() < 0.7 ? getSmartMove() : getRandomMove();
            break;
        case 'hard':
            index = getBestMove();
            break;
        default:
            index = getRandomMove();
    }

    makeMove(index, currentPlayer);
}

// Get random move
function getRandomMove() {
    const availableMoves = board
        .map((cell, index) => cell === '' ? index : null)
        .filter(val => val !== null);

    return availableMoves[Math.floor(Math.random() * availableMoves.length)];
}

// Get smart move (blocks opponent or wins if possible)
function getSmartMove() {
    // Try to win
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] === 'O' && board[b] === 'O' && board[c] === '') return c;
        if (board[a] === 'O' && board[c] === 'O' && board[b] === '') return b;
        if (board[b] === 'O' && board[c] === 'O' && board[a] === '') return a;
    }

    // Try to block opponent
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] === 'X' && board[b] === 'X' && board[c] === '') return c;
        if (board[a] === 'X' && board[c] === 'X' && board[b] === '') return b;
        if (board[b] === 'X' && board[c] === 'X' && board[a] === '') return a;
    }

    // Otherwise make a random move
    return getRandomMove();
}

// Get best move (minimax algorithm for hard difficulty)
function getBestMove() {
    // For hard difficulty, use minimax algorithm
    let bestScore = -Infinity;
    let bestMove;

    for (let i = 0; i < 9; i++) {
        if (board[i] === '') {
            board[i] = 'O';
            let score = minimax(board, 0, false);
            board[i] = '';

            if (score > bestScore) {
                bestScore = score;
                bestMove = i;
            }
        }
    }

    return bestMove;
}

// Minimax algorithm for optimal play
function minimax(board, depth, isMaximizing) {
    // Check for terminal states
    if (checkWinForPlayer('O')) {
        return 10 - depth;
    } else if (checkWinForPlayer('X')) {
        return depth - 10;
    } else if (isDraw()) {
        return 0;
    }

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === '') {
                board[i] = 'O';
                let score = minimax(board, depth + 1, false);
                board[i] = '';
                bestScore = Math.max(score, bestScore);
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === '') {
                board[i] = 'X';
                let score = minimax(board, depth + 1, true);
                board[i] = '';
                bestScore = Math.min(score, bestScore);
            }
        }
        return bestScore;
    }
}

// Helper function to check win for a specific player
function checkWinForPlayer(player) {
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] === player && board[b] === player && board[c] === player) {
            return true;
        }
    }
    return false;
}

// Update game status display
function updateStatus() {
    if (gameActive) {
        statusDisplay.textContent = `Player ${currentPlayer}'s Turn`;
    }
}

// End the game
function endGame(isDraw) {
    gameActive = false;

    if (isDraw) {
        statusDisplay.textContent = "Game ended in a draw!";
        resultDiv.textContent = "Game ended in a draw!";
        resultDiv.className = "result draw";
        resultDiv.classList.remove('hidden');
    } else {
        // The current player is the one who just made the winning move
        const winner = currentPlayer;
        statusDisplay.textContent = `Player ${winner} Wins!`;
        resultDiv.textContent = `Player ${winner} Wins!`;
        resultDiv.className = "result win";
        resultDiv.classList.remove('hidden');
    }
}

// Restart the game
function restartGame() {
    // Reset game state
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;

    // Clear board UI
    cells.forEach(cell => {
        cell.textContent = '';
        cell.className = 'cell';
    });

    // Reset status and result
    updateStatus();
    resultDiv.classList.add('hidden');

    // Set initial game mode if not already set
    if (!gameMode) {
        setGameMode('pvp');
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', initGame);