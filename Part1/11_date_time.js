/*=== Date Object ===*/

// Date start in js => 1970-01-01
let firstDateJs = new Date(0);
console.log(firstDateJs);
console.log(firstDateJs.toLocaleString());

console.log("\n\n\n");

const newDate = new Date();
console.log(newDate.getTime());
console.log(newDate.getDate());
console.log(newDate.toDateString());
console.log(newDate.toLocaleString());
console.log(newDate.toISOString());
console.log(newDate.toString());
console.log(newDate.toJSON());
console.log(typeof newDate);

console.log("\n\n\n");

// Creating new Date
// Format (Year, Month, Date, Hours, Minutes, Seconds, Milisecond)
// ** Month index starts from 0 (zero)

let today = new Date();
let date = new Date(2022, 1, 5);
let myDate = new Date(2022, 1, 5, 14, 56, 35, 20);

// Here month index not start from 0.
let mmddyyyy = new Date("03-06-2025");
let yyyymmdd = new Date("2025-03-06");

console.log(today.getDate());
// sunday = 0, saturday = 6
console.log(today.getDay());
console.log(today.getMonth());
console.log(today.toDateString());

console.log(date.toLocaleString());
console.log(myDate.toDateString());
console.log(mmddyyyy.toDateString());
console.log(yyyymmdd.toDateString());

console.log('\n\n\n')

/*== TIMESTAMPS ==*/

// return the miliseconds from 1970-01-01
console.log(today.getTime());
console.log(Date.now());

// converting miliseconds to seconds
console.log(Math.floor(Date.now()/1000))

// default toLocaleString() method
console.log(today.toLocaleString())

// customize toLocaleString() method
console.log(today.toLocaleString('default', {
    // weekday:"long",
    dateStyle:"full"
}))


