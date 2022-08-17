// Phân rã -> object, array
// REST (...rest) : 
// 1. sử dụng với Destructuring
// 2. sử dụng trong việc định nghĩa ra tham số

// Array
var array = ['JS', 'PHP', 'Ruby'];
var [a, ...rest] = array; // Toán tử Rest: lấy phần còn lại, sử dụng với Desctructuring.
console.log(a);
console.log(rest);

// object
var course = {
    name: 'JS',
    price: 1000,
    image: 'image',
    // children: {
    //     name: 'ReactJS'
    // }
};
console.log('******************************************');
// var { name, price, ...rest } = course;
// name: parentName  - đặt tên mới
// children: { name } } - lấy tên của thằng con
// var { name: parentName, price, children: { name } } = course;

// Lấy value chưa được định nghĩa
var { name, description = 'default description' } = course;


console.log(name);
console.log(description);
// console.log(rest);

console.log("Ví dụ rest cách sử dụng 2");
function logger(...params) {
    console.log(params);
};
console.log(logger(1, 2, 3, 4, 5, 6, 7, 8));