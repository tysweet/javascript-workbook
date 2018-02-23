'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//whiteboard for game at bottom of tests

//main board and object of the game
let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

//prints game board in console
function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

//moves numbers from stack to stack - a, b, or c
function movePiece(startStack, endStack) {
  //move numbers to other stacks
  //Object.keys(?).pop(?).push(?).shift(?)
  if (startStack === 'a' && endStack === 'b') {
    stacks.b.push(stacks.a.pop());
  } else if (startStack === 'a' && endStack === 'c') {
    stacks.c.push(stacks.a.pop());
  } else if (startStack === 'b' && endStack === 'a') {
    stacks.a.push(stacks.b.pop());
  } else if (startStack === 'b' && endStack === 'c') {
    stacks.c.push(stacks.b.pop());
  } else if (startStack === 'c' && endStack === 'a') {
    stacks.a.push(stacks.c.pop());
  } else if (startStack === 'c' && endStack === 'b') {
    stacks.b.push(stacks.c.pop());
  } else {
    console.log('Invalid Entry - Please Input a, b, or c')
  }
}

//checks to make sure game move is legal within the rules of the game
function isLegal(startStack, endStack) {
  //is this a legal move
  //true/false?;
  return stacks[endStack].length === 0 || stacks[endStack].slice(-1) > stacks[startStack].slice(-1)
  return true;
}

//checks to see if all numbers have been moved to stack b or c in order
function checkForWin() {
  //checking for win
  return stacks.b.length === 4 || stacks.c.length === 4
  console.log('You Win!!!!!!!!');
  stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
  };
  return true;
}

//main game function, calls other functions to play game
function towersOfHanoi(startStack, endStack) {
  //startStack is beginning stack moving from, endStack is ending location
  //assign a, b, c moves
  if(isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
    return checkForWin();
  } else {
    console.log('Invalid Move');
    return false;
  }
}

//prompts for input and resets game board
function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}


// Tests
if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {

  getPrompt();

}

//Whiteboard for game

//Objective
// - Move stack of numbers from row A to row B or row C one at a time
// - Cannot put larger number on top of smaller number
// - Game is won when all numbers are in reverse order in row B or row C

//User Steps
// - User starts with array [4, 3, 2, 1] in row A, rows B & C are empty []
// - User is prompted to enter a starting row, then a row they would like to move to
// - Must check for legal move - cannot put larger number on smaller number
// - If move is legal, proceed with move - if not, prompt with 'use legal move'
// - Moves are made one at a time
// - Show moves on game board as game progresses

//Check For win
// - If user moves all 4 numbers to rows B or C in [4, 3, 2, 1] fashion, game is won
// - Prompt user 'You Win!'
// - Reset game board to all numbers is row A & rows B & C empty []

//Legal Moves
// - If num you are trying to move is larger than number already present -> Illegal Move
// - Else, it's a legal move
