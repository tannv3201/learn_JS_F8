// Đối tượng `Validator`
function Validator(options) {
    var formElement = document.querySelector(options.form)
    if (formElement) {
        options.rules.forEach(function (rule) {
            var inputElement =
                formElement.querySelector(rule.selector);
            if (inputElement) {
                inputElement.onblur = function () {
                    // value : inputElement.value
                    // Test func: rule.test
                    var errorMessage =
                        rule.test(inputElement.value);

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