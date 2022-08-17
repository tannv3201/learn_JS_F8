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
    var btnCreate = document.querySelector('#btnCreate');
    if (btnCreate) {
        btnCreate.id = 'save';
        btnCreate.textContent = 'Lưu'
    }

    var txtNameCourse = document.querySelector('#text-name-' + id).textContent;
    var txtDescCourse = document.querySelector('#text-desc-' + id).textContent;

    document.querySelector('input[name="name"]').value =
        txtNameCourse;
    document.querySelector('input[name="description"]').value =
        txtDescCourse;

    var btnSave = document.querySelector('#save');
    btnSave.setAttribute('style', ' margin: 8px 0 0 100px;background-color: #0099ff;color: #fff;border: none;padding: 8px;border-radius: 2px;cursor: pointer;')
    btnSave.onclick = function () {
        var newNameCourse =
            document.querySelector('input[name="name"]').value;
        var newDescCourse =
            document.querySelector('input[name="description"]').value;

        var formNewData = {
            name: newNameCourse,
            description: newDescCourse
        }
        updateCourse(formNewData, id, function () {
        })
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
                <h2 id="text-name-${course.id}">${course.name}</h2>
                <p id="text-desc-${course.id}">${course.description}</p>
                <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
                <button onclick ="handleUpdateCourse(${course.id})">Sửa</button>
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