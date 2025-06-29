/* == SELECTORS == */

// querySelectorAll returns NodeList (forEach available)
const languages = document.querySelectorAll('.languages');
console.log(languages)

// querySelector returns only one single element
const javascript = document.querySelector('.languages')
console.log(javascript)

// getElementsByClassName returns HTMLCollection (forEach not available)
const anLanguages = document.getElementsByClassName('languages')
console.log(anLanguages)

// get parent using querySelector
const parent = document.querySelector('.parent')
console.log(parent)



/* == TRAVERSAL == */

console.log(parent.firstElementChild.innerHTML)
console.log(parent.firstElementChild.nextElementSibling)
console.log(parent.lastElementChild.innerHTML)
console.log(parent.lastElementChild.previousElementSibling)

// Accessing element using index
const python = parent.children[1]
console.log(python)

// Accessing parent using child element
console.log(python.parentElement)

// Making array of anLanguages so that we can perform all operation which are available for array
const languagesArr = Array.from(anLanguages);
console.log(languagesArr)

// forEach already available for NodeList
// languages.forEach((language) => {
//     language.style.color = 'lightseagreen'
// })

// forEach not available for HTMLCollection
languagesArr.forEach((language) => {
    language.style.color = 'lightblue'
})


/* == innerText, textContent, innerHTML == */


// difference between innerText, textContent, innerHTML
// as getElementsByClassName returns HTMLCollection
// innerHTML -> shows as it is including html tags ,attributes
// textContent -> show only the text not including the tags or anything
// innerText -> shows only the text which is visible
const dbms = document.getElementsByClassName('dbms')[0]
const dbmsInnerText = dbms.innerText;
const dbmsInnerHTML = dbms.innerHTML;
const dbmsTextContent = dbms.textContent;
console.log(dbmsInnerText)
console.log(dbmsInnerHTML)
console.log(dbmsTextContent)


/* == NODE LIST */
console.log(parent.childNodes) // remove all the new line from parent to see the magic
console.log(parent.children)