// Memoization
const cache = {};
function calculate(a,b){
    var result = (a+b)*(a+b)*(b+b);
    console.log("Calculation function called",result);   
    return result;
}

function memory(a,b){
    let key = a+":"+b;
    if(!cache[key]){
        let result = calculate(a,b);
        cache[key] = result;
        return result;
    }else{
        console.log("Result from cache",cache[key]);
        return cache[key];

    }
}

