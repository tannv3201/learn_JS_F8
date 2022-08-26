import { attach } from "./store.js";
import App from "./component/app.js";
attach(() => '<h1>Hello world</h1>', document.getElementById('root'))