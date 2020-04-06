// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    //make a new (empty) string to put characters into
    var backwardString = "";
    //use for loop to loop over input string's characters
    //start from the end, so input.length-1
    //end at position O, so i >= 0
    //decrement (i--)
    for (var i = input.length - 1; i >= 0; i--) {
/* Use += ("addition assignment") to add the characters into var backwardString 
and KEEP INCREMENTING through the input characters at each iteration of [i] */
      backwardString += input[i]
    }
    // return the new string out of the function 
    return backwardString;
    
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}