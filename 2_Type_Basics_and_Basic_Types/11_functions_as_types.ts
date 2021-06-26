function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result: ' + num);
}

let combineValues: Function;
combineValues = add;
combineValues = printResult;
console.log(combineValues(5, 5));
// This is not efficient since this function type was not explicitly specified
// Hence we could experience inconsistencies

let aggregateNumbers: (a: number, b: number) => number;
// aggregateNumbers = printResult; // this line throws an error since printResult does not match aggregateNumbers
aggregateNumbers = add; // However, this line passes
