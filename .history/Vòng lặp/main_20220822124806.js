// So sánh
const arr = ['a', 'b', 'c'];

// for và for/in cho phép bạn truy cập vào index của mảng chứ không phải là phần tử thực tế
// --> thế nên bạn cần sử dụng arr[i] để lấy giá trị:

for (let i = 0; i < arr.length; ++i) {
    console.log(arr[i]);
  }
  
  for (let i in arr) {
    console.log(arr[i]);
  }

// forEach() và for/of bạn có thể truy cập trực tiếp đến giá trị của phần tử
// forEach() cho phép bạn truy cập đến index của phần tử(for/of thì không.)
arr.forEach((v, i) => console.log(v));

for (const v of arr) {
  console.log(v);
}

  

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
    // Object
    var myInfo = {
        name: 'Tan',
        age: 21,
        address: 'Thai Binh',
    };
    for(var key in myInfo) {
        console.log(myInfo[key])
    }

    // Array
    var arrForInArr = [
        'JS',
        'PHP',
        'Java',
    ];
    for(var key in arrForInArr) {
        console.log(arrForInArr[key])
    }

    // String
    var arrForInStr = 'Javascript';
    for(var key in arrForInStr) {
        console.log(arrForInStr[key])
    }

    // Ví dụ: 
    var Student = {
        name: 'Tan',
        age: 21,
    };

    function run(student) {
        var arr = [];
        var i = 0;
        for(var key in student) {
            arr[i++] = `Thuộc tính ${key} có giá trị ${student[key]}`
            console.log(student[key]);
        }
        return arr;
    }

    console.log(run(Student));

// 3. for/of - Lặp qua value của đối tượng (Array, String)
    // Lấy phần tử của 1 Array
    var arrForOf = [
        'JS',
        'PHP',
        'Java',
    ];
    for (var value of arrForOf) {
        console.log(value)
    }

    // lấy kí tự của 1 string
    var stringForOf = 'Javascript';
    for (var value of stringForOf) {
        console.log(value);
    }

    // Object
    var objectForOf = {
        name: 'Tan',
        age: 21,
    };
    // for (var value of Object.keys(objectForOf)) {
    //     console.log(objectForOf[value]);
    // }
    for (var value of Object.values(objectForOf)) {
        console.log(value);
    }


// 4. while - Lặp khi điều kiện đúng ()
    // In ra dãy chữ số từ 1 --> 10
    var iW = 0;
    while (iW < 10) {
        iW++; // Không được quên
        console.log(iW)
    }

    // Array
    var arrWhile = [
        'JS',
        'PHP',
        'Java',
    ];
    var iArrW = 0;
    while(iArrW < arrWhile.length) {
        console.log(arrWhile[iArrW]);
        iArrW++;
    }

// 5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
// Lần đầu tiên chạy không quan tâm điều kiện.
    // In ra dãy số tăng dần từ 1 --> 10
    var iDW = 0;
    do {
        iDW++;
        console.log(iDW)
    } while (iDW < 10);

    // Nạp thẻ
    var iNapThe = 0;
    var isSuccess = false;
    do {
        iNapThe++;
        console.log('Nạp thẻ lần: ' + iNapThe)

        // Thành công
        if (false) {
            isSuccess = true;
        }
        console.log(isSuccess)
    } while (!isSuccess && iNapThe < 3);


// Break & Continue trong vòng lặp
    // In ra từ 1 --> 10
    for (var i = 0; i < 10; i++) {
        console.log(i)

        // Chỉ cho in ra đến 5
        if(i >= 5) {
            break; // Thoát khỏi vòng lặp
        }
    }

    // Continue
    for (var i = 0; i < 10; i++) {
        // Nếu i chia cho 2 không dư (số chẵn)
        // --> in ra số chẵn
        if (i%2 !== 0) {
            continue;
        }
        console.log(i)
    }

// Vòng lặp lồng nhau - Nested loop
    var arrNestedLoop = [
        [1, 2],
        [3, 4],
        [5, 6],
    ];
    for (var i = 0; i < arrNestedLoop.length; i++) {
        for (var j = 0; j < arrNestedLoop[i].length; j++) {
            console.log(arrNestedLoop[i][j])
        }
    }

// Một số ví dụ về lòng lặp
    // in dãy số 100 --> 1
    for (var i = 100; i > 0; i--) {
        console.log(i);
    }

    // in ra 1 --> 100 bước nhảy 5
    for (var i = 0; i <= 100; i += 5) {
        console.log(i);
    }

    // in ra 100 --> 1 bước nhảy 5
    for (var i = 100; i > 0; i -= 5) {
        console.log(i);
    }

