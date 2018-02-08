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

  if (input.indexOf('a') === 0 ||
      input.indexOf('e') === 0 ||
      input.indexOf('i') === 0 ||
      input.indexOf('o') === 0 ||
      input.indexOf('u') === 0) {
    return input + 'yay';
  } else {
    console.log(`line 22 ${word}`);
    const arrVowels = ['a', 'e', 'i', 'o', 'u'];

    arrVowels.forEach((vowel) => {
      if(word.includes(vowel)){
        vowIndex = word.indexOf(vowel);
        console.log('line 27 ', vowIndex);
      } else {
        console.log(`no ${vowel} in the word`);
      }
    });

  }


  // if (word.indexOf('a') > -1) {
  //   vowIndex = word.indexOf('a');
  //   return console.log("line 22" + vowIndex);
  // }
  // if (word.indexOf('e') > -1 || word.indexOf('e') < vowIndex) {
  //   vowIndex = word.indexOf('e');
  //   console.log("line 26" + vowIndex);
  // }
  // if (word.indexOf('i') > -1 || word.indexOf('i') < vowIndex) {
  //   vowIndex = word.indexOf('i');
  //   console.log("line 30" + vowIndex);
  // }
  // if (word.indexOf('o') > -1 || word.indexOf('o') < vowIndex) {
  //   vowIndex = word.indexOf('o');
  //   console.log("line 34" + vowIndex);
  // }
  // if (word.indexOf('u') > -1 || word.indexOf('u') < vowIndex) {
  //   vowIndex = word.indexOf('u');
  //   console.log("line 39" +  vowIndex);
  // } else {
  //   return 'Input invalid Entry line 40';
  // }

  // let firstPartOfWord = ''
  // let secondPartOfWord = ''
  // if (vowIndex > 0) {
  //   firstPartOfWord = word.slice(vowIndex);
  //   secondPartOfWord = word.substring(0, (vowIndex));
  //   return firstPartOfWord + secondPartOfWord + 'ay';
  // }
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
