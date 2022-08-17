const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');
const panes = $$('.tab-pane');

tabs.forEach((tab, index) => {
    tab.onclick = function () {
        $('.tab-item.active').classList.remove('active')
        this.classList.add('active')
    }
});