// Interfaces allow us to define the structure of an object
// We can use it as a type to typecheck for objects that must have this structure

interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

let user1: Person;

user1 = {
    name: 'Josh',
    age: 29,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
};

user1.greet('Hi there, I am');