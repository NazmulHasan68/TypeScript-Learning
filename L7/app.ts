//! Type Guards

type Combineable = string | number
type Numeric = number | boolean

type Universal = Combineable & Numeric

function add(a:Combineable, b:Combineable){
    //add type guard 
    if(typeof a === "string"  || typeof b === "string"){
        return a.toString() + b.toString()
    }
    return a+b
}

// console.log(add(1, "2"))
// console.log(add(1, 2))


// 2. 
type Admin = {
    name : string;
    privilages : string[]
}
type Employee = {
    name : string;
    startDate : Date
}
type ElevatedEmployee = Admin & Employee

type UnknownEmployee = Employee | Admin

const emp1 : ElevatedEmployee = {
    name : "Nazmul ",
    privilages : ["create-server"],
    startDate: new Date()
}

function printEmployeeInformation (emp : UnknownEmployee){
    console.log("Name : ",emp.name);
    // console.log("Priviliges : ",emp.privilages);
    
    //start adding type guards
    // if(typeof emp === "object" ){
    //     console.log(emp.privilages);
    // }

    //use in keyword that build in js
    if('privilages' in emp){
        console.log(emp.privilages);
    }
    if('startDate' in emp){
        console.log(emp.startDate);
    }
}



// printEmployeeInformation(emp1)
// printEmployeeInformation({name : "hello", startDate:new Date()})




//3. type Guards in class
class Car{
    drive(){
        console.log("driving a car....");
    }
}
class Truck {
    drive(){
        console.log("Diving a truck ...");
    }
    loadCargo(amount:number){
        console.log("Loading cargo ...", amount);
    }
}

type Vehicle = Car | Truck

const v1 = new Car();
const v2 = new Truck();


function useVehicle(vehicle:Vehicle){
    vehicle.drive()
    // vehicle.loadCargo(500)

    if('loadCargo' in vehicle){
        vehicle.loadCargo(500)
    }
    if(vehicle instanceof Truck){
        vehicle.loadCargo(500)
    }
}

// useVehicle(v1)
// useVehicle(v2)




// type casting /type assertion 
// const userInput = <HTMLInputElement>document.getElementById('user-input')!
const userInput = document.getElementById('user-input')! as HTMLInputElement
userInput.value = "his "

