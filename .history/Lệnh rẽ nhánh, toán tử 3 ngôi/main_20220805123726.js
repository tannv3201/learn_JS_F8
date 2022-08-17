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

// Làm việc với MẢNG - Phần 2

// Array Method:
//  1. forEach() : Duyệt qua từng phần tử của mảng
    var arrCoursesForEach = [
        {
            name: 'JS',
            price: 40000,
        },
        {
            name: 'PHP',
            price: 60000,
        },
    ];
    console.log('forEach'); 
    arrCoursesForEach.forEach(function(course, index) {
        console.log(index, course);
    }); //Call back

//  2. every() : Kiểm tra tất cả phần tử của mảng thỏa mãn điều kiện gì đó --> trả về kiểu Boolean
// Tất cả phần tử phải thỏa mãn điều kiện gì đó --> trả về true
// 1 phần tử không thỏa mãn --> trả về false và dừng vòng lặp

    var arrCoursesEvery = [
        {
            name: 'JS',
            price: 40000,
        },
        {
            name: 'PHP',
            price: 60000,
        },
        {
            name: 'Java',
            price: 0,
        },
    ];
    console.log('every()')
    var isFreeEvery = arrCoursesEvery.every(function(course, index) {
        // Lặp qua từng phần tử của mảng
        // Mỗi lần lặp qua 1 phần tử sẽ gọi lại hàm đã truyền và truyền cho hàm đó tham số
        // Kiểm tra biểu thức điều kiện, nếu đúng mới chuyển sang phần tử tiếp theo, sai dừng lại --> trả về False
        return course.price === 0;
    }); //Call back
    console.log(isFreeEvery)

//  3. some() : chỉ cần 1 phần tử thỏa mãn điều kiện --> trả về True & dừng lặp
    var arrCoursesSome = [
        {
            name: 'JS',
            price: 40000,
        },
        {
            name: 'PHP',
            price: 60000,
        },
        {
            name: 'Java',
            price: 0,
        },
    ];
    console.log('some()')
    var isFreeSome = arrCoursesSome.some(function(course, index) {
        // Lặp qua từng phần tử của mảng
        // Mỗi lần lặp qua 1 phần tử sẽ gọi lại hàm đã truyền và truyền cho hàm đó tham số
        // Kiểm tra biểu thức điều kiện, nếu đúng mới chuyển sang phần tử tiếp theo, sai dừng lại --> trả về False
        return course.price === 0;
    }); //Call back
    console.log(isFreeSome)

//  4. find() : tìm kiếm
// Nếu tìm được --> trả về phần tử đó & dừng, nếu không trả về Undefined 
// Chỉ tìm ra được 1 phần tử
    var arrCoursesFind = [
        {
            name: 'JS',
            price: 40000,
        },
        {
            name: 'PHP',
            price: 60000,
        },
        {
            name: 'Java',
            price: 0,
        },
        {
            name: 'JS',
            price: 0,
        },
    ];
    console.log('Find()')
    var courseFind = arrCoursesFind.find(function(course, index) {
        return course.name === 'JS'
    });
    console.log(courseFind)
//  5. filter() : Tìm kiếm và trả về tất cả các phần tử được tìm kiếm
    console.log('Filter()')
    var courseFilter = arrCoursesFind.filter(function(course, index) {
            return course.name === 'JS'
    });
    console.log(courseFilter)

//  6. map()
// Chỉnh sửa, thay đổi phần tử của mảng
    var arrCoursesMap = [
        {
            name: 'JS',
            coin: 40000,
        },
        {
            name: 'PHP',
            coin: 60000,
        },
        {
            name: 'Java',
            coin: 0,
        },
        {
            name: 'JS',
            coin: 0,
        },
    ];
    console.log('Map(): ');
    // Thay đổi tên khóa học, thêm key price
    // Trong map() phải có đối số là 1 Function
    var courseHandler = function(course, index, originArray) {
        return {
            name: `Khoa hoc: ${course.name}`,
            coin: course.coin,
            price: `Gia: ${course.coin}`,
            index: index,
        }
    };
    var newCoursesMap = arrCoursesMap.map(courseHandler);
    console.log(newCoursesMap)

    // Return HTML test
    var courseHandlerHTML = function(course, index) {
        return `<h2>${course.name}</h2>`
    };
    var newCoursesMapHTML = arrCoursesMap.map(courseHandlerHTML);
    console.log(newCoursesMapHTML.join(' '))


