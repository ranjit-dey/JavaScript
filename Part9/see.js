const fun = function(){
    console.log('I am a function')
}
const box = document.querySelector('.box')
box.setAttribute('data-createdBy', 'Ranjit')
box.setAttribute('editedBy', 'Ranjit') // different from above
console.log(box.attributes)
console.log(box.dataset.createdby)
console.log(box.dataset.editedby) // will not work