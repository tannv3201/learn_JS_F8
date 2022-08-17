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

// 
Array.prototype.map2 = function(callback) {
    var arrayLength = this.length;
    for (var i = 0; i < arrayLength; i ++) {
        callback(this[i], i);
    }
}
var courseCallback = [
    'JS',
    'PHP',
    'Java'
];

courseCallback.map2(function(courseCallback, index) {
    console.log(index, courseCallback)
});