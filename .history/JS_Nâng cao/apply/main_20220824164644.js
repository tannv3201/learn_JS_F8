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

// apply nhận đối số là 1 mảng. arguments là dạng mảng
function Parrot(name, weight) {
    Animal.apply(this, arguments);
    this.speak = function () {
        console.log('Nha co khach')
    }
}

const conVet = new Parrot('Vet', 300);
console.log(conVet.speak())


/**
## So sánh
    # Giống
        - Cú pháp truy cập
            function fn() {}
            fn.bind()
            fn.call()
            fn.apply()
            
        - Là các methods được kế thừa từ Function.prototype
            fn.bind === Function.prototype.bind // True
            fn.call() === Function.prototype.call // True
            fn.apply() === Function.prototype.apply // True

    # Khác:
        - Các đối số & cách hoạt động
            + Bind method:
                - Trả về hàm mới với `this` tham chiếu tới `thisArg`
                - Không thực hiện gọi hàm
                - Nếu được bind kèm `arg1, arg2,...` thì các đối số này sẽ được ưu tiên hơn

                const newFn = fn.bind(thisArg, arg1, arg2, ...)

            +

 */