//! Type Guards
function add(a, b) {
    //add type guard 
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
var emp1 = {
    name: "Nazmul ",
    privilages: ["create-server"],
    startDate: new Date()
};
function printEmployeeInformation(emp) {
    console.log("Name : ", emp.name);
    // console.log("Priviliges : ",emp.privilages);
    //start adding type guards
    // if(typeof emp === "object" ){
    //     console.log(emp.privilages);
    // }
    //use in keyword that build in js
    if ('privilages' in emp) {
        console.log(emp.privilages);
    }
    if ('startDate' in emp) {
        console.log(emp.startDate);
    }
}
// printEmployeeInformation(emp1)
// printEmployeeInformation({name : "hello", startDate:new Date()})
//3. type Guards in class
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("driving a car....");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Diving a truck ...");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading cargo ...", amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    // vehicle.loadCargo(500)
    if ('loadCargo' in vehicle) {
        vehicle.loadCargo(500);
    }
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(500);
    }
}
// useVehicle(v1)
// useVehicle(v2)
// type casting /type assertion 
// const userInput = <HTMLInputElement>document.getElementById('user-input')!
var userInput = document.getElementById('user-input');
userInput.value = "his ";
