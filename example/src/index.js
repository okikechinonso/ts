var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
var id = 5;
var person = [1, 'brad', true];
var Dir;
(function (Dir) {
    Dir["Up"] = "Up";
    Dir["Down"] = "Down";
    Dir["Left"] = "Left";
    Dir["Right"] = "Right";
})(Dir || (Dir = {}));
console.log(Dir.Down);
//creating object 
var user = {
    id: 1,
    name: 'John'
};
//type assertion 1
var cid = 1;
var customerId = cid;
//type assertion 2
var customerId2 = cid;
function addNum(x, y) {
    return x + y;
}
var user1 = {
    id: 1,
    name: 'john'
};
/*interface can't be used with unions
    adding '?' to field makes it optional
*/
//classes 
/* protect variable can only be accessed within that class or class that extends to that class */
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    return Person;
}());
var Employees = /** @class */ (function (_super) {
    __extends(Employees, _super);
    function Employees(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employees;
}(Person));
// generics 
function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 3.5]);
var strArray = getArray(['str', 'string', 's']);
strArray.push('shush');
console.log(strArray);
