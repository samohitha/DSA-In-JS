// Given a number x convert into a binary number we can return it from a string

// Ex : 5 => for every odd number last bit is always 1

// 15 => 1111

// 15/2 => floor => 7.5 => 7

// wt evr number we have we can check if the number is odd or even based on this we can detect the last

// Now the remaining bits will be calculated using number / 2 value

// 17/2 => 1
// 8/2 => 0
// 4/2 => 0
// 2/2 =>0
// 1 => 1

function decimalToBinary(num) {
  let ans = "";

  while (num > 0) {
    if (num % 2 == 0) {
      ans = "0" + ans;
    } else {
      ans = "1" + ans;
    }
    num = Math.floor(num / 2);
  }
  return ans;
}

console.log(decimalToBinary(34));

function binaryToDecimal(binary) {
  let decimal = 0;
  for (let i = binary.length - 1; i >= 0; i--) {
    if (binary[i] === "1") {
      decimal += Math.pow(2, binary.length - 1 - i);
    }
  }
  return decimal;
}

console.log(binaryToDecimal("100010")); // Output will be 34

// 1 * 2^5 = 32
// 0 * 2^4 = 0
// 0 * 2^3 = 0
// 0 * 2^2 = 0
// 1 * 2^1 = 2
// 0 * 2^0 = 0
