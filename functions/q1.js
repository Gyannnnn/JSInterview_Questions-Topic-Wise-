

// o/p of the following code   IIFE

(function(x){
    return (function(y){
        console.log(x)
    })(2)
})(3);