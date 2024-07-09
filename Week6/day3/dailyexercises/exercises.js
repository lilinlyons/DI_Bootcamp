// Exercise 1

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

//The output would be 'I am John Doe from Vancouver, Canada. Latitude(49.2827), Londitude(-123.1207)'


// Exercise 2
function displayStudentInfo({first, last}){
    console.log(`Your full name is ${first} ${last}`)
}


displayStudentInfo({first: 'Elie', last:'Schoppik'});


//Exercise 3
const users = { user1: 18273, user2: 92833, user3: 90315 }
console.log(Object.entries(users))

Object.entries(users).forEach(([key, value]) => {
   value *= 2
});


// Exercise 4

class Person {
    constructor(name) {
        this.name = name;
    }
}

const member = new Person('John');
console.log(typeof member);

// the output will be object


