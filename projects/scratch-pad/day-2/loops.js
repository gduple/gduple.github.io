// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //for-in loop, start at position 0, stop at array.length, increment by 1 (++)
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //for-in loop, start at position array.length -1, stop at 0, decrement by 1 (--)
  for (var i = array.length-1; i >= 0; i--) {
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
//for var key in object, return in array form (not console.log)
//use a new variable to make an empty array and push into it
//key names (strings) not values
var arrayOfKeys = []; 
  for (var key in object) {
arrayOfKeys.push(key);
  }

return arrayOfKeys; 
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
 //for var key in object, only print keys, not values
  for (var key in object) {
    console.log(key);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
//for var key in object, return in array form (not console.log)
//use a new variable to make an empty array and push into it
//values, not key names 
var arrayOfKeys = []; 
  for (var key in object) {
arrayOfKeys.push(object[key]);
  }

return arrayOfKeys; 
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
//for var key in object, print values, not keys
    for (var key in object) {
      console.log(object[key]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
//for var key in object, make an array, find length of array

// new variable to contain array
  var arrayOfKeys = []; 
//for key in obj loop
  for (var key in object) {
    // push into var arrayOfKeys
arrayOfKeys.push(object[key]);
  }
//return out of the function 
return arrayOfKeys.length;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
//turn object into array of values to use ordered positions
//loop backwards through the positions using for in loop and array.length-1

// new empty array for the keys
  var arrayOfKeys = []; 
  // loop over keys
  for (var key in object) {
    //push into var arrayOfKeys
arrayOfKeys.push(object[key]);
  }
// loop backwards over array of keys
for (var i = arrayOfKeys.length-1; i >= 0; i--) {
   // print to console
  console.log(arrayOfKeys[i]);
} /* ****Not sure if this is the "correct" (intended) way but it worked...
the question's wording says the object should've been looped over in reverse. 
This method, however, loops over them forward and then loops over them after
they've been pushed to the array.*/


  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
