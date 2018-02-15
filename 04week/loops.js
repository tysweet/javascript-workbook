'use strict'

// for loop
// Use a for loop to console.log each item in the array carsInReverse.
const carsInReverse = ['honda', 'toyota', 'bmw','jeep', 'ford', 'tesla'];

for (let i = 0; i < carsInReverse.length; i++) {
  console.log(carsInReverse[i]);
}

// for...in loop
// Create an object (an array with keys and values) called persons with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"
// Use a for...in loop to console.log each key.
// Then use a for...in loop and if state to console.log the value associated with the key birthDate.
const persons = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
}

for (let x in persons) {
  console.log(x);
}

for (let y in persons) {
  if (persons[y]) {
    console.log(persons.birthDate);
  }
}

// while loop
// Use a for loop to console.log the numbers 1 to 1000.
let a = 0;

while (a < 1000) {
  a++;
  console.log(a);
}

// do...while loop
// Use a do...while loop to console.log the numbers from 1 to 1000.
let z = 0;

do {
  z++;
  console.log(z);
} while (z < 1000);

// When is a for loop better than a while loop?
// Answer - When you know the exact number of times you would like to iterate a loop


// How is the readability of the code affected?
// Answer - For loops are harder to read due to the number of parameters and the
// way they are linerally written, while other loops are easier to read because
// they are written vertically a step at a time (personal preferance)


// What is the difference between a for loop and a for...in loop?
// Answer - for loops iterate while something is true until it is false, while
// for...in loops iterate a specific variable over all of the properties of an object


// What is the difference between a while loop and a do...while loop?
// Answer - Pretty identical, but a do...while loop will run at least one time since
// the condition of the loop is listed at the bottom, and a while loop has its
// condition listed above its statement
