let anyInput: any;
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Josh';
// userName = userInput; // this line results in an error: because unknown is not assignable to string

if (typeof userInput === 'string') userName = userInput;

userName = anyInput; // however, this line does not result in an error: because is the most flexible type in
                        // typescript which disables all typechecking
