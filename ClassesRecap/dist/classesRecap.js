class Player {
    static description = "This is a player in the game";
    #score = 0;     // we cannot touch it outside of the class Player as it has a private identifier
    numLives = 10;
    constructor(first, last){
        this.first= first;
        this.last= last;
        this.#secret();
    }
    static randomPlayer(){
        return new Player("Andy", "Samberg");
    }
    get fullName(){
        return `${this.first} ${this.last}`;
    }
    set fullName(newName){
        const [first, last] = newName.split(" ");
        this.first = first;
        this.last = last;
    }
    get score(){
        return this.#score;
    }
    set score(newScore){
        if(newScore < 0){
            throw new Error("Score must be positive");
        }
        this.#score = newScore;
    }
    getScore(){
        return this.#score;
    }
    updateScore(newScore){
        this.#score = newScore;
    }
    taunt(){
        console.log("booyah!")
    };
    loseLife(){
        this.numLives -= 1;
    }
    #secret(){
        console.log("this is a secret method");
    }
}

class AdminPlayer extends Player{
    constructor(first, last, powers){
        super(first, last);     // references the parent class constructor Player
        this.powers = powers;
    }
    isAdmin = true;
    sharePublicMessage(){
        console.log("Welcome players!");
    }
}

const admin = new AdminPlayer("steele", "blue", ["delete", "ban"]);
console.log(admin);

const player1 = new Player("blue", "steele");
// player1.taunt();
// console.log(player1.first);
// console.log(player1.last);
// console.log(player1);
// console.log(player1.getScore());
// console.log(player1.updateScore(42));
// console.log(player1.getScore());
// console.log(player1.numLives);
// player1.loseLife();
// console.log(player1.numLives);

// console.log(player1.fullName);
// console.log(player1.score);
// player1.score = 23
// console.log(player1.score);
// const player2 = new Player("charlie", "brown");
// player2.taunt();

console.log(player1.fullName);
player1.fullName = "Amy Adams";
console.log(player1);