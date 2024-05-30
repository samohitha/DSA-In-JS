// Square pattern in Js

// ****
// ****
// ****
// ****

// We need to print n x n grid

// Figuring out logic

// For a given value of n we print n rows

// For given row we will print n starts

// We have do some task for each row and the task is to print n stars in that row

// How many rows => n

// Here the element of repetition is we repeatedly do the same task on each row

//  + => addition operator

// 2 + 3 => 5

// left + right

// if any one either left or right or both are strings it converts the other operand as string and joins them

// "Bharath" + 10 => Bharath10

// "Bharath" + "10" => Bharath10

// The joining process is called concatenation

// In string concatenation if we have both operands as  strings then we just join them and get a new string

// Ex: "abc" +"def" => "abcdef"

// let stars = ""

// stars = stars + "*" => "" + * => *  => 1st time

// stars = stars + "*" => * + * => **  => 2nf time

// stars = stars + "*" => * + * => *** => 3rd time

// stars = stars + "*" => * + * => *** => 4th time

function solidSquare(size) {
  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

solidSquare(5);

// Function Declaration:

// We declare a function called solidSquare that takes one parameter, size, which determines the size of the square.

// Outer Loop (Rows):

// We use a for loop to iterate over each row of the square.

// The loop starts with i = 0 and runs until i < size.

// Inner Loop (Columns):

// Inside the outer loop, we initialize an empty string row which will store the pattern for the current row.

// We use another for loop to iterate over each column in the current row.

// The inner loop starts with j = 0 and runs until j < size.

// In each iteration of the inner loop, we append "* " to the row string.

// Print Row:

// After the inner loop completes, the row string contains size number of "* ".

// We then print the row string to the console.

// Dry Run for solidSquare(5)

// Let's do a step-by-step dry run for solidSquare(5):

// Initial State:

// size = 5

// The function starts executing.

// Iteration 1 (i = 0):

// row = "" (initialize an empty string for the first row)

// Inner Loop:

// j = 0: row = "* "

// j = 1: row = "* * "

// j = 2: row = "* * * "

// j = 3: row = "* * * * "

// j = 4: row = "* * * * * "

// After the inner loop completes, row is "* * * * * ".

// Print: * * * * *

// Iteration 2 (i = 1):

// row = "" (initialize an empty string for the second row)

// Inner Loop:

// j = 0: row = "* "

// j = 1: row = "* * "

// j = 2: row = "* * * "

// j = 3: row = "* * * * "

// j = 4: row = "* * * * * "

// After the inner loop completes, row is "* * * * * ".

// Print: * * * * *

// Iteration 3 (i = 2):

// row = "" (initialize an empty string for the third row)

// Inner Loop:

// j = 0: row = "* "

// j = 1: row = "* * "

// j = 2: row = "* * * "

// j = 3: row = "* * * * "

// j = 4: row = "* * * * * "

// After the inner loop completes, row is "* * * * * ".

// Print: * * * * *

// Iteration 4 (i = 3):

// row = "" (initialize an empty string for the fourth row)

// Inner Loop:

// j = 0: row = "* "

// j = 1: row = "* * "

// j = 2: row = "* * * "

// j = 3: row = "* * * * "

// j = 4: row = "* * * * * "

// After the inner loop completes, row is "* * * * * ".

// Print: * * * * *

// Iteration 5 (i = 4):

// row = "" (initialize an empty string for the fifth row)

// Inner Loop:

// j = 0: row = "* "

// j = 1: row = "* * "

// j = 2: row = "* * * "

// j = 3: row = "* * * * "

// j = 4: row = "* * * * * "

// After the inner loop completes, row is "* * * * * ".

// Print: * * * * *

// Output:

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

// ----------------------------------------Left-Aligned Triangle Pattern------------------------------------------//

function leftTriangle(size) {
  for (let i = 1; i <= size; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

leftTriangle(5);

// -----------------------------------------Explanation and Dry Run------------------------------------------//

// Function Declaration:

// We declare a function called leftTriangle that takes one parameter, size, which determines the height of the triangle.

// Outer Loop (Rows):

// We use a for loop to iterate over each row of the triangle.

// The loop starts with i = 1 and runs until i <= size.

// Inner Loop (Columns):

// Inside the outer loop, we initialize an empty string row which will store the pattern for the current row.

// We use another for loop to iterate over each column in the current row.

// The inner loop starts with j = 1 and runs until j <= i.

// In each iteration of the inner loop, we append "* " to the row string.

// Print Row:

// After the inner loop completes, the row string contains i number of "* ".

// We then print the row string to the console.

// Dry Run for leftTriangle(5)

// Let's do a step-by-step dry run for leftTriangle(5):

// Initial State:

// size = 5

// The function starts executing.

// Iteration 1 (i = 1):

// row = "" (initialize an empty string for the first row)

// Inner Loop:

// j = 1: row = "* "

// After the inner loop completes, row is "* ".

// Print: *

// Iteration 2 (i = 2):

// row = "" (initialize an empty string for the second row)

// Inner Loop:

// j = 1: row = "* "

// j = 2: row = "* * "

// After the inner loop completes, row is "* * ".

// Print: * *

// Iteration 3 (i = 3):

// row = "" (initialize an empty string for the third row)

// Inner Loop:

// j = 1: row = "* "

// j = 2: row = "* * "

// j = 3: row = "* * * "

// After the inner loop completes, row is "* * * ".

// Print: * * *

// Iteration 4 (i = 4):

// row = "" (initialize an empty string for the fourth row)

// Inner Loop:

// j = 1: row = "* "

// j = 2: row = "* * "

// j = 3: row = "* * * "

// j = 4: row = "* * * * "

// After the inner loop completes, row is "* * * * ".

// Print: * * * *

// Iteration 5 (i = 5):

// row = "" (initialize an empty string for the fifth row)

// Inner Loop:

// j = 1: row = "* "

// j = 2: row = "* * "

// j = 3: row = "* * * "

// j = 4: row = "* * * * "

// j = 5: row = "* * * * * "

// After the inner loop completes, row is "* * * * * ".

// Print: * * * * *

// *
// * *
// * * *
// * * * *
// * * * * *

// ----------------------------------------Right-Aligned Triangle Pattern------------------------------------------//

function rightAlignedTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    let spaces = " ".repeat(rows - i);
    let stars = "*".repeat(i);
    console.log(spaces + stars);
  }
}

rightAlignedTriangle(5);

function rightAlignedTriangle1(rows) {
  for (let i = 1; i <= rows; i++) {
    let line = "";

    // Add spaces for right alignment
    for (let j = 0; j < rows - i; j++) {
      line += " ";
    }

    // Add stars with spaces in between
    for (let k = 0; k < i; k++) {
      line += "*";
      if (k < i - 1) {
        // Add space only between stars, not after the last star
        line += " ";
      }
    }

    console.log(line);
  }
}

rightAlignedTriangle1(5);

// Explanation and Dry Run

// Function Definition: rightAlignedTriangle(rows) takes the number of rows as an argument.

// Outer Loop: for (let i = 1; i <= rows; i++) iterates from 1 to the number of rows.

// Spaces Calculation: ' '.repeat(rows - i) generates the spaces needed to align the stars to the right.

// Stars Calculation: '*'.repeat(i) generates the stars for the current row.

// Printing: console.log(spaces + stars) prints the spaces followed by stars.

// Dry Run

// Let's dry run this with rows = 5:

// Row 1:

// i = 1

// spaces = ' '.repeat(5 - 1) = ' ' (4 spaces)

// stars = '*'.repeat(1) = '*'

// Output: *

// Row 2:

// i = 2

// spaces = ' '.repeat(5 - 2) = ' ' (3 spaces)

// stars = '*'.repeat(2) = '**'

// Output: **

// Row 3:

// i = 3

// spaces = ' '.repeat(5 - 3) = ' ' (2 spaces)

// stars = '*'.repeat(3) = '***'

// Output: ***

// Row 4:

// i = 4

// spaces = ' '.repeat(5 - 4) = ' ' (1 space)

// stars = '*'.repeat(4) = '****'

// Output: ****

// Row 5:

// i = 5

// spaces = ' '.repeat(5 - 5) = '' (0 spaces)

// stars = '*'.repeat(5) = '*****'

// Output: *****

// ----------------------------Piramid Pattern -------------------------------------------//

function pyramidPattern(rows) {
  // Loop through each row
  for (let currentRow = 1; currentRow <= rows; currentRow++) {
    let line = ""; // Start with an empty line

    // Add spaces before the stars
    for (let spaceCount = 1; spaceCount <= rows - currentRow; spaceCount++) {
      line += " "; // Add a space
    }

    // Add stars for the current row
    for (let starCount = 1; starCount <= 2 * currentRow - 1; starCount++) {
      line += "*"; // Add a star
    }

    console.log(line); // Print the line for the current row
  }
}

// Call the function with the desired number of rows
pyramidPattern(5);

// -------------------------------New Pattern--------------------------------//

// * * * * *
// * * * *
// * * *
// * *
// *

function pattern(num) {
  for (let i = 0; i < num; i++) {
    let stars = "";
    for (let j = 0; j < num - i; j++) {
      stars = stars + "* ";
    }
    console.log(stars);
  }
}

pattern(5);


// ---------------------------------------Diamond Pattern-----------------------------------//

function diamondPattern(rows) {
  // Upper part of the diamond (including the middle line)
  for (let currentRow = 1; currentRow <= rows; currentRow++) {
    let line = "";

    // Add leading spaces to center the stars
    for (let spaceCount = 1; spaceCount <= rows - currentRow; spaceCount++) {
      line += " ";
    }

    // Add stars
    for (let starCount = 1; starCount <= 2 * currentRow - 1; starCount++) {
      line += "*";
    }

    console.log(line);
  }

  // Lower part of the diamond
  for (let currentRow = rows - 1; currentRow >= 1; currentRow--) {
    let line = "";

    // Add leading spaces to center the stars
    for (let spaceCount = 1; spaceCount <= rows - currentRow; spaceCount++) {
      line += " ";
    }

    // Add stars
    for (let starCount = 1; starCount <= 2 * currentRow - 1; starCount++) {
      line += "*";
    }

    console.log(line);
  }
}

// Call the function with the desired number of rows
diamondPattern(5);


//--------------------------------------- Butterfly pattern--------------------------------//

