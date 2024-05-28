// 1) Given a number x check if the number is even or not

// What type of number is even ?

//  A number which is completely divisible by 2 is an even number

// A number which is not completely divisible by 2 are odd numbers

// How to check number is divisible by 2 => u can use modulo operator

//  7%2 => 1

// 34%2 => 0

let x = 34;

if (x % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

// 2) Consider 3 inter values find out the minimum among the three

// Eg : x =10 y =20, z= 30  => minimum is 10

// We have 3 numbers we have to compare 3 numbers among them

// In which case x is smallest => x < y and x < z

// x =2 , y =5 , z = 9 => 2 <5 && 2 < 9

// In which case y is smallest => y < x and y < z

// x =10 , y =3 , z = 15 => 3 <10 && 3 < 15

// In which case z is smallest

// if x is not the answer and y is not the answer then z is the smallest

let x1 = 10;

let y = 20;

let z = 30;

if (x1 < y && x1 < z) {
  console.log(x);
} else if (y < z && y < z) {
  console.log(y);
} else {
  console.log(z);
}

// 3) Given 3 inters a,b,c check if we can form a triangle with sides a, b and c

// Ex : a = 7, b = 10, c = 3 => yes

// Ex : a = 1 b = 10 , c = 12 => No

// If u want to form a triangle the sum of other sides greater than the other

// if we want to create a triangle with a,b,c sides then for each side the sum of other 2 sides should be greater

// if we want all the conditions grouped together then we can form a triangle

let a = 10;

let b = 12;

let c = 5;

if (a + b > c && b + c > a && c + a > b) {
  console.log("Yes");
} else {
  console.log("No");
}

// 4) Given the sides length of a triangle in the form of 3 integers. Check if the given triangle is equilateral or scalene or isoscles

// Ex : a1 = 7,  b1= 7, c1 = 7 => Equilateral

// Ex : a1 = 8,  b1= 9, c1 = 5 => Scalene

// Ex : a1 = 10, b1 = 7, c1 = 10 => Isosceles

if (a1 === b1 && b1 === c1 && c1 === a1) {
  console.log("Equilateral");
} else if (a1 === b1 || b1 === c1 || c1 === a1) {
  console.log("Isosceles");
} else {
  console.log("Scalene");
}
