// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
//use for loop for count, start at 1, continue until 100 inclusive, i++
//use if statement for multiples

//if div by 5 && divide by 3 and .isInteger() true print FizzBuzz
for (var i = 1; i <= 100; i++) {
  if (Number.isInteger(i/5) && Number.isInteger(i/3)) {
    console.log('FizzBuzz');
//if divide by 3 and .isInteger() is true print Fizz
} else if (Number.isInteger(i/3)) {
    console.log('Fizz');
//if divide by 5 and .isInteger() is true print Buzz
} else if (Number.isInteger(i/5)) {
    console.log('Buzz');
//else print number, [i]
} else {console.log(i);}
}



    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}