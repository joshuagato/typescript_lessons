// If you have no specific reason for explicitly setting the return type of functions, allow typescript to infer
// If we use the return value of a function that doesnt return anything we get undefined as a value
    // undefined in javascript is a real value, a value for example that you get when you try to
    // access a property that does not exist in an object

// undefined is a valid type in typescript
let someValue: undefined; //this will always be undefined

// however a function is not allowed to return undefined
// nonetheless a function's return type should be void if it does not return anything
// nevertheless if you want to explicitly specify undefined as a function's return type; you have to use the return
    // keyword without adding any value

function returnUndefined(num: number): undefined {
    console.log('Result: ' + num);
    return;
}

function returnVoid(num: number): void {
    console.log('Result: ' + num);
    return;
}

function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result: ' + num);
}
