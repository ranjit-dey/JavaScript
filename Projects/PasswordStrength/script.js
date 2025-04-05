const inputField = document.querySelector('#input');
const outputField = document.querySelector('#output');


inputField.addEventListener('input', function(){
    console.log(inputField.value);
    let password = inputField.value;

    if(password.length == 0){
        inputField.style.outline = 'none'
        outputField.innerText = ''
    }
    else if(password.length < 8 && password.length > 0){
        outputField.innerText = 'Password is too short'
        inputField.style.outline = '2px solid red';
        outputField.style.color = 'red'
        inputField.style.marginBottom = '5px';
    }
    else{
        if(password.search(/[a-z]/) == -1){
            outputField.innerText = 'Missing lowercase'
        }else if(password.search(/[A-Z]/) == -1){
            outputField.innerText = 'Missing uppercase'
        }else if(password.search(/[0-9]/) == -1){
            outputField.innerText = 'Missing number'
        }else if(password.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\{\}\[\]\:\;\'\"\,\.\<\>\/\? ]/) === -1){
            outputField.innerText = 'Missing special character'
        }else{
            outputField.innerText = 'Password is strong'
            outputField.style.color = 'green'
            inputField.style.outline = '2px solid green'
        }

    }
})