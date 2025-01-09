const body = document.getElementsByTagName('body')[0]

const h2 = document.getElementsByTagName('h2')[0]

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