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
    const store = JSON.parse(localStorage.getItem(key)) ?? {};

    const save = () => {
        localStorage.setItem(key, JSON.stringify(store));
    }

    const storage = {
        get(key) {
            return store[key];
        },
        set(key, value) {
            store[key] = value;
            save();
        },
        remove(key) {
            delete store[key];
            save();
        }
    }
    return storage;
}

// Profile.js
const ProfileSetting = createStorage('profile_setting')
console.log(ProfileSetting.get('fullName'))

ProfileSetting.set('fullName', 'Tan')
ProfileSetting.set('age', 21)
ProfileSetting.set('address', 'Ha Noi')


// 
function createApp() {
    const cars = [];
    return {
        add(car) {
            cars.push(car);
        },
        show() {
            console.log(cars);
        },
    }
}
const app = createApp();