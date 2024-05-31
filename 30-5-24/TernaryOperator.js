// --------------------------------Ternary Operator (? :)---------------------------------//

// Synatx

// let y = condition ? expression1 : expression2;

let y = 10 > 5 ? 10 : 5;

console.log(y);

let a = true ? 2 + 3 : 2 - 3;

console.log(a);

// ---------------------If else vs ternary ------------------------------//

// let y = condition ? expression1 : expression2;

// if(condition){
//     y = expression1
// }else{
//     y = expression2
// }

// Ternary is a simple of writing the if else

// if it a small logic u can use ternary

// -------------------------Switch Case------------------------------------//

// switch  => it is key word

// Syntax

// switch(value or expression){

//     case value1:
//         // logic
//         break
//     case value2:
//         //logic
//         break
//     default

// }

// value of expression => wt ever value or expression gets calculated we can use that value and check for the case

let name = "Bharath";

switch (name) {
  case "Bharath":
    console.log("Mern stack developer");
    break;
  case "Beast":
    console.log("Mean stack developer");
    break;
  default:
    console.log("Data science ");
}

// if we use break with in case the moment we hit the break statement we exist of switch

// default is not mandatory and if none of the case matches we don't do anything

// if don't keep a break then wt ever case we hit below that everything gets executed  till we find the break


// in switch case u can pass anything u can pass numbers as well

