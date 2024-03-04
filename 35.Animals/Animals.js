"use strict";
// List of animals with a common characteristic
const animals = ['Cat', 'dog', 'goat'];
// Printing the names of each animal using a for of loop
console.log("List of animals:");
for (const i of animals) {
    console.log(i);
}
// Print a statement about each animal
console.log("\nStatement about each animal:");
for (const animal of animals) {
    if (animal === 'dog') {
        console.log(`A ${animal} is a great pet.`);
    }
    else if (animal === 'cat') {
        console.log(`A ${animal} would be a good companion at home.`);
    }
    else if (animal === 'goat') {
        console.log(`A ${animal} is na adorable pet that also give us milk`);
    }
}
// Common characteristic
console.log("\nWhat these animals have in common:");
console.log("Any of these animals would make a great pet!");
