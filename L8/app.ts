//Genetics intro


// const fruits : Array<string> = []
// fruits.push("mongo")
// fruits.push("Banana")
// fruits.push("Apple")
// console.log(fruits);


// type Person = {
//     name :string,
//     age:number
// }

// const Boy : Person = {
//     name : "Nazmul",
//     age : 18
// }
// const fruits : Array<Person> = [{name:"Nazmul", age:21}]
// console.log(fruits);

// // Ex -2

// function merge<T, U, V>(objA: T, objB:U, objC:V){
//     return {...objA, ...objB, ...objC}
// }
// const result = merge({name:"Nazmul"}, {role : "Soft enginner"}, {id: "d1"})
// console.log(result);


//2.Generics Constraints
// function createObject<T extends string, U extends  number, V extends boolean>(
//     key : T,
//     value : U,
//     isActive : V
// ):{key:T, value:U , isActive:V}{
//    return {key, value , isActive}
// }

// const obj = createObject("age", 25, true, )
// console.log(obj);



//3. Generics With Interface

interface Box<T>{
    value : T
}

const numberBox : Box<number> = {value : 200} // 
const stringBox : Box<string> = {value : "hello"} // 
const objectBox : Box<object> = {value : {name: "nazmul"}} // 
// console.log(numberBox);
// console.log(stringBox);
// console.log(objectBox);



//Generic Defaul
interface User<T = string>{
    data : T,
    status : number
}
type Person2 = {
    name : string,
    age : number
}

const response : User = {data:"success", status: 200}// Default to string
const jsonRes : User<Person2> = {data: {name:"value", age:21}, status:200}

// console.log(response);
// console.log(jsonRes);



//4. Generics with class

class Continer<T>{
    private constent : T;
    constructor(content:T){
        this.constent = content
    }

    getContent():T{
        return this.constent
    }
}

const stringContainer = new Continer<string>("Hello")
// console.log(stringContainer.getContent());

const numberContainer = new Continer<number>(200)
// console.log(numberContainer.getContent());



// Generic with Array

function getFirst<T>(arr:T[]):T{
    return arr[0]
}

const firstNumber = getFirst([1, 2, 3, 4])
const firstString = getFirst(["a", "b", "c","d"])


// console.log(firstNumber);
// console.log(firstString);



// Generic with keyof
const Person = {key : "Nazmul"}
// console.log(Person["key"]);

// function getProperty(obj : object, key:string){
//     return obj[key]
// }

// const res1 = getProperty({}, "name")

function getProperty <T extends object, K extends keyof T>(obj : T, key : K) : T[K]{
    return obj[key]
}

const person = {name : "Nazmul", age : 21}
const name1 = getProperty(person, "name") 
const age = getProperty(person, "age") 
console.log(name1, age);
