var my_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//for loop
for (var i = 0; i < my_numbers.length; i++) {
    //now conditions
    if (my_numbers[i] == 1) {
        console.log("".concat(my_numbers[i], "st"));
    }
    else if (my_numbers[i] == 2) {
        console.log("".concat(my_numbers[i], "nd"));
    }
    else if (my_numbers[i] == 3) {
        console.log("".concat(my_numbers[i], "rd"));
    }
    else if (my_numbers[i] >= 4 && my_numbers[i] <= 9) {
        console.log("".concat(my_numbers[i], "th"));
    }
}
