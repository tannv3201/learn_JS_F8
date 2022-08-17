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
console.log(headingNode)

var headingNode = document.querySelectorAll('.heading-2')
console.log(headingNode[0])

// Collection
console.log(document.forms['form-1'])
console.log(document.forms)


// class: lấy ra số nhiều
var subHeadingNodes = document.getElementsByClassName('sub-heading')
console.log(subHeadingNodes)

// tag 
var tagName = document.getElementsByTagName('p')
console.log(tagName)

