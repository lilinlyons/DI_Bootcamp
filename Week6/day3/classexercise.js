class User{
    constructor(name) {
    this.name = name;
}
    hello() {
    console.log(`Hello ${this.name}`);
}}


class Student extends User {
    constructor(name) {
        super(name)
    }
}

const arrayOfStudents = [
    new Student("Mike"),
    new Student("Alex"),
    new Student("John"),
]

arrayOfStudents.forEach(student => student.hello())