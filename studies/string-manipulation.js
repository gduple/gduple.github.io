/** 
 * STRING MANIPULATION:
 * 
 * 0. Strings, or character data, can be manipulated in a variety of ways:
 * 1. With operators, such as +, +=, and >/<.
 * 2. With string methods, such as character at, toLowerCase, toUpperCase, 
 *    slice, split, replace, and more. 
 *
 */
 
// I. Manipulation With Operators

// 1. +     The addition operator can be used to concatenate strings.
var string1 = "New";
var string2 = "Orleans";
console.log(string1 + " " + string2); // => "New Orleans"

/* 2. +=    Addition assignment can be used as a shorthand version of the 
            addition operator. */
console.log(string1 += string2); // => "NewOrleans"

/* 3. >, <  Comparison operators can be used to determine alphabetic order 
            (closer to letter A is less-than). */
console.log('cat' < 'dog'); // => true
console.log('dog' > 'doggo'); // => false

// II. Manipulation With String Methods

// 1. Character At: accesses an individual character using dot notation. 
var firstName = "grant";
console.log(firstName.charAt(2)); // => 'a'

// 2. Character Access: accesses an individual character like array access. 
// Like arrays, strings are zero-indexed. 
console.log(firstName[3]); // => 'n'

// 3. Lowercase/Uppercase: switches character case.
var firstName = "GRANT";
console.log(firstName.toLowerCase()); // => 'grant'
var firstName = 'grant';
console.log(firstName.toUpperCase()); // => 'GRANT'

/**
 * 4.Slice: allows you to cut out a portion of a string between given positions. 
 * NOTE: like arrays, the positions are numbered starting at 0 for the first 
 * character. Of the given start and stop positions, the start is inclusive (the 
 * computer keeps the character in the position corresponding to the number), but 
 * the stop is non-inclusive (the computer does NOT keep the character in the 
 * position corresponding to the number). If only one number is given, the 
 * character in the corresponding position will be kept along with all subsequent
 * characters. */
console.log(firstName.slice(0, 2)); /* => "gr": the computer keeps position 
                                                0 and 1, but not 2. */
console.log(firstName.slice(3)); /* => "ant": the computer keeps everything at 
                                              position 3 and on. */

/**
 * 5. Split: splits a string's characters into an array based on a given point of 
 * separation. The entire string is kept as an array element if no condition for 
 * separation is given, as such: string.split(). To separate each character into 
 * an array element, empty quotation marks are used: string.split(''). And to 
 * separate each word, a space is used between the quotation marks: 
 * string.split(" "). */
console.log(firstName.split()); // => [ 'grant' ]
console.log(firstName.split("")); // => [ 'g', 'r', 'a', 'n', 't' ]
var yatString = "Where yat?";
console.log(yatString.split(' ')); // => [ 'Where', 'yat?' ]

/**
 * 6. Replace: searches for a given parameter and replaces it. The parameter to 
 * be found and replaced comes first in the parentheses, and the new parameter 
 * comes second: string.replace(find, replaceWith). Flags can be added to the 
 * parameter to be found to make it case-insensitive and (i) and global (g), 
 * OTHERWISE, only the first instance of the give parameter will be replaced. */
var stringAboutMe = 
'My name is Grant. I live in new Orleans. My favorite team is the new orleans Saints.';

console.log(stringAboutMe.replace(/new orleans/gi, 'New Orleans')); /* => "My name 
is Grant. I live in New Orleans. My favorite team is the New Orleans Saints." 
Notice both instances of the parameter were found, because of the global flag. 
Likewise, both were replaced despite differing capitalization because the of the
case-insensitive flag. */

