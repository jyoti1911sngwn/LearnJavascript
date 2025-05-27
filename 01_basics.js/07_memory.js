//primitive datatype --- stack --  modifies the copy of variable
let name = 'jyoti';
let another = name ;
console.log(name); //returns the value bcs it returns its copy , original is changed , copy of it isnt changed
console.log(another);  //  returns the name 


//non primitive datatype --- heap -- modifies the variable directly by getting its memory reference 
let obj = {
    email: 'abc'
}
let obj2 =obj

obj2.email = 'cba';

console.log(obj, obj2)

//both values are modified bcs it doesnt gets the copy but modifies the original value by it refrence
