//
function merge3<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj3 = merge3({ name: 'Josh' }, { age: 29 });
console.log(mergedObj3.name); // this works now
