// Đối tượng `Validator`
function Validator(options) {
    var formElement = document.querySelector(options.form)
    console.log(options.rules);
    if (formElement) {

    }
}


// Định nghĩa các rules
Validator.isRequired = function (selector) {
    return {
        selector: selector,
    }
}
Validator.isEmail = function (selector) {
    return selector
}