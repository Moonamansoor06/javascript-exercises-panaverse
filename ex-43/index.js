

let magicians=['John','Adam','Mark','Peter']
let magicians_copy=[]
function call_magicians(prop){
for(let i=0;i<prop.length;i++){
    console.log(`${i+1} ${prop[i]}`)
}
}


function make_great(props){
    
  
    for(let i=0;i<props.length;i++){
magicians_copy.push(`${props[i]} the great`)


}
console.log(magicians_copy)
}
call_magicians(magicians)
make_great(magicians)
console.log(magicians)
