import html from '../core.js';
import { connect } from '../store.js';

const connector = connect()

function App(props) {
    console.log(props)
    return html`
    <ul>

    </ul>>
    `
}

export default connector(App);