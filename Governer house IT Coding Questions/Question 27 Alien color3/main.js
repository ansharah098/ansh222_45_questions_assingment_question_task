//version: 1
var alien_color = "green";
//if the alien color is green, print a message that the player earned 5 points.
if (alien_color == "green") {
    console.log("the player earned 5 points");
}
//if the alien color is yellow,print a message that the player earned 10 points.
else if (alien_color == "yellow") {
    console.log("the player earned 10 points");
}
//if the alien color is red, print a message that the player earned 15 points.
else if (alien_color == "red") {
    console.log("the player earned 15 points");
}
else {
    console.log("please select right color");
}
//write three versions of the program,making sure that
//each message is printed for the appropriate color alien.
//Version: 2
alien_color = "yellow";
if (alien_color == "green") {
    console.log("the player earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("the player earned 10 points");
}
else if (alien_color == "red") {
    console.log("the player earned 15 points");
}
else {
    console.log("please select right color");
}
//Version: 3
alien_color = "red";
if (alien_color == "green") {
    console.log("the player earned5 points");
}
else if (alien_color == "yellow") {
    console.log("the player earned 10 points");
}
else if (alien_color == "red") {
    console.log("the player earned 15 point");
}
