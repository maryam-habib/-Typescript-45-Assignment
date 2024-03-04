

function makeShirt(size: string = "Large", message:
string = "I love TypeScript"): void
{
   return console.log(`Size: ${size}, Message: '${message}'`);
}

// Large shirt with default message
makeShirt(); // Output: Size: Large, Message: 'I love Typescript'

// Medium shirt with default messgae
makeShirt("Medium"); // Output: string: Medium, Message: 'I love TypeScript'

// Custom shirt with a different message and size 
makeShirt("Small", "Hello, TypeScript!"); // Output: Size: Small, Message: 'Hello, TypeScript!'