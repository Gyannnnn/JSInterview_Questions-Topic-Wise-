let userName1 = null;
let userName2 = "Gyanranjan Patra";

console.log(userName1 ?? userName2)


let count = 0;

console.log(count || 10); // 10  (because 0 is falsy)
console.log(count ?? 10); // 0   (because 0 is NOT null/undefined)
