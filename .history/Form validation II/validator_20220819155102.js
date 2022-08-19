function Validator(formSelector) {
    var formRules = {
        // fullname: 'required', //Key là attr name của thẻ input
        // email: 'required|email', //Key là attr name
    };

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
            return regex.test(value) ? undefined : message || 'Email không hợp lệ';
        },
        min: function (min) {
            return function (value) {
                return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} kí tự`;
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
        }

        // Hàm thực hiện validate
        function handleValidate(event) {
            var rules = formRules[event.target.name];
            var errorMessage;
            rules.find(function (rule) {
                errorMessage = rule(event.target.value)

                console.log(event.target.value);
                return errorMessage;
            });
        }
    }
}