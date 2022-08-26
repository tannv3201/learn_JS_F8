import { createStore } from "./core";
import reducer from "./reduce.js";

const { attach, connect, dispatch } = createStore(reducer);

window.dispatch = dispatch;

export {
    attach,
    connect
}