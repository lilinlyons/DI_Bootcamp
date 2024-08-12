"use strict";
// let username = "John";
// username = "Dan";
// username = "42";
// console.log(username);
// let a = 12;
// let b = "7";
// let c = 2;
// console.log(a + b);
// console.log(a + c);
// console.log(a / b);
// type number
let num = 7;
// num = 9;
// num = '12'
// num = 5
// num = true
// type string
let str;
str = "abc";
// str = 9;
// type boolean
let bol = true; // false
// bol = false;
// type any - try not to use any as much as posible
let anytype;
// anytype = "a";
// anytype = 9;
// anytype = false;
// anytype = {};
// union type
let myunion;
// myunion = 12;
// myunion = "12";
// myunion = true;
// type RegExp
let reg = /\w+/g;
// type Array
let strarr = [];
// let strarr: string[] = ['abc', 'bcd','cde']
// strarr[1] = 'aaa'
// strarr[0] = 999
// strarr.push('bbb')
// strarr.push(true)
let numarr = [];
// numarr[0] = '9'
let numstrarr = ["a", 1, "b"];
// numstrarr.push(true)
// type Tuple
let mytuple = ["a", 1, true];
// mytuple[0] = 1
// mytuple[1] = 4
// type Object
let myobj = {};
let myuser = {
    name: "aaa",
    age: 33,
    address: "aaa aaa",
    //   active: true,
    //   last: 'kkkkk'
};
let myuser1 = {
    name: "bbb",
    age: 44,
    active: true,
};
// type Enum
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
//  console.log(Grade[Grade.U]);
// type literal
let statuscode;
let stud1 = {
    name: "Anne",
    age: 33,
    isGood: 7,
};
// function
// const sum = (a: number, b: number): number => {
//   return a + b;
// };
// sum(4,6);
// sum('3', 7)
// const sumconcat = (a: string, b: StringOrNumber): number => {
//   return (a) + (b);
// };
// sumconcat("3", "4");
const greet = (name) => {
    console.log(`Hello ${name}`);
};
const add = (a, b) => {
    return a + b;
};
const myadd = (a, b) => {
    if (a > 10) {
        return -1;
    }
    return b;
};
const multi = (a, b) => {
    return 3;
};
// default params
const addDefault = (a, b = 5) => {
    return a + b;
};
// optional params
const addOptional = (a, b) => {
    // type guard
    // if(typeof b === undefined) b = 9
    return a + (b || 0);
};
// never type
const throwError = (message) => {
    throw new Error(message);
};
