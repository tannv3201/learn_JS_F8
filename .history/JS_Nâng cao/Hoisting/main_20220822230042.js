/**
   # Hoisting với var
 */
console.log(age); // undefined
console.log(fullName); // is not defined

var age;
var age = 16;
console.log(age); // undefined

