
const prompt=require("prompt-sync")({sigint:true});

// Exercise 1

function displayNumbersDivisible(){
    var i = 0
    var sum = 0
    console.log("Outcome: ")
    while(i < 500){
        if (i % 23 === 0){
            console.log(i)
            sum += i
        }
        i++

    }
    console.log("Sum: " + sum)
}

displayNumbersDivisible()


// Exercise 2
const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}

shoppingList = ['banana', 'orange', 'apple']

function myBill(list, prices, stock){
    price = 0
    for (let item of list){
        if (item in stock){
            price += prices[item]
            stock[item] = --stock[item]
            console.log()

        }
    }
    return price

}

console.log(myBill(shoppingList, prices, stock))


// Exercise 3
function changeEnough(itemPrice, amountOfChange){
    for (let index = 0; index < amountOfChange.length; index++) {
        if (index === 0){
            amountOfChange[index] *= 0.25
        }
        else if (index === 1){
            amountOfChange[index] *= 0.1
        }
        else if (index === 2){
            amountOfChange[index] *= 0.05
        }
        else if (index === 3){
            amountOfChange[index] *= 0.01
        }

    }
    let sum = 0;
    for (let i = 0; i < amountOfChange.length; i++) {
        sum += amountOfChange[i];
    }
    console.log(sum)
    return sum >= itemPrice;


}

changeEnough(4.25, [25, 20, 5, 0])



// Exercise 4
function hotelCost(){
    const question = "How many nights would you like to stay in a hotel?"
    let answer = "";
    while (answer.trim() === "") {
        answer = prompt(question);
    }
    let hotel_fee = 140 * answer
    return hotel_fee;

}


function planeRideCost(){
    const question = "What location would you like to fly to?"
    let answer = 0;
    while (typeof answer !== 'string') {
        answer = prompt(question);
    }
    if (answer === 'London'){
        return 183

    }
    else if (answer === 'Paris'){
        return 220

    }
    else {
        return 300
    }


}

function rentalCarCost(){
    const question = "How many days would you like to rent a car for? "
    let answer = "";
        while (answer.trim() === "" || !/^\d+$/.test(answer)) {
        answer = prompt(question);
    }
    if (answer > 10){
        fee = (40 * answer) * 0.95

    }
    else{
        fee = answer * 40
    }
    return fee

}


function totalVacationCost(){
    car = rentalCarCost()
    hotel = hotelCost()
    flights = planeRideCost()

    total_cost = car + hotel + flights
    console.log(total_cost)
    return total_cost

}

totalVacationCost()




