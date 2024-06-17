// Floyd's Triangle
function printFloydsTriangle(rows) {
  let num = 1;
  for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += num + " ";
      num++;
    }
    console.log(row);
  }
}

// Example usage:
printFloydsTriangle(4);
