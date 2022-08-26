'use strict'
/*-
    - Goị hàm với call method
    - Gọi hàm và bind `this`, lưu ý trong strict mode vẫn có `this` nếu được bind
*/



// // Simple example
// function random() {
//     console.log(Math.random())
// }
// random.call()

// VD:
// const teacher = {
//     firstName: 'Minh',
//     lastName: 'Thu',
// }

// const me = {
//     firstName: 'Tan',
//     lastName: 'Nguyen',
//     showFullName() {
//         console.log(`${this.firstName} ${this.lastName}`)
//     }
// }
// // bind `this` and call function
// me.showFullName.call(teacher)

// in strict mode

this.firstName = 'Tan';
this.lastName = 'Nguyen';
function showFullName() {
    console.log(`${this.firstName} ${this.lastName}`)
}

showFullName.call(this)

// Tính kế thừa extends
function Animal(name, weight) {
    this.name = name;
    this.weight = weight;
}

function Chicken(name, weight, legs) {
    Animal.call(this, name, weight) // Kế thừa
    this.legs = legs;
}
const sonDang = new Chicken('Son Dang', 66, 2);
console.log(sonDang)

// Mượn hàm - borrowing

// function argument
function logger() {
    Array.prototype.forEach.call(arguments, function (item) {
        console.log(item)
    })
}
logger(1, 2, 3)

// cắt mảng
function logger2() {
    const arr2 = [...arguments];
    const arr3 = Array.from(arguments);

    const arr4 = Array.prototype.slice.call(arguments)
    console.log(arr4);
}
logger2(3, 4, 5)

