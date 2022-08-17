// Sử dụng 1 function có thể gọi function đó qua template literals

function highlight(...rest) {
    console.log(rest);
}
var brand = 'F8';
var course = 'JS'
highlight`Học lập trình ${course} tại ${brand}`;