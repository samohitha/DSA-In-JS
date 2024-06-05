// In JavaScript, the filter method creates a new array with all elements that pass the test implemented by the provided function.

// It's a useful method for working with arrays when you need to filter out certain elements based on specific criteria.

// array.filter(callback(element, index, array), thisArg);

// callback: A function that is called for each element in the array. It should return true to keep the element in the new array, and false to exclude it.

// element: The current element being processed in the array.

// index (optional): The index of the current element being processed in the array.

// array (optional): The array filter was called upon.

// thisArg (optional): A value to use as this when executing the callback.


/** 
 * Filter function
 * 
 * Filter is also higher order function
 * 
 * Filter also loops over the elements 
 * 
 * there is a special thing about filter i.e the argument function f which we have to pass inside 
 * 
 * filter should also return a boolean otherwise output will be converted to boolean 
 * 
 * filter loops over every element passes that element in the argument function and then if the output 
 * 
 * of the this function call is true then it stores the original element in a new array otherwise doesn't add this element to the array 
 
 * 
 * **/
















// Example 1: Filtering an array of numbers

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter out even numbers
const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

// Example 2: Filtering an array of objects

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
];

// Filter out people who are older than 30
const youngPeople = people.filter((person) => person.age <= 30);

console.log(youngPeople);
// Output: [ { name: 'Alice', age: 25 }, { name: 'Bob', age: 30 } ]

// Example 3: Using thisArg

const numbers1 = [10, 20, 30, 40, 50];

const threshold = {
  value: 30,
};

// Use `thisArg` to reference `threshold` inside the callback
const smallNumbers = numbers1.filter(function (number) {
  return number < this.value;
}, threshold);

console.log(smallNumbers); // Output: [10, 20]

// Example 4: Using the index and array parameters

const numbers2 = [5, 10, 15, 20, 25, 30];

// Filter out every second element
const everySecondElement = numbers2.filter((number, index) => index % 2 === 0);

console.log(everySecondElement); // Output: [5, 15, 25]
