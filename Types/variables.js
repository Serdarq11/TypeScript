"use strict";
let movieTitle = "Amadeus";
movieTitle = "Arrival";
//movieTitle = 9; // Error: Type 'number' is not assignable to type 'string'.
movieTitle.toUpperCase(); // This will work because movieTitle is of type string.
let numCatLives = 9;
numCatLives += 1;
// numCatLives = "zero"; // Error: Type 'string' is not assignable to type 'number'.
let gameOver = false;
gameOver = true;
// gameOver = "true"; // Error: Type 'string' is not assignable to type 'boolean'.
