//Question: 28
//Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.

//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

//• If the person is age 65 or older, print a message that the person is an elder.
//Stages of life: Write an if-else chain that determines a persons stage of life.
//set a value for the variable age,and then:
//If person is less than 2 years, print the message that the person is baby.
let person_age:number=25;
if(person_age<2){
console.log(" the person is baby");
}

// If person is of 2 years but less than 4 years, print the message that the person is a toddler.
else if(person_age<=2 && person_age<4){
    console.log("that the person is a toddler")
}
// If person is of 4 years but less than 13 years, print the message that the person is a kid.
else if(person_age<=4 && person_age<13){
    console.log("that the person is a kid")
}
// If person is of 13 years but less than 20 years, print the message that the person is a teenager.
else if(person_age<=13 && person_age<20){
    console.log("that the person is a teenager")
}
// If person is of 20 years but less than 65 years, print the message that the person is a adult.
else if(person_age<=20 && person_age<65){
    console.log("that the person is a adult")
}
// If person is of 65 years or older, print the message that the person is a elder.
else {
    console.log("that the person is a elder")
}