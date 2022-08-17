// Định nghĩa giá trị mặc định cho tham số
function logger(log) {
    if (typeof log === 'undefined') {
        log = 'Gia tri mac dinh';
    }
    console.log(log);
};

logger();