const boxes = document.getElementsByClassName('box')[0].parentElement.children;

for(const box of boxes){
    box.style.backgroundColor = 'lightseagreen'
}

const selectedBox = document.getElementById('colored');
console.log(selectedBox.matches('#colord'))
console.log(selectedBox.matches('#colored'))
console.log(selectedBox)
console.log(selectedBox.closest('.container'))

const selectedMainBox = document.getElementsByClassName('.container')
let isContain = document.querySelector('body').contains(document.querySelector('container'))
console.log(isContain)