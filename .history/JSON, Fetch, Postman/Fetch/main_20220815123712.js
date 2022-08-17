// Fetch : lấy dữ liệu từ backend
// API (URL): Application Programming Interface: cổng giao tiếp giữa các phần mềm

// Backend --> APT --> Fetch --> JSON
// JSON.parse --> JS types
// Render ra giao diện với HTML

var postAPI = 'https://jsonplaceholder.typicode.com/posts';

// response
fetch(postAPI)
    .then(function (response) {
        var res = response.json();
        console.log('resjson', res);
        console.log('res', response)

        return res;
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