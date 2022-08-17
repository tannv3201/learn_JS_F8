// Fake, mock API
// Postman
/**
    CRUD
    - Create: Tạo mới -> POST
    - Read: Lấy dữ liệu -> GET
    - Update: Chỉnh sửa -> PUT / PATCH
    - Delete: Xóa -> DELETE
 */

var listCoursesBlock = document.querySelector('#list-courses');
var courseAPI = 'http://localhost:3000/course';

function start() {
    getCourses(function (course) {
        console.log(course)
    })
}
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