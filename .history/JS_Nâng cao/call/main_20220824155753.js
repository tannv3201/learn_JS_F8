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