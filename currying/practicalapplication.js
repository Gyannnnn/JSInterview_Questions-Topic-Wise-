/*

Manipulating Dom By Currying



*/



function manipulateDom(id){
    return function(content){
        document.querySelector("#"+id).textContent = content   
    }
}

// const updatedDom = manipulateDom("h1");
// updatedDom("Ma Chuda Behechod")
manipulateDom("h1")("Good Morning Gyanranjan Patra")