'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];


let playerTurn = 'X';


function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {

}

function verticalWin() {
  // Your code here
}

function diagonalWin() {
  if ((board.forEach('X', [0, 0])) && (board.forEach('X', [1, 1])) &&
  (board.forEach('X', [2, 2])) || (board.forEach('X', [0, 2])) &&
  (board.forEach('X', [1, 1])) && (board.forEach('X', [2, 0]))) {
    return 'Player X Wins!';
  } else if ((board.forEach('O', [0, 0])) && (board.forEach('O', [1, 1])) &&
  (board.forEach('O', [2, 2])) || (board.forEach('O', [0, 2])) &&
  (board.forEach('O', [1, 1])) && (board.forEach('O', [2, 0]))) {
    return 'Player O Wins!'
  }
}

function checkForWin() {
  // Your code here
}

function ticTacToe(row, column) {
  // Your code here
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      if (row === 0 && column === 2) {
        board[0].splice(2, 1, playerTurn);
      };
      getPrompt();
  });

// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {
  getPrompt();
};
