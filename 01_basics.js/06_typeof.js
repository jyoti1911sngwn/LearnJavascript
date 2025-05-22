typeof null  //object
typeof object //function
typeof undefined //undefined
// typeof function //function or object function 


//typeof null	"object"	Historical bug
// typeof object	"undefined" or "function"	Depends on whether object is defined or you're referring to Object
// typeof undefined	"undefined"	Correct behavior
// typeof function	"undefined" or "function"	Depends on context; it's a keyword, not a variable