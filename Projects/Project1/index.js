const body = document.getElementsByTagName('body')[0]
const h2 = document.getElementsByTagName('h2')[0]
const randomColor = document.getElementById('random');

function background(color){
    h2.style.color = 'white'
    if(color === 'green'){
        body.style.backgroundColor = 'green'
    }
    if(color === 'red'){
        body.style.backgroundColor = 'red'
    }
    if(color === 'blue'){
        body.style.backgroundColor = 'blue'
    }
}

function generateRandomColor(){
    let red = Math.floor(Math.random()*255 + 1)
    let green = Math.floor(Math.random()*255 + 1)
    let blue = Math.floor(Math.random()*255 + 1)
    return `rgb(${red}, ${green}, ${blue})`
}

randomColor.addEventListener('click', () =>{
    body.style.backgroundColor = generateRandomColor();
})