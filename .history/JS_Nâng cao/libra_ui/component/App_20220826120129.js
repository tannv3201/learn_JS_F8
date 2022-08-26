import html from '../core.js';
import { connect } from '../store.js';

const connector = connect() //

function App({ cars }) {
    return html`<h1>Hehe</h1>
    `
}

export default connector(App);