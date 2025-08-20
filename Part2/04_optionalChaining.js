/* == OPTIONAL CHAINING(?.) == */

/*
The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.
*/

/* ------------------------------------------------------ */
console.log('\n\n\n')

const adventurer = {
    name: "Alice",
    cat: {
        name: "Dinah",
    },
};

// Suppose there is one property which you want to access but that property is not in the object then it shows undefined;

console.log(adventurer.dog); // undefined



/* ------------------------------------------------------ */
console.log('\n\n\n')

// now suppose there is one property which is inside a object and that object is a property of another object which you want to access but that object is not in the object then it shows error;


/* // Main object
const user = {
    fname : 'Ranjit',
    sname : 'Dey',

    address : {
        city : 'Beldanga'
    },

    walk : function() {
        console.log(`${this.fname} is walking.`)
    }

}
*/

const user = {
    fname : 'Ranjit',
    sname : 'Dey',
}

// user.address returns undefined then it looks like => undefined.city
// TypeError: Cannot read properties of undefined (reading 'city')
// to avoid this use main object

// run this to see the error *****
// console.log(user.address.city) 



// How to avoid this error

/* == FIRST WAY ==*/
// check that property is in the object or not
if(user.address){
    console.log(user.address.city)
} else {
    console.log('address is not in the user')
}

/* == SECOND WAY == */
// if the left-hand side is true then only right-hand side will execute
user.address && console.log(user.address.city)

/* == THIRD WAY == */
// if user.address available then only it will going to access the city property
console.log(user.address?.city)


// Now I am chec
// If the walk function is not in the object then it will print undefined
console.log(user.walk) // undefined

// Now you are going to access walk as a function then it will show an error that walk user.walk is not a function

// run this to see the error *****
// console.log(user.walk()) 

// to avoid this error first check that walk is function or not. if walk is a function then execute that otherwise no
console.log(user.walk?.())

// To avoid error, comment user and uncomment Main Object user