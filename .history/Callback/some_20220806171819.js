// some
// trả về kết quả đúng hoặc sai
// Tối thiểu 1 kết quả đúng
console.log('------ some() -------')
Array.prototype.some2 = function(callback) {
    // var output = false;
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], index, this)) {
                return true;
                // output = true;
                // break;
            }
        }
    }
    return false; // duyệt cả vòng lặp không có giá trị true sẽ trả về false
    // return output;
}

var courses = [
    {
        name: 'JS',
        coin: 300,
        isFinish: false,
    },
    {
        name: 'PHP',
        coin: 800,
        isFinish: true,
    },
    {
        name: 'Java',
        coin: 5000,
        isFinish: false,
    },
];
var someCourses = courses.some2(function(course, index, array) {
    return course.isFinish === true;
});
console.log(someCourses)