// Given a number x calculate the sum of digits of the number x

// Ex : 4136

// 4+1+3+6 => 14

// if we need the sum of digits of a number we first of all used to extract the digits out if the number

// Inbuilt function Math.floor()

// Math.floor(6.3) => 6 (Integer part)

// Math.floor(7) => 7

// 4136 % 10 => 6

// if we do x % 10 we get last digit of a number

// 12386 % 10 =>  3

// Math.floor(4136/10) => 413

function SumOfDigits(x) {
  let sum = 0;

  while (x > 0) {
    let last_digit = x % 10;
    sum += last_digit;
    x = Math.floor(x / 10);
  }
  console.log(sum);

  return sum;
}

SumOfDigits(4186)

function sumOfDigits1(number) {
  let sum = 0;

  let numberString = number.toString();

  for (let i = 0; i < numberString.length; i++) {
    let digit = parseInt(numberString[i]);
    sum += digit;
  }
  console.log(sum);
  return sum;
}

sumOfDigits1(1234);
