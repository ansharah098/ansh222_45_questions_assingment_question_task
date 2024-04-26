//Question: 41
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.


let magician :string[]=[`David Blaine`,`Harry Houdini`,`Shin Lim`,`Dynamo`];
function show_magician( magicians:string[]){
    magicians.forEach(Element =>
{ console.log(Element);        
    });
} 


show_magician(magician);