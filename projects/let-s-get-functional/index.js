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

var maleCount = function(array) {  // function takes array of customer objects
    let filterOutput = _.filter(array, function(customerObj) { // filter out ...
        return customerObj.gender === 'male'; // but male customers (rtns array)
    });
    return filterOutput.length; //return length of array of customers who passed
};



var femaleCount = function(array){ // function takes array of customer objects
    return _.reduce(array, function(prev, current) { //reduce to count females
       if (current.gender === 'female') {   //if current elem's gender is female:
           prev += 1;                       //add one to the count 
       }
    return prev;                            // return prev, which is the count
    }, 0);                                  // seed of 0 to start counting from 
};



var oldestCustomer = function(array) { //func takes array of customer objects
    return _.reduce(array, function(prev, current) {//reduce to cycle thru cust's
        if (current.age > prev.age) { //if current cust's age is older than last:
            prev = current; //assign current cust to prev to keep checking against
        }  
        return prev;        //return prev when done checking all ages
    }).name; //instead of returning entire customer object, access only the name
}; 



var youngestCustomer = function(array) { //func takes array of customer objects
    return _.reduce(array, function(prev, current){//reduce to cycle thru cust's
        if (current.age < prev.age) { //if current cust's age is less than last:
            prev = current; //assign current cust to prev to keep checking against
        }
        return prev; //return prev when done checking all ages
    }).name; //instead of returning entire customer object, access only the name
};



var averageBalance = function(array) { //func takes array of customer objects
    var balances = _.pluck(array, 'balance');   //pluck balances to new array
    var numBal = _.map(balances, function(balAmt, key, index) {//map strings...
        return parseFloat(balAmt.replace(/[^0-9.-]+/g,""));//of balances to #'s'
        });
    return _.reduce(numBal, function(prev, current) {//reduce to add all bal's 
        prev += current;    //add each current balance element to the previous
        return prev;        //return previous (the total)
    })/numBal.length;       //divide total of all balances by number of balances
}; 



var firstLetterCount = function(array, letter) {//takes cust arr and match letter
    var fullNames = _.pluck(array, 'name'); //pluck cust names to new array
    return _.reduce(fullNames, function(prev, current) {//reduce to check names
        //if name's 1st letter (lower cased) matches input letter (lower cased):
        if (current[0].toLowerCase() === letter.toLowerCase()) {
            prev += 1;                      // increment the count
        }
    return prev;                            // return prev (the count)
    }, 0);                                  // seed of 0 to start counting from 
};


                        //takes cust arr, specific customer, and friend to find
var friendFirstLetterCount = function(array, customer, letter) {
    var selectCust = _.filter(array, function(customerObjs) {//find cust w/ filter
       return customerObjs.name === customer; //return entire cust object (array)
    });
    var friendsList = _.pluck(selectCust, 'friends')[0];//pluck friends from arr
    return _.reduce(friendsList, function(prev, current) {//reduce to count frnds
    //if name's first letter (lower cased) matches input letter (lower cased):
       if (current.name[0].toLowerCase() === letter.toLowerCase()) {
           prev += 1;                       // increment the count
       }
    return prev;                            // return prev (the count)
    }, 0);                                  // seed of 0 to start counting from 
};



var friendsCount = function(array, name) { // takes cust arr and friend name
    var custNames = []; // empty array to push customer name result to 
    _.each(array, function(cust, i, custList) { // each to check ever customer
        // using some, if any of the customer's friends match the input name:
        if (_.some(cust.friends, function(friend, index, friendsList) {
                return (friend.name === name);
        })) {
            custNames.push(cust.name);  // push customer's name to result array
        }
    }); 
    return custNames;                   // return result array of customer names
};
    


var topThreeTags = function(array) { // function takes array of customer objects
    var flattenedTags = []; // empty array for all tags (flatten indiv. arrays)
    _.each(array, function(cust, i, custList) { //use each for each customer obj
        _.each(cust.tags, function(tag, index, tagList) {//each again for tag arr
            flattenedTags.push(tag);            //push all tags to empty array
        });
    }); 
    // reduce to count all tags in array of tags
    var tagCountObj = _.reduce(flattenedTags, function(countObj, tag) {
        if (countObj[tag]) {        // if count object already contains tag: 
            countObj[tag]++;        // increment the tag's count by 1
        } else {                    // otherwise (count obj doesn't have tag):
            countObj[tag] = 1;      // add tag to count object with a count of 1
        }
        return countObj;            // return object when counting is complete
    }, {}); 
    // use map to make new array with each tag and its count (see below)
    var tagCountArr = _.map(tagCountObj, function(count, tag, obj) {         
        return [tag, count]; // each element of new array will have nested array
    }); 
    tagCountArr.sort(function(a, b) {   // sort tag count array 
        return b[1] - a[1]; // sort in reverse (b-a) by the count (position 1)
    });
    var top3 = tagCountArr.slice(0, 3); // slice count array down to top 3 only
    return _.map(top3, function(resultArray) {  // use map to return array...
        return resultArray[0];                  // containing only the tag words
    });
};



var genderCount = function(array) { // function takes array of customer objects
    var genderArr = _.pluck(array, 'gender'); // pluck genders to new array
    return _.reduce(genderArr, function(countObj, gender) {//reduce: count genders
        if (countObj[gender]) {     // if count obj already contains gender:
            countObj[gender]++;     // increment the gender's count by 1
        } else {                    // otherwise (count obj doesn't have gender):
            countObj[gender] = 1;   // add gender to count obj with a count of 1
        }
        return countObj;            // return object when count is complete
    }, {}); 
};




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
