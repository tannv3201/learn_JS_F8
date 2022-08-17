// Callback
/**
 - Là hàm
 - Được truyền qua đối số
 */
function myFunc(param) {
    param();
}
function myCallback(value) {
    console.log('value', value)
}
myFunc(myCallback)