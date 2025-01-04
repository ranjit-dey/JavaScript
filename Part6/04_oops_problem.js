/* 1. Person Class with Details

Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details. */
console.log('\n============== Program 1 ==============\n')

class Person{
    constructor(name, age, country){
        this.name = name;
        this.age = age;
        this.country = country;
    }

    displayDetails(){
        return `Name : ${this.name}\nAge : ${this.age}\nCountry : ${this.country}`
    }
}

let Person1 = new Person('Ranjit Dey', 21, 'India')
let Person2 = new Person('Ankush Dey', 9, 'America')

console.log('Person1 Details');
console.log(Person1.displayDetails())

console.log()

console.log('Person2 Details');
console.log(Person2.displayDetails())

/* 
2. Rectangle Class with Area and Perimeter

Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.
 */
console.log('\n============== Program 2 ==============\n')
class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    calculateArea(){
        return `Area of the rectangle : ${this.width*this.height}`;
    }
    calculatePerimeter = () => `Perimeter of the rectangle : ${2*(this.width+this.height)}`
}

const rect1 = new Rectangle(10, 13);
console.log(rect1.calculateArea());
console.log(rect1.calculatePerimeter());

/* 
3. Vehicle and Car Classes with Inheritance

Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.
 */

console.log('\n============== Program 3 ==============\n')
class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    
    displayDetails(){
        console.log('Vechile Details');
        console.log(`Make : ${this.make}`);
        console.log(`Model : ${this.model}`);
        console.log(`Year : ${this.year}`);
    }
}

class Car extends Vehicle{
    constructor(make, model, year, doors){
        super(make, model, year) // adding parent class properties
        this.door = doors;
    }
    
    displayDetails(){ // overriding display function
        super.displayDetails()
        console.log(`Door : ${this.door}`);
    }
}

const myNewCar = new Vehicle('Berlin', 'Tokoyo', 2011)
myNewCar.displayDetails()

const myCar = new Car('Korella', 'Toyota', 2021, 4);
myCar.displayDetails();


/* 
4. BankAccount Class with Deposit and Withdrawal

Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.
 */

console.log('\n============== Program 4 ==============\n')
class BankAccount{
    constructor(acNo, balance){
        this.accountNumber = acNo;
        this.balance = balance;
        console.log(`Ac. number : ${this.accountNumber}`);
        console.log(`Balance : ${this.balance}`);
    }
    
    deposit(money){
        this.balance = this.balance + money;
        console.log("Deposited : ", money)
    }
    withdraw(money){
        if(money <= this.balance){
            this.balance = this.balance - money;
            console.log(`Withdrawn : ${money}`);
        }else{
            console.log("Insufficient Balance");
        }
    }
    accountDetails(){
        console.log("Account Details");
        console.log(`Ac. number : ${this.accountNumber}`);
        console.log(`Balance : ${this.balance}`);
    }
}

const acc1 = new BankAccount('00223301', 0);

acc1.deposit(1000);
acc1.accountDetails();
acc1.withdraw(500);
acc1.accountDetails();
acc1.withdraw(600);
acc1.accountDetails();


/* 
5. Shape, Circle, and Triangle Classes with Area Calculation

Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.
 */

console.log('\n============== Program 5 ==============\n')
class Shape{
    calculateArea(){
        throw new Error("Method 'calculateArea()' must be overridden in subclasses");
    }
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
    }
    calculateArea(){
        console.log(`Area of circle : ${Math.PI*this.radius*this.radius}`)
    }
}

class Triangle extends Shape{
    constructor(base, height){
        super();
        this.base = base;
        this.height = height;
    }
    calculateArea(){
        console.log(`Area of Triangle : ${(this.base * this.height) / 2}`)
    }
}
// const shape1 = new Shape();
// circle.calculateArea()

const circle1 = new Circle(5); // instance of Circle class
circle1.calculateArea();

const triangle1 = new Triangle(12, 3); // instance of Triangle class
triangle1.calculateArea();



/* 
6. Employee and Manager Classes with Salary Calculation

Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.
*/

console.log('\n============== Program 6 ==============\n')
class Employee{
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }
    
    calculateAnnualSalary(){
        return this.salary
    }
}

class Manager extends Employee{
    constructor(name, salary, department){
        super(name, salary);
        this.department = department;
    }
    
    
    calculateAnnualSalary(){
        return this.salary + this.salary*(0.1);
    }
}

const emp1 = new Employee('Ram', 2000);
console.log(emp1.calculateAnnualSalary());

