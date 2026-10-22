// let movieTitle: string = "Amadeus";
// movieTitle = "Arrival";
//movieTitle = 9; // Error: Type 'number' is not assignable to type 'string'.
// movieTitle.toUpperCase(); // This will work because movieTitle is of type string.

// let numCatLives: number = 9;
// numCatLives += 1;
// numCatLives = "zero"; // Error: Type 'string' is not assignable to type 'number'.

// let gameOver: boolean = false;
// gameOver = true;
// gameOver = "true"; // Error: Type 'string' is not assignable to type 'boolean'.

let nothing: null = null;
let foo: undefined = undefined;

// Type Inference
let tvShow = "Olive Kitteridge";
tvShow = "The Other";
// tvSHow = 9; // Error: Type 'number' is not assignable to type 'string'.

let isFunny = true;
isFunny = false;
// isFunny = "sometimes"; // Error: Type 'string' is not assignable to type 'boolean'.  

//the any type
let thing: any = "hello";
thing = 1;
thing = false;
thing = [1, 2, 3];
thing = {}; 
thing()
thing.toUpperCase();

const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
let foundMovie;     // Type is inferred as any if we are not declaring it as a string or number or boolean.

for (let movie of movies){
    if (movie === "Amadeus"){
        foundMovie = "Amadeus";
    }


}

