// Định nghĩa giá trị mặc định cho tham số
function logger(log, isAlert) {
    if (isAlert) {
        return alert(log);
    }
    console.log(log);
};

logger('bb', true);

// Định nghĩa ra hàm, biết trước hàm có những tham số không bắt buộc phải nhập.