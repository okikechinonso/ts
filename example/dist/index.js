"use strict";
let id = 5;
let person = [1, 'brad', true];
var Dir;
(function (Dir) {
    Dir["Up"] = "Up";
    Dir["Down"] = "Down";
    Dir["Left"] = "Left";
    Dir["Right"] = "Right";
})(Dir || (Dir = {}));
console.log(Dir.Down);
//creating object 
const user = {
    id: 1,
    name: 'John'
};
//type assertion 1
let cid = 1;
let customerId = cid;
//type assertion 2
let customerId2 = cid;
function addNum(x, y) {
    return x + y;
}
const user1 = {
    id: 1,
    name: 'john',
};
/*interface can't be used with unions
    adding '?' to field makes it optional
*/
//classes 
/* protect variable can only be accessed within that class or class that extends to that class */
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class Employees extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
// generics 
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3.5]);
let strArray = getArray(['str', 'string', 's']);
strArray.push('shush');
console.log(strArray);
