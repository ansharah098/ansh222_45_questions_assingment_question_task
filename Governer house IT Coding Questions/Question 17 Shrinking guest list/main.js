"use strict";
let Guestlist = [`ali`, `farzana`, `rizwan`, `asad`, `zunaira`];
for (let i = 0; i < Guestlist.length; i++) {
    //     console.log(`Respected Sir/Madam `+ Guestlist[i]+ `,\nI would like to invite you on dinner to night\n\nthank you\n your friend\n `);
}
let notcomming = "ali";
let newguest = "Razak";
Guestlist[0] = newguest;
// for(let i=0; i<Guestlist.length; i++){
//     console.log(`Respected Sir/Madam `+ Guestlist[i]+ `,\nI would like to invite you on dinner to night\n\nthank you\n your friend\n `);
// }
// console.log(`Mr. ${notcomming} is not comming on dinner towmorrow.` );
Guestlist.unshift(`aiman`, `firdos`, `neha`);
// for(let i=0; i<Guestlist.length; i++){
//     console.log(`Respected Sir/Madam `+ Guestlist[i]+ `,\nI would like to invite you on dinner to night\n\nthank you\n your friend\n `);
// }
console.log(`\n unfortunately we can not arrange big table, only two peoples are allow.`);
while (Guestlist.length > 2) {
    let removeguest = Guestlist.pop();
    console.log(`sorry sir/madam.${removeguest} you are not invited for dinner,`);
}
for (let i = 0; i < Guestlist.length; i++) {
    console.log(`Respected Sir/Madam ` + Guestlist[i] + `,\nyes you are still invited on dinner tomorrow\nThankyou\n`);
}
Guestlist.splice(1, 2);
console.log(Guestlist);
