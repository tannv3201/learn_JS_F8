// every ()
// Trả về true/false: 
// Kiểm tra tất cả phẩn tử phải thỏa mãn điều kiện
console.log('------ every() -------')

Array.prototype.every2 = function(callback) {
    var output = true;
    for ( var index in this ) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (!result) {
                output = false;
                break;
            }
        }
    }
    return output;
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
        isFinish: true,
    },
    {
        name: 'Java',
        coin: 5000,
        isFinish: true,
    },
];

var resultEvery = courses.every2(function(course, index, array) {
    return course.isFinish === true;
});
console.log(resultEvery)