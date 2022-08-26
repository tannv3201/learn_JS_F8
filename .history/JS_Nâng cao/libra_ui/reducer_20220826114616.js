// Nhận action xử lý reducer

const init = {
    cars: ['BMW']
}

export default function reducer(state = init, action, args) {
    switch (action) {
        case 'ADD':
            const newCar = args
            console.log([newCar])
            return {
                ...state,
                cars: [...state.cars, newCar]
            }
        default:
            return state;
    }
}