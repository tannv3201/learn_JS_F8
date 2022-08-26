/**
   Từ khóa this trong JS đề cập đến đối tượng mà nó thuộc về

   ## Đặc tính:
      1. Trong một phương thức, `this` tham chiếu tới đối tượng truy cập phương thức (đối tượng trước dấu `.`)
      2. Đứng ngoài phương thức, `this` tham chiếu tới đối tượng Global

    ## Lưu ý:
       - `this` trong hàm tạo là đại diện cho đối tượng sẽ được tạo
       - `this` trong một hàm là undefined khi ở `strict mode`
       - Các phương thức bin(), call(), apply() có thể tham chiếu `this` tới đối tượng khác.
 */
// const iPhone7 = {
//     // property : mô tả thông tin
//     name: 'iPhone7',
//     color: 'Pink',
//     weight: 300,

//     // method: mô tả hành động thực hiện
//     takePhoto() {
//         console.log(this);
//     },

//     objChild: {
//         methodChild() {
//             console.log(this);
//         }
//     }
// }
// console.log(iPhone7.objChild.methodChild());

// function Car(name, color, weight) {
//     this.name = name;
//     this.color = color;
//     this.weight = weight;
//     this.run = function () {
//         console.log(this);
//     }

// }
// const mercedesS450 = new Car('Mercedes S450', 'black', 500);
// console.log(mercedesS450.run());


// const button = document.querySelector('button');

// button.onclick = function () {
//     console.log(this);
// }