/* == Nullish coalescing operator (??) == */

/*
The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
*/

const foo = null ?? "default string";
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? console.log("hi");
console.log(baz);
// As the operator works on only null or undefined, so as there is no null or undefinded, so it returns the left hand side. and right-hand side will never evaluated


// == USE CASE ==
// while fetching data from database if the database is returned null or undefined then we call a function for a value

// storing value 0 - 9
const fetchAnotherValue = () => Math.floor(Math.random()*10)
const data = (null || undefined) ?? fetchAnotherValue();
console.log(data)



// == ERROR ==

// null || undefined ?? "foo"; // raises a SyntaxError
// true && undefined ?? "foo"; // raises a SyntaxError

// Use parenthesis to avoid error
const val1 = (null || undefined) ?? "foo";
console.log(val1);

// anding with true value = value
const val2 = true && (undefined ?? "foo");
console.log(val2);




// SHORT CIRCUITING
function a() {
  console.log("a was called");
  return undefined;
}
function b() {
  console.log("b was called");
  return false;
}
function c() {
  console.log("c was called");
  return "foo";
}

console.log(a() ?? c());
// Logs "a was called" then "c was called" and then "foo"
// as a() returned undefined so both expressions are evaluated

console.log(b() ?? c());
// Logs "b was called" then "false"
// as b() returned false (and not null or undefined), the right
// hand side expression was not evaluated
