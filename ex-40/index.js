function  make_album(artist_name,album_title,title) {

this.artist_name=artist_name,
this.album_title=album_title,
this.title=title


}

let first = new make_album ("Junaid Jamshed","us rah per")
let second = new make_album("Naill Horan","Flicker")
let third = new make_album("Harry Styles","Fine Line")


let fourth = new make_album('abc','xyz' ,'7')

console.log(first)
console.log(second)
console.log(third)
console.log(fourth)

console.log(fourth.tracks)