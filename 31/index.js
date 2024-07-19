"use strict";
let usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    usernames.forEach(username => {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    });
}
// let usernames: string[] = [];
// if (usernames.length === 0) {
//     console.log("We need to find some users!");
// } else {
//     // Greet users
// }
// // Removing all usernames ensures the message "We need to find some users!" is printed.
