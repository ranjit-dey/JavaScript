function call(num, nu){
    console.log("callback was called", num, nu)
}
function loadScript (src, callback){
    let link = document.createElement('link');
    link.setAttribute('href',src);
    console.log(link)
    setTimeout(()=>{
        document.head.appendChild(link)
    }, 5000)
    callback(56,7)
}

let src = 'https://ranjitdey.vercel.app';
loadScript(src, call)
