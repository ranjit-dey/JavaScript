/* == TERNARY OPERATOR == */

// condition ? true : false
// if the condition returns true then true is execute otherwise false will execute

let bagPrice = 480;

// check bagPrice is expensive or not
bagPrice >= 500 ? console.log("Bag is expensive") : console.log("Bag is not expensive");


// Another example
let val1 = 87;
let val2 = 8;
let val3 = 10;

// check which is greater among three 
let greaterVal = val1 > val2 ? val1 > val3 ? val1 : val3 : val2 > val3 ? val2 : val3;
console.log(greaterVal)

// using if-else
if(val1 > val2){
    if(val1 > val3){
        console.log(val1)
    }else {
        console.log(val3)
    }
} else {
    if(val2 > val3){
        console.log(val2)
    } else{
        console.log(val3)
    }
}
