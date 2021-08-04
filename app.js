var userInput; //or any
var userName;
userInput = 5;
userInput = 'Dhruv';
if (typeof userInput === 'string') {
    userName = userInput;
}
// Unknown is a better option to use instead of any.
// We just need to do a type check and there won't be any run time errors.
// Utility function that generates error and shows them.
// This function never produces a return value 
function generateErrors(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateErrors('An error occured', 401);
console.log(result);
