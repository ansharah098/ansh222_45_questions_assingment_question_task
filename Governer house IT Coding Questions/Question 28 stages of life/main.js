//Stages of life: Write an if-else chain that determines a persons stage of life.
//set a value for the variable age,and then:
//If person is less than 2 years, print the message that the person is baby.
var person_age = 25;
if (person_age < 2) {
    console.log(" the person is baby");
}
// If person is of 2 years but less than 4 years, print the message that the person is a toddler.
else if (person_age <= 2 && person_age < 4) {
    console.log("that the person is a toddler");
}
// If person is of 4 years but less than 13 years, print the message that the person is a kid.
else if (person_age <= 4 && person_age < 13) {
    console.log("that the person is a kid");
}
// If person is of 13 years but less than 20 years, print the message that the person is a teenager.
else if (person_age <= 13 && person_age < 20) {
    console.log("that the person is a teenager");
}
// If person is of 20 years but less than 65 years, print the message that the person is a adult.
else if (person_age <= 20 && person_age < 65) {
    console.log("that the person is a adult");
}
// If person is of 65 years or older, print the message that the person is a elder.
else {
    console.log("that the person is a elder");
}
