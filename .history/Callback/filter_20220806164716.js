// Filter
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
var filterCourses = courses.filter(function(course, index, array) {
    return course.coin > 700;
})
console.log(filterCourses)