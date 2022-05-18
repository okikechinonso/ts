"use strict";
console.log("start serve successfully");
function add(n1, n2) {
    console.log(typeof n1 === 'number');
    return n1 + n2;
}
console.log(add(2, 5));
//object 
const person = {
    name: "chinonso",
    age: 15,
    number: 78
};
let arr;
arr = ["string"];
//tuples
const person1 = {
    name: "chinonso",
    age: 15,
    number: 78
};
//enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
// add change the identifiers if you don't want to use the equal sign to reassign
var Role2;
(function (Role2) {
    Role2[Role2["ADMIN"] = 3] = "ADMIN";
    Role2[Role2["READ_ONLY"] = 4] = "READ_ONLY";
    Role2[Role2["AUTHOR"] = 5] = "AUTHOR";
})(Role2 || (Role2 = {}));
const person2 = {
    name: "chinonso",
    age: 15,
    number: 78
};
///unnions
let names;
names = "chinonso";
function sub(input, input2) {
    if (typeof input === 'number') {
        return input + input2;
    }
}
//never is used for functioon that never return anything and for infiniter loop
function generateError(message, code) {
    throw {
        message: message,
        errorCode: code
    };
}
generateError('An error occured', 500);
