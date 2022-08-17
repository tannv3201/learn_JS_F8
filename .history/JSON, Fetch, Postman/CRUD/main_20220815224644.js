var coursesAPI = 'http://localhost:3000/course';

fetch(coursesAPI)
    .then(function (response) {
        return response.json();
    })