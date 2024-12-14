const a = [2,3,45,67,84,2,1,3,547,78,96,43,56,7]
let b = a.map((num,index)=>`${index}:${num*num} `)
console.log(b);

const c = [21,34,6,89,2,4,68,46,8,53,7,3,8,]
let c_result = c.filter((num)=>num>10);
console.log(c_result);

const n = [1,2,4,5,7,8,9];
let n_result = n.reduce((cValue,nValue)=>cValue+nValue);
console.log(n_result);