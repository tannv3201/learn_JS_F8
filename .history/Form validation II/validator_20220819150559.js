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
                    console.log(ruleInfo[1]);
                }

                // Gán ruleFunc bằng các rule được loop từ rules
                var ruleFunc = validatorRules[rule];

                // Gán lại ruleFunc bằng ruleFunc được truyền giá trị là ruleInfo[1] (Truyền function thứ 2)
                if (isRuleHasValue) {
                    ruleFunc = ruleFunc(ruleInfo[1])
                }

                // console.log(rule);
                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc);
                } else {
                    // Đưa func vào mảng lần 1.
                    formRules[input.name] = [ruleFunc];
                }
            }


        }
    }
}