// forEach
console.log('------- forEach custom -------')
var courses = [
    'JS',
    'PHP',
    'Ruby',
];
// Đối số 1 : callback function
// Đối số 2: arguments
Array.prototype.forEach2 = function(callback) {
    for (var index in this) {
        // Kiểm tra key có nằm ở thuộc tính gần nhất hay không (không nằm trong prototype)
        // Nều không nằm trong thuộc tính gần nhất sẽ trả về false.
        if(this.hasOwnProperty(index)) {
           callback(this[index], index, this)
        }
    }
}

courses.forEach2(function(course, index, array) {
    console.log(course, index, array)
});
// console.log(output)