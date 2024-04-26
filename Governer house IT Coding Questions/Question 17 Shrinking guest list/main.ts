//Question:17,
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// Print a message to each of the two people still on your list, letting them know they’re still invited.

// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


let Guestlist:string[]=[`ali`,`farzana`,`rizwan`,`asad`,`zunaira`];
 for(let i=0; i<Guestlist.length; i++){

//     console.log(`Respected Sir/Madam `+ Guestlist[i]+ `,\nI would like to invite you on dinner to night\n\nthank you\n your friend\n `);
 }
let notcomming:string= "ali";
let newguest:string="Razak";
Guestlist[0]=newguest;
// for(let i=0; i<Guestlist.length; i++){

//     console.log(`Respected Sir/Madam `+ Guestlist[i]+ `,\nI would like to invite you on dinner to night\n\nthank you\n your friend\n `);
// }
// console.log(`Mr. ${notcomming} is not comming on dinner towmorrow.` );
Guestlist.unshift(`aiman`,`firdos`,`neha`);
// for(let i=0; i<Guestlist.length; i++){

//     console.log(`Respected Sir/Madam `+ Guestlist[i]+ `,\nI would like to invite you on dinner to night\n\nthank you\n your friend\n `);
// }
console.log(`\n unfortunately we can not arrange big table, only two peoples are allow.`)
while(Guestlist.length>2){
    let removeguest = Guestlist.pop();
    console.log(`sorry sir/madam.${removeguest} you are not invited for dinner,`);
}
for(let i=0; i<Guestlist.length; i++){

    console.log(`Respected Sir/Madam `+ Guestlist[i]+`,\nyes you are still invited on dinner tomorrow\nThankyou\n`);
}
Guestlist.splice(1,2)
console.log(Guestlist)