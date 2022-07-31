
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

