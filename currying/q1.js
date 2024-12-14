//q1 sum(2)(6)(1)


// function sum1(a,b,c){
//     return a+b+c;
// }
// console.log(sum1(2,6,1));

function sum(a){
    return (b)=>{
        return (c)=>{
            return a+b+c;
        }
    }
}

console.log(sum(2)(6)(1));