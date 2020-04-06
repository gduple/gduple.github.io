/**
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 */
 
/** 
 * I. DECLARATION AND ASSIGNMENT 
 *
 * 0. There are 2 phases of using variables: declaration and initialization (or assignment). 
 *
 */

// 1. Declaration:
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. Initialization or assignment:
myName = 'john';
console.log(myName); // prints => john

// 3. Re-assignment:
myName = 'bob';
console.log(myName); // prints => bob

// 4. NOTE: We can assign and re-assign anything to a variable--we cannot do this with constants //
var myVariable = 1;
var myVariable = true; // => myVariable has been reassigned.
myVariable = "someString"; // => myVariable is reassigned again.

/** 
 *II. VAR, LET, CONST
 *
 * 0. Like var, let and const are also variables--data containers used for the life of a program--but 
 * let and const vary slightly in how they work. 
 *
 * 1. let: let variables are block scope local variables, meaning they are only available to be 
 * accessed within their block of code, such as in an if/else statement or loop. Let variables CAN
 * be reassigned, but canNOT be redeclared. 
 *
 * 2. const: const variables, like let variables, are block-scoped. They also cannot be redeclared, 
 * but unlike let variables, they canNOT be reassigned. Furthermore, a const variable must be initialized
 * upon being declared. 
 *
 */

// 1. Let variable used in a for-loop:
for(let i = 5; i > 0; i--) { // This let variable, i, is block-scoped in the for loop. 
         console.log(i); // => Prints the values of i. There are multiple since let can be reassigned.
    }
// 2. Let variable's block scope:
// console.log(i); // => a console.log(i) here throws an error since it is outside of the block scope of i.
 
// 3. Let variable and redeclaration:
let firstInitial = "G"; 
console.log(firstInitial); 
// let firstInitial = "M"; // => Using let here will throw an error since let can't be redeclared. 
    
// 4. Const variable:
const lastInitial  = "D";
console.log(lastInitial); 

// 5. Const variable and redeclaration/reassignment:
// var lastInitial = "G"; // => Throws an error since lastInitial has already been declared, AND...
// this also attempts to reassign it. 

/** 
 * III. HOISTING
 * 
 * 0. The term hoist describes access to a variable or function at the top of their scope at runtime. Specifically,
 * functions and their assigned values are hoisted. Variables, however, are hoisted by name only, not value. Furthermore, 
 * let and const are different than var in that are not available until the line at which they are initialized.
 *
 */

// 1. Function hoisting:
console.log(add)    // This gives you [Function: add] because the function has been hoisted to the top.
function add(num1, num2) {
    return num1 + num2;
}

// 2. Variable hoisting:
console.log(add);   // This gives you undefined. The variable name has been hoisted to the top, but not it's value.
var add = function(num1, num2){
   return num1 + num2;
}

// 3. Console.log() placement gives different values even for the same function:
var add = function(num1, num2){
   return num1 + num2;
}
console.log(add);   /* The same function, but with the console.log() down here gives you [Function: add] again,
because the variable's value is available after it's been initialized. */

// 4. const and hoisting/initialization:
// console.log(name);   // This would give an error since const isn't available until the line at which it's initialized.
// const name = "Grant";
// console.log(name).   // This code will never run since an error was reached on the first line. 


