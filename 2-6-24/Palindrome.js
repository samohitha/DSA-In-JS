// Given a number x check if the number is a palindrome or not

// 1441 => yes

// 141 => yes

// 153 => no

// left to right and right to left

//-------------------------------Strings-----------------------------//

// String  => A collection of characters

// In js we can individually access characters of a string

// chars => h e l l o

// indexes => 0 1 2 3 4

// Index is a unique mapping for all the chars of string to a unique number

// The indexing in js always stars with 0

// W o r l d
// 0 1 2 3 4

// T e c h n o l o g y
// 0 1 2 3 4 5 6 7 8 9

// Chars => H e l l o   W o r l d
//Indexes=> 0 1 2 3 4 5 6 7 8 9 10

// let str = "Microsoft"
//012345678

// let char = str[6] => o
// let char = str[2]=> i

let str = "microsoft";
console.log(str[0]);
console.log(str[2]);
console.log(str[99]);
console.log(str[999999999999999999999]); //undefined

// first index = 0

// last index = length - 1

for (let i = 0; i < str.length; i++) {
  console.log(i, str[i]);
}
// 0 m
// 1 i
// 2 c
// 3 r
// 4 o
// 5 s
// 6 o
// 7 f
// 8 t

// 1 4 5 4 1 => yes

// Numbers cannot traversed using indexes

// 14541

// 1 4 5 4 1  => i
// 0 1 2 3 4  => j

//if(str[i] == str[j]) {
// i++
// j--

// }

// while i <= j keep on repeating the logic

function palindrome(num) {
  let str = "" + num;

  let i = 0;

  let j = str.length - 1;

  while (i <= j) {
    if (str[i] == str[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(palindrome(19891));
