// IIFE - Immediately Invoked Function Expression
// Là 1 func Expression được gọi ngay lập tức

let fullName = 'NheoBB'

let i = 0
    // 2. Dùng ; trước IIFE
    ; (function () {

        console.log("NOW !");

    })()

// myFunc(); - SAI


// 3. IIFE là "private"
// 4. Sử dụng IIFE khi nào: sử dụng khi muốn đoạn mã chạy ngay, và không chui ra phạm vi Global

const app = (function () {
    // Private
    const cars = [];
    return {
        add(car) {
            cars.push(car);
        },
        edit(index, car) {
            cars[index] = car;
        },
        delete(index) {
            cars.splice(index, 1);
        }
    }
})

// 5. Cách tạo IIFE. 
