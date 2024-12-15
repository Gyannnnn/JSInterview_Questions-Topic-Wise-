/*

WHEN WE SEND VALUE WE CALL IT AS SPREADOPERATOR AS IT SPREAD ACROSSS ALL THE VALUES
BUT , WHEN WE RECIEVE THOSE VALUES WE CALL IT AS A REST OPERATOR



*/

function multiply(...nums) { // ---> Spread Operator 
    console.log(nums[0] * nums[1]);
}

var a = [12, 34]
multiply(...a); // ---> Spread Operator

// Q1 FIND THE O/P


// fn = (a, ...numbers,x,y)=>{  REST OPERATOR OR SPREAD OPERATOR IT SHOULD ALWAYS BE THE LAST ONE 
//     console.log(x,y)
// }
fn = (a,x,y, ...numbers)=>{ // so that it can take all the remaining value properly
    console.log(x,y,numbers)
}

fn(1,2,3,4,9,3,5,7,8,9456,132,442)