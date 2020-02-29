"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "Hello World";
console.log(message);
message = "Welcome back";
console.log(message);
var x = 10;
var x1 = 30;
var y = 20;
var sum = x + y;
console.log(sum);
var title = "Heading";
console.log(title);
var total = 1000;
console.log(total);
var name = "Ankit";
console.log(name);
var isTrue = true;
console.log(isTrue);
var line = "My name is " + name;
console.log(line);
var n = null;
console.log(n);
var u = undefined;
console.log(u);
var isNew = null;
console.log(isNew);
var myName = undefined;
console.log(myName);
var list1 = [1, 2, 3, 4, 5, 6];
console.log(list1);
var list2 = [1, 2, 3, 4, 5, 6];
console.log(list2);
var tup = ['Jack', 31];
console.log(tup);
var en;
(function (en) {
    en[en["AAAA"] = 5] = "AAAA";
    en[en["BBBB"] = 7] = "BBBB";
    en[en["CCCC"] = 9] = "CCCC";
})(en || (en = {}));
;
var c = en.BBBB;
console.log(c);
var anyvalue = 10;
console.log(anyvalue);
anyvalue = "Typescript";
console.log(anyvalue);
var dyVarialble = 10;
//console.log(dyVarialble.name);
//dyVarialble();
//dyVarialble.toUpperCase();
var dyVarialble1 = 10;
//console.log(dyVarialble1.name);
//dyVarialble1();
//(dyVarialble as string).toUpperCase();
//function hasName(obj: any): obj is { name: string} {
//    return !!obj && 
//    typeof obj === "object" && 
//    "name" is obj
//}
var a1;
a1 = 10;
a1 = true;
var b2 = 20;
var multitype;
multitype = 500;
multitype = false;
var anyType;
anyType = 20;
anyType = true;
function add(num1, num2) {
    return num1 + num2;
}
function addTypeScript(num1, num2) {
    return num1 + num2;
}
console.log(addTypeScript(100, 200));
function addTypeScriptWithOptionalParameters(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log(addTypeScriptWithOptionalParameters(100));
console.log(addTypeScriptWithOptionalParameters(100, 200));
function addTypeScriptWithDefault(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
function addTypeScriptWithReturnType(num1, num2) {
    return num1 + num2;
}
console.log(addTypeScriptWithReturnType(100, 200));
function addTypeScriptWithDefaultParameters(num1, num2) {
    if (num2 === void 0) { num2 = 500; }
    return num1 + num2;
}
console.log(addTypeScriptWithDefaultParameters(100));
console.log(addTypeScriptWithDefaultParameters(100, 200));
function fullName(person) {
    console.log(person.fname + " " + person.lname);
}
var p = {
    fname: 'Ankit',
    lname: 'Zonsa'
};
fullName(p);
function address(add) {
    console.log(add.addLine1 + ", " + add.addLine2 + ", " + add.city + "-" + add.pincode + ", " + add.country);
}
var aMukesh = {
    addLine1: "Antilla, Ambani Tower",
    addLine2: "Altamount Road",
    city: "Mumbai",
    pincode: 400026,
    country: "India"
};
address(aMukesh);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.hello = function () {
        console.log("Hello, how are you " + this.employeeName + "?");
        this.bye();
    };
    Employee.prototype.promotion = function () {
        console.log("You are promoted " + this.employeeName + "!!!!");
    };
    Employee.prototype.bye = function () {
        console.log("Bye " + this.employeeName + "?");
    };
    return Employee;
}());
var emp = new Employee("Ankit");
console.log(emp.employeeName);
emp.hello();
//emp.bye();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.roles = function () {
        console.log("Manager roles in company");
        man.promotion();
    };
    return Manager;
}(Employee));
var man = new Manager('Nitin');
man.roles();
man.hello();
console.log(man.employeeName);
