// Spread:
// Giải trước toán tử object và array sẽ bỏ đi dấu ngoặc [] {}
var arr1 = ['JS', 'PHP', 'Java'];
var arr2 = ['ReactJS', 'NodeJS'];

// Nối arr1, arr2(arr2 trước)
var arr3 = [...arr2, ...arr1];
console.log(arr3);


// object
var obj1 = {
    name: ' JS',
}
var obj1 = {
    price: 1000,
}
var obj1 = {
    name: ' JS',
}