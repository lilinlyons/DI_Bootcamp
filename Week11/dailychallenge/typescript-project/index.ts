

function processInput(input: number | string | boolean){
    if (typeof input == "number"){
        return input * input
    }
    else if (typeof input == "string"){
        return input.toUpperCase()

    }
    return !input

}


console.log(processInput(4))
console.log(processInput("hello"))
console.log(processInput(true))