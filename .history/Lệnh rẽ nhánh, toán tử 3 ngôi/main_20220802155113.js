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
    // In ra dãy số từ 1 --> 10
    for(var i = 1; i <= 10; i++) {
        // Bước 1. Chạy điều kiện: var i = 1 TRƯỚC KHI vòng for được chạy (duy nhất 1 lần)
        // Bước 2. Thực thi đoạn mã: i <= 10 (trả về true) --> thực thi đoạn mã trong dấu { console.log(i); }, in ra i = 1
        // Bước 3. Thực thi đoạn mã: i++ --> 1 + 1 = 2 --> quay lại kiểm tra điều kiện ở bước 2.
        // Đến khi i > 10, không thỏa mãn --> dừng lặp
        console.log(i);
    }

    // Ứng dụng lấy ra từng phần tử mảng
    var myArr = [
        'JS',
        'PHP',
        'Java',
    ];
    var arrLength = myArr.length;
    for(var i = 0; i < arrLength; i++) {
        console.log(myArr[i]);
    }

    // Tính tổng giá các khóa học
    var courses = [
        {
            name: 'JS',
            price: 40000,
        },
        {
            name: 'PHP',
            price: 60000,
        },
    ];

    var total = 0;
    var coursesLength = courses.length;
    function getTotal(courses) {
        for(var i = 0; i < coursesLength; i++) {
            total += courses[i].price;
        }
        return total;
    }
    console.log('Tổng tiền: ', getTotal(courses));


// 2. for/in - Lặp qua key của đối tượng(Array, Object, String): 
    var myInfo = {
        name: 'Tan',
        age: 21,
        address: 'Thai Binh',
    };

    for(var key in myInfo) {
        console.log(key)
    }

// 3. for/of - Lặp qua value của đối tượng (Array, String)


// 4. while - Lặp khi điều kiện đúng ()


// 5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
// Lần đầu tiên chạy không quan tâm điều kiện.

