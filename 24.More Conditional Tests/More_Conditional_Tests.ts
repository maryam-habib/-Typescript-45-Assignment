

// Tests for equality and inequality with strings
const str1: string = "Hello";
const str2: string = "hello";
console.log(str1 === str2); // false
console.log(str1 !== str2); // true
 
// Test using the lower case function
const text1: string = "Hello World";
const text2: string = "hello world";
console.log(text1.toLowerCase() === text2); // true

// Numerical tests involving equality and inequality, greater than and less than or equal to, and less than or equal to
const num1: number = 10;
const num2: number = 5;

console.log(num1 === num2); // false
console.log(num1 !== num2); //true
console.log(num1 > num2);  // true
console.log(num1 < num2);  // false
console.log(num1 >= num2); // true
console.log(num1 <= num2); // false

// Tests using "and" and "or" operators
const x: number = 5;
const y: number = 10;
const z: number = 15;

console.log(x < y && y < z); // true, both conditions are true
console.log(x < y || y > z); // true, at least one condition is true
console.log(x > y && y < z); // false, both conditions are false
console.log(x > y || y > z); // false, both conditions are false

// Test whether an item is an array
const fruits: string[] = ['apple', 'banana', 'orange', 'grape'];

console.log(fruits.includes('banana')); // true
console.log(fruits.includes('kiwi')); // false

// Test whether an item is not in an array
const colors: string[] = ['red', 'green', 'blue', 'yellow'];

console.log(!colors.includes('purple')); // true
console.log(!colors.includes('green'));  // false
