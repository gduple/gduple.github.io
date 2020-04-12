////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(num1, num2) {  // function takes to parameters
  return Math.min(num1, num2) // use Math.min to return the bigger of the 2 inputs
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(num) {  // function takes one paramter
  if (num === 0) {      // if number is strictly equal to 0 
    return true;        // return true
  } else if (Math.abs(num) === 1) { // else if absolute value of input is 1
    return false;                   // return false
  } else {                          // else 
    return isEven(Math.abs(num) - 2); // return the function again with ...
  }   // the absolute value of the original input minus 2 so recursion occurs
}     // until the absolute value gets down to 1 or 0 to force a response. 

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char) {   // function takes a string and a character
  var charCount = 0;            // create a variable to hold count of characters
  for(var i = 0; i < string.length; i++)//loop: start 0; stop @ end of string; increment
    if (string[i] === char) {  // if string at pos. i matches input character
      charCount += 1; // add one to the character count
    }
  return charCount; // return the character count out of the function 
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {  // function takes one string
  var characterCount = 0;   // create variable to keep track of character count
  for (var i = 0; i < string.length; i++)//loop: start 0; stop @ end of string; increment
    if (string[i] === 'B') {  // if string at pos. i matches capital B (string)
      characterCount += 1;    // add one to the character count
    }
    return characterCount;    // return the character count out of the function 
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
