export default function logger(reducer) {
    return (prevState, action, args) => {
        const nextState = reducer(prevStatem actions, args)
    }
}