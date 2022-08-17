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

    fetch(coursesAPI, options)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

// Method PUT: chỉnh sửa khóa học
function updateCourse(data, id, callback) {
    var options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    }

    fetch(coursesAPI + '/' + id, options)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

// Func xử lý Update
function handleUpdateCourse(id) {
    var btnUpdate = document.querySelector('.btnUpdate');
    btnUpdate.onclick = function () {
        var textName = document.querySelector('.text-name-' + id);

        console.log(textName)
        var textDescription = document.querySelector('.text-desc-' + id).textContent;

        document.querySelector('input[name="name"]').value = `${textName}`
        document.querySelector('input[name="description"]').value = `${textDescription}`
    }



}

// Method DELETE: Xóa 1 khóa học
function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    }

    fetch(coursesAPI + '/' + id, options)
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
        createCourse(formData, function () {
            getCourses(renderHTML); // Render lại giao diện sau khi thêm mới
        })
    }
}

// Render giao diện
function renderHTML(courses) {
    var listCoursesBlock = document.querySelector('#list-courses');
    var htmls = courses.map(function (course) {
        return `
            <li class="course-item-${course.id}">
                <h2 class="text-name-${course.name}">${course.name}</h2>
                <p class="text-desc-${course.description}">${course.description}</p>
                <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
                <button id="btnUpdate" onclick="handleUpdateCourse(${course.id})">Cập nhật</button>
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