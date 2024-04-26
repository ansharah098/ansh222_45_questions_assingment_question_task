function largeshirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love typescript"; }
    console.log("Making a ".concat(size, " t-shirt with message ").concat(message, " printed on it"));
}
largeshirt(); //Defult size
largeshirt("medium"); //defult message
largeshirt("small", "Dive into coding"); //custom message
