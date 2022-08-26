const cars = ['BMW', 'Porsche', 'Mercedes']

const output = `
    <ul>
    <li>${cars.map(car => {
    `<li>${car}</li>`
})}
    </ul>
`

console.log(output)