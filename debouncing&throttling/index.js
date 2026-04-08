//lodash

// debounce  


const btn = document.querySelector(".btn");
const count  = document.querySelector(".increment_count");
const debouncedCount = document.querySelector(".pressed");

let normalCount = 0;
let dCount = 0;

// const debouncingCount = _.debounce(()=>{
//     debouncedCount.innerHTML = ++dCount;
// },800)


// const throttleCount = _.throttle(()=>{
//     debouncedCount.innerHTML  = ++dCount;
// },800)


const myDebounce = (cb,d)=>{
    let timer;
    return function(){
        if(timer) clearTimeout(timer);
        timer = setTimeout(()=>{
            cb();
        },d)
    }
}
const debounceUpdate = myDebounce(()=>{
    debouncedCount.innerHTML = ++dCount;
},800)

btn.addEventListener("click",()=>{
    count.innerHTML = ++normalCount;
    debounceUpdate();
})





