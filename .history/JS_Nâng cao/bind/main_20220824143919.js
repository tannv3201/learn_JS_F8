/**
    - Phương thúc bind() sẽ trả về một hàm mới
    -> Không sửa `this` mà trả về 1 hàm mới và `this` mới.
      
    - Có thể nhận đối số như hàm ban đầu
 */


this.firstName = 'Minh';
this.lastName = 'Thu';

const teacher = {
    firstName: 'Minh',
    lastName: 'Thảo',
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}
const button = document.querySelector('button');
button.onclick = teacher.getFullName.bind(teacher);

// // Case 1:
// console.log(teacher.getFullName()); // Minh Thảo

// // case 2:
// const getTeacherName = teacher.getFullName.bind(teacher, 'data1', 'data2');
// // Ràng buộc từ khóa this của đối tượng `teacher` với từ khóa this của hàm getTeacherName
// console.log(getTeacherName('test1', 'test2')); // Minh Thu

// -------------------------
const $ = document.querySelector.bind(document);
const $$ = document.querySelector.bind(document);
console.log($('#headings'))