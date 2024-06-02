// G.C.D Or H.C.F => Both are same

// Ex: a = 28, b = 24

// 28 => 2 * 2 * 7

// 24 => 2 * 2 * 2 * 3

// We want to detect a number that divides both a and b

// there can be multiple numbers that can divide both a & b

// Among those multiple numbers we need to get the biggest number

// 28, 24

// Can 2 divide both a & b => yes

// can 3 divide both a & b

// can 4 divide both a & b

// Ypu have repeat the process

// Note : 1 will be our minimum answer bcoz for prime 7, 11 1 will be the answer

function Gcd(a, b) {
  let ans = 1;
  for (let i = 2; i < Math.min(a, b); i++) {
    if (a % i == 0 && b % i == 0) {
      ans = i;
    }
  }
  console.log(ans);
}

Gcd(24, 28);

// Euclid's algorithm

// Let's say we divide a with b such that q is quotient & r is remainder

// a/b = b*q+r (divided = divisor * quotient + remainder)

// a = b * q + r

// a - b * q = r

// If G is the gcd of a and b then a % G = 0 and b % G = 0

// Wt is bq => is a multiple of b

// if G divides b (b % G == 0)

// G divides bg => (bq *G ==0)

// a = 72, b = 36

// 78 = 36*2 + 6

// 78-36*2 = 6

// Euclid's algorithm is a way to find the greatest common divisor (GCD) of two numbers.

// The GCD is the largest number that can evenly divide both of the given numbers without leaving a remainder.

// Steps to Find the GCD

// Start with Two Numbers:

// Let's say you have two numbers, a and b, and you want to find the GCD of these two numbers.

// Assume a is greater than or equal to b.

// Perform Division:

// Divide a by b.

// Note the quotient (how many times b goes into a completely) and the remainder (what's left over after dividing).

// Update Values:

// Replace a with b.

// Replace b with the remainder from the division.

// Repeat Until Zero Remainder:

// Keep repeating the division and updating the values until the remainder is zero.

// When you get a remainder of zero, the last non-zero remainder is the GCD.

// Example: Finding the GCD of 72 and 36

// Initial Values:

// a = 72, b = 36

// First Division:

// Divide 72 by 36: 72 / 36 gives a quotient of 2 and a remainder of 0.

// Update a to 36 and b to 0.

// Termination:

// Since the remainder is now 0, the algorithm stops.

// The last non-zero b value is 36, so the GCD of 72 and 36 is 36.

function gcd(a, b) {
  // Loop until b becomes 0
  while (b !== 0) {
    // Calculate the remainder of a divided by b
    let remainder = a % b;

    // Update a to be b, and b to be the remainder
    a = b;
    b = remainder;
  }
  // When b is 0, a contains the GCD
  return a;
}

// Example usage:
let a = 72;
let b = 36;
console.log(`The GCD of ${a} and ${b} is ${gcd(a, b)}`);
