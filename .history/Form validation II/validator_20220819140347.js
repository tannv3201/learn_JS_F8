function Validator(formSelector) {
    var formRules = {};
    // Lấy ra form Element trong DOM theo cái `formSelector`
    var formElement = document.querySelector(formSelector);

    // Chử xử lý khi có element trong DOM
    if (formElement) {
        var inputs = formElement.querySelectorAll('[name][rules]');
        console.log(inputs);
    }
}