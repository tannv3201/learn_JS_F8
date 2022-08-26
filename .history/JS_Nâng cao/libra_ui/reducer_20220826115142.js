// Nhận action xử lý reducer

const init = {
    cars: ['BMW', 'Vinfast']
}

export default function reducer(state = init, action, args) {
    switch (action) {
        case 'ADD':
            const newCar = args
            console.log(args)
            return {
                ...state,
                cars: [...state.cars, newCar]
            }
        default:
            return state;
    }
}