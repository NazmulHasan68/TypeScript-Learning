//! Interface
// type Combinable = string | number

// interface Person {
//     name: string;
//     age : number;
//     greet(text:string) :void
// }

// let user:Person;

// user = {
//     name : "Nazmul",
//     age : 21,
//     greet(text){
//         console.log(`${text} ${this.name}`);
//     },
// }

// console.log(user);
// user.greet("hi there, i'am ")





// interface Greetable {
//     name : string;
//     greet(text:string):void
// }

// interface Greetable2 {
//     name : string;
//     greet(text:string):void
// }

// class Person implements Greetable {
//     name : string;
//     constructor (n:string){
//         this.name = n
//     }
//     greet(text: string): void {
//         console.log(`${text}, ${this.name}`);
        
//     }
// }


// const p1 = new Person("Hasan")
// p1.greet("Hi, there I'm ")




//read Only
// interface Greetable {
//     readonly name : string;
//     greet(text:string):void
// }

// class Person implements Greetable {
//     name : string;
//     constructor (n:string){
//         this.name = n
//     }
//     greet(text: string): void {
//         console.log(`${text}, ${this.name}`);
        
//     }
// }

// let user1 : Greetable
// user1 = new Person("Nazmul")
// user1.name = new Person("Nazmul")


//! Extending Interface
// interface Named {
//     readonly name : string;
// }
// interface Greetable extends Named{
//     greet(text:string) :void;
// }

// class Person implements Greetable{
//     name:string;
//     constructor(n:string){
//         this.name = n
//     }
//     greet(text: unknown): void {
//        console.log(`${text}, ${this.name}`);
        
//     }
// }

// let user1 :Greetable;
// user1 = new Person("Nazmul");
// console.log(user1);


// // type addFun = (a:number , b:number)=>number;
// interface addFun{
//     (a:number, b:number) : number
// }

// let add :addFun

// add =(n1:number, n2:number)=>{
//     return n1 + n2
// }

// console.log(add(10,30));


//optional (?)
// interface Named {
//     readonly name : string;
//     optputName ? :string
// }

// class Person implements Named {
//     name : string;
//     optputName?: string | undefined;
//     constructor (n:string){
//         this.name = n
//     }
// }