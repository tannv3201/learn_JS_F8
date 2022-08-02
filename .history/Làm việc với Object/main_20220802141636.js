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
// Function --> phương thức (method)
// Others --> thuộc tính (property)


// *******************************************************************
// Object Constructor
/*
    // OOP (Object Oriented Program) (Lập trình hướng đối tượng)
- OOP là 1 phương pháp lập trình dưa trên khái niệm về lớp (Class) và đối tượng (Object)
- Dùng để tối ưu việc quản lý source code, giúp tăng khả năng tái sử dụng code,
giúp tóm gọn lại những tính chất mà nhiều đối tượng có thể sử dụng chung
1. Object
- Đối tượng bao gồm 2 thành phần chính 
+ thuộc tính (Attribute): là những thông tin đặc điểm của đối tượng
+ phương thức (Method): là những hành vi mà đối tượng có thể thực hiện
VD: Đối tượng là smartphone
thuộc tính: màu sắc, bộ nhớ, hệ điều hành...
phương thức: gọi điện, chụp ảnh, nhắn tin, ghi âm...

2. Class
- Khi những đối tượng có những đặc tính tương tự nhau sẽ tập hợp thành 1 class,
class này sẽ chứa những thuộc tính và phương thức chung của những đối tượng đó  
- 1 đối tượng sẽ được xem là 1 thực thể của class
VD: ở trên ta có class chung là smartphone, chứa những thuộc tính và phương thức dùng chung,
suy ra đối tượng của lớp sẽ là: iphone, samsung, oppo, xiaomi....

3. Ưu điểm OOP
- OOP giúp mô hình hóa những thứ phức tạp sang dạng cấu trúc đơn giản
- Code OOP có thể tái sử dụng lại, giúp tiết kiệm tài nguyên
- Giúp sửa lỗi dễ dàng hơn, thay vì sửa lỗi ở nhiều đối tượng, ta chỉ cần sửa lỗi ở class chung của những đối tượng đó.
- Có tính bảo mật cao nhờ vào tính chất đóng gói của nó.
- Dễ mở rộng dự án

// 4 đặc tính cơ bản của OOP
1. Tính đóng gói (Encapsulation)
- Giúp che dấu những thuộc tính, những phương thức bên trong của đối tượng. Các đối tượng khác
không thể tác động trực tiếp tới dữ liệu bên trong, hay làm thay đổi trang thái của đối tượng.
- Tính chất này giúp tăng tính bảo mật cho đối tượng, tránh tình trạng dữ liệu bị hư hỏng ngoài ý muốn.

2. Tính kế thừa (Inheritance)
- Cho phép xây dựng một lớp con, kế thừa và tái sử dụng các thuộc tính, phương thức dựa trên lớp cha
- Các lớp con sẽ kế thừa toàn bộ thành phần của lớp cha mà không cần phải định nghĩa lại
- Lớp con có thể mở rộng những thành phần kế thừa hoặc bổ sung những thành phần mới
VD: 
Lớp cha là smartphone, có các thuộc tính như màu sắc, bộ nhớ, hệ điều hành...
Lớp con sẽ kế thừa và cũng có những thuộc tính như vậy

3. Tính đa hình (Polymorphism)
- Cho phép các đối tượng khác nhau thực thi chức năng giống nhau theo những cách khác nhau  
VD: lớp con là iphone hay xiaomi kế thừa những thành phần của lớp cha là smartphone, 
nhưng iphone lại chạy trên hệ điều hành ios, còn xiaomi lại chạy trên hdh android
VD: chó và mèo đều nghe mệnh lệnh kêu từ chủ, chó thì trả lời là gâu gâu còn mèo thì lại trả lời là meo meo

4. Tính trừu tượng (Abstraction)
- Giúp loại bỏ những thứ phức tạp, không cần thiết của đối tượng và chỉ tập trung vào những gì cốt lõi, quan trọng
VD: khi quan lý sinh viên ta chỉ cần quan tâm họ tên, tuổi tác, email..., chứ không cần biết chi tiết về chiều cao, cân nặng,
màu da, sở thích...
*/ 

// Object constructor: là mô tả, thiết kế của đối tượng
// Bản thiết kế  tạo nên ngôi nhà
function User(firstNAme, lastName, avatar) {
    this.firstNAme = firstNAme;
    this.lastName = lastName;
    this.avatar = avatar;
}

var author = new User('Tân', 'Nguyễn', 'Avatar');
var user = new User('Nheo', 'SoSweet', 'Avatar');

console.log(author);
console.log(user);

function Animal(name, leg, speed) {
    this.name = name;
    this.leg = leg;
    this.speed = speed;
}

var parrot = new Animal('Vẹt', 2, '100KM')

console.log(parrot)


// Object prototype - Basic : Nguyên mẫu để tạo nên 1 đối tượng
// Nguyên liệu tạo nên ngôi nhà

// Thêm 1 thuộc tính ngoài hàm tạo, (trong hàm tạo dùng this.)
// Khác với từ khóa "this"
// Attr & method được tạo bằng protoype 
User.prototype.className = 'F8';
console.log(user.className)

// Object student
function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Student.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}

var student = new Student('Tan', 'Nguyen')

console.log('First Name: ', student.firstName);
console.log('Last Name: ',student.lastName);
console.log('Full Name: ',student.getFullName());


// Đối tượng Date
// 
var date = new Date();
var year =  date.getFullYear();
var month=  date.getMonth() + 1;
var day = date.getDay();
console.log('Ngày tháng năm: ', `${day}/${month}/${year}`)

// Đối tượng Math

//  - Math.PI
console.log('Math.PI: ', Math.PI)

//  - Math.round(): Làm tròn số thập phân --> trả về số nguyên
console.log('Math.round(1.5): ', Math.round(1.5))

//  - Math.abs()

//  - Math.ceil()

//  - Math.floor()

//  - Math.random()

//  - Math.min()

//  - Math.max()