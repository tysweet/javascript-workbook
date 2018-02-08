'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  let vowIndex = -1;
  if (word.indexOf('a') === 0 ||
      word.indexOf('e') === 0 ||
      word.indexOf('i') === 0 ||
      word.indexOf('o') === 0 ||
      word.indexOf('u') === 0) {
    return word + 'yay';
  }
  if (word.indexOf('a') > 0 || word.indexOf('a') < vowIndex) {
    vowIndex = word.indexOf('a');
    console.log(vowIndex);
  } else if (word.indexOf('e') > 0 || word.indexOf('e') < vowIndex) {
    vowIndex = word.indexOf('e');
    console.log(vowIndex);
  } else if (word.indexOf('i') > 0 || word.indexOf('i') < vowIndex) {
    vowIndex = word.indexOf('i');
    console.log(vowIndex);
  } else if (word.indexOf('o') > 0 || word.indexOf('o') < vowIndex) {
    vowIndex = word.indexOf('o');
    console.log(vowIndex);
  } else if (word.indexOf('u') > 0 || word.indexOf('u') < vowIndex) {
    vowIndex = word.indexOf('u');
    console.log(vowIndex);
  } else {
    return 'Input Valid Entry';
  }

  let firstPartOfWord = ''
  let secondPartOfWord = ''
  if (vowIndex > 0) {
    firstPartOfWord = word.slice(vowIndex);
    secondPartOfWord = word.substring(0, (vowIndex));
    return firstPartOfWord + secondPartOfWord + 'ay';
  }
}



function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should auto lowercase word before translation', () => {
      assert.equal(pigLatin('HeLlO'), 'ellohay');
      assert.equal(pigLatin('RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
