'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//is let, probably needs to be reassigned at each turn - object with arrays
let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece() {
  //move numbers to other stacks
  //Object.keys(?).pop(?).push(?).shift(?)

}


function isLegal(num) {
  //is this a legal move
  //true/false?;
  if ((stacks.a[num] > stacks.b[num]) || (stacks.b[num] > stacks.c[num]) ||
  (stacks.c[num] > stacks.b[num]) || (stacks.c[num] > stacks.a[num]) ||
  (stacks.b[num] > stacks.a[num])) {
    return 'Invalid Move - Cannot Put Larger Number on Smaller Number'
  }
}

function checkForWin() {
  //checking for win
  //true/false?
  if (stacks.b === [4, 3, 2, 1] || stacks.c === [4, 3, 2, 1]) {
    return 'You Win!'
  }
}

function towersOfHanoi(startStack, endStack) {
  //startStack is beginning stack moving from, endStack is ending location
  //assign a, b, c moves
  const movePieceFromA = stacks.a.pop([]);
  const movePieceFromB = stacks.b.pop([]);
  const movePieceFromC = stacks.c.pop([]);
  if (startStack === 'a' && endStack === 'b') {
    movePieceFromA;
    stacks.b.splice(-1, 1, movePieceFromA);
    console.log(stacks.b);
    // if (endStack === 'b') {
    //   stacks.b.push(movePieceFromA);
    // } else if (endStack === 'c'){
    //   stacks.c.push(movePieceFromA);
    // }
  }
  isLegal();
  checkForWin();
}

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

//tests for valid inputs

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
