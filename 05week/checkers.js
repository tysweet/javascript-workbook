'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Checker(symbol) {
  this.symbol = symbol;
  if (symbol === 'red') {
    this.symbol = 'r';
  } else {
    this.symbol = 'b';
  }
}

function Board() {
  this.checker = [];
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

  // Your code here

  this.createGamePieces = () => {

    const redPiece = [
      [0, 0], [0, 2], [0, 4], [0, 6],
      [1, 1], [1, 3], [1, 5], [1, 7],
      [2, 0], [2, 2], [2, 4], [2, 6]
    ]
    for (let i = 0; i < 12; i++) {
      let redRow = redPiece[i][0];
      let redColumn = redPiece[i][1];
      let redChecker = new Checker('red');
      this.checker.push(redChecker);
      this.grid[redRow][redColumn] = redChecker;
    }

    const blackPiece = [
      [5, 1], [5, 3], [5, 5], [5, 7],
      [6, 0], [6, 2], [6, 4], [6, 6],
      [7, 1], [7, 3], [7, 5], [7, 7]
    ]
    for (let i = 0; i < 12; i++) {
      let blackRow = blackPiece[i][0];
      let blackColumn = blackPiece[i][1];
      let blackChecker = new Checker('black');
      this.checker.push(blackChecker);
      this.grid[blackRow][blackColumn] = blackChecker;
    }
  }
}

function Game() {
  this.board = new Board();
  this.start = function() {
    this.board.createGrid();
    // Your code here
    this.board.createGamePieces();
  };
  this.moveChecker = (start, finish) => {
    const startRow = parseInt(start.charAt(0));
    const startColumn = parseInt(start.charAt(1));
    const finishRow = parseInt(finish.charAt(0));
    const finishColumn = parseInt(finish.charAt(1));
    if (isAValidInput(start, finish) &&
    isALegalMove(start, finish) &&
    this.board.grid[finishRow][finishColumn] === null) {
      this.board.grid[finishRow][finishColumn] = this.board.grid[startRow][startColumn];
      this.board.grid[startRow][startColumn] = null;
      if (Math.abs(finishRow - startRow) === 2) {
        let jumpedRow = finishRow - startRow > 0 ? startRow + 1 : finishRow + 1;
        let jumpedColumn = finishColumn - startColumn > 0 ? startColumn + 1 : finishColumn + 1;
        this.board.grid[jumpedRow][jumpedColumn] = null;
        this.board.checker.pop();
      }
    } else {
      console.log('Invalid Move - Please attempt a different move');
    }
  }
}

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
