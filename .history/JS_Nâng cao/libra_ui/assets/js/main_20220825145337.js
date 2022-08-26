import html from "./core.js"

const cars = ['BMW', 'Porsche', 'Mercedes']
const isSuccess = false;

const output = html`
  <div class="card">
<h1></h1>
    <ul>
    ${cars.map(car => `<li>${car}</li>`).join('')}
    </ul>
`

console.log(output)