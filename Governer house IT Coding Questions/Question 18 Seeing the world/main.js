"use strict";
//five places that I didnot visit 
let places = [`lahore fort`, `nanga parbat`, `hunza valley`, `moenjo daro`, `attabad valley`];
console.log(`original ` + places);
//printing array in alphabetical order with out modifing the abovee list
console.log(`copy ` + [...places].sort());
//show that your array is still in its original order
console.log(`original ` + places);
//print your array in reverse alphabatical order without changing the order at the origial place
console.log(`copy ` + [...places].sort().reverse());
//show that your array is still in its original position
console.log(`copy ` + [...places].sort().reverse());
// reverse the order of your list.print the array to show that its order has changed
console.log(`original ` + places.sort());
//reverse the order of your list again. print the list to show its back to its original order
console.log(`original ` + places.sort().reverse());
