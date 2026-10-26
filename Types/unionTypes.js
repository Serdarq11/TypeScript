let age = 21;
age = 25;
age = "serdar";
let coordinates = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 23.334 };
// union type with functions
function printAge(age) {
    console.log(`You are ${age} years old`);
}
printAge(23);
printAge("87");
function calculateTax(price, tax) {
    if (typeof price === "string") {
        price = price.replace("$", "");
        return parseFloat(price) * tax;
    }
    return price * tax;
}
// union types
// const stuff: any[] = [1, 2, "asgas", true, false]; // it's not an error
// const stuff: (number | string) = [1, 2, "asgas", true, false]; // it's an error because of the type definition
const stuff = [1, 2, "asgas"]; // it's not an error because of the type definition
const coords = [];
coords.push({ lat: 321.213, long: 23.334 });
coords.push({ x: 213, y: 123 });
// literal types 
let zero = 0;
let mood = "happy";
mood = "sad";
let today = "Wednesday";
export {};
