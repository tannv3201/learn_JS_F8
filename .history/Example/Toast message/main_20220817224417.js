
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
        const icons = {
            info: 'fa-solid fa-circle-info',
            success: 'fa-solid fa-circle-check',
            warn: 'fa-solid fa-triangle-exclamation',
            error: 'fa-solid fa-circle-exclamation'
        };
        const icon = icons[type];

        toast.classList.add('toast', `toast--${type}`);
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
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
});
showSuccessToast
showErrorToast