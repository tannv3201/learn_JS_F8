// Callback
/**
 - Là hàm
 - Được truyền qua đối số
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