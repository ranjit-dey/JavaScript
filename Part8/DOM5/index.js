function generateRandomColor(){
    const redVal = Math.round(Math.random()*255);
    const greenVal = Math.round(Math.random()*255);
    const blueVal = Math.round(Math.random()*255);

    return `rgb(${redVal}, ${greenVal}, ${blueVal})`;
}

const boxes = document.getElementsByClassName('box');
for(const box of boxes){
    box.style.backgroundColor = `${generateRandomColor()}`
}