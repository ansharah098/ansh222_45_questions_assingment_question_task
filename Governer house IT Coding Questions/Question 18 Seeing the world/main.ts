//Question:18
//Seeing the World: Think of at least five places in the world you’d like to visit.
//Store the locations in a array. Make sure the array is not in alphabetical order.

//Print your array in its original order.

//Print your array in alphabetical order without modifying the actual list.

//Show that your array is still in its original order by printing it.

//Print your array in reverse alphabetical order without changing the order of the original list.

//Show that your array is still in its original order by printing it again.

//Reverse the order of your list. Print the array to show that its order has changed.

//Reverse the order of your list again. Print the list to show it’s back to its original order.

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

//five places that I didnot visit 
let places:string[]=[`lahore fort`,`nanga parbat`,`hunza valley`,`moenjo daro`,`attabad valley`];
console.log(`original `+ places);
//printing array in alphabetical order with out modifing the abovee list
console.log(`copy ` +[...places].sort());
//show that your array is still in its original order
console.log(`original `+places);
//print your array in reverse alphabatical order without changing the order at the origial place
console.log(`copy `+[...places].sort().reverse());
//show that your array is still in its original position
console.log(`copy `+[...places].sort().reverse());
// reverse the order of your list.print the array to show that its order has changed
console.log(`original `+ places.sort());
//reverse the order of your list again. print the list to show its back to its original order
console.log(`original `+ places.sort().reverse());