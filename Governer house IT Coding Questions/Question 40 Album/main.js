function make_album(artist_name, albumname, Nooftracks) {
    return { artist_name: artist_name, albumname: albumname, Nooftracks: Nooftracks };
}
var album1 = make_album("ayan", "adhura ho ma", 38);
var album2 = make_album("noreen", "tum hi ho muhabbat ", 45);
var album3 = make_album("shelva", "tumhary bina", 50);
console.log(album1);
console.log(album2);
console.log(album3);
