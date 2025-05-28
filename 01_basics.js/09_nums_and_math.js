let num = 100;
console.log(new Number(num))
console.log(num.toString().length)
console.log(num.toFixed(2))

let some = 123.8666
console.log(some.toPrecision(3))

let some1 = 23.8666
console.log(some1.toPrecision(3))

let bigNum = 10000000
console.log(bigNum.toLocaleString())
console.log(bigNum.toLocaleString('en-IN'))



console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.7))
console.log(Math.ceil(4.7))
console.log(Math.floor(4.7))
console.log(Math.sqrt(4))
console.log(Math.pow(4,2))
console.log(Math.min(4, 7,5,3))


console.log(Math.random())     //0 to 1
console.log((Math.random()*10) +1)
console.log(Math.floor(Math.random()*10) +1)

const max = 10 
const min = 5
console.log(Math.floor(Math.random()* max-min + 1) + min)