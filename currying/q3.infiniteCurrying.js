/*

INFINTE CURRYING -> sum(1)(2)(3)(4)(5)(6)...(n)

cars24 question
add(5)(2)(4)(5)()



*/


function add(a) {
    return function (b) {
        if (b) return add(a + b);
        return a;
    }
}


console.log(add(5)(2)(4)(5)())





// multiplication

function multiply(a) {
    return function (b) {
        if (b) return multiply(a * b);
        return a;
    }
}


console.log(multiply(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)(11)(12)(13)(14)(15)(16)(17)(18)(19)(20)());