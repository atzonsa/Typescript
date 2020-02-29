export {}
let message = "Hello World";
console.log(message);
message = "Welcome back";
console.log(message);

let x = 10;
let x1 = 30;
const y = 20;

let sum = x+y;
console.log(sum);

const title = "Heading";
console.log(title);

let total: number = 1000;
console.log(total);

let name: string = "Ankit";
console.log(name);

let isTrue: boolean = true;
console.log(isTrue);

let line: string = `My name is ${name}`;
console.log(line);

let n: null = null;
console.log(n);

let u: undefined = undefined;
console.log(u);

let isNew: boolean = null;
console.log(isNew);

let myName: string = undefined;
console.log(myName);

let list1: number[] = [1, 2, 3, 4, 5, 6];
console.log(list1);

let list2: Array<number> = [1, 2, 3, 4, 5, 6];
console.log(list2);

let tup: [string, number] = ['Jack', 31];
console.log(tup);

enum en {AAAA = 5, BBBB = 7, CCCC = 9};

let c: en = en.BBBB;
console.log(c);

let anyvalue: any = 10;
console.log(anyvalue);

anyvalue = "Typescript";
console.log(anyvalue);

let dyVarialble: any = 10;

//console.log(dyVarialble.name);
//dyVarialble();
//dyVarialble.toUpperCase();


let dyVarialble1: unknown = 10;

//console.log(dyVarialble1.name);
//dyVarialble1();
//(dyVarialble as string).toUpperCase();

//function hasName(obj: any): obj is { name: string} {
//    return !!obj && 
//    typeof obj === "object" && 
//    "name" is obj
//}

let a1;
a1 = 10;
a1 = true;

let b2 = 20;

let multitype : number | boolean;
multitype = 500;
multitype = false;

let anyType: any;
anyType = 20;
anyType = true;

function add(num1, num2){
    return num1+num2;
}

function addTypeScript(num1: number, num2: number){
        return num1+num2;
}

console.log(addTypeScript(100, 200));

function addTypeScriptWithOptionalParameters(num1: number, num2?: number) : number{
    if (num2)
        return num1+num2;
    else
        return num1;
}

console.log(addTypeScriptWithOptionalParameters(100));
console.log(addTypeScriptWithOptionalParameters(100, 200));

function addTypeScriptWithDefault(num1: number, num2?: number) : number{
    if (num2)
        return num1+num2;
    else
        return num1;
}


function addTypeScriptWithReturnType(num1: number, num2: number) : number{
    return num1+num2;
}

console.log(addTypeScriptWithReturnType(100,200));

function addTypeScriptWithDefaultParameters(num1: number, num2: number = 500) : number{
    return num1+num2;
}

console.log(addTypeScriptWithDefaultParameters(100));
console.log(addTypeScriptWithDefaultParameters(100, 200));

function fullName (person: {fname: string, lname: string}){
    console.log(`${person.fname} ${person.lname}`)
}

let p = {
    fname: 'Ankit',
    lname: 'Zonsa'
};

fullName(p);

interface Address {
    addLine1: string;
    addLine2: string;
    city: string;
    pincode?: number;  //optional
    country: string;
}

function address (add: Address){
    console.log(`${add.addLine1}, ${add.addLine2}, ${add.city}-${add.pincode}, ${add.country}`)
}

let aMukesh = {
    addLine1: "Antilla, Ambani Tower",
    addLine2: "Altamount Road",
    city: "Mumbai",
    pincode: 400026,
    country: "India"
}

address(aMukesh);

class Employee {
    employeeName: string;

    constructor(name: string){
        this.employeeName = name;
    }
}








