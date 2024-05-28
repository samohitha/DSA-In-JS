//  Write a JavaScript function to calculate the sum of two numbers.

function sum(a, b) {
  return a + b;
}
console.log(sum(5, 10)); // Output: 15

// Write a JavaScript function to find the maximum of two numbers.
function max(a, b) {
  return a > b ? a : b;
}
console.log(max(5, 10)); // Output: 10

// Write a JavaScript function to print the multiplication table of a given number.
function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}
multiplicationTable(5);

// Write a JavaScript function to calculate the sum of numbers from 1 to 10.

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

// Write a JavaScript function to calculate the factorial of a number using a while loop.

function factorial(num) {
  let result = 1;
  let i = 1;
  while (i <= num) {
    result *= i;
    i++;
  }
  return result;
}
console.log(factorial(5)); // Output: 120

// Write a JavaScript function to check if a number is prime.

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7)); // Output: true

// Write a JavaScript function to generate the Fibonacci sequence up to a certain number of terms.

function fibonacci(limit) {
  let fibSeq = [0, 1];
  for (let i = 2; i < limit; i++) {
    fibSeq[i] = fibSeq[i - 1] + fibSeq[i - 2];
  }
  return fibSeq;
}
console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Write a JavaScript function to find the sum of all even numbers between 1 and a given number.
function sumEvenNumbers(num) {
  let sum = 0;
  for (let i = 2; i <= num; i += 2) {
    sum += i;
  }
  return sum;
}
console.log(sumEvenNumbers(10)); // Output: 30

// Write a JavaScript function to generate a random integer between two given integers.

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 10)); // Output: Random number between 1 and 10

// Write a JavaScript function to find the sum of all numbers divisible by 3 and 5 between 1 and a given number.

function sumDivisibleBy3And5(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumDivisibleBy3And5(10)); // Output: 33

// Write a JavaScript function to calculate the average of numbers in an array.

function calculateAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calculateAverage([1, 2, 3, 4, 5])); // Output: 3

// Write a JavaScript function to find the largest number in an array
function findLargestNumber(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findLargestNumber([1, 5, 2, 8, 3])); // Output: 8

// Write a JavaScript function to find the smallest number in an array.

function findSmallestNumber(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(findSmallestNumber([1, 5, 2, 8, 3])); // Output: 1

// Write a JavaScript function to check if an array includes a given value.

function includesValue(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}
console.log(includesValue([1, 2, 3, 4, 5], 3)); // Output: true

// Write a JavaScript function to find the index of a given value in an array.
function findIndex(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}
console.log(findIndex([1, 2, 3, 4, 5], 3)); // Output: 2
