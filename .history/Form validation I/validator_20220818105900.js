// Đối tượng `Validator`
function Validator(options) {
    var formElement = document.querySelector(options.form)
    if (formElement) {
        options.rules.forEach(function (rule) {
            var inputElement =
                formElement.querySelector(rule.selector);
            var errorElement
                = inputElement.parentElement.querySelector('.form-message');
            if (inputElement) {
                inputElement.onblur = function () {
                    // giá trị người dùng nhập vào : inputElement.value
                    // Func test để kiểm tra: rule.test
                    var errorMessage =
                        rule.test(inputElement.value);

                    if (errorMessage) {
                        // Lấy thẻ cha của nó : inputElement.parentElement
                        errorElement.innerText = errorMessage;
                        inputElement.parentElement.add('invaild')
                    } else {
                        errorElement.innerText = '';
                    }
                }
            }
        });

    }
}


// Định nghĩa các rules
// Nguyên tắc của các rules: 
// 1. Khi có lỗi thì trả ra message lỗi
// 2. Khi hợp lệ, không trả ra cái gì cả (undefined)
Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này';
        }
    }
}
Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function () {
        }
    }
}