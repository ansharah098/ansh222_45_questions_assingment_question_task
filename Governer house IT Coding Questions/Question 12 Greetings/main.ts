//Question:12,
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let members:string[]=[`ayesha`,`hoor`,`ali`,`sana`,`sara`];
let message:string=`would you like to do group studies with me?`;
for( let i=0; i<members.length; i++){

    console.log( members[i] , (message)); 
}
