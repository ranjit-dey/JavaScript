// click event

const button1 = document.getElementById('btn-1');
function showAnAlert(){
    alert('Button 1 is clicked.')
}
button1.addEventListener('click', showAnAlert) 

// mouseOver event

const button2 = document.getElementById('btn-2')
// function changeBackground(){
//     document.querySelector('.box-2').style.background = 'blue'
// }
button2.addEventListener('mouseover', () => {
    document.querySelector('.box-2').style.background = 'green'
})
button2.addEventListener('mouseleave', () => {
    document.querySelector('.box-2').style.background = 'transparent'
})
  