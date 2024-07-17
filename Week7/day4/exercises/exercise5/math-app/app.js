const math = require("./math");

const lodash = require('./node_modules/lodash')


console.log(math.add(1,2))

console.log(math.multiplication(1,2))

arr = []

let newArray =  lodash.concat(arr, [math.add(1,2), math.multiplication(1,2)]);
console.log(newArray)