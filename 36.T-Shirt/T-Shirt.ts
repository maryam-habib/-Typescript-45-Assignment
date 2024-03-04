

// Defining a function that accepts a size and the text of a message that should be printed on the Shirt.
const makeShirt = (size: string, message: string)
:void =>
{
    console.log(`Size: ${size}, Message: '${message}
    '`);
 //   return `Size: ${size}, Message: '${message}'`;
}

// Call the function 

// Call the function with the size and the message variables.
let size: string = "medium";
let message: string = "TypeScript"

makeShirt(size, message);
// directly call the function
makeShirt("Large", "TypeScript ");