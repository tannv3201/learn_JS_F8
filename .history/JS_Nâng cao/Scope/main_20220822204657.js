/**
    - Các loại phạm vi
        + Global - Toàn cầu
        + Code block - Khối mã : let, const
        + Local scope - Hàm: var, function
    - Khi gọi mỗi hàm luôn có 1 phạm vi mới được tạo
    - Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó
    _ Cách thức 1 biến được truy cập
    - Khi nào một biến bị xóa khỏi bộ nhớ ?
        + Biến toàn cầu?
        + Biến trong code block & trong hàm
        + Biến trong hàm được tham chiếu bởi 1 hàm
 */

// Biến Global
// var message = "Hoc ve Scope";
// function log() {
//     console.log(message);
// }

// function logger() {
//     log();
// }
// logger();

// Code block: if else, loop, {}, ... 
// {
//     const age = 18;
//     console.log(age)
// }

if (true) {
    var firstName = "tans";
}
console.log(firstName)
// Local scope
function logger() {
    var fullName = "NheoGentle";
    // console.log(name);
}

// console.log(fullName)



function logger(message) {
    function log() {
        console.log('hehe');
    }
    log()

}


