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
console.log( JSON.stringify([
    'hehe',
    'haha',
    'hihi'
]));

var json1 = JSON.parse('["haha", "hehe"]');
var json2 = ['haha', 'hehe'];


console.log(typeof json1)
console.log(typeof json2)
console.log(json1 === json2) // false

// *******************************************
// Promise (sync, async )
// - sync  : đồng bộ
// - async : bất đồng bộ (setTimeout, setInterval, fetch, XMLHttpRequest, file reading, request animation frame)
// - Nỗi đau
// - Lý thuyết, cách hoạt động
// - Thực hành, ví dụ
// setTimeout(function() {
//     console.log(1);
// }, 1000);
// console.log(2);

// ***********************************************
// Promise (pain): Nỗi đau :V
// Callback hell
// 1 giây in ra số 1, sau đó in số 2, số 3
// setTimeout(function () {
//     console.log(1); // Việc 1
//     setTimeout(function () {
//         console.log(2); // Việc 2
//         setTimeout(function () {
//             console.log(3); // Việc 3
//             setTimeout(function () {
//                 console.log(4); // Việc 4
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// Pyramid of doom
// **************************
// promise concept
// Cách tạo ra 1 promise & hiểu cách hoạt động của nó
// B1: khởi tạo new Promise()
// B2: Excutor
// var promise = new Promise(
//     // Executor
//     function(resolve, reject) {
//         // Logic
//         // Thành công: resolve()
//         // Thất bại: 

//         // Fake call API
//         resolve();
//     }
//) //Object constructor

// trạng thái: 
//  - pending : Chưa giải quyết (rò rỉ bộ nhớ - memory leak)
//  - Fulfilled : Hoàn thành
//  - Reject : sai, phế phẩm


// promise 
//     .then(function() { // Trả về nếu thành công
//         console.log(1);
//     })
//     .catch(function() { // Bắt lỗi
//         console.log('Failure!');
//     })
//     .finally(function() { // Đều trả về cái này
//         console.log('Done!');
//     })

// Trả lời phỏng vấn
// Promise là khái niệm sinh ra để xử lý vấn đề về thao tác bất đồng bộ
// Trước khi sử dụng Promise thì hay dùng Callback và gặp vấn đề Callback hell
// Để tạo ra 1 Promise thì dùng từ khóa new Promise, trong constructor của nó truyền vào 1 executor function, trong excutor func khi nó thực thi sẽ nhận 2 tham số là resolve() - thành công & reject() - thất bại
// then() nhận callback func, thực thi khi promise được resolve() và lọt vào catch() khi nhận reject()

// ***************************
// Promise (chain) : chuỗi
// 

var promise2 = new Promise(
    // Executor function
    function(resolve, reject) {
        resolve();
    } 
);

promise2
    // nếu then không return giá trị là 1 promise sẽ chạy sang then tiếp theo

    .then(function() {
        // then kế tiếp phải chờ promise được giải quyết rồi mới được chạy
        // return lại 
        return new Promise(function(resolve) {
            setTimeout(function() {
                resolve([1, 2, 3])
            }, 3000)
        });
    })
    .then(function(data) {
        console.log(data);
        return 2;
    })
    .catch(function() { // Bắt lỗi
        console.log('Failure!');
    })
    .finally(function() { // Đều trả về cái này
        console.log('Done!');
    })

    // 
    function sleep(ms) {
        return new Promise(function(resolve) {
            setTimeout(resolve, ms);
        });
    }
    sleep(1000)
        .then(function() {
            console.log(1);
            return sleep(1000);
        })

