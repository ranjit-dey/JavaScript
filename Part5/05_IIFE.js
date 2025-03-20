/* == IIFE : Immediately Invoked Function Expressions == */

// after creating a function we have to call it for execution. In IIFE function will be called automatically

// ()()
// first parenthesis is creating function and second parenthesis is for executing the function

// Traditional way
function greet(name){
    console.log(`${name}, welcome!`)
}

// remove the semicolon you will face an error, if you want to remove the semicolon then remove the IIFE way function.
greet('ranjit');


// IIFE way
(function sayHello(name){
    // named IIFE
    console.log(`Hello, ${name}`);
})('ranjit'); // remove the semicolon 


((user)=>{
    // unnamed IIFE
    console.log(`Hi, ${user}`)
})('chapali');