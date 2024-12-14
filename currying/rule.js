function sum(a,b){
    console.log("The Sum Is :"+(a+b))
}

sum(8,3);
//   ||
//   || 
//   V


function f(a){
    return function(b){
        return `${a} ${b}`
    }
}
console.log(f(5)(3));