// Checking if a numver is greater than another number:

let num1 = 3;
let num2 = 8;
console.log("I am regular upper code");

if(num1 > num2){
    console.log("Num 1 is greater than num2");
}else {
    console.log("Nope, Num1 is NOT greater!!");
}

console.log('------------------------------------------------')

// Check a variable is number or not

let num = 56;
if(typeof num === 'number') console.log('Yeah! It is a number.');
else console.log('Nope!, It is not a number.')

console.log('------------------------------------------------')

// Check a array is empty or not

let arr = [];

if(arr.length === 0){
    console.log("Array is empty!");
} else {
    console.log("Array is not empty!");
}


console.log('------------------------------------------------')

// Check a object is empty or not

let obj = {}

if(Object.keys(obj).length == 0){
    console.log("Object is empty");
} else {
    console.log("Object is not empty")
}

// in operator
let arr5 = [1,2,3,6, 8];
// if(4 in arr5) console.log("hi")
console.log(arr5.length)
console.log(arr5[2])
delete arr5[2];
console.log(arr5.length)
console.log(arr5[2])
