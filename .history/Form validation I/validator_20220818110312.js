// Đối tượng `Validator`
function Validator(options) {

    // Hàm thực hiện validate
    function validate(inputElement, rule) {
        // giá trị người dùng nhập vào : inputElement.value
        // Func test để kiểm tra: rule.test
        var errorMessage =
            rule.test(inputElement.value);
        var errorElement
            = inputElement.parentElement.querySelector('.form-message');

        if (errorMessage) {
            // Lấy thẻ cha của nó : inputElement.parentElement
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        } else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid')
        }
    }
    // Lấy Element của form
    var formElement = document.querySelector(options.form)
    if (formElement) {
        options.rules.forEach(function (rule) {
            var inputElement =
                formElement.querySelector(rule.selector);

            if (inputElement) {
                inputElement.onblur = function () {
                    validate(inputElement, rule);
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