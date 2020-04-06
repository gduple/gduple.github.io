// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    // create new empty object to hold inputs
var contactObject = {};
// add each argument to the object with the key (must be string in quotes)
contactObject["id"] = id;
contactObject["nameFirst"] = nameFirst;
contactObject["nameLast"] = nameLast;
// return object that now contains new contacts
return contactObject; 
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    //  create a new, empty array to hold the individual contacts (each of which is an object)
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        }, 
    // create addContact function 
        addContact: function(contactObject) {
    // push function input into array of contacts, return out of function
            return contacts.push(contactObject);
        }, 
    // create findContact function 
        findContact: function(fullName) {
    // for loop to loop over array of contacts (start zeroeth position stop at length, increment)
             for (let i = 0; i < contacts.length; i++) {
    // if statement strictly comparing fullName function input to...
    // construct fullName of each [i] position in contacts (with space between)
                 if (fullName === contacts[i].nameFirst + " " + contacts[i].nameLast) {
    // if statement was true, return the contact
                     return contacts[i];
    // otherwise...
                 } else { 
    // return undefined
                     return undefined;
                }
            }
    
        }, 
    // create removeContact function 
        removeContact: function(contact) {
    // use .splice on contacts array. Location to be spliced out will be the function input
    // splice out only the 1 position
            contacts.splice(contact, 1);
        }, 
    // create function to printAllContactNames
        printAllContactNames: function() {
    // create empty string to hold list to be printed
          var listOfFullNames = "";
    // for loop to loop over contacts array; start at zeroeth position; continue until length of array; increment
            for (let i = 0; i < contacts.length; i++) {
    // use if statement to go through all of the contacts EXCEPT the last one in order to
    // prevent new line on the final name of the list (see below)
              if (i < contacts.length - 1) {
    // build the full name using object keys plus a space, and use addition assignment (+=) to keep advancing through array
    // NOTE use of new line for these conditions
                listOfFullNames += contacts[i].nameFirst + " " + contacts[i].nameLast + "\n";
    // else for the final contact
              } else {
    // build full name but without new line
                listOfFullNames += contacts[i].nameFirst + " " + contacts[i].nameLast;
              }

              

              

                 
            }
    //  return string of full names out of the function 
                return listOfFullNames;
        }
    }
}

// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
