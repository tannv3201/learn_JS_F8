import html from "./core.js"

const cars = ['BMW', 'Porsche', 'Mercedes']
const isSuccess = true;

const output = html`
    <h1>${}</h1>
    <ul>
    ${cars.map(car => `<li>${car}</li>`).join('')}
    </ul>
`

console.log(output)