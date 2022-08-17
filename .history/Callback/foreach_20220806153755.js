// forEach

var courses = [
    'JS',
    'PHP',
    'Ruby',
];
// Đối số 1 : callback function
// Đối số 2: arguments
courses.forEach(function(course, index, array) {
    console.log(course, index, array)
});