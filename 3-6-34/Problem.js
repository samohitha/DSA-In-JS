// DNF Algorithm

// Given an array which contains 0 & 1 the data is shuffled randomly

// Write a function that can rearrange the data such that all 0's are present before 1

// Ex :  [1, 0, 0, 1, 1, 1, 0, 1]
// O/p : [0, 0, 0, 1, 1, 1, 1, 1]

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function Separate(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i <= j) {
    if (arr[i] === 1) {
      swap(arr, i, j);
      j--;
    } else {
      i++;
    }
  }
}

let arr = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
Separate(arr);

console.log(arr);

// Algorithm

// Initialize two pointers:

// i starts at the beginning of the array (index 0).

// j starts at the end of the array (index arr.length - 1).

// Traverse the array using these two pointers:

// If arr[i] is 1, swap arr[i] with arr[j] and decrement j.

// If arr[i] is 0, just increment i.

// Continue this process until i surpasses j.

// Dry Run

// Let's dry run the algorithm with the given input array:

// let arr = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1];

// Separate(arr);

// console.log(arr);

// Initialization:

// i = 0

// j = 9

// Array: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1]

// Step-by-Step Execution:

// First Iteration:

// i = 0, j = 9

// arr[i] = 0

// Increment i: i = 1

// Array: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1]

// Second Iteration:

// i = 1, j = 9

// arr[i] = 1

// Swap arr[1] with arr[9]

// Decrement j: j = 8

// Array: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1] (swap has no visible effect as elements are same)

// Third Iteration:

// i = 1, j = 8

// arr[i] = 1

// Swap arr[1] with arr[8]

// Decrement j: j = 7

// Array: [0, 0, 0, 1, 0, 1, 0, 1, 1, 1]

// Fourth Iteration:

// i = 1, j = 7

// arr[i] = 0

// Increment i: i = 2

// Array: [0, 0, 0, 1, 0, 1, 0, 1, 1, 1]

// Fifth Iteration:

// i = 2, j = 7

// arr[i] = 0

// Increment i: i = 3

// Array: [0, 0, 0, 1, 0, 1, 0, 1, 1, 1]

// Sixth Iteration:

// i = 3, j = 7

// arr[i] = 1

// Swap arr[3] with arr[7]

// Decrement j: j = 6

// Array: [0, 0, 0, 1, 0, 1, 0, 1, 1, 1] (swap has no visible effect as elements are same)

// Seventh Iteration:

// i = 3, j = 6

// arr[i] = 1

// Swap arr[3] with arr[6]

// Decrement j: j = 5

// Array: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]

// Eighth Iteration:

// i = 3, j = 5

// arr[i] = 0

// Increment i: i = 4

// Array: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]

// Ninth Iteration:

// i = 4, j = 5

// arr[i] = 0

// Increment i: i = 5

// Array: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]

// At this point, i = 5 and j = 5, so the loop terminates.

// [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]
