const nums = [1,3,5,67,32,2,1];
let nums_result = nums.map((num)=>num*5);
console.log(nums_result);

const a = [1,2,3,4,5,6,7,8,9]
const sum = a.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue;

},0)

console.log(sum);