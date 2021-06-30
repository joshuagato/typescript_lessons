function WithTemplateZ(template: string, hookId: string) {
    return function (constructor: any) {
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            document.querySelector('h1')!.textContent = p.name;
        }
    }
}

@WithTemplateZ('<h1>My Person Object</h1>', 'app')
class PersonZ {
    name = 'Josh';

    constructor() {
        console.log('Creating person object...');
    }
}

const persZ = new PersonZ();
