// Reverse an array

// Ex :  [5, 9, 1, 8, 2, 3]
//0  1  2  3  4  5

// Reverse: [3, 2, 8, 1, 9, 5]
//   0   1  2  3  4  5

// Before Reversing element => index = i

// After reversing element => n-i-1

// We need to somewhow mve the elements from their original index to n-i-1

function reverseArray(arr) {
  let n = arr.length;
  for (let i = 0; i < n / 2; i++) {
    // Swap elements at index i and n-i-1
    let temp = arr[i];
    arr[i] = arr[n - i - 1];
    arr[n - i - 1] = temp;
  }
  return arr;
}

// Example usage
let array = [5, 9, 1, 8, 2, 3];
console.log(reverseArray(array)); // Output: [3, 2, 8, 1, 9, 5]


// Dry Run

// Initial Array

// Array: [5, 9, 1, 8, 2, 3]

// Indexes: 0  1  2  3  4  5

// Step-by-Step Execution

// Initial State:

// Array: [5, 9, 1, 8, 2, 3]

// n = 6 (length of the array)

// First Iteration (i = 0):

// Swap elements at index 0 and 5 (n-i-1):

// temp = arr[0]; // temp = 5

// arr[0] = arr[5]; // arr[0] = 3

// arr[5] = temp; // arr[5] = 5

// Resulting Array: Array: [3, 9, 1, 8, 2, 5]

// Second Iteration (i = 1):

// Swap elements at index 1 and 4 (n-i-1):

// temp = arr[1]; // temp = 9

// arr[1] = arr[4]; // arr[1] = 2

// arr[4] = temp; // arr[4] = 9

// Resulting Array:Array: [3, 2, 1, 8, 9, 5]

// Third Iteration (i = 2):

// Swap elements at index 2 and 3 (n-i-1):

// temp = arr[2]; // temp = 1

// arr[2] = arr[3]; // arr[2] = 8

// arr[3] = temp; // arr[3] = 1

// Resulting Array:Array: [3, 2, 8, 1, 9, 5]

// Fourth Iteration (i = 3):

// At this point, since i is greater than n/2, the loop stops.

// Array: [3, 2, 8, 1, 9, 5]