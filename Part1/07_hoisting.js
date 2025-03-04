/* 
Use of a function or variable before declaring it is known as hoisting.

1. Hoisting works on only that variable which is declared using 'var' keyword and those functions which is written in traditional format 

function fun_name(parameter1, parameter2...) {
    code ---
    code ---
    code ---
}

*/

// Hoisting
console.log(age); // undefined (can't access the value, it will not throw any error)
var age = 25;

/*
// not hoisting
console.log(name1); // will throw an error
let name1 = "Ranjit";

// not hoisting
console.log(name2); // will throw an error
const name2 = "Babbar";
*/


// Hoisting
greet('Ranjit');
function greet(name){
    console.log(`Hi, ${name}`);
}

// Other function not support hoisting but -
console.log(greetMe)

var greetMe = function () {
    return `Hi, sir`;
}


// also for class , like you can't create an object before declaring a class