//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) { //function takes one obj as parameter
    const resultArr = [];   // create empty array to hold values
    for(let key in object){ // loop through object keys
        resultArr.push(object[key]); // push into empty array the ...
    }               // values for each key of the object
    return resultArr; //return array out of the function 
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {//function taking an object as param
        var valuesArray = [];   // empty array to hold values
    for (var key in object) {   // loop through object keys
            valuesArray.push([key]); // push into empty array the ...
    }               // each key in the object
    return valuesArray.join(' '); // return the array with ...
}               // elements joined into a string separated by spaces

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* keysToString() : Should take an object and return all its keys in a 
string each separated with a space */
function valuesToString(object) { // function taking 1 object as param
    var valuesArray = []; // empty array to hold values
    for (var key in object) { // loop through object keys
        if(typeof object[key] === 'string') {//if key value is a string
            valuesArray.push(object[key]); //push value into array
        } 
    }
    return valuesArray.join(' '); // return the array with ...
}               // elements joined into a string separated by spaces


//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*Should take one argument and return 'array' if its an array and 
'object' if its an object"*/
function arrayOrObject(collection) { //function taking one parameter
    if (Array.isArray(collection) === true) {//test if param is array
        return 'array'; // if array, return 'array'
    } else {            // if not array...
        return 'object';    // return 'object'
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*"capitalizeWord() : Should take a string of one word, and 
return the word with its first letter capitalized"*/
function capitalizeWord(string) { // function taking a string param
    return string.charAt(0).toUpperCase() + string.slice(1); 
}   // function returns: string's first character capitalizea and...
    //concatenated back onto the rest of the word

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*Should take a string of words and return a string with all the 
words capitalized"*/

function capitalizeAllWords(string) { //function taking string param
  var newString = string.split(" ");//split input into new array
  var capString = []; // create empty array to hold edited values
    for (var i = 0; i < newString.length; i++) {//loop over array
      capString.push(newString[i].charAt(0).toUpperCase().concat(newString[i].slice(1))); 
    }   // push into empty array the following: each element of 
        // newString array, capitalized and concatenated back
        // onto the rest of the string
  return capString.join(" "); // return capitalized elements of
}   // capString array but joined into one string separated by spaces

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//"welcomeMessage() : Should take an object with a name property and return 
//'Welcome <Name>!'
function welcomeMessage(object) { //takes object as parameter
//use for-in loop to search object for key called name
    if (object.hasOwnProperty('name')) { //if object nas name key 
//return string with name value--capitalize first letter of name value
        return 'Welcome ' + object.name.charAt(0).toUpperCase().concat(object.name.slice(1)) + '!'; 
    }
//return value at key called name
    
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**"profileInfo() : Should take an object with a name an a species and return 
 * '<Name> is a <Species>'", function(assert){
      assert.equal(profileInfo({name: "jake", species: "dog"}), "Jake is a Dog");
      assert.equal(profileInfo({name: "reggie", species: "dog"}), "Reggie is a Dog");
*/
    function profileInfo(object) { //function takes object parameter
// if statement to check if name && species keys are present in input object, if so:
        if (object.hasOwnProperty('name') && object.hasOwnProperty('species')){
// return maessage capitalizing first element in each object key value
            return object.name.charAt(0).toUpperCase().concat(object.name.slice(1)) + " is a " + object.species.charAt(0).toUpperCase().concat(object.species.slice(1));
        }
    }

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**"maybeNoises() : Should take an object, if this object has a noises array 
 * return them as a string separated by a space, if there are no noises return 
 * 'there are no noises'", function(assert){
      assert.equal(maybeNoises({noises:["bark", "woof", "squeak","growl"]}), "bark woof squeak growl");
      assert.equal(maybeNoises({noises: []}), "there are no noises");
      assert.equal(maybeNoises({}), "there are no noises");
*/
function maybeNoises(object) { //function takes object param
/*if statement to check with hasOwnProperty for noises key. If true && 
noises key value length is greater than 0 then... */
    if(object.hasOwnProperty('noises') && object.noises.length > 0) {
//return all values combined with spaces => object.noises.join(" ")
        return object.noises.join(" ");
//else:
    } else { 
//return message "there are no noises"
        return "there are no noises";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**"hasWord() : Should take a string of words and a word and return true if 
 * <word> is in <string of words>, otherwise return false.", function(assert){
      var data = "This is a super awesome string of words";
      assert.strictEqual(hasWord(data, "awesome"), true);
      assert.strictEqual(hasWord(data, "words"), true);
      assert.strictEqual(hasWord(data, "turtle"), false);
 */ 
function hasWord(string, word) {//takes string and word parameters
//if statement: use .includes() to search string for word. If true:
    if(string.includes(word)) {
        return true; //return true
    } else { //else:
        return false; //return false 
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * "addFriend() : Should take a name and an object and add the name to the 
 * object's friends array then return the object", function(assert){
      assert.deepEqual(addFriend("lester", {friends:[]}), {friends:["lester"]});
      assert.deepEqual(addFriend("jimmy", {friends:["bobby","jones"]}), {friends:["bobby", "jones", "jimmy"]});
 */
function addFriend (name, object) { //takes name (a string) and object parameters
//push name into array at object key named friends
    object.friends.push(name);
//return object (not array)
    return object; 
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * "isFriend() : Should take a name and an object and return true if <name> is 
 * a friend of <object> and false otherwise", function(assert){
      assert.equal(isFriend("jimmy",{friends:["bobby", "ralf"]}), false);
      assert.equal(isFriend("ralf",{friends:["bobby", "ralf"]}), true);
      assert.equal(isFriend("chuck",{}), false);
 */
function isFriend(name, object) { //function takes name (a string) and object parameters
//if object argument has a friends key AND (&&) friends array includes name argument:
    if(object.hasOwnProperty('friends') && object.friends.includes(name)) {
//return true
        return true;
//else:
    } else { 
//return false
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * "nonFriends() : Should take a name and a list of people, and return a list 
 * of all the names that <name> is not friends with", function(assert){
      var data = [
        {name: "Jimmy", friends:["Sara", "Liza"]},
        {name: "Bob", friends:[]},
        {name: "Liza", friends: ["Jimmy"]},
        {name: "Sara", friends: ["Jimmy"]}
      ];
      assert.deepEqual(nonFriends("Jimmy", data), ["Bob"]);
      assert.deepEqual(nonFriends("Bob", data), ["Jimmy", "Liza", "Sara"]);
      assert.deepEqual(nonFriends("Sara", data), ["Bob","Liza"]);
 */
function nonFriends(name, array) {//takes name (a string) and array list
  var checkAgainst = [];//empty array for names not to put in non-friends list
  var notFriends = [];//empty array to hold non-friends list
  for (let i = 0; i < array.length; i++) {//loop over array of people
    if (array[i].name === name) {//if input name matches object's name:
        checkAgainst.push(name);//add input name to list of names not to return
        checkAgainst.push(...array[i].friends)//add current friends to names not to return
      }
  }
  for (let i = 0; i <array.length; i++) { //loop over array of people again 
    if (checkAgainst.includes(array[i].name) === false) {//if checkAgainst list 
                                                    //doesn't contain that name:
      notFriends.push(array[i].name);//push name into non-friends list 
    }
  }
  return notFriends; //return non-friends list
}


//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
"updateObject() : Should take an object, a key and a value. Should update the 
property <key> on <object> with new <value>. If <key> does not exist on <object> 
create it.", function(assert){
      var data = {a: "one", b: "two", "hokey": false};
      assert.deepEqual(updateObject(data, "b", "three"), {a:"one", b:"three", hokey: false});
      var data = {a: "one", b: "two", "hokey": false};
      assert.deepEqual(updateObject(data, "ponies", "yes"), {a:"one", b:"two", hokey: false, ponies: "yes"});
      var data = {a: "one", b: "two", "hokey": false};
      assert.deepEqual(updateObject(data, "a", Infinity), {a:Infinity, b:"two", hokey: false});
*/


function updateObject(object, key, value) { //takes params object, object key, value
    object[key] = value;    //change value/add key:value pair to object
        //must use bracket notation, not dot or key will be named "key"
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*"removeProperties() : Should take an object and an array of strings. Should 
remove any properties on <object> that are listed in <array>", function(assert){
      var data = {a: "one", b: "two", "hokey": false};
      removeProperties(data, ["a","hokey"]);
      assert.deepEqual(data, {b: "two"});
*/ 
// delete thisIsObject[array[0]];

function removeProperties(object, array) {//takes object and (array of strings) params
    for (var i = 0; i < array.length; i++) { //loop over array of keys to be deleted
        if (object.hasOwnProperty(array[i])) { //if object has iteration of key:
            delete object[array[i]]; //delete iterated key from object
        }
    }
    return object; //return object out of function
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
"dedup() : Should take an array and return an array with all the duplicates 
removed", function( assert ) {
      var arrayOne = [1,2,2,2,3,4,5,5,5,5,"a","b","b","b","c"];
      var arrayTwo = ["hello", "hello", "hello", "hello", "hello", "world", "hello", "world", "world", "world"];
      assert.deepEqual(dedup(arrayOne), [1,2,3,4,5,"a","b","c"]);
      assert.deepEqual(dedup(arrayTwo), ["hello", "world"]);
*/
function dedup(array) { //function takes array
    var uniqueValues = []; //create empty array to push into and return later
    for (var i = 0; i < array.length; i++) { //loop over input array
//if new array does not include the value of input array's iterated position: 
        if (uniqueValues.includes(array[i]) === false) {
            //push value of iterated array position into new array
            uniqueValues.push(array[i]); 
        } 
    }
    return uniqueValues; //return new array
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}