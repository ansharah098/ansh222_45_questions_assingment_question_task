//Question:21
//They think of something you could store in a TypeScript Object.
// Write a program that creates Objects containing these items.

interface item {
    name:string
    price:number
   }
   //Two objects
   const book1:item={
       name:"Newtons Law",
       price:550
   }
   const book2: item={
       name:"concept about life",
       price:600
   }
   console.log(`book name: ${book1.name} price: $${book1.price}`);
   console.log(`book name: ${book2.name}  price: $${book2.price}`);