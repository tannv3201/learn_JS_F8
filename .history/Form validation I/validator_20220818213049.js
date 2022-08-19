// Đối tượng `Validator`
function Validator(options) {
    // 
    function getParent() {

    }

    // Lưu trữ rule được lặp qua
    var selectorRules = {};

    // Hàm thực hiện validate
    function validate(inputElement, rule) {
        // giá trị người dùng nhập vào : inputElement.value
        // Func test để kiểm tra: rule.test
        var errorMessage;
        var errorElement
            = inputElement.parentElement.querySelector(options.errorSelector);

        // Lấy ra các rules của selector
        // Nếu có lỗi thì dừng việc kiểm tra
        var rules = selectorRules[rule.selector];
        // Lặp qua  từng rule & kiểm tra
        for (let i = 0; i < rules.length; i++) {
            errorMessage = rules[i](inputElement.value)
            if (errorMessage) {
                break;
            }
        }

        if (errorMessage) {
            // Lấy thẻ cha của nó : inputElement.parentElement
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        } else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid')
        }
        return !errorMessage;
    }
    // Lấy Element của form cần validate
    var formElement = document.querySelector(options.form)
    if (formElement) {

        // Bỏ đi hành động mặc định submit form
        formElement.onsubmit = function (e) {
            e.preventDefault();

            var isFormValid = true

            // Lặp qua từng rule và validate
            options.rules.forEach(function (rule) {
                var inputElement =
                    formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) { // Nếu
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                // Trường hợp submit với JS
                if (typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]:not([disabled])')
                    // Biến nodelist input nhận được thành array
                    var formValues = Array.from(enableInputs).reduce(function (values, input) {
                        values[input.name] = input.value;
                        return values;
                    }, {})
                    options.onSubmit(formValues);
                }
                // Trường hợp submit với hành vi mặc định
                else {
                    formElement.submit();

                }
            }
        }

        // Lặp qua mỗi rule và xử lý (lắng nghe blur, input)
        options.rules.forEach(function (rule) {
            // Lưu lại các rules cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                // Nếu là mảng :
                selectorRules[rule.selector].push(rule.test)
            } else {
                // Nếu không là mảng : gán cho nó 1 cái mảng có phần tử đầu tiên là rule .
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElement =
                formElement.querySelector(rule.selector);

            if (inputElement) {
                // Xử lý trường hợp blur khỏi input
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }
                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function () {
                    var errorElement
                        = inputElement.parentElement.querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid')
                }
            }
        });
    }
}


// Định nghĩa các rules
// Nguyên tắc của các rules: 
// 1. Khi có lỗi thì trả ra message lỗi
// 2. Khi hợp lệ, không trả ra cái gì cả (undefined)
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : message || 'Vui lòng nhập trường này';
        }
    }
}
Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Trường này phải là Email';
        }
    }
}

Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập mật khẩu tối thiểu ${min} kí tự.`
        }
    }
}

Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác'
        }
    }
}