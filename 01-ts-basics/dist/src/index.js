"use strict";
// let user: string = "Foo BAr";
// user = "101";
// TYPES - ABSENCE OF VALUE
// let nullValue: null = null;
// nullValue = "Hello World";
// let undefinedVar: undefined = undefined;
// undefinedVar = "Hello World";
// console.log(nullValue === undefinedVar);
// function add(n1: number, n2: number): void {
//     console.log(n1 + n2);
// }
// console.log(add(2, 4));
// add(5, 4)
// function throwError() : never {
//     throw new Error("Something went wrong")
// }
// let anyVar : any = "Hello World";
// anyVar = 201;
// UNKNOW - always check the type before assigning it
// let unknownVar: unknown = 201;
// if (typeof unknownVar === 'number') {
//     let numberVar: number = unknownVar;
//     console.log(numberVar);
// }
// ANY : can hold any type of value even UNKNOWN
// let anyVar : any = unknownVar;
// Union Type
let userAge = 32;
userAge = "Thirty-Two";
// Tuple Type
let users = ["Foo bar", 32, true];
let foo = {
    firstName: "FOO",
    lastName: "BAR",
    age: new Date("Dec 21, 1982")
};
class Server {
    constructor(serverId, serverStatus) {
        this.id = serverId;
        this.status = serverStatus;
    }
    changeOil() {
        return "Changing the oil...";
    }
}
let serverA = new Server(1001, "running");
console.log(serverA.changeOil());
// ABSTRACT CLASSES
class Person {
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log("Name : ", this.name);
    }
}
class Employee extends Person {
    constructor(empName) {
        super(empName);
    }
    find(name) {
        return "Finding the person";
    }
}
let userA = new Employee("USER-A");
userA.display();
