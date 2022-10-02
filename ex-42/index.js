let magicians=['John','Adam','Mark','Peter']

function call_magicians(prop){
for(let i=0;i<prop.length;i++){
    console.log(`${i+1} ${prop[i]}`)
}
}


function make_great(props){
    
  console.log(props.length)
    for(let i=0;i<props.length;i++){

props[i]=`${props[i]} the great`

}

}
call_magicians(magicians)
make_great(magicians)
console.log(magicians)

