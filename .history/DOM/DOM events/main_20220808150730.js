/**
 * @type {HTMLElement}
 */
/**
 * DOM:
  Là quy chuẩn mô tả mô hình của các thành phần trong tài liệu HTML được đưa ra bởi W3C.
 - DOM (Document Object Model) có 3 thành phần:
    1. Element
    2. Attribute
    3. Text
 */

/**
 * DOM API
 Là bộ API nằm trong Web API có mặt trên những môi trường hỗ trợ duyệt web - như trên trình duyệt. DOM API cung cấp các đối tượng và phương thức hỗ trợ truy xuất, chỉnh sửa các đối tượng / thành phần trong DOM.
 */

/**
 * JS cung cấp phương tiện truy xuất HTML DOM
 * JS: Brower | Server (NodeJS)
 * Brower: HTML -> DOM -> DOM API
 * API: Application Programming Interface
 */

/**
 * Document object
 */

// Get element methods
// ID
// var headingNode = document.getElementById('heading')
// console.log(headingNode)

// query selector 
var headingNode = document.querySelector('.box .heading-2:nth-child(2)')
console.log('querySelector', headingNode)

var headingNodes = document.querySelectorAll('.heading-2')
console.log('querySelectorAll', headingNodes)
console.log('querySelectorAll[]', headingNodes[0])

// Collection (a, form, images, ...)
console.log('document.forms[\'form1\']', document.forms['form1'])
console.log('document.forms', document.forms)
console.log('document.forms.form2', document.forms.form2)
console.log('document.anchors', document.anchors) // trả về các thẻ a có attribute name=""


// class: lấy ra số nhiều (mảng)
var subHeadingNodes = document.getElementsByClassName('sub-heading')
console.log('getElementsByClassName', subHeadingNodes)

// tag : tương tự như class
var tagName = document.getElementsByTagName('p')
console.log(tagName)


// Ví dụ
var boxNode =
    document.querySelector('.box-1');
// Công việc 1: sử dụng `boxNode`
console.log(boxNode)

// Công việc 2: sử dụng tới các li element là con của `.box-1`
console.log(boxNode.querySelectorAll('li'))
console.log(boxNode.querySelector('p'))

// 1. getElementById: trả về trực tiếp Element
// 2. getElementsByClassName: trả về HTMLCollection (mảng), muốn get Element phải dùng index []
console.log('querySelectorAll[]', headingNodes[0])
    // 3. getElementsByTagName: trả về HTMLCollection (mảng)
    // 4. querySelector: trả về trực tiếp Element
    // 5. querySelectorAll: trả về NodeList
    // 6. HTML Collection (form, a, images, ...)
console.log('document.forms', document.forms)
console.log('document.forms[\'form1\']', document.forms['form1'])
console.log('document.forms[O]', document.forms[0])
console.log('document.forms.form2', document.forms.form2)

// 7. document.write: in ra ngay sau khi được thực thi

//*******************************************************************

// Attribute node & Text node
// Được lấy ra từ node Element

// ******************************************************************
// DOM attributes

// seter: set giá trị bằng toán tử gán
var domAttr = document.querySelector('#dom-attr')
domAttr.title = 'heading' //chỉ xuất hiện khi js được thực thi
domAttr.className = 'className'
domAttr.href = '#'
console.log(domAttr)

// Set attribute không hợp lệ cho một Element nào đó (set tùy biến)
// setAttribute(tên attr, giá trị của attr)
domAttr.setAttribute('alt', '#')

// get value của attribute
// Được thêm HTML hay JS element tồn tại trong DOM -> đều có thể get được
// 
console.log(domAttr.getAttribute('id'))
console.log(domAttr.getAttribute('title'))
console.log(domAttr.title) // chỉ dùng khi attribute hợp lệ
domAttr.setAttribute('style', 'font-size:28px; color:red;')


// *****************************************************************
// InnerText vs textContent Property:

// innerText: là thuộc tính của ElementNode (phải đi qua Node này)
// innerText: 
// Chỉ lấy ra những gì hiển thị trên trình duyệt
// dùng ES6 ``. các khoảng cách sẽ chuyển thành thẻ <br>
var headingElement = document.querySelector('.heading-innertext')
console.log('inner Text: ', headingElement.innerText)
    // headingElement.innerText = 'New Heading' 

// textContent
// Bỏ qua các tag nhưng vẫn Lấy ra khoảng cách thực sự của Element, kể cả là css
// dùng ES6 ``. vẫn hiển thị khoảng cách nhưng HTML không hiểu 

console.log('text Content: ', headingElement.textContent)
headingElement.innerText = `
 <i>hshs</i>`
console.log('inner Text: ', headingElement.innerText)


// ******************************************************************
// Thêm attributeNode, textNode, Element vào trong 1 Element trong DOM
// innerHTML & outerHTML là 2 thuộc tính của ElementNode
// InnerHTML
var boxElement = document.querySelector('.box-element');
boxElement.innerHTML = '<h1 style="color:red;">Đây là inner HTML</h1>' //Thêm trực tiếp dưới dạng ElementNode, bỏ tag đi sẽ thành textNode
console.log(boxElement.querySelector('h1').innerText)

// OuterHTML

// Bài tập
var coursess = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    const ul = document.querySelector('ul');
    const output = courses.map((items) => {
            return `<li>${items}</li>`
        })
        // output.join('') có hoặc k đều được
    ul.innerHTML = output

}
render(coursess)

// ****************************************
// Node properties
console.log(boxElement.baseURI)

// *********************

// DOM Style: thuộc tính của Element node
var boxElement2 = document.querySelector('.box-element');


// CSS inline
Object.assign(boxElement2.style, {
    width: '100px',
    height: '100px',
    backgroundColor: 'red'
});

// CSS inline mới lấy ra thuộc tính được
console.log(boxElement2.style.width)


// *********************************************

// ClassList Property: thuộc tính của Element node
// Trả về 1 object, quản lý class của Element đang gọi tới
var boxClassList = document.querySelector('.box-classList')


// add: thêm class vào element
// Mỗi class cách nhau bằng ","
console.log(boxClassList.classList.add('red'))

// contains: kiểm tra class có nằm trong element không
console.log(boxClassList.classList.contains('red')); //trả về true/fasle

// remove: xóa class khỏi element
boxClassList.classList.remove('red');

// toggle: xóa thêm thao tác
// Kiểm tra xem có class không
// Nếu có thì gỡ bỏ, không có thì thêm vào :V
setInterval(() => {
    boxClassList.classList.toggle('red');
}, 2000)



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
// 1. Input / select
// 2. Key up / down