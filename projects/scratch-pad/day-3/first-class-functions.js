// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //within outer function, make another function. 
    //inner function should compare inner and outer inputs and return the result
    // outer function must then return inner function 
    function testOuterValue(innerInput) {
        return innerInput > base;
    }
    return testOuterValue;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //within outer function, make another function. 
    //inner function should compare inner and outer inputs and return the result
    // outer function must then return inner function 
    function testOuterValue(innerInput) {
        return innerInput < base;
    }
    return testOuterValue;    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    /*create inner function that compares outer function's input character
    with inner function's first character by converting both to lower case, 
    then on the other side of the === split the inner input (the string) and 
    access the zeroeth position. Return that result and return the inner function 
    from the outer function.*/
  
    function testThisString(inputString) {
       return startsWith.toLowerCase() === inputString.toLowerCase().split("")[0];
    }
    return testThisString;
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    /*create inner function that compares outer function's input character
    with inner function's last character by converting both to lower case, 
    then on the other side of the === split the inner input (the string) and 
    access the last position using .length-1. Return that result and return 
    the inner function from the outer function.*/
    
    function testThisString(inputString) {
       return endsWith.toLowerCase() === inputString.toLowerCase().split("")[inputString.length-1];
    }
    return testThisString;
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    // create new empty array to hold new, modified strings
   var arrayOfModifiedStrings = [];
//   for loop, start at 0, stop at strings.length; incremet
        for (let i = 0; i < strings.length; i++) {
// push into empty array all the given strings as modified by the modify function
       arrayOfModifiedStrings.push(modify(strings[i]));
    }
    // return the empty array
    return arrayOfModifiedStrings;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
// for loopm start at first string string, position 0, stop at end, strings.length, increment
        for (let i = 0; i < strings.length; i++) {
            // if statement, test the strings one by one, NO RETURN STATEMENT YET or the test will stop running
            if (test(strings[i])) {
                
            } else { return false; }
            //return true OUTSIDE of the if statement so the test runs over all the input strings
        } return true;

    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}