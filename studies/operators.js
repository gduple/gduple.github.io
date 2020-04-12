/**
 * OPERATORS:
 *
 * 0. Operators, much like mathematical symbols, act on pieces of data called 
 *    operands.
 * 1. Operators are classified by the type of action they perform and how many 
 *    operands they act on. 
 *
 */


// I. ASSIGNMENT OPERATORS

// 1. =     Assignment: assigns a value to a variable.
var x = 3; // Assigns the value of 3 to variable x

// 2. +=    Addition Assignment: adds 2 numbers & assigns the result to the first.
// (a += b is equivalent to: a = a + b)
var a = 2;
var b = 1;
a += b;
console.log(a); // => 3, because a became a plus b. 

// 3. -=    Subtraction Assignment: subtracts 2 numbers & assigns result to the 1st.
// (a -= b is equivalent to: a = a - b)
var a = 5;
var b = 3;
a -= b;
console.log(a); // => 2, because a becames a minus b. 

// 4. *=    Multiplication Assignment: multiplies 2 numbers & assigns result to the 1st.
// (a *= b is equivalent to: a = a*b)
var a = 2;
var b = 3;
a *= b;
console.log(a); // => 6, because a became a times b. 

// 5. /=    Division Assignment: divides 2 numbers & assigns the result to the 1st.
// (a /= b is equivalent to: a = a/b)
var a = 8;
var b = 4;
a /= b;
console.log(a); // => 2, because a became a divided b. 

// II. ARITHMETIC OPERATORS
                                       
// 1. +	    Addition: adds two operands (but will also concatenate strings).
var add = 5 + 2;
console.log(add); // => 7
var notAdd = 5 + "two";
console.log(notAdd); // => "5two"

// 2. -	    Subtraction: subtracts the second operand from the first.
var subtract = 9 - 3;
console.log(subtract); // => 6

// 3. *	    Multiplication: multiplies two operands.
var multiply = 3 * 4;
console.log(multiply); // => 12

// 4. **	Exponentiation: raises the 1st operand to the power of the 2nd operand.
var exponentiate = 4 ** 3;
console.log(exponentiate); // => 64

// 5. /	    Division: divides the first operand by the second.
var divide = 12 / 3;
console.log(divide); // => 3
// 6. %	    Modulus: gives the remainder of dividing first operand by the second.
var remainder = 5 % 2;
console.log(remainder); // => remainder of 1

// 7. ++	Increment: adds 1 to the operand.
var increment = 3;
increment++;
console.log(increment); // => 4

// 8. --	Decrement: subtracts one from the operand.
var decrement = 3;
decrement--;
console.log(decrement); // => 2

// III. COMPARISON OPERATORS

// 1. ==	Equal: compares two operands' value regardless of data type.
var equal = '1' == 1;
console.log(equal); // => true: same basic value (different type but doesn't matter)

// 2. ===	Strictly Equal: compares two operands for equal value AND equal type.
var strictlyEqual = '2' === 2; 
console.log(strictlyEqual); // => false: same basic value but not the same the type
strictlyEqual = 2 === 2;
console.log(strictlyEqual); // => true: same value and type

// 3. !=	Not Equal: gives the inverse of equal while disregarding data type.
// (Gives false if equal disregarding type; true if not equal disregarding type.)
var notEqual = 3 != '3';
console.log(notEqual); // => false: same basic value (diff. type but doesn't matter)
var notEqual = 3 != 3;
console.log(notEqual); // => false: same value (same type but doesn't matter)
var notEqual = 3 != '4';
console.log(notEqual); // => true: different value (diff. type but doesn't matter)
var notEqual = 3 != 4; 
console.log(notEqual); // => true: same value (same type but doesn't matter)

// 4. !==	Strictly Not Equal: gives the inverse of strictly equal. 
// (Gives true if not equal value OR not equal type.)
var strictlyNotEqual = 4 !== '4';
console.log(strictlyNotEqual); // => true: same basic value but not the same type
var strictlyNotEqual = 4 !== 4;
console.log(strictlyNotEqual); // => false: same value and type
var strictlyNotEqual = 4 !== '5';
console.log(strictlyNotEqual); // => true: different value and type
var strictlyNotEqual = 4 !== 5; 
console.log(strictlyNotEqual); // => true: same type but different value

// 5. >	    Greater Than: gives true if 1st operand is greater than 2nd operand.
// (Gives false if first operand is equal to or less than second operand.)
var greaterThan = 5 > 4;
console.log(greaterThan); // => true 
var greaterThan = 5 > 5;
console.log(greaterThan); // => false

// 6. <	    Less Than: gives true if first operand is less than second operand. 
// (Gives false if first operand is equal to or greater than second operand.)
var lessThan = 6 < 7;
console.log(lessThan); // => true 
var lessThan = 6 < 6;
console.log(lessThan); // => false

/* 7. >=	Greater Than or Equal To: gives true if first operand is greater 
            than or same as second operand. */
// (Only gives false if first operand is less than second operand.)
var greaterThanEqualTo = 7 >= 6;
console.log(greaterThanEqualTo); // => true
var greaterThanEqualTo = 7 >= 7;
console.log(greaterThanEqualTo); // => true
var greaterThanEqualTo = 7 >= 8;
console.log(greaterThanEqualTo); // => false

