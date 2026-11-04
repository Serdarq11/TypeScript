"use strict";
class Player {
    constructor(first, last) {
        this.score = 0; // private means that this property can only be accessed from within the class.        
        this.first = first;
        this.last = last;
    }
    secretMethod() {
        console.log("Secret method");
    }
}
const elton = new Player("Elton", "Steele");
// elton.first = "Elton2"; // Error: Cannot assign to 'first' because it is a read-only property.
// elton.secretMethod();   // Error: Property 'secretMethod' is private
