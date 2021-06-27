// null or undefined alone

const userInput3 = undefined;
const userInput4 = null;
const userInput5 = ''; //this line, ?? wont treat it false....but || will treat it as false
const storedData = userInput3 ?? 'DEFAULT';
console.log(storedData);
