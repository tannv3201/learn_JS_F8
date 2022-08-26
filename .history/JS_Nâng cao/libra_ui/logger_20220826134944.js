export default function logger(reducer) {
    return (prevState, action, args) => {
        console.group(action);
        console.group('prevState', prevState);
        console.group('nextState', nextState);

        const nextState = reducer(prevState, action, args)

        console.groupEnd();
        return nextState
    }
}