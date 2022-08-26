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
    add(state, title) {

    }
}

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args)
    switch (action) {
        case 'add':
            const [title] = args;
            return {
                ...state,
                todos: [...state.todos, {
                    title,
                    completed: false
                }]
            }
        default:
            return state;
    }
}