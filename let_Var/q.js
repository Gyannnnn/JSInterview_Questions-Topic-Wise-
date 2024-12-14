//q1

function abc() {
    console.log(a);
    var a = 10;
}

// abc()

function abc1(){
    console.log(a,b,c);
    const c = 30; 
    let b =80;
    var a = 7;
}

// function abc1() // syntax error becouse const and let are hoisted in temeral zone !

greet();

function greet(){
    console.log("hey There")
}