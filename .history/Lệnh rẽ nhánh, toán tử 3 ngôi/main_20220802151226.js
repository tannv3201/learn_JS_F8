// Câu lệnh rẽ nhánh - If else
// Nếu điều kiện đúng thì luôn luôn lọt vào nhánh đầu, không kiểm tra các nhánh con lại
// Khi điều kiện sai thì kiểm tra các nhanh tiếp theo
// if...else: khi điều kiện sai thì lọt vào nhánh else
var date = 3;
if(date === 2) {
    console.log('Hôm nay là thứ 2')
}else if(date === 3) {
    console.log('Hôm nay là thứ 3')
}else if(date === 4) {
    console.log('Hôm nay là thứ 4')
}

// Lệnh rẽ nhánh Switch 
// Tính từ case đúng, kết quả sẽ lọt vào các case dưới đó cho tới khi gặp từ khóa "break"
var dateSwitch = 8;
switch(dateSwitch) {
    case 2: 
        console.log('Hôm nay là thứ 2');
        break; // thoát khỏi switch
    case 3: 
        console.log('Hôm nay là thứ 3');
        break; // thoát khỏi switch
    case 4: 
        console.log('Hôm nay là thứ 4');
        break; // thoát khỏi switch
    case 5: 
        console.log('Hôm nay là thứ 5');
        break; // thoát khỏi switch
    case 6: 
        console.log('Hôm nay là thứ 6');
        break; // thoát khỏi switch
    case 7: 
        console.log('Hôm nay là thứ 7');
        break; // thoát khỏi switch
    case 8: // Dùng toán tử === để so sánh
        console.log('Hôm nay là chủ nhật');
        break; // thoát khỏi switch        
    default: //Không có "break" nó vẫn lọt xuống default
        console.log('KHông bít')
}

/**
    1. If else:
    - Khi so sánh đúng sai, xuất hiện các toán tử >, <, =
    - < 3 case

    2. switch: 
    - Được cho trước các giá trị
    - > 3 case
 */

// *************************************************************
// TOÁN TỬ 3 NGÔI: ternary operator
var course = {
    name: 'JS',
    coin: 250,
}

// if(course.coin > 0) {
//     console.log(`${course.coin} Coins`)
// } else {
//     console.log('Miễn phí')
// }

// Nếu điều kiện ở vế thứ nhất đúng --> lấy kết quả ở vế thứ 2
var reuslt = course.coin > 0 ? `${course.coin} Coins` : 'Miễn phí';
console.log(reuslt)

var a = 1;
var b = 2;
var c = a > 0 ? a : b;
console.log(c);


// ****************************************************************
// Vòng lặp (Loop)
// 1. for - Lặp với điều kiện đúng: xây dựng đoạn mã lặp đi lặp lại theo 1 kịch bản.
    // In ra dãy số từ 1 --> 1000
    for(var i = 1; i <= 1000; i++) {
        console.log(i);
    }


// 2. for/in - Lặp qua key của đối tượng(Array, Object, String): 


// 3. for/of - Lặp qua value của đối tượng (Array, String)


// 4. while - Lặp khi điều kiện đúng ()


// 5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
// Lần đầu tiên chạy không quan tâm điều kiện.

