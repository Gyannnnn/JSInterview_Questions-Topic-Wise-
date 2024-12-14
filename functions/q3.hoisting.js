
greet("gyanaranjan Patra");

function greet(name){
    console.log("Hi "+name);
}


// q FIND THE OUTPUT OF THE FOLLOWING CODE 

var x =90;
var fun = function (){
    console.log(x);  // it trying to access the value under this but it is initialised to undefined hance the output would be undefined note :- when there is already a local value present inside then consider that loacl value first
    var x = 34;

}

console.log(x)
fun();


/*
ANS ===> undefined
HOISTING IS 2 STEP PROCESS IT INITIALISE THE GLOBAL SCOPE FIRST TO UNDEFINED AND THEN IT COME TO THE LOCAL SCOPE THEN IT INITIALISE IT TO UNDEFINED , WHEN THERE IS A LOCAL VARIBLE PRESENT INSIDE A LOOP CONSIDER THAT VARIABLE , IN THIS CASE THIS CASE var x =34 IS INITIALISED TO UNDEFINED AND HENCE THE OUTPUT WOULD BE UNDEFINED 
*/