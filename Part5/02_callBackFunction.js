// function arithmeticOperation (operator){
//     if(operator === '+'){
//         return function (num1, num2) {
//             return num1 + num2;
//         }
//     } else if (operator === '-') return (num1, num2) => num1 + num2;
//     else if (operator === '*') return (num1, num2) => num1 * num2;
//     else if (operator === '/') return (num1, num2) => num1 / num2;
//     else throw new Error("Invalid operator");
// }


// function return another function
function arithmeticOperation (operator){
    if(operator === '+' || operator === '-' || operator === '*' || operator === '/'){
        return function (num1, num2) {
            return  eval(`${num1} ${operator} ${num2}`);
        }
    }
    else throw new Error("Invalid operator");
}


let ans = arithmeticOperation('+');
console.log(ans(45, 12));





const arr = [
    function(){
        console.log('Hey,there! I am first function of the array')
    },
    function(){
        return `Hey, I am second.`
    },
    function (name){
        return `Hi, ${name}`
    }
]

let a = arr[0]
console.log(a())
a()
arr[0]()

console.log(arr[1]());
console.log(arr[2]("ranjit"))



const obj = {
    name: "Ranjit",
    wt : 53,
    height : 180,
    work : () => {
        console.log("I am working");
    }
}

console.log(obj.name)
console.log(obj.work()) // it logs the I am working and it does not return anything so the undefined is return
obj.work()