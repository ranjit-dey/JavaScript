// const container = document.querySelector('.container');
// const start = document.getElementById('start');
// const stop = document.getElementById('stop');

// function fun(e){
//     console.log(e)
//     setInterval(changeBackground, 1000)
// }

// start.addEventListener('click', fun)

// // start.removeEventListener(fun);


// function changeBackground(){
//     const red = Math.floor(Math.random()*255) + 1;
//     const green = Math.floor(Math.random()*255) + 1;
//     const blue = Math.floor(Math.random()*255) + 1;
//     const color = `rgb(${red}, ${green}, ${blue})`;
//     container.style.background = color;
// }


const container = document.querySelector('.container');
const start = document.getElementById('start');
const stop = document.getElementById('stop');

let intervalId = null;

function changeBackground() {
    const red = Math.floor(Math.random() * 255) + 1;
    const green = Math.floor(Math.random() * 255) + 1;
    const blue = Math.floor(Math.random() * 255) + 1;
    const color = `rgb(${red}, ${green}, ${blue})`;
    container.style.background = color;
}

start.addEventListener('click', () => {
    if (intervalId === null) {
        intervalId = setInterval(changeBackground, 1000);
        console.log(intervalId)
    }
});

stop.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
});

