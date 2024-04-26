function make_sandwich(item) {
    console.log("Making your sandwich with:");
    item.forEach(function (element) { return console.log(element); });
    console.log("Enjoy your sandwich!!");
}
make_sandwich(["chicken", "mayo", "tomato"]);
make_sandwich(["beef", "onion", "garlic ssause"]);
make_sandwich(["cheese", "ketchup", "lettuse"]);
