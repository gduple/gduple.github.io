////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, index = 1) {//params start, end, and index with default value of 1
  var rangeArray = []; //empty array to push values into
  if (start === end) {  //if start and end are strictly equal:
                        //do nothing so empty array is returned
  } else if(Math.sign(index) === 1) {   //if index is positive:
    for(var i = start; i <= end; i += index) {  //for loop, count b/n start & end by input index
      rangeArray.push(i); //push values from loop into empty array
    }
  } else { //else statement (index is negative)
    for(var i = start; i >= end; i -= index) { //for loop, count b/n start & end by input index
      rangeArray.push(i); //push values from loop into empty array
    }
  }
  return rangeArray; //return array out of function 
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) { //function takes one paramer, an array
  let total = 0;  //assign variable to keep track of total
  let i = 0; //create variable to start count from 0
  while (i < array.length) { //while count is less than length of array
    total += array[i];  /*add the value of the array at the position matching 
                        the count to the current total*/
    i += 1;             //advance the count to the next array position
  }
  return total;         //return total out of function 
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {//function takes one parameter, an array
  var reversed = [];//create empty array to hold values from original array
  for (let i = array.length - 1; i >= 0; i--) {//for loop backward through input array
    reversed.push(array[i]); //push each value into new array from the end of the input array
  }
  return reversed; //return reversed array
  }


////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) { //takes one parameter, an array
//for loop starting a O and stopping in the middle of the array
  for (let i = 0; i < array.length / 2; i++) {
    let holdTemp = array[i];//new variable to hold array value while swapping
    /*in the position of the value being held (above), place the value from the 
    opposite end (mirror image) by subtracting i from the last position  */
    array[i] = array[array.length - 1 - i];
    /*in the spot on the opposite end that's now empty, insert the value stashed earlier*/
    array[array.length - 1 - i] = holdTemp; 
  } //(loop continues working to the middle)
  return array;//return newly reversed array out of the function 
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) { //takes one parameter, an array
  let listObject = null; //start chain with ending rest value (null)
  for (var i = array.length - 1; i >= 0; i--) {/*loop backward through array
      listObject takes on array's value for value property, and takes its own
      value for the rest property (so first iteration is null)*/
    listObject = { value: array[i], rest: listObject }; /*when reiterated, 
      listObject will take next array value and link the entire listObject 
      for the next rest property*/
  }
  return listObject; //return list out of function 
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {//takes one parameter, an object-based list
  var backToArray = []; //create empty array to push into 
  //loop: start at begining of list; end when no longer in list; go one place
  //deeper in the list via the rest property 
  for (let node = list; node; node = node.rest) { 
    backToArray.push(node.value); //push into empty array the value at each node
  }
  return backToArray; //return array containing values out of the function 
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(addItem, list) { //2 params: an object list and a value to be added
/*put addItem in the value poperty, reattach the object-list-chain to the 
rest property, and return this out of the function*/
  return { value: addItem, rest: list }; 
}


////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) { //takes two parameters, an object list, and an index/count number
  /*loop: start at begining of list; end when no longer in list; go one place
  //deeper in the list via the rest property */
  for (let node = list; node; node = node.rest) {
    /*this means you've reached the index you want (like, you've flipped through the 
    objects as many times as the input number)*/
    if (n === 0) { 
      return list.value; //return the value of the value property 
    } else { // if you HAVEN'T reached the index you want
      return nth(list.rest, n - 1); /*return (rerun) the function with the inputs
      set to the next option (flip one object further) and subract one from the 
      index number. The function will run until n is 0 and return that value*/
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// function deepEqual(param1, param2) {
//   if (param1 === param2) {
//     return true;
//   } else if (param1 !== param2) {
//     return false; 
//   } else if (param1 === null && param2 === null) {
//     return true;
//   } else if (param1 === null || param2 === null) {
//     return false; 
//   } else if (typeof param1 === typeof param2) {
//     /////////////// HERE////////////////////////
//   } else {
//     return false; 
//   }
// }

function deepEqual(param1, param2) {
  if (param1 === param2) { //if inputs are strictly equal return true
    return true;
  }
  //if either input is null, return false
  if (param1 === null && param2 !== null) { 
    return false;
  }
  if (param2 === null && param1 !== null) {
    return false;
  }
  //if both inputs aren't both objects, return false
  if (typeof param1 && typeof param2 !== 'object') {
    return false;
  }
  //make arrays out of both object's keys
  let testKeys1 = Object.keys(param1);
  let testKeys2 = Object.keys(param2);
  //if the arrays of keys aren't the same length, return false
  if (testKeys1.length !== testKeys2.length) {
    return false;
  }
  //loop over object (array in this case)
  for (let key of testKeys1) {
    //if 2nd key array doesn't include all keys in the 1st array, return false
    if (testKeys2.includes(key) !== true) {
      return false;
    } else { //else return the function comparing key values
      return deepEqual(param1[key], param2[key]);
    }
  } 
  return true; //return true only if all other conditions have been exhausted
} 

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
