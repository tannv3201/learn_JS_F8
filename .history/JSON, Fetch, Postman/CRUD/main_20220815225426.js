var coursesAPI = 'http://localhost:3000/course';

function getCourses(callback) {
    fetch(coursesAPI)
        .then(function (response) {
            return response.json();
        })
        .then(callback)
}

function renderHTML(courses) {
    var listCoursesBlock = document.querySelector('#list-courses');
    var htmls = courses.map(function (course) {
        return `
            <li>$
                <h2>${course.name}</h2>
                <p>${course.description}</p>
            </li>
        `
    });
    listCoursesBlock.innerHTML = htmls.join('')
}

function start() {
    getCourses(renderHTML);
}

start();