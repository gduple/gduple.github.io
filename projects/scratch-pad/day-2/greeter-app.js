// #!/usr/bin/env node

'use strict';

/** 
 * IN CLASS EXERCISE: Greeter App
 *
 * Using if, else-if and else, AND depending on the hour of the day, 
 * write a greeting program that prints a greeting to the screen like so: 
 *
 * // hour is 0-11
 * Good Morning!
 *
 * // hour is 12-16
 * Good Afternoon! 
 *
 * // hour is 17-21
 * Good Evening!
 *
 * // hour is 22-24 
 * Good Night!
 *
 * TIPS: 
 * 
 *   a. At what threshold does morning become afternoon? What comparison 
 *      can be used to test that the hour is within the morning threshold. 
 *      It's best to be consistant and use the SAME type of comparison for 
 *      each threshold. 
 *   
 *   b. Does the last threshold even need an else-if?
 * 
 *   c. The tests are CASE sensitive, so you MUST console.log('Good Night!') with
 *      the exact case.
 */

function greeter(hour) {
    // YOUR CODE BELOW HERE //
 /* if statement, one test for each range 1.(if, then good morning)
 2.(if, then good afternoon) 3.(if, then good evening) 4.(if, then good night) */

//if greater than or equal to 0 && less than or equal to 11 then good morning
    if (hour <= 11 && hour >= 0) {
        console.log('Good Morning!');
//else if greater than 11 && less than or equal to 16 then good afternoon
    } else if (hour > 11 && hour <= 16) {
        console.log('Good Afternoon!');
//else if greater than 16 && less than or equal to 21 then good evening
    } else if (hour > 16 && hour <= 21) {
        console.log('Good Evening!');
 //else if greater than 21 && less than or equal to 24 then good night
    } else {
        console.log('Good Night!');
    }
    // YOUR CODE ABOVE HERE //
}

/*
 * To test our greeter when developing, we need to fake some input data, ie, 
 * the hour, so just change the input value to check your work.
 * 
 * In a more realistic setting, you might do something like this to get the 
 * actual system hour:
 *
 * var today = new Date();
 * var hour = today.getHours();
 */

greeter(11);



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.greeter = greeter;
}