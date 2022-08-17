// JSON: JavaScript Object Notation
// 1. Là một định dạng dữ liệu (chuỗi)
/**
     Thể hiện các dạng dữ liệu
        - Number
        - String: phải dùng nháy kép ""
        - Boolean
        - null
        - Array
        - Object: phải dùng nháy kép "" (kể cả key và value)
    Mã hóa(Endcode) / Giải mã(Decode)
    - Stringify : từ JS type --> JSON
    - Parse     : từ JSON --> JS type
 */
// 
var json = '["JS", "PHP"]';
// var json = '{"name":"tan", "age":18}';
var a = '1';
var convert =JSON.parse(json);

for (var i = 0; i < convert.length; i++) {
    console.log(convert[i])
}

// Stringify 
console.log( JSON.stringify([
    'hehe',
    'haha',
    'hihi'
]));

var json1 = JSON.parse('["haha", "hehe"]');
var json2 = ['haha', 'hehe'];


console.log(typeof json1)
console.log(typeof json2)
console.log(json1 === json2) // false

// *******************************************
// Promise (sync, async )
// - sync  : đồng bộ
// - async : bất đồng bộ (setTimeout, setInterval, fetch, XMLHttpRequest, file reading, request animation frame)
// - Nỗi đau
// - Lý thuyết, cách hoạt động
// - Thực hành, ví dụ
// setTimeout(function() {
//     console.log(1);
// }, 1000);
// console.log(2);

// ***********************************************
// Promise (pain): Nỗi đau :V
// Callback hell
// 1 giây in ra số 1, sau đó in số 2, số 3
setTimeout(function () {
    console.log(1); // Việc 1
    setTimeout(function () {
        console.log(2); // Việc 2
        setTimeout(function () {
            console.log(3); // Việc 3
            setTimeout(function () {
                console.log(4); // Việc 4
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

// Pyramid of doom
// **************************
// promise concept
// Cách tạo ra 1 promise & hiểu cách hoạt động của nó
// B1: khởi tạo new Promise()
// B2: Excutor
var promise = new Promise(
    // Executor
    function(resolve, reject) {
        // Logic
        // Thành công: resolve()
        // Thất bại: reject()
        resolve();
    }
) //Object constructor

// trạng thái: 
//  - pendding (rò rỉ bộ nhớ - memory leak)
//  - Fulfilled

promise 
    .then(function() { // Trả về nếu thành công
        console.log('Successfully!');
    })
    .catch(function() { // Bắt lỗi
        console.log('Failure!');
    })
    .finally(function() {
        console.log('Done!');
    })


