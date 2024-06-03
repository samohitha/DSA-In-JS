// Objects are the key value pairs in js 

// objects are collections of key-value pairs, and you can access and modify these pairs using dot notation or bracket notation

// Using Dot Notation:

// This is the most common and preferred way to access and modify properties in an object.

let x = { name: "Bharath", age: 24 };
let y = { name: "Beast", age: 24 };

// Accessing properties
console.log(x.name); // Output: Bharath
console.log(x.age);  // Output: 24

// Modifying properties
x.name = "Sam";
console.log(x.name); // Output: Sam

// Using Bracket Notation:

// This method is useful when the property names are dynamic (not known until runtime) or contain characters that are not valid in dot notation.

let x1 = { name: "Bharath", age: 24 };
let y1 = { name: "Beast", age: 24 };

// Accessing properties
console.log(x1['name']); // Output: Bharath
console.log(x1['age']);  // Output: 24

// Modifying properties
x1['name'] = "Sam";
console.log(x1['name']); // Output: Sam


// Dynamic Property Access with Bracket Notation:

// When you need to access or modify properties using variables.

let x = { name: "Bharath", age: 24 };

let propertyName = "name";

// Accessing properties
console.log(x[propertyName]); // Output: Bharath

// Modifying properties
x[propertyName] = "Sam";
console.log(x[propertyName]); // Output: Sam


// Common Mistake

// x[name] = "Sammi";

// Here, name is not a defined variable, so it would throw an error if name is not defined in the scope. If you meant to use the string "name", you should use quotes:

// x["name"] = "Sammi"; // This works and modifies the 'name' property to 'Sammi'

// Why we can't access a value from a key ?

// In an object keys are unique but multiple different keys can have same value in an object

// Adding Keys

// Using Dot Notation:

// You can add a new property to an object simply by assigning a value to a new key.

// let x = { name: "Bharath", age: 24 };

// x.gender = "male"; // Adding a new key 'gender'

// console.log(x); // Output: { name: "Bharath", age: 24, gender: "male" }

// Using Bracket Notation:

let x = { name: "Bharath", age: 24 };

let newKey = "occupation";

x[newKey] = "developer"; // Adding a new key 'occupation'

console.log(x); // Output: { name: "Bharath", age: 24, occupation: "developer" }

// Removing Keys

// Using the delete Operator:

// You can remove a property from an object using the delete operator.

// let x = { name: "Bharath", age: 24, gender: "male" };

// delete x.gender; // Removing the 'gender' key

// console.log(x); // Output: { name: "Bharath", age: 24 }

// Example: Adding and Removing Keys

// let person = { name: "Bharath", age: 24 };

// // Adding keys
// person.gender = "male"; // Using dot notation
// person["occupation"] = "developer"; // Using bracket notation

// console.log(person); // Output: { name: "Bharath", age: 24, gender: "male", occupation: "developer" }

// // Removing keys
// delete person.gender; // Using delete operator
// delete person["occupation"]; // Using delete operator with bracket notation

// console.log(person); // Output: { name: "Bharath", age: 24 }
