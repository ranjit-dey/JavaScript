
// Example 1
let car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,

    start: function(){
        return `${this.make} car got started in ${this.year}`
    }
}

console.log(car.start())

// Example 2
function Person(name, age){
    this.name = name,
    this.age = age
}

let john = new Person("Ranjit", 20)
console.log(john)


// Example 3
function Animal(type){
    this.type = type;
}

Animal.prototype.speak = function(){
    return `${this.type} makes a sound.`
}
Animal.prototype.legs = 4;

let cat = new Animal('cat')

console.log(cat) // inbuild properties will show
console.log(cat.legs) // to access prototype
console.log(cat.speak()) // to access prototype


// Example 4

Array.prototype.ArrayLength = function (){
    return `Length of the [${this}] is : ${this.length}`;
} // here I created a prototype which return the length of that array which was called

Array.prototype.sumOfElement = function (){ // create a prototype for calculating sum of all element present in the array
    let sum = 0;
    for(const element of this){
        sum = sum + element;
    }
    return sum;
}

let arr = [1,2,3,4,5,6,7];
console.log(arr.ArrayLength())


let newArr = [54,56,3,0,1,3]
console.log(newArr.sumOfElement())

// Example 5

class Vehicle{
    constructor (make, model){
        this.make = make;
        this.model = model;
    }

    start(){
        return `${this.model} is a car from ${this.make}.`
    }
}

let newCar = new Vehicle('hello', 'toyota');
console.log(newCar)
console.log(newCar.start())

// inheritence
class Car extends Vehicle{
    drive(){
        return `${this.model} can drive.`
    }
}

const myCar = new Car('Toyota', 'Corela');
console.log(myCar.make)
console.log(myCar.start())
console.log(myCar.drive())