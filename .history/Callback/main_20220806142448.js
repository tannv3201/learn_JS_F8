// Callback
/**
 - Là hàm
 - Được truyền qua đối số
 */
function myFunc(param) {
    console.log(typeof param)
}
function myCallback(value) {
    console.log('value', value)
}
myCallback(123)
// myFunc(myCallback)