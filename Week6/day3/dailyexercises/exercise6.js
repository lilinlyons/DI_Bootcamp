[2] === [2]
// false because it is comparing two different objects in memory
// {} === {}

//same for the same reason

const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)
// 4 object 1 updated
console.log(object3.number)
// 4 object 1 updated
console.log(object4.number)
//5 object 4 has been updated



class Animal{
    constructor(name, type, colour) {
        this.name = name;
        this.type = type;
        this.colour = colour;

    }
}


class Mamal extends Animal{
    constructor(name, type, colour, sound) {
        super(name, type, colour);
        this.sound = sound
    }

    sounds(){
        return  console.log(`${this.sound} I'm ${this.type} called ${this.name} that is ${this.colour}`)
    }
}

let mamal = new Mamal('Amy', 'chicken', 'brown', 'buk').sounds()
