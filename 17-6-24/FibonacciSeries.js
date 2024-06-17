// Fibonacci Series
function fibonacci(n) {
  let fibArray = [0, 1];
  for (let i = 2; i < n; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }
  return fibArray;
}

// Example usage:
console.log(fibonacci(10)); // Prints the first 10 Fibonacci numbers
