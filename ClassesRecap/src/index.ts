class Player {
    public readonly first: string;
    public readonly last: string;       // public is the default. public means that this property can be accessed from outside the class.
    private score: number = 0;          // private means that this property can only be accessed from within the class.        
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }

    private secretMethod(): void {
        console.log("Secret method");
    }
}

const elton = new Player("Elton", "Steele");

// elton.first = "Elton2"; // Error: Cannot assign to 'first' because it is a read-only property.
// elton.secretMethod();   // Error: Property 'secretMethod' is private