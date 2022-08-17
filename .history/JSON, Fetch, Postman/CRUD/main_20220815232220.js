var coursesAPI = 'http://localhost:3000/course';

// GET: lấy ra danh sách khóa học
function getCourses(callback) {
    fetch(coursesAPI)
        .then(function (response) {
            return response.json();
        })
        .then(callback)
}

// Method POST: Tạo mới một khóa học
function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    }

    fetch(coursesAPI)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

// Handle Create: Xử lý thêm mới khóa học
function handleCreateCourse() {
    var btnCreate = document.querySelector('#btnCreate');
    btnCreate.onclick = function () {
        var nameCourse =
            document.querySelector('input[name="name"]').value;
        var descCourse =
            document.querySelector('input[name="description"]').value;
        var formData = {
            name: nameCourse,
            description: descCourse
        }
    }
}

// Render giao diện
function renderHTML(courses) {
    var listCoursesBlock = document.querySelector('#list-courses');
    var htmls = courses.map(function (course) {
        return `
            <li>
                <h2>${course.name}</h2>
                <p>${course.description}</p>
            </li>
        `
    });
    listCoursesBlock.innerHTML = htmls.join('')
}

// Func được chạy khi truy cập website
function start() {
    getCourses(renderHTML);
    handleCreateCourse();
}

start();