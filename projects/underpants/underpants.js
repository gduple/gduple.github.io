// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value) {
    return value; 
};


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value) { // function takes one param, a value
    if (Array.isArray(value)) { // check if value is an array
        return 'array';         // return 'array' if true
    } else if (value === null) {    // check of value is 'null'
        return 'null';              // return 'null' ('string') if so 
    } else {                        // otherwise...
        return typeof value;    // return the typeof property for the value
    }
};


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number) { //2 params, array and number
    //use Array.isArray to check if array is an array. 
    // Use math.sign to check if number is positive. If either is true:
    if (!Array.isArray(array) || Math.sign(number) < 1) { 
        return []; //return empty array 
    //else if number is undefined or NaN:
    } else if (number === undefined || number === isNaN) {
        return array[0]; //return first position of array
    } else { //otherwise:
        return array.slice(0, number); // return array sliced up to...
        }                           // input number (not inclusive)
};


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, number) {
    //use Array.isArray to check if array is an array. 
    // check if number is negative. If either is true:
    if (!Array.isArray(array) || number < 0) { 
        return []; //return empty array 
    //else if number is undefined or NaN:
    } else if (number === undefined || number === isNaN) {
        return array[array.length - 1]; //return last position of array
    } else if (number > array.length) {//if input number is greater than arr length
        return array; //return entire array 
    } else { //otherwise:
    //return the last <number> positions of array
        return array.slice(array.length - number, array.length); 
    }
};


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrence of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value) { //takes array and value arguments
    for (var i = 0; i < array.length; i++) { //for loop over array
        if (array[i] === value) { //if <array> value matches <value>
            return i;               //return index of <array>
        //if loop is still running at last position without matching <value>:
        } else if (i === array.length - 1) { 
            return -1; //return -1 because <value> is not in <array> 
        } 
    }
};


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value) {//function takes array and value params
//if given array includes given value return true; otherwise return false
    return array.includes(value) ? true : false; 
};


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(coll, fn) { //function takes collection and function
    if (Array.isArray(coll)) { //test if array; if so:
        for (var i = 0; i < coll.length; i++) { //for loop over array
            fn(coll[i], i, coll); //call function with value, index, coll
        }
    } else {                    //otherwise (an object):
        for (var key in coll) { //loop through object
            fn(coll[key], key, coll); //call function with value, index, coll
        }
    }
};


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array) { //only paramater is an array 
  let uniqueValues = [];//create empty array to push results into
  for (let i = 0; i < array.length; i++) { //loop over input array
    //if i is strictly equal to the index of the first occurrence of i's value:
    if (i === _.indexOf(array, array[i])) { 
      uniqueValues.push(array[i]); //push element into return array
    }
  }
    return uniqueValues; //return array with only first occurrence
};


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, its index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, fn) { //2 params: array and function 
    let passedFn = [];  //empty array to push results into
        _.each(array, function(element, key, coll) {//pass to fn each to loop
            //if given function (params of element, index, array) gives true:
            if (fn(element, key, array)) {
                passedFn.push(element); //push element into empty array
            }
        }); 
    return passedFn; //return array with results out of the function 
};


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse of _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, fn) { //2 params: array and function 
    let passedFn = _.filter(array, fn); //use filter to make array of passes
    let failedFn = [];  //empty array for failures
    for (var key in array) { //loop over array
        if (!passedFn.includes(array[key])) { //if element is not on pass list
            failedFn.push(array[key]); //pushed into fail list
        }
    }
    return failedFn; //return array with failed results out of the function 
};


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, fn) { //takes array and function params
    let pass = [];  //create empty array for elements that pass function 
    let fail = [];  //create empty array for elements that fail function 
    for (let i = 0; i < array.length; i++) { //loop over input array
        //function takes element, index, array and resolves to truthy or falsey
        if (fn(array[i], i, array)) { //if truthy:
            pass.push(array[i]);    //push element into pass array
        } else {                    //otherwise:
            fail.push(array[i]);    //push element into fail array
        }
    }
    return [pass, fail];//return single array with pass/fail in indices 0, 1
};


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, its index, <collection>
*        if <collection> is an object:
*            the value, its key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(coll, fn) {
  var resultArr = []; //empty array to push results into 
  for (let key in coll) { //loop that works for object *and* array 
    //push into empty array the resulting value for each element of input
    resultArr.push(fn(coll[key], key, coll));
  }
  return resultArr; //return result out of function
};


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(arrObs, property) {//params: array of objs & prop
    return _.map(arrObs, function(element, key, coll) {
        return element[property]; //call and return map function...
    }); //with array and function written to return value at...
};      //<property> for each element of array


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, its index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(coll, fn) {//2 params: a collection and a function
    let result = true; //result variable with defaul boolean of true
    if (fn) {                               //if function param is defined:
        _.each(coll, function(element, key, coll) {//pass to func each to loop
            if (!fn(element, key, coll)) {  //if fn call with element is false:
                result = false;             //change result to false
                return result;              //return result immediately 
            } 
        });
    } else if (fn === undefined) {          //if function param is undefined:
        _.each(coll, function(element, key, coll) { //pass to func each to loop
            if (!element) {                 //if element is falsey:
                result = false;             //change result to false
                return result;              //return result immediately 
            }
        });
    }
    return result; //return default true (only gives true if never killed early)
};


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(coll, fn) {//2 params: a collection and a function
    let result = false; //result variable with defaul boolean of false
    if (fn) {                               //if function param is defined:
        _.each(coll, function(element, key, coll) {//pass to func each to loop
            if (fn(element, key, coll)) {   //if fn call with element is true:
                result = true;              //change result to true
                return result;              //return result immediately 
            } 
        });
    } else if (fn === undefined) {          //if function param is undefined:
        _.each(coll, function(element, key, coll) { //pass to func each to loop
            if (element) {                  //if element is thruthy:
                result = true;              //change result to true
                return result;              //return result immediately 
            }
        });
    }
    return result; //return default false (only gives false if never killed early)
};


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(coll, fn, seed) { //takes 3 params: coll, function, seed
    _.each(coll, function(element, i, collection) {//use each for each value
        if (seed === undefined) {   //if seed is undefined:
            seed = coll[i]; //seed starts at beginning of loop in fn each
        } else if (seed) {  //if seed is provided:
            seed = fn(seed, element, i); //seed seed to function to start calls
        }
    });
    return seed; //return seed out of the function
};


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(obj, ...objs) { //takes params object and object(s)
	_.each (objs, function(objs, key, coll) { //for each of the additional objects
    	for (let key in objs) { //loop over the object...
        	obj[key] = objs[key]; //and add the keys/values to the original obj
    	}
	});
	return obj;                    //return object out of the function. 
};



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
