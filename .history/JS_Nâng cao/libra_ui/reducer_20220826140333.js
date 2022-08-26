import storage from "./util/storage.js"

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
    add({ todos }, title) {
        todos.push({ title, completed: false })
    }
}

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args)
    return state;
}
