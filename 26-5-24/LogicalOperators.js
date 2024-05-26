// Logical Operators

// --------------------AND----------------------//

// And gate takes 2 inputs x , y output is x and y

// x           y                x and y

// false       false              false

// true        false              false

// false       true               false

// true        true               true

// ------------------OR -----------------------//

// And gate takes 2 inputs x , y output is x or y

// x           y                x and y

// false       false              false

// true        false              true

// false       true               true

// true        true               true

// ------------------Not -----------------------//

// It takes one input and the output is negate of that one

// x            output

// true         false

// false        true

// AND gate = > &&

// OR gate => ||

// Not gate => !

console.log(true && false); //=> false

console.log(false || false);

console.log(10 > 5 && 6 < 3);
// 10 > 5 => true && 6 < 3 false
// true &&  false

console.log(!false);

// Short circuiting in js

// 10 && 6
// What values are falsy in js ?
// null , undefined, "", +0, -0, Nan , false
// Apart from the above everything is truthy

//-------------------------------- Coercion----------------------------//

// -------------------------------AND --------------------------------//

console.log(10 && 6);

// In a and gate if the 1st input is false then it doesn't evaluate the second input and immediately returns the first input

// As well as if 1st input is true then the second input has to be evaluated and it returns the second input

// You may get doubt here

// 10 >6 && 6 <7

// here 10 > 6  can be simplified as either true or false

console.log(6 && 10);

// -------------------------------OR --------------------------------//

// In a or gate if the 1st input is true then it doesn't evaluate the second input and immediately returns the first input

// As well as if 1st input is false then it returns the second input
