// Fake, mock API
// Postman
/**
    CRUD
    - Create: Tạo mới -> POST
    - Read: Lấy dữ liệu -> GET
    - Update: Chỉnh sửa -> PUT / PATCH
    - Delete: Xóa -> DELETE
 */

var courseAPI = 'http://localhost:3000/course';

function start() {
    getCourses(renderCourses);
    handleCreateForm();
}

// start web.
start();

// Fucntions
// Get
function getCourses(callback) {
    fetch(courseAPI)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

// Func Create course
function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    }
    fetch(courseAPI, options)
        .then(function (response) {
            response.json();
        })
        .then(callback)
}

// Func Delete course
function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    }
    fetch(courseAPI + '/' + id, options)
        .then(function (response) {
            response.json();
        })
        .then(function () {
            var document.querySelector('.course-item-' + id);

        });
}

// Function render
function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses');
    var htmls = courses.map(function (course) {
        return `
            <li class="course-item-${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onclick="handleDeleteCourse(${course.id})">&times; Xóa</button>
            </li>
        `
    });
    listCoursesBlock.innerHTML = htmls.join('');
}

// function handle Create Form
function handleCreateForm() {
    var createBtn = document.querySelector('#btnCreate');
    createBtn.onclick = function () {
        var name =
            document.querySelector('input[name="name"]').value;
        var description =
            document.querySelector('input[name="description"]').value;

        var formData = {
            name: name,
            description: description
        };
        createCourse(formData, function () {
            getCourses(renderCourses);
        });
    }
}