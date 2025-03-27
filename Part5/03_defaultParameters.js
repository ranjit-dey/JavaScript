
function greet(name = "User"){
    console.log(`Hi, ${name}`);
}

greet();
greet('Ranjit');


// alert("hi")

// Rest parameter

// val1 and val2 are necessary
function returnAll(val1, val2, ...num){
    return num
}

// function will return an array of [58, 49, 434, 93] as 23 and 43 are the necessary
returnAll(23, 43, 58, 49, 434, 93)

function add(...Numbers){
    return Numbers.reduce((acc, curr) => acc+curr);
}

console.log(add(1,2,3,6,5))
console.log(add(1,2,3,5))
console.log(add(1,25))




// passing value dependent of first parameter
function fullName(fname = 'Jhon', sname = fname.toUpperCase()){
    console.log(`${fname} ${sname}`)
}

fullName("hello", "dev");
fullName()
fullName('ranjit')




// pass object as default parameter
function printVal(val = {name: "ranjit", roll: 52}){
    console.log(val);
}

printVal()
printVal(56)




// pass array as default parameter
function arrSum(arr = [12, 11, 10]){
    console.log(arr.reduce((acc, curr) => acc+curr))
}

arrSum();
arrSum([12, 41, 56]);




// passing null as argument
function val(num = 45){
    console.log(num);
}

val()          // 45
val(23)        // 23
val(null)      // null
val(undefined) // 45



// passing function as parameter
function getNum(){
    return Math.floor(Math.random() * 10)
}

function addSomething(val = getNum()){
    console.log(val)
}

addSomething()
addSomething(90)