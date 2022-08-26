/**
   # Hoisting với var
 */
console.log(age); // undefined
console.log(fullName); // is not defined

var age;
console.log(age); // undefined

var age = 16;