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
console.log('Chuyển JS ->> JSON: ', JSON.stringify([
    'hehe',
    'haha',
    'hihi'
]));