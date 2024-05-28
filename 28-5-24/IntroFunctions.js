// Functions in js

// Functions are some black box

// We have 2 choices

// 1. We can create our own functions

// 2. We can  consume other functions (In built functions)

// Ex Math.sqrt(9)

// Now if we use function then we can store our logic inside a function and doesn't matter how many times u want to use it,u will just call the function

// Writing functions in js

// function function_name(){
// logic
// return => it is optional default value is undefined
// }

// create a function to check the number is even or not

function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return true; // the return value can be anything u can return or boolean or array depending in use case
  } else {
    return false;
  }
}

let x = 10;

let res = isEvenOrOdd(x);

if (res === true) {
  console.log("Even");
} else {
  console.log("Odd");
}

for (let i = 1; i <= 20; i++) {
  let result = isEvenOrOdd(i);
  if (result === true) {
    console.log(i, "Even");
  } else {
    console.log(i, "Odd");
  }
}

// Check which numbers are even in between 1 - 50
for (let i = 1; i <= 50; i++) {
  console.log(isEvenOrOdd(i));
}

// Debugging in functions

// What is console.log()

// it prints the value

// it is noting but there will some console object inside that log is a function (more advanced )

console = {
  log: function () {
    // some code
  },
};

let y = console.log("Bharath");

// Bharath is the input value given to function

// the function actually just print the given input value on the screen

// and then returns undefined no matter wt thw input was

console.log(y);

let ans = Math.sqrt(100);

console.log(ans);

// if u don't return anything in manually it automatically returns undefined

function welcome() {
  console.log("Welcome to the world of JavaScript");
}

let res1 = welcome();

console.log(res1); // here default return will takes place

// ---------------------Arguments and Parameters ------------------------------//

function add(x, y) {
  // place wr we define the fn x, y are called parameters
  let c = x + y;
  return c;
}

let a = 10;
let b = 20;

let res2 = add(a, b); // here we are calling the fn where we are calling are called as arguments

console.log(res2);

let res3 = add(a, 30);

console.log(res3);

let res4 = add(9, 1);

console.log(res4);

// Prime number or not in function

// Ex: 13 => true

// x = 54 => false

// logic => decide the logic

// How to check no is prime or not

// Wt type of numbers are prime

// the numbers that are divisible by 1 or the number itself are called primes

// Ex : x = 12

// if there at least one more number apart from 1 and x that divides x completely then x is non prime (composite number)

// Start with 2 and number less than x

// Ex: 49 => 2 divide 49 => no
// Ex: 49 => 3 divide 49 => no
// Ex: 49 => 4 divide 49 => no
// Ex: 49 => 5 divide 49 => no
// Ex: 49 => 6 divide 49 => no
// Ex: 49 => 7 divide 49 => yes

// Start from number to x-1

// first number we found in this range (2, x-1) that can divide x completely immediately return false

function isPrime(x) {
  for (let i = 2; i <= x - 1; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  // Th loop competed but we didn't return false that means no number in the range (2, x-1 ) can divide hence x is a prime

  return true;
}

console.log(isPrime(11));
