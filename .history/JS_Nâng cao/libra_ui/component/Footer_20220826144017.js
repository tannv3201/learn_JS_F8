import html from '../core.js';
import { connect } from '../store.js';


function Footer() {
    return html`
    <footer class="footer">
        <ul class="filters">
            <li>
                <a class="selected" href="#/">All</a>
            </li>
            <li>
                <a href="#/active">Active</a>
            </li>
            <li>
                <a href="#/completed">Completed</a>
            </li>
        </ul>
        <button class="clear-completed">Clear completed</button>
    </footer>
    `
}

export default Footer;