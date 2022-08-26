export default function logger(reducer) {
    return (prevState, action, args) => {
        console.group(action);

        const nextState = reducer(prevState, action, args)

        console.groupEnd(action);
        return nextState
    }
}