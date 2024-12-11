//Genetics intro
var numberBox = { value: 200 }; // 
var stringBox = { value: "hello" }; // 
var objectBox = { value: { name: "nazmul" } }; // 
var response = { data: "success", status: 200 }; // Default to string
var jsonRes = { data: { name: "value", age: 21 }, status: 200 };
// console.log(response);
// console.log(jsonRes);
//4. Generics with class
var Continer = /** @class */ (function () {
    function Continer(content) {
        this.constent = content;
    }
    Continer.prototype.getContent = function () {
        return this.constent;
    };
    return Continer;
}());
var stringContainer = new Continer("Hello");
// console.log(stringContainer.getContent());
var numberContainer = new Continer(200);
// console.log(numberContainer.getContent());
// Generic with Array
function getFirst(arr) {
    return arr[0];
}
var firstNumber = getFirst([1, 2, 3, 4]);
var firstString = getFirst(["a", "b", "c", "d"]);
// console.log(firstNumber);
// console.log(firstString);
// Generic with keyof
var Person = { key: "Nazmul" };
// console.log(Person["key"]);
// function getProperty(obj : object, key:string){
//     return obj[key]
// }
// const res1 = getProperty({}, "name")
function getProperty(obj, key) {
    return obj[key];
}
var person = { name: "Nazmul", age: 21 };
var name1 = getProperty(person, "name");
var age = getProperty(person, "age");
console.log(name1, age);
