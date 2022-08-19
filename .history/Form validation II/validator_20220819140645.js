function Validator(formSelector) {
    var formRules = {
        fullname: 'required', //Key là attr name của thẻ input
        email: 'required|email', //Key là attr name
    };
    // Lấy ra form Element trong DOM theo cái `formSelector`
    var formElement = document.querySelector(formSelector);

    // Chử xử lý khi có element trong DOM
    if (formElement) {
        var inputs = formElement.querySelectorAll('[name][rules]');
        for (var input of inputs) {
            formRules[input.name] = input.getAttribute('rules');
            console.log();
        }
    }
}