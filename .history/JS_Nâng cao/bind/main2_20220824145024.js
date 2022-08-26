
const $ = document.querySelector.bind(document);
const $$ = document.querySelector.bind(document);

const app = (() => {
    const cars = ['BMW'];
    const root = $('#root');
    const input = $('#input');
    const submit = $('#submit');

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

            root.innerHTML = html;
        },
        // Function khoi tao
        init() {
            // Handle DOM events
            submit.onclick = function () {
                const car = input.value;
                this.add(car);
            }
            this.render();
        }
    }
})();

app.init()
