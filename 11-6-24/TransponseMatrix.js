// Transponse of a matrix

var transponse = function (matrix) {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = row; col < matrix[row].length; col++) {
      let temp = matrix[row][col];
      matrix[row][col] = matrix[col][row];
      matrix[col][row] = temp;
    }
  }
  return matrix;
};



var transpose = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const transposedMatrix = [];
  
    // Initialize transposed matrix
    for (let col = 0; col < cols; col++) {
      transposedMatrix[col] = [];
    }
  
    // Fill transposed matrix with values from original matrix
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        transposedMatrix[col][row] = matrix[row][col];
      }
    }
  
    return transposedMatrix;
  };
  