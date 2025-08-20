/* == DESTRUCTURING == */

/* ======= ARRAY ======= */
// If you want to copy the element of an array and use it as a variable

let arr = [5, 6, 7, 8, 9, 2];
let [a, b, , d] = arr; // a -> 5, b -> 6, d -> 8

console.log(a, b, d);

a++; // changing the variable a will not reflect the actual array.

console.log(arr);
console.log(a);


/* ======= OBJECT ======= */

const user = {
    name : "harsh",
    address : {
        city : "Bhopal",
        pin : 462001,
        locations: {
            lat : 23.2,
            lng: 77.4
        }
    }
}

// keep it mind that you have to use same variable name 
// and you have to provide the object where the key exists like here, lat and lng are accessible in user.address.locations
let {lat, lng} = user.address.locations;
console.log(lat, lng)
