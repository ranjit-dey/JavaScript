/*== OBJECT ==*/

// Type One
const mySymbol2 = Symbol('jit')
const person = {
    name : "Ranjit Dey",
    gender : "Male",
    age : 21,
    address : {
        city : "Beldange",
        district : "Murshidabad",
        pin : 742189
    },
    walk : function(){
        console.log(`${this.name} can walk.`)
    },
    mySymbol1 : Symbol('rano'),
    [mySymbol2] : "mykey",
    "full address" : "Beldanga, Murshidabad, West Bengal, 742189"
    // it is declared at the top, I can use the same variable
}

// to print or anything else you have to use [] instead of (.) while accessing 'symbol' or key with spaces like "full address"
console.log('\n\n\n')
console.log(mySymbol2)
console.log(person.name)
console.log(person['name'])
console.log(typeof person['mySymbol1'])
console.log(typeof person[mySymbol2])
console.log(person)

console.log('\n\n\n')

// Adding some new features to the person
person.isLoggedIn = false;
person.isUser = true;

// freeze the object so that you can't change the object
Object.freeze(person);

// this features will not add to the person as it is freezed
person.isPassOut = true;
console.log(person)
console.log('\n\n\n')



// Type two
function object(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

// singleton object declaration using constructor
const man = new object("Rahul Ghosh", 22, "Male");
console.log(man)


console.log('\n\n\n')


// Merging Objects
const ob1 = {1: 'a', 2: 'b'}
const ob2 = {3: 'a', 4: 'b'}
const ob3 = {5: 'a', 6: 'b'}

// Meging all using spread operator
const mergedObjects = {...ob1, ...ob2, ...ob3}
console.log(mergedObjects)

// Mergin all into empty object
console.log(Object.assign({}, ob1, ob2, ob3));
console.log(ob1)

// Mergin all into ob1
console.log(Object.assign(ob1, ob2, ob3))
console.log(ob1)

// Printing all keys, values of merged object
console.log(Object.keys(mergedObjects)) // return an array of keys
console.log(Object.values(mergedObjects)) // return an array of values

console.log(Object.entries(mergedObjects)) // return an array of array of all entries

console.log(mergedObjects.hasOwnProperty('isLoggedIn'))
console.log(mergedObjects.hasOwnProperty(6))


// Object Destructuring
// we use gender directly rather than using person.gender
const {gender} = person;
console.log(gender)

// making another name of gender as sex
const {gender : sex} = person;
console.log(sex)
console.log(gender)

// API
// https://api.github.com/users/ranjit-dey


// singleton object
const singletonObje = new Object()

// non-singleton object
const nonSingletonObj = {}
