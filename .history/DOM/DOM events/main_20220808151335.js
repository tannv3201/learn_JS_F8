/**
 * @type {HTMLElement}
 */
/**

// ******************************************************
// DOM events: là sự kiện diễn ra trong DOM, là hành vi diễn ra của người dùng tương tác với website. Ngoài ra các hành vi của trình duyệt.
console.log('DOM events')

// 1. Attribute event: cách để lắng nghe các sự kiện diễn ra
// Event: click
// <h1 onclick="console.log(this)">DOM events</h1>

// 2. Assign event using the element node: GÁN
var h1Element = document.querySelectorAll('.dom-events h1')

for (let i = 0; i < h1Element.length; i++) {
    h1Element[i].onclick = function(e) {
        console.log(e.target)
    }
}

// Example DOM events
// 1. Input / select: 
// 2. Key up / down: