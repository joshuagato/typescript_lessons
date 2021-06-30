function LoggerY(logString: string) {
    return function (constructor: Function) {
        console.log('Logging: ' + logString + '...');
        console.log(constructor);
    }
}

@LoggerY('LoggerY')
class PersonY {
    name = 'Josh';

    constructor() {
        console.log('Creating person object...');
    }
}

const persY = new PersonY();
