/*
A closure in JavaScript is the combination of a function and the lexical environment within which that function was declared. This means that an inner function "remembers" and can access the variables and parameters of its outer (enclosing) function, even after the outer function has finished executing.
*/

function order(){
    let value = 5;
    return function() {
        value++; // accessing the variable which is declared in the parent function
        return value;
    }
}
let value = 5;
let increment  = () => {
    value++;
    return value;
};

let callOrder = order();
console.log(increment())
console.log(increment())
console.log(callOrder())
console.log(callOrder())
console.log(callOrder())