
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(number) { //function declaration
  let count = 1;  // variable assigned to use for start of counting
  let string = ''; // empty string to add values into
  while (count <= number) { // start while loop, while count is <= function argument
    string += '#'; // string add '#' to whatever was already there
    count += 1;  // increase count by run and run and send back to while loop to attempt again
    console.log(string) // print string to the console
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, end) { // function declaration
  for (var i = 1; i <= 15; i++) { // start at 1, stop=15, increment by 1
    if (i % 3 === 0 && i % 5 === 0) { // if i divides by 3 AND 5 without a remainder
      console.log('fizzbuzz'); // print fizzbuzz
    } else if (i % 3 === 0) { // if i divides by 3 with no remainder
      console.log('fizz'); // print fizz
    } else if (i % 5 === 0) { // if i divides by 5 with no remainder
      console.log('buzz'); // print buzz
    } else { // if none of the previous conditions met...
      console.log(i) // print the value of i
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(number) { // function declaration
  var string = ""; // empty string to push into
  for (let i = 0; i < number; i++) { // start loop at 0; stop before argument; increment by 1
    for (let index = 0; index < number; index++) { // start loop at 0, stop before arg, increment by 1
      if (Number.isInteger((i + index) / 2)) { // if i + index div. by 2 is a whole number (meaning even)
        string += " "; // add a space to the string
      } else { // if i + index div. 2 is not a whole number (meaning odd)
        string += "#"; // add a pound sign to the string
      }
    }
    string += "\n"; // add next line statement to end of string before going to next outer loop iteration
  }
  console.log(string); // print string to the console
}



////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
