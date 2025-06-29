/* == filter() == */

const books = [
  { title: "Book One", genre: "Fiction", publish: 1998 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1991 },
  { title: "Book Three", genre: "Science", publish: 2006 },
  { title: "Book Four", genre: "Arts", publish: 1997 },
  { title: "Book Five", genre: "Commerce", publish: 2010 },
  { title: "Book Six", genre: "Vocational", publish: 2013 },
  { title: "Book Seven", genre: "Science", publish: 1998 },
  { title: "Book Eight", genre: "Fiction", publish: 1999 },
  { title: "Book Nine", genre: "Arts", publish: 2009 },
  { title: "Book Ten", genre: "Non-Fiction", publish: 2016 },
];

// Find all the books which is under Fiction
const fictionBooks = books.filter((book) => book.genre === "Fiction");
console.log(fictionBooks);

// Find all the books which is published after 2000
// opening a scope for returning thats why return keyword mandatory here
const publishBooks = books.filter((bk) => {
  return bk.publish > 2000;
});
console.log(publishBooks);

// Find all the books which under 'Arts' genre and publish after 2000
const artsBooks = books.filter((book) => {
  if (book.genre === "Arts" && book.publish > 2000) {
    return book;
  }
});

console.log(artsBooks);


/* == map() == */


console.log('\n\n\n')
const myNums = [1, 4, 12, 3, 6, 8];
// let mappedArr = myNums.map((num) => num + 3).map((num) => num * 10).filter((num) => num > 70);
let mappedArr = myNums
.map((num) => num + 3)
.map((num) => num * 10)
.filter((num) => num > 70);
console.log(mappedArr);


/* == reduce() == */


console.log('\n\n\n')

const numbers = [1, 2, 3, 6, 9, 8, 2]
const total = numbers.reduce((acc, curr) => acc+curr, 0)
console.log(total)

let initialValue = 0;
const anotherTotal = numbers.reduce(function (accumulator, current) {
  console.log(`accumulator : ${accumulator}, current : ${current}`)
  return accumulator+current;
}, initialValue)

console.log(anotherTotal)

// shopping cart

let shoppingCart = [
  {
    item : 'JS Course',
    price : 1999
  },
  {
    item : 'Python Course',
    price : 999
  },
  {
    item : 'C++ Course',
    price : 499
  },
  {
    item : 'Data Science Course',
    price : 12999
  },
  {
    item : 'AI Course',
    price : 7999
  },
  {
    item : 'Web Course',
    price : 9999
  },
]

const totalCartPrice = shoppingCart.reduce((acc, item)=>{
  return acc+item.price;
}, 0)
console.log(totalCartPrice)