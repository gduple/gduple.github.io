// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-gduple");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    let filterOutput = _.filter(array, function(customerObj) {
        //filter out all but the male customers
        return customerObj.gender === 'male'; 
    });
    return filterOutput.length; 
};


// var femaleCount = function(array){
//     // input array of cust obj
//     // output number
//     return _.reduce(array, function(prev, current){
//         // when to increment the seed 
//         // if our cust obj has a gender of female
//       if (current.gender === 'female'){
//           prev += 1;
//       }
//         // when to not increment our seed
//         // when our cust obj isnt a female
//     return prev;
//     }, 0);
// };

var femaleCount = function(array){
    // input array of cust obj
    // output number
    return _.reduce(array, function(prev){
        // when to increment the seed 
        // if our cust obj has a gender of female
       if (prev.gender === 'female'){
           prev += 1;
       }
        // when to not increment our seed
        // when our cust obj isnt a female
    return prev; 
    }, array[0]);
};



var oldestCustomer = function(array) {
    var ages = _.pluck(array, 'age'); 
    var oldest = 0; 
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] > ages[i + 1]) { 
            oldest = ages[i];
        }
    }
    return _.filter(array, function(customerObj) {
        if (customerObj.age === oldest) {
            return true; 
        }
    })[0].name; 
}; 



var youngestCustomer = function(array) {
    var ages = _.pluck(array, 'age'); 
    var youngest = 0; 
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] < ages[i - 1]) {
            youngest = ages[i];
        }
    }
    return _.filter(array, function(customerObj) {
        if (customerObj.age === youngest) {
            return true;
        }
    })[0].name;
};



var averageBalance = function(array) {
    var balances = _.pluck(array, 'balance');
    var numBal = []; 
    _.each(balances, function(element, key, index) {
        numBal.push(parseFloat(element.replace(/[^0-9.-]+/g,"")));
        });
    var totalBal = 0; 
    for (var i = 0; i < numBal.length; i++) { //*****CHANGE TO FUNC
        totalBal += numBal[i];
    } 
    /////////////   console.log(totalBal); 
    return totalBal/numBal.length;
}; 

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
