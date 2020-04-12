/**
 * LOOPS:
 * 
 * 0. Loops are used to repeatedly execute code as many times as needed. 
 * 
 * 1. While loops are basic loops that begin with the keyword "while" and have a 
 * condition (notated in parentheses) under which the program will continue to 
 * run the block of code. They read in English fairly well: while(count < 5) ... 
 * "While count is less than 5..."
 * 
 * 2. For loops are similar to while loops but more advanced. They begin with the 
 * keyword "for" and in parentheses precise circumstances are laid out under which 
 * the code block will run. The conditions include the starting point, notated 
 * with a new variable, often called "i" or "index" (var i = 0); the stopping 
 * point (i < 11), and whether the loop will increment or decrement, and by how 
 * much (i++). 
 * 
 * 3. For-in loops are used to loop over objects, which behave differently since 
 * their data is not ordered. The basic structure is: for(var key in obj) {code 
 * block here}. The code is telling the computer to go through every key in the 
 * object, one by one, and execute the code block for each key. 
 * 
 */ 

// 1. Example of while loop:
var count = 0;
while(count < 5) {
    console.log(count);
    count++;
} 
/** => counts from 0 to 4: Count is initially 0, which allows the code to execute 
 * (because the condition to execute is count < 5). The code tells count to 
 * increment by 1 (++), count becomes 1 instead of 0, and the loop starts over 
 * because the condition to execute is again met. Of note, if the 
 * console.log(count) is moved to the line AFTER the count++ code, the sequence 
 * will instead be the numbers 1 through 5. This happens because the very first 
 * instance of count to be logged will be after count is incremented for the first 
 * time to 1. Likewise, at the end of the loop, when the value of count is 4, and 
 * the condition is met for the final time, the value will increment once more 
 * to 5. As written, count is actually incremented once more to 5, but 5 isn't 
 * being logged to the console because the console.log() occurs before the final 
 * increment command. 
 * 
 * ETA: While loops are useful when you know exactly how many times you want to 
 * perform an action. Also, a big pitfall is that you have to be sure to add a 
 * stopping condition in the code block or your program will go into an infinite 
 * loop. 
 * 
 */
 
// 2. Example of for loop counting up:
for (var i = 0; i <= 10; i += 2) { // notice start point; stop point; and increment
    console.log(i);
} 
/** => 0 2 4 6 8 10: The starting point was 0, and the stopping point was 
 * less-than-or-EQUAL-TO 10, so the loop coninued through 10, and with the 
 * increment set to 2, it counted only the even numbers.
 */
 
//  3. Example of for loop counting down:
for (var index = 50; index > 40; index--) {
    console.log(index);
}
/** => counts from 50 down to 41: the starting point was set to 50, and condition 
 * to continue was index being greater than 40, thus 41 was the value logged. The 
 * decrement operator (--) was used to count down. 
 */
 
//  4. Looping forward over an array:
var cardinalDirections = [ 'North', 'South', 'East', 'West' ];
for (var i = 0; i < cardinalDirections.length; i++) {
    console.log(cardinalDirections[i]);
}
/** => "North South East West": the loop starts at the zeroeth position of the 
 * array (North), and increments by one until i is no longer less than the length 
 * of the array. The array length is 4 so the final position logged is 3 (West). 
 */

// 5. Looping backward over an array:
for (var i = cardinalDirections.length-1; i >= 0; i--) {
    console.log(cardinalDirections[i]); 
}
/** => "West East South North": the loop starts at the position one less than the 
 * length of the array (position 3, since the length is 4). The code continues, 
 * decrementing (i--) until i is equal to 0. Notice the greater-than-or-equal-to 
 * operand has been used for the stop condition so that position 0 (North) would 
 * be included. 
 */

// 6. Looping over an object and returning its KEYS:
var myObject = { 
    firstName: 'Grant', 
    petType: 'dog', 
    petName: 'Annie', 
    hobby: 'genealogy' 
};
// Notice the variable name for the actual object is used (often forgotten)
for (var key in myObject) {         
    console.log(key);             
}
/** => "firstName petType petName hobby": the code block runs for each key in 
 * myObject, printing the key name to the console. Notice the use of the word 
 * key in the console.log. Quotation marks--console.log("key");--canNOT be used 
 * here or the string "key" will be printed for each iteration. 
 */

// 7. Looping over an object and returning its VALUES:
var myObject = { 
    firstName: 'Grant', 
    petType: 'dog', 
    petName: 'Annie', 
    hobby: 'genealogy' 
};

for (var key in myObject) {         
    console.log(myObject[key]);     
}
/** => "Grant dog Annie genealogy": the code block runs for each key in myObject.
 * In this example the *values* are printed since the command in the console.log 
 * is for myObject at each key. Notice the use of bracket notation in the 
 * console.log. Dot notation (myObject.keys) canNOT be used here or the computer 
 * will look for a key specifically named "key". 
 */