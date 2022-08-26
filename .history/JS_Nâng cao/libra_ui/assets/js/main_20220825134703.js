const cars = ['BMW', 'Porsche', 'Mercedes']

const output = `
    <ul>
    ${cars.map(car => `<li>${car}</li>`).join('')}
    </ul>
`

console.log(output)