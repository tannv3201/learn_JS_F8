const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');
const panes = $$('.tab-pane');

const tabActive = $('.tab-item.active');
const line = $('.tabs .line')
console.log([line]);

line.style.left = tabActive.offsetLeft + 'px'
line.style.width = tabActive.offsetWidth + 'px'

tabs.forEach((tab, index) => {
    const pane = panes[index]
    tab.onclick = function () {
        // Remove class active
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')

        // Khi click thêm css cho đường line
        line.style.left = this.offsetLeft + 'px'
        line.style.width = this.offsetWidth + 'px'

        // Add class active khi click
        this.classList.add('active')
        pane.classList.add('active')
    }
});