//  8. reduce()
// Nhận về tổng số tiền của khóa học
    var arrCoursesReduce = [
        {
            name: 'JS',
            coin: 40000,
        },
        {
            name: 'PHP',
            coin: 60000,
        },
        {
            name: 'Java',
            coin: 0,
        },
        {
            name: 'JS',
            coin: 0,
        },
    ];
    console.log('reduce()');
    var i = 0;
    function coinHandler(accumulator, currentValue, currentIndex, originArray) {
        i ++;
        var total = accumulator + currentValue.coin;
        console.table({
            'Lượt chạy: ': i,
            'Biến tích trữ: ': accumulator, // được gán = giá trị khởi tạo
            'Giá khóa học: ': currentValue.coin,
            'Tích trữ được: ': total,
        });
        // console.log('currentValue', currentValue)
        return total; //Lần chạy thứ 2 trả về kết quả của Return
    }
    var totalCoin = arrCoursesReduce.reduce(coinHandler, 0) // 0: giá trị khởi tạo
    console.log(totalCoin)

    // Ví dụ Reduce()
    var reduceTest = [
        {
            name: 'JS',
            coin: 40000,
        },
        {
            name: 'PHP',
            coin: 430000,
        },
    ];

    var totalCoins = reduceTest.reduce(function(total, course) {
        return total + course.coin;
    }, 0); // Muốn kết quả in ra là gì thì giá trị khởi tạo có kiểu dữ liệu đó
    console.log(totalCoins);

    // VD: Tính tổng với reduce()
    var numbers = [100, 200, 300, 500];
    var totalNumber = numbers.reduce(function(totalNumber, number) {
        return totalNumber + number;
    }, 0); // Kết quả vẫn trả về kiểu dữ liệu mong muốn thì không cần truyền initial value.
    console.log(totalNumber)

    // VD: Flat - Làm phẳng mảng từ Depth array - Mảng sâu
    var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

        // Dùng For
        var newArr = [];
        for (var a in depthArray) {
            newArr = newArr.concat(depthArray[a])
        }
        console.log(newArr)

        // Dùng reduce()
        var flatArray = depthArray.reduce(function(flatOutput, depthItem) {
            return flatOutput.concat(depthItem);
        }, []);
        console.log(flatArray)
    
    // VD: Lấy ra các khóa học đưa vào một mảng mới
    var topics = [
        {
            topic: "Front-end",
            courses: [
                {
                    id: 1,
                    title: "HTML, CSS"
                },
                {
                    id: 2,
                    title: 'Javascript'
                }
            ]
        },
        {
            topic: "Back-end",
            courses: [
                {
                    id: 1,
                    title: "PHP"
                },
                {
                    id: 2,
                    title: 'NodeJS'
                }
            ]
        }
    ];

    var newCoursesTopic = topics.reduce(function(course, topic) {
        return course.concat(topic.courses)
    }, []);
    console.log(newCoursesTopic)

    var htmls = newCoursesTopic.map(function(course) {
        return `
            <div>
                <h2>Title: ${course.title}</h2>
                <p>ID: ${course.id}</p>
            </div>
        `;
    })
    console.log(htmls.join(''))

    // 
    function calculateRating (arr) {
        var findDirector = arr.filter(function (movies) {
            return movies.Director === "Christopher Nolan";
        });
        // return findDirector;
    
        var sumImdbRangting = findDirector.reduce(function (total, listImdbRangting){
            return total + parseFloat(listImdbRangting.imdbRating);
        }, 0)
        // return sumImdbRangting;
        var lengthWatchesList = findDirector.length;
        
        var averageImdbRangting = sumImdbRangting / lengthWatchesList;
        return averageImdbRangting;
    }
    console.log(calculateRating (watchList));
    var watchList = [
        {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        },
        {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        },
        {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        },
        {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        },
        {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        }
    ];