/* == SWITCH STATEMENT == */

/* Program 1 */
console.log('\n\n  ----------')
console.log("  Program 1");
console.log('  ---------- \n\n')



const expr = "Mangoes";
switch (expr) {
    case "Oranges":
        console.log("Oranges are $0.59 a pound.");
        break;

    case "Mangoes":
    case "Papayas":
        console.log("Mangoes and papayas are $2.79 a pound.");
        break;
        
    default:
        console.log(`Sorry, we are out of ${expr}.`);
}




/* Program 2 */
console.log('\n\n  ----------')
console.log("  Program 2");
console.log('  ---------- \n\n')

// switch evaluated all the case top to bottom while its find match it will not evaluate further, after finding match it execute code untill it found break;


const value = 5;
switch (value) {
    case console.log('I will be evaluated') : console.log('1');
    case console.log('I will also be evaluated') : console.log('2');

    // here match is found
    case 5 : console.log('5');

    // this case will not be evaluated but 6 will be printed as there is no break statement
    case console.log('I will not be evaluated as match found') : console.log('6');

    // 55 will be printed
    case 5 : console.log('55'); 
}





/* Program 3 */
console.log('\n\n  ----------')
console.log("  Program 3");
console.log('  ---------- \n\n')

// code is ok but, as const is blocked (switch block) scope so there will show an error that message is redeclared so to avoid error use var in both or use curly braces for case

const action = "say_hello";
switch (action) {
    // curly braces used 
  case "say_hello": {
    const message = "hello";
    console.log(message);
    break;
  }
  case "say_hi":
    const message = "hi";
    console.log(message);
    break;
  default:
    console.log("Empty action received.");
}





/* Program 4 */
console.log('\n\n  ----------')
console.log("  Program 4");
console.log('  ---------- \n\n')

// We can use default case inside two case there is no issue

const num = 5;
switch (num) {
  case 2:
    console.log(2);
    break; // it encounters this break so will not continue into 'default:'
  default:
    console.log("default");
  // fall-through
  case 1:
    console.log("1");
}




/* Program 5 */
console.log('\n\n  ----------')
console.log("  Program 5");
console.log('  ---------- \n\n')

// Taking advantage of fall-through

// you can define animal as cow, dog, pig as well for same output
const Animal = "Giraffe";
switch (Animal) {
  case "Cow":
  case "Giraffe":
  case "Dog":
  case "Pig":
    console.log("This animal is not extinct.");
    break;
  case "Dinosaur":
  default:
    console.log("This animal is extinct.");
}




/* Program 6 */
console.log('\n\n  ----------')
console.log("  Program 6");
console.log('  ---------- \n\n')



const foo = 1;
let output = "Output: ";
switch (foo) {
  case 0:
    output += "So ";
  case 1:
    output += "What ";
    output += "Is ";
  case 2:
    output += "Your ";
  case 3:
    output += "Name";
  case 4:
    output += "?";
    console.log(output);
    break;
  case 5:
    output += "!";
    console.log(output);
    break;
  default:
    console.log("Please pick a number from 0 to 5!");
}



/* Program 7 */
console.log('\n\n  ----------')
console.log("  Program 7");
console.log('  ---------- \n\n')

shape = 4;
function isSquare(shape){ return true}

switch (true) {
    case isSquare(shape):
      console.log("This shape is a square.");
    // Fall-through, since a square is a rectangle as well!
    case isRectangle(shape):
      console.log("This shape is a rectangle.");
    case isQuadrilateral(shape):
      console.log("This shape is a quadrilateral.");
      break;
    case isCircle(shape):
      console.log("This shape is a circle.");
      break;
  }
  