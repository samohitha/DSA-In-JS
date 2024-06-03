// Template literals are enclosed by backticks (`), and placeholders for expressions are indicated by ${}.

const name = "Bharath";
const age = 24;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // Output: Hello, my name is Bharath and I am 24 years old.

const name1 = "Bharath";
const message = `
  Hello, ${name1}!

  Welcome to our website.
  We hope you enjoy your stay.
`;
console.log(message);

const name2 = "Bharath";
const age2 = 24;
const greeting2 =
  "Hello, my name is " + name2 + " and I am " + age2 + " years old.";
console.log(greeting2);
