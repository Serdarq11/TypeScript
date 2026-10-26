export{};

let age: number | string = 21;
age = 25;
age = "serdar";

type Point = {
    x: number;
    y: number;
};

type Loc = {
    lat: number;
    long: number;
};

let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 23.334 };

// union type with functions
function printAge(age: number | string): void {
    console.log(`You are ${age} years old`);
}

printAge(23);
printAge("87");


function calculateTax(price: number | string, tax: number){
    if (typeof price === "string"){
        price = price.replace("$", "");
        return parseFloat(price) * tax;
    } 
    return price * tax;
}


// union types

// const stuff: any[] = [1, 2, "asgas", true, false]; // it's not an error
// const stuff: (number | string) = [1, 2, "asgas", true, false]; // it's an error because of the type definition
const stuff: (number | string)[] = [1, 2, "asgas" ]; // it's not an error because of the type definition

const coords: (Point | Loc)[] = [];
coords.push({lat: 321.213, long: 23.334})
coords.push({x: 213, y: 123})

// literal types 

let zero: 0 = 0;
let mood: "happy" | "sad" = "happy"
mood = "sad"

type dayOfWeek = 
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday"

let today: dayOfWeek = "Wednesday"

