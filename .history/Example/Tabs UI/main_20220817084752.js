const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');
const panes = $$('.tab-pane');

tabs.forEach((tab, index) => {
    const pane = panes[index]
    tab.onclick = function () {
        console.log(pane);
        $('.tab-item.active').classList.remove('active')
        this.classList.add('active')
        thipanes.classList.add('active')
    }
});