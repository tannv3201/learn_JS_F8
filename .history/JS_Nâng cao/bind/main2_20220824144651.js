
const $ = document.querySelector.bind(document);
const $$ = document.querySelector.bind(document);

const app = (() => {
    const cars = ['BMW'];

    return {
        add(car) {
            cars.push(car);
        },
        delete(index) {
            cars.splice(index, 1);
        },
        render() {
            const html = cars.map((car) => `
                <li>${car}</li>
            `).join('');
        }
    }
})();
