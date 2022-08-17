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

// /
var courseCallback = [
    'JS',
    'PHP',
    'Java'
];

courseCallback.map(function(courseCallback) {
    console.log(courseCallback)
});