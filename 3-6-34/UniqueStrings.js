const strings = ["apple", "banana", "apple", "orange", "banana", "grape"];
const uniqueStrings = {};

// Step 1: Iterating over each string in the array using for...of loop
for (const str of strings) {
  // Step 2: Adding each string as a property to uniqueStrings object
  //         with value true to ensure uniqueness
  uniqueStrings[str] = true;
}

// Step 3: Extracting unique string keys from uniqueStrings object
const result = Object.keys(uniqueStrings);

// Step 4: Iterating over unique string keys to print each unique string
for (const str of result) {
  console.log(str);
}


// Step 1: Iterating Over Strings

// Loop 1:
// for (const str of strings) {
//     // str = 'apple'
//     uniqueStrings['apple'] = true;
// }

// // Loop 2:
// for (const str of strings) {
//     // str = 'banana'
//     uniqueStrings['banana'] = true;
// }

// // Loop 3:
// for (const str of strings) {
//     // str = 'apple'
//     uniqueStrings['apple'] = true; // No change as 'apple' already exists in uniqueStrings
// }

// // Loop 4:
// for (const str of strings) {
//     // str = 'orange'
//     uniqueStrings['orange'] = true;
// }

// // Loop 5:
// for (const str of strings) {
//     // str = 'banana'
//     uniqueStrings['banana'] = true; // No change as 'banana' already exists in uniqueStrings
// }

// // Loop 6:
// for (const str of strings) {
//     // str = 'grape'
//     uniqueStrings['grape'] = true;
// }

// Step 2: Extracting Unique String Keys

// const result = Object.keys(uniqueStrings);

// result = ['apple', 'banana', 'orange', 'grape']

// Step 3: Printing Unique Strings
// for (const str of result) {
//     console.log(str);
// }

// Output:
// apple
// banana
// orange
// grape
