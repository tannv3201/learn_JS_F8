// Filter
var courses = [
    {
        name: 'JS',
        coin: 2000
    },
    {
        name: 'PHP',
        coin: 1000
    },
    {
        name: 'Java',
        coin: 5000
    },
];
var filterCourses = courses.filter(function(course, index, array) {
    return course.coin > 700;
})