// Optional chaining
const obj = {
    name: 'Alice',
    cat: {
        name: 'Dinah',
        cat2: {
            name: 'Dinah2'
        }
    }
};

if (obj?.cat?.cat2) {
    console.log(obj.cat.cat2.name);
}