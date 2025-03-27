// class

class Human {

    // properties
    name = "ranjit"
    age = 21
    weight = 51

    // functionality
    walk = () => {
        console.log(`${this.name} can walk throughly`);
    }

    running(){
        console.log(`${this.name} can run fast`);
    }

}


const humanObj = new Human();
console.log(humanObj.name); // name, age, weight are accessible outside the class
console.log(humanObj.age);
console.log(humanObj.weight);
humanObj.walk();
humanObj.running();







// private properties

class Account {

    #balance = 0; // private variable
    accNo = 2211446620;
    aadharNo = 5498663214;
    #atmPIN;

    checkBalance = () => {
        console.log('Your account balance', this.#balance);
    }

    depositAmount = (amount) => {
        this.#balance += amount;
        this.checkBalance();
    }

    withdrawAmount = (amount) => {
        this.#balance -= amount;
        this.checkBalance();
    }

    // getter and setter 
    get accPin(){
        return this.#atmPIN;
    }
    

    set accPin(pin){
        this.#atmPIN = pin;
    }
}

const myAccount = new Account();
console.log(myAccount.accNo);
console.log(myAccount.aadharNo);
// console.log(myAccount.#balance); // throw an error
myAccount.checkBalance();
myAccount.depositAmount(8560);
myAccount.depositAmount(8);
myAccount.depositAmount(850);
myAccount.depositAmount(80);
myAccount.withdrawAmount(9000);
console.log(myAccount.accPin); // fetching the value of pin
myAccount.accPin = 5685; // setting the value of pin
console.log(myAccount.accPin)





