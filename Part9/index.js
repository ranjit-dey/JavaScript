const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const button = document.querySelector('button');


// event bubbling
button.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Button was clicked.');
    button.innerHTML = 'Clicked';
})
box1.addEventListener('click', () => {
    console.log('Box1 was clicked.');
    box1.style.backgroundColor = 'red'
})
box2.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('Box2 was clicked.')
    box2.style.backgroundColor = 'green'
})
box3.addEventListener('click', () => {
    console.log('Box3 was clicked.')
    box3.style.backgroundColor = 'blue'
    
})


// cursor event
const mouse = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    mouse.style.display = 'block'
    mouse.style.top = `${e.clientY}px`;
    mouse.style.left =`${e.clientX}px`;
    mouse.style.transition = 'all .1s linear';
})

document.addEventListener('mouseout', () => {
    mouse.style.display = 'none'
})


// outerbox event
const outer = document.querySelector('.outer');
const changeBackground = () => {
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    outer.style.background = `rgb(${red}, ${green}, ${blue})`;
    outer.innerHTML = `rgb(${red}, ${green}, ${blue})`;
}
outer.addEventListener('click', changeBackground)
const input = 'n';
if(input === 'Y'){
    outer.removeEventListener('click', changeBackground)
}


// setTimeout
const box = document.querySelector('.timeout');

setTimeout(() => {
    box.classList.add('style')
    box.innerHTML = 'I appeared after 5 seconds'
}, 5000);

setInterval(()=>{
    box.classList.toggle('changeBG')
}, 1000)
