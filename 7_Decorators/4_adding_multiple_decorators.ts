function LoggerA(logString: string) {
    return function (constructor: Function) {
        console.log('Logging: ' + logString + '...');
        console.log(constructor);
    }
}

function WithTemplate(template: string, hookId: string) {
    return function (constructor: any) {
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            document.querySelector('h1')!.textContent = p.name;
        }
    }
}

// Multiple decorators execute from bottom - up
@LoggerA('LoggerY')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class PersonA {
    name = 'Josh';

    constructor() {
        console.log('Creating person object...');
    }
}

const persA = new PersonA();
