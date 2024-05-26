// Basics of Js

// Program in a running state is called process

// In a programming lang few words are reserved by language for its own purpose we can't change there meaning or repurpose them for a different use case

// for example in js few keywords are

// let, for, const, if, else, return

//  To store values we use variables

//variables are memory buckets that stores other values and has name as well

// The extension of the js file is .js

// Creating variables in js

// 3 ways to create variables in js

// Using Var keyword

// Syntax : var <variablename> = <value>

var name = "Bharath";

var age = 24;

// Using let keyword

// Syntax : let <variablename> = <value>

let flag = 0;

let surname = "Boyapati";

// Using const keyword

// Syntax : const <variablename> = <value>

const marks = 100;

// Semicolon in js

// One line of js code equal to one instruction that we want to give to the computer

// one complete instruction is called statement

// at the end of every statement we can keep a semicolon which is optional

// Semicolon is recommended or it is a best practice

// Rules for variable creation

// variables can contain small alphabets, capital alphabets , digits, underscore(_), dollar($)

// we can't have space or any other character

// we should give meaningful names so that reader can identify the names properly

// varaibles name cannot start with digit but it can have digits in between or at last

// Eg : var 1bharat = 10 (wrong)

// Eg : var bharat = 10

// -----------------Using console.log()-------------------------//

// Functions act as  a black box

// js in built gives some functions that is console.log()

// This function takes some data as input and then displayes them in the output

console.log(10);

console.log("Bharath");

console.log(age);

// if we have 2 different console.log() then both of them displays / prints output in different lines

// we can also pass multiple values together to console.log(), and all of them will be on same line

console.log("sammu", bharath, true, "omg");

// -------------------------Data Types in JS ---------------------------------------//

// Number => 10, -3, 2.6, 3.4144444

// Strings => '', "", ``(backtick)

// Ex : 'abcs', "abbbs", `asdfg`

console.log("Bharath");

console.log("Bharath");

console.log(`bharath`);

// Boolean => true or false

// Booleans are always small letters true or false

// undefined =>something not defined but may define later

// objects => If we have to some how store key value pairs then we use objects <key, value>

// {
//     name :"Bharath",
//     company :"Boyapati"
// }

// keys should be unique it should have any repeated values and value can be any data type

// ---------------------------Primitive -----------------------------//

// types which are atomic in natures

// Ex : number

// ---------------------------Non - Primitive -----------------------------//

// types which are composition of the other

// Ex : Objects

// Null Datatype

// null => it actually represents empty values

var m = 100;
var n = "bb";
var age;
var com = "bb";
var salary = undefined;
var z = null;
console.log(m, n, age, com, salary, z);

// ---------------------------Special Characters -----------------------------//

let text = "The new apply Iphone \n has been launched";
console.log(text);

// \n it is like a new line
text = "The new apply Iphone \t has been launched";
console.log(text);

// ---------------------------Comments-----------------------------//

// Comments are a piece of code that is for documentation purpose

// In programming lang will get avoid comments during execution

// In JS there 2 ways to create a comments

// Single line comments => //

// multi line comments /* --- */
