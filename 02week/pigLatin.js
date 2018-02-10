'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(input) {
  let vowIndex = -1;
  const word = input.split('');

  if (input.toLowerCase().indexOf('a') === 0 ||
      input.toLowerCase().indexOf('e') === 0 ||
      input.toLowerCase().indexOf('i') === 0 ||
      input.toLowerCase().indexOf('o') === 0 ||
      input.toLowerCase().indexOf('u') === 0) {
    return input + 'yay';
  } else {
    console.log(`line 22 ${word}`);
    const arrVowels = ['a', 'e', 'i', 'o', 'u'];

    arrVowels.forEach((vowel) => {
      if (word.includes('a')){
        vowIndex = word.indexOf('a');
        console.log('line 27 ', vowIndex);
      }
      if (word.includes('e')){
        vowIndex = word.indexOf('e');
        console.log('line 30 ', vowIndex);
      }
      if (word.includes('i')){
        vowIndex = word.indexOf('i');
        console.log('line 33 ', vowIndex);
      }
      if (word.includes('o')){
        vowIndex = word.indexOf('o');
        console.log('line 36 ', vowIndex);
      }
      if (word.includes('u')){
        vowIndex = word.indexOf('u');
        console.log('line 39 ', vowIndex);
      } else {
        console.log(`no ${vowel} in the word`);
      }
    });

  }

  let firstPartOfWord = ''
  let secondPartOfWord = ''
  if (vowIndex > -1) {
    firstPartOfWord = input.toLowerCase().slice(vowIndex);
    secondPartOfWord = input.toLowerCase().substring(0, (vowIndex));
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
