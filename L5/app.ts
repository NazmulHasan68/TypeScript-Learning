// let userInput : unknown;
let userInput : any
let userName : String;


userInput = 10;
userName = "Nazmul"

// userName = userInput
if(typeof userInput === 'string'){
    userName = userInput
}


//never return type
function generateError(message:string,  code:number) : never{
    throw{message: message, statusCode:code}
}

generateError("Internal server error", 500)