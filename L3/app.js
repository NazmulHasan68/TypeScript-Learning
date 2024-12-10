// union 
// literal types
//type alias /surtom types
function combine(num1, num2, converstionType) {
    var result;
    if (typeof num1 === 'number' && typeof num2 === "number" || converstionType === 'as-number') {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var sum1 = combine(10, "20", "as-number");
var sum2 = combine(10, 15, "as-number");
var combineName = combine("patel", "MernStack", "as-string");
console.log(sum1, sum2, combineName);
var user = {
    name: "Nazmul",
    age: 21,
    skills: ["1", "2"]
};
function great(user) {
    console.log("hi, I'm ".concat(user.name));
}
great(user);
