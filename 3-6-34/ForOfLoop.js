let arr = [10, 11, 15, 20];

// Syntax;

// for (const element of iterable) {
//     // code block to be executed
//   }

// element is a variable that holds the value of the current iteration.

// iterable is the collection or data structure you are iterating over.

for (const value of arr) {
  console.log(value); // here u can access value directly
}

// Initialization: The for...of loop initializes an iteration over the arr array.

// First Iteration:

// value is assigned 10.

// console.log(value) outputs 10.

// Second Iteration:

// value is assigned 11.

// console.log(value) outputs 11.

// Third Iteration:

// value is assigned 15.

// console.log(value) outputs 15.

// Fourth Iteration:

// value is assigned 20.

// console.log(value) outputs 20.

// Termination: The loop ends as there are no more elements to iterate over.

let str = "hello";

for (const char of str) {
  console.log(char); // Outputs each character in the string
}
