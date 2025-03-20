/*== MEMORY ==*/
// All the primitive datatype are stored in the STACK MEMORY
// All the non-primitive datatype are stored in the HEAP MEMORY

// Primitive => string, number, boolean, bigint, null, undefined, symbol
// Non-primitive => Object


/*== STACK USED ==*/
let myName = "Ranjit Dey"
let anotherName = myName // copy of the myName is passed
anotherName = "Suvadip" // nothing will change in myName

console.log(myName) // Ranjit Dey
console.log(anotherName) // Suvadip

/*== HEAP USED ==*/
let myObj = {
    roll : 165,
    subject : "DBMS"
}

let anotherObj = myObj; // reference(original) of the myObj is passed
anotherObj.roll = 142; // roll will reflect in the myObj

console.log(myObj)
console.log(anotherObj)