
// toast function
function toast({
    title = '',
    message = '',
    type = 'info',
    duration = 3000
}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');
        toast.classList.add('toast');
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="fa-solid fa-circle-info"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">Info</h3>
                <p class="toast__msg">Máy vi tính kết nối mạng</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;
        main.appendChild(toast); // Đưa toast vào main 
    }
}

toast({
    title: 'Success',
    message: 'Bạn đã tạo thành công tài khoản tại F8',
    type: 'success',
    duration: 3000,
})