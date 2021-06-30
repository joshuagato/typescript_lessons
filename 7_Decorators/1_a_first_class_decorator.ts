function Logger(constructor: Function) {
    console.log('Logging...');
    console.log(constructor);
}

@Logger
class PersonX {
    name = 'Josh';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new PersonX();
