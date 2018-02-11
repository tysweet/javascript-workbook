'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//main object of game
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
  if ((stacks[endStack].length === 0) || (stacks[endStack].slice(-1) > stacks[startStack].slice(-1))) {
    return true;
  } else {
    return false;
  }
}

//checks to see if all numbers have been moved to stack b or c in order
function checkForWin() {
  //checking for win
  if ((stacks.b.length === 4) || (stacks.c.length === 4)) {
    console.log('You Win!!!!!!!!');
    return true;
  } else {
    return false;
  }
}

//main game function, calls other functions to play
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
