// some
// trả về kết quả đúng hoặc sai
// Tối thiểu 1 kết quả đúng
Array.prototype.some2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], index, this)) {
                return true;
            }
        }
    }
    return false;
}

var courses = [
    {
        name: 'JS',
        coin: 300,
        isFinish: true,
    },
    {
        name: 'PHP',
        coin: 800,
        isFinish: false,
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