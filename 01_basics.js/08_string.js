let one= 'one'
let tw0 = 2
console.log(one + tw0 + 23) 


//or use backticks 

const newGame = new String('NewGAome')
console.log(newGame)
console.log(newGame[0])
console.log(newGame.__proto__)
console.log(newGame.length)  //its a method
console.log(newGame.toUpperCase)  //its a method
console.log(newGame.charAt(2))  //its a method
console.log(newGame.indexOf('e'))  //its a method

//string is an object in js with its prototype methods


let newString = "newString"
console.log(newString.substring(0, 4))
console.log(newString.slice(-8, 4))

let spacesStr = "    space.      "
console.log(spacesStr.trim())

let url = 'gmail%@vomdot'
console.log(url.replace('%', '-'))
console.log(url.includes('vom'))
console.log(url.split('%'))
console.log(url.split('%', 2))