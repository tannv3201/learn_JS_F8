// Sử dụng 1 function có thể gọi function đó qua template literals

function highlight([first, ...strings], ...values) {
    return values.reduce(
        // Lặp qua mảng
        // accu 
        (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()], // Toán tử spread
        [first] // Giá trị khởi tạo
    );
}

// Học lập trình

var brand = 'F8';
var course = 'JS'
const html = highlight`Học lập trình ${course} tại ${brand}`;
console.log(html);