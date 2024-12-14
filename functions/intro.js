/*
function defination
    function square(a){
    return a*a;
    }

function call 
square()


-> when we store a function inside a variable it is called as function expressions 
let s = square(2);

q1=> what are first class functionin js
ans=>>>> First class function in js are the function which can be used or passed inside a function just like a variable are called first class function .

q4=>  WHAT IS IIFE
ans =>>  immediately invoked functionexpression

*/


// IIFE immediately invoked function expression

(function square(a){
    console.log(a*a)
})(5);
