let anyInput: any;
let userInput: unknown;
let userName: string;

// this function never returns anything: it rather crashes
function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}

function infiniteLoop(name: string): never {
    while (true) {
        console.log('My name is: ', name)
    }
}
