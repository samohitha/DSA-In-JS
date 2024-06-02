// 0, 1, 1, 2, 3, 5, 8, 13, 21

// The above series of numbers are called fibonacci numbers

// Given a value of n, Write a code to print the first n fibonocci numbers

// EX: n = 6 => 0 1 1 2 3 5 8

// Apart from 0th and 1st Fib if we consider any fib number then the number is actually the sum of previous 2 fibonacci numbers

// fi = f i-1 + fi-2 => i>=2

function fibonacci(n) {
  let fibSeries = [0, 1];

  for (let i = 2; i < n; i++) {
    let nextFib = fibSeries[i - 1] + fibSeries[i - 2];
    fibSeries.push(nextFib);
  }

  return fibSeries;
}

console.log(fibonacci(10));

function printFibonacci(n) {
  if (n == 0) {
    console.log(0);
    return;
  }

  if (n >= 1) {
    console.log(0);
    console.log(1);
  }

  let last = 1;

  let secondLast = 0;

  for (let i = 2; i <= n; i++) {
    let ans = last + secondLast;
    console.log(ans);
    secondLast = last
    last = ans
  }
}

printFibonacci(10)