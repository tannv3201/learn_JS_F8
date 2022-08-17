// forEach

var courses = [
    'JS',
    'PHP',
    'Ruby',
];
// Đối số 1 : callback function
// Đối số 2: arguments
courses.length = 1000
courses.forEach(function(course, index, array) {
    console.log(course, index, array)
});
// console.log(output)