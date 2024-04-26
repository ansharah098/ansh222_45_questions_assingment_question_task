//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

//lower case:
let personname:string="Alexander";
console.log("lowercase:", personname.toLowerCase());
//Upper case:
console.log("Uppercase:", personname.toUpperCase());
//title case:
console.log("title case:",personname.replace(/\bw/g,c => c.toUpperCase()));
