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
            return value ? undefined : 'vui lòng nhật trường này';
        },
        email: function (value) {
            return value ? undefined : 'vui lòng nhật trường này';
        },
        min: function (value) {
            return value ? undefined : 'vui lòng nhật trường này';
        },
    }

    // Lấy ra form Element trong DOM theo cái `formSelector`
    var formElement = document.querySelector(formSelector);

    // Chử xử lý khi có element trong DOM
    if (formElement) {

        // Lấy các thẻ input có attribute là name và rules
        var inputs = formElement.querySelectorAll('[name][rules]');
        for (var input of inputs) {
            // Gán key của object bằng values của attribute của thẻ input
            formRules[input.name] = input.getAttribute('rules');
        }
        console.log(formRules);

    }
}