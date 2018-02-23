'use strict'

// Create a forEach() function that takes an array of items and a function that
// runs the function arr.length number of times.

const myForEach = (arr) => {
  const arrLength = () => {
    let i = 0;
    for (i = 0; i < arr.length; i++);
    return i;
  };
  return arrLength();
};

// Create a map() function that takes an array of items and a function that
// returns an array with each item manipulated by that function.

const myMap = (arr, callback) => {
  const formatted =[];
  arr.forEach((item) => {
    callback(item);
    formatted.push(callback(item));
  });
  return arr;
};

// Create a filter() function that takes an array of items and a function that
// returns an array with only the items that return true in the function.

const myFilter = (arr, callback) => {
  const filtered =[];
  arr.forEach((item) => {
    if (callback(item) !== true) {
      return item;
    }
    filtered.push(item);
  });
  return filtered;
};
