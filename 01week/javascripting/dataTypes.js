'use strict';
console.log('here');
// Write a JavaScript program to display the current day and time
function newDate() {
  return Date();
};

newDate();

// Write a JavaScript program to convert a number to a string
function numToString(num) {
  return num.toString();
};

numToString(9);

// Write a JavaScript program to convert a string to the number
function stringToNum(str) {
  return Number(str);
}

stringToNum('seven');

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean
// Null
// Undefined
// Number
// NaN
// String
function whatType (arg1) {
  return typeof arg1;
};

whatType(null);

// Write a JavaScript program that adds 2 numbers together
function addTwoNums(num1, num2) {
  return num1 + num2;
}

addTwoNums(4, 3);

// Write a JavaScript program that runs only when 2 things are true
function twoAreTrue(arg1, arg2) {
  if(arg1 && arg2) {
    return 'Two Are True!'
  } else {
    return 'Two Are Not True!'
  };
};

twoAreTrue(4, 27);

// Write a JavaScript program that runs when 1 of 2 things are true
function oneIsTrue(arg1, arg2) {
  if(arg1 || arg2) {
    return 'One is True!'
  } else {
    return 'Not True!'
  };
};

oneIsTrue(4, 0);

// Write a JavaScript program that runs when both things are not true
function noneAreTrue(arg1, arg2) {
  if(arg1 && arg2) {
    return 'Two Are True!'
  } else {
    return 'Two Are Not True!'
  };
};

noneAreTrue(false, NaN);
