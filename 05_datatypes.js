// primitive 
// 7 : int, string, null, undefined, bigint, symbol, boolean. : - non reference - directly value returned and updateed 


// non primitive 
// array , object , function : - refernce - refernce of their memory is returned and updated 


// javascript is dynamically typed : - 
//This means that the type of a variable is not explicitly declared or checked during compilation;
//  instead, it is determined during runtime based on the value assigned to the variable. 



//symbol 
let id = Symbol('123')
let anotherId = Symbol('123')
console.log(id === anotherId)

//Symbols in JavaScript serve primarily to create unique and immutable values that can be used as 
// object property keys, thus avoiding naming collisions and providing a form of weak encapsulation. 
// Each symbol is unique, meaning no two symbols are identical, even if they have the same description.


const biginte = 446566554n