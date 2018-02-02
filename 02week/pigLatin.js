'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  let vowIndex = -1;
  // const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  // const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n',
  //   'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']
  // const firstLetterVowel = 'yay';
  // const noFirstLetterVowel = 'ay';
  // if (word.startsWith('a')) {
  //   return word + firstLetterVowel;
  // } else if (word.startsWith('e')) {
  //   return word + firstLetterVowel;
  // } else if (word.startsWith('i')) {
  //   return word + firstLetterVowel;
  // } else if (word.startsWith('o')) {
  //   return word + firstLetterVowel;
  // } else if (word.startsWith('u')) {
  //   return word + firstLetterVowel;
  // } else if (word.startsWith('y')) {
  //   return word + firstLetterVowel;
  // } else if (word.indexOf('a')){
  //   return word.indexOf('a');
  //   word + noFirstLetterVowel;
  // } else if (word.indexOf('e')){
  //   return word + noFirstLetterVowel;
  // } else if (word.indexOf('i')){
  //   return word + noFirstLetterVowel;
  // } else if (word.indexOf('o')){
  //   return word + noFirstLetterVowel;
  // } else if (word.indexOf('u')){
  //   return word + noFirstLetterVowel;
  // } else if (word.indexOf('y')){
  //   return word + noFirstLetterVowel;
  // } else {
  //   return 'nope';
  // }
  if (word.indexOf('a') > -1 && word.indexOf('a') > 0) {
    vowIndex = word.indexOf('a');
  } else if (word.indexOf('e') > -1 && word.indexOf('e') < vowIndex) {
    vowIndex = word.indexOf('e');
  } else if (word.indexOf('i') > -1 && word.indexOf('i') < vowIndex) {
    vowIndex = word.indexOf('i');
  } else if (word.indexOf('o') > -1 && word.indexOf('o') < vowIndex) {
    vowIndex = word.indexOf('o');
  } else if (word.indexOf('u') > -1 && word.indexOf('u') < vowIndex) {
    vowIndex = word.indexOf('u');
  } else {
    return 'Input Valid Entry';
  }

  let firstPartOfWord = ''
  let secondPartOfWord = ''
  if (vowIndex > -1) {
    firstPartOfWord = word.substring(vowIndex - 1);
    secondPartOfWord = word.substring(vowindex);
    return secondPartOfWord + firstPartOfWord + 'ay';
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
