const numbers = [1, 2, 3, 4, 5];

// Add 1 to each number
const incrementedNumbers = numbers.map((number) => number + 1);

console.log(incrementedNumbers); // Output: [2, 3, 4, 5, 6]

const numbers1 = [1, 2, 3, 4, 5];

// Double each number
const doubledNumbers = numbers1.map((number) => number * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Converting Array of Strings to Uppercase

const words = ["hello", "world"];

// Convert each word to uppercase
const uppercaseWords = words.map((word) => word.toUpperCase());

console.log(uppercaseWords); // Output: ['HELLO', 'WORLD']

// Extracting Properties from Objects
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

// Extract names
const names = people.map((person) => person.name);

console.log(names); // Output: ['Alice', 'Bob', 'Charlie']

// Adding Index to Each Element

const numbers3 = [10, 20, 30, 40];

// Add the index to each number
const numbersWithIndex = numbers3.map((number, index) => number + index);

console.log(numbersWithIndex); // Output: [10, 21, 32, 43]

// Creating New Objects from Existing Objects

const users = [
  { firstName: "Bharath", lastName: "Boyapati" },
  { firstName: "Beast", lastName: "BB" },
];

// Create new objects with full names
const fullNames = users.map((user) => ({
  fullName: `${user.firstName} ${user.lastName}`,
}));

console.log(fullNames);
// Output: [{ fullName: 'John Doe' }, { fullName: 'Jane Smith' }]

// Mapping Over Nested Arrays

const nestedArrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// Flatten each sub-array into a single string
const flattened = nestedArrays.map((arr) => arr.join("-"));

console.log(flattened); // Output: ['1-2', '3-4', '5-6']

// Parsing JSON Objects

const jsonStrings = [
  '{"name": "Alice", "age": 25}',
  '{"name": "Bob", "age": 30}',
];

// Parse JSON strings to objects
const jsonObjects = jsonStrings.map((json) => JSON.parse(json));

console.log(jsonObjects);
// Output: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }]

// Modifying Elements Based on Conditions
const numbers4 = [1, 2, 3, 4, 5];

// Set even numbers to zero
const modifiedNumbers = numbers4.map((number) =>
  number % 2 === 0 ? 0 : number
);

console.log(modifiedNumbers); // Output: [1, 0, 3, 0, 5]

// Uppercasing Names

const names1 = ["Bharath Boyapat", "Alice Smith", "Bob Johnson"];

// Convert each name to uppercase
const uppercasedNames = names1.map((name) => name.toUpperCase());

console.log(uppercasedNames); // Output: ['BHARATH BOYAPAT', 'ALICE SMITH', 'BOB JOHNSON']

// Adding a Greeting

const names2 = ["Bharath Boyapat", "Alice Smith", "Bob Johnson"];

// Add a greeting to each name
const greetings = names2.map((name) => `Hello, ${name}!`);

console.log(greetings); // Output: ['Hello, Bharath Boyapat!', 'Hello, Alice Smith!', 'Hello, Bob Johnson!']

// Creating Full Names from Parts
const people1 = [
  { firstName: "Bharath", lastName: "Boyapat" },
  { firstName: "Alice", lastName: "Smith" },
  { firstName: "Bob", lastName: "Johnson" },
];

// Combine first and last names
const fullNames1 = people.map(
  (person) => `${person.firstName} ${person.lastName}`
);

console.log(fullNames1); // Output: ['Bharath Boyapat', 'Alice Smith', 'Bob Johnson']

// Modifying Age

const people2 = [
  { name: "Bharath Boyapat", age: 28 },
  { name: "Alice Smith", age: 30 },
  { name: "Bob Johnson", age: 25 },
];

// Increase each person's age by 1
const olderPeople = people2.map((person) => ({
  ...person,
  age: person.age + 1,
}));

console.log(olderPeople);
// Output: [
//   { name: 'Bharath Boyapat', age: 29 },
//   { name: 'Alice Smith', age: 31 },
//   { name: 'Bob Johnson', age: 26 }
// ]

// Extracting Specific Data
const employees = [
  { name: "Bharath Boyapat", position: "Developer", salary: 170000 },
  { name: "Alice Smith", position: "Manager", salary: 90000 },
  { name: "Bob Johnson", position: "Designer", salary: 60000 },
];

// Extract names and positions
const namesAndPositions = employees.map((employee) => ({
  name: employee.name,
  position: employee.position,
}));

console.log(namesAndPositions);
// Output: [
//   { name: 'Bharath Boyapat', position: 'Developer' },
//   { name: 'Alice Smith', position: 'Manager' },
//   { name: 'Bob Johnson', position: 'Designer' }
// ]

// Converting Prices to Different Currency

const products = [
  { name: "Laptop", priceUSD: 1000 },
  { name: "Phone", priceUSD: 500 },
  { name: "Tablet", priceUSD: 300 },
];

const exchangeRate = 75; // Example exchange rate from USD to INR

// Convert prices to INR
const productsInINR = products.map((product) => ({
  ...product,
  priceINR: product.priceUSD * exchangeRate,
}));

console.log(productsInINR);
// Output: [
//   { name: 'Laptop', priceUSD: 1000, priceINR: 75000 },
//   { name: 'Phone', priceUSD: 500, priceINR: 37500 },
//   { name: 'Tablet', priceUSD: 300, priceINR: 22500 }
// ]

// Mapping Over Nested Arrays

const departments = [
  { department: "IT", employees: ["Bharath Boyapat", "Alice Smith"] },
  { department: "HR", employees: ["Bob Johnson", "Carol Lee"] },
];

// Create list of department names with employee count
const departmentSummaries = departments.map((dept) => ({
  department: dept.department,
  employeeCount: dept.employees.length,
}));

console.log(departmentSummaries);
// Output: [
//   { department: 'IT', employeeCount: 2 },
//   { department: 'HR', employeeCount: 2 }
// ]

// Parsing and Validating Data
const data = [
  '{"name": "Bharath Boyapat", "age": 28}',
  '{"name": "Alice Smith", "age": 30}',
  '{"name": "Bob Johnson", "age": 25}',
];

// Parse JSON strings and add a validation flag
const parsedData = data.map((json) => {
  const parsed = JSON.parse(json);
  return {
    ...parsed,
    isValid: parsed.age >= 18, // Add a validation flag
  };
});

console.log(parsedData);
// Output: [
//   { name: 'Bharath Boyapat', age: 28, isValid: true },
//   { name: 'Alice Smith', age: 30, isValid: true },
//   { name: 'Bob Johnson', age: 25, isValid: true }
// ]

// Formatting Phone Numbers

const contacts = [
  { name: "Bharath Boyapat", phoneNumber: "1234567890" },
  { name: "Alice Smith", phoneNumber: "0987654321" },
];

// Format phone numbers to (XXX) XXX-XXXX
const formattedContacts = contacts.map((contact) => ({
  ...contact,
  formattedPhoneNumber: `(${contact.phoneNumber.slice(
    0,
    3
  )}) ${contact.phoneNumber.slice(3, 6)}-${contact.phoneNumber.slice(6)}`,
}));

console.log(formattedContacts);
// Output: [
//   { name: 'Bharath Boyapat', phoneNumber: '1234567890', formattedPhoneNumber: '(123) 456-7890' },
//   { name: 'Alice Smith', phoneNumber: '0987654321', formattedPhoneNumber: '(098) 765-4321' }
// ]

// Adding Unique IDs

const items = [
  { name: "Item 1", price: 100 },
  { name: "Item 2", price: 200 },
  { name: "Item 3", price: 300 },
];

// Add unique ID to each item
const itemsWithId = items.map((item, index) => ({
  ...item,
  id: `item-${index + 1}`,
}));

console.log(itemsWithId);
// Output: [
//   { name: 'Item 1', price: 100, id: 'item-1' },
//   { name: 'Item 2', price: 200, id: 'item-2' },
//   { name: 'Item 3', price: 300, id: 'item-3' }
// ]

// Mapping Over Nested Arrays

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Add 1 to each element in the nested arrays
const incrementedMatrix = matrix.map((row) => row.map((num) => num + 1));

console.log(incrementedMatrix);
// Output: [
//   [2, 3, 4],
//   [5, 6, 7],
//   [8, 9, 10]
// ]

//  Combining Data from Multiple Arrays
const firstNames = ["Bharath", "Alice", "Bob"];
const lastNames = ["Boyapat", "Smith", "Johnson"];
const ages = [28, 30, 25];

// Combine data from multiple arrays into objects
const people5 = firstNames.map((firstName, index) => ({
  firstName,
  lastName: lastNames[index],
  age: ages[index],
}));

console.log(people5);
// Output: [
//   { firstName: 'Bharath', lastName: 'Boyapat', age: 28 },
//   { firstName: 'Alice', lastName: 'Smith', age: 30 },
//   { firstName: 'Bob', lastName: 'Johnson', age: 25 }
// ]

// Conditional Transformations

const users1 = [
  { name: "Bharath Boyapat", role: "admin", age: 28 },
  { name: "Alice Smith", role: "user", age: 30 },
  { name: "Bob Johnson", role: "user", age: 25 },
];

// Add a role description based on the role
const usersWithRoleDescription = users1.map((user) => ({
  ...user,
  roleDescription: user.role === "admin" ? "Administrator" : "Regular User",
}));

console.log(usersWithRoleDescription);
// Output: [
//   { name: 'Bharath Boyapat', role: 'admin', age: 28, roleDescription: 'Administrator' },
//   { name: 'Alice Smith', role: 'user', age: 30, roleDescription: 'Regular User' },
//   { name: 'Bob Johnson', role: 'user', age: 25, roleDescription: 'Regular User' }
// ]

// Complex Data Merging

const userProfiles = [
  { userId: 1, name: "Bharath Boyapat", age: 28 },
  { userId: 2, name: "Alice Smith", age: 30 },
];

const userOrders = [
  { userId: 1, orderId: "A123", amount: 250 },
  { userId: 1, orderId: "A124", amount: 150 },
  { userId: 2, orderId: "B123", amount: 300 },
];

// Merge user profiles with their orders
const usersWithOrders = userProfiles.map((profile) => {
  const orders = userOrders.filter((order) => order.userId === profile.userId);
  return { ...profile, orders };
});

console.log(usersWithOrders);
// Output: [
//   {
//     userId: 1,
//     name: 'Bharath Boyapat',
//     age: 28,
//     orders: [
//       { userId: 1, orderId: 'A123', amount: 250 },
//       { userId: 1, orderId: 'A124', amount: 150 }
//     ]
//   },
//   {
//     userId: 2,
//     name: 'Alice Smith',
//     age: 30,
//     orders: [{ userId: 2, orderId: 'B123', amount: 300 }]
//   }
// ]

// Complex Object Transformation with Nested Arrays
const products2 = [
  { category: "Electronics", items: ["Laptop", "Phone", "Tablet"] },
  { category: "Furniture", items: ["Chair", "Table", "Couch"] },
];

// Transform each item in each category
const categorizedProducts = products2.map((category) => ({
  ...category,
  items: category.items.map((item) => `${item} - New`),
}));

console.log(categorizedProducts);
// Output: [
//   {
//     category: 'Electronics',
//     items: ['Laptop - New', 'Phone - New', 'Tablet - New']
//   },
//   {
//     category: 'Furniture',
//     items: ['Chair - New', 'Table - New', 'Couch - New']
//   }
// ]

const settings = [
  { userId: 1, theme: "dark", language: "en" },
  { userId: 2, theme: "light" }, // Missing language
  { userId: 3, language: "fr" }, // Missing theme
];

// Ensure all users have both theme and language settings with default values
const defaultSettings = {
  theme: "light",
  language: "en",
};

const completeSettings = settings.map((setting) => ({
  theme: setting.theme || defaultSettings.theme,
  language: setting.language || defaultSettings.language,
  userId: setting.userId,
}));

console.log(completeSettings);
// Output: [
//   { userId: 1, theme: 'dark', language: 'en' },
//   { userId: 2, theme: 'light', language: 'en' },
//   { userId: 3, theme: 'light', language: 'fr' }
// ]

// Transforming Data with Complex Conditions

const products6 = [
  { name: "Laptop", price: 1000, category: "Electronics" },
  { name: "Shirt", price: 50, category: "Apparel" },
  { name: "Phone", price: 500, category: "Electronics" },
  { name: "Shoes", price: 80, category: "Apparel" },
];

// Apply a discount to electronics and a different discount to apparel
const discountedProducts = products6.map((product) => {
  let discount;
  if (product.category === "Electronics") {
    discount = 0.1; // 10% discount
  } else if (product.category === "Apparel") {
    discount = 0.2; // 20% discount
  }
  return {
    ...product,
    discountedPrice: product.price * (1 - discount),
  };
});

console.log(discountedProducts);
// Output: [
//   { name: 'Laptop', price: 1000, category: 'Electronics', discountedPrice: 900 },
//   { name: 'Shirt', price: 50, category: 'Apparel', discountedPrice: 40 },
//   { name: 'Phone', price: 500, category: 'Electronics', discountedPrice: 450 },
//   { name: 'Shoes', price: 80, category: 'Apparel', discountedPrice: 64 }
// ]

// Transforming Strings with Conditions

const strings = ["apple", "banana", "cherry"];

// Add "fruit" to strings starting with a vowel
const transformedStrings = strings.map((str) => {
  const vowels = "aeiou";
  if (vowels.includes(str[0].toLowerCase())) {
    return `${str} fruit`;
  }
  return str;
});

console.log(transformedStrings);
// Output: ['apple fruit', 'banana', 'cherry']

// Extracting and Modifying Nested Structures
const data1 = [
  { id: 1, details: { score: 50, passed: true } },
  { id: 2, details: { score: 30, passed: false } },
  { id: 3, details: { score: 70, passed: true } },
];

// Modify nested objects and extract relevant information
const modifiedData = data1.map((item) => ({
  id: item.id,
  passed: item.details.passed,
  grade: item.details.score >= 50 ? "A" : "B",
}));

console.log(modifiedData);
// Output: [
//   { id: 1, passed: true, grade: 'A' },
//   { id: 2, passed: false, grade: 'B' },
//   { id: 3, passed: true, grade: 'A' }
// ]

//-------------------------------Prefix Sum Array------------------------------//

const nums5 = [1, 2, 3, 4, 5];

// Generate prefix sum array
let prefixSum = 0;
const prefixSums = nums5.map((num) => (prefixSum += num));

console.log(prefixSums);
// Output: [1, 3, 6, 10, 15]


// Calculating Factorials

const numbers6 = [1, 2, 3, 4, 5];
const factorials = numbers6.map(num => {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
});
console.log(factorials);
// Output: [1, 2, 6, 24, 120]
