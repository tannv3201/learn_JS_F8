// Classes
// function Course(name, price) {
//     this.name = name;
//     this.price = price;
//     this.getName = function () {
//         return this.name;
//     }
// };

class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    run() {
        const isSuccess = false;

    }
}

const phpCourse = new Course('PHP', 1000)
const jsCourse = new Course('JS', 2000)

console.log(phpCourse);
console.log(jsCourse);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// Expected results
const person = new Person('Long', 22);
console.log(`Tên: ${person.name}, tuổi: ${person.age}`);
// Output: 'Tên: Long, tuổi: 22'
