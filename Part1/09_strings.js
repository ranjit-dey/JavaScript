/*== DECLARING STRING ==*/
const fruit = "apple"
let fruitColor = 'red'
let fruitDescription = `Fruit is ${fruit} and color is ${fruitColor}`
console.log(fruitDescription)

let newString = new String("I am a new String created using Object")
console.log(newString.valueOf())
console.log(newString.__proto__)

console.log(typeof fruit) // string
console.log(typeof newString) // object

/*== STRING METHOD ==*/
let myName = "Ranjit Dey";
let about = "All is well that ends well ji\n"
let email = 'ranjitdey05265@gmail.com'
let ne = 'ra'
const emailRegex = /^[^\s@] + @[^\s@] + \.[^\s@] + $/;
const abRegx = /ll/g;

// accessing each character
console.log(myName[5])

// accessing each character using loop
for (const character of myName) {
    console.log(character)
}


console.log(myName.at(4)) 
console.log(myName.charAt(5))
console.log(myName.charCodeAt(1)) // returns ASCII code
console.log(myName.concat(' is a ', 'very goo', 'd student'))
console.log(myName.endsWith('ey')) // returns true or false
console.log(myName.includes('it D', 4)) // return the substring is includes or not
console.log(myName.includes('it D'))
console.log(myName.indexOf('ji'))
console.log(myName.indexOf('jit', 4)) // it will search from index 4 so will return -1
console.log(about.lastIndexOf('well'))
console.log(about.length)
console.log(email.match(emailRegex))
console.log(ne.match(emailRegex))
console.log('invalid@'.match(emailRegex))
console.log('invalid@g'.match(emailRegex))
console.log('invalid@g.gg'.match(emailRegex))
console.log(about.repeat(5))
console.log(about.replace('ll', 'rr')) // change only first occurrence
console.log(about.replaceAll('ll', 'rr'))
console.log(about.replace(abRegx, 'rr'))

console.log(about.slice(1,5))
console.log(about.split(' '))
console.log(about.trim())