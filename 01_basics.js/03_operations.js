//coercion
console.log(1 + "2")          //12
console.log("1" + "2" + 2)   //122
console.log(1 + 2 + "2")      //32


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "x:4, y:4"
