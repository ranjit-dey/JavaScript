/* === LOOPS === */
const array = ['Aritra', 'Anshu', 'Anirban', 'Pritam', 'Ranjit', 'Suvodip']

/* == FOR LOOP == */
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

console.log('\n\n')


/* == WHILE LOOP == */
let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
}

// sorting the array
console.log('\n\n')

const sortedArray = array.sort();
console.log(sortedArray);




/* == DO WHILE LOOP == */
console.log('\n\n')

let j = 0;
do {
    console.log(array[j])
    j++;
} while (j < array.length);




/* == FOR OF LOOP == */
// Not works on object
console.log('\n\n')

// in for-of loop value is directly printed not index
for (const element of array) {
    console.log(element)
}




/* == FOR IN LOOP == */
console.log('\n\n')

const user = {
    name : 'Ranjit Dey',
    age : 21,
    'full address' : 'Jalalpur Beldanga Murshidabad'
}

// in for-in loop index is printed dircectly instead of value
for (const key in user) {
    console.log(user[key])
}

console.log('\n\n')

// try for-of loop in object, actualy not because Object.key() returns an array
for (const element of Object.keys(user)){
    console.log(`${element} -> ${user[element]}`)
}


console.log('\n\n')

for (const key in user) {
    if (Object.prototype.hasOwnProperty.call(user, key)) {
        const element = user[key];
        console.log(element)
    }
}

/* == FOR EACH LOOP == */
console.log('\n\n')

// collecting those name which starts with 'A'
array.forEach(element => {
    if(element[0] == 'A'){
        console.log(element)
    }
});