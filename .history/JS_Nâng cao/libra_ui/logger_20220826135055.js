export default function logger(reducer) {
    return (prevState, action, args) => {

        console.group(action);
        console.group('prevState', prevState);
        console.group('Action arguments', args);

        const nextState = reducer(prevState, action, args)
        console.group('nextState', nextState);
        console.groupEnd();
        return nextState
    }
}