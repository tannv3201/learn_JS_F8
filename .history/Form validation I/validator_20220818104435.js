// Đối tượng `Validator`
function Validator(options) {
    var formElement = document.querySelector(options.form)
    if (formElement) {
        options.rules.forEach(function (rule) {
            console.log(rule.selector)
        })
    }
}


// Định nghĩa các rules
Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function () {

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