'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Checker(symbol, name) {
  this.symbol = symbol;
  this.name = name
}

const black = new Checker('b', 'black');
const red = new Checker('r', 'red');
let turn = red;

// function ticTacToe(row, column) {
//   checkForWin();
//   board[row][column] = playerTurn;
//   if (playerTurn === 'X') {
//     (playerTurn = 'O');
//   } else {
//     (playerTurn = 'X');
//   }
// }

// console.log(black);

function Board() {
  this.checkers = [];
  this.grid = [];
  // creates an 8x8 array, filled with null values
  this.createGrid = function() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  };

  // prints out the board
  this.viewGrid = function() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  };

  this.createGamePieces = () => {
    const redPieces = [
      [0, 1], [0, 3], [0, 5], [0, 7],
      [1, 0], [1, 2], [1, 4], [1, 6],
      [2, 1], [2, 3], [2, 5], [2, 7]
    ]
    for (let i = 0; i < 12; i++) {
      let redRow = redPieces[i][0];
      let redColumn = redPieces[i][1];
      let redChecker = red;
      this.checkers.push(redChecker);
      this.grid[redRow][redColumn] = redChecker;
    }
    const blackPieces = [
      [5, 0], [5, 2], [5, 4], [5, 6],
      [6, 1], [6, 3], [6, 5], [6, 7],
      [7, 0], [7, 2], [7, 4], [7, 6]
    ]
    for (let i = 0; i < 12; i++) {
      let blackRow = blackPieces[i][0];
      let blackColumn = blackPieces[i][1];
      let blackChecker = black;
      this.checkers.push(blackChecker);
      this.grid[blackRow][blackColumn] = blackChecker;
    }
  }
}

const isAValidInput = (start, finish) => {
  const startRow = parseInt(start.charAt(0));
  const startColumn = parseInt(start.charAt(1));
  const finishRow = parseInt(finish.charAt(0));
  const finishColumn = parseInt(finish.charAt(1));
  let startIsValid = (startRow >= 0 && startRow < 8) &&
  (startColumn >= 0 && startColumn < 8);
  let finishIsValid = (finishRow >= 0 && finishRow < 8) &&
  (finishColumn >= 0 && finishColumn < 8);
  return (startIsValid && finishIsValid);
}

const isALegalMove = (start, finish) => {
  const startRow = parseInt(start.charAt(0));
  const startColumn = parseInt(start.charAt(1));
  const finishRow = parseInt(finish.charAt(0));
  const finishColumn = parseInt(finish.charAt(1));
  let goodRowValue = (Math.abs(finishRow - startRow) <= 2);
  let goodColumnValue = (Math.abs(finishColumn - startColumn) <= 2);
  return (goodRowValue && goodColumnValue);
}

function Game() {
  this.board = new Board();
  this.start = function() {
    this.board.createGrid();
    this.board.createGamePieces();
  };
  this.moveChecker = (start, finish) => {
    if (isAValidInput(start, finish) && isALegalMove(start, finish)) {
      const startRow = parseInt(start.charAt(0));
      const startColumn = parseInt(start.charAt(1));
      const finishRow = parseInt(finish.charAt(0));
      const finishColumn = parseInt(finish.charAt(1));
      this.board.grid[finishRow][finishColumn] = this.board.grid[startRow][startColumn];
      this.board.grid[startRow][startColumn] = null;
      if (Math.abs(finishRow - startRow) === 2) {
        let jumpedRow = finishRow - startRow > 0 ? startRow + 1 : finishRow + 1;
        let jumpedColumn = finishColumn - startColumn > 0 ? startColumn + 1 : finishColumn + 1;
        this.board.grid[jumpedRow][jumpedColumn] = null;
        this.board.checkers.pop();
      }
    } else {
      console.log('Invalid Move - Please try a different move');
    }
  }
  // checkForWin();
}

// const checkForWin = () => {
//   console.log(Game.board.checkers);
// }
// checkForWin();

function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests

if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', function () {
    it('should move a checker', function () {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
