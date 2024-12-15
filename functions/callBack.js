/*
CALLBACK FUNCTION IS THAT FUNCTION WHICH IS PASSED AS AN ARGUMENT IN ANOTHER FUNCTION TO COMPLETE SOME TASK EXAMPLE:- EVENT LISTENERS IN JAVASCRIPT, SETIMEOUT

*/

function greet(name) {
    console.log("Good Morning " + name);
}

function test(greet) {
    console.log("Call Back")
    greet("Gyanranjan patar")
}

test(greet)

/*
document.addEventListener("click",()=>{
    console.log("Clicked")
})

*/