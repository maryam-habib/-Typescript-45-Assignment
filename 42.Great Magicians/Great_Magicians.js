"use strict";
const magicianNames = ["Harry Porter", "David Copperfield", "Hermione Granger",
    "Professor Albus Dumbledore", "Ron Weasley"];
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians) {
    const greatMagicians = magicians.map(magician => `the
    Great ${magician}`);
    return greatMagicians;
}
// Modify the array to add "the Great" to each magician name
const greatMagicianNames = make_great(magicianNames);
// Call the function to show the original magician names
console.log("Original Magicians:");
showMagicians(magicianNames);
// Call the function to show the great magician names
console.log("\nGreat Magicians:");
showMagicians(greatMagicianNames);
