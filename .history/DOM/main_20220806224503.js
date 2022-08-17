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
console.log('querySelectorAll[]',headingNodes[0])

// Collection (a, form, images, ...)
console.log('document.forms[\'form1\']',document.forms['form1'])
console.log('document.forms',document.forms)
console.log('document.forms.form2', document.forms.form2)
console.log('document.anchors',document.anchors) // trả về các thẻ a có attribute name=""


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
console.log('querySelectorAll[]',headingNodes[0])
// 3. getElementsByTagName: trả về HTMLCollection (mảng)
// 4. querySelector: trả về trực tiếp Element
// 5. querySelectorAll: trả về NodeList
// 6. HTML Collection (form, a, images, ...)
console.log('document.forms',document.forms)
console.log('document.forms[\'form1\']',document.forms['form1'])
console.log('document.forms[O]',document.forms[0])
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
domAttr.setAttribute('style','font-size:28px; color:red;')


// *****************************************************************
// InnerText vs textContent Property

// innerText
var headingElement = document.querySelector('.heading-innertext')
console.log('inner Text: ',headingElement.innerText)
console.log('text Content: ',headingElement.textContent)

// textContent