/**
 1. Tham số và đối số là gì ?
  - [tham_số] là giá trị đầu vào khi [định_nghĩa] hàm, sử dụng trong hàm
  - [đối_số] là giá trị truyền vào khi [gọi] hàm
  - Kiểu dữ liệu: có thể là tất cả các kiểu dữ liệu
  - Tính private: chỉ có thể sử dụng bên trong hàm
  - các tham số hay đối số cách nhau bằng dấu [,]
  2. Đối tượng arguments
  - chỉ dùng được bên trong hàm
  - nhận vô số đối số
  - Tham số nhận được sẽ là mảng
 */
function myFunction() {
    document.getElementById("id").innerHTML = "Clicked!";
}

function writeLog() {
    var myString = '';
    for (var param of arguments) {
        myString += `${param} - `;
    }
    console.log(myString)
}
writeLog('Log 1', 'Log 2', 'Log 3', 4, 5, 6);


// **********************************************************
/**
 *Từ khóa Return trong hàm
    - Một hàm không REturn sẽ trả về Undefined
    - Những dòng code dưới Return sẽ bị bỏ qua
    - Trả về bất cứ kiểu dữ liệu gì.
 */
function cong(a, b) {
    return a.toString() + b;
}

var result = cong(2,8)
console.log(result)

// ***********************************************************
// Hiểu hơn về Function

// 1. Định nghĩa 2 Function trùng tên 
// -> Func định nghĩa sau ghi đè Func định nghĩa trước

// 2. Khai báo biến trong hàm
// - Phạm vi sử dụng trong Func (Private)
function showMessage() {
    var fullName = 'Nheo'
    console.log(fullName);
}
showMessage();

// 3.Định nghĩa hàm trong hàm

function funcDefinedInFunc() {
    function showMessage2() {
        console.log('Message2');
    }
    showMessage2();
}
funcDefinedInFunc();

// ********************************************************
// Các loại Function
// >> 1. Declaration function
// Bắt buộc đặt tên
showMessageDecla(); // Hoisting: Có thể gọi trước khi định nghĩa
function showMessageDecla() {
    console.log('Declaration function');
}


// >> 2. Expression function
// Không cần đặt tên
var showMessageExpress = function() {
    console.log('Expression function');

}
showMessageExpress();

// Callback
setTimeout(function() {

});

var myObject = {
    myFunction2: function() {

    }
}

// >> 3. Arrow function

