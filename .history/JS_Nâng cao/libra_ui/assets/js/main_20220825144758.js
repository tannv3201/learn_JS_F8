import html from "./core.js"

const cars = ['BMW', 'Porsche', 'Mercedes']

const output = html`
    <ul>
    ${cars.map(car => `<li>${car}</li>`).join('')}
    </ul>
`

console.log(output)