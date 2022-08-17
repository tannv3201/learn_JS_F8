var coursesAPI = 'http://localhost:3000/course';

function getCourses(callback) {
    fetch(coursesAPI)
        .then(function (response) {
            return response.json();
        })
        .then(callback)
}

function renderHTML(courses) {
    var listCoursesBlock = document.querySelector('#list-courses')
}