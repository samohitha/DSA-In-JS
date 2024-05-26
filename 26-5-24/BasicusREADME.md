# Basics of JavaScript

A running program is called a process.

In programming languages, some words are reserved and cannot be used for other purposes. These are called keywords. Examples of keywords in JavaScript are:

- `let`
- `for`
- `const`
- `if`
- `else`
- `return`

To store values, we use variables. Variables are like memory buckets that store values and have names.

JavaScript file extension is `.js`.

## Creating Variables in JavaScript

There are 3 ways to create variables in JavaScript:

1. Using `var` keyword

   - Syntax: `var <variableName> = <value>;`

   ```javascript
   var name = "Bharath";
   var age = 24;
   ```

   Using let keyword

Syntax: let <variableName> = <value>;

let flag = 0;
let surname = "Boyapati";

Using const keyword

Syntax: const <variableName> = <value>;

const marks = 100;

Semicolon in JavaScript
Each line of code is an instruction called a statement. A semicolon at the end of a statement is optional but recommended for best practice.

Rules for Variable Creation
Variables can contain letters (both lowercase and uppercase), digits, underscore (\_), and dollar sign ($).
Variables cannot contain spaces or other special characters.
Variables should have meaningful names for readability.
Variables cannot start with a digit, but digits can be included in the name later.

Correct example:

javascript
Copy code
var bharat = 10;
Incorrect example:

javascript
Copy code
// var 1bharat = 10;

Certainly! Here is the full README.md with all the information formatted in the style you requested:

markdown
Copy code

# Basics of JavaScript

A running program is called a process.

In programming languages, some words are reserved and cannot be used for other purposes. These are called keywords. Examples of keywords in JavaScript are:

- `let`
- `for`
- `const`
- `if`
- `else`
- `return`

To store values, we use variables. Variables are like memory buckets that store values and have names.

JavaScript file extension is `.js`.

## Creating Variables in JavaScript

There are 3 ways to create variables in JavaScript:

1. Using `var` keyword
   - Syntax: `var <variableName> = <value>;`
   ```javascript
   var name = "Bharath";
   var age = 24;
   Using let keyword
   ```

Syntax: let <variableName> = <value>;
javascript
Copy code
let flag = 0;
let surname = "Boyapati";
Using const keyword

Syntax: const <variableName> = <value>;
javascript
Copy code
const marks = 100;
Semicolon in JavaScript
Each line of code is an instruction called a statement. A semicolon at the end of a statement is optional but recommended for best practice.

Rules for Variable Creation
Variables can contain letters (both lowercase and uppercase), digits, underscore (\_), and dollar sign ($).
Variables cannot contain spaces or other special characters.
Variables should have meaningful names for readability.
Variables cannot start with a digit, but digits can be included in the name later.
Correct example:

javascript
Copy code
var bharat = 10;
Incorrect example:

javascript
Copy code
// var 1bharat = 10;
Using console.log()
Functions act as black boxes. JavaScript provides built-in functions like console.log(). This function takes input data and displays it as output.

javascript
Copy code
console.log(10);
console.log("Bharath");
console.log(age);
Multiple console.log() calls print outputs on different lines.

javascript
Copy code
console.log("sammu", name, true, "omg"); // Prints all values on the same line
Data Types in JavaScript
Number: 10, -3, 2.6, 3.4144444

String: '', "", ```` (backticks)

javascript
Copy code
console.log("Bharath");
console.log('Bharath');
console.log(`Bharath`);
Boolean: true or false (always lowercase)

undefined: something not defined yet but may be defined later

Objects: store key-value pairs

javascript
Copy code
let person = {
name: "Bharath",
company: "Boyapati"
};
Keys should be unique, and values can be any data type.

Primitive Data Types
Simple and atomic.

Example: number
Non-Primitive Data Types
Combinations of other data types.

Example: Objects
Null Data Type
Represents an empty value.

javascript
Copy code
var m = 100;
var n = "bb";
var age;
var com = "bb";
var salary = undefined;
var z = null;
console.log(m, n, age, com, salary, z);
Special Characters
New line: \n
javascript
Copy code
let text = "The new Apple iPhone \n has been launched";
console.log(text);
Tab: \t
javascript
Copy code
text = "The new Apple iPhone \t has been launched";
console.log(text);
Comments
Comments are used for documentation and are ignored during execution.

Single line comments: //
Multi-line comments:
javascript
Copy code
/\*

- This is a multi-line comment.
- It can span multiple lines.
  \*/
