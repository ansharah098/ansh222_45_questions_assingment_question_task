//Question: 42
//Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians 
//by adding the phrase the Great to each magician’s name. 
//Call show_magicians() to see that the list has actually been modified.


let magician :string[]=[`David Blaine`,`Harry Houdini`,`Shin Lim`,`Dynamo`];

function make_great(magicianArray:string[]){
     for(let i=0; i<magicianArray.length; i++){
        magician[i]= `the Great ` + magicianArray[i]
     }
}

function show_magician( magicians:string[]){
    magicians.forEach(Element =>
{ console.log(Element);        
    });
} 

make_great(magician);
show_magician(magician);