// JSON Server: Fake API Server

var courseAPI = 'http://localhost:3000/course';

fetch(courseAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (courses) {
        console.log(courses)
    })