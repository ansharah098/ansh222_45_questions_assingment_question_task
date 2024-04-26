//Question: 24
//More Conditional Tests: You don’t have to limit the number of tests you create to 10.
// If you want to try more comparisons, write more tests. 
//Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
//String test
//Test 1: Equality
console.log("Equality test with strings:", "Apple" == "Apple"); //true
//Test 2: strict equality
console.log("Equality test with strings:", "Apple" === "Apple"); //true
//Test 3: Inequality
console.log("Equality test with strings:", "Apple" != "orange"); //true
//Lower function test 
//Test 5: Lowercase conversion
console.log("lower case function test:", "HELLO".toLowerCase() === "hello"); //true
//Numerical Test
//Test 7:Equality 
console.log("Equality test with numbers:", 27 == 27); //true
//Test 8: Inequaality
console.log("Equslity test with numbers:", 5 != 7); //true
//Test 9: Greater than
console.log("Greater than test:", 5 > 2); //true
//Test : less than
console.log("less than test:", 5 < 10); //true
//Test : Less than or equal  to
console.log("Greater than equal to test:", 5 <= 8); //true
//Test 10: Less than or equal  to
console.log("Greater than equal to test:", 5 >= 5); //true
//Logical operator
//Test 11: And
console.log("And operator test:", 5 === 5 && 10 > 5); //true
////Test 12: OR
console.log("Or operator test:", 5 === 5 || false); //true
//Array test
//Test 13: In array
var fruits = ["apple", "mango", "banana"];
console.log("Test apple is in array:", fruits.includes("apple"));
//Test 14: Not in array
console.log("Test apple is in array:", !fruits.includes("orange")); //true
