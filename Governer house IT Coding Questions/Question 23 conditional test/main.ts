//question:21 ,
//Conditional Tests: Write a series of conditional tests. 
//Print a statement describing each test and your prediction for the results of each test. 
//Your code should look something like this:

//let car = 'subaru';

//console.log("Is car == 'subaru'? I predict True.")

//console.log(car == 'subaru')

//• Look closely at your results, and make sure you understand why each line evaluates to True or False.

//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.




//Test No 1: equality comparison 
let car:string="subaru";
console.log("Is car==`subaru`?I predict true.");
console.log(car==`subaru`); //true
// Test No 2: Strict Equality comparison
console.log("Is car ===`subaru`?I predict true.")
console.log(car===`subaru`); //true

//Test No 3:Inequality comparison
console.log("Is car !=`sabaru`? I predict false.")
console.log(car!=`subaru`); //false

//Test No 4:strict inequality comparison
console.log("Is car !==`subaru`? I predict false.")
console.log(car!==`subaru`); //false

//Test No 5:less than comparison
console.log("Is car<`subaru`? I predict false")
console.log(car <`subaru`); //false

//Test No 6: Greater than comparison
console.log("Is car > `subaru`? I predict false")
console.log(car>`subaru`); //false

//Test No 7: Less than or equal comparison
console.log("Is car <= `subaru`? I predict true")
console.log(car <=`subaru`); //true

//Test No 8: Greater than or equal comparison
console.log("Is car >= `subaru`? I predict true")
console.log(car >=`subaru`); //true

//Test No 9: check truthness
console.log("Is car? I predict True.")
console.log(car); //true

//Test No 10: checking falsiness
console.log("Is !car? I predict false.")
console.log(car); //false