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
let userAge: string | number = 32;

userAge = "Thirty-Two";

// Tuple Type

let users: [string, number, boolean] = ["Foo bar", 32, true];
// console.log(users);

// Structural Type / Custom Type

type User = {
    firstName: string,
    lastName: string,
    age: Date
}

let foo: User = {
    firstName: "FOO",
    lastName: "BAR",
    age: new Date("Dec 21, 1982")
}

// class Student {
//     studId : string;
//     studName : string;
//     age : number;

//     constructor(studId: string, studName : string, age : number) {
//         this.studId = studId;
//         this.studName = studName
//         this.age = age;
//     }
// }

class Student {

    // Constructor Injection
    constructor(public studId: string, private studName: string, private age: number) { }

    getDetails() {
        return `${this.studId} - ${this.studName} || ${this.age}`
    }
}

let userA = new Student("S001", "Tanvi", 23);
console.log(userA.getDetails())


// private
// public
// protected