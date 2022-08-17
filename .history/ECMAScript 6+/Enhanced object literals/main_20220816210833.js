// 1. Định nghịa key value cho object
// 2. Định nghĩa method cho object
// 3. Định nghũa key cho object dưới dạng biến

var name = 'JS';
var price = 1000;

var course = {
    name,
    price,
    getName: function () {
        return name
    }
};

console.log(getName());