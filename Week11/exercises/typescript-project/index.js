// example.ts
var message = "Hello World";
console.log(message);
var Age = 15;
var Name = "Lili";
console.log(Age);
console.log(Name);
var id = "5";
function numberCheck(a) {
    if (a > 0) {
        return "The number entered is positive";
    }
    else if (a < 0) {
        return "The number entered is negative";
    }
    return "The number is zero";
}
console.log(numberCheck(-4));
function combine(a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
        return a + b;
    }
    else if (typeof a == 'string' && typeof b == 'string') {
        return a.concat(b);
    }
    return "You entered to values of different types";
}
console.log(combine(1, 4));
console.log((combine('Hello ', 'World')));
function getDetails(age, name) {
    return [age, name, "Hello ".concat(name, " and welcome")];
}
console.log(getDetails(Age, Name));
function createPerson(age, name) {
    var employee = {
        firstName: name,
        age: age
    };
    return employee;
}
console.log(createPerson(Age, Name));
console.log(typeof createPerson(Age, Name));
function getAction(role) {
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
function greet(name) {
    if (name) {
        return "Hello, ".concat(name, "!");
    }
    else {
        return "Hello, stranger!";
    }
}
// Test the function
console.log(greet(Name));
console.log(greet());
