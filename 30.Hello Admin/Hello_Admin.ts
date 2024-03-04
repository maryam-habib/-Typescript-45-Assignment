


const userNames: string[] = ['admin','Ali', 'Muhammad Kamran'];

function greetUsers(): void {
    for (const i in userNames) {
        if (userNames[i].toLowerCase() === 'admin') {
            console.log(`Hello admin, would you like to see a status report?`);
        } else {
            console.log(`Hello ${userNames[i]}, thank you for logging in again.`);
        }
    }
}

greetUsers()