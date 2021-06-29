// Generic type is a type which is connected to some other type and is flexible regarding which type the
// other type is

const names: Array<string> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done.');
    }, 2000);
});

promise.then(data => {
    data.split(' ');
});
