"use strict";
let magicians = ["David", "Chris", "James"];
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
make_great(magicians);
show_magicians(magicians);
// function make_great(magicians: string[]) {
//     for (let i = 0; i < magicians.length; i++) {
//         magicians[i] = magicians[i] + " the Great";
//     }
// }
// make_great(magicians); // Modifies the original array
// show_magicians(magicians); // Shows modified names
