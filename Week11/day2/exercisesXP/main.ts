class Animal{
    public speak(): string {
    return "The animal speaks";

    }

}


class Dog extends Animal{
    speak(): string {
        return "The Dog Barks"
    }

}

let animal = new Animal()
console.log(animal.speak())


let dog = new Dog()
console.log(dog.speak())



interface User{
    id: number | string;
    name: string;
    email?: string;

}ֿ


function getUserInfo(item: User){
    console.log(`${item.id} ${item.name} ${item.email}`)

}

let example: User = {
    id:1,
    name: "Lili",
    email: 'lili@gmail.com'
}


let example2: User = {
    id:2,
    name: "Jo"
}

getUserInfo(example)
getUserInfo(example2)

function filterByProperty<T, K extends keyof T>(array: T[], property: K): T[] {
    return array.filter(item => property in item);
}

console.log(filterByProperty([example2, example], 'email'))