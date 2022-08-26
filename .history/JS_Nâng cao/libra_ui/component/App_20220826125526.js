import html from '../core.js';
import Header from './Header.js';

function App() {
    return html`
    <section class="todoapp">
        ${Header()}
    </section>
    <section class="main"></section>
    `
}

export default (App);