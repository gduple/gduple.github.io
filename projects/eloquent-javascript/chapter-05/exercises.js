// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {  //function takes one array as paramter
  var flattened = [];     //empty array to push into
  //loop foward over outer array 
  for (var index = 0; index < array.length; index++) {
    //loop forward over each element, which may itself be an array
    for (var i = 0; i < array[index].length; i++) {
      //push each element/sub-element into the empty array
      flattened.push(array[index][i]); 
    }
  }
  return flattened; //retun empty array
}



// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

//function takes four parameters, a value, and three functions: test, update, body
function loop(value, test, update, body) {
  while (test(value)) { //while test function produces a true result w/ value input:
    body(value); //execute body function with current value 
    value = update(value);  //create new value using the update function
  }
}



// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) { //takes to parameters, array and test
  //loop forward over the array 
  for (let i = 0; i < array.length; i++) {
    let value = array[i]; //assigned each value to a variable
      if (!test(value)) { //if the test function produces false for that value:
        return false;     //return false
      } else {            //otherwise, do nothing (loop continues)
      }
  }
  return true;  //if loop finishes, no array values were false, so return true
}


// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(texts) { //takes one parameter, a string

  let countArray = countBy(texts, function(text) {
    //we want to return a name for our object
    let characterInfo = characterScript(text.charCodeAt())
    //console.log(text); 
    //console.log(characterInfo); 
    if(characterInfo) {
      return characterInfo.direction; 
    }
  });
  
  //console.log(countArray); 
  //sort countArray by the occurrence of direction count
  countArray.sort(function(a, b) {
    return b.count - a.count; 
  });
  
  //console.log(countArray); 
  return countArray[0].name; 
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
