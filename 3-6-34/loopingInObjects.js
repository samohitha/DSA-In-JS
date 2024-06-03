

// ----------------------------------- for...in loop----------------------------------------------//

// The for...in loop iterates over all enumerable properties of an object, including inherited ones. 

// It loops through the keys of the object, allowing you to access both the key and the corresponding value.

const person = {
    name: 'Bharath',
    age: 24,
    city: 'New York'
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}


// Object.keys() method:

// The Object.keys() method returns an array containing the names of all enumerable properties of an object.

// You can then iterate over this array using any array looping method.

// Object.keys(person) returns an array ['name', 'age', 'city'].

// Object.values() method:

// The Object.values() method returns an array containing the values of all enumerable properties of an object.

// You can then iterate over this array using any array looping method.

// Object.values(person) returns an array ['Bharath', 24, 'New York'].

// Object.entries() method:

// The Object.entries() method returns an array containing arrays of key-value pairs for each enumerable property of an object.

// Each inner array has two elements: the property name (key) and its corresponding value.

// Object.entries(person) returns an array of arrays [['name', 'Bharath'], ['age', 24], ['city', 'New York']]