export default function html([first, ...strings], ...values) {
    return values.reduce(
        function (acc, cur) {
            return acc.concat(cur, strings.shift()),
                [first]
        }
    ).join('');
}