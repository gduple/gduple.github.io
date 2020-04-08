// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    // empty array to push integers into 
    var arrayResult = [];
    /** If statement to decide which action to take based on which input is bigger.
    This condition is for first parameter being smaller, so will be counting up.*/
    if (start < end) {
        // for loop, start at "start" parameter, stop at "end parameter", increment
        for (var i = start; i <= end; i++) {
            // Push every iteration of i into the empty array  
            arrayResult.push(i);
        }
    /** If statement to decide which action to take based on which input is bigger.
    This condition is for first parameter being bigger, so will be counting down.*/
   } else if (start > end) {
         // For loop, start at "start" parameter, stop at "end' parameter, decrement
        for (var i = start; i >= end; i--) {
            // Push every iteration of i into the empty array  
            arrayResult.push(i);
        }
   }
    // Return empty array outside of if statement
    return arrayResult;
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}