
// Object ============================================
/*
let username = {
    firstName: 'Ranjit',
    lastName: 'Dey',
    isLoggedIn: true,
};

console.log(username)
console.table(username)
console.log(typeof username)


// Here I declared myName as const so, it can't be changed
const myName = "Ranjit Dey";
// myName = "The Good Boy" // throw an error
console.log(myName)

// But after declared a object as const you can change it properties
const student = {
    Sname: 'Hablu Roy',
    Sage: 23,
    Scourse: 'CSE',
    Sheight: '6ft',
    "nick name": 'Robi'
}

console.log(student);
student.Sname = "Rahul Roy"; // changed Sname without any error
console.log(student);

// Add new properties to the student object
student.fatherName = "Hitesh Roy";
console.log(student)

console.log(student.Sheight) // acces one properties
// console.log(student.'nick Name') // throw an error
console.log(student['nick Name'])


let today = new Date();
console.log(today)
console.log(today.getMonth())
console.log(today.getHours())
console.log(`Today is ${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`)

*/

// Array ========================================
0 - 'a'
1 - 'b'
2 - 'c'
3 - 56

let item = ['a', 'b', 'c', 56, true, {name : "Hari", age: 20}, 96];
console.log(item)
console.table(item)

item[8] = 56; // added new item to the item array
console.log(item[5]);
// for(i=0; i < 8; i++){
//     console.log(`${i+1} -> ${item[i]}`);
// }

console.table(item)
item[7] = 26 // added new item to the item array
console.table(item)                




// Exploring =====================================

/*
console.log(typeof null)
console.log(Number(null))
console.log(Number(undefined))

console.log('1' + 2)
console.log(2 + '2')
console.log(2 + 2+ '2')
console.log(2 + 2+ '2' +2)
console.log('2' + 2 + 2 + 2)   // converted whole as string
*/