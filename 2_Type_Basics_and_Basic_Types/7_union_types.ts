function combine(input1: number | string, input2: number | string) {
    let result;
    // You sometimes require a runtime type check when you make use of union types
    if (typeof input1 === 'number' && typeof input2 === 'number') result = input1 + input2;
    else result = input1.toString() + input2.toString();
    return result;
};

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine('Josh', 'Vic');
console.log(combinedNames);
