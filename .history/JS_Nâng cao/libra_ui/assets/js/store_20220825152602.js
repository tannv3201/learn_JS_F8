import { createStore } from "./core.js";
import reduce from "./reduce.js";

const { attach, connect, dispatch } = createStore(reducer);