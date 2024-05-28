// A lot of times we need to do somethings repeatedly

// For doing things repeatedly we need to do loops

// Write a program to print the numbers from 1 to 10

// With the current knowledge we can write like this

console.log(1);

console.log(2);

console.log(3);

// Here element of repetition is printing a number and moving to next number

// We have to find something instead of writing consoles.log() 100 times

// We can defined looping control in 3 ways

// -------------------------- 1. While loop----------------------------------------//

// while (condition) {
// set of instructions
// increment / decrement
// }

// till the condition remains true we will again and again execute the whole block

let i = 1;

while (i <= 10) {
  console.log(i);
  i += 1;
}

console.log("End");

// unless and until the condition is false it won't come out of the block

// What is the difference between while and if

// if will only check the condition doesn't matter if the condition is true or false , it will only check at once

// whereas while loop checks your condition again and again till it becomes false

// i += 1; if u don't write this the condition will be same it will cause infinite loops

// 1. Write a program to calculate sum of all the numbers from 1-10

let sum = 0;
let j = 1;

while (j <= 10) {
  sum = sum + j;
  j += 1;
}

console.log(sum);

// Reverse While loop  20 - 1

let k = 20;

while (k >= 1) {
  console.log(k);
  k -= 1;
}

// -------------------------- 2.For loop----------------------------------------//

// Syntax
// for (initialization; condition; increment) {
//   // code to be executed
// }

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// For loop are more way to do same thing as of while loop there is no particular advantage of using a particular loop

let ans = 0;

for (let i = 1; i <= 10; i++) {
  ans += i;
}

console.log(ans);

// Print only even numbers

for (let i = 1; i <= 25; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// Another way

let a = 2;

while (a <= 25) {
  console.log(a);
  a += 2;
}

// D.R.Y => Don't Repeat Yourself

