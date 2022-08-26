this.firstName = 'Minh';
this.lastName = 'Thu';

const teacher = {
    firstName: 'Minh',
    lastName: 'Thảo',
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

// Case 1:
console.log(teacher.getFullName()); // Minh Thảo

// case 2:
const getTeacherName = teacher.getFullName
console.log(getTeacherName()); // Minh Thu