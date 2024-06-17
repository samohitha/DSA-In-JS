// Star Pyramid Pattern
function printStarPyramid(rows) {
  for (let i = 1; i <= rows; i++) {
    let row = " ".repeat(rows - i) + "* ".repeat(i);
    console.log(row);
  }
}

// Example usage:
printStarPyramid(5);

// Using array join and repeat
function printStarPyramid(rows) {
  for (let i = 1; i <= rows; i++) {
    let spaces = " ".repeat(rows - i);
    let stars = new Array(i).fill("*").join(" ");
    console.log(spaces + stars);
  }
}
