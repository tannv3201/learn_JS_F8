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
setTimeout(function() {
    console.log(1);
}, 1000);
console.log(2);


// Promise (pain): Nỗi đau :V
// Callback hell
// 1 giây in ra số 1, sau đó in số 2, số 3
setTimeout(function () {
    console.log(1); // Việc 1
    setTimeout(function () {
        console.log(1); // Việc 1
    })
})

// Pyramid of doom