// Fetch : lấy dữ liệu từ backend
// API (URL): Application Programming Interface: cổng giao tiếp giữa các phần mềm

// Backend --> APT --> Fetch --> JSON
// JSON.parse --> JS types
// Render ra giao diện với HTML

var postAPI = 'https://jsonplaceholder.typicode.com/posts';

// response
fetch(postAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (posts) {
        console.log(posts)
    })