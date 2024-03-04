

function makeSandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("  - You ordered an empty sandwich. Please add some items.");
    } else {
        items.forEach((item, index) => {
            console.log(`   ${index + 1}. ${item}`);
        });
    }
    console.log("\n");
}

// Call the function with different numbers of arguments
makeSandwich()
makeSandwich("Turkey", "Lettuce", "Tomato", "Mayonnaise");
makeSandwich("Ham", "Cheese");
makeSandwich("Peanut Butter", "Jelly", "Banana", "Honey");