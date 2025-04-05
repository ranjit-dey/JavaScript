/* ========== Type 1 ========== */
function sayMyName (name1){
    return `Hi, ${name1}`;
}

const greetMessage = sayMyName("Ranjit Dey");
console.log(greetMessage);


/* ========== Type 2 ========== */
const squreOfNumber = function (num){
    return num**2;
}

console.log(squreOfNumber(5));


/* ========== Type 3 ========== */
const factorialOfNumber = (num) => {
    if(num === 0) return 1;
    return num * factorialOfNumber(num-1);
}

console.log(factorialOfNumber(5))


/* Add 1 to each element of the value*/
let arr = [1, 2, 3, 4];
let newArr = [];
arr.forEach((element) => newArr.push(element+1))
console.log(newArr)