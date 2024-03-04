

// define the array of favorite pizzas
const favoritePizzas = ['Pepperoni', 'Margherita', 'BBQ Chicken'];

// print the name of each pizza using a for loop
console.log("My favorite pizzas are:");
for (let i = 0; i < favoritePizzas.length; i++) {
    console.log(favoritePizzas[i]);
}

//print a sentence for each pizza
console.log("\nI like these pizzas:")
for (let i = 0; i < favoritePizzas.length; i++) {
    console.log(`I like ${favoritePizzas[i]} pizza.`);
}

// print an additional sentence about how much i like pizza 
console.log(`\nI really love pizza!`);