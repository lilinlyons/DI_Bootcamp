function makeAllCaps(arr) {
    newArray = []
    if (arr.every(i => typeof i === "string")) {
        arr.forEach((item) =>{newArray.push(item.toUpperCase())

    })
        return Promise.resolve(newArray);
    }
    else{
        return Promise.reject(`The array contains a value that is not a string`)
    }
}


makeAllCaps(['hello', 'how', 'are', 'you']).then(result => console.log(result))
makeAllCaps(['hello', 8, 'are', 'you']).then(result => console.log(result))


function sortWords(arr) {
    if (arr.length > 4 && arr.every(word => word === word.toUpperCase())) {
            return Promise.resolve(arr.sort());
    }
    else{
        return Promise.reject(`The array length is smaller than 4 or the words aren't all upper case.`)
    }
}


sortWords(['HELLO', 'MY', 'NAME', 'IS', 'LILI' ]).then(result => console.log(result))
sortWords(['HELLO', 'my', 'NAME', 'IS', 'LILI' ]).then(result => console.log(result))
sortWords(['HELLO', 'my', 'NAME', 'IS' ]).then(result => console.log(result))

