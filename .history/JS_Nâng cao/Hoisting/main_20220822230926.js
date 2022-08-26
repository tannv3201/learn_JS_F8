/**
   # Hoisting với var: hoisted var lên trên và gán gia trị undefined
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

// Đưa phần này lên đầu -> sử dụng được sum() trước khi khai báo
function sum(a, b) {
    return a + b;
}

// =======================
// Hoisting với let, const
{
    console.log(fullName2);
    let fullName2 = 'Tan Nguyen'
}

