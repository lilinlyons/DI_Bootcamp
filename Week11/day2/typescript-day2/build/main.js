"use strict";
// Classes
// access modifiers
/**
 * public - anywhere
 * private - within the class
 * protected - within the class subclass
 * readonly - set in the constructor
 */
let user1 = {
    name: "John",
    age: 35,
    active: true,
};
let student1 = {
    name: "John",
    age: 35,
    active: true,
    grade: 10,
};
class User {
    constructor(name, age, active) {
        this._name = name;
        this._age = age;
        this._active = active;
    }
    getAge() {
        return this._age;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    get active() {
        return this._active;
    }
    set name(name) {
        this._name = name;
    }
    set age(age) {
        this.age = age;
    }
    set active(active) {
        this._active = active;
    }
}
