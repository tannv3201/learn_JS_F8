// Object:
/**
 var objectName = {
    key: value,
    key: value,
 }
 */

// Đặt tên key gặp trường hợp lỗi --> chuyển key thành string: 'key': value

var phoneKey = 'phone'; // Tạo key sử dụng biến

var myInfo = {
    name: 'Tan',
    age: 18,
    address: 'Thai Binh',
    [phoneKey]: '0386653766' // Tạo key sử dụng biến
}
console.log(myInfo) 


// Thêm key, value sau khi Object được tạo
/**
    objectName.newKey = value
 */
myInfo.email = 'tan@gmail.com'

// Lấy value từ key
// Key k có --> trả về Undefined
console.log(myInfo.name) 

var myKey = 'address';

// Truyền biến: objectName[variable]
// KHông truyền dạng chuỗi
console.log(myInfo[myKey])

// Xóa key value
delete myInfo.address;
console.log(myInfo) 

// Function

var testFunction = {
    name: 'Tan',
    age: 18,
    address: 'Thai Binh',
    getName: function() {
        return this.name;
    }
}
console.log(testFunction.getName()) 
