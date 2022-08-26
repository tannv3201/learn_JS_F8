/**
    - Phương thức này cho phép gọi một hàm với 1 `this` (bind) và truyền đối số cho hàm gốc dưới dạng mảng
    - 
 */
const teacher = {
    firstName: 'Minh',
    lastName: 'Thu',
}

function greet(greeting, message) {
    return `${greeting}  ${this.firstName} ${this.lastName} ${message}}`
}

let result = greet.apply(teacher, ['Em chao co', 'co day mon gi the a'])
console.log(result)

// so sanh voi call()
result = greet.call(teacher, ['Em chao co', 'co day mon gi the a']);
console.log(result)