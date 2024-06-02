// Given 2 numbers a and b calculate the LCM of 2 numbers

// Least Common Multiple

// a = 9 b = 12  => 36

// We already know how to calculate gcd /hcf

// G => gcd of a, b

// LCM(a, b) = (a * b) / GCD(a, b)

// a*b = hcf *lcm

function gcd(a, b) {
  let ans = 1;
  for (let i = 2; i <= Math.min(a, b); i++) {
    if (a % i == 0 && b % i == 0) {
      ans = i;
    }
  }

  return ans;
}

function lcm(a, b) {
  let G = gcd(a, b);
  return (a * b) / G;
}

console.log(lcm(9, 12));


// Find the maximum of the two numbers, let's call it max.

// Start a loop from max and continue incrementing by max.

// Check in each iteration if the current number is divisible by both of the given numbers.

// If such a number is found, it's the LCM.

function lcm1(a, b) {
    // Find the maximum of the two numbers
    let max = Math.max(a, b);
  
    // Start a loop from max and continue incrementing by max
    for (let i = max; ; i += max) {
      // Check if the current number is divisible by both a and b
      if (i % a === 0 && i % b === 0) {
        return i; // Return the LCM
      }
    }
  }
  
  // Example usage:
  let num1 = 12;
  let num2 = 18;
  console.log(`LCM of ${num1} and ${num2} is ${lcm(num1, num2)}`);
  