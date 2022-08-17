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

// Function render
function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses');
    var htmls = courses.map(function (course) {
        return `
            <li>
                <h4>${course.name}</h4>
                <p>${course.description}</p>
            </li>
        `
    });
    listCoursesBlock.innerHTML = htmls.join('');
}

// function handle Create Form
function handleCreateForm() {
    var createBtn = document.querySelector('#btnCreate');
    createBtn.onclick = function () {
        var name = document.querySelector('input[name="name"]').value;
        console.log(name)
    }
}