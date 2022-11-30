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
// class Student {
//     private studId : string;
//     private studName : string;
//     private age : number;
//     constructor(studId: string, studName : string, age : number) {
//         this.studId = studId;
//         this.studName = studName
//         this.age = age;
//     }
// }
// let userB = new Student("S002", "Ragamayi", 23);
// class Student {
//     // Constructor Injection
//     constructor(public studId: string, private studName: string, private age: number) { }
//     public getDetails() : string {
//         return `${this.studId} - ${this.studName} || ${this.age}`
//     }
// }
// let userA = new Student("S001", "Tanvi", 23);
// console.log(userA.getDetails())
// private
// public
// protected
// enum COLORS {
//     RED,
//     BLUE,
//     GREEN
// }
// let favColor : COLORS = COLORS.BLUE
// class A {}
// class B{}
// class C {
//     constructor(a : A, b : B){}
// }
// let a = new A();
// let b = new B();
// let c = new C(a, b)
// STATIC : 
// - static members can only be called via class name
// - static members holds their value for each class instance/object
// class Animal {
//     static numOfAnimals: number = 0;
//     breed: string;
//     constructor(breed: string) {
//         this.breed = breed;
//         Animal.numOfAnimals++;
//     }
//     static getNumberOfAnimal(): number {
//         return Animal.numOfAnimals;
//     }
// }
// let rabbit = new Animal("Rabbit");
// console.log(rabbit.breed)
// console.log(Animal.numOfAnimals);           // 1
// let cat = new Animal("Tiger");
// console.log(cat.breed);
// console.log(Animal.numOfAnimals);           // 2
// console.log(Animal.getNumberOfAnimal());
// GETTER & SETTER - ENCAPSULATION
// class Ninja {
//     private _isBlackBelt: boolean = false;
//     get isBlackBelt() {
//         return this._isBlackBelt;
//     }
//     set isBlackBelt(value: boolean) {
//         this._isBlackBelt = value;
//     }
// }
// let tod = new Ninja();
// // ABSTRACTION
// console.log(tod.isBlackBelt)
// tod.isBlackBelt = true;
// console.log(tod.isBlackBelt)
// Method Overloading - 3 signatures
// - Type of parameters
// - Number of parameters
// - Return type
// function add(a: number, b?: number): number;
// function add(a: string, b?: string): string;
// function add(a: any, b?: any): any {
//     if (b) {
//         return a + b;
//     }
//     return a + a
// }
// console.log(add(10))
// console.log(add(10, 20));
// console.log(add("Hello"));
// console.log(add("Hello", "World"));
// INTERFACE
// - blueprint of class
// - declare the methods
// - full abstraction
// interface Resource {
//     id: number;
//     status: string;
//     changeOil(): string;
// }
// class Server implements Resource {
//     id: number;
//     status: string;
//     constructor(serverId: number, serverStatus: string) {
//         this.id = serverId;
//         this.status = serverStatus;
//     }
//     changeOil(): string {
//         return "Changing the oil..."
//     }
// }
// let serverA: Resource = new Server(1001, "running");
// console.log(serverA.changeOil())
// // ABSTRACT CLASSES
// abstract class Person {
//     private name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     display(): void {
//         console.log("Name : ", this.name)
//     }
//     abstract find(name: string): string;
// }
// class Employee extends Person {
//     constructor(empName: string) {
//         super(empName)
//     }
//     find(name: string): string {
//         return "Finding the person"
//     }
// }
// let userA: Person = new Employee("USER-A")
// userA.display()
// GENERICS
// Built-in Generic
// let numbers : Array<number> = [12,3,4,6,2];
// Custom Generic
function addAtBeginning(val, arr) {
    return [val, ...arr];
}
const numArr = addAtBeginning(201, [202, 203, 204]);
const strArr = addAtBeginning("Hello", ["How", "are", "you", "?"]);
const objArr = addAtBeginning({ name: "Sumit K", age: 32 }, [{ name: "Tanvi", age: 23 }, { name: "Ragamayi", age: 23 }]);
console.log(objArr);
let server = { id: 201, status: true };
let server2 = { id: "R001", status: 1 };
