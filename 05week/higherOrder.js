'use strict'

// Create a forEach() function that takes an array of items and a function that
// runs the function arr.length number of times.

const myForEach = (item, index, arr) => {
  const arrLength = (index) => {
    for (let i = 0; i < arr.length; i++);
    console.log(i);
  };
  return arrLength;
};

// Create a map() function that takes an array of items and a function that
// returns an array with each item manipulated by that function.

const myMap = (arr, callback) => {
  const formatted =[];
  arr.forEach((item) => {
    callback(item);
    formatted.push(callback(item));
    console.log(callback(item));
  });
  return arr;
};

// Create a filter() function that takes an array of items and a function that
// returns an array with only the items that return true in the function.

//code here
