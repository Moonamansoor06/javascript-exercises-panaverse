

let magicians3=['John','Adam','Mark','Peter']
let magicians_copy :Array<string> = []
function call_magicians(prop:any){
for(let i=0;i<prop.length;i++){
    console.log(`${i+1} ${prop[i]}`)
}
}


function make_great(props:any){
    
  
    for(let i=0;i<props.length;i++){
magicians_copy.push(`${props[i]} the great`)


}
console.log(magicians_copy)
}
call_magicians(magicians3)
make_great(magicians3)
console.log(magicians3)
