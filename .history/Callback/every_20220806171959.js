// every ()
// Trả về true/false: 
// Kiểm tra tất cả phẩn tử phải thỏa mãn điều kiện
console.log('------ every() -------')

Array.prototype.every2 = function(callback) {
    for ( var index in this ) {
        if (this.hasOwnProperty(index)) {

        }
    }
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
        isFinish: false,
    },
];

var resultEvery = courses.every(function(course, index, array) {
    return course.isFinish;
});
console.log(resultEvery)