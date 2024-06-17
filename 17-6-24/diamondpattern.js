function printDiamondPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let row = " ".repeat(rows - i) + "* ".repeat(i);
    console.log(row);
  }
  for (let i = rows - 1; i >= 1; i--) {
    let row = " ".repeat(rows - i) + "* ".repeat(i);
    console.log(row);
  }
}

// Example usage:
printDiamondPattern(5);
