// Arrow function

const logger = (log) => {
    console.log(log)
};

logger('hehe')

const sum = (a, b) => a + b;
console.log(sum(2, 2));

const sum2 = (a, b) => ({ a: a, b: b })