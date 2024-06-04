// type of [1,2,3]

// Arrays are also custom objects in JS

// Index of element is key and the element is self is the value

// ["abc", "def", "ghi"] => {0 :"abc", 1 :"def", 2 :"ghi"}

// Map function in JS

// -------------------Higher Order Functions -------------------------//

// These are functions that depends & operates on other function

// Higher order functions take another function or return a function as argument and execute it

// map is a higher order function available with arrays

// It takes a function as an argument => f

// It returns an array in which every value is actually populated by calling function f with original array element as argument

// Every element of the original array is passed one by one as argument function f

// Wtever is the output  for each individual element we populate one by one in the array

function square(el) {
  return el * el;
}

const arr = [1, 2, 3, 4, 5, 6];

const result = arr.map(square);

console.log(result);

/**
 * square(1) => 1
 * square(2) => 4
 * square(3) => 9
 * square(4) => 16
 * square(5) => 25
 * square(6) => 36
 **/

function cube(el) {
  return el * el * el;
}

const result1 = arr.map(cube); // here not calling just passing the name of function

console.log(result1);

/**
 * When to use maps
 *
 * In ay situation when we have to do any operation on every element off the array
 * and store the result in each operation
 * map can be a good option
 *
 * For Example : Array of products
 **/

const newArray = [9, 8, 7, 6, 5];

function print(element, index) {
  return `Element at index ${index} is ${element}`;
}

/**
 * If the function that we are passing in map takes two arguments
 * then first argument will be accessing the actual value
 * second argument will be accessing index of that value
 **/

const result3 = newArray.map(print);
console.log(result3);
