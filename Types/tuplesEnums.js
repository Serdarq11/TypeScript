"use strict";
// tuple
// tuples are a special type exclusive to typescript (they don't exist in JS)
// tuples are arrays of fixed lengths and ordered with specific types - like super rigid arrays
const color = [255, 0, 1];
const goodRes = [200, "OK"];
// goodRes[0] = 100 // error cannot reassignable
goodRes.push(123); // it is not an error. 
goodRes.pop(); // not an error
goodRes.pop(); // not an error
goodRes.pop(); // not an error
const responses = [[404, "Not Found!"], [200, "OK"]]; // array of HTTP response array
// enum
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
const myStatus = OrderStatus.DELIVERED;
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
console.log(isDelivered(OrderStatus.RETURNED)); // false
console.log(isDelivered(OrderStatus.DELIVERED)); // true
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys["UP"] = "up";
    ArrowKeys["DOWN"] = "down";
    ArrowKeys["LEFT"] = "left";
    ArrowKeys["RIGHT"] = "right";
})(ArrowKeys || (ArrowKeys = {}));
ArrowKeys.LEFT; // (enum member) ArrowKeys.LEFT = "left"
