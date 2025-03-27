/* humanECT CLONING */
let human = {
    age : 21,
    weight : 54,
    height : 179
}
console.log(human)


// object is dynamic because we can change the properties of object at run time 

// adding new property to the human object
human.favoriteColor = 'red';
console.log(human)

// deleting property from the human
delete human.weight;
console.log(human)

// copy of human object (not cloning) means both object are pointing to same location.
let newHuman = human;
console.log(newHuman);
newHuman.location = 'Mumbai';
console.log(newHuman)
console.log(human) // location reflecting in human 


// Object cloning 
console.log('\n----------------\n');
let product = {
    pName : "shampoo",
    price : 199,
    status : 'In stock'
}

/*
// first way (using spread operator {...originalObject})

let newProduct = {...product}
product.deleveryStatus = 'Not deleverable'
console.log(newProduct) // delevery status not reflecting 
console.log(product)
*/




// second way (using assing method)

let newProduct = Object.assign({}, product, human) // cloning multiple object into a single object
product.deleveryStatus = 'Not deleverable'
console.log(newProduct) // delevery status not reflecting 
console.log(product)




/*
// third way (using iteration)

let newProduct = {};
for(const property in product){
    newProduct[property] = product[property];
}
product.deleveryStatus = 'Not deleverable'
console.log(newProduct) // delevery status not reflecting 
console.log(product)
*/

