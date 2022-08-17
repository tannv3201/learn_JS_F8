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
console.log(subHeadingNodes)

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

// 1. getElementById (trả về trực tiếp Element)
// 2. getElementsByClassName
// 3. getElementsByTagName
// 4. querySelector (trả về trực tiếp Element)
// 5. querySelectorAll


