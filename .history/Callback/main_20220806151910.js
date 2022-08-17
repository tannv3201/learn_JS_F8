// Callback
/**
 - Là hàm
 - Được truyền qua đối số
 - Được gọi lại (trong hàm nhận đối số)
 */
function myFunc(param) {
    if(typeof param == 'function') {
        param(123);
    }
}
function myCallback(value) {
    console.log('value', value)
}
myFunc(myCallback)

// Custom map2() same map()
Array.prototype.map2 = function(callback) {
    var output = [];
    var arrayLength = this.length;
    for (var i = 0; i < arrayLength; i ++) {
        var result = callback(this[i], i);
        output.push(result) ;
    }
    return output;
}
var courseCallback = [
    'JS',
    'PHP',
    'Java'
];

var htmls = courseCallback.map2(function(courseCallback) {
    return `<h2>${courseCallback}</h2>`
});
console.log(htmls.join(''))

// Empty elements of array ?
// forEach, find, filter, some, every, reduce
var courses2 = [
    'JS',
    'PHP',
]
courses2.length = 10;
console.log(courses2)