// Solve all of the following prompts using recursion.

/**
 * Preview SpecRunner for results. Do NOT have to do the ones w/ blue 
 * text. Spec folder has spec information for exercises (split in 2 parts).
 */

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) { // function takes a number 
  if (n < 0) {    // if number is negative: 
      return null;  // return null
  } else if (n === 0) { // base case: if number has been reduced to 0:
      return 1;           // return 1 (times all the other function calls)
  } else {              // otherwise, n is still being reduced, Recursn Call below
      return n * factorial(n - 1);  // number times (recurse number - 1) until 0
  }
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {   // function takes an array
  if (array.length === 0) {   // base case: array length is 0
      return 0;                 // return 0 (plus rest of call stack)
  } else {      // Otherwise (array still has values to add): Recursn Call below
      return array[0] + sum(array.slice(1));//return front pos. of arr added to...
  }//call func w/ the REST of the array (1st position on) until all values sliced
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {  // function takes array
  if (array.length === 0) {       // base case: array has been emptied
      return 0;                     // return 0 (plus call stack)
  } else if (typeof array[0] === 'number') { // if 0th position is a number:
      return array[0] + arraySum(array.slice(1));//rtn 0th val, slice, & recurse 
  } else if (Array.isArray(array[0])) { // if 0th position is an array:
      return arraySum(array[0].concat(array.slice(1)));//func call of 0th pos...
  } // concatenated to the remainder after 0
}; 

// 4. Check if a number is even.
var isEven = function(n) {  // function takes a number
  if (n === 0) {            // Base Case: if n is 0: 
      return true;            // return true (n is even)
  } else if (n === 1) {     // Alternate Base Case: if n is 1:
      return false;           // return false (n is odd)
  } else {        // otherwise (n still needs to be reduced): Recursn Call below
      return isEven(Math.abs(n) - 2); //return function with n - 2 until reduced...
  }                         // to 0 or 1. Use abs. value in case n is negative
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {  // function takes a number
  if (n === 0) {              // Base Case: if n is 0:
      return 0;                 // return 0 (plus rest of call stack)
  } else if (n > 0) {         // Otherwise, if n is positive, Recursn Call below
      return n - 1 + sumBelow(n - 1); // return sum of (n-1) and function call... 
                                    // with n reduced by 1 until n reaches 0
  } else {                    // Otherwise, if n is negative, Recursn Call below
      return n + 1 + sumBelow(n + 1); // return sum of (n+1) and function call...
  }                                 // with n increased by 1 until n reaches 0
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) { // takes two integers
  if (Math.abs(x - y) === 1 || x === y) { //Base Case: same # or difference of 1:
    return [];                            //return empty array (plus call stack)
  } else if (x < y) { //Otherwise, if 1st number is greater than 2nd, Recursn Call:
    return [x + 1].concat(range(x + 1, y));//return arr of x+1, recurse up to y
  } else {        //Otherwise, if 1st number is greather than 2nd, Recursn Call:
    return [x - 1].concat(range(x - 1, y));//return arr of x-1, recurse down to y
  }
}; 

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) { // takes base and exponent params
  if (exp === 0) {  // Base Case: exponent is 0
      return 1;       // return 1, call stack
  } else if (base < 0) { // Otherwise, if base is negative, Recursn call below
      return base * exponent(-base, exp - 1);//Recurse with base*-base, reduce exp
  } else if (exp > 0) {                    //Otherwise, if exp is greater than 0
      return base * exponent(base, exp - 1);//Recurse: base*func call & reduce exp
  } else if (exp < 0) {                    //Otherwise, if exp is less than 0:
      return exponent(base, exp + 1) / base;//Recurse: func call with...
  }                                        //incremented exponent divided by base
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {  // function takes a number
  if (n === 1) {        // base case: if n is equal 1:
      return true;      // return true, n has been divided by 2 evenly 
  } else if (n < 2) {   // if n is less than 2 (but not 1, which was already checked):
      return false;     // return false, n didn't divide by 2 evenly 
  } else {              // otherwise (n is still larger than 2), recurse:
      return powerOfTwo(n / 2);   // call func again with n divided by 2
  }
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {  // function takes string 
  if (!string.length) { // Base Case: if string is empty (all elements sliced):
      return "";          // return empty string (plus call stack func calls)
  } else {              // otherwise (recursion case below)
      return reverse(string.slice(1)).concat(string[0]);//return function call...  
  } // of string w/o first character, concated to first character and recurse... 
};  // until string is empty

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  //   if (!string.length) { 
  //   return "";     
  // } else if (string[0] === " ") {          
  //   return palindrome(string.slice(1)); 
  // } else {
  //   return reverse(string.slice(1)).concat(string[0]);
  // }

  if (!string.length) { // Base Case: if string is empty 
      return true;        // Return true (all tests passed through recursions)
  } else if (string[0] === " ") { // if string has a space at the beginning:
      return palindrome(string.slice(1)); // remove space and recurse without it
  } else if (string[string.length - 1] === " ") {//if end of string has a space:
      return palindrome(string.slice(0, string.length - 1));//remove and recurse w/o
    // if zeroeth char, switched to lower case, is same as final char, lower case:
  } else if (string[0].toLowerCase() === string[string.length - 1].toLowerCase()) {
      return palindrome(string.slice(1, string.length - 1));//remove 0th & last, recurse
  } else {
      return false;//if char's didn't match/weren't spaces-not a palindrome-rtn false
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4

// NUMBER 11 PSEUDOCODE HERE********************************
// ln. 1: takes two numbers
// ln. 2: if denom is 0:
// ln. 3: return NaN (will always be NaN)
// ln. 4: Base Case: if numerator is 0:
// ln. 5: return 0 (will always be 0)
// ln. 6: catches exception when result should be -0 (neg numerator, pos denom):
// ln. 7: force -0 before what would be last function call
// ln. 8: Base Case: if x is pos. and x is less than abs. val. of y:
// ln. 9: x is the remainder, return it
// ln. 10: Base Case: if x is neg. and x is greater than abs. value of y:
// ln. 11: x is the remainder, return it
// ln. 12: if x and y are both pos. OR x and y are both neg.:
// ln. 13: recurse: func call of x-y to remove a y multiple and work x down to 0
// ln. 14: (statement left in for clarity) if x and y's signs are opposite:
// ln. 15: recurse: func call of x+y to remove a y multiple and work x up to 0
// NUMBER 11 PSEUDOCODE ABOVE********************************
var modulo = function(x, y) { 
  if (y === 0) {             
      return NaN;               
  } else if (x === 0) {       
      return 0;                 
  } else if (x < 0 && x + y === 0) { 
      return -(x + y);                
  } else if (x > 0 && (x < y || x < -y)) {  
      return x;                             
  } else if (x < 0 && (x > y || x > -y)) {  
      return x;                             
  } else if (x > 0 && y > 0 || x < 0 && y < 0) {  
      return modulo(x - y, y);                      
  } else if (x > 0 && y < 0 || x < 0 && y > 0) { 
      return modulo(x + y, y);                      
  }
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.

// NUMBER 12 PSEUDOCODE HERE********************************
// ln. 1: function takes two numbers, x and y
// ln. 2: Base case: if y is 0:
// ln. 3: return 0 (plus call stack values)
// ln. 4: otherwise, if both x and y are negative, recurse:
// ln. 5: flip signs, add x to func call of x, work y to 0
// ln. 6: otherwise, recurse:
// ln. 7: add x to func call of x and work y to 0
// NUMBER 12 PSEUDOCODE ABOVE********************************
var multiply = function(x, y) {      
  if (y === 0) {                     
      return 0;                        
  } else if (x < 0 && y < 0) {  
      return -x + multiply(-x, -y - 1);
  } else {                          
      return x + multiply(x, y - 1);   
  }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.

// NUMBER 13 PSEUDOCODE HERE********************************
// ln. 1: takes two numbers
// ln. 2: if denom is 0:
// ln. 3: return NaN (will always be NaN)
// ln. 4: Base Case: if numerator is 0:
// ln. 5: return 0 (will always be 0)
// ln. 6: Base Case: if x is pos. and x is less than abs. val. of y:
// ln. 7: x has been "divided" as many times as possible, rtn 0 (plus call stack)
// ln. 8: Base Case: if x is neg. and x is greater than abs. value of y:
// ln. 9: x has been "divided" as many times as possible, rtn 0 (plus call stack)
// ln. 10: if x and y are both pos. OR x and y are both neg.:
// ln. 11: recurse: 1 (the multiple count) + call x-y to work x down to base case
// ln. 12: (statement left in for clarity) if x and y's signs are opposite:
// ln. 13: recurse: 1 (the multiple count) + call x+y to work x up to base case
// NUMBER 13 PSEUDOCODE ABOVE********************************
var divide = function(x, y) { 
  if (y === 0) {             
      return NaN;               
  } else if (x === 0) {       
      return 0;                              
  } else if (x > 0 && (x < y || x < -y)) {  
      return 0;                           
  } else if (x < 0 && (x > y || x > -y)) {  
      return 0;                        
  } else if (x > 0 && y > 0 || x < 0 && y < 0) {  
      return 1 + divide(x - y, y);                      
  } else if (x > 0 && y < 0 || x < 0 && y > 0) { 
      return 1 + divide(x + y, y);                      
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {  // takes two numbers
  if (x <= 0 || y <= 0) {   // if x or y is less than or equal to 0:
    return null;            // return null
    // Base Case: if x is >= y and dividing x by y is an integer:
  } else if (x >= y && Number.isInteger(x / y)) { 
      return y;             // y is the gcd
    // Base Case: if y is >= x and dividing y by x is an integer:
  } else if (x <= y && Number.isInteger(y / x)) {
      return x;             // x is the gcd
  } else if (x >= y) {      // otherwise if x is >= y:
      return gcd(x - y, y); // recurse: call (x-y, y) to remove a multiple from x
  } else if (y >= x) {      // otherwise if y is >= x:
      return gcd(x, y - x); // recurse: call (x, y - x) to remove a multiple from x
  }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) { // function takes two strings
  if (!str1.length && !str2.length) {   // Base Case: if both strings are empty:
      return true;                        // return true (all char's matched)
  } else if (str1[0] === str2[0]) {     // otherwise, if str's 0th char's match:
      return compareStr(str1.slice(1), str2.slice(1)); // slice 0 off both, recurse
  } else {                              // otherwise (str's char's didn't match)
      return false;                       // return false 
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){  // function takes a string
  if (!str.length) {              // Base Case: if string is empty:
      return [];                    // return empty array (plus call stack)
  } else {                        // otherwise (string still has char's) recurse:
      return [str[0]].concat(createArray(str.slice(1))); // return string's...
  }   // zeroeth character concatenated to a func call of the rest of the str
};

// 17. Reverse the order of an array
var reverseArr = function (array) { // function takes an array
  if (!array.length) {              // Bs Cs: if arr is empty (all elems sliced):
      return [];                      // return empty array (+ call stack w/ elems)
  } else {                          // otherwise (still have arr elems to move):
      return reverseArr(array.slice(1)).concat(array[0]); // return func call of...
  } // array without zeroeth element, with 0th element concatenated to the back
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) { // func takes 2 #'s: value and length 
  if (length === 0) {                     // Base Case: if length is 0 
      return [];                            // return empty array (and call stack)
  } else {                                // otherwise (length > 0) recurse:
      return [value].concat(buildList(value, length - 1)); // return value input...
  } // in an array and concat a func call of value and length-1 to work down to 0
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {// function takes array and value
  if (!array.length) {                        // Bs Cs: if all elems sliced (empty):
      return 0;                                 // return 0 (plus call stack)
  } else if (array[0] === value) {            // else, if 0th pos matches value:
    // rtn 1 (count) plus func call with 0th sliced off to recurse/test next elem
      return 1 + countOccurrence(array.slice(1), value); 
  } else {                                    // otherwise (0th elem doesn't match):
      return countOccurrence(array.slice(1), value); // slice off 0th and recurse
  }
}; 

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {  // takes array and callback function
  if (!array.length) {                  // Base Case: if array is empty:
      return []                           // return empty array (plus call stack)
  } else {                              // otherwise (more array elems to slice):
      return [callback(array[0])].concat(rMap(array.slice(1), callback));//return...
  } // callback function called with first element (in an array), concatenated...
};  // to a func call of the rest of the array (position 1 to the end) to recurse

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) { // takes obj (nested objs) and key (str)
  var count = 0;                          // var set to 0 to keep track of count
  for (var prop in obj) {                 // loop through obj
    if (prop === key) {                   // if prop in obj matches given key:
        count++;                          // increment count
    } else if (typeof obj[prop] === 'object') { // if prop in obj is a nested obj:
        count += countKeysInObj(obj[prop], key);// increment count, recurse w/ ...
    }                                           // nested obj to count its keys; 
  }
  return count;                                 // rtn count out of the function
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) { // takes obj and value
  var count = 0;                              // var set to 0 to keep count
  for (var key in obj) {                      // loop through obj
    if (obj[key] === value) {                 // if obj value matches input value:
        count++;                              // increment count
    } else if (typeof obj[key] === 'object') {// if obj value is a nested object:
        count += countValuesInObj(obj[key], value);// increment count, recurse...
    }                                              // to check nested obj's values
  }                                                 
  return count;                                    // rtn count from function
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
/***DON'T DO***/var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) { // takes a number
  if (n <= 0) {
      return null; 
  } else if (n === 1) {              // base case:  if n is 1
      return [0, 1];      // rtn start of sequence (call stack will be func calls)
  } else {              
      var fib = fibonacci(n - 1); // declare variable of recursive function call
      //rtn recursion var that concats a value comprised of adding last two values
      return fib.concat(fib[fib.length - 1] + fib[fib.length - 2]);
  }
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {   // function takes a number
  if (n < 0) {                // if number is negative:
      return null;            // return null
  } else if (n < 2) {         // Base Case: if number is less than 2:
      return n;               // return n (plus call stack)
  } else {                    // otherwise (recurse):
      return nthFibo(n - 1) + nthFibo(n -2);  // rtn function call of n - 1...
  }                                           // added to function call of n - 2
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) { // takes an array of words
  return !input.length ? [] : //if input arr is empty, rtn empty arr (call stack)
  //otherwise recurse: capitalize first elem, & concat a function call of the rest
  [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) { // function takes an array
  return !array.length? [] : // if arr is empty, return empty arr (& call stack)
  [array[0][0].toUpperCase().concat(array[0].slice(1))]//else return 1st letter...
  .concat(capitalizeFirst(array.slice(1)));// of 1st word capitalized, and...
};  // concatenate a function call of the remaining of the array 

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
/***DON'T DO***/var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
/***DON'T DO***/var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj={}) { // 2 params: str & obj (default empty)
  if (!str.length) {        // if string has been emptied:
      return obj;             // return object
  } else if (obj[str[0]]) { // otherwise, if obj has a property for 0th str char:
      obj[str[0]]++;          // increment the count value of that property and...
      return letterTally(str.slice(1), obj);//recurse remaining str & new obj tally
  } else {                                // otherwise (obj doesn't have char prop):
      obj[str[0]] = 1;                      //assign char prop to obj w/ count of 1
      return letterTally(str.slice(1), obj);//recurse remaining of str & new obj tally
  }
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {     // function takes a list
  if (list.length === 0) {          // Base Case: if list has been emptied:
      return [];                      // return empty array (plus call stack)
  } else if (list[0] === list[1]) { // otherwise if first two elems are equal:
      return compress(list.slice(1)); // slice off the first one, recurse the rest
  } else {                          // otherwise (first two are different):
      return list.slice(0, 1).concat(compress(list.slice(1))); // return first...
  } // elem (keep it) & concat a func call of the remaining to recurse & compare
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
/***DON'T DO***/var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {  // function takes an array 
    if (!array.length) {                // Base Case: if array has been emptied:
        return [];                        // return empty array (plus call stack)
    } else if (array[0] === 0 && array[1] === 0) {//else if 0th & 1st are both 0:
        return minimizeZeroes(array.slice(1));    //slice off 0th, recurse remaining
    } else {                            // otherwise (whether it's a 0 or not):
        return [array[0]].concat(minimizeZeroes(array.slice(1))); // slice off...
    } // first character, concatenate the remaining in a function call 
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) { // function takes an array 
  if (!array.length) {                // Base Case: if array has been emptied:
      return [];                        // return empty array (plus call stack)
  } else if (array.length === 1) {    // if 1 array element left (odd # of elems):
      return [Math.abs(array[0])];      // make it positive (no recursion needed)
  } else {                            // otherwise (at least two elems left):
      return [Math.abs(array[0]), -Math.abs(array[1])] // rtn abs val of 0th & 1st...
      .concat(alternateSign(array.slice(2))); // concated to func call of remaining
  }
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) { // function takes a str as argument
    let dgtObj = {           // create an object to pull number-word strings from
      '0':'zero', '1':'one', '2':'two', '3':'three', '4':'four', 
      '5':'five', '6':'six', '7':'seven', '8':'eight', '9':'nine'
    };
    
    if (!str.length) {    // Base Case: if string has been emptied 
        return "";          // return empty string (plus call stack)
      // otherwise, if 0th char is a letter or a space (recurse):
    } else if (str[0].toUpperCase() != str[0].toLowerCase() || str[0] === " ") {
      // return the first letter concatenated to a func call of the remaining
        return str[0].concat(numToText(str.slice(1)));
    } else {  // otherwise (first char is a number string), recurse:
        return dgtObj[str[0]].concat(numToText(str.slice(1)));//return digit obj...
    } // value instead of number, concatenated to a func call of the remaining
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

// function takes an array, target value, min (default 0th pos.), & max (default last)
var binarySearch = function(array, target, min=0, max=array.length-1) {
  let mid = Math.floor((min + max)/2);  // declare mid as middle of array
  if (max < min) {                      // base case: max has been reduced below min.
    return null;                        // return null (target not in array)
  } else if (array[mid] === target) {   // if middle value equals target:
      return mid;                       // return index
  } else if (array[mid] < target) {     // if middle value is less than target:
      return binarySearch(array, target, mid + 1, max);//recurse: mid+1 is the new min
  } else if (array[mid] > target) {                    // if mid value is > target:
      return binarySearch(array, target, min, mid - 1);//recurse: mid-1 is the new max
  }
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
