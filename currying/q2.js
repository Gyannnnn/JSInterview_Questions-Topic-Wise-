/*
Question2
evaluate("sum")(4)(2) => 6
evaluate("multiply")(4)(2) => 8
evaluate("division")(4)(2) => 2
evaluate("subtraction")(4)(2) => 2




*/

// ans

function eval(a) {
    return function (b) {
        return function (c) {
            if (a === "sum") {
                return b + c;
            } else if (a === "multiply") {
                return b * c;
            } else if (a === "division") {
                return b / c;
            } else if (a === "subtraction") {
                return b - c;
            }
        }

    }
}

console.log(eval("sum")(4)(2));
console.log(eval("subtraction")(4)(2));