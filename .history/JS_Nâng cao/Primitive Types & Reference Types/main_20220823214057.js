"use strict"

var fullName = 'Nguyễn Văn Tân'

function testFunc() {
    var age = 18;
}

testFunc()
console.log(fullName);
// console.log(age);

// 
const student = Object.freeze({
    name: 'Nguyễn Văn Tân',
})

student.name = 'Vũ Hải Anh'


