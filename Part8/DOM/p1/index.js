// update existing element

// open new window
const bt = document.getElementById('paragraph')
bt.addEventListener('click', () => {
    window.open('https://ranjitdey.vercel.app', "Hellow ow")
})

// other concept
const parent = document.querySelector('.container')
const child = document.getElementById('heading')
// console.log(parent)
// child.remove()
// console.log(child)
console.log(parent)
console.log(typeof parent)

// child.outerHTML = 'hello'
// child.outerHTML = `<div"> hello </div>`
// parent.textContent = 'hello' 

const elem1 = document.createElement('p');
elem1.innerText = 'Hello, I am  ranjit dey , I am bad boy, learning dom';
parent.appendChild(elem1)
elem1.setAttribute('class', 'styledElement')
// child.removeAttribute('id')


// selecting ul and styling it using cssText
const itemList = document.querySelector('ul')
itemList.style.cssText = `
    display: inline-block;
    border: 2px solid white;
    padding: 15px;
    list-style-type: none;
`



// converting HTMLCollection to array to perform operations
const elements = itemList.children;
const myArr = Array.from(elements) 
myArr.forEach((item) => {
    item.style.color = 'orange'
})



// creating new element and positioning
const newElement = document.createElement('div');
newElement.innerHTML = `
I am a adjacent Element. I can be placed at four position <ol id="position" style = "padding-left: 50px"><li> afterbegin </li>
    <li> afterend </li>
    <li> beforebegin </li>
    <li> beforeend </li>
</ol>
`

newElement.setAttribute('class', 'styledElement')
parent.insertAdjacentElement("beforebegin", newElement)
parent.insertAdjacentElement('afterend', newElement)
parent.insertAdjacentElement('beforeend', newElement)




// overflow will happen here
// document.write(`
//     <h1>Hellow </h1>
// `)