// Exercise 1

// #1
function funcOne() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared
// with const instead of let ?
// the same error will occur as const and let both cant be redeclared in the same scope

// #2
let a = 0;
function funcTwo() {
    a = 5;
    console.log(`inside the funcTwo function ${a}`);
}

function funcThree() {
    console.log(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()
// #2.2 What will happen if the variable is declared
// with const instead of let ?
// The value of a would not be changed as a global variable. So when func two is called,
// the script would break.
//
//
//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    console.log(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()

//#4
const a = 1;
function funcSix() {
    let a = "test";
    console.log(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared
// with const instead of let ?
// it will run as const can be redefined as long as it isnt in the same scope


// #5
let a = 2;
if (true) {
    let a = 5;
    console.log(`in the if block ${a}`);
}
console.log(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared
// with const instead of let ?
// The same outcome will happen. the let a will redefine it local to the function to a=5 printing the first
// statement as before and then the second block will use the global variable again printing 2.
//


//Exercise 2

const winBattle = () => true


var experiencePoints = winBattle() === true ? 10 : 1

console.log(experiencePoints)


//Exercise 3

const isString = (x) => typeof x === 'string'


console.log(isString('hello'))

console.log(isString([1, 2, 4, 0]));


// Exercise 4

const sum = (x, y) =>  x + y

console.log(sum(3,5))


//Exercise 5

function convert_dec (weight) {
    return weight * 1000
}

console.log(convert_dec(1))

const convert_exp = function (weight) {
    return weight * 1000
}

console.log(convert_exp(1))

// The difference between function declaration and expression is expression allows you to have nameless functions stored in variables.


const convert_arrow = x => x * 1000


