const init = {
    todos: [
        {
            title: 'Learn JavaScript',
            completed: false,
        },
        {
            title: 'Learn HTML/CSS',
            completed: true,
        },

    ]
}

const actions = {
    add({ todo }, title) {
        todo.push({ title, completed: false })
    }
}

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args)
    return state;
}
