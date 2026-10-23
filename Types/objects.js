"use strict";
// Object Types
function printName(person) {
    console.log(`${person.first} ${person.last}`);
}
printName({ first: "Thomas", last: "Jenkins" });
let coordinate = { x: 34, y: 2 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
// Excess Property Checks. Very Important!!!
// Passing an object LITERAL with extra properties directly is an error:
// printName({ first: "serdar", last: "kaya", age: 30 });
// Error: Object literal may only specify known properties, and 'age' does not exist in type '{ first: string; last: string; }'.
// Passing a VARIABLE works, because excess property checks only apply to fresh object literals:
const personWithExtras = { first: "serdar", last: "kaya", age: 30, isAlive: true };
printName(personWithExtras); // Works: it has the required shape, extra properties are allowed
let coordinate2 = { x: 34, y: 2 };
function randomPoint() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
function calculateEarnings(song) {
    return song.numStreams * 0.0033; // Example calculation: earnings per stream
}
function printSong(song) {
    console.log(`${song.title} - ${song.artist}`);
}
const mySong = {
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
const user = {
    id: 1,
    username: "serdar",
};
console.log(user.id); // Works: reading the property is allowed
// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property
user.username = "newUsername"; // Works: modifying non-readonly properties is allowed   
const happyFace = {
    radius: 4,
    color: "yellow"
};
const christy = {
    numLives: 7,
    breed: "Husky",
    age: 9
};
