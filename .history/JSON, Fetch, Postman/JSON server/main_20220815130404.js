// JSON Server: Fake API Server

var courseAPI = 'http://localhost:3000/course';

fetch(courseAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (courses) {
        var courseBlock = document.getElementById('course-block');
        var htmls = courses.map(function (course) {
            return `
            <li>${course.name}</li>
            <li>${course.description}</li>
            `
        });
        courseBlock.innerHTML = htmls;
    })