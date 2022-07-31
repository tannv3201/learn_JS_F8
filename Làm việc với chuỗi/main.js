// CHUỖI TRONG JAVASCRIPT
// 1. Tạo chuỗi (2 cách)
var cach1 = 'Cách 1' //Cách 1
var cach2 = new String('Cách 2') //Cách 2


// 2. Một số case sử dụng backslash (\)
// 
var backslashTest = 'Sử dụng \'backslash\'';
console.log(backslashTest);

var backslashTest2 = 'Đây là dấu \\';
console.log(backslashTest2);

// 3. Xem độ dài chuỗi
console.log('Độ dài chuỗi', backslashTest.length)


// 4. Chú ý độ dài khi viết code
// Nên để độ dài 1 dòng <= 80 kí tự
// Nếu dài tách dòng, nối chuỗi
var doDaiVietCode = 'Sử dụng \'backslash\' Sử dụng \'backslash\' Sử dụng \'backslash\'';


// 5. Template string ES6
var firstName = 'Tân';
var lastName = 'Nguyễn';

console.log(`Tôi là: ${firstName} ${lastName}`)



// ************************************************************************
// LÀM VIỆC VỚI CHUỖI
var myString = 'Học JS tại F8 F8 F8'
// 1. Length
console.log('Độ dài chuỗi', myString.length)

// 2. Find index
/**
  So sánh:
  - indexOf: 
        + Có tham số thứ 2 là vị trí bắt đầu tìm kiếm
  - search:
        + Không có tham số vị trí bắt đầu tìm kiếm
        + Tìm kiếm theo biểu thức chính quy
 */
console.log('Vị trí của chuỗi F8 thứ 1: ', myString.indexOf('F8'));

// Tham số thứ 2 sẽ là vị trí bắt đầu tìm kiếm
console.log('Vị trí của chuỗi F8 thứ 2: ', myString.indexOf('F8', 12));

// Tìm chuỗi F8 cuối cùng trong chuỗi
console.log('Vị trí của chuỗi F8 cuối cùng: ', myString.lastIndexOf('F8'));

// search
console.log('Vị trí của chuỗi F8 thứ 1:(search) ', myString.search('F8'));


// 3. Cut string
/**
 - slice(tham số 1, tham số 2)
 - tham số 1: vị trí bắt đầu cắt
 - tham số 2: vị trí kết thúc
 - muốn cắt từ tham số 1 -> hết thì bỏ tham số 2: slice(tham số 1);
 */
var cutString = 'Học JS tại F8'
console.log('Cắt chuỗi JS:', cutString.slice(4, 6))

console.log('Cắt chuỗi JS đến hết:', cutString.slice(4))


// Cắt từ trái sang phải
console.log('Cắt chuỗi JS từ trái -> phải:', cutString.slice(-9, -7))


// 4. Replace
// Ghi đè
var replaceTest = 'Học JS tại F8 JS';

// - Ghi đè 1 chuỗi
console.log('Ghi đè chuỗi JS -> Javascript: ', replaceTest.replace('JS', 'Javascript'))

// - Ghi đè nhiều chuỗi sử dụng biểu thức chính quy
console.log('Ghi đè chuỗi JS -> Javascript: ', replaceTest.replace(/JS/g, 'Javascript'))


// 5. Convert to upper case
var upperCaseTest = 'Học JS tại F8';
console.log('Chuyển thành chữ hoa: ', upperCaseTest.toLocaleUpperCase());


// 6. Convert to lower case
var lowerCaseTest = 'Học JS tại F8';
console.log('Chuyển thành chữ hoa: ', lowerCaseTest.toLocaleLowerCase());


// 7. Trim
// Loại bỏ kí tự khoảng trắng ở 2 đầu
var trimTest = '     Học JS tại F8  ';
console.log('Trim loại bỏ khoảng trắng: ', trimTest.trim());

// 8. Split
// Cắt một chuỗi thành Array dựa vào ĐIỂM CHUNG.
var languages = 'Javascript, PHP, Ruby';
console.log(languages.split(', '));

var language = 'Javascript';
console.log(language.split(''));

// 9. Get a character by index
// Lấy kí tự bởi 1 index cho trước
var characterByIndex = 'Nheo So Sweet';

// charAt trả về chuỗi rỗng khi index không tồn tại kí tự
console.log('Lấy kí tự ở index = 0 (charAt):', characterByIndex.charAt(0))
console.log('index không tồn tại (charAt):', characterByIndex.charAt(20))


// dùng ngoặc vuông []:  trả về Undefined khi index không tồn tại kí tự
console.log('Lấy kí tự ở index = 0 ([]):', characterByIndex[0])
console.log('index không tồn tại ([]):', characterByIndex[20])
