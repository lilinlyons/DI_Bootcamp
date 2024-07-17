const products = require('./product');

console.log(products)

function returnData(name) {
    products.forEach(x => {
        if (x.name === name) {
            console.log(x);
            return x;
        }
    });
    return 'hello';
}

returnData('tomato')