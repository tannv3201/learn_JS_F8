export default function html([first, ...strings], ...values) {
    return values.reduce(
        (acc, cur) => {
            return acc.concat(cur, strings.shift()),
                [first]
        }
    ).join('');
}