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

// 
const obj2 = {
    getName(value) {
        console.log(value);
    }
};
console.log(obj2.getName(123));