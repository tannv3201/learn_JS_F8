// Fetch : lấy dữ liệu từ backend
// API (URL): Application Programming Interface: cổng giao tiếp giữa các phần mềm

// Backend --> APT --> Fetch --> JSON
// JSON.parse --> JS types
// Render ra giao diện với HTML

var postAPI = 'https://jsonplaceholder.typicode.com/posts';

// response: phản hồi
fetch(postAPI)
    .then(function (response) {
        return response.json(); //JSON.parse: JSON -> JS type
    })
    .then(function (posts) {
        var htmls = posts.map(function (post) {
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`
        });
        var html = htmls.join('');
        document.getElementById('posts-block').innerHTML = html;
    });