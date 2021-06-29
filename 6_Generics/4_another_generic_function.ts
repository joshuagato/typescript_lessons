interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let  descriptionText = 'Got no value.';
    if (element.length === 1) descriptionText = 'Got 1 element.';
    else if (element.length > 1) descriptionText = 'Got ' + element.length + ' elements.';
    return [element, descriptionText];
}

console.log(countAndDescribe('Hi there.'));
console.log(countAndDescribe(['Sports', 'cooking']));
console.log(countAndDescribe([]));
