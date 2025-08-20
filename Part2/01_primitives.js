// Number ========================
let balance = 120;
console.log(typeof(balance));
console.log(typeof balance);

let anotherBalance = new Number(120); // storing by creating an object, not recommended
console.log(anotherBalance);
console.log(anotherBalance.valueOf()); // to extract the value only

console.log(typeof balance) // output -> number
console.log(typeof anotherBalance) // output -> object


// boolean =====================
let isActive = false;
let isRalllyActive  = new Boolean(true) // not recommended
console.log(isActive)
console.log(isRalllyActive)


// null and undefined ===========
let firstName;
console.log(firstName) // output -> undefined

let noNum = null;
console.log(noNum);


// string ======================
let myString = "hello"
let newString = 'I am a new string';
let userName = 'Ranjit Dey'

let oldGreet = 'Hello,' + ' ' + userName;
console.log(oldGreet);

// String Interpolation 
let greetMessage = `Hello, ${userName}`; // Backtics 
console.log(greetMessage);


// Symbol ======================
let sym1 = Symbol(); // It has unique value
let sym2 = Symbol(); // It has unique value
console.log(sym1)
console.log(sym2)
console.log(sym1 == sym2);

let sym3 = Symbol('Hello')
let sym4 = Symbol('Hello')
console.log(sym3)
console.log(sym4)
console.log(sym3 == sym4);

// bigint
let n = Number.MAX_SAFE_INTEGER
let big_num = 9007199254740991n // 

// if you want to add something or remove from bigint you must have to add n in the suffix of the number.

// let val = big_num - 5; // will throw an error
let val = big_num - 5n
console.log(val)