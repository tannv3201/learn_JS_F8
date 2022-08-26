//  LÀM VIỆC VỚI SỐ
/**
 Có 2 loại số trong JS
 - được lưu trữ dưới dạng 64 bit IEEE-754 (còn được gọi là các số phẩy động)
 - BigInt là loại số sử dụng để biểu thị số nguyên có độ dài tùy ý.
 
 - Number.isFinite():	       Xác định xem giá trị đã cho có phải là số hữu hạn
                               hay không --> Trả về boolean
 
 - Number.isInteger():	       Xác định xem giá trị đã cho có phải là số nguyên 
                               hay không --> Trả về boolean
 
 - Number.parseFloat():	       Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
 
 - Number.parseInt():	       Chuyển đổi chuỗi đã cho thành một số nguyên
 
 - Number.prototype.toFixed(): Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
 
 - Number.prototype.toString():Chuyển đổi và trả về số đã cho dưới dạng chuỗi
 */

// 1. Tạo giá trị Number
// Các cách tạo
    var age = 21; // Nên dùng cách này
    var year = 2022;
    var PI = 3.516536;

    var otherNumber = new Number(21);

// 2. Làm việc với Number
// - To string
    var myString = age.toString();
    console.log(myString);
// - to Fixed
// Tham số truyền vào là thứ tự làm tròn số thập phân
var PI = 3.516536;
    console.log(PI.toFixed(2))

// Keyword: JS number method

