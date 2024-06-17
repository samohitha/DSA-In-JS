// Right-Angle Triangle Pattern

function printRightAngleTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

// Example usage:
printRightAngleTriangle(5);

// Using array join and repeat
function printRightAngleTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    let stars = new Array(i).fill("*").join(" ");
    console.log(stars);
  }
}

// Using a single loop and string concatenation
function printRightAngleTriangle(rows) {
  let pattern = "";
  for (let i = 1; i <= rows; i++) {
    pattern += "* ".repeat(i).trim() + "\n";
  }
  console.log(pattern);
}
