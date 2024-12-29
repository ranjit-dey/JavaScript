// Loops

/* 
1. Write a program to calculate the sum form 1 to 5
*/
console.log('\n-------- Program 1 --------\n')
let sum = 0;
let i = 1;
while(i <= 5){
    sum = sum + i;
    i++;
}

console.log(`Sum : ${sum}`);


/* 

2. Write a 'while' loop that counts down from 5 to 1 and stores the numbers in an array named 'countDown'.

*/
console.log('\n-------- Program 2 --------\n')

let countDown = [];
let j = 5;
while(j >= 1){
    console.log(`Countdown : ${j}`);
    countDown.push(j);
    console.log(countDown);
    j--;
}

/* 

3. Write a 'do while' loop that prompts a user to enter their favorite tea type until they enter 'stop' , 
Store each tea type in an array named 'teaCollection'

*/

/* // Run this program in browser
console.log('\n-------- Program 3 --------\n')

const teaCollection = [];
let teaType;

do {
    teaType = prompt(`Enter you favorite tea type (type "stop" to finish)`);
    if(teaType !== 'stop'){
        teaCollection.push(teaType);
    }  
} while (teaType != 'stop');

console.log(teaCollection) */


/* 
4. Write a 'for' loop that multiplies each element in the array '[2,4,6]' by 2 and stores the results in a new array named 'multipliedNumbers'
*/


console.log('\n-------- Program 4 --------\n')
let numbers = [2,4,6];
let multipliedNumbers = [];

for(let i = 0; i < numbers.length; i++){
    multipliedNumbers[i] = numbers[i]*2;
}

console.log(numbers);
console.log(multipliedNumbers);



/* 
5. Write a 'for' loop that lists all the cities in the array '['Paris', 'New York', 'Tokyo', 'London']' and stores each city in a new array named 'cityList'
*/


console.log('\n-------- Program 5 --------\n')

let cities = ['Paris', 'New York', 'Tokyo', 'London'];
let cityList = [];

for(let i = 0; i < cities.length; i++){
    cityList.push(cities[i]);
}

console.log(cityList);

console.log('\n\n')