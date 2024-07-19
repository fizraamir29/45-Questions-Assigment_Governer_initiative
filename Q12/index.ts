/////////////////////////1st Methode///////////////////////////
let Names: string[] = ["Hina", "Rida ", "Faryal"];
for (let name of Names) {
    console.log(`Hello ${name}, would you like to learn some TypeScript today?`);
}
////////////////2nd Methode////////////////////////////////////
let names: string[] = ["Hina", "Rida ", "Faryal"];
for (let i =0; i<names.length; i=i+1){
    console.log(`Hello  ${names[i]}, would you like to learn some TypeScript today? `);

}