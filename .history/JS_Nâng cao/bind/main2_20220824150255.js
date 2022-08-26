
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
            const html = cars.map((car, index) => `
                <li>
                ${car}
                <span class="delete" data-index="${index}">&times</span>
                </li>
            `).join('');

            root.innerHTML = html;
        },

        handleDelete(e) {
            const deleteBtn = e.target.closest('.delete');
            console.log(deleteBtn)
        },

        // Function khoi tao
        init() {
            // Handle DOM events
            submit.onclick = () => {
                // Arrrow function khong co context
                const car = input.value;
                this.add(car);
                this.render();

                input.value = null;
                input.focus();
            }
            root.onclick = this.handleDelete
            this.render();
        }
    }
})();

app.init()
