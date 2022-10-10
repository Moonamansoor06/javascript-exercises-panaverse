let magicians2=['John','Adam','Mark','Peter']

function call_magicians12(prop:any){
for(let i=0;i<prop.length;i++){
    console.log(`${i+1} ${prop[i]}`)
}
}


function make_great12(props:any){
    
  console.log(props.length)
    for(let i=0;i<props.length;i++){

props[i]=`${props[i]} the great`

}



}
call_magicians12(magicians)
make_great12(magicians)
console.log(magicians)

