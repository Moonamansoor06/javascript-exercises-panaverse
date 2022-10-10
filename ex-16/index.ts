let guests22=['Kiran','Sahar','Masroor']
let deletedGuest2:string|undefined


for(let i=0;i<guests22.length;i++){
    console.log(`Dear ${guests22[i]} you are cordially invited for a dinner`)
    if(guests22[i]==='Sahar'){
        deletedGuest2='Sahar'
        }
  
}
console.log(`\n ${deletedGuest2} is not able to make it `)

for(let i=0;i<guests22.length;i++){
       if(guests22[i]==='Sahar'){
       guests22[i]='Atiya'  
      }
  
         console.log(`Dear ${guests22[i]} you are cordially invited for a dinner`)
    
}
console.log("\n I finally got a bigger dinning table so i can invite more friends \n")

guests.push('Rushda')
guests.unshift('Farheen')
let middle1=Math.round(guests.length/2)

guests.splice(middle1,0,'Sabeen')
for(let i=0;i<guests22.length;i++){
    console.log(`Dear ${guests22[i]} you are cordially invited for a dinner`)
   
  
}