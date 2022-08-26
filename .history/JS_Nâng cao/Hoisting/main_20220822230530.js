/**
   # Hoisting với var
 */
console.log(age1); // undefined
// console.log(fullName1); // is not defined
var age1 = 16;

var age;
age = 16;
console.log(age); // undefined

// ================================
// Hoisting với function declaration
console.log(sum(6, 9));

// Đưa phần này lên đầu -> sử dụng được sum()
function sum(a, b) {
    return a + b;
}

