export const TYPE_LOG = 'log'
export const TYPE_warn = 'warn'
export const TYPE_error = 'error'
function logger(log, type = 'log') {
    console[type](log);
}
export default logger