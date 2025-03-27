/* == THIS KEYWORD == */

// run it in the browser. It prints the window object. But here this print only the empty object.
console.log(this)


const manObj = {
    username : "ranjit-dey",
    password : "2323",
    welcomeMessage : function (){
        console.log(`${this.username}, welcome to the world.`);

        // printing only the current context using this
        console.log(this)
    }
}

manObj.welcomeMessage();

// now I am changing the context by changing the username and password
manObj.username = 'Dholokrisna Dhali'
manObj.password = '9033'
manObj.welcomeMessage()


// traditional function
const chai = function (){
    let username = 'ranjit-dey'
    console.log(this.username) // undefined
    console.log(this)
}

chai()


// Arrow function
const arrFunc = () => {
    let pass = 849;
    console.log(this.pass) // undefined
    console.log(this)
}

arrFunc()


console.log('\n\n\n\n\n')


// Knowledge about Arrow Function

// You must have to write 'return' keyword if you returning something and using curly braces
const addTwoNum = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwoNum(8, 2))

// it will return automatically within same line
const anotherAddTwoNum = (num1, num2) => num1 + num2
console.log(anotherAddTwoNum(5, 3))

// if you want to return object
const returnObj = () => {username : 'ranjit'}
console.log(returnObj()) // undefined // not write way

// here we using parenthesis instead of curly braces 
const objReturn = () => ({username : 'ranjit'})
console.log(objReturn())

// here we using curly braces but we also use 'return' keyword , while you are using curly braces you must have to use 'return' keyword to return anything
const objReturn2 = () => {
    return {username : "ranjit"}
}
console.log(objReturn2())