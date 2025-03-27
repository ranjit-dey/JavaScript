function order(){
    let value = 5;
    return function() {
        value++;
        return value;
    }
}
let value = 5;
let increment  = () => {
    value++;
    return value;
};

let callOrder = order();
console.log(increment())
console.log(increment())
console.log(callOrder())
console.log(callOrder())
console.log(callOrder())