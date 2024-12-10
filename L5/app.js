// let userInput : unknown;
var userInput;
var userName;
userInput = 10;
userName = "Nazmul";
// userName = userInput
if (typeof userInput === 'string') {
    userName = userInput;
}
//never return type
function generateError(message, code) {
    throw { message: message, statusCode: code };
}
generateError("Internal server error", 500);
