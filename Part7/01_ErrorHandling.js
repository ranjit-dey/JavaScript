/* Error Handling */

// Compile time error
// e.g : SyntaxError
// let variable 5;


// Runtime error
// console.log(x);



/* try catch finally block */
// catch and finally block are optional but we must have to use one of them otherwise it will throw an error (Missing catch or finally after try)

// First of all try will execute if any error is encountered then it will goes to catch block and will execute the catch block if its not present then it will throw an error and finally block will not be executed

// try{
//     console.log(x);
// }finally{
//     console.log(hello)
// }



// if catch block is present then it will execute that portion then finally block will execute

try {
    console.log(x)
} catch(error){
    console.log('One error is encountered in try block')
} finally {
    console.log('Finally block is executing..')
}



// if no error encountered in try block then catch block will not execute and then finally block will execute


try {
    console.log('Hi, I am try block')
} catch (error) {
    console.log('I think, I don\'t have any use in this program')
} finally {
    console.log('I am the king..')
}


// Custom error
try {
    console.log(x);
} catch (e){
    // throw new Error("Hello sir, you have to declare the varible first.")
} finally {
    console.log('sudhar jao');
}


// error 
try {
    console.log(x)
} catch (error){
    console.log(error)
} finally {
    console.log('I am here')
}