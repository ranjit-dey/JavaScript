// Encapsulation => you can't data object directly without any method.

console.log('\n============== Program 1 ==============\n')
class BankAccount{
    #balance = 0; // inside class is accessible
    
    deposit(amount){
        this.#balance += amount;
        return this.#balance;
    }

    getBalance(){
        // return this.#balance
        return `$ ${this.#balance}`
    }
}

let account = new BankAccount();
// console.log(account.balance)
// console.log(account.#balance); // -> will throw an error
console.log(account.getBalance())



// Abstraction => hiding the complex things from user
console.log('\n============== Program 2 ==============\n')

class CoffeMachine{
    start(){
        // call DB
        // filter value
        return 'Machine started...';
    }

    brewCoffee(){
        // complex calculation
        return 'Brewing Coffee';
    }

    pressStartButton(){ // hiding complexity
        let msgOne = this.start();
        let msgTwo = this.brewCoffee(); 
        return `${msgOne}\n${msgTwo}`
    }
}

let myMachine = new CoffeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());

console.log(myMachine.pressStartButton())


// Polymorphism
console.log('\n============== Program 3 ==============\n')

// Polymorphism is one of the most important concepts in OOP. It describes the ability of something to have or to be displayed in more than one form.
// The different form s arise because these entities can be assigned different meanings and used in various way multiple contexts.


class Bird{
    fly(){
        return `I am flying....`;
    }
}

class Penguin extends Bird{
    // Polymorphism
    fly(){
        return `Penguin can't fly...`
    }
}

const bird = new Bird();
const penguin = new Penguin();
console.log(bird.fly())
console.log(penguin.fly())


// static => static is only the method which can be called by Class
console.log('\n============== Program 4 ==============\n')

class Calculator{
    static add(a, b){
        return a+b;
    }
}

let miniCalc = new Calculator();
// console.log(miniCalc.add(2,3)) // throw an error

console.log(Calculator.add(2,5))


// getter and setter
console.log('\n============== Program 5 ==============\n')

class Employee{
    #salary
    constructor(name, salary){
        this.name = name;
        if(salary < 0){
            throw new Error("Salay cannot be in negative")
        }
        this.#salary = salary;

    }

    get salary(){
        return `${this.#salary}`;
    }

    set salary(value){
        if(value < 0) {
            console.error('Invalid Salary')
        }else{
            this._salary = value;
        }
    }
}

let emp = new Employee('Alice', -50000);
console.log(emp.salary);
emp.salary = -60

