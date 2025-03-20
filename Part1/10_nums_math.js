/*== Number ==*/

let newNum = 124854;
let smallNum = 56;
let numObj = new Number(458);

console.log(newNum);
console.log(numObj);
console.log(numObj.valueOf());

// === METHODS IN NUMBER
console.log(newNum.toString().length); // return the length => 5
console.log(newNum.toFixed(2)); // after point it takes two precision => 12484.00

console.log(newNum.toPrecision(3)); // 1.25 X 10^4
console.log(smallNum.toPrecision(3))
console.log(smallNum.toPrecision(1))

let tenLakhs = 1000000;
console.log(tenLakhs.toLocaleString()); // US standard
console.log(tenLakhs.toLocaleString("en-In")); // India standard

// === NUMBER OBJECT ===
console.log("\n\n\n NUMBER OBJECT \n")
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.NEGATIVE_INFINITY)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.NaN)
console.log(Number.EPSILON)
console.log(Number.isSafeInteger(456))



/*=== MATHS ===*/
console.log(`\n\nDiscussing about math in JS\n\n`)

// Use Browser for detailed view
console.log(Math)

console.log(Math.PI)
console.log(Math.abs(-6))
console.log(Math.round(98.45))
console.log(Math.floor(4.9))
console.log(Math.ceil(4.01))
console.log(Math.max(4,8,6,0,2,5))
console.log(Math.min(78, 1, 6))

// Generate Random Number
console.log(Math.random()) // returns value between 0 and 1

// value either 0 or 1
console.log(Math.round(Math.random()))

// value between 0 to 10
console.log(Math.round(Math.random() * 10))

// value between 1 to 10
console.log((Math.floor(Math.random() * 10)) + 1)

let min = 100;
let max = 200;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);





