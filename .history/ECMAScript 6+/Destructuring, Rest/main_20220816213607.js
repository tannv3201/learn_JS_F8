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
    children: {
        name: 'ReactJS'
    }
};
console.log('******************************************');
// var { name, price, ...rest } = course;
var { name: parentName, price, children: { name } } = course;


console.log(parentName, price);
console.log(name);
// console.log(rest);
