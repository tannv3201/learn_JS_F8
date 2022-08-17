//destructing

/**
 * destructing là một cách thuận tiện để lấy giá trị ra khỏi mảng và object.Có những khác biệt nhỏ giữa cấu trúc mảng và đối tượng
 *
 */
//destructing Object

const course = {
    name: 'Javascript',
    price: 10000,
};

// let name1 = course.name; //Javascript
// let price = course.price; //Javascript
// console.log(name1);
// console.log(price);
//sử dụng destructing để hủy cấu trúc các object

let { name, price } = course;
console.log(name); //Javascript
console.log(price); //Javascript
// Bây giờ 1 tên biến đã được sử dụng,chúng ta không thể khai báo lại biến( đặc biệt bếu dùng let hoặc const)

// let name = 'Javascript';
// let course = {
//   name: 'devlopers',
// };
// let { name } = course; //SyntaxError: Identifier 'name' has already been declared
//nếu bạn gặp phải trường hợp trên,bạn có thể 'đổi tên các biến trong cấu trúc lại bằng dấu (:)'

let name = 'Javascript';
let course = {
    name: 'devlopers',
};
let { name: courseName } = course;
console.log(courseName); //devlopers
//Nếu bạn cố gắng cấu trúc 1 biến  không chưa trong đối tượng .nó chỉ trả vè undefined

// let course = {
//   name: 'Javascript',
// };
// let { package } = course;
// console.log(package); //undefined
//bạn có thể đùng tham số mặc định default paramenters cho các biên của mình
let course = {
    name: 'Javascript',
};
let { package = 'full coures' } = course;
console.log(package); //full coures

//rest parameter
/**
 * Có nghĩa là lấy phần tử còn lại của nội dung đóng gói thành 1 mảng. Nó chuyển đổi danh sach cascas đối được phân tách bằng dấu phẩy thành 1 mảng
 * trong Es5,chúng tôi phụ thuộc vào biến argumnets bát cứ khi nào chúng tôi phải xử lý 1 hàm có số lượng biến không xác định. Biến argument này là một symbol giống 1 mảng
 *
 */
function sum() {
    let argsArr = Array.prototype.slice.call(arguments);
    return argsArr.reduce((acc, arg) => acc + arg, 0);
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9)); //45

//với rest Param
const sum = (...args) => args.reduce((acc, arg) => acc + arg, 0);
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9)); //45

//rest parameter trong destructing
let scores = [12, 32, 543, 6, 768, 79456];

let [fist, second, ...restOfScores] = scores;
console.log(fist); //12

console.log(second); //32
console.log(...restOfScores); //543 6 768 79456
  //tài liệu mình tham khảo trên mạng