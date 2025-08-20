let pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    let randomNum = Math.floor(Math.random() * 10);
    if (randomNum < 4) resolve(`Hey resolved with value ${randomNum}`);
    else reject(`Hey rejected with value ${randomNum}`);
  }, 1000);
});

/*
pr
.then(val => {
    console.log(val)
})
.catch(function (val) {
    console.log(val)
})
*/

async function runPromise() {
  try {
    let val = await pr;
    console.log(val);
  } catch (err) {
    console.log(err)
  }
}

runPromise()
