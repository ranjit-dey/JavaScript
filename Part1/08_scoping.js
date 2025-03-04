/* 
Global Scoping
    - Supported by 'var' 'let' and 'const'
    - You can access these variable anywhere in the program
*/

var age = 21;
let height = 179;
const myName = 'Ranjit Dey';

{
    console.log(age, height, myName);
    age++;
}

console.log(age)


/*
Function Scoping
    - It supported by 'var', 'let' and 'const'
    - It means you can't access the varible outside the function;
*/


function hello(){
    let a = 22;
    let c = 41;
}



/*
Block Scoping
    - It supported by 'let' and 'const'
    - You can access the variable which is declared in a block using 'var' outside the block
*/

{
    let a = 5;
    const h = "Hello";
    var b = 6;
}

// console.log(a) // throw an error 
// console.log(h) // throw an error
console.log(b)
