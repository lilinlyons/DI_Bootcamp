import {peopleArr} from "./data.js";


function avgAge(arr){

    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }

    const sum = arr.reduce((acc, current) => acc + current.age, 0);
    const avg = sum / arr.length;

    return console.log(`The average age is: ${avg}`);


}


avgAge(peopleArr)