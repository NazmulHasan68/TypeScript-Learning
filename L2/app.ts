// Object , Array, Tuple , Enum

// const person: {
//   firstName: string;
//   age: number;
//   xyz:{
//     address:string,
//   }
// } = {
//   firstName: "Nazmul",
//   age: 21,
//   xyz:{
//     address:"Dhaka"
//   }
// };




//Array 
// const person: {
//     firstName: string;
//     age: number;
//     skills: string[]
//   } = {
//     firstName: "Nazmul",
//     age: 21,
//     skills: ["React", "Nodejs"]
//   };


//   let favouriteLanguage1 : string[];
//   favouriteLanguage1 = ["Reactjs"];

//   let favouriteLanguage2 : any[]; //losse ts powerfull aboit it
//   favouriteLanguage2 = ["Reactjs", "English", 21], true;



// console.log(person);




//! Tuple --- Fixed length of array 
// const person :{
//     name : string,
//     age : number,
//     skills:string[],
//     product : [number, string]
// }={
//     name : "Nazmul",
//     age: 21,
//     skills : ["React", "Node"],
//     product : [10, "Mackbook M2"]
// }
// person.product[0] = 20
// console.log(person.product[0]);





enum Role {ADMIN, AUTHOR, READ_USER_ONLY}
const person = {
    name : "Nazmul",
    age: 21,
    skills: ["React", "Node"],
    product : [10, "Mackbook Air M2"],
    role : Role.ADMIN
}

if(person.role === Role.AUTHOR){
    console.log("Author");
    
}else if(person.role === Role.ADMIN){
    console.log("Admin");
}else if(person.role === Role.READ_USER_ONLY){
    console.log("User only");
}
