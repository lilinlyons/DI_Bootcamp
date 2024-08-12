
function validateUnionType(value, allowedTypes) {
    const type = typeof value;
    return allowedTypes.includes(type);
}

const stringVar = "Hello, World!";
const numberVar = 42;
const booleanVar = true;
console.log(validateUnionType(stringVar, ["string"]));
console.log(validateUnionType(numberVar, ["number"]));
console.log(validateUnionType(booleanVar, ["boolean"]));
console.log(validateUnionType(stringVar, ["number", "boolean"]));
