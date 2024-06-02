console.log("abc" == "abc");

let x = "abc";

let y = "abc"; // here it is string literal

console.log(x == y);

let z = String("abc"); // string

let a = new String("abc"); // string object

console.log(z);

console.log(a == z);

console.log(a == x);

console.log(a == y);

console.log(typeof a);

console.log(typeof z);

console.log(typeof y);

console.log(a === z);

console.log(a === x);

console.log(z === y);

console.log("abc" === new String("abc"));
