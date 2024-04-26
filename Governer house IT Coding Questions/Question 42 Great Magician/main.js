var magician = ["David Blaine", "Harry Houdini", "Shin Lim", "Dynamo"];
function make_great(magicianArray) {
    for (var i = 0; i < magicianArray.length; i++) {
        magician[i] = "the Great " + magicianArray[i];
    }
}
function show_magician(magicians) {
    magicians.forEach(function (Element) {
        console.log(Element);
    });
}
make_great(magician);
show_magician(magician);
