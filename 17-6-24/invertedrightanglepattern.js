// Inverted Right-Angle Triangle Pattern

function printInvertedRightAngleTriangle(rows) {
  for (let i = rows; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

// Example usage:
printInvertedRightAngleTriangle(5);

// Using array join and repeat
function printInvertedRightAngleTriangle(rows) {
  for (let i = rows; i >= 1; i--) {
    let stars = new Array(i).fill("*").join(" ");
    console.log(stars);
  }
}

// Using a single loop and string concatenation
function printInvertedRightAngleTriangle(rows) {
  let pattern = "";
  for (let i = rows; i >= 1; i--) {
    pattern += "* ".repeat(i).trim() + "\n";
  }
  console.log(pattern);
}
