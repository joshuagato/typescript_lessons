type CombineThem = string | number;

function addThem(a: number, b: number): number;
function addThem(a: string, b: string): string;
function addThem(a: string, b: number): string;
function addThem(a: number, b: string): string;
function addThem(a: CombineThem, b: CombineThem) {
    if (typeof a === 'string' || typeof b === 'string') return a.toString() + b.toString();
    return a + b;
}

const result  = addThem('Josh', ' Vic');
result.split(' ');
