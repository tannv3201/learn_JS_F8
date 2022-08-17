/**
 * @type {HTMLElement}
 */


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
// onchang: bỏ focus input mới thay đổi giá trị
// oninput: thay đổi giá trị khi nhập
var inputValue;
var inputElement = document.querySelector('input[type="text"]');
inputElement.oninput = function(e) {
    inputValue = e.target.value;
    console.log(inputValue)
}

// checkbox
var checkboxElement = document.querySelector('input[type="checkbox"]');
checkboxElement.onchange = function(e) {
    console.log(e.target.checked) // kiểm tra check hay chưa :v
};

// select 
var selectElement = document.querySelector('select');
selectElement.onchange = function(e) {
    console.log(e.target.value) // kiểm tra xem mày chọn cái nào
};


// 2. Key up / down: 
var inputKeyUpDownElement = document.querySelector('.key-up-down');
inputKeyUpDownElement.onkeyup = function(e) {
    console.log(e.target.value) // kiểm tra check hay chưa :v
    switch (e.which) {
        case 27:
            alert('Bạn có muốn thoát không ?')
    }
};

// PreventDefault and StopPropagation

// 1. preventDefault: Loại bỏ hành vi mặc định của trình duyệt
var aElements = document.querySelectorAll('a')
for (var i = 0; i < aElements.length; i++) {
    aElements[i].onclick = function(e) {
        console.log(e.target.href)
        if (!e.target.href.startsWith('https://f8.edu.vn')) {
            e.preventDefault(); //Nếu chứa URL thì hành vi mặc định được thực thi, nếu không chứa thì không thực thi
        }
    }
}

// Search input
var ulElement = document.querySelector('ul');
ulElement.onmousedown = function(e) {
    e.preventDefault();
};
ulElement.onclick = function(e) {
    console.log(e.target)
};

    
// 2. stopPropagation: Loại bỏ sự kiện nổi bọt