// Đối tượng `Validator`
function Validator(options) {
    var formElement = document.querySelector(options.form)
    console.log(options.rules);
    if (formElement) {

    }
}


// Định nghĩa các rules
Validator.isRequired = function () {
    return 1
}
Validator.isEmail = function () {
    return 2
}