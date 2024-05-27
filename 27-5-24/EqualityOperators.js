// == => abstract equality

// === => strict equality operator

// --------------------(== Abstract Equality) ----------------------------//

// == => it checks type of both operands if the type is same then it calls ===
// if types are not same
// then type conversion occurs (coercion) and then comparison is done

// --------------------(== Strict Equality) ----------------------------//

// == => it checks type of both operands
// if types are different then it directly returns false
// if types are same then value comparison happens

// 1 == "1" => true

//Js will convert string (1) to a number from the above it will be like this

// 1 == 1 => and do he the checks now both types are same if type is same we call === now both the values are equal

console.log(1 == "bharath");

//Js will convert string (bharath) to a number from the above it will be like this

// Number(bharath) which is not a number so it returns false

// 1 == Nan => false

// To check the type of operator in js we have a operator called typeof()

console.log(typeof "1");
console.log(typeof 1);
console.log(typeof undefined);
console.log(typeof true);
console.log(typeof null); // it will be an object
