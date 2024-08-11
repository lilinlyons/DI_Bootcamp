// example.ts
let message: string = "Hello World";
console.log(message);

let Age: number = 15
let Name: string = "Lili";
console.log(Age)
console.log(Name)


let id: number | string = "5"


function numberCheck(a: number){
    if (a > 0){
        return "The number entered is positive"
    }
    else if (a<0){

        return "The number entered is negative"
    }
    return "The number is zero"

}

console.log(numberCheck(-4))


function combine(a: number | string, b: number | string){
    if (typeof a == 'number' && typeof b == 'number'){
        return a+b
    }
    else if (typeof a == 'string' && typeof b == 'string'){
        return a.concat(b)

    }
    return "You entered to values of different types"
}

console.log(combine(1, 4))
console.log((combine('Hello ', 'World')))


function getDetails(age: number, name: string){
    return [age, name, `Hello ${name} and welcome`]

}


console.log(getDetails(Age, Name))



function createPerson(age: number, name: string){
    let employee: {
        firstName: string;
        age: number;
    } = {
        firstName: name,
        age: age
    };
    return employee
}

console.log(createPerson(Age, Name))
console.log(typeof createPerson(Age, Name))




// const inputElement = document.getElementById("h1") as HTMLInputElement;
// const buttonElement = document.getElementById("submit-btn") as HTMLButtonElement;
//
// if (inputElement && buttonElement) {
//     buttonElement.addEventListener("click", () => {
//         const username = inputElement.value;
//
//         console.log(`Username entered: ${username}`);
//     });
// } else {
//     console.error("Input or Button element not found!");
// }

type UserRole = "admin" | "editor" | "viewer" | "guest";

function getAction(role: UserRole): string {
    switch (role) {
        case "admin":
            return "Full access granted. You can manage users, edit content, and view analytics.";
        case "editor":
            return "Content editing access granted. You can edit and publish content.";
        case "viewer":
            return "View access granted. You can view content and analytics.";
        case "guest":
            return "Limited access. You can view public content only.";
        default:
            return "Invalid role.";
    }
}

console.log(getAction("admin"));
console.log(getAction("editor"));
console.log(getAction("viewer"));
console.log(getAction("guest"));



function greet(name: string): string;
function greet(): string;

function greet(name?: string): string {
    if (name) {
        return `Hello, ${name}!`;
    } else {
        return "Hello, stranger!";
    }
}

// Test the function
console.log(greet(Name));
console.log(greet());
