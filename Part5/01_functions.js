/* 
1. Write a function named 'makeTea' that takes one parameter, 'typeOfTea' and returns a string like 'Making green tea' when called with 'green tea'.
    Store the result in a variable named 'teaOrder'.
*/

// function greet(name){
//     console.log(`Hello, ${name}!`);
// }

// greet("ranjit dey");
console.log('\n------------- Program 1 -------------\n')
function makeTea(typeOfTea){
    return `Making ${typeOfTea}..`
}

let teaOrder = makeTea('green tea');
console.log(teaOrder);


/* 
2. Create a function named 'orderTea' that takes one parameter, 'teaType'. Inside this funciton, create another function named 'confirmOrder' that returns a message like 'Order confirmed for chai'
    Call 'confirmOrder' from within 'orderTea' and return the result.    
*/
console.log('\n------------- Program 2 -------------\n')
function orderTea(teaType){
    function confirmOrder(){
        return `Order confirmed for chai`;
    }
    return confirmOrder();
}

let orderStatus = orderTea('green tea');
console.log(orderStatus);


/* 
3. Write an arrow function named 'calculateTotal' that takes two parameters: 'price' and 'quantity'. The funciton should return the total cost by multiplying the 'price' and 'quantity'.
    Store the result in a variable named 'totalCost'.
*/
console.log('\n------------- Program 3 -------------\n')
const calculateTotal = (price, quantity) => price * quantity
// const calculateTotal = (price, quantity) => {
//     return (price * quantity);
// };



let totalCost = calculateTotal(40, 2);
console.log(`Total of your chai : ${totalCost}`);

/* 
4. Write a function named 'processTeaOrder' that taked another function, 'makeTea', as a parameter and calls it with the argument 'earl grey'.
    Return the result of calling 'makeTea'

*/
console.log('\n------------- Program 4 -------------\n')
function makeTea(typeOfTea){
    return `Making tea of : ${typeOfTea}`
}
function processTeaOrder(teaFunction){
    return teaFunction('earl grey');
}

let order = processTeaOrder(makeTea);
console.log(typeof order)
console.log(order);

/* 
5. Write a function named 'createTeaMaker' that returns another funciton. The returned funciton should take one parameter, 'teaType' and return a message like 'Making green tea'.
    Store the returned funciton in a variable named 'teaMaker' and call it with 'green tea'.

*/
console.log('\n------------- Program 5 -------------\n')
// function completed(teaType){
//     return `Making green tea..`
// }

// function createTeaMaker(teaType){
//     return completed(teaType)
// }

// let teaMaker = createTeaMaker();
// console.log(teaMaker)

function createTeaMaker(){
    return function(teaType){ // ************** 
        return `Making ${teaType}`;
    }
}
let teaMaker = createTeaMaker();
// console.log(teaMaker('Green Tea'));
console.log(typeof teaMaker); // Very Important********

let result = teaMaker('Green Tea');
console.log(result);





console.log('\n')