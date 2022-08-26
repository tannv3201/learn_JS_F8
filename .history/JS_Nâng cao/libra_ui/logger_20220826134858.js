export default function logger(reducer) {
    return (prevState, action, args) => {
        console.group(action);

        const nextState = reducer(prevState, action, args)
        return nextState
    }
}