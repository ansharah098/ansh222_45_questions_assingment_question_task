//Question:15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14.
// Add a print statement at the end of your program
// stating the name of the guest who can’t make it.

// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// Print a second set of invitation messages, one for each person who is still in your list.
let Guestlist:string[]=[`ali`,`farzana`,`rizwan`,`asad`,`zunaira`];
for(let i=0; i<Guestlist.length; i++){

    console.log(`Respected Sir/Madam `+ Guestlist[i]+ `,\nI would like to invite you on dinner to night\n\nthank you\n your friend\n `);
}
let notcomming:string= "ali";
let newguest:string="Razak";
Guestlist[0]=newguest;
for(let i=0; i<Guestlist.length; i++){

    console.log(`Respected Sir/Madam `+ Guestlist[i] + `,\nI would like to invite you on dinner to night\n\nthank you\n your friend\n `);
}
console.log(`Mr. ${notcomming} is not comming on dinner towmorrow.` );