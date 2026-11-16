export default class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    logout() {
        console.log(`${this.username} has logged out`);
    }
}
export function userHelper() {
    console.log("User Helper!!!");
}
