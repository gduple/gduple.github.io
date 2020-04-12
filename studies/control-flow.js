/**
 * CONTROL FLOW:
 *
 * 0. Conditional statements are used to control the flow of a program. By asking 
 * a series of true or false questions, we can decide what code will run. 
 *
 * 1. If/else statements begin with an if statement. If the if statement if true, 
 * the code block will run. An else statement can be supplied at the end as a 
 * default if the if statement is false. The chain can be lengthened with any 
 * number of else-if statements after the initial if statement, but there can only 
 * be one if statement, which must be at the beginning, and there can only be one
 * else statement (though not required), which much be at the end of the chain.
 * 
 * 2. The condition in if and else-if statements are set off by parentheses. 
 * Following the condition, the code block is set off by curly braces. After the 
 * code block's closing brace comes the else-if statement (if needed), followed 
 * by another condition in parentheses. Else statement's implicitly have no 
 * condition as all other conditions tested returned false. 
 * 
 * 3. The code block is subject to block scope, meaning const and let variables 
 * declared within them are only accessible inside them. 
 *
 * 3. Switch statements offer a different type conditional structure. Switch 
 * statement are useful when there are numerous possibilities under one condition, 
 * specifically as in a long chain of nested if-else statements. 
 * 
 * 4. A switch statement first evaluates an input expression, which is set in 
 * parentheses after the keyword switch. The following code block is set off by 
 * curly braces and includes any number of possible conditions to which the input 
 * expression is matched. Conditions use the keyword "case", followed by the 
 * expression to be compared, a colon, and the code to run if a match is found. 
 * Break statements are used to stop code from running, which is often desired 
 * before the next case. Multiple case statements, however, can use the same 
 * block of code before a break statement is added.
 *
 */
 
// 1. If statement:
var x = [ 3, 2, 5, 4 ];
if (x[2] === 5) {
    console.log(true); 
} // => true: position 2 of the array is 5, so the if condition is met. 

 // 2. If-else statement:
var y = 21; 
if (y < 10 || y > 20) {
    console.log("Out of range. Enter a number between 10 and 20.");
} else {
    console.log("Number is within range.")
} /* => "Out of range. Enter a number between 10 and 20."" (The value of the 
variable met the criteria in the if statement since 21 is greater than 20. */

// 3. If/else-if/else statement:
var temperature = 70;
if (temperature < 60) {
  console.log("Cook gumbo.");
} else if (temperature >= 60 && temperature < 70) {
  console.log("Wear a light jacket."); 
} else if (temperature >= 70 && temperature < 80) {
  console.log("Go for a walk.");
} else {
  console.log("Put on shorts.");
} /* => 'Go for a walk." The variable met the third criteria.*/

// 4. Switch Statement:
var animal = 'chicken'; 
switch (animal) {
  case 'rooster':
    console.log('cockadoodle-doo');
    break;          // Break statement to prevent code continuing 
  case 'chicken':   // Notice two cases that the same result
  case 'hen':       
    console.log('cluck cluck');
    break;
  case 'pig':       // Another pair of cases with the same result
  case 'hog':
    console.log('oink oink');
    break;
  case 'cow':
    console.log('moo');
    break;
  default:
    console.log('Animal not recognized.');
} /* => 'cluck cluck': the variable met the 'chicken' case and printed the 
corresponding message. */