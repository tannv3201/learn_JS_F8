// JSON: JavaScript Object Notation
// 1. Là một định dạng dữ liệu (chuỗi)
/**
     Thể hiện các dạng dữ liệu
        - Number
        - Boolean
        - null
        - Array
        - Object
    Mã hóa(Endcode) / Giải mã(Decode)
    - Stringify : từ JS type --> JSON
    - Parse     : từ JSON --> JS type
 */
// Kiểu dữ liệu dạng chuỗi phải dùng nháy kép ""
// var json = '["JS", "PHP"]';
// var json = '{"name":"tan", "age":18}';
var a = '1';
console.log(JSON.parse(a))