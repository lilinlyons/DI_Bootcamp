// function overload
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string | number, b: string | number): string | number {
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
const addptional = (a: number, b?: number): number => {
  return a + (b || 0);
};

// addptional(5, 6)

// default parameter
const addDefault = (a: number, b: number = 5): number => {
  return a + b;
};
// addDefault(6)

// rest parameter
const addRest = (a: number, ...rest: number[]): number => {
  return rest.reduce((total, num) => total + num, a);
};

// console.log(addRest(0, 100, 3, 4, 5));

// never type
const errorMessage = (msg: string): never => {
  throw new Error(msg);
};

// use of never type
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (typeof value === "number") return "number";
  return errorMessage("this should be only a string or number ");
};

// Assertions Or Casting
// as

// aliases
type One = string;
type Two = string | number;
type Three = "hello";

let a: One = "abc";
// a = 8
let b = a as Two;
// console.log("b=>", b);
b = 9;
// console.log("b=>", b);
let c = a as Three;
// console.log("c=>", c);
c = "hello";
// console.log("c=>", c);

// angle brackets - not use in tsx
let d = <One>"hi";
// console.log("d=>", d);

let e = <Two>"hi";
let f: string | number | boolean = 777;

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

const year = document.getElementById('year') as HTMLSpanElement;
const thisYear: string = new Date().getFullYear().toString()
year ? year.textContent = thisYear : ''
