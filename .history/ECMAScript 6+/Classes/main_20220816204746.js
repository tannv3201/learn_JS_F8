// Classes
// function Course(name, price) {
//     this.name = name;
//     this.price = price;
// this.getName = function() {
//     return this.name;
// }
// };

class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const phpCourse = new Course('PHP', 1000)
const jsCourse = new Course('JS', 2000)

console.log(phpCourse);
console.log(jsCourse);