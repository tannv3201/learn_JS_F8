// Filter
console.log('-------- filter2()--------')
Array.prototype.filter2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)){
            callback(this[index], index, this)
        }
    }
}

var courses = [
    {
        name: 'JS',
        coin: 300
    },
    {
        name: 'PHP',
        coin: 800
    },
    {
        name: 'Java',
        coin: 5000
    },
];
var filterCourses = courses.filter2(function(course, index, array) {
    console.log(course, index, array)
    // return course.coin > 700;
})
console.log(filterCourses)