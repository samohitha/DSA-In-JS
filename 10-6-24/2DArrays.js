// An array is a data structure that stores data in a continuous memory blocks

// We can bind multiple 1D arrays together inside another array to form 2D arrays

let arr = [[1, 3], [1], [1, 2, 3, 4]];

// inner arras od can be od different layers

let grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, , 8, 9],
];

// to create a 2D array of 5 x 6 (5 rows and 6 columns) and every cell in the array should be 0

let arr1 = Array(5);

for (let i = 0; i < 6; i++) {
  let inner = Array(6).fill(0);
  arr1[i] = inner;
}

console.log(arr1);

arr1[0][0] = 11;
arr1[0][1] = 12;

console.log(arr1);

// grid[i][j] => gives u an element ith row jth column

// no of rows is equal to grid.length
function display(grid) {
  // print the whole grid row by row
  let str = "";
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      str += grid[i][j] + " ";
    }
  }
  console.log(str);
}

let gridData = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 44],
  [9, 10, 11, 12, 45],
  [13, 14, 15, 16, 87],
];

display(gridData);

// Given a 2D array print it in a column wave form

// go downwards and again go upwards

// What if i want to print the grid column by column

function printGrid(grid, m, n) {
  let str = "";
  for (let col = 0; col < n; col++) {
    for (let row = 0; row < m; row++) {
      str += grid[row][col] + " ";
    }
  }
  console.log(str);
}
