// Exercise 1


function compareToTen(num) {
    return new Promise((resolve, reject) => {
        if (num <= 10) {
            resolve("The number is less than or equal to 10");
        } else {
            reject("The number is greater than 10");
        }
    });
}


compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error))


compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error))



// Exercise 2
const timer = new Promise((resolve) => {
    setTimeout(() => {
        resolve("success")
    }, 4000)
});

timer.then(message => {
        console.log(message)
    })


// Exercise 3


function checkNum(num) {
    if (Number.isInteger(num)) {
        return Promise.resolve("This is an integer");
    }
    else{
        return Promise.reject("This is not an integer")
    }
}


checkNum(15).then(result => console.log(result))
checkNum('Boo!').then(result => console.log(result))


