// const promise = new Promise((resolve, reject) => {
//     let num = Math.random();
//     if(num < .5) {
//         reject("Nothing to do");
//     }else{
//         setTimeout(() => {
//             console.log('Yayy!! I am greater .5')
//             resolve('Execution Done')
//         },2000)
//     }
// });
// console.log(promise)

// promise
// .then((e)=>{
//     console.log("Program executed without any error")
//     console.log(e)
// })
// .catch((e) => {
//     console.log(e)
// })
// .finally(() => {
//     console.log("Promise closed")
// })


const promise1 = new Promise((resolve, reject) => {
    const num = Math.round(Math.random()*20);
    if(num < 5){
        resolve(`Got value -> ${num} => promise1`)
    }else{
        reject(`Got Error -> ${num} => promise1`)
    }
})
const promise2 = new Promise((resolve, reject) => {
    const num = Math.round(Math.random()*20);
    if(num < 5){
        resolve(`Got value -> ${num} => promise2`)
    }else{
        reject(`Got Error -> ${num} => promise2`)
    }
})
const promise3 = new Promise((resolve, reject) => {
    const num = Math.round(Math.random()*20);
    if(num < 5){
        resolve(`Got value -> ${num} => promise3`)
    }else{
        reject(`Got Error -> ${num} => promise3`)
    }
})
const promise4 = new Promise((resolve, reject) => {
    const num = Math.round(Math.random()*20);
    if(num < 5){
        resolve(`Got value -> ${num} => promise4`)
    }else{
        reject(`Got Error -> ${num} => promise4`)
    }
})
const promise5 = new Promise((resolve, reject) => {
    const num = Math.round(Math.random()*20);
    if(num < 5){
        resolve(`Got value -> ${num} => promise5`)
    }else{
        reject(`Got Error -> ${num} => promise5`)
    }
})

promise1.then((message) => {
    console.log(message)
}).catch((errMessage) => {
    console.log(errMessage)
})
promise2.then((message) => {
    console.log(message)
}).catch((errMessage) => {
    console.log(errMessage)
})
promise3.then((message) => {
    console.log(message)
}).catch((errMessage) => {
    console.log(errMessage)
})
promise4.then((message) => {
    console.log(message)
}).catch((errMessage) => {
    console.log(errMessage)
})
promise5.then((message) => {
    console.log(message)
}).catch((errMessage) => {
    console.log(errMessage)
})

console.log("\n======= newProm1 =======\n")
let newProm1 = Promise.all([promise1, promise2, promise3, promise4, promise5]);
console.log(newProm1)
newProm1.then((message)=>{
    console.log(message)
}).catch((errMessage) => {
    console.log(errMessage)
})

console.log("\n======= newProm2 =======\n")
let newProm2 = Promise.allSettled([promise1, promise2, promise3, promise4, promise5])
console.log(newProm2)
newProm2.then((message) => {
    console.log(message)
}).catch((errMessage) => {
    console.log(errMessage)
})

console.log("\n======= newProm3 =======\n")
let newProm3 = Promise.race([promise1, promise2, promise3, promise4, promise5]);
console.log(newProm3)
newProm3.then((message) => {
    console.log(message)
}).catch((errMessage) => {
    console.log(errMessage)
})

console.log("\n======= newProm4 =======\n")
let newProm4 = Promise.resolve([promise1, promise2, promise3, promise4, promise5]);
console.log(newProm4)
newProm4.then((message) => {
    console.log(message)
}).catch((errMessage) => {
    console.log(errMessage)
})
