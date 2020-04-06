/**
 * DATA TYPES:
 * 
 * 0. In Javascript, data exists in different forms. Some forms are numeric, some are based on 
 * letter/characters, some contain only one piece of information, and some may contain several. 
 * These differences are fundamental to how the computer handles data in variables. 
 *
 */

// I. NUMBER: a number is a quantitative value.
// 1. Example of a number:
var number = 5;

// II. STRING: a string is a collection of characters in double or single quotes.
// 1. Example of a string:
var string = "Word";

// III. BOOLEAN: a boolean is a value of true or false.
// 1. Example of true:
var boolean = true;
// 2. Example of false:
var anotherBoolean = false;

/* IV. ARRAY: arrays can store any number of elements, which are indexed by position (starting at O),
separated by commmas, and enclosed with brackets.*/
// 1. Example of an array:
var myArray = [5, "Word", true];

/* V. OBJECT: objects are non-indexed colletions of key-value pairs. The keys and values are separated by 
a colon, and key-value pairs are separated with commas. The object is enclosed with curly braces. */
// 1. Example of an object:
var myObject = {name:"Grant", city:"New Orleans", neighborhood:"Mid-City"};

// VI. FUNCTION: a function takes an input and performs an action on it. 
// 1. Example of a function:
function add(num1, num2) {  //The function name is "add", and it takes two inputs, num1 and num2.
    return num1 + num2;      // This is the action to be performed on the input, enclosed by curly braces.
}
add(1, 2); /* This is the function invocation, where the function is told to act upon given inputs. The
function will return 3. */

// VII. UNDEFINED: undefined is itself a value, denoting that a variable has no value. 
// 1. Example of undefined:
var x;
console.log(x);  // This will produce undefined, because X has not been given a value yet.
x = 5;
console.log(x);  // X has been given a value of 5, so it is no longer undefined. 
// 2. Example of intentional use of undefined:
x = undefined;  // A variable's data can be cleared by assigning it "undefined" again. 
console.log(x);  // => undefined

/* VIII. NULL: null means nothing, and though similar to undefined, is not the same. Null is an intentional 
absense of value and must be assigned. Undefined, however, usually results from a declared variable that 
has yet to be assigned. */
// 1. Example of null:
var y = null; 
console.log(y); // => null

/* IV. NaN: NaN, "Not-a-Number," is rarely used in code, but it may appear as the result of a failed math 
function. It  also results when parsing encounters non-numeric data.*/
// 1. Example of NaN:
console.log(parseInt("three", 3)); // => NaN

/* X. INFINITY and -INFINITY: infinity is a value greater than any other number. It doesn't have an exact 
value--just greater than any other available number. -Infinity is simply the opposite of infinity, meaning a value
lesser than any other available number. */
// 1. Example of Infinity:
console.log(Infinity + 1);   // => Infinity
// 2. Example of Infinity's Boolean value:
console.log(Infinity > 100); // => true
// 3. Example of Boolean value of -Infinity compared to Infinity:
console.log(-Infinity > Infinity); // => false

// XI. PRIMITIVE/COMPLEX DATA TYPES 

/** 
 * Primitive, or simple data types:
 * 0. Primitive data types are immutable, meaning they cannot change. They are "stuck" at their face value.
 * 1. Primitive data types also cannot collect other data. 
 *
 * List of Primitive Data Types:
 * Number
 * String
 * Boolean
 * NaN
 * Null
 * Undefined 
 *
 */
 
/** 
 * Complex data types:
 * 0. Complex data types CAN aggregate other data types, and their size is indeterminate.
 *
 * List of Complex Data Types:
 * Object
 * Array
 * Function 
 *
 */
 
 
// XII. PASSING BY COPY VS REFERENCE 

/** 
 * 0. Primitive values are passed to a function by copy, meaning the actual value is passed around. 
 * 1. Meanwhile, complex values are passed by reference, meaning subsequent calls are only references to the 
 * original value 
 *
 */
 

// 1. Example of primitive data types and passing by copy:
var x = 10; 
var x = 8 + 2;  // Performing an operation on a primitive returns a new primitive (in this case, still 10);
var z = x;  // The value of var x (10) is passed to var z. 
z = 20;     // This reassigns z. It doesn't change the value of x. 
console.log(x); // => 10

// 2. Example of complex data types and passing by reference:
var exampleObject = {name:"Grant", favFood:"seafood", favChannel:"PBS"};
var newObject = exampleObject; /* As a result of running this, newObject and exampleObject both refer to the 
same object. */
newObject.favFood = "nutella"; //Using the new object label edits the original object (see below).
console.log(exampleObject.favFood); // => "nutella"