"use strict";
//Basic class
// class Department {
//     name : string;
//     constructor (n : string){
//         this.name = n
//     }
//     describe (this.Department){
//         console.log("Department", this.name);
//     }
// }
// const accounting = new Department("Accounting")
// accounting.describe()
// const accountingCopy = {
//     name:"Dummy",
//     describe : accounting.describe
// }
// accountingCopy.describe()
//private , public acces modifire
// class Department {
//     // name : string 
//     // private employee : string[] = []
//     constructor (public name:string, private employee:string[]){  //short hand property
//         // this.name = n;
//         // this.employee = []
//     }
//     describe (){
//         console.log("Department", this.name);
//     }
//     addEmployee(emp:string){
//         this.employee.push(emp)
//     }
//     printEmployeeInformation (){
//         console.log("Number of em ",this.employee.length);
//         console.log(this.employee);0
//     }
// }
// const accounting = new Department("Accounting", [])
// accounting.describe()
// accounting.addEmployee("Nazmul ")
// accounting.addEmployee("Hasan ")
// accounting.addEmployee("Hasan 1 ")
// accounting.printEmployeeInformation()
// readOnly
// class Department {
//     constructor (public name:string, private employee:string[], private readonly id : string="d1"){ } // readOnly you only inisitalized in onle time
//     describe (){
//         console.log("Department", this.name);
//     }
//     addEmployee(emp:string){
//         this.employee.push(emp)
//     }
//     printEmployeeInformation (){
//         console.log("Number of em ",this.employee.length);
//         console.log(this.employee);
//     }
// }
//Inheritence 
class Department {
    constructor(id, name) {
        this.name = name;
    } // readOnly you only inisitalized in onle time
    describe() {
        console.log("Department", this.name);
    }
    addEmployee(emp) {
        this.employee.push(emp);
    }
    printEmployeeInformation() {
        console.log("Number of em ", this.employee.length);
        console.log(this.employee);
    }
}
class AccountingDepertment extends Department {
    constructor(id, reports = []) {
        super(id, "acc");
        this.reports = reports;
    }
    addReports(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const assDep = new AccountingDepertment("yes", []);
assDep.describe();
assDep.addReports("boss");
assDep.printReports();
// overrid properties & protected access modifier
