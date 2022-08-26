import html from '../core.js';
import Header from './Header.js';
import TodoList from './TodoList.js';

function App() {
    return html`
    <section class="todoapp">
        ${Header()}
        ${}
    </section>
    `
}

export default (App);