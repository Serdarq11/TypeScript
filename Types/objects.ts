export {};
// Object Types
function printName(person: { first: string; last: string }): void {
    console.log(`${person.first} ${person.last}`);
}

printName({ first: "Thomas", last: "Jenkins" });

let coordinate: { x: number; y: number } = { x: 34, y: 2 };

function randomCoordinate(): { x: number; y: number } {
    return { x: Math.random(), y: Math.random() };
}


// Excess Property Checks. Very Important!!!
// Passing an object LITERAL with extra properties directly is an error:
// printName({ first: "serdar", last: "kaya", age: 30 });
// Error: Object literal may only specify known properties, and 'age' does not exist in type '{ first: string; last: string; }'.

// Passing a VARIABLE works, because excess property checks only apply to fresh object literals:
const personWithExtras = { first: "serdar", last: "kaya", age: 30, isAlive: true };
printName(personWithExtras); // Works: it has the required shape, extra properties are allowed


// Type Aliases
type Point = {
    x: number;
    y: number;
};

let coordinate2: Point = { x: 34, y: 2 };

function randomPoint(): Point {
    return { x: Math.random(), y: Math.random() };
}

function doublePoint(point: Point): Point {
    return { x: point.x * 2, y: point.y * 2 };
}


// Nested Objects
type Song = {
    title: string;
    artist: string;
    numStreams: number;
    credits: { producer: string; writer: string };
};

function calculateEarnings(song: Song): number {
    return song.numStreams * 0.0033;  // Example calculation: earnings per stream
}

function printSong(song: Song): void {
    console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12873321,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North",
    },
};

const earnings = calculateEarnings(mySong);
console.log(earnings);
printSong(mySong);


// Optional Properties
// type Point = {
//     x: number;
//     y: number;
//     z?: number; // Optional property, it means that the property may or may not be present in the object
// };

// Readonly Properties
type User = {
    readonly id: number;
    username: string;
};

const user: User = {
    id: 1,
    username: "serdar",
};

console.log(user.id); // Works: reading the property is allowed
// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property
user.username = "newUsername"; // Works: modifying non-readonly properties is allowed   

// Intersection Types
type Circle = {
    radius: number;
};

type Colorful = {
    color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
    radius: 4,
    color: "yellow"
};

type Cat = {
    numLives: number;
};

type Dog = {
    breed: string;
};

type CatDog = Cat & Dog & {
    age: number;
};

const christy : CatDog = {
    numLives: 7,
    breed: "Husky",
    age: 9 
}