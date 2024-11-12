// Define a function with two parameters, assigning a default value to the second one. Call it with both one and two arguments, and show the outputs.
const defaultvalue = (a, b = 10) => {
    return [a, b]; // Return both values as an array
};

console.log(defaultvalue(1));
console.log(defaultvalue(1, 2));

// Create a function that takes a name and a city as input and returns a multi-line message using template literals, incorporating both variables.
const msg = (name, city) => {
    return `Hello ${name} from ${city}`;
};

console.log(msg("Tushar", "Comilla"));

// Combine two arrays using the spread operator and find the maximum value in the merged array.
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr, ...arr2];
console.log(Math.max(...arr3));

// Create an object with properties name, age, and country, and use destructuring to extract them into variables. Also, destructure an array of five numbers to get the first two elements.
const obj = {
    names: "Tushar",
    age: 20,
    country: "Bangladesh"
};

const { names, age, country } = obj;
const arr4 = [1, 2, 3, 4, 5];
const [first, second] = arr4;
console.log(names, age, country);
console.log(first, second);

// Access the city property of a nested object using both dot notation and optional chaining.
const student = {
    name: "Tushar",
    address: {
      city: "Comilla",
      postalCode: "3500"
    }
};

const cityDotNotation = student.address.city;
const cityOptionalChaining = student.address?.city;
console.log(cityDotNotation);
console.log(cityOptionalChaining);

// Given an array of student objects with properties name and marks, use map() to extract the names.
const students = [
    { name: "Tushar", marks: 85 },
    { name: "Sunny", marks: 78 },
    { name: "Rukaiya", marks: 90 }
];

const studentNames = students.map(student => student.name);
console.log(studentNames);

// filter() to return students with marks above 80.
const topStudents = students.filter(student => student.marks > 80);
console.log(topStudents);

// Use map() on a string array to create a new array where each string is prefixed with "Hello, ".
const namesArray = ["Tushar", "Sunny", "Rukaiya"];
const greetings = namesArray.map(name => `Hello, ${name}`);
console.log(greetings);

// Given an array of objects, use filter() to return all objects where a specific condition is met (e.g., products priced above a certain amount).
const products = [
    { name: "Book", author: "IH-TUSHAR", price: 200 },
    { name: "Laptop", author: "IH-TUSHAR", price: 1200 },
    { name: "Pen", author: "IH-TUSHAR", price: 20 }
];

const expensiveProducts = products.filter(product => product.price > 100);
console.log(expensiveProducts);

// Use map() on an array of product objects to create strings in the format "Product: [name] costs $[price]".
const productDetails = products.map(
    product => `Product: ${product.name} costs $${product.price}`
);

console.log(productDetails);
