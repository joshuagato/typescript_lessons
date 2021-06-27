const userInput1 = <HTMLInputElement>document.getElementById('user-input')!;
userInput1.value = 'Hello World.';

const paragraph = document.querySelector('#new-paragraph')! as HTMLParagraphElement;
paragraph.innerText = 'Hello World.';

// or

if (userInput1) (userInput1 as HTMLInputElement).value = 'Hi there.';
if (paragraph) (paragraph as HTMLParagraphElement).innerText = 'Hi there';
