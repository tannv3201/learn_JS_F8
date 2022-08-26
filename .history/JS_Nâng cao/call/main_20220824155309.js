// // Simple example
// function random() {
//     console.log(Math.random())
// }
// random.call()

// 
const teacher = {
    firstName: 'Minh',
    lastName: 'Thu',
}

const me = {
    firstName: 'Tan',
    lastName: 'Nguyen',
    showFullName() {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}
me.showFullName()