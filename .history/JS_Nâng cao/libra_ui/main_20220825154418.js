import { attach } from "./store.js";
import App from "./app.js";
attach(() => '<h1>Hello world</h1>', document.getElementById('root'))