// tuple
// tuples are a special type exclusive to typescript (they don't exist in JS)
// tuples are arrays of fixed lengths and ordered with specific types - like super rigid arrays

const color: [number, number, number] = [255, 0, 1]

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"]
// goodRes[0] = 100 // error cannot reassignable
goodRes.push(123) // it is not an error. 
goodRes.pop()   // not an error
goodRes.pop()   // not an error
goodRes.pop()   // not an error

const responses: HTTPResponse[] = [[404, "Not Found!"], [200, "OK"]]    // array of HTTP response array

// enum

enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}

const myStatus = OrderStatus.DELIVERED;


function isDelivered(status: OrderStatus){
    return status === OrderStatus.DELIVERED;
}

console.log(isDelivered(OrderStatus.RETURNED)); // false
console.log(isDelivered(OrderStatus.DELIVERED)); // true

enum ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right"
}

ArrowKeys.LEFT; // (enum member) ArrowKeys.LEFT = "left"


