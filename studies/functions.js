/**
 * FUNCTIONS:
 * 
 * 0. A function must first be declared with the keyword "function" following by the name of the 
 * function. After the name, in parentheses, are the parameters. The code block is then placed in 
 * curly braces. Putting a function into action is referred to as "invoking" it or "calling" it, which 
 * is done by entering the function name, following by arguments in parentheses. 
 * 
 * 1. The parameters of the function are similar to variables in that they are placeholders for data.
 * They don't actually contain any data unless/until the function is called, at which point arguments
 * (actual data) are passed into the function where the parameters go. 
 * 
 * 2. Syntax for a named function:
 * 
 *      syntax:         function functionName(parametersN) {
 *                          <code to be executed>
 *                      }
 *      invocation:     functionName(arguments);
 * 
 * 3. To assign a function to a variable:
 * 
 *                      var functionName = function(parametersN) {
 *                          <code to be executed>
 *                      }
 * 
 * 4. Function inputs are the arguments given in parentheses at call time. Functions, however, do not 
 * have to have parameters/take arguments. And if they do have parameters, the number of arguments must
 * match the number of parameters. (In actuality, if there are more arguments than parameters, the 
 * function will take them in order and ignore any subsequent extra parameters, but if there are not
 * enough arguments for the given parameters, the function will not behave normally.) As far as function
 * outputs, a function can give a return statement (only one), which "issues" the value out of the 
 * function. The return statement therefore gives value to a function call and pulls that value to 
 * parent/global scope.
 * 
 * 5. Although functions can see and modify variables in global scope, variables and values created
 * within a function are function (child) scoped. This is why returning a value out of the function is
 * important.
 * 
 * 6. Closures are important because they keep variables alive and child-scoped functions accessible
 * which increases the flexibility and complexity of the code's abilities. 
 * 
 */ 

// 1. Example of a function:
function add(num1, num2) { // function keyword, function name, (parameters)
  return num1 + num2;       // code block
}
console.log(add(4, 3)); /** => 7: the arguments 4 and 3 were passed to the function which added them
as num1 and num2. */

// 2. Example of a function assigned to a variable:
var multiply = function(number1, number2) {
    return number1 * number2;
}
console.log(multiply(3, 7)); // => 21

// 3. Example of return
function addMore(param1, param2) {
  return param1 + param2; 
}
console.log(addMore(4, 3) + 1); /* => 8: the value resulting from the function's code was returned out of
the function, so it was available to be added to 1. On the other hand... */

// 4. Example without return:
function addAgain(parameter1, parameter2) {
  parameter1 + parameter2; 
}
console.log(addAgain(4, 3) + 1); /* => NaN: since the resultant value wasn't returned out of the
function, the computer doesn't know what the value of the function call is, so it can't be added to 1. */

//5. Another example without return:
function addSomeMore(n1, n2) {
    console.log(n1 + n2); 
}
addSomeMore(4, 3) // => 7 prints to the console because the function's code has a console.log.
console.log(addSomeMore(4, 3) + 1); /* => Prints 7 and NaN. The function prints 7 again because of 
the code telling it to print to the console, but it's not actually creating a value or returning it. 
Therefore, console.log(addSomeMore(4, 3) + 1); can't be calculated because the function never produced
a value to add to 1. */

// 6. Example of closure:
function makeHometown (cityName, stateName) {
var hometownIntro = "My hometown is ";

function makeCityState () {     // has access to outer function's variable and parameters
return hometownIntro + cityName + "," + " " + stateName + ".";   
}

return makeCityState ();        // return the inner function 
}

console.log(makeHometown("New Orleans", "Louisiana")); // => "My hometown is New Orleans, Louisiana."


