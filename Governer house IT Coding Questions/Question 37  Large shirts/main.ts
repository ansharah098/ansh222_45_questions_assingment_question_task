//Question: 37
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads
// I love TypeScript. Make a large shirt and a medium shirt with the default message,
// and a shirt of any size with a different message.

function largeshirt(size:string ="large", message: string="I love typescript"){
    console.log(`Making a ${size} t-shirt with message ${message} printed on it`);
}

largeshirt();//Defult size
largeshirt("medium"); //defult message
largeshirt("small","Dive into coding");//custom message