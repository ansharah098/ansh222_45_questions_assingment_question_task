//Question:25
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

//• Write one version of this program that runs the if block and another that runs the else block.
//variable alien color
let alien_color:string="green";
//write if statmrnt to test wheather the alien color is green ifit is print the message that the player earned 5 points.
if(alien_color=="green"){
    console.log("The player just earned 5 points.");

}
//write one version of this program that passes the if test and another that the version that fails has no output.
alien_color="red";
if(alien_color=="green"){
    console.log("The player just earned 5 points");
}