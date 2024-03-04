"use strict";
// Defining a function that accepts a size and the text of a message that should be printed on the Shirt.
const makeShirt = (size, message) => {
    console.log(`Size: ${size}, Message: '${message}
    '`);
    //   return `Size: ${size}, Message: '${message}'`;
};
// Call the function 
let size = "medium";
let message = "TypeScript";
makeShirt(size, message);
makeShirt("Large", "TypeScript ");