/* 8. <=	Less Than or Equal To: gives true if first operand is less than or 
            same as second operand. */
// (Only gives false if first operand is greater than second operand.)
var lessThanEqualTo = 8 <= 9;
console.log(lessThanEqualTo); // => true
var lessThanEqualTo = 8 <= 8;
console.log(lessThanEqualTo); // => true
var lessThanEqualTo = 8 <= 7;
console.log(lessThanEqualTo); // => false

// IV. LOGICAL OPERATORS

// 1. &&	Logical "And": both of two given conditions resolve to true.
var logicalAnd = 2 > 1 && 2 < 3;
console.log(logicalAnd); // => true: 2 is greater than 1, and 2 is less than 3. 
var logicalAnd = 2 >= 2 && 3 < 3;
console.log(logicalAnd);    /* => false: 2 is less than or equal to 2, but 3 is 
                                         not less than 3. */

// 2. ||	Logical "Or": either of two given conditions resolves to true. 
// (Both conditions must be false to return false.)
var logicalOr = 2 > 1 || 2 < 3;
console.log(logicalOr); /* => true: 2 is greater than 1 (the second half is true 
                                    also but it's not needed/evaluated). */
var logicalOr = 3 < 3 || 2 >= 2;
console.log(logicalOr); /* => true: although 3 is not less than 3, the second 
                                    half is true (2 *is* >= 2). */

var logicalOr = 2 >= 3 || 3 < 3;
console.log(logicalOr); // => false: both conditions are false. 

/* 3. !	    Logical "Not" or "Bang": converts the operand's Boolean type, 
                                     i.e. flips truthiness. */
var logicalNot = !true;
console.log(logicalNot); // => false: flips original Boolean to false
var logicalNot = !false; 
console.log(logicalNot); // => true: flips original Boolean to true
var logicalNot = !null; 
console.log(logicalNot); /* => true: flips falsey values also (null, undefined, 
                                     NaN, an empty string: "") */
var logicalNot = !0; 
console.log(logicalNot); // => true: 0, also considered falsey, is flipped to true.
var logicalNot = !1; 
console.log(logicalNot); /* => false: the opposite of above, any number with a 
                                      value will be flipped to falsey like 0. */

/* V. UNARY OPERATORS 
 * 
 * 0. Unary operators take only one operand/argument.
 *
 */

// 1. typeOf: returns a string giving the data type of the operand.
console.log(typeof 11); // => number
console.log(typeof "11"); // => string
console.log(typeof "eleven"); // => string
console.log(typeof Infinity); // => number
console.log(typeof NaN); /* => number: NaN is still a numeric data type (for a 
                                       value that can't be expressed in numbers). */
console.log(typeof true); // => boolean
console.log(typeof {name:'Grant', city:'NOLA'}); // => object
console.log(typeof [4,8,12]); /* => object: arrays are inherently objects, just 
                                            with ordered positions for keys. */
console.log(typeof Grant); /* => undefined: the lack of quotation marks makes 
                                            this unrecognizable as a string. */


// 2. +     Unary Plus: tries to convert the operand to a number. 
console.log(+4); // => 4
console.log(+'4'); // => 4
console.log(+'-4'); // => -4
console.log(+'four'); // => NaN
console.log(+true); // => 1
console.log(+false); // => 0
console.log(+null); // => 0
console.log(+'Infinity'); // => Infinity
console.log(+'-Infinity'); // => -Infinity
console.log(+'infinity'); // => NaN

// 3. -     Unary Negation: tries to convert the operand to a number then negates it. 
console.log(-4); // => -4
console.log(-'4'); // => -4
console.log(-'-4'); // => 4
console.log(-'four'); // => NaN
console.log(-true); // => -1
console.log(-false); // => -0
console.log(-null); // => -0
console.log(-'Infinity'); // => -Infinity
console.log(-'-Infinity'); // => Infinity
console.log(-'infinity'); // => NaN

// 4. ++    Increment: see above. 
// 5. --    Decrement: see above. 
// 6. !	    Logical "Not" or "Bang": see above.
 
/** 
 * VI. TERNARY OPERATOR
 *
 * 0. The ternary, or conditional operator is the only Javascript operator that 
 *    takes three operands. 
 * 1. The first operand is a condition to be Boolean tested, which is followed by 
 *    a question mark. 
 * 2. The second operand is a value to return if the condition was true, which is 
 *    followed by a colon. 
 * 3. The third operand is a value to return if the condition was false. 
 * 4. Ternary operators are functionally simiar to if/else statements and are 
 *    sometimes used as shorthand versions of such.
 *
 */
 
// 1. Ternary operator:
var ternaryOperator = 3 < 4 ? true : false;
console.log(ternaryOperator); /* => true: the test was true, so the first value 
                                          after the question mark is returned. */
// 2. Modified version of same ternary operator:
var ternaryOperator = 3 < 4 ? false : true;
console.log(ternaryOperator); /* => false: even though 3 is less than 4, if the 
condition is true, the operator will only return the first operand after the 
question mark. */
 