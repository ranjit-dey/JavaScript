/* == MAP == */

/*
The Map object holds key-value pairs and remembers the original insertion order of the keys.
*/

const map = new Map();
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')
map.set('Fr', 'France')

// console.log(map)

for (const [key,value] of map) {
    console.log(value)
}
for (const [key,value] of map) {
    console.log(key)
}
for (const [key,value] of map) {
    console.log(`${key} -> ${value}`)
}

