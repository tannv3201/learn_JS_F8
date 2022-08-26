/**
    - Phương thức này cho phép gọi một hàm với 1 `this` (bind) và truyền đối số cho hàm gốc dưới dạng mảng
    - 
 */
const teacher = {
    firstName: 'Minh',
    lastName: 'Thu',
}

function greet(greeting, message) {
    return `${greeting}  ${this.firstName} ${this.lastName} ${message}`
}

let result = greet.apply(teacher, ['Em chao co', 'co day mon gi the a'])
console.log(result)

// so sanh voi call()
result = greet.call(teacher, 'Em chao co', 'co day mon gi the a');
console.log(result)

// function borrowing
const teachers = {
    firstName: 'Minh',
    lastName: 'Thu',
    isOnline: false,
    goOnline() {
        this.isOnline = true
        console.log(`${this.firstName} ${this.lastName} is Online`)
    },
    goOffline() {
        this.isOffline = false
        console.log(`${this.firstName} ${this.lastName} is Offline`)
    }
}

const me = {
    firstName: 'Tan',
    lastName: 'Nheo',
    isOnline: false
}

teachers.goOnline()
teachers.goOnline.apply(me)


// Extends
function Animal(name, weight) {
    this.name = name;
    this.weight = weight;
}
function Parrot() {
    this.speak = function () {
        console.log('Nha co khach')
    }
}

const conVet = new Parrot('Vet', 300);
console.log(conVet)