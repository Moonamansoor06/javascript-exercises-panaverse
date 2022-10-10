let guests2=['Kiran','Sahar','Masroor']
let deletedGuest:string|undefined

for(let i=0;i<guests2.length;i++){
    console.log(`Dear ${guests2[i]} you are cordially invited for a dinner`)
    if(guests2[i]==='Sahar'){
        deletedGuest='Sahar'
        }
  
}
console.log(`${deletedGuest} is not able to make it`)

for(let i=0;i<guests2.length;i++){
       if(guests2[i]==='Sahar'){
       guests2[i]='Atiya'  
      }
  
         console.log(`Dear ${guests2[i]} you are cordially invited for a dinner`)
    
}