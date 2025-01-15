// Scope with let and const
console.log("=== Scope ===");
let message = "Hello, World!";
const author = "Tosin";
console.log(message, author);

// Arrow Function
console.log("=== Arrow Functions ===");
const square = x => x * x;
console.log(`Square of 5: ${square(5)}`);

// Array Methods
console.log("=== Array Methods ===");
const numbers = [1, 2, 3, 4, 5];

// map()
const squares = numbers.map(num => num * num);
console.log("Squares:", squares);

// filter()
const evens = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evens);

// reduce()
const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum of Numbers:", sum);

// forEach()
numbers.forEach(num => console.log("Number:", num));

// Objects
console.log("=== Objects ===");
const person = {
  name: "Tosin",
  age: 25,
  greet() {
    return `Hi, I'm ${this.name}, and I'm ${this.age} years old.`;
  },
};
console.log(person.greet());
