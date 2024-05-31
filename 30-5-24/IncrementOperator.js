// Unary Operator

let a = 10;

// a ++ Operators

// postfix unary addition

// Increment by 1

let y = a++;

// we first assign the value of a to y (i.e old value)

// increment a by 1

// increment after assignment

console.log(a, y);

// ++a Operators

// prefix unary addition

// Increment by 1

let z = ++a;

// we first increment thr value of a by 1

// assign value of a to z

console.log(a, y);

// Same exists for -- also

// -----------------------Unary (+)---------- ----------------------------//

// It tries to convert the variable into a number if it is not a number

let x = "22";
let x1 = +x;
console.log(x1);

// It doesn't change the original operand but instead returns a converted value

// -----------------------Unary Minus (-) --------------------------------//

let y1 = "22";

// It also converts the operand to a number always make the result negative

let y2 = -y1;
console.log(y2); // -22


// ! (logical not)

// typeof()