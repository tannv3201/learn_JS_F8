// some
// trả về kết quả đúng hoặc sai
// Tối thiểu 1 kết quả đúng

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
var someCourses = courses.some(courses.isFinish===true)
console.log(someCourses)