function Validator(formSelector) {
    var _this = this;
    var formRules = {
        // fullname: 'required', //Key là attr name của thẻ input
        // email: 'required|email', //Key là attr name
    };

    // Lấy thẻ cha chứa input
    function getParent(element, selector) {
        // 
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    /**
     * Quy ước tạo rules:
     * - Nếu có lỗi thì return `errorMessage`
     * - Nếu không có lỗi return `undefined`
     */

    // Định nghĩa rules
    var validatorRules = {
        required: function (value) {
            return value ? undefined : 'vui lòng nhập trường này';
        },
        email: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Email không hợp lệ';
        },
        min: function (min) {
            return function (value) {
                return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} kí tự`;
            }
        },
        max: function (max) {
            return function (value) {
                return value.length <= max ? undefined : message || `Vui lòng nhập tối đa ${max} kí tự`;
            }
        },
    };

    var ruleName = 'required';

    // Lấy ra form Element trong DOM theo cái `formSelector`
    var formElement = document.querySelector(formSelector);

    // Chử xử lý khi có element trong DOM
    if (formElement) {

        // Lấy các thẻ input có attribute là name và rules
        var inputs = formElement.querySelectorAll('[name][rules]');
        for (var input of inputs) {

            // Tách
            var rules = input.getAttribute('rules').split('|');
            for (var rule of rules) {

                var ruleInfo;
                // Kiểm tra func có dấu `:` là rule cần value
                var isRuleHasValue = rule.includes(':');

                // Kiểm tra nếu func có `:` thì tách thành array, sau đó lấy phần tử đầu tiên (function đầu tiên)
                if (isRuleHasValue) {
                    ruleInfo = rule.split(':');
                    rule = ruleInfo[0];
                }

                // Gán ruleFunc bằng các rule được loop từ rules
                var ruleFunc = validatorRules[rule];
                // Nếu là rule cần value thì gán lại ruleFunc =  ruleFunc được thực thi với giá trị truyền vào là ruleInfo[1]
                // ruleInfo[1]: là phần tử thứ 2 trong mảng rule được split [min, 6]
                if (isRuleHasValue) {
                    ruleFunc = ruleFunc(ruleInfo[1])
                }
                // Nếu formRules (của input có name) là array thì push rule
                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc);
                } else {
                    // Lần 1 không phải array nên phải xét nó là 1 array
                    // Đưa func required vào array
                    formRules[input.name] = [ruleFunc];
                }
            }
            // Lắng nghe sự kiện để validate (blur, change, ...)
            input.onblur = handleValidate;
            input.oninput = handleClearError;
        }

        // Hàm thực hiện validate
        function handleValidate(event) {
            var rules = formRules[event.target.name];
            var errorMessage;

            for (var rule in rules) {
                errorMessage = rule(event.target.value)
                if (errorMessage) {
                    break;
                }
            }

            // Nếu có lỗi thì hiển thị message lỗi ra UI
            if (errorMessage) {
                var formGroup = getParent(event.target, '.form-group');
                if (formGroup) {
                    formGroup.classList.add('invalid');
                    var formMessage = formGroup.querySelector('.form-message');
                    if (formMessage) {
                        formMessage.innerText = errorMessage;
                    }
                }
            }
            return !errorMessage;
        }

        // Hàm clear message lỗi
        function handleClearError(event) {
            // Lấy ra formGroup
            var formGroup = getParent(event.target, '.form-group');

            // Nếu formGroup có class `invalid`
            if (formGroup.classList.contains('invalid')) {

                // Xóa class `invalid`
                formGroup.classList.remove('invalid');

                // Gán errorMessage = chuỗi rỗng
                var formMessage = formGroup.querySelector('.form-message');
                if (formMessage) {
                    formMessage.innerText = '';
                }
            }
        }
    }
    // Xử lý hành vi submit form
    formElement.onsubmit = function (event) {
        event.preventDefault();



        var inputs = formElement.querySelectorAll('[name][rules]');
        var isValid = true;

        for (var input of inputs) {
            if (!handleValidate({ target: input })) {
                isValid = false;
            }
        }

        // Khi không có lỗi thì submit form
        if (isValid) {
            if (typeof _this.onSubmit == 'function') {
                var enableInputs = formElement.querySelectorAll('[name]:not([disabled])')
                // Biến nodelist input nhận được thành array
                var formValues = Array.from(enableInputs).reduce(function (values, input) {
                    // Xử lý khi input có type:checkbox và radio
                    switch (input.type) {
                        case 'radio':
                            values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                            break;
                        case 'checkbox':
                            if (!input.matches(':checked')) {
                                values[input.name] = '';
                                return values;
                            }

                            if (!Array.isArray(values[input.name])) {
                                values[input.name] = [];
                            }
                            values[input.name].push(input.value);
                            break;
                        case 'file':
                            values[input.name] = input.files;
                        default:
                            values[input.name] = input.value
                    }
                    return values;
                }, {})
                // gọi lại hàm onSubmit và trả về giá trị được nhập từ input
                _this.onSubmit(formValues);
            } else {
                formElement.submit();
            }
        }
    }
}