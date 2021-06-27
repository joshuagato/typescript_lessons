// Unlike classes, you can implement multiple interfaces, separated by commas
// Interfaces are often used to shared functionality amongst different classes, not regarding their
    // concrete implementation
interface Named {
    readonly name: string;
}

interface Greetable extends Named{
    greet(phrase: string): void;
}

class Person2 implements Greetable {
    name: string;
    age = 29;

    constructor(name: string) {
        this.name = name;
    }

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

let user3: Greetable;
user3 = new Person('Vic');
user3.greet('Hi there, I am');

// Greetable user2 = new Person('Vic');
    // interface = class (implementing the inteface)