const manag1 = new Manager('Ranjit', 3000, 'Accounts');
console.log(manag1.calculateAnnualSalary())

/* 
7. Make a javascript program for cart where user can add or remove items and check the total price
*/

console.log('\n============== Program 7 ==============\n')
class cartItem{
    constructor(name, quantity, price){
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

class ShopingCart{
    constructor(){
        this.bucket = [];
    }

    addItem(name, quantity, price){
        if(name === '' || quantity <= 0 || price < 0){
            console.log('Invalid product name or quantity or price');
            return;
        }
        const item = new cartItem(name, quantity, price);
        this.bucket.push(item);
        console.log(`Item added: ${name} (${quantity} x ${price} each)`);
    }
    
    removeItem(itemNo){
        if(itemNo < 1) {
            console.log('Select valid item');
            return;
        }
        this.bucket.splice(itemNo-1,1);
    }
    
    totalPrice(){
        let totalPrice = 0;
        for(const item of this.bucket){
            totalPrice = totalPrice + (item.quantity*item.price)
        }
        return totalPrice;
    }
    
    printReceipt(){
        if(this.bucket.length === 0){
            console.log('Your cart is empty.')
            return;
        }
        console.log('Receipt:')
        let itemNo = 1;
        for(const item of this.bucket){
            console.log(`${itemNo}. ${item.name} - ${item.quantity} x ${item.price} = ${item.quantity*item.price}`)
            // console.log(item)
            itemNo++;
        }
        console.log(`Total: ${this.totalPrice()}`)
    }
    
    
}

let myCart = new ShopingCart();

myCart.addItem('Soap', 3, 23);
myCart.addItem('Body Oil', 34, 23);
myCart.printReceipt();
myCart.removeItem(1)
myCart.printReceipt();
myCart.removeItem(1)
myCart.printReceipt();



/* 
8. Create a task manager of organise task
*/

console.log('\n============== Program 8 ==============\n')

class Task {
    constructor(name, description, status = 'pending') {
        this.name = name;
        this.description = description;
        this.status = status.toLowerCase() === 'completed' ? 'completed' : 'pending';
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(name, description, status) {
        if (!name || !description) {
            console.log("Invalid name or description.");
            return;
        }
        const newTask = new Task(name, description, status);
        this.tasks.push(newTask);
        console.log(`Task added:\n\tName: ${name}\n\tDescription: ${description}`);
    }

    removeTask(taskNo) {
        if (taskNo < 1 || taskNo > this.tasks.length) {
            console.log("Task not found.");
            return;
        }
        const removedTask = this.tasks.splice(taskNo - 1, 1)[0];
        console.log(`Task removed:\n\tName: ${removedTask.name}\n\tDescription: ${removedTask.description}`);
    }

    markCompleted(taskNo) {
        if (taskNo < 1 || taskNo > this.tasks.length) {
            console.log("Task not found.");
            return;
        }
        this.tasks[taskNo - 1].status = 'completed';
        console.log(`Task ${taskNo} marked as completed.`);
    }

    editTaskDescription(taskNo, description) {
        if (taskNo < 1 || taskNo > this.tasks.length) {
            console.log("Task not found.");
            return;
        }
        this.tasks[taskNo - 1].description = description;
        console.log(`Task edited:\n\tName: ${this.tasks[taskNo - 1].name}\n\tDescription: ${description}`);
    }

    displayTaskList() {
        if (this.tasks.length === 0) {
            console.log("Your task list is empty.");
            return;
        }
        console.log("All tasks:");
        this.tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.name} - ${task.description} - ${task.status}`);
        });
    }

    displayCompletedTask() {
        const completedTasks = this.tasks.filter(task => task.status === 'completed');
        if (completedTasks.length === 0) {
            console.log("No completed tasks.");
            return;
        }
        console.log("Completed tasks:");
        completedTasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.name} - ${task.description}`);
        });
    }

    clearAllTasks() {
        this.tasks = [];
        console.log("All tasks cleared.");
    }
}

// Example Usage
const taskManager = new TaskManager();

taskManager.addTask('JavaScript', 'I have to learn JavaScript by today', 'Pending');
taskManager.addTask('C Programming', 'I have to learn C programming by tomorrow', 'pending');
taskManager.addTask('Python', 'I have to learn Python by today', 'Completed');

taskManager.removeTask(2);
taskManager.displayTaskList();

taskManager.markCompleted(1);
taskManager.editTaskDescription(1, 'Completed learning JavaScript');
taskManager.displayCompletedTask();

taskManager.clearAllTasks();
taskManager.displayTaskList();
