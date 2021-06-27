// type AddFn = (a: number, b: number) => number;

interface AddFn {
    (a: number, b: number): number;
};

let add2: AddFn;
add2 = (n1: number, n2: number) => n1 + n2;

interface Named2 {
    readonly name: string;
    outputName?: string;

    printNumbers?(...number: number[]): string;
}

class Person6 implements Named2 {
    name: string;
    outputName?: string;
    constructor(on: string, n: string) {
        if (n) this.outputName = on;
        this.name = n;
    }
}
