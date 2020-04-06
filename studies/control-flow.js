/**
 * CONTROL FLOW:
 *
 * 0. Conditional statements are used to control the flow of a program. By asking a series of true or
 * false questions, we can decide what code will run. 
 *
 * 1. If/else statements begin with an if statement. If the if statement if true, the provided code will run. 
 *
 * 2. An else statement can be supplied at the end as a default if the if statement is false. 
 * 
 * 3. The chain can be lengthened with else-if statements after the initial if statement. 
 *
 * 4. Switch statements offer another way to build flexbility into code. 
 * 
 * 5. Switch statements check a given parameter against a number of options ("cases" in code) and run subsequent
 * code. Care must be taken in writing the code to include break statements at the end of each case to prevent
 * the next case from running. 
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
} /* => "Out of range. Enter a number between 10 and 20."" (The value of the variable met the criteria in the
if statement since 21 is greater than 20. */

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
} /* => 'cluck cluck': the variable met the 'chicken' case and printed the corresponding message. */