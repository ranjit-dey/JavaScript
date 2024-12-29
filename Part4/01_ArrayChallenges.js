// Array

/*
1. Declare an array named 'teaFlavors' that contains the strings "green tea", 'black tea', and 'oolong tea',
    Access the first element of thee array and store it in a variable named 'firstTea'.
*/
console.log('\n------------- challenge 1 -------------\n')
let teaFlavors = ['green tea', 'black tea', 'oolong tea'];
let firstTea = teaFlavors[0];
console.log(firstTea);

/* 
2. Create an array named cities which contains 'London', 'Kolkata', 'Jaipur', 'Tokio', 'Paris'.
change the second element by 'Mumbai'.
*/

console.log('\n------------- challenge 2 -------------\n')
let cities = ['London', 'Kolkata', 'Jaipur', 'Tokio', 'Paris'];
cities[2] = 'Mumbai';
console.log(cities);

/* 
3. Declare an array named 'citiesVisited' containing 'Mumbai' and 'Sydney',
Add 'Berlin' to the array using the 'push' method
*/

console.log('\n------------- challenge 3 -------------\n')
let citiesVisited = ['Mumbai', 'Sydney'];
citiesVisited.push('Berlin');
console.log(citiesVisited);

citiesVisited[citiesVisited.length] = 'Delhi';
console.log(citiesVisited);

/* 
4. You have an array named 'teaOrders' with 'chai', 'iced tea', 'matcha', and 'earl grey'
Removed the last element of the array using the 'pop' method and store it in a variable named 'lastOrder'
*/

console.log('\n------------- challenge 4 -------------\n')
let teaOrders = ['chai', 'iced tea', 'matcha', 'earl grey'];
const lastOrder = teaOrders.pop();
console.log(teaOrders);
console.log(lastOrder);

/* 
5. You havee an array named 'popularTeas' containing 'green tea', 'oolong tea' and 'chai'.
Create a soft copy of this array named 'softCopyTeas'.
*/
// Notes : array is reference while it changes accordingly all the copy of the array will be changed.

// let n = 5;
// let a = n;
// n = 4;
// console.log(a);
// console.log(n);

console.log('\n------------- challenge 5 -------------\n')
let popularTeas = ['green tea', 'oolong tea', 'chai'];
let softCopyTeas = popularTeas;
console.log(popularTeas);
console.log(softCopyTeas);

popularTeas.pop();

console.log(popularTeas);
console.log(softCopyTeas); 

softCopyTeas.pop();

console.log(popularTeas)
console.log(softCopyTeas); 


/* 
6. You have an array named 'topCities' containing 'Berlin', 'Singapore' and 'New York'.
Create a hard copy of this array named 'hardCopyCities'
*/

console.log('\n------------- challenge 6 -------------\n')
let topCities = ['Berlin', 'Singapore', 'New York'];
let hardCopyCities = [...topCities]; // spread operator
let anotherCopy = topCities.slice(); // another method named slice()
console.log(topCities);
console.log(hardCopyCities);
console.log(anotherCopy);


/* 
7. You have two arrays: 'europeanCities' containing 'Paris' and 'Rome' and 'asianCites' containing 'Tokyo' and 'Bangkok'
Merge these two arrays into a new array named 'worldCities'
*/

console.log('\n------------- challenge 7 -------------\n')
let europeanCities = ['Paris', 'Rome'];
let asianCites = ['Tokyo', 'Bangkok'];
let worldCities = asianCites.concat(europeanCities); // Right Way
console.log(worldCities);

let newArr = asianCites + europeanCities; // not the actual answer
console.log(newArr);

let newBrr = [asianCites + europeanCities]; // not the actual answer
console.log(newBrr);

let newCrr = [asianCites , europeanCities]; // not the actual answer
console.log(newCrr);


/* 
8. You have an array named 'teaMenu' containing 'masala chai', 'oolong tea', 'green tea' and 'earl grey'
Find the length of the array and store it in a variable named 'menuLength'
*/

console.log('\n------------- challenge 8 -------------\n')
let teaMenu = ['masala chai', 'oolong tea', 'green tea', 'earl grey'];
let menuLength = teaMenu.length;
console.log(`Total items : ${menuLength}`);

/* 
9. You have an array named 'cityBucketList' containing 'Kyoto', 'London', 'Cape Town' and 'Vancouver'
    Check if 'London' is in the array and store the result in a variable named 'isLondonInList'
*/

console.log('\n------------- challenge 9 -------------\n')
let cityBucketList = ['Kyoto', 'London', 'Cape Town', 'Vancouver']
let isLondonInList = cityBucketList.includes('London');
console.log(isLondonInList);

/* 
10. Remove first element from an array
*/

console.log('\n------------- challenge 10 -------------\n')
let numArr = [2,5,6,9];
const firstElement = numArr.shift();
console.log(numArr);
console.log(`Element which has removed: ${firstElement}`);

/* 
11. Add some element in an array from begining 
*/

console.log('\n------------- challenge 11 -------------\n')
let numBrr = [2,5,6,9];
numBrr.unshift( 4, 0);
console.log(numBrr);

/* 
12. Find the index of an element
*/

console.log('\n------------- challenge 12 -------------\n')
let numCrr = ['London', 'Berlin', 'Tokyo', 'Mumbai', 'Delhi', 'Kolkata'];
console.log(numCrr.indexOf('dfas')); // If not found it returns -1
console.log(numCrr.indexOf("Delhi"));










