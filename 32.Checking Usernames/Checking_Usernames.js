"use strict";
// step 1 arrays
const current_users = ["Irtaza", "Moosa", "Musfirah",
    "Zaviyaar", "Aqsa", "Sarfaraz"];
const new_users = ["Abbas", "Ahtisham", "Maryam",
    "Nasreen"];
// .map
const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(num1);
const num2 = num1.map(i => i + 2);
console.log(num2);
// step 2 function
function checkUserNames(current_users, new_users) {
    const lowercasedCurrentUsers = current_users.map(user => user.
        toLowerCase());
    for (const newUser of new_users) {
        const lowercasedNewUser = newUser.toLowerCase();
        if (lowercasedCurrentUsers.includes(lowercasedNewUser)) {
        }
    }
}
