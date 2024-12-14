/*

Q => DIFFRENCE beetween Currying and Partial Application

in CURRYING the number function depends on the no of arguments it recieves but it is not in the case of parital Application

*/


function sum(a){
    return function(b,c){
        return a+b+c;
    }
}

const x = sum(10);
console.log(x(12,13));
console.log(x(12,34))

