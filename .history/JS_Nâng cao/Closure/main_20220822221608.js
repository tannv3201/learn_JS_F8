/**
    # Closure
        - Là một hàm có thể ghi nhớ nơi nó được tạo và truy cập được biến ở bên ngoài phạm vi của nó

    # Ứng dụng
        - Viết code ngắn gọn hơn
        - Biểu diễn, ứng dụng tính Private trong OOP
 
    # Lưu ý:
        - Biến được tham chiếu (refer) trong closure sẽ không được xóa khỏi bộ nhớ khi hàm cha thực thi xong
        - Các khái niệm JS nâng cao rất dễ gây nhầm lẫn
 */

function createCounter() {
    let counter = 0;

    function increase() {
        return ++counter;
    }
    return increase
}

const counter1 = createCounter();
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());



// Ứng dụng
function createLogger(namespace) {
    function logger(message) {
        console.log(`[${namespace}] ${message}`);
    }

    return logger;
}
// ============ App ==============
// Register.js
// const infoLogger = createLogger('Info')
// infoLogger('Bắt đầu gửi mail');
// infoLogger('Gửi mail lỗi lần 1, thử gửi lại');
// infoLogger('Gửi mail thành công');

// Forgot password
// const errorLogger = createLogger('Error')
// errorLogger('Bắt đầu gửi mail');
// errorLogger('Gửi mail lỗi lần 1, thử gửi lại');
// errorLogger('Gửi mail thành công');

// ================================================
// LocalStorage
function createStorage(key) {
    const store = JSON.parse(localStorage.getItem.get(key)) ?? {};

    const storage = {
        get(key) {
            return store[key];
        }
    }
}