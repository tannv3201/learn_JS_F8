
// toast function
function toast({
    title = '',
    message = '',
    type = 'info',
    duration = 3000
}) {
    const main = document.get('toast');
}

toast({
    title: 'Success',
    message: 'Bạn đã tạo thành công tài khoản tại F8',
    type: 'success',
    duration: 3000,
})