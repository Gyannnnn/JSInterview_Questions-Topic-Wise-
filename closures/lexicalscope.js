/*
LEXICAL SCOPE :-
The variable defined at the global scope can be accessed in local scope is known as LEXICAL SCOPE

var name = "Gyanranjan"
function greet(){
console.log("HI" +name)
}
greet()

*/


var name = "Gyanranjan"
function greet(){
console.log("HI" +name)
}
greet()

// q1 find o/p

function fun(){
    var name = "Gyanranjan Patra"
    function name1(){ // HERE THE name1 IS THE  CLOSURES
        console.log(name)
    }
    name1()
}

fun();


// CLOSURES
/*
CLOSERS ARE THE COMBINATIONS FUNCTIONS ENCLOSED TOGETHER WHERE THE INNER FUNCTION CAN ACCESESS THE OUTER FUNCTIONS SCOPE

*/


