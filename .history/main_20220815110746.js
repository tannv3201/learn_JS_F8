var users = [
    {
        id: 1,
        name: 'Tân Nguyễn',
        age: 18
    },
    {
        id: 2,
        name: 'Quân Hồ',
        age: 18
    },
    {
        id: 3,
        name: 'Hiền Lê',
        age: 18
    },
]

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'hiền ơi !'
    },
    {
        id: 2,
        user_id: 2,
        content: 'hở'
    },
    {
        id: 3,
        user_id: 3,
        content: 'víp thế a Tân :v'
    }
]

// 1. Lấy comments
// 2. Từ comments lấy ra user_id, từ user_id lấy ra user tương ứng
// Fake API

function getComments() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(comments);
        }, 1000)
    })

}

function getUsersById(userIds) {
    return new Promise(function (resolve) {
        // Lọc ra user có Id tương ứng nằm trong list data
        var result = users.filter(function (user) {
            return userIds.includes(user.id);
        });
        setTimeout(function () {
            resolve(result);
        }, 1000);
    });
}



getComments()
    .then(function (comments) {
        console.log(comments)
        // Lấy ra list user trong comment
        var userIds = comments.map(function (comment) {
            return comment.user_id
        })
        return getUsersById(userIds)
            .then(function (users) {
                return {
                    users: users,
                    comments: comments,
                }
            })
    })
    .then(function (data) {
        var commentBlock = document.getElementById('comment-block');
        var htmls = '';

        // Lặp qua comment
        data.comments.forEach(function (comment) {
            // tìm ra comment và id tương ứng
            var user = data.users.find(function (user) {
                return user.id === comment.user_id;
            });
            htmls += `<li>${user.id} : ${comment.user_id}</li>`
        });

    })
