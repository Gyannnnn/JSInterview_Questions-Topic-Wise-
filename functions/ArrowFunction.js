/*

ARROW FUNCTIONS WERE INTRODUCED IN ES6 VERSION OF JAVASCRIPT , THEY ARE SIMILAR TO NORMAL FUNCTION BUT BEHAVES DIFFERENTLY IN SOME KIND .

--------------DIFFERENCE IN NORMAL AND ARROW FUNCTION------------
1. SYNTAX ARROW FUNCTION HAVE CLEANER SYNTAX
2. IMPLICT "return"  KEYWORD
3. ARGUMENTS WE CAN be USEd directly INSIDE THE FUNCTION IN NORMAL FUNCTION WITHOUT RECIEVING BUT IN CASE OF ARROW FUNCTION WE WILL GET ERRORS .

*/

// normal function
const add = function(num1,num2){
    return num1+num2
}

const add1 = (num1,num2)=>num1+num2

console.log(add(1,2))
console.log(add1(1,2))


const fn = function(){
    console.log(arguments);
}

const fn1 = ()=>console.log(arguments)

fn(1,2,3,4);
fn1(1,2,3,4,3,54)