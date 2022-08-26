
const $ = document.querySelector.bind(document);
const $$ = document.querySelector.bind(document);

const app = (() => {
    const cars = ['BMW'];
    const root = $('#root');

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
            this.render();
        }
    }
})();

app.init()
