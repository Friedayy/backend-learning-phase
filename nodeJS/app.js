// let a = 10;
// let b = a - 5;
// console.log(b);



//object destructuring syntax
const {a, sum} = require("./module.js");

sum(2,3);

console.log(a);

const {add, subtract, multiply} = require("./math")
console.log(add(3,6))
console.log(subtract(5,4))
console.log(multiply(2,3))