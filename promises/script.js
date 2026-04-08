console.log("Start");


const sub = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let result = false;
        if(result) resolve("success");
        else reject("Failed");
    },1000)
})

sub.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.error(err)
});

console.warn("end");