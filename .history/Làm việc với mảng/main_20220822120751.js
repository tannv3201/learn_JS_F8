
// *******************************************************
// MẢNG : ARRAY
/*
    - Array có thể chứa tất cả các kiểu dữ liệu trong JS

 */
// 1. Tạo mảng
    // Cách 1
    var languages = [
        'Javascript',
        'Ruby',
        'PHP',
        null,
        undefined,
        function () {
            
        },
        {},
        123,
    ];
    console.log('Cách tạo Array 1:', languages)

    // Cách 2
    var languages2 = new Array(
        'Javascript',
        'Ruby',
        'PHP',
        null,
        undefined,
        function () {
            
        },
        {},
        123,
    )
    console.log('Cách tạo Array 2:', languages2)

    // Kiểm tra datatype
    console.log(Array.isArray(languages))


// 2. Truy xuất mảng
    // Đếm độ dài mảng
    console.log('Độ dài mảng: ', languages.length)

    // Lấy giá trị theo index
    console.log('Phần tử mảng ở vị trí 0: ', languages[0])


// LÀM VIỆC VỚI MẢNG (ARRAY)
var languagesArr = [
    'Javascript',
    'Ruby',
    'PHP',
];

    // 1. To string 
    // Dấu phẩy mặc định, không thể thay đổi
    console.log('toString: ', languagesArr.toString());

    // 2. join 
    // Thay đổi dấu ngăn cách giữa các phần tử
    console.log('join: ', languagesArr.join(' - '));


    // 3. Pop (Xóa đi phần tử cuối mảng & trả về phẩn tử
    //       đã xóa)
    // Trả về Undefined nếu mảng rỗng.
    var languagesPop = [
        'Javascript',
        'Ruby',
        'PHP',
    ];
    console.log('Xóa & trả về phần tử cuối Arr: ', languagesPop.pop());
    console.log('Sau khi Pop():', languagesPop)


    // 4. Push 
    // Thêm 1 or nhiều phần tử vào cuối mảng
    // Trả về độ dài mới của mảng

    var languagesPush = [
        'Javascript',
        'Ruby',
        'PHP',
    ];
    console.log('Push(): ', languagesPush.push('Dart', 'Dark', 'Bủh', 'Lmao'));
    console.log('Sau khi Push(): ', languagesPush);



    // 5. shift 
    // Xóa phần tử ở đầu mảng & trả về phần tử đã xóa
    var languagesShift = [
        'Javascript',
        'Ruby',
        'PHP',
    ];
    console.log('Shift(): ', languagesShift.shift());
    console.log('Sau khi Shift(): ', languagesShift);



    // 6. Unshift
    // - Thêm 1 or nhiều phần tử vào đầu mảng
    // - trả về độ dài mới của mảng
    var languagesUnShift = [
        'Javascript',
        'Ruby',
        'PHP',
    ];
    console.log('UnShift(): ', languagesUnShift.unshift('dark', 'bủh', 'lmao'));
    console.log('Sau khi UnShift(): ', languagesUnShift);

    // 7. Splicing
        // - xóa 1 phần tử bất kì
        var languagesSplicing = [
            'Javascript',
            'Ruby',
            'PHP',
        ];
        console.log('Xóa PHP splice(): ', languagesSplicing.splice(2, 2));
        console.log('Sau khi splice(): ', languagesSplicing);

        // - Chèn
        // splice(vị trí đặt con trỏ, số lượng muốn xóa, element truyền vào)
        var languagesSplicing2 = [
            'Javascript',
            'Ruby',
            'PHP',
        ];
        console.log('Xóa PHP splice(): ', languagesSplicing2.splice(1, 0, 'Dart', 'Java'));
        console.log('Sau khi splice(): ', languagesSplicing2);


    // 8. Concat 
    // Nối Array
    // Mảng nào gọi đến concat sẽ là mảng gốc và đứng trước
    var languagesConcat1 = [
        'Javascript',
    ];
    var languagesConcat2 = [
        'PHP',
    ];
    console.log('Nối Array concat: ', languagesConcat1.concat(languagesConcat2));


    // 9. Slicing
    // Cắt lấy phần tử
    // slice(vị trí bắt đầu cắt, vị trí kết thúc)
    var languagesSlicing = [
        'Javascript',
        'Ruby',
        'PHP',
    ];
    console.log('slice(1, 2)', languagesSlicing.slice(1, 2));
    console.log('slice(0) copy mảng', languagesSlicing.slice(0)); //copy mảng


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
        // Kiểm tra biểu thức điều kiện, nếu đúng mới chuyển sang phần tử tiếp theo, SAI dừng lại --> trả về False
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

    function calculateRating(arr) {
        var movie = arr.filter(function (a) {
        return a.Director === 'Christopher Nolan'
        }) // trả về array 4 phần tử phim của đạo diễn Nolan

        var total = movie.reduce(function(a, b) {
                return a + Number(b.imdbRating);
        }, 0);

    return total / movie.length
    };
    console.log(calculateRating(watchList)); // Output: 8.675
    
    // VD: reduce()
    // reduce(callback, initialValue)
    // Khi không truyền giá trị initialValue cho reduce thì biến tích trữ đầu tiên sẽ là phần tử đầu tiên của mảng, và currentValue sẽ là phẩn tử thứ 2 của mảng


    // Custom reduce2()
    Array.prototype.reduce2 = function (callback, result) {
        let i = 0
        if (arguments.length < 2) {
            i = 1;
            result = this[0]
        }
        for (; i < this.length; i++) {
            result = callback(result, this[i], i, this)
        }
        return result
    }
    const numbersReduce = [1, 2, 3, 4, 5];
    const result2 = numbersReduce.reduce2(function(total, number) {
        return total + number;
    });
    console.log(result2)

    // Bài tập
    var info = [
        ['name', 'Tân Nguyễn'],
        ['age', 18]
    ]

    Array.prototype.reduceCustom = function(callback, result) {
        for (let i = 0; i< this.length; i ++) {
            result = callback(result, this[i], i, this)
        }
        return result
    }
    function arrToObj(arr) {
        return arr.reduceCustom(function(info, key) {
            info[key[0]] = key[1]
            return info
        }, {})
    }
    console.log(arrToObj(info))



// String/Array includes('chuỗi', vị trí tìm kiếm) method
// Tìm kiếm trả về Boolean 
    // String includes
    console.log('String/Array includes() method')
    var title = 'Responsive web designe'
    // Kiểm tra trong chuỗi có từ gì đó không --> trả về false/true
    console.log(title.includes('web'))

    // Array includes 
    var courseF8 = [
        'JS', 
        'PHP',
    ]
    console.log(courseF8.includes('PHP', -1)) // Trả về true
    console.log(courseF8.includes('JS', 1)) // Trả về false (vị trí 1 k có)
    console.log(courseF8.includes('Ruby')) // Trả về false(không có)

