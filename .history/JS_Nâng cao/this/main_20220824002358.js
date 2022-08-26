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
const iPhone7 = {
    // property : mô tả thông tin 
    name: 'iPhone7',
    color: 'Pink',
    weight: 300,

    // method: mô tả hành động thực hiện
    takePhoto() {
        console.log('take a photo');
    }
}
console.log(iPhone7.takePhoto());