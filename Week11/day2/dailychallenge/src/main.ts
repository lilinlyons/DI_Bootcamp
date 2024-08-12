
function validateUnionType(value: any, allowedTypes: Array<'string' | 'number' | 'boolean' | 'object' | 'function'>): boolean {
    const type = typeof value;
    return allowedTypes.includes(type as 'string' | 'number' | 'boolean' | 'object' | 'function');
}


const stringVar: string = "Hello, World!";
const numberVar: number = 42;
const booleanVar: boolean = true;

console.log(validateUnionType(stringVar, ["string"]));
console.log(validateUnionType(numberVar, ["number"]));
console.log(validateUnionType(booleanVar, ["boolean"]));

console.log(validateUnionType(stringVar, ["number", "boolean"]));