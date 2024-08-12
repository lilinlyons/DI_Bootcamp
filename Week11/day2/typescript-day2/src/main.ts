// Classes
// access modifiers
/**
 * public - anywhere
 * private - within the class
 * protected - within the class subclass
 * readonly - set in the constructor
 */

// class User {
//   public name: string;
//   private age: number;
//   protected active: boolean;

//   constructor(name: string, age: number, active: boolean) {
//     this.name = name;
//     this.age = age;
//     this.active = active;
//   }

//   public getAge() {
//     return `My age is ${this.age}`;
//   }

//   getActive() {
//     return `Am I active? ${this.active}`;
//   }

//   setAge(age: number) {
//     this.age = age;
//   }
// }

// let user1 = new User("John", 25, true);
// user1.setAge(90);
// console.log(user1.getAge());
// console.log(user1.getActive());

// class Student extends User {
//   constructor(name: string, age: number, active: boolean) {
//     super(name, age, active);
//   }

//   getStudentAge() {
//     return `My age is ${this.age}`;
//   }

//   getStudentActive() {
//     return `Am I active? ${this.active}`;
//   }
// }

// let student1 = new Student("Anne", 22, true);
// student1.name = "jjjj";
// console.log(student1.name);
// console.log(student1.getAge());
// console.log(student1.getStudentActive());

// static methods
// let count: number = 0

// class Peeps {
//   static count: number = 0;

//   static getCount(): number {
//     return Peeps.count;
//   }

//   public id: number;
//   // public name: string

//   constructor(public name: string) {
//     this.name = name;
//     this.id = ++Peeps.count;
//   }
// }

// const stud1 = new Peeps('John');
// const stud2 = new Peeps('Marry');
// const stud3 = new Peeps('Anne');

// console.log(stud1.name, Peeps.count, stud1.id );
// console.log(stud2.name, Peeps.count, stud2.id);
// console.log(stud3.name, Peeps.count, stud3.id);

type UserType = {
  name: string;
  age: number;
  active: boolean;
};

type Grade = {
  grade: number;
};

let user1: UserType = {
  name: "John",
  age: 35,
  active: true,
};

let student1: UserType & Grade = {
  name: "John",
  age: 35,
  active: true,
  grade: 10,
};

type UserInterface = {
  name: string;
  age: number;
  active: boolean;
  getAge(): number;
};

class User implements UserInterface {
  public _name: string;
  protected _age: number;
  private _active: boolean;

  constructor(name: string, age: number, active: boolean) {
    this._name = name;
    this._age = age;
    this._active = active;
  }

  getAge(): number {
    return this._age;
  }

  get name(): string {
    return this._name;
  }
  get age(): number {
    return this._age;
  }
  get active(): boolean {
    return this._active;
  }

  set name(name: string) {
    this._name = name;
  }
  set age(age: number) {
    this.age = age;
  }
  set active(active: boolean) {
    this._active = active;
  }
}
