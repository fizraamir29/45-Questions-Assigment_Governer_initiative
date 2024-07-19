"use strict";
function make_car(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
// Example usage:
console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
// function make_car(manufacturer, model, ...options) {
//     let car = { manufacturer, model };
//     // Iterate over each option provided as [key, value] pairs and add them to the car object
//     options.forEach(([key, value]) => car[key] = value);
//     return car;
// }
// // Example usage:
// console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
// console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
