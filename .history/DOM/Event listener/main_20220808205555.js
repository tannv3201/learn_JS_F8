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
    // DOM events
    // btn.onclick = function() {
    //     console.log('Viec 1');
    //     console.log('Viec 2');
    //     alert('Viec 3');
    // }

    // Event listener
    function viec1() {
        console.log('Event 1')
    }
    btn.addEventListener('click',viec1)
    // removeEventListener
    setTimeout(function() {
        btn.removeEventListener('click', viec1);
    }, 3000);
// 2. Lắng nghe / hủy bỏ lắng nghe
