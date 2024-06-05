/**
 * reduce is a higher order function available for arrays
 *
 * reduce also takes a function f as an argument
 *
 * wt reduce does is it one by one goes to every element of the array
 *
 * say the current element is array[0]
 *
 * reduce will pass the element to the function f and accumulate the result of further function calls
 *
 * with this particular result
 **/

const arr = [1, 2, 3, 4, 5, 6];

function sum(preResult, currentRes) {
  return preResult + currentRes;
}

const res = arr.reduce(sum);

console.log(sum);

// reduce() is a special function in JavaScript that helps you crunch a bunch of data in an array into a single value.

// array.reduce(callback, initialValue)

// array: The array you want to crunch.

// callback: A special function that does the crunching.

// initialValue (optional): The starting value for crunching.

// How Does it Work?

// Get Ready: You prepare your array and decide how you want to crunch it.

// Start Crunching: You call reduce() on your array and give it two things:

// A function that tells reduce() how to crunch your data.

// (Optional) A starting value to begin crunching from.

// Let the Magic Begin: reduce() runs your special function on each item in the array, one at a time.

// Keep Track: As it crunches, reduce() keeps track of a running total or whatever value you want to get.

// Return the Result: When reduce() finishes crunching all the items, it hands you back the final result.

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)

// Prepare the Array: [1, 2, 3, 4, 5].

// Initialize Accumulator: accumulator starts at 0.

// Iteration 1: accumulator = 0 + 1 = 1.

// Iteration 2: accumulator = 1 + 2 = 3.

// Iteration 3: accumulator = 3 + 3 = 6.

// Iteration 4: accumulator = 6 + 4 = 10.

// Iteration 5: accumulator = 10 + 5 = 15.

// Final Result: Return 15.

// ----------------------------Product of Numbers in an Array-------------------------------//

const numbers1 = [1, 2, 3, 4, 5];
const product = numbers1.reduce(
  (accumulator, currentValue) => accumulator * currentValue,
  1
);
console.log(product); // Output: 120 (1 * 2 * 3 * 4 * 5)

// Prepare the Array: [1, 2, 3, 4, 5].

// Initialize Accumulator: accumulator starts at 1.

// Iteration 1: accumulator = 1 * 1 = 1.

// Iteration 2: accumulator = 1 * 2 = 2.

// Iteration 3: accumulator = 2 * 3 = 6.

// Iteration 4: accumulator = 6 * 4 = 24.

// Iteration 5: accumulator = 24 * 5 = 120.

// Final Result: Return 120.

// -------------------------------Concatenation of Strings in an Array------------------------------//

const strings = ["Hello", " ", "World", "!"];
const concatenatedString = strings.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  ""
);
console.log(concatenatedString); // Output: 'Hello World!'

// Prepare the Array: ['Hello', ' ', 'World', '!'].

// Initialize Accumulator: accumulator starts as an empty string ''.

// Iteration 1: accumulator = '' + 'Hello' = 'Hello'.

// Iteration 2: accumulator = 'Hello' + ' ' = 'Hello '.

// Iteration 3: accumulator = 'Hello ' + 'World' = 'Hello World'.

// Iteration 4: accumulator = 'Hello World' + '!' = 'Hello World!'.

// Final Result: Return 'Hello World!'.

// ------------------------------Finding the Maximum Number in an Array-----------------------------//

const numbers3 = [10, 5, 20, 15, 30];
const max = numbers3.reduce(
  (accumulator, currentValue) => Math.max(accumulator, currentValue),
  Number.MIN_SAFE_INTEGER
);
console.log(max); // Output: 30

// Prepare the Array: [10, 5, 20, 15, 30].

// Initialize Accumulator: accumulator starts at the minimum safe integer value.

// Iteration 1: accumulator = max(-9007199254740991, 10) = 10.

// Iteration 2: accumulator = max(10, 5) = 10.

// Iteration 3: accumulator = max(10, 20) = 20.

// Iteration 4: accumulator = max(20, 15) = 20.

// Iteration 5: accumulator = max(20, 30) = 30.

// Final Result: Return 30.

// ----------------------Flattening an Array of Arrays:----------------------------//

const arrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattened = arrays.reduce(
  (accumulator, currentValue) => accumulator.concat(currentValue),
  []
);
console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]

// Prepare the Array: [[1, 2], [3, 4], [5, 6]].

// Initialize Accumulator: accumulator starts as an empty array [].

// Iteration 1: accumulator = [] + [1, 2] = [1, 2].

// Iteration 2: accumulator = [1, 2] + [3, 4] = [1, 2, 3, 4].

// Iteration 3: accumulator = [1, 2, 3, 4] + [5, 6] = [1, 2, 3, 4, 5, 6].

// Final Result: Return [1, 2, 3, 4, 5, 6].

// ------------------------- Counting the Occurrences of Items in an Array----------------------------

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const fruitCount = fruits.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});
console.log(fruitCount); // Output: { apple: 3, banana: 2, orange: 1 }


// Prepare the Array: ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'].

// Initialize Accumulator: accumulator starts as an empty object {}.

// Iteration 1: 'apple' is encountered. Increment count for 'apple' in accumulator.

// Iteration 2: 'banana' is encountered. Increment count for 'banana' in accumulator.

// Iteration 3: 'apple' is encountered again. Increment count for 'apple' in accumulator.

// Iteration 4: 'orange' is encountered. Add 'orange' to accumulator with count 1.

// Iteration 5: 'banana' is encountered again. Increment count for 'banana' in accumulator.

// Iteration 6: 'apple' is encountered again. Increment count for 'apple' in accumulator.

// Final Result: Return { apple: 3, banana: 2, orange: 1 }.