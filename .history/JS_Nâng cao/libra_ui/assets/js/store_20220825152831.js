import { createStore } from "./core.js";
import reducer from "./reduce.js";

const { attach, connect, dispatch } = createStore(reducer);

window.dispatch = dispatch;

export {
    attach,
    connect
}