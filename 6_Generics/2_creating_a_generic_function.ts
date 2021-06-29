function merge(objA: object, objB: object) {
    return Object.assign(objA, objB);
}

console.log(merge({ name: 'Josh' }, { age: 29 }));
const mergedObj = merge({ name: 'Josh' }, { age: 29 });
// console.log(mergedObj.age); //in this setup, this line cannot be accessible

// Solution
function merge2<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}
const mergedObj2 = merge2({ name: 'Josh' }, { age: 29 });
console.log(mergedObj2.name); // this works now
