// Exercise 1

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];


colors.forEach((item, index) =>{
    console.log(`${index+1} # choice is ${item} `)
    item === 'Violet' ? console.log('Yeah'): console.log('No') }

)

//Exercise 2
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((item, index, arr) => {
        index < 3 ? console.log(`${index + 1}${ordinal[index + 1]} choice is ${item} `) : console.log(`${index + 1}${ordinal[0]} choice is ${item} `)

    }

)

/
// Exercise 3
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);


// ------2------
const country = "USA";
console.log([...country]);

result = ['U', 'S', 'A']

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);
 result [,,]


// Exercise 4
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];



function map(users){
    let welcomeStudents=[];
    users.forEach((item) =>{welcomeStudents.push(`Hello ${item['firstName']}`)
        }
    )
    console.log(welcomeStudents)
    return welcomeStudents
}

map(users)




const result = users.filter(user => user['role'] === 'Full Stack Resident');
console.log(result)


//Exercise 5
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const result = epic.reduce((accumulator, currentValue) => {
    return accumulator + ' ' + currentValue;
});
console.log(result)

//Exercise 6
const students = [{name: "Ray", course: "Computer Science", isPassed: true},
    {name: "Liam", course: "Computer Science", isPassed: false},
    {name: "Jenner", course: "Information Technology", isPassed: true},
    {name: "Marco", course: "Robotics", isPassed: true},
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false},
    {name: "Jamie", course: "Big Data", isPassed: false}];


const result = students.filter(student => student['isPassed'] === true);

result.forEach((item, index) =>{
    console.log(`Well done ${item['name']} on passing your ${item['course']} course.`)}

)