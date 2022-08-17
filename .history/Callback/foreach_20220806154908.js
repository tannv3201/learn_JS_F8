// forEach

var courses = [
    'JS',
    'PHP',
    'Ruby',
];
// Đối số 1 : callback function
// Đối số 2: arguments
Array.prototype.forEach2 = function(callback) {
    for (var index in this) {
        
        console.log(index,this.hasOwnPrototype(index))
    }
}

courses.forEach2(function(course, index, array) {
    console.log(course, index, array)
});
// console.log(output)