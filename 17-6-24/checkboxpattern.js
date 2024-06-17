// Checkerboard Pattern

function printCheckerboardPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = 1; j <= rows; j++) {
      if ((i + j) % 2 === 0) {
        row += "X";
      } else {
        row += "O";
      }
    }
    console.log(row);
  }
}

// Example usage:
printCheckerboardPattern(5);
