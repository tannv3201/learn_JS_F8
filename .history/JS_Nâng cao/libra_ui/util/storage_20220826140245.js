const TODOS_STORAGE_KEY = 'TODOS'
export default {
    get() {
        return JSON.parse(localStorage.getItem('TODOS_STORAGE_KEY')) || []
    }
}