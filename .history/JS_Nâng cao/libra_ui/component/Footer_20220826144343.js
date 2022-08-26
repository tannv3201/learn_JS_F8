import html from '../core.js';
import { connect } from '../store.js';


function Footer({ todos, filters }) {
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
            <li>
                <a class="selected" href="#">All</a>
            </li>
        </ul>
        <button class="clear-completed">Clear completed</button>
    </footer>
    `
}

export default connect()(Footer);