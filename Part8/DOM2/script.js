
// Basic styling


// Adding a new element to the ul
const ul = document.querySelector('ul');
let newItem = document.createElement('li');
newItem.textContent = 'Just Awesome'
ul.append(newItem)


// Setting a highlight class to the newItem
newItem.setAttribute('class', 'highlight')

// Creating another element to ul and added some attribute to the list item
const li = document.createElement('li');
li.innerText = 'hello ji'
ul.append(li);
li.setAttribute('class', 'highlight font-style')
// li.setAttribute('class', 'font-style') // don't use it it will remove all the override the existing classed

// removing class from listitem
// li.classList.remove('highlight')
// li.classList.remove('font-style')

// getting class attribute 
console.log(li.getAttribute('class'))
console.log(li.classList.contains('highlight'))
li.remove();







// parent node traversal
/*
let ul = document.querySelector('ul');
console.log(ul.parentNode);
console.log(ul.parentNode.parentNode);
console.log(ul.parentNode.parentNode.parentNode);

console.log()

console.log(ul.parentElement);
console.log(ul.parentElement.parentElement);
console.log(ul.parentElement.parentElement.parentElement)

const html = document.documentElement;
console.log(html)
console.log(html.parentElement)
console.log(html.parentNode)

*/





// Child node traversal
/*
const ul = document.querySelector('ul');

// you will see the output 5
console.log(ul.children) 

// you will see the output 11(bcz of the indentation(delete all the indentation it will show 5))
console.log(ul.childNodes)

// it will show #text bcz of indentation
// delete the indentation for correct result
console.log(ul.firstChild)
console.log(ul.lastChild)

// here you see that an error bcz there is no element
// ul.firstChild.style.color = 'yellow'
// you can style it by using index
ul.childNodes[3].style.background = 'blue'

// Here you see the correct result rather any text
console.log(ul.firstElementChild)
console.log(ul.lastElementChild)

// you can style it
ul.firstElementChild.style.background = 'yellow';

*/



// Sibling node traversal
/*
const ul = document.querySelector('ul');
console.log(ul)

const div = document.querySelector('div')
console.log(div.childNodes)

// you can see that before and after of ul there is two #text(indentation) 
console.log(ul.previousSibling)
console.log(ul.nextSibling)

console.log(ul.previousElementSibling) // h1
console.log(ul.nextElementSibling) // null 
*/