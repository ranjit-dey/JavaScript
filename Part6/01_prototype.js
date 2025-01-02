// 1st way of prototype

let computer = {cpu: 12};
let lenovo = {
    screen: 'HD',
    __proto__: computer // I want to access all the properties of computer
};
let tomHardware = {};

console.log(computer)
console.log(`computer `, computer.__proto__);
console.log(`lenovo `, lenovo.__proto__); // dandar variable(default variable)

// 2nd way of prototype (Recommended)

let genericCar = {
    tyres: 4
}

let tesla = {
    driver: "AI"
}

Object.setPrototypeOf(tesla, genericCar) // setting all the properties of generic car to tesla
console.log(`tesla `, tesla.tyres) // used to get specific properties values
console.log(`tesla `, Object.getPrototypeOf(tesla)) // used to get the properties which has injected explicitly
console.log(`tesla `, tesla) // used to get the properties set to the object