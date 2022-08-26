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
const getTeacherName = teacher.getFullName.bind(teacher);
// Ràng buộc từ khóa this của đối tượng `teacher` với từ khóa this của hàm getTeacherName
console.log(getTeacherName()); // Minh Thu