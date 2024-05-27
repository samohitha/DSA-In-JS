// Conditional Statements

// Using conditional statement we can take decisions and correspondingly change the actions we want to do

// ---------------------If else ---------------------------------------//

// if and else are keywords

// Syntax : if ( condition){} => the curly braces are called as block

// if the condition is true wt ever u write in the block of if it will be executed

console.log("Start");

if (20 > 5) {
  // this checks the condition here
  console.log("yes");
}

console.log("End");

if (12) {
  console.log("Printed 12");
}

console.log("End of 12");

// if condition is true then we execute the block of "If" if the condition is false then it will execute the false block

console.log("Welcome to prime number ");

let primeNumber = true;

if (primeNumber) {
  console.log("Enjoy the content");
} else {
  console.log("Please subscribe to enjoy the content ");
}

primeNumber = false;

if (primeNumber) {
  console.log("Enjoy the content");
} else {
  console.log("Please subscribe to enjoy the content ");
}

// if the condition is true oly if block is execute and else block is completely avoided

// if the condition os false if block is completely avoided and only else block is executed

// Note : If block can exits without else block else block can't exits without if block

// ---------------------Else if and Nested If ---------------------------------------//

// if condition{}
// else if condition {}
// else

let isUserPremium = false;

let isUserVIP = true;

if (isUserPremium) {
  console.log("Enjoy the premium content on hotstar");
} else if (isUserVIP) {
  console.log("Enjoy the vip content on hotstar for more subscribe to premium");
} else {
  console.log("Subscribe to premium or vip");
}

// if condition 1 is true only that part is executed
// condition 2 is true only that part is executed
// at last else will be executed
// if multiple conditions are true then the block where first condition is written will be executed
// if can exits without else if and else
// Else cannot exits without if but can exits without else if
// else if cannot exist without if but can exist without else

let primeUser = true;
let isUserDiscovery = true;

if (primeUser) {
  if (isUserDiscovery) {
    console.log("Enjoy both prime and discovery");
  } else {
    console.log("Enjoy Prime content");
  }
} else {
  console.log("Please subscribe to enjoy the content ");
}
