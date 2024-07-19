let guests: string[] = ["Misbah", "Falza", "Mehak"];
let unableToAttend: string = "Misbah";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest/////////////////Rida /////////////////////////
let newGuest: string = "Rida";
guests[guests.indexOf(unableToAttend)] = newGuest;

// New invitations/////////////////////////////////////////////////
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
