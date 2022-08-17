// Phân rã -> object, array

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

var { name, description } = course;


console.log(parentName, price);
console.log(name);
// console.log(rest);
