'use strict';

const validHandInput = ['rock', 'paper', 'scissors'];
const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Main Rock/Paper/Scissore function
function rockPaperScissors(hand1, hand2) {
  if (hand1===hand2){
    return 'It is a Tie';
  } else if ((hand1 === 'rock' && hand2 === 'scissors') || (hand1 === 'scissors' && hand2 === 'paper') || (hand1 === 'paper' && hand2 === 'rock')) {
    return 'Player 1 Wins!'
  } else {
    return 'Player 2 Wins!'
  }
}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests - npm test 01week/rockPaperScissors.js - in gh-pages

// Test for all possible scenaries in which "Hand one wins!".
// Test for all possible scenaries in which "Hand two wins!".
// Test to make sure user must input a valid entry (e.g. 'rock', 'paper', or 'scissors')
// Think of more tests you could write and try writing them.

if (typeof describe === 'function') {

  describe('rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitespace', () => {
      assert.equal(rockPaperScissors('rOck', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
