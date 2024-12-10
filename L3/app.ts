// union 
// literal types
//type alias /surtom types


// let firstname : string;
// let age : number;

// firstname = "Nazmul"
// age = 22

// const person :{
//     firstname:string,

// } = {
//     firstname = "Nazmul",
//     age = 21
// }
// console.log(person.firstname);



// union | -> pipe in typescript
// function combine(num1:number | string, num2:number | string){
//     let result;
//    if(typeof num1 === 'number' && typeof num2 === "number"){
//     result = num1 + num2;
//    }else{
//     result = num1.toString() + num2.toString()
//    }
//    return result
// }
// const sum = combine(10, 20) //30 
// const combineName = combine("patel", "MernStack")

// console.log(sum, combineName);



// !Literal Types
// function combine(num1:number | string, num2:number | string, converstionType: "as-number" | "as-string"){
//     let result;
//    if(typeof num1 === 'number' && typeof num2 === "number" || converstionType === 'as-number'){
//     result = +num1 + +num2;
//    }else{
//     result = num1.toString() + num2.toString()
//    }
//    return result
// }
// const sum1 = combine(10, "20", "as-number") 
// const sum2 = combine(10, 15, "as-number") 
// const combineName = combine("patel", "MernStack", "as-string")

// console.log(sum1,sum2, combineName);



//Type ALIAS / CUSTOM TYPE 
type combinable = number | string;
type converstionType = "as-number" | "as-string"

function combine(num1:combinable, num2:combinable, converstionType: converstionType){
    let result;
   if(typeof num1 === 'number' && typeof num2 === "number" || converstionType === 'as-number'){
    result = +num1 + +num2;
   }else{
    result = num1.toString() + num2.toString()
   }
   return result
}
const sum1 = combine(10, "20", "as-number") 
const sum2 = combine(10, 15, "as-number") 
const combineName = combine("patel", "MernStack", "as-string")

console.log(sum1,sum2, combineName);


type User = {
    name : string;
    age : number;
    skills: string[]
}

const user:User = {
    name : "Nazmul",
    age : 21,
    skills: ["1", "2"]
}

function great(user: User){
    console.log(`hi, I'm ${user.name}`)
}

great(user)