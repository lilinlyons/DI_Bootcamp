"use strict";
function add(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + b + "";
    }
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    return -1;
}
// add( 1,2)
// add("1","2")
// add(1, "3")
// optional parameter
const addptional = (a, b) => {
    return a + (b || 0);
};
// addptional(5, 6)
// default parameter
const addDefault = (a, b = 5) => {
    return a + b;
};
// addDefault(6)
// rest parameter
const addRest = (a, ...rest) => {
    return rest.reduce((total, num) => total + num, a);
};
// console.log(addRest(0, 100, 3, 4, 5));
// never type
const errorMessage = (msg) => {
    throw new Error(msg);
};
// use of never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (typeof value === "number")
        return "number";
    return errorMessage("this should be only a string or number ");
};
let a = "abc";
// a = 8
let b = a;
// console.log("b=>", b);
b = 9;
// console.log("b=>", b);
let c = a;
// console.log("c=>", c);
c = "hello";
// console.log("c=>", c);
// angle brackets - not use in tsx
let d = "hi";
// console.log("d=>", d);
let e = "hi";
let f = 777;
// DOM Elements
// const img2 = document.querySelector("img");
// const img = document.querySelector("img")!;
// const img1 = document.querySelector("img") as HTMLImageElement;
// img.src='';
// img1.src='';
// if (img2) {
//   img2.src = "";
// }
// const input = <HTMLInputElement>document.querySelector('input')
// const input1 = document.querySelector('input') as HTMLInputElement
// let year: HTMLElement | null = document.getElementById("year");
// const thisYear: string = new Date().getFullYear().toString()
// if(year){
//   year.textContent = thisYear
// }
const year = document.getElementById('year');
const thisYear = new Date().getFullYear().toString();
year ? year.textContent = thisYear : '';
