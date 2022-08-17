/**
 * @type {HTMLElement}
 */

// Event listener
    // 1. Event listener 
    // 2. JSON
    // 3. Fetch 
    // 4. DOM location
    // 5. Local Storage
    // 6. Session Storage 
    // 7. Coding convention
    // 8. Best practices
    // 9. Mistakes
    // 10. Performance

var btn = document.getElementById('btn');
console.log(btn) 
// 1. Xử lý nhiều việc khi 1 event xảy ra
    // DOM events: dùng lắng nghe 1 sự kiện nào đó, k có nhu cầu gỡ bỏ
    // btn.onclick = function() {
    //     console.log('Viec 1');
    //     console.log('Viec 2');
    //     alert('Viec 3');
    // }

    // Event listener: một sự kiện diễn ra mà muốn hủy bỏ nó trong một trường hợp cụ thể nào đó
    function viec1() {
        console.log('Event 1')
    }
    function viec2() {
        console.log('Event 2')
    }
    btn.addEventListener('click',viec1)
    btn.addEventListener('click',viec2)
    // removeEventListener: hủy bỏ lắng nghe cụ thể một sự kiện
    setTimeout(function() {
        btn.removeEventListener('click', viec1);
    }, 3000);
// 2. Lắng nghe / hủy bỏ lắng nghe
