// IIFE - Immediately Invoked Function Expression
// Là 1 func Expression được gọi ngay lập tức

let fullName = 'NheoBB'

let i = 0
    // 2. Dùng ; trước IIFE
    ; (function myFunc() {
        i++
        console.log(i);
    })()

// myFunc(); - SAI


// 3. IIFE là "private"
