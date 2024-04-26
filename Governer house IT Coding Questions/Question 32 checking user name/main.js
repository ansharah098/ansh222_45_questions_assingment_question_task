var current_user = ["saba", "admin", "saim", "nomi", "ayan"];
var new_users = ["razak", "sara", "admin", "ali", "zuhaib"];
new_users.forEach(function (newUser) {
    if (current_user.some(function (currenUser) { return currenUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is avaliable."));
    }
});
