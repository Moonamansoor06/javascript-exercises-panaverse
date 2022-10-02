let guests=['Kiran','Sahar','Masroor']
let deletedGuest


for(let i=0;i<guests.length;i++){
    console.log(`Dear ${guests[i]} you are cordially invited for a dinner`)
    if(guests[i]==='Sahar'){
        deletedGuest='Sahar'
        }
  
}
console.log(`${deletedGuest} is not able to make it`)

for(let i=0;i<guests.length;i++){
       if(guests[i]==='Sahar'){
       guests[i]='Atiya'  
      }
  
         console.log(`Dear ${guests[i]} you are cordially invited for a dinner`)
    
}