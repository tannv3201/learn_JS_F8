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
getComments()
    .then(function (comments) {
        console.log(comments)
    })
