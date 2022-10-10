let magicians=['John','Adam','Mark','Peter']

function call_magicians1(prop:any){
for(let i=0;i<prop.length;i++){
    console.log(`${i+1} ${prop[i]}`)
}
}


call_magicians1(magicians)