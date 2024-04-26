"use strict";
//lower case:
let personname = "Alexander";
console.log("lowercase:", personname.toLowerCase());
//Upper case:
console.log("Uppercase:", personname.toUpperCase());
//title case:
console.log("title case:", personname.replace(/\bw/g, c => c.toUpperCase()));
