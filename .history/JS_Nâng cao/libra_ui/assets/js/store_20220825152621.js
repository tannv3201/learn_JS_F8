import { createStore } from "./core.js";
import reducer from "./reduce.js";

const { attach, connect, dispatch } = createStore(reducer);

export {
    attach,
    connect
}