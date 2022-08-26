// Nhận action xử lý reducer

const init = {
    cars: ['BMW']
}

export default function reducer(state = init, action, args) {
    console.log(action, args)

    switch (action) {
        default:
            return state;
    }
}