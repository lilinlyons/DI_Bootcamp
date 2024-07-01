// Exercise one

const people = ["Greg", "Mary", "Devon", "James"];

people.shift();

console.log(people)

var i = people.indexOf("James");
people[i] = "Jason";

console.log(people)

people.push("Lili")

console.log(people)

var mary_index = people.indexOf("Mary")


let exclude1 = 0;
let exclude2 = 3;

let newList = people.slice(exclude1 + 1, exclude2)

console.log(newList)


console.log(newList.indexOf("Foo"))

var last = people[people.length-1]
console.log(last)


// Exercise 2

let item = 0;

while (item < people.length) {
    console.log(people[item]);
    item++;
}

const colors = ['red', 'pink', 'purple', 'orange', 'blue']

let color = 0;

while (color < colors.length) {
    var nameColor = colors[color]
    color++
    console.log("My #"+ color + " choice is " + nameColor);
}


//Exercise 3

const prompt=require("prompt-sync")({sigint:true});

let value = Number(prompt("Please enter a value: ", 4))

console.log(typeof value)


while (value < 10) {
    console.log("The number is " + value)
    value++;
}


// Exercise 4


const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building["numberOfFloors"])
console.log(building["numberOfAptByFloor"]["firstFloor"] + building["numberOfAptByFloor"]["secondFloor"])
console.log("The second tenant is "+ building["nameOfTenants"][1]+ " who has "+ building["numberOfRoomsAndRent"]['dan'][0] + " rooms.")

let sara_david_rent = building["numberOfRoomsAndRent"]['sarah'][1] + building["numberOfRoomsAndRent"]['david'][1]
let dan_rent = building["numberOfRoomsAndRent"]['dan'][1]

if (sara_david_rent > dan_rent) {
    building["numberOfRoomsAndRent"]['dan'][1] = 1200;
}

console.log(building["numberOfRoomsAndRent"]['dan'][1])


//Exercise 5

var family = {
    mum: 'Hannah',
    dad: 'Joseph',
    baby: 'Mikey'
};

for(var key in family) {
    console.log(key)
    console.log(family[key])
}

// Exercise 6
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
}

for(var key in details) {
    console.log(key)
    console.log(details[key])
}


//Exercise 7

function firstLettersSorted(names) {
    // Sort the words in alphabetical order
    names.sort()

    // Create a new array with the first letter of each word
    let firstLetters = names.map(name => name.charAt(0))
    return firstLetters
}

// Example usage:
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
let result = firstLettersSorted(names)
console.log(result)
console.log(result.join(''))

