/**
    ## Value types: Kiểu tham trị
    ## Reference types: Kiểu tham chiếu

    ### 1. Value types (Primitive data types): nguyên thủy
        - String
        - Number
        - Boolean
        - BigInt
        - Symbol
        - undefined
        - null

    ### 2. Reference types (Non-primitive data types) 
        - Object
        - Array
        - Function

 
 */

let a = 1;
// Tạo ra biến a, tạo 1 ô nhớ và gán giá trị 1 vào ô nhớ đó
// Biến     |    Giá trị      |    Ô nhớ
//   a      |       1         |      1
let b = a;
// Tạo biến b, tạo 1 ô nhớ và sao chép giá trị của a gán vào ô nhớ của biến b = 1
// Biến     |    Giá trị      |    Ô nhớ
//   a      |       1         |      1
//   b              1                1

a = 2;
// Gán giá trị 2 cho biến a
// Biến     |    Giá trị      |    Ô nhớ
//   a      |       2         |      2
//   b              1                1
console.log(b); // b = 1


// =============================================
// Reference types
// Gán địa chỉ biến x vào giá trị của biến y (chọc đến vùng nhớ. k thêm vùng nhớ)
// Object, array, function mới luôn có một vùng nhớ mới được tạo ra.
let x = {
    name: 'Mercedes'
}

let y = x;
x.name = 'BMW'
console.log(y)


/**
    ## Data types with functions
        - Value types
        - Reference types
 */


