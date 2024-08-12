"use strict";
// class Person {
//   private firstName: string;
//   private lastName: string;
//   public age: number;
//   protected address: string;
//
//   constructor( firstName: string, lastName: string, age: number, address: string) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.address = address;
//   }
//
//   getFullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
//
//
// let person = new Person( "John", "Doe", 15, "59 Allenby");
// console.log(person.getFullName())
class Sedan {
    constructor(make, model, numberOfDoors) {
        this.make = make;
        this.model = model;
        this.numberOfDoors = numberOfDoors;
    }
    start() {
        return `Starting the ${this.make} ${this.model} with ${this.numberOfDoors} doors.`;
    }
}
const mySedan = new Sedan("Toyota", "Camry", 4);
console.log(mySedan.start());
const obj1 = { name: 'Alice', age: 25 };
const obj2 = { city: 'New York' };
function combineObjects(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
console.log(combineObjects(obj1, obj2));
class Stack {
    constructor() {
        this.arr = [];
    }
    push(itemToAdd) {
        this.arr.push(itemToAdd);
    }
    pop() {
        return this.arr.pop();
    }
    isEmpty() {
        return this.arr.length === 0;
    }
}
const numberStack = new Stack();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.pop()); // Output: 20
console.log(numberStack.isEmpty()); // Output: false
const stringStack = new Stack();
stringStack.push("Hello");
stringStack.push("World");
console.log(stringStack.pop());
console.log(stringStack.isEmpty());
function filterArray(arr, predicate) {
    let newArray = [];
    for (var i = 0; i < arr.length; i++)
        if (predicate(arr[i]))
            newArray.push(arr[i]);
    return newArray;
}
const array1 = [1, 2, 3, 6, 7, 8];
const isEven = (number) => number % 2 === 0;
console.log(filterArray(array1, isEven));
