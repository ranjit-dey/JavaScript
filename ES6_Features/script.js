/* == PROMISE EXAMPLE == */

/* A promise is created, it takes a callback as input and the callback function has two parameter first one is for resolve case means if the promise has done then it will be called and the second one is for reject case means if the promise has not done then it will be called

and for the result there will be two option if the promise return resolve then and if the promise return reject then another case

result.then(callback).catch(callback)

*/

/*

let result = new Promise((res, reject) => {
  if (false) return res();
  else return reject();
});

result
  .then(function () {
    console.log("Promise is done");
  })
  .catch(function () {
    console.log("Promise is not done");
  });

  */

/* ================================================================================ */

/* == Scenario == */
// user will ask for a number between 0 to 9 and if the number is below 5 resolve if not reject


/*
let userInput = Math.floor(Math.random()*10);
    console.log(userInput)

let result = new Promise((res, rej) => {
  if (userInput < 5 && userInput >= 0) return res();
  return rej();
});

console.log(result)

result
  .then(() => {console.log("User input was right")})
  .catch(() => {console.log("User input was wrong")});

*/


/* ================================================================================ */



/* == Scenario == */

// Task should be completed Asynchronously
// 1. sabse pahle ghar par aao
// 2. gate kholo aur gate lagao
// 3. khana pakao khana khao
// 4. incognito mode chalao
// 5. sojao kyuki tum thak gaye ho

/*

let promise1 = new Promise((res, rej)=>{
    return res('sabse pahle ghar par aao')
})

let promise2 = promise1.then((data)=>{
    console.log(data)
    return new Promise((res, rej) => {
        return res('gate kholo aur gate lagao');
    })
})

let promise3 = promise2.then((data)=>{
    console.log(data)
    return new Promise((res, rej) => {
        return res('khana pakao khana khao')
    })
})

let promise4 = promise3.then((data)=>{
    console.log(data);
    return new Promise((res, rej)=>{
        return res('incognito mode chalao');
    })
})

let promise5 = promise4.then((data)=>{
    console.log(data);
    return new Promise((res, rej) => {
        return res('sojao kyuki tum thak gaye ho');
    })
})

promise5.then((data)=>{
    console.log(data)
})

// promise1.catch(()=> {
//     console.log('promise 1 is not completed')
// })

*/




/* ================================================================================ */



/* == Scenario == */
// whern you application is fetch data from third party then in that portion you have to wait for the particular time then you should continue you code

async function randomUser(){
    let raw = await fetch('https://randomuser.me/api/')
    let processed = await raw.json()
    console.log(processed)
    console.log(processed.results[0].name.first)
}

randomUser()





/* ================================================================================ */



/* == Scenario == */
// as js is interpreted language so the code will excute line by line when any error will occurred then the below code will not run.

// console.log("hey")
// console.log(hey) // error is here
// console.log("hey")

console.log("hey")
try{
    console.log(hey)
    
}catch(err){
    console.log(err)
}
console.log("hey")