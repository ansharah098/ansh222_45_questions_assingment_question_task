//Question: 16,
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//Add one new guest to the beginning of your array.

//Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let Guestlist:string[]=[`ali`,`farzana`,`rizwan`,`asad`,`zunaira`];
// for(let i=0; i<Guestlist.length; i++){

//     console.log(`Respected Sir/Madam `+ Guestlist[i]+ `,\nI would like to invite you on dinner to night\n\nthank you\n your friend\n `);
// }
let notcomming:string= "ali";
let newguest:string="Razak";
Guestlist[0]=newguest;
for(let i=0; i<Guestlist.length; i++){

    console.log(`Respected Sir/Madam `+ Guestlist[i]+ `,\nI would like to invite you on dinner to night\n\nthank you\n your friend\n `);
}
// console.log(`Mr. ${notcomming} is not comming on dinner towmorrow.` );
Guestlist.unshift(`aiman`,`firdos`,`neha`);
for(let i=0; i<Guestlist.length; i++){

    console.log(`Respected Sir/Madam `+ Guestlist[i]+ `,\nI would like to invite you on dinner to night\n\nthank you\n your friend\n `);
}