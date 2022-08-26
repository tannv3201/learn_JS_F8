const init = {
    todos: [
        {
            title: 'Learn JavaScript',
            completed: false,
        }, {
            title: 'Learn JavaScript',
            completed: false,
        },

    ]
}

export default function reducer(state = init, action, args) {
    switch (action) {
        default:
            return state;
    }
}