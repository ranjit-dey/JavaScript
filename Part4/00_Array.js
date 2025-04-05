/* Array */

/*
JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)

JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.

JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.

JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
*/

console.log('\n============= Array Declaration =============\n')

let numbers = [17,2,45,1,65,32]
console.log(numbers) // 17, 2, 45, 1, 65, 32
console.log(typeof numbers) // object

const cars = ['Toyota', 'Rolce Roise', 'Bugati']

const names = []; // Empty array
names[0] = 'Ranjit Dey';
// Missing 1st item
names[2] = 'Rahul Roy';
// Missing 3rd, 4th, 5th item
names[6] = 'Soumodip Dhali';
console.log(names)

let products = [
    'Laptop',
    'Bag',
    'Bottle',
    'Parse',
    'Charger'
]
console.log(products)

const allTypes = [123, "Hi", false, 4589n, undefined, null]
for (let index in allTypes) {
    console.log(`${index} -- ${allTypes[index]} -- ${typeof allTypes[index]}`)
}

/* Array's Built-in method */

/* Program 1 */
console.log('\n============= length =============\n')
console.log("Product array length : " + products.length)



/* Program 2 */
console.log('\n============= Array Sorting =============\n')
/* sort() and reverse() doesn't return a new array rather it change the existing array  and toSorted() and toReverse() returns a new array without changing the new array */

// string sorting
let numArr = [8, 6, 9, 5, 2,  57, 5, 7];
numArr.sort() 
console.log(numArr);

// sorting accending
let numArr2 = [8, 16, 9, 5, 12, 57, 5, 7];
numArr2.sort((acc, curr) => acc-curr)
console.log(numArr2)
console.log(numArr2.reverse()) // for decending

// sorting decending
let arr = [1, 2, 56, 41, 0, 36, 41, 100]
let sortedArray = arr.sort((acc, curr) => curr-acc);
console.log(sortedArray)




/* Program 3 */
console.log('\n=============  push() method =============\n')
// It used to insert element at the end position of the array.
let pushArr = [1, 5]
pushArr.push(7, [8, 9, 12, 22]);
console.log(pushArr)



/* Program 4 */
console.log('\n=============  pop() method =============\n')
// Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let popArr = [5, 22, 3]
const poppedElement = popArr.pop();
console.log(popArr);
console.log(poppedElement)



/* Program 5 */
console.log('\n=============  shift() method =============\n')
// Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let shiftArr = [5, 8, 65, 23];
const shiftedElement = shiftArr.shift();
console.log(shiftArr);
console.log(shiftedElement);



/* Program 6*/
console.log('\n=============  unshift() method =============\n')
// Inserts new elements at the start of an array, and returns the new length of the array.
let unshiftArr = [45, 63, 10, 22];
let lenOfUnshiftArr = unshiftArr.unshift(4, 6, 8);
console.log(unshiftArr);
console.log(lenOfUnshiftArr);




/* Program 7*/
console.log('\n=============  slice() method =============\n')
/*
Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.

The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.
*/
let sliceArr = [25, 65, 23, 41, 43];
const slicedArr = sliceArr.slice(-3);
console.log(sliceArr)
console.log(slicedArr)



/* Program 8 */
console.log('\n=============  splice() method =============\n')
/* used to insert, delete, replace elements
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

@param start — The zero-based location in the array from which to start removing elements.

@param deleteCount — The number of elements to remove.

@param items — Elements to insert into the array in place of the deleted elements.

@returns — An array containing the elements that were deleted.
*/
let spliceArr = [25, 65, 23, 41, 43];
const splicedArr = spliceArr.splice(1, 0, 4, 45, 47); // here 1 means start from index 1 and delete 0 items and insert 4, 45, 47 from index 1
console.log(spliceArr)
console.log(splicedArr)




/* Program 9 */
console.log('\n=============  map() method =============\n')
let mapArr = [12, 45, 36, 78, 13, 11]
let ary =[];
let mappedArr = mapArr.map((element,index, ary ) => {
    console.log(`${element} - ${index} - ${ary}`)
});
console.log("Square numbers : " + mappedArr);



/* Program 10 */
console.log('\n=============  filter() method =============\n')
let filterArr = [12, 56, 11, 30, 17, 19];
const filterredArr = filterArr.filter((element) => element%2 === 0); // even element
console.log(filterArr)
console.log(filterredArr) 



/* Program 10 */
console.log('\n=============  reduce() method =============\n')
let reduceArr = [14, 40, 3, 1, 77, 5];
let reducedArr = reduceArr.reduce((acc, curr) => acc + curr);
console.log(reduceArr)
console.log(reducedArr)



/* Program 11 */
console.log('\n=============  indexOf() method =============\n')
let indArr = [14, 32, 84, 10, 5];
let index = indArr.indexOf(10);
console.log(index)




/* Program 12 */
console.log('\n=============  find() method =============\n')
let findArr = [15, 13, 71, 33, 21, 10];
let found = findArr.find((element) => element > 10);
console.log(findArr)
console.log(found)


/* Program 13 */
console.log('\n=============  join() method =============\n')
const joinArr = [12, 45, 85];
console.log(joinArr.join(' and '))


/* Program 14 */
console.log('\n=============  toString() method =============\n')
const toStringArr = [12, 45, 85];
console.log(toStringArr.toString())


/* Program 15 */
console.log('\n=============  delete statement =============\n')
const deleteElementArr = [12, 45, 85];
delete deleteElementArr[1];
console.log(deleteElementArr); // item deleted but memory still allocated


/* Program 16 */
console.log('\n=============  concat() method =============\n')
const concat1 = [12, 45, 85];
const concat2 = [17, 63, 10, 33];
const concat3 = [85, 31];

// It doesn't change the existing array
console.log(concat1.concat(concat2, concat3))


/* Program 17 */
console.log('\n=============  Array.from() method =============\n')

console.log(Array.isArray("Ranjit Dey"))
console.log(Array.from('Ranjit Dey'))


/* Program 18 */
console.log('\n=============  Array.of() method =============\n')
let score1 = 120
let score2 = 450
let score3 = 100
console.log(Array.of(score1, score2, score3));


/* Program 19 */
console.log('\n=============  spread operator method =============\n')
// another concat method
const spreadArr1 = [12, 45, 13, 56]
const spreadArr2 = [5, 3, 2, 8]
const spreadArr3 = [122, 5, 6]

const concated_arr = [...spreadArr1, ...spreadArr2, ...spreadArr3]
console.log(concated_arr)

// console.log(..."Ranjit")



/* Program 20 */
console.log('\n=============  flat() method =============\n')

// flat() method takes an argument as depth
// Here is a multidimensional array , you have to convert it to a flat arr 
const flatArr = [12, 56, [10, 32, 87, 23, [45, 12, 3], 15, 10], 45, 65]
let flatedArr1 = flatArr.flat(1)
let flatedArr2 = flatArr.flat(2)
let flatedArr = flatArr.flat(Infinity)
console.log(flatedArr)

