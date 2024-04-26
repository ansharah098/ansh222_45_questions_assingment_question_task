//Question:14
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.


let Guestlist:string[]=[`ali`,`farzana`,`rizwan`,`asad`,`zunaira`];
for(let i=0; i<Guestlist.length; i++){

    console.log(`Respected Sir/Madam `+ Guestlist[i]+ `,\nI would like to invite you on dinner to night\n\nthank you\n your friend\n `);
}
export{Guestlist}