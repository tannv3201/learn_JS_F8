// Sử dụng 1 function có thể gọi function đó qua template literals

function highlight([first, ...strings], ...values) {
    console.log('first', first);
    console.log('strings', strings);
    console.log('values', values);
}
var brand = 'F8';
var course = 'JS'
const html = highlight`Học lập trình ${course} tại ${brand}`;
