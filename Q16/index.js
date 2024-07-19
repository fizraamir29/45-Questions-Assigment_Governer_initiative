"use strict";
let guests = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];
let unableToAttend = "Nikola Tesla";
console.log(`${unableToAttend} can't make it to dinner.`);
// Replace the guest
let newGuest = "Leonardo da Vinci";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
// let unableToAttend = "Nikola Tesla";
// console.log(`${unableToAttend} can't make it to dinner.`);
// // Replace the guest
// let newGuest = "Leonardo da Vinci";
// guests[guests.indexOf(unableToAttend)] = newGuest;
// // New invitations
// guests.forEach(guests => {
//     console.log(`Dear ${guests}, would you like to join me for dinner?`);
// });
