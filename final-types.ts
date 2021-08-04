let userInput: unknown; //or any
let userName: string
userInput = 5;
userInput = 'Dhruv'

if (typeof userInput === 'string') {
    userName = userInput;
}
// Unknown is a better option to use instead of any.
// We just need to do a type check and there won't be any run time errors.


// Utility function that generates error and shows them.
// This function never produces a return value(so if we store this value inside a variable it doesnot even return 'undefined', so it's return type is never)
function generateErrors(message: string, code: number): never {
    throw { message: message, errorCode: code }
}

const result = generateErrors('An error occured', 401);
console.log(result);