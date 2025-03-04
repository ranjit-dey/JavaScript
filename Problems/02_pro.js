// Factorial Calculate

function calculateFactorial(num){
    if(num === 0) return 1;
    return num * calculateFactorial(num-1)
}

console.log( calculateFactorial(5))

let num = 5;

let neArr = Array.from(Array(5).keys()).map((e) => e+1).reduce((acc, curr) => {
    if(acc == 0) return 1
    else return acc*curr;
});

console.log(neArr)