

const body = document.getElementsByTagName('body')[0];
console.log(body)
body.style.position = 'relative'
body.addEventListener('click', (e) => {
  const removeIt = body.children[1].tagName;
  if(body.children[3].tagName === 'DIV'){
    removeIt.remove()
  }
  console.log(e.clientX);
  const bl = document.createElement('div');
  bl.style.cssText = `
  height: 150px;
    width: 150px;
    border: 2px solid lightseagreen;
    border-radius: 50%;
    animation: bounce .8s forwards ;
    position: absolute;
  `
  bl.style.top = e.clientY;
  bl.style.left = e.clientX;
  body.appendChild(bl)
  console.log(bl)
})
