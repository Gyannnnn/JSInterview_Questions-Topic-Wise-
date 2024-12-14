// var => globally scoped ,  can be re-declared and updated
// let => Block scoped , can be updated but not redeclared
// const => Block scoped , can't be redeclared or updated

let a =9;
var b = 89;
const c = 78;
a = 89

var b = "gyana"


let i =0;

for(i = 0; i< 10; i++){
    let g = "Gyana";
    const age = 20;
    console.log("Hello")
}

//console.log(g);  => error bcz it is defined inside function block scope
// console.log(age); => error bcz it is defined inside function block scope



//  there are 7 primitive types of data typeof

//  1. NULL
//  2. BOOLEAN
//  3. NUMBER
//  4. STRING
//  5. UNDEFIEND
//  6. BIGINT

//  OBJECT is a non-primitive data type