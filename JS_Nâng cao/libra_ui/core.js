export default function html([first, ...strings], ...values) {
    return values.reduce(
        (acc, cur) => acc.concat(cur, strings.shift()),
        [first]
    )
        .filter(x => x && x !== true || x === 0)
        .join('')
}

export function createStore(reducer) {
    let state = reducer(); // Set giá trị mặc định đầu tiên

    const roots = new Map(); //Chứa những gốc Element để render ra view.
    // Map: có tính chất lặp qua, đặt key của nó bằng bất kì kiểu dữ liệu gì.

    // Render ra view
    function render() {
        for (const [root, component] of roots) {
            const output = component()
            root.innerHTML = output
        }
    }

    return {
        // Nhận view -> đẩy ra html
        attach(component, root) {
            roots.set(root, component)
            // set -> key: root, value: component
            render() //
        },

        // Kết nối store với view
        connect(selector = state => state) {
            return component => (props, ...args) =>
                component(Object.assign({}, props, selector(state)), ...args)
        },
        // Gửi hành động
        dispatch(action, ...args) {
            state = reducer(state, action, args)
            render()
        }
    }

}