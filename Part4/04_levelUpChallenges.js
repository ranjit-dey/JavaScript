/* 
1. Write a 'for' loop that loops through the array ['green tea', 'black tea', 'chai', 'oolong tea'] and stops the loop when it finds 'chai'
    Store all teas before 'chai' in a new array named 'selectedTeas'
*/

console.log('\n------------ Program 1 ------------\n')

let teas = ['green tea', 'black tea', 'chai', 'oolong tea'];
let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
    if (teas[i] === 'chai') break;
    selectedTeas.push(teas[i]);
}

console.log(teas)
console.log(selectedTeas)

/* 
2. Write a 'for' loop that loops through the array ['London', 'New York', 'Paris', 'Berlin'] and skips 'Paris',
    Store the other cities in a new array named 
*/

console.log('\n------------ Program 2 ------------\n')
let cities = ['London', 'New York', 'Paris', 'Berlin'];
let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
    if (cities[i] === 'Paris') continue;
    visitedCities.push(cities[i]);
}

console.log(cities);
console.log(visitedCities);

/* 
3. Use a 'for-of' loop to iterate through the array [1, 2, 3, 4, 5] and stop when the number '4' is found.
    Store the numbers before '4' in an array named 'smallNumbers'.
*/

console.log('\n------------ Program 3 ------------\n')
let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const element of numbers) {
    if(element === 4) break;
    smallNumbers.push(element)
}

console.log(numbers);
console.log(smallNumbers);

/* 
4. Use a 'for-of' loop to iterate through the array ['chai', 'green tea', 'herbal tea', 'black tea'] and skip 'herbal tea'
    Store the other teas in an array named 'preferredTeas'.
*/

console.log('\n------------ Program 4 ------------\n')
let collectionTea = ['chai', 'green tea', 'herbal tea', 'black tea'];
let preferredTeas = [];

for (const teas of collectionTea) {
    if(teas === 'herbal tea') continue;
    preferredTeas.push(teas);
} 

console.log(collectionTea)
console.log(preferredTeas)


/* 
5. Use a 'for-in' loop to loop through an object containing city populations.
    Stop the loop when the population of 'Berlin' is found and store all previous city's populations in a new object named 'cityPopulations'

    let citiesPopulation = {
        'London': 8900000,
        'New York': 8400000,
        'Paris': 2200000,
        'Berlin': 3500000
    }
*/

console.log('\n------------ Program 5 ------------\n')
let citiesPopulation = {
    London: 8900000,
    'New York': 8400000,
    Paris: 2200000,
    Berlin: 3500000
}
let cityPopulations = {};
for (const city in citiesPopulation) {
    // console.log(city);
    // console.log(citiesPopulation[city]);
    if(city === 'Berlin') break;
    cityPopulations[city] = citiesPopulation[city];
}

console.log(citiesPopulation);
console.log(cityPopulations);


/* 
6. Use a 'for-in' loop to loop through an object containing city populations.
    Stop any city with a population below 3 million and store the rest in a new object named 'largeCities'

    let worldCities = {
        Sydney : 5000000,
        Delhi : 3200000,
        Kolkata : 2200000,
        Berlin : 3500000,
        Paris : 2865000,
        Mumbai : 5400000
    }
*/

console.log('\n------------ Program 6 ------------\n')

let worldCities = {
    Sydney : 5000000,
    Delhi : 3200000,
    Kolkata : 2200000,
    Berlin : 3500000,
    Paris : 2865000,
    Mumbai : 5400000
}

let largeCities = {};

for (const city in worldCities){
    if(worldCities[city] < 3000000) continue;
    largeCities[city] = worldCities[city];
}

console.log(worldCities);
console.log(largeCities);


/* 
7. Write a 'forEach' loop that iterates through the array ['earl grey', 'green tea', 'chai', 'oolong tea']. 
    Stop the loop when 'chai' is found, and store all previous tea types in an array named 'availaleTeas'
*/

console.log('\n------------ Program 7 ------------\n')
let newTea = ['earl grey', 'green tea', 'chai', 'oolong tea'];
let availaleTeas = [];

newTea.forEach((tea) => { // here tea is a function
    if(tea === 'chai'){
        return;
    }
    availaleTeas.push(tea);

});
console.log(newTea);
console.log(availaleTeas);


/* 
8. Write a 'forEach' loop that iterates through the array ['London', 'New York', 'Paris', 'Berlin']. 
    if 'Paris' is found then skip it and store all other cities in an array named 'visitedCities'
*/

console.log('\n------------ Program 8 ------------\n')

let newCity = ['London', 'New York', 'Paris', 'Berlin'];
let newVisitedCities = [];

newCity.forEach(function (city) {
    if(city === 'Paris'){
        return;
    }
    newVisitedCities.push(city);
})

console.log(newCity);
console.log(newVisitedCities);

/* 
9. Write a 'for' loop that iterates through the array [2, 5, 7, 9].
    Skip the value '7' and multiply the rest by 2. Store the results in a new array named 'doubledNumbers'.
*/

console.log('\n------------ Program 9 ------------\n')

let numberList = [2, 5, 7, 9];
let doubledNumbers = [];

for(let i = 0; i < numberList.length; i++){
    if(numberList[i] === 7) continue;
    doubledNumbers.push(numberList[i]*2);
}

console.log(numberList);
console.log(doubledNumbers);


/* 
10. Use a 'for-of' loop to iterate through the array ['chai', 'green tea', 'black tea', 'jasmine tea', 'herbal tea'].
    Stop the loop when the length of the current tea name is greater than 10.
    Store the teas iterated over in an array named 'shortTeas'
*/
console.log('\n------------ Program 10 ------------\n')

let allTea = ['chai', 'green tea', 'black tea', 'jasmine tea', 'herbal tea'];
let shortTeas = [];

for(const tea of allTea){
    if(tea.length > 10) break;
    shortTeas.push(tea);
}

console.log(allTea);
console.log(shortTeas);

console.log('\n')