// some
// trả về kết quả đúng hoặc sai
// Tối thiểu 1 kết quả đúng
Array.prototype.some2 = function(callback) {
    var output = false;
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], index, this)) {
                output = true;
                break;
            }
        }
    }
    return output; // duyệt cả vòng lặp không có giá trị true sẽ trả về false
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