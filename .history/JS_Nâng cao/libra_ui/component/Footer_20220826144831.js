import html from '../core.js';
import { connect } from '../store.js';


function Footer({ todos, filter, filters }) {
    return html`
    <footer class="footer">
        <span 
            class="todo-count">
                <strong>
                   ${todos.filter(filters.active).length}
                </strong>
                item left
        </span>
        <ul class="filters">
            ${Object.keys(filters).map(type => html`
            <li>
                <a class="${filter}" href="#">
                    ${type[0].toLocaleUpperCase() + type.slice(1)}
                </a>
            </li>
            `)}
        </ul>
        <button class="clear-completed">Clear completed</button>
    </footer>
    `
}

export default connect()(Footer